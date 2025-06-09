

import os
import json
import re
import shutil
import time
import traceback
import tempfile
from datetime import datetime
from typing import List, Tuple, Optional, Dict, Any
from werkzeug.utils import secure_filename
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import uuid
import pandas as pd
from LLM_models import EYQEmbeddings
from IFRS9processor import IFRS9Processor
from io import BytesIO
from utils import allowed_file,generate_prompts

# Store processing status
processing_status: Dict[str, Dict[str, Any]] = {}


from langchain_community.vectorstores import Chroma
from langchain.schema import Document


# Use temporary directories for web server
TEMP_DIR = tempfile.gettempdir()
PERSIST_DIRECTORY = os.path.join(TEMP_DIR, 'ifrs9_chroma')
UPLOAD_FOLDER = os.path.join(TEMP_DIR, 'ifrs9_uploads')
OUTPUT_DIRECTORY = os.path.join(TEMP_DIR, 'ifrs9_outputs')
BACKUP_FOLDER = os.path.join(TEMP_DIR, 'ifrs9_backup')


EYQ_INCUBATOR_KEY = os.getenv("EYQ_INCUBATOR_KEY")
EYQ_BASE_URL = "https://eyq-incubator.europe.fabric.ey.com/eyq/eu/api"
EYQ_CHAT_MODEL = "gpt-4o"
EYQ_EMBEDDING_MODEL = "text-embedding-3-large"
EYQ_API_VERSION = "2023-05-15"
AUTH_HEADER_NAME = "api-key"
USE_BEARER = False
PROMPT_CSV_FILENAME = os.getenv("PROMPT_CSV_FILENAME")
# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication



@app.route('/api/health', methods=['GET'])
def health_check() -> Any:
    """Health check endpoint."""
    return jsonify({
        "status": "healthy",
        "service": "IFRS9 Data Extraction API",
        "version": "1.0.0"
    })


@app.route('/api/upload', methods=['POST'])
def upload_files_route() -> Any:
    """Handle file uploads."""
    try:
        if 'files' not in request.files:
            return jsonify({"error": "No files provided"}), 400

        received_files = request.files.getlist('files')
        uploaded_file_metadata_list = []

        for file_storage in received_files:
            if file_storage and file_storage.filename and allowed_file(file_storage.filename):
                filename = secure_filename(file_storage.filename)
                unique_filename = f"{uuid.uuid4()}_{filename}"
                filepath = os.path.join(UPLOAD_FOLDER, unique_filename)
                file_storage.save(filepath)

                file_stats = os.stat(filepath)
                uploaded_file_metadata_list.append({
                    "id": unique_filename,
                    "name": filename,
                    "size": file_stats.st_size,
                    "type": file_storage.mimetype or "application/octet-stream",
                    "lastModified": int(file_stats.st_mtime * 1000),
                    "status": "success",
                    "progress": 100
                })
            else:
                error_msg = f"File {file_storage.filename if file_storage.filename else 'Unknown'} not allowed or has no name."
                print(error_msg)

        if not uploaded_file_metadata_list and received_files:
            return jsonify({"error": "No valid files were uploaded (check extensions or filenames)."}), 400
        elif not received_files:
            return jsonify({"error": "No files received in the request."}), 400

        return jsonify({
            "status": "success",
            "files": uploaded_file_metadata_list
        })

    except Exception as e:
        print(traceback.format_exc())
        return jsonify({"error": str(e), "trace": traceback.format_exc()}), 500


@app.route('/api/process', methods=['POST'])
def process_files_route() -> Any:
    """Process files with selected prompts."""
    session_id = "default_session"
    try:
        data = request.json
        if not data:
            return jsonify({"error": "Request data is missing or not JSON"}), 400

        files_to_process = data.get('files', [])
        prompts_to_use = data.get('prompts', [])
        session_id = data.get('sessionId', str(uuid.uuid4()))

        if not files_to_process or not prompts_to_use:
            return jsonify({"error": "Files and prompts are required"}), 400

        processing_status[session_id] = {
            "status": "processing", "progress": 0, "step": "Initializing...",
            "total_items": len(files_to_process) * len(prompts_to_use),
            "completed_items": 0, "results": []
        }

        embedding_instance = EYQEmbeddings(
            model=EYQ_EMBEDDING_MODEL, api_key=str(EYQ_INCUBATOR_KEY), api_base=str(EYQ_BASE_URL),
            api_version=str(EYQ_API_VERSION), auth_header_name=AUTH_HEADER_NAME, use_bearer=USE_BEARER
        )
        processor_instance = IFRS9Processor(embedding_instance, str(EYQ_CHAT_MODEL), str(EYQ_INCUBATOR_KEY))

        current_results = []
        completed_count = 0

        for file_info in files_to_process:
            file_id = file_info.get('id')
            original_file_name = file_info.get('name', 'UnknownFile.pdf')

            if not file_id:
                print(f"Warning: File info missing 'id': {file_info}")
                for _ in prompts_to_use:  # Account for skipped prompts
                    completed_count += 1
                processing_status[session_id]['completed_items'] = completed_count
                processing_status[session_id]['progress'] = int(
                    (completed_count / processing_status[session_id]['total_items']) * 100) if \
                processing_status[session_id]['total_items'] > 0 else 0
                # Add error result for this file
                error_result_for_file = {
                    "id": f"result-file-error-{uuid.uuid4()}", "fileId": "N/A", "fileName": original_file_name,
                    "promptId": "N/A", "promptName": "File Error", "status": "error",
                    "timestamp": datetime.now().isoformat(), "data": [], "notes": "File ID missing, cannot process.",
                    "error": "File ID missing in request."
                }
                current_results.append(error_result_for_file)
                processing_status[session_id]['results'].append(error_result_for_file)
                continue

            file_path = os.path.join(UPLOAD_FOLDER, file_id)

            if not os.path.exists(file_path):
                print(
                    f"Error: File {file_path} (id: {file_id}, original name: {original_file_name}) not found on server for processing.")
                for prompt_info_skip in prompts_to_use:
                    completed_count += 1
                    error_result = {
                        "id": f"result-{uuid.uuid4()}", "fileId": file_id, "fileName": original_file_name,
                        "promptId": prompt_info_skip.get('id', 'N/A'),
                        "promptName": prompt_info_skip.get('name', 'N/A'), "status": "error",
                        "timestamp": datetime.now().isoformat(), "data": [], "notes": "",
                        "error": f"File {original_file_name} (id: {file_id}) not found on server."
                    }
                    current_results.append(error_result)
                    processing_status[session_id]['results'].append(error_result)

                processing_status[session_id]['completed_items'] = completed_count
                processing_status[session_id]['progress'] = int(
                    (completed_count / processing_status[session_id]['total_items']) * 100) if \
                processing_status[session_id]['total_items'] > 0 else 0
                continue

            for prompt_info in prompts_to_use:
                completed_count += 1
                processing_status[session_id][
                    'step'] = f"Extracting {prompt_info['name']} from {original_file_name} ({completed_count}/{processing_status[session_id]['total_items']})"
                processing_status[session_id]['progress'] = int(
                    (completed_count / processing_status[session_id]['total_items']) * 100) if \
                processing_status[session_id]['total_items'] > 0 else 0

                result_data = processor_instance.process_single_file_prompt(
                    file_path,
                    original_file_name.replace('.pdf', ''),
                    prompt_info.get('template', prompt_info['name']),
                    prompt_info['name'],
                    session_id,
                    debug=True
                )

                single_processing_result = {
                    "id": f"result-{uuid.uuid4()}", "fileId": file_id, "fileName": original_file_name,
                    "promptId": prompt_info.get('id', 'N/A'), "promptName": prompt_info['name'],
                    "status": result_data['status'], "timestamp": datetime.now().isoformat(),
                    "data": result_data.get('data', []), "notes": result_data.get('notes', ''),
                    "error": result_data.get('error', None)
                }
                current_results.append(single_processing_result)
                processing_status[session_id]['results'].append(single_processing_result)
                processing_status[session_id]['completed_items'] = completed_count
                print(f"Finished: {processing_status[session_id]['step']} - Status: {result_data['status']}")

        processing_status[session_id]['status'] = 'complete'
        processing_status[session_id]['progress'] = 100
        processing_status[session_id]['step'] = 'Processing complete'
        print("Processing complete for session:", session_id)

        return jsonify({"status": "success", "sessionId": session_id, "results": current_results})

    except Exception as e:
        print(traceback.format_exc())
        if session_id in processing_status:
            processing_status[session_id]['status'] = 'error'
            processing_status[session_id]['step'] = f'Critical Error: {str(e)}'
        return jsonify({"error": str(e), "trace": traceback.format_exc()}), 500


@app.route('/api/status/<session_id>', methods=['GET'])
def get_processing_status(session_id: str) -> Any:
    """Get processing status for a session."""
    if session_id not in processing_status:
        return jsonify({"error": "Session not found"}), 404
    return jsonify(processing_status[session_id])


@app.route('/api/download/<session_id>', methods=['GET'])
def download_results(session_id: str) -> Any:
    """Download results as Excel file."""
    try:
        if session_id not in processing_status or 'results' not in processing_status[session_id]:
            return jsonify({"error": "Session or results not found"}), 404

        results_list = processing_status[session_id]['results']
        if not results_list:
            return jsonify({"error": "No results to download for this session"}), 400

        output_buffer = BytesIO()
        with pd.ExcelWriter(output_buffer, engine='openpyxl') as writer:
            summary_data_for_df = []
            combined_data_for_df = []

            for res in results_list:
                summary_data_for_df.append({
                    "File": res.get('fileName', 'N/A'), "Prompt": res.get('promptName', 'N/A'),
                    "Status": res.get('status', 'N/A'), "Timestamp": res.get('timestamp', 'N/A'),
                    "Error": res.get('error', '')
                })
                if res.get('status') == 'success' and res.get('data'):
                    for item in res['data']:
                        combined_data_for_df.append({
                            "Category": item.get('Category', 'N/A'), "Stage": item.get('Stage', 'N/A'),
                            "Field": item.get('Field', 'N/A'), "Value": item.get('Value', 'N/A'),
                            "Source": f"{res.get('fileName', 'N/A')} - {res.get('promptName', 'N/A')}"
                        })

            pd.DataFrame(summary_data_for_df).to_excel(writer, sheet_name="Summary", index=False)
            if combined_data_for_df:
                pd.DataFrame(combined_data_for_df).to_excel(writer, sheet_name="Combined Results", index=False)
            else:
                pd.DataFrame([{"Message": "No successful data to display"}]).to_excel(writer,
                                                                                      sheet_name="Combined Results",
                                                                                      index=False)

        output_buffer.seek(0)
        timestamp_str = datetime.now().strftime('%Y%m%d_%H%M%S')
        filename = f"IFRS9_Results_{session_id}_{timestamp_str}.xlsx"
        return send_file(
            output_buffer,
            mimetype='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            as_attachment=True, download_name=filename
        )
    except Exception as e:
        print(traceback.format_exc())
        return jsonify({"error": str(e), "trace": traceback.format_exc()}), 500


@app.route('/api/prompts/load', methods=['POST'])
def load_prompts_from_excel_route() -> Any:
    """Load prompts from Excel file."""
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file provided"}), 400

        file_storage = request.files['file']
        if not file_storage or not file_storage.filename or not file_storage.filename.endswith(('.xlsx', '.xls')):
            return jsonify({"error": "Invalid file format. Please upload .xlsx or .xls"}), 400

        df = pd.read_excel(file_storage)
        required_columns = ['Bank', 'PromptName', 'PromptText']
        if not all(col in df.columns for col in required_columns):
            missing = [col for col in required_columns if col not in df.columns]
            return jsonify({"error": f"Missing required columns: {', '.join(missing)}"}), 400

        bank_filter = request.form.get('bank')
        if not bank_filter:
            return jsonify({"error": "Bank name not provided in form data"}), 400

        bank_prompts_df = df[df['Bank'].str.lower() == bank_filter.lower()]

        loaded_prompts = []
        for _, row in bank_prompts_df.iterrows():
            loaded_prompts.append({
                "id": f"custom-{uuid.uuid4()}", "name": row['PromptName'],
                "description": f"Custom prompt for {row['Bank']}",
                "template": row['PromptText'], "category": row.get('Category', "Custom")
            })

        if not loaded_prompts:
            return jsonify({"status": "success", "prompts": [], "message": f"No prompts found for bank: {bank_filter}"})

        return jsonify({"status": "success", "prompts": loaded_prompts})
    except Exception as e:
        print(traceback.format_exc())
        return jsonify({"error": str(e), "trace": traceback.format_exc()}), 500


@app.route('/api/prompts/default/<bank_name>', methods=['GET'])
def get_default_prompts(bank_name: str) -> Any:
    """Get default prompts for a specific bank by loading from EY_FinSight_Prompts3.csv."""
    csv_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "prompts", PROMPT_CSV_FILENAME)
    # print("*"*60)
    # print("csv_path -> ",csv_path)
    # print("*"*60)
    prompts_list = []
    df = None  # Initialize df to None

    try:
        # Attempt to read with UTF-8 first
        try:
            df = pd.read_csv(csv_path, encoding='utf-8')  #
        except UnicodeDecodeError:
            print(f"UTF-8 decoding failed for {csv_path}. Trying 'latin1' encoding.")
            # Fallback to 'latin1' (ISO-8859-1) which is common for such characters
            df = pd.read_csv(csv_path, encoding='latin1')  #
        except Exception as e:  # Catch other potential pandas read errors
            raise e  # Re-raise other read errors to be caught by the outer try-except

        # Ensure case-insensitive comparison for bank_name
        bank_specific_prompts = df[df['Bank'].astype(str).str.lower() == bank_name.lower()]  #

        if not bank_specific_prompts.empty:
            for _, row in bank_specific_prompts.iterrows():  #
                prompts_list.append({
                    "id": f"default-{str(row.get('Bank', 'UnkBank')).lower().replace(' ', '-')}-{str(row['PromptName']).lower().replace(' ', '-')}-{uuid.uuid4().hex[:4]}",
                    "name": str(row['PromptName']),
                    "bankName": str(row['Bank']),  # <<--- ADD THIS LINE TO INCLUDE THE BANK NAME
                    "description": f"Default prompt for {row.get('Bank', bank_name)}: {row.get('PromptName', '')}",
                    "template": generate_prompts(str(row["ECL_Name"]),str(row["balance_name"]),str(row["coverage_name"]),str(row["Table_Name"]), str(row["portfolios"])), 
                    "category": str(row.get('Category', "Default Prompts"))
                    # Changed "Default" to "Default Prompts" for clarity
                })
        print("*"*90)
        print("prompts_list ---> ", prompts_list)
        print("*"*90)
        if not prompts_list:
            return jsonify({"status": "success", "prompts": [],
                            "message": f"No default prompts configured for bank: {bank_name} in the CSV."})

        return jsonify({"status": "success", "prompts": prompts_list})

    except FileNotFoundError:
        print(f"Prompt CSV file not found at {csv_path}")
        return jsonify({"error": "Prompt configuration file (CSV) not found on server."}), 500
    except Exception as e:
        print(f"Error loading default prompts for {bank_name} from CSV: {e}")
        print(traceback.format_exc())
        return jsonify({"error": f"Could not load default prompts from CSV: {str(e)}"}), 500

@app.route('/api/cleanup/<session_id>', methods=['DELETE'])
def cleanup_session(session_id: str) -> Any:
    """Clean up session data and temporary files."""
    try:
        if session_id in processing_status:
            results_to_clean = processing_status[session_id].get('results', [])
            for result_info in results_to_clean:
                file_id_to_clean = result_info.get('fileId')
                if file_id_to_clean:
                    file_path_to_clean = os.path.join(UPLOAD_FOLDER, file_id_to_clean)
                    if os.path.exists(file_path_to_clean):
                        try:
                            os.remove(file_path_to_clean)
                            print(f"Cleaned up uploaded file: {file_path_to_clean}")
                        except OSError as e_os:
                            print(f"Error deleting file {file_path_to_clean}: {e_os}")
            del processing_status[session_id]

        return jsonify({"status": "success", "message": f"Session {session_id} cleaned up."})
    except Exception as e:
        print(traceback.format_exc())
        return jsonify({"error": str(e), "trace": traceback.format_exc()}), 500


# =============================================================================
# Error Handlers
# =============================================================================

@app.errorhandler(404)
def not_found(error: Any) -> Any:
    return jsonify({"error": "Endpoint not found", "details": str(error)}), 404


@app.errorhandler(500)
def internal_error(error: Any) -> Any:
    print(traceback.format_exc())
    return jsonify({"error": "Internal server error", "details": str(error)}), 500


# =============================================================================
# Main Entry Point
# =============================================================================

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True,  # Keep debug mode for error messages
        threaded=True,
        use_reloader=False  # Add this line to disable the reloader
    )