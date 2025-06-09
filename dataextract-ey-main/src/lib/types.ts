// src/lib/types.ts

export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  lastModified: number;
  status: 'pending' | 'processing' | 'success' | 'error';
  progress?: number;
}

export interface PromptOption {
  id: string;
  name: string;
  description: string;
  template: string;
  category: string;
  bankName?: string; // <-- ENSURE THIS LINE IS PRESENT AND CORRECT
}

export interface ExtractedData {
  Category: string;
  Stage: string;
  Field: string;
  Value: string;
}

export interface ProcessingResult {
  id: string;
  fileId: string;
  fileName: string;
  promptId: string;
  promptName: string;
  status: 'pending' | 'processing' | 'success' | 'error';
  timestamp: string;
  data?: ExtractedData[];
  notes?: string;
  error?: string;
}