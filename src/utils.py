import pdfplumber 
import os
import json
import re
import shutil
import time
import traceback
import tempfile
from datetime import datetime
from typing import List, Tuple, Optional, Dict, Any
from PyPDF2 import PdfReader, PdfWriter
import pandas as pd
from jinja2 import Template
import csv

from dotenv import load_dotenv
import nest_asyncio



from langchain_community.vectorstores import Chroma
from langchain.schema import Document


# Apply nest_asyncio to allow nested event loops
nest_asyncio.apply()

# Allowed file extensions
ALLOWED_EXTENSIONS = {'pdf'}


def create_backup_folder(src_folder: str, dest_folder: str) -> None:
    """Create backup folder with retry logic for concurrent access."""
    os.makedirs(dest_folder, exist_ok=True)
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')

    for attempt in range(5):
        try:
            dest_path = os.path.join(dest_folder, f".chromadb_{timestamp}_{attempt}")
            shutil.copytree(src_folder, dest_path)
            print(f"Backup created at: {dest_path}")
            return
        except FileExistsError:
            print(f"Backup folder {dest_path} already exists, trying another name")
            continue

    print("Warning: Could not create backup folder, proceeding without backup")


def clean_ocr_text(text: str) -> str:
    # IMPORTANT: The original empty string keys ('') are problematic.
    # They have been replaced with placeholders like 'GARBLED_CHAR_X'.
    # You MUST replace these placeholders with the *actual specific garbled characters*
    # that need to be corrected from your PDF's OCR output.
    # For example, if '◇' is misread and needs to be '6', then use: '◇': '6'.
    replacements = {
        'GARBLED_CHAR_6': '6', 'GARBLED_CHAR_5': '5', 'GARBLED_CHAR_7': '7',
        'GARBLED_CHAR_4': '4', 'GARBLED_CHAR_3': '3', 'GARBLED_CHAR_0': '0',
        'GARBLED_CHAR_9': '9', 'GARBLED_CHAR_8': '8', 'GARBLED_CHAR_1': '1',
        'GARBLED_CHAR_2': '2', 'GARBLED_EMPTY': '', 'GARBLED_DOT': '.',
        'GARBLED_ZERO_ALT': '0',
        '|': ' ',  # This replacement seems reasonable
        # '\n': ' ', # Replacing all newlines with spaces might be too aggressive depending on context.
        # Consider if this is always desired.
        # Character specific replacements (these seem more plausible)
        ' S': ' 5', ' I': ' 1', ' O': ' 0', ' B': ' 8'
        # Add more specific garbled character to correct character mappings here
    }
    # First, handle specific garbled characters
    for garbled, replacement in replacements.items():
        if not garbled.startswith('GARBLED_'):  # Apply actual replacements
            text = text.replace(garbled, replacement)

    # Replace all newline characters with spaces for LLM processing
    text = text.replace('\n', ' ')
    return text


def standardize_json_structure(prompt_str: str) -> str:
    """Standardize JSON structure in prompts to prevent parsing issues."""
    json_match = re.search(r'\{.*\}', prompt_str, re.DOTALL)
    if not json_match:
        return prompt_str

    try:
        json_template = json_match.group(0)
        fixed_template = (json_template
                          .replace('" ', '"')
                          .replace(' "', '"')
                          )
        fixed_template = re.sub(r'}\s*{', '},{', fixed_template)
        fixed_template = re.sub(r'"\s*{', '",{', fixed_template)
        return prompt_str.replace(json_template, fixed_template)
    except Exception as e:
        print(f"Warning: Could not standardize JSON in prompt: {e}")
        return prompt_str


def split_content_by_chars(content: str, char_threshold: int) -> List[str]:
    if len(content) <= char_threshold:
        return [content]
    chunks = []
    start = 0
    while start < len(content):
        end = min(start + char_threshold, len(content))
        break_point = content.rfind('\n', start, end)
        if break_point == -1 or break_point <= start:  # ensure break_point is after start
            break_point = content.rfind(' ', start, end)
        if break_point == -1 or break_point <= start:  # ensure break_point is after start
            break_point = end
        chunks.append(content[start:break_point])
        start = break_point + 1  # Move past the break character
        if start < len(content) and content[start - 1] == '\n':  # if break was newline, skip it
            pass
        elif start < len(content) and content[start - 1] == ' ':  # if break was space, skip it
            pass

    return chunks


