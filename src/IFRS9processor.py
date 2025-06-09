
import pdfplumber 
import os
import json
import re

import time
import traceback

from typing import List, Tuple, Optional, Dict, Any


import uuid

import requests
import pandas as pd
import openpyxl  # type: ignore
from dotenv import load_dotenv

from functools import partial
from io import BytesIO

from langchain_community.vectorstores import Chroma
from langchain.schema import Document

from llama_index.readers.llama_parse import LlamaParse
from LLM_models import EYQEmbeddings, EYQChat
from utils import (extract_pages_with_keywords_pdfplumber, clean_ocr_text, split_content_by_chars,
                   flatten_json_to_rows, merge_json_responses, count_na_values, all_values_na, standardize_json_structure, enhance_ecl_prompt)

# Thresholds
PAGE_THRESHOLD = 150
CHAR_THRESHOLD = 1_000_000  # Maximum characters per chunk

ENV_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "ATT27768.env")
load_dotenv(ENV_PATH)

LLAMA_PARSE_API_KEY = os.getenv("LLAMA_PARSE_API_KEY")
if not LLAMA_PARSE_API_KEY:
    raise ValueError("LLAMA_PARSE_API_KEY not found in .env file.")


EYQ_INCUBATOR_KEY = os.getenv("EYQ_INCUBATOR_KEY")
EYQ_BASE_URL = "https://eyq-incubator.europe.fabric.ey.com/eyq/eu/api"
EYQ_CHAT_MODEL = "gpt-4o"
EYQ_EMBEDDING_MODEL = "text-embedding-3-large"
EYQ_API_VERSION = "2023-05-15"
AUTH_HEADER_NAME = "api-key"
USE_BEARER = False

STAGE_KEYWORDS = os.getenv("STAGE_KEYWORDS").split(",")

# Use a relative path for the output PDF directory
NEW_PDF_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "IFRS9", "final_pdfs")

# Store processing status
processing_status: Dict[str, Dict[str, Any]] = {}

class IFRS9Processor:
    def __init__(self, embedding: EYQEmbeddings, chat_model_name: str, incubator_key: str):
        self.embedding = embedding
        self.chat_model_name = chat_model_name  # Store the model name
        self.incubator_key = incubator_key
        # self.chroma_client = Chroma( # Chroma client not used in this version of process_single_file_prompt
        #     persist_directory=PERSIST_DIRECTORY,
        #     embedding_function=embedding,
        #     collection_name='IFRS9'
        # )
        self.parser = LlamaParse(api_key=LLAMA_PARSE_API_KEY, result_type="markdown", verbose=True, gpt_4o_mode=True)
        self.total_prompts_run = 0
        self.total_successful_results = 0
        self.total_failed_results = 0

    

    def load_single_document(self, file_path: str, company_name: str, debug: bool = False,
                             retries: int = 3, delay: int = 5) -> List[Document]:
        
       
        file_path = extract_pages_with_keywords_pdfplumber(file_path, STAGE_KEYWORDS, output_dir=NEW_PDF_PATH)
     
        if not os.path.exists(file_path) or not os.access(file_path, os.R_OK):
            print(f"Error: File {file_path} does not exist or is not readable")
            return []
        for attempt in range(retries):
            try:
                print(f"Attempt {attempt + 1}/{retries}: Parsing {file_path} with LlamaParse...")
                llama_documents = self.parser.load_data(file_path)  # llama_documents is List[LlamaIndexDocument]
                if not llama_documents:
                    print(f"Warning: No content extracted from {file_path}")
                    return []

                # Convert LlamaIndex Documents to Langchain Documents
                docs: List[Document] = []
                for i, ldoc in enumerate(llama_documents):
                    # CORRECTED LINE: Use ldoc.text instead of ldoc.get_text()
                    docs.append(Document(page_content=ldoc.text,
                                         metadata={"source": os.path.basename(file_path), "page": i,
                                                   "name": company_name}))
                
                

                if debug:
                    print(f"Loaded {len(docs)} pages.")
                return docs
            except Exception as e:
                print(f"Attempt {attempt + 1}/{retries} - Error parsing {file_path}: {e}")
                print(traceback.format_exc())
                if attempt < retries - 1:
                    time.sleep(delay * (2 ** attempt))
                else:
                    print(f"Failed to parse {file_path} after {retries} attempts")
                    return []
        return []
    # create_embedding_pdf might not be needed if not using Chroma for retrieval in this flow
    # def create_embedding_pdf(self, pdf_path: str, company_name: str, debug: bool = False):
    #     ...

    def llm_extract_field(self, content: str, prompt: str) -> str:
        llm = EYQChat(
            deployment_name=self.chat_model_name,  # Use stored model name
            api_key=self.incubator_key,
            api_base=str(EYQ_BASE_URL),  # Ensure EYQ_BASE_URL is string
            api_version=str(EYQ_API_VERSION),  # Ensure EYQ_API_VERSION is string
            verbose=True
        )
        # Standardize the prompt before using it
        standardized_prompt = standardize_json_structure(prompt)

        full_prompt = (
            f"{standardized_prompt}\n\nHere is the content, please extract the information based on the prompt. Only provide the JSON output. Do not add any introductory text or explanations. \n\nFull Document Content:\n{content}\n"
            "Return ONLY the result as a JSON string. If a value is not found, use 'N/A'."
        )
        messages = [{"role": "user", "content": full_prompt}]
        return llm(messages, timeout=180)

    def process_content_chunk(self, content: str, company: str, prompt_str: str, part_name: str, debug: bool = False) -> \
    Tuple[Optional[Dict[Any, Any]], str, List[Dict[str, str]]]:
        if debug:
            print(f"Processing {part_name} for {company}: {content[:500]}...")

        json_str_response: Optional[str] = None
        llm_response_content = ""  # Initialize to prevent reference before assignment in except block
        try:
            llm_response_content = self.llm_extract_field(content, prompt_str)
            print(f"LLM response for {company} ({part_name}) (first 500 chars): {llm_response_content[:500]}...")

            json_match = re.search(r'```json\s*(.*?)\s*```', llm_response_content, re.DOTALL)
            if json_match:
                json_str_response = json_match.group(1).strip()
            else:
                # Fallback to finding the first '{' and last '}'
                start_brace = llm_response_content.find('{')
                end_brace = llm_response_content.rfind('}')
                if start_brace != -1 and end_brace != -1 and end_brace > start_brace:
                    json_str_response = llm_response_content[start_brace: end_brace + 1].strip()
                else:
                    raise ValueError("No valid JSON structure (neither ```json...``` nor {.*}) found in LLM response.")

            if json_str_response is None:  # Should be caught by ValueError above, but as a safeguard
                raise ValueError("JSON string extraction failed.")

            # Clean up potential issues like escaped newlines or quotes if necessary
            json_str_response = json_str_response.replace('\\n', '\n').replace('\\"', '"')
            # Ensure "N/A" (if meant as a string literal) is properly quoted.
            # This regex is a bit aggressive, be careful.
            # json_str_response = re.sub(r'(?<!")N/A(?!")', '"N/A"', json_str_response)

            notes_start = llm_response_content.find('**Note:') if '**Note:' in llm_response_content else len(
                llm_response_content)
            notes = llm_response_content[notes_start:].strip() if notes_start < len(
                llm_response_content) else "No notes provided"

            parsed_json_response = json.loads(json_str_response)

            if not isinstance(parsed_json_response, dict):
                raise ValueError(f"JSON response is not a dictionary: {type(parsed_json_response)}")

            flattened_data = flatten_json_to_rows(parsed_json_response)
            return parsed_json_response, notes, flattened_data

        except json.JSONDecodeError as e:
            error_message = f"JSON parsing error for {company} ({part_name}): {e}. Problematic string: '{json_str_response if json_str_response else 'Not found/extracted'}'"
            print(error_message)
            return None, f"Failed to parse JSON response: {e}", [
                {"Category": "Error", "Stage": "N/A", "Field": "JSON Parsing", "Value": error_message}]
        except Exception as e:
            error_message = f"Error processing response for {company} ({part_name}): {str(e)}. LLM Response (start): {llm_response_content[:200] if 'llm_response_content' in locals() else 'N/A'}"
            print(error_message)
            print(traceback.format_exc())
            return None, f"Error: {str(e)}", [
                {"Category": "Error", "Stage": "N/A", "Field": "Processing", "Value": error_message}]

    def process_pdf_part(self, docs: List[Document], company: str, prompt_str: str,
                         part_name: str, debug: bool = False) -> Tuple[
        Optional[Dict[Any, Any]], str, List[Dict[str, str]]]:
        full_content = "\n\n".join(doc.page_content for doc in docs)
        cleaned = clean_ocr_text(full_content)

        if len(cleaned) > CHAR_THRESHOLD:
            print(f"{company} ({part_name}) content exceeds limit ({len(cleaned)} chars), splitting into chunks...")
            chunks = split_content_by_chars(cleaned, CHAR_THRESHOLD)
            print(f"Created {len(chunks)} chunks for {company} ({part_name})")

            valid_responses_list: List[Dict[Any, Any]] = []
            valid_notes_list: List[str] = []
            all_chunk_flattened_data: List[Dict[str, str]] = []

            for i, chunk_content in enumerate(chunks):
                chunk_name = f"{part_name} Chunk {i + 1}"
                print(f"\n{'=' * 50}\nPROCESSING {chunk_name} ({len(chunk_content) // 1000}K chars)\n{'=' * 50}")
                try:
                    res_json, notes, flat_data = self.process_content_chunk(
                        chunk_content, company, prompt_str, chunk_name, debug
                    )
                    if res_json is not None:
                        na_count = count_na_values(res_json)
                        total_fields_val = sum(
                            len(stage_value) if isinstance(stage_value, dict) else 1 for cat_value in res_json.values()
                            if isinstance(cat_value, dict) for stage_value in cat_value.values()) or len(res_json)
                        print(
                            f"SUCCESS: {chunk_name} returned valid JSON with {na_count} N/A values out of {total_fields_val or 'N/A'} fields")
                        print(f"Structure: {list(res_json.keys())}")
                        valid_responses_list.append(res_json)
                        valid_notes_list.append(notes)
                        if flat_data and isinstance(flat_data, list):
                            all_chunk_flattened_data.extend(flat_data)
                    else:
                        print(f"FAILURE: {chunk_name} did not return valid JSON. Notes: {notes}")
                        if flat_data and isinstance(flat_data, list):  # still collect error data
                            all_chunk_flattened_data.extend(flat_data)

                except Exception as e:
                    print(f"ERROR processing {chunk_name}: {e}")
                    print(traceback.format_exc())

            if not valid_responses_list:
                print(f"No valid responses from any chunk in {part_name}")
                # Return all collected (error) data from chunks if no valid JSON was produced from any.
                return None, f"All chunks failed to produce valid JSON for {part_name}", all_chunk_flattened_data or [
                    {"Category": "Error", "Stage": "N/A", "Field": "N/A",
                     "Value": "No valid data extracted from chunks"}]

            merged_response = merge_json_responses(valid_responses_list)
            combined_notes = "\n\n".join([f"--- Notes from {part_name} Chunk {idx + 1} ---\n{n}"
                                          for idx, n in enumerate(valid_notes_list)])

            final_flattened_data = flatten_json_to_rows(
                merged_response) if merged_response else all_chunk_flattened_data

            print(f"Successfully processed {len(valid_responses_list)} responses for {part_name}")
            return merged_response, combined_notes, final_flattened_data
        else:
            return self.process_content_chunk(cleaned, company, prompt_str, part_name, debug)

    def find_relevant_sections(self, docs: List[Document]) -> List[List[Document]]:
        keywords = [
            "credit risk", "expected credit loss", "ecl", "loan impairment",
            "stage 1", "stage 2", "stage 3", "provision", "credit quality",
            "coverage ratio", "loan to value", "ltv", "impairment allowance",
            "credit-impaired", "performing", "non-performing", "significant increase"
        ]
        keyword_pages_indices: List[int] = []
        keyword_found_info: Dict[int, List[str]] = {}

        for i, doc in enumerate(docs):
            content_lower = doc.page_content.lower()
            found_on_page = [kw for kw in keywords if kw in content_lower]
            if found_on_page:
                keyword_pages_indices.append(i)
                keyword_found_info[i] = found_on_page

        section_chunks: List[List[Document]] = []
        if not keyword_pages_indices:
            print("No specific ECL content found by keywords - creating standard chunks")
            chunk_size = max(1, len(docs) // 10) if len(docs) > 0 else 1
            if len(docs) == 0: return []
            for i in range(0, len(docs), chunk_size):
                section_chunks.append(docs[i: i + chunk_size])
            return section_chunks

        print(f"Found {len(keyword_pages_indices)} pages with ECL-related content: {sorted(keyword_pages_indices)}")

        page_groups: List[List[int]] = []
        if keyword_pages_indices:  # Should always be true if we are in this block
            current_group = [keyword_pages_indices[0]]
            for i in range(1, len(keyword_pages_indices)):
                if keyword_pages_indices[i] <= current_group[-1] + 3:  # Group if pages are consecutive or close
                    current_group.append(keyword_pages_indices[i])
                else:
                    page_groups.append(current_group)
                    current_group = [keyword_pages_indices[i]]
            if current_group:
                page_groups.append(current_group)

        context_size = 2
        for group in page_groups:
            group_start_page = min(group)
            group_end_page = max(group)
            chunk_start_index = max(0, group_start_page - context_size)
            chunk_end_index = min(len(docs), group_end_page + context_size + 1)
            section_chunks.append(docs[chunk_start_index:chunk_end_index])

        return section_chunks

    def process_single_file_prompt(self, file_path: str, company: str, prompt_template: str,
                                   prompt_name: str, session_id: str, debug: bool = False):
        """Process a single file with a single prompt."""
        try:
            if session_id in processing_status:
                processing_status[session_id]['current_file'] = os.path.basename(file_path)
                processing_status[session_id]['current_prompt'] = prompt_name
                processing_status[session_id]['step'] = f'Processing {prompt_name} from {os.path.basename(file_path)}'

            docs = self.load_single_document(file_path, company, debug=debug)
            if not docs:
                return {"status": "error", "error": "Failed to load document", "data": [],
                        "notes": "Could not parse PDF file"}

            num_pages = len(docs)
            print(f"PDF for {company} has {num_pages} pages")

            current_prompt_template = prompt_template
            if "ecl" in prompt_name.lower() or "stage" in prompt_name.lower():
                current_prompt_template = enhance_ecl_prompt(prompt_template)

            final_json_response: Optional[Dict[Any, Any]] = None
            final_notes: str = ""
            final_flattened_data: List[Dict[str, str]] = []

            if num_pages >= PAGE_THRESHOLD:
                print(f"Document has {num_pages} pages, exceeding threshold {PAGE_THRESHOLD}. Using chunking.")
                parts: List[List[Document]]
                if "ecl" in prompt_name.lower() or "stage" in prompt_name.lower() or (
                "credit" in current_prompt_template.lower() if isinstance(current_prompt_template, str) else False):
                    print(f"Using ECL-targeted document chunking for {company} ({num_pages} pages)")
                    parts = self.find_relevant_sections(docs)
                else:
                    chunk_size = num_pages // 10 if num_pages > 200 else num_pages // 3
                    chunk_size = max(1, chunk_size)
                    parts = [docs[i: i + chunk_size] for i in range(0, num_pages, chunk_size)]

                if not parts:
                    parts = [docs]
                    print("Warning: Chunking resulted in no parts. Processing document as a single part.")

                all_part_json_responses: List[Dict[Any, Any]] = []
                all_part_notes: List[str] = []
                # aggregated_flattened_data stores data from all chunks, successful or not, for potential partial results
                aggregated_flattened_data: List[Dict[str, str]] = []

                for i, part_docs in enumerate(parts):
                    part_name = f"Part {i + 1}/{len(parts)}"
                    json_response, notes, flattened_data_chunk = self.process_pdf_part(
                        part_docs, company, current_prompt_template, part_name, debug=debug  # Pass debug
                    )
                    if json_response:  # if json_response is a dict and not None
                        all_part_json_responses.append(json_response)
                    # Always collect notes and flattened_data, even if json_response is None (e.g. error from chunk)
                    all_part_notes.append(f"--- Notes from {part_name} ---\n{notes}")
                    if flattened_data_chunk:
                        aggregated_flattened_data.extend(d for d in flattened_data_chunk if isinstance(d, dict))

                if all_part_json_responses:  # If at least one part yielded a valid JSON response
                    final_json_response = merge_json_responses(all_part_json_responses)
                    final_notes = "\n\n".join(all_part_notes)
                    final_flattened_data = flatten_json_to_rows(
                        final_json_response) if final_json_response else aggregated_flattened_data
                else:
                    final_notes = "Failed to extract valid JSON data from any part of the document.\n" + "\n\n".join(
                        all_part_notes)
                    final_flattened_data = aggregated_flattened_data
            else:
                print(f"Document has {num_pages} pages. Processing as a single unit.")
                full_content = "\n\n".join([doc.page_content for doc in docs])
                cleaned_content = clean_ocr_text(full_content)
                final_json_response, final_notes, final_flattened_data = self.process_content_chunk(
                    cleaned_content, company, current_prompt_template, "Full Content", debug=debug  # Pass debug
                )

            if final_json_response and not all_values_na(final_json_response):
                return {"status": "success", "data": final_flattened_data, "notes": final_notes}
            elif final_json_response and all_values_na(final_json_response):  # Has JSON but all values are "N/A"
                return {"status": "error", "error": "All extracted values are 'N/A'", "data": final_flattened_data,
                        "notes": final_notes + "\nExtraction likely failed - all values returned as N/A"}
            else:  # No JSON response at all or other failure (final_json_response is None)
                # Ensure final_flattened_data is at least an empty list if it's None
                return {"status": "error", "error": "Extraction failed to produce valid JSON",
                        "data": final_flattened_data if final_flattened_data is not None else [], "notes": final_notes}

        except Exception as e:
            print(f"Critical Error in process_single_file_prompt for {company}, prompt {prompt_name}: {str(e)}")
            print(traceback.format_exc())
            return {"status": "error", "error": str(e), "data": [],
                    "notes": f"Error: {str(e)}\n{traceback.format_exc()}"}

