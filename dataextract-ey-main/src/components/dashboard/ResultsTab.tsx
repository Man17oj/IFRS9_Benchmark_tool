// src/components/dashboard/ResultsTab.tsx

import ResultsViewer from '@/components/ResultsViewer'; //
import { ProcessingResult } from '@/lib/types'; //

// Define or update ResultsTabProps here
export interface ResultsTabProps {
  results: ProcessingResult[];
  onDownloadResults: () => void;
  isProcessing: boolean;
  processingProgress: number;
  processingStep: string;
  selectedBank: string;         // <-- ENSURE THIS LINE IS PRESENT
  totalUploadedFiles: number; 
}

const ResultsTab = ({ 
  results, 
  onDownloadResults, 
  isProcessing, 
  processingProgress, 
  processingStep,
  selectedBank,
  totalUploadedFiles 
}: ResultsTabProps) => {
  
  const uniqueFileIdsInResults = new Set(results.map(r => r.fileId));
  const totalFilesToDisplay = isProcessing ? Math.max(1, totalUploadedFiles) : uniqueFileIdsInResults.size;
  const processedFilesCount = results.filter(r => r.status === 'success' || r.status === 'error').length;
  
  return (
    <ResultsViewer 
      results={results}
      onDownloadResults={onDownloadResults}
      isProcessing={isProcessing}
      processingProgress={processingProgress}
      processingStep={processingStep}
      totalFiles={totalFilesToDisplay} 
      processedFiles={processedFilesCount}
      selectedBank={selectedBank} // Pass it down
    />
  );
};

export default ResultsTab;