def flatten_json_to_rows(json_data: Any) -> List[Dict[str, str]]:
    """Flatten nested JSON into a list of rows for Excel, handling various JSON structures."""
    rows: List[Dict[str, str]] = []

    if isinstance(json_data, str):
        return [{"Category": "Error", "Stage": "N/A", "Field": "Response", "Value": json_data}]

    if not isinstance(json_data, dict):
        return [{"Category": "Error", "Stage": "N/A", "Field": "Invalid JSON", "Value": str(json_data)}]

    if all(not isinstance(val, dict) for val in json_data.values()):
        for key, value in json_data.items():
            rows.append({
                "Category": "Main",
                "Stage": "N/A",
                "Field": key,
                "Value": str(value)
            })
        return rows

    for category, content in json_data.items():
        if isinstance(content, dict):
            for field, value in content.items():
                if isinstance(value, dict):
                    for subfield, subvalue in value.items():
                        rows.append({
                            "Category": str(category),
                            "Stage": str(field),
                            "Field": str(subfield),
                            "Value": str(subvalue)
                        })
                else:
                    rows.append({
                        "Category": str(category),
                        "Stage": "N/A",
                        "Field": str(field),
                        "Value": str(value)
                    })
        else:
            rows.append({
                "Category": "Summary",
                "Stage": "N/A",
                "Field": str(category),
                "Value": str(content)
            })

    return rows


def merge_json_responses(responses: List[Dict[Any, Any]]) -> Dict[Any, Any]:
    """Merge multiple JSON responses, prioritizing non-N/A values."""
    if not responses:
        return {}

    # Filter out None or non-dict responses
    valid_responses = [r for r in responses if isinstance(r, dict)]
    if not valid_responses:
        return {}
    if len(valid_responses) == 1:
        return valid_responses[0]

    merged: Dict[Any, Any] = {}

    for response in valid_responses:
        for category, content in response.items():
            if category not in merged:
                merged[category] = content
            else:
                if isinstance(content, dict) and isinstance(merged.get(category), dict):
                    current_category_data = merged[category]
                    for stage, stage_content in content.items():
                        if stage not in current_category_data:
                            current_category_data[stage] = stage_content
                        else:
                            if isinstance(stage_content, dict) and isinstance(current_category_data.get(stage), dict):
                                current_stage_data = current_category_data[stage]
                                for field, value in stage_content.items():
                                    existing_val = current_stage_data.get(field, "N/A")
                                    if (str(existing_val).strip() == "N/A" or not existing_val) and \
                                            (str(value).strip() != "N/A" and value is not None):
                                        current_stage_data[field] = value
                            elif str(current_category_data.get(stage, "N/A")).strip() == "N/A" and \
                                    (str(stage_content).strip() != "N/A" and stage_content is not None):
                                current_category_data[stage] = stage_content
                elif (str(merged.get(category, "N/A")).strip() == "N/A" or not merged.get(category)) and \
                        (str(content).strip() != "N/A" and content is not None):
                    merged[category] = content
    return merged


def count_na_values(json_data: Dict[Any, Any]) -> int:
    na_count = 0
    if not isinstance(json_data, dict):
        return 0

    for cat_value in json_data.values():
        if isinstance(cat_value, dict):
            for stage_value in cat_value.values():
                if isinstance(stage_value, dict):
                    for field_value in stage_value.values():
                        if str(field_value).strip() == "N/A":
                            na_count += 1
                elif str(stage_value).strip() == "N/A":
                    na_count += 1
        elif str(cat_value).strip() == "N/A":
            na_count += 1
    return na_count


def all_values_na(json_data: Dict[Any, Any]) -> bool:
    """Check if all values in the JSON data are 'N/A'"""
    if not isinstance(json_data, dict):  # Should not happen if parsing is correct
        return str(json_data).strip() == "N/A"

    if not json_data:  # Empty dict
        return False  # Or True, depending on definition, let's say False as no values are N/A

    if all(not isinstance(val, dict) for val in json_data.values()):
        return all(str(val).strip() == "N/A" for val in json_data.values())

    for category_content in json_data.values():
        if isinstance(category_content, dict):
            for stage_content in category_content.values():
                if isinstance(stage_content, dict):
                    for field_value in stage_content.values():
                        if str(field_value).strip() != "N/A":
                            return False
                elif str(stage_content).strip() != "N/A":
                    return False
        elif str(category_content).strip() != "N/A":
            return False
    return True


def enhance_ecl_prompt(original_prompt: str) -> str:
    """Enhance any ECL-related prompt to focus extraction on credit risk data."""
    if not original_prompt or not any(term in original_prompt.lower() for term in
                                      ["ecl", "stage", "impairment", "credit risk"]):
        return original_prompt

    # JSON structure is part of the original_prompt, no need to re-extract here.
    # The original_prompt itself is embedded in the enhanced_prompt.

    enhanced_prompt = f"""
I need to extract credit risk stage data from this financial report. Focus specifically on:

1. Tables showing loan quality or credit risk metrics
2. Sections with ECL (Expected Credit Loss) data
3. Information broken down by Stage 1, Stage 2, and Stage 3
4. Values for: ECL/provisions, gross exposures/balances, and coverage ratios

For clarity: Stage 1 is performing, Stage 2 is significantly increased risk, Stage 3 is credit-impaired.

First, scan the document for sections containing phrases like "credit quality", "loan impairment", "ECL", "credit risk" or tables with "Stage 1/2/3" headers.

{original_prompt}

IMPORTANT EXTRACTION TIPS:
- Values should be in millions (£m or $m)
- Coverage ratios are typically percentages (%)
- Look for the most recent reporting period data
- If a value is not found, use "N/A" rather than making an estimate
"""
    return enhanced_prompt



def extract_pages_with_keywords_pdfplumber(input_pdf_path: str, keywords: list, output_dir: str = None) -> str:
        """
        Extracts pages from the PDF at input_pdf_path that contain any of the keywords (case-insensitive),
        saves a new PDF with only those pages, and returns the path to the new PDF.
        """
        if output_dir is None:
            output_dir = os.path.dirname(input_pdf_path)
        output_pdf_path = os.path.join(
            output_dir,
            f"filtered_{os.path.basename(input_pdf_path)}"
        )

        matched_page_numbers = []

        with pdfplumber.open(input_pdf_path) as pdf:
            for i, page in enumerate(pdf.pages):
                text = page.extract_text() or ""
                if any(kw.lower() in text.lower() for kw in keywords):
                    matched_page_numbers.append(i)

            if not matched_page_numbers:
                print("No pages matched the keywords. Returning original file path.")
                return input_pdf_path  # No filtering done

            # Extract and save only the matched pages
            
            reader = PdfReader(input_pdf_path)
            writer = PdfWriter()
            for i in matched_page_numbers:
                writer.add_page(reader.pages[i])
            with open(output_pdf_path, "wb") as f_out:
                writer.write(f_out)

        print(f"Filtered PDF saved: {output_pdf_path} (pages: {[n+1 for n in matched_page_numbers]})")
        return output_pdf_path

def allowed_file(filename: str) -> bool:
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS



def generate_prompts( ECL_Name:str,balance_name:str,coverage_name:str,Table_Name:str,portfolios:str) -> list:
        """
        Generates prompts from the CSV file.
        """
        portfolios = portfolios.split(",")
        # Load the template from the file
        TEMPLATE_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'prompts', 'prompt_template.j2')
        
        with open(TEMPLATE_PATH) as f:
            template = Template(f.read())
            bank_data = {"ECL_Name":ECL_Name,
                      "balance_name":balance_name,
                      "coverage_name":coverage_name,
                      "Table_Name":Table_Name,
                      "portfolios":portfolios}
            
            print("-+-"*50)
            print(bank_data)
            print("-+-"*50)
            prompt = template.render(**bank_data)
        final_prompt = prompt.replace("<<","{").replace(">>","}")
        print("*"*40)
        print("final_prompt  ->", final_prompt)
        print("*"*40)
        return final_prompt


        