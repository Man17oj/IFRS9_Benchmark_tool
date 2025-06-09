# Benchmark Tool

A robust, modular tool for extracting, processing, and analyzing financial document data using LLMs and custom pipelines. Built with Flask, LangChain, LlamaIndex, and modern Python best practices.

---

## 🚀 1. Getting Started

### Prerequisites

- **Python 3.10+** (recommended)
- **pip** (Python package manager)
- **Node.js & npm** (for frontend, if applicable)
- **Git** (optional, for cloning)

### Setup Steps

#### 1. Clone the Repository

```sh
git clone https://your-repo-url.git
cd benchmark_tool
```

#### 2. Create and Activate a Virtual Environment

```sh
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate
```

#### 3. Install Python Dependencies

```sh
pip install -r requirements.txt
```

#### 4. Set Up Environment Variables

- Copy the provided `.env.example` to `.env` (or create `ATT27768.env` as referenced in code).
- Fill in required API keys and configuration:

```
LLAMA_PARSE_API_KEY=your_llama_parse_key
EYQ_INCUBATOR_KEY=your_eyq_key
STAGE_KEYWORDS=stage 1,stage 2,stage 3
PDF_OUTPUT_DIR=absolute\or\relative\path\to\output
PROMPT_CSV_FILENAME=EY_FinSight_Prompts3.csv
```

#### 5. Prepare Data Folders

- Ensure the following folders exist (create if missing):
  - `prompts/` (for prompt CSVs)
  - `IFRS9/final_pdfs/` (for processed PDFs)
  - `uploads/` (for file uploads)

---

## 📁 2. Folder Structure

```
benchmark_tool/
│
├── src/
│   ├── app.py                  # Flask app entry point
│   ├── api_routes.py           # All API endpoints
│   ├── IFRS9processor.py       # Main document processing logic
│   ├── LLM_models.py           # LLM and embedding model classes
│   ├── utils.py                # Utility/helper functions
│   ├── prompts.py              # Prompt loading and management
│   └── ...                     # Other modules
│
├── prompts/
│   └── EY_FinSight_Prompts3.csv   # Prompt templates (CSV)
│
├── IFRS9/
│   └── final_pdfs/                # Output PDFs after processing
│
├── uploads/                       # Uploaded files (runtime)
│
├── requirements.txt               # Python dependencies
├── ATT27768.env                   # Environment variables (not committed)
├── README.md                      # This documentation
└── ...                            # Frontend (if present), tests, etc.
```

### Key Files & Folders

- **src/app.py**: Starts the Flask backend.
- **src/api_routes.py**: All REST API endpoints.
- **src/IFRS9processor.py**: Main class for PDF and data processing.
- **src/LLM_models.py**: LLM and embedding model wrappers.
- **src/utils.py**: Shared utility functions.
- **prompts/**: Stores prompt templates as CSVs.
- **IFRS9/final_pdfs/**: Output directory for processed PDFs.
- **uploads/**: Temporary storage for uploaded files.
- **ATT27768.env**: Your environment variables (never commit secrets!).

---

## 🖥️ 3. Running the Project

### Backend (Flask API)

1. **Activate your virtual environment** (if not already):

   ```sh
   # Windows
   venv\Scripts\activate
   # Mac/Linux
   source venv/bin/activate
   ```

2. **Run the Flask server:**

   ```sh
   cd src
   python api_routes.py
   ```

   The API will be available at [http://localhost:5000](http://localhost:5000).

### Frontend

> **If you have a frontend (React, Vue, etc.), include these steps. Otherwise, remove this section.**

1. **Navigate to the frontend directory:**

   ```sh
   cd dataextract-ey-main
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the frontend server:**

   ```sh
   npm run dev
   ```

   The frontend will be available at [http://localhost:3000](http://localhost:3000).

---

## 🛠️ 4. Customization & Configuration

- **Environment Variables:**  
  All sensitive and environment-specific settings (API keys, output folders, keywords, etc.) are managed via the `.env` file.
- **Prompt Templates:**  
  Add or edit prompt CSVs in the `prompts/` folder.
- **Output Directory:**  
  Change `PDF_OUTPUT_DIR` in your `.env` to control where processed PDFs are saved.
- **Stage Keywords:**  
  Edit `STAGE_KEYWORDS` in your `.env` to adjust which PDF sections are extracted.

---

## 🧪 5. Testing

> *(Add details if you have tests. Example:)*

```sh
pytest
```

---

