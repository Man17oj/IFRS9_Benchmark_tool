
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UploadedFile, PromptOption, ProcessingResult } from '@/lib/types';
import { Button } from '@/components/ui/button';
import FileUploader from '@/components/FileUploader';
import PromptSelector from '@/components/PromptSelector';
import ResultsViewer from '@/components/ResultsViewer';
import { useToast } from '@/hooks/use-toast';
import { Download, Upload, FileText, FileSpreadsheet } from 'lucide-react';
import { generateRealisticResults } from '@/lib/excelUtils';

const Index = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [selectedPrompts, setSelectedPrompts] = useState<PromptOption[]>([]);
  const [results, setResults] = useState<ProcessingResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const [processingProgress, setProcessingProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('upload');
  const { toast } = useToast();

  // Handle uploaded files
  const handleFilesUploaded = (files: UploadedFile[]) => {
    setUploadedFiles(files);
  };

  // Handle prompt selection
  const handlePromptSelected = (prompts: PromptOption[]) => {
    setSelectedPrompts(prompts);
    if (prompts.length > 0) {
      toast({
        title: "Prompts Selected",
        description: `${prompts.length} extraction ${prompts.length === 1 ? 'prompt' : 'prompts'} selected`,
      });
    }
  };

  // Simulate the processing function
  const processFiles = async () => {
    if (uploadedFiles.length === 0) {
      toast({
        title: "No files to process",
        description: "Please upload at least one PDF file.",
        variant: "destructive",
      });
      return;
    }

    if (selectedPrompts.length === 0) {
      toast({
        title: "No prompts selected",
        description: "Please select at least one extraction prompt.",
        variant: "destructive",
      });
      return;
    }

    // Start processing
    setIsProcessing(true);
    setProcessingStep('Initializing extraction process...');
    setProcessingProgress(5);
    setActiveTab('results');

    const newResults: ProcessingResult[] = [];

    // Simulate processing for each file and prompt
    let completedItems = 0;
    const totalItems = uploadedFiles.length * selectedPrompts.length;

    for (const file of uploadedFiles) {
      // Simulate parsing the file
      setProcessingStep(`Parsing ${file.name}...`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProcessingProgress(10 + (completedItems / totalItems) * 30);

      // For each prompt, create a result
      for (const prompt of selectedPrompts) {
        setProcessingStep(`Extracting ${prompt.name} from ${file.name}...`);
        
        // Simulate API request delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Create a result with either success or random error
        const isSuccess = Math.random() > 0.05; // 95% success rate for demo
        
        const result: ProcessingResult = {
          id: `result-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          fileId: file.id,
          fileName: file.name,
          promptId: prompt.id,
          promptName: prompt.name,
          status: isSuccess ? 'success' : 'error',
          timestamp: new Date().toISOString(),
          data: isSuccess ? generateRealisticResults(prompt.name) : undefined,
          notes: isSuccess 
            ? `Extraction completed successfully for ${prompt.name}.` 
            : undefined,
          error: isSuccess 
            ? undefined 
            : "Could not find relevant information in the document or the format was not recognized."
        };
        
        newResults.push(result);
        completedItems++;
        setProcessingProgress(10 + (completedItems / totalItems) * 80);
      }
    }

    // Final processing step
    setProcessingStep('Finalizing results...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProcessingProgress(100);

    // Update results and finish processing
    setResults([...results, ...newResults]);
    setIsProcessing(false);
    
    toast({
      title: "Processing Complete",
      description: `Processed ${uploadedFiles.length} files with ${selectedPrompts.length} prompts`,
      variant: "default",
    });
  };

  // Simulate downloading results
  const handleDownloadResults = () => {
    toast({
      title: "Downloading Results",
      description: "Your results would download as an Excel file in a real implementation.",
    });
  };

  // Reset everything
  const handleReset = () => {
    setUploadedFiles([]);
    setSelectedPrompts([]);
    setResults([]);
    setActiveTab('upload');
    toast({
      title: "Reset Complete",
      description: "All files and prompts have been cleared.",
    });
  };

  // Navigate to the next tab
  const goToNextTab = () => {
    if (activeTab === 'upload') setActiveTab('prompts');
    else if (activeTab === 'prompts') {
      processFiles();
    }
  };

  // Go back to previous tab
  const goToPreviousTab = () => {
    if (activeTab === 'prompts') setActiveTab('upload');
    else if (activeTab === 'results') setActiveTab('prompts');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Tabs header */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto my-4">
              <TabsTrigger 
                value="upload" 
                className={activeTab === 'upload' ? 'bg-yellow-400 text-black' : ''}
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </TabsTrigger>
              <TabsTrigger 
                value="prompts" 
                className={activeTab === 'prompts' ? 'bg-yellow-400 text-black' : ''}
              >
                <FileText className="h-4 w-4 mr-2" />
                Prompts
              </TabsTrigger>
              <TabsTrigger 
                value="results" 
                className={activeTab === 'results' ? 'bg-yellow-400 text-black' : ''}
              >
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                Results
              </TabsTrigger>
              <TabsTrigger 
                value="combined" 
                className={activeTab === 'combined' ? 'bg-yellow-400 text-black' : ''}
              >
                <Download className="h-4 w-4 mr-2" />
                Combined
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <Tabs value={activeTab}>
          {/* Upload Tab */}
          <TabsContent value="upload" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <FileUploader 
                onFilesUploaded={handleFilesUploaded}
                acceptedFileTypes={['.pdf']}
              />
              
              <div className="flex justify-end">
                <Button 
                  onClick={goToNextTab} 
                  disabled={uploadedFiles.length === 0}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black"
                >
                  Next: Select Prompts
                </Button>
              </div>
            </div>
          </TabsContent>
          
          {/* Prompts Tab */}
          <TabsContent value="prompts" className="space-y-6">
            <PromptSelector 
              onPromptSelected={handlePromptSelected} 
              disabled={isProcessing}
            />
          </TabsContent>
          
          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            <ResultsViewer 
              results={results}
              onDownloadResults={handleDownloadResults}
              isProcessing={isProcessing}
              processingProgress={processingProgress}
              processingStep={processingStep}
            />
          </TabsContent>
          
          {/* Combined Tab */}
          <TabsContent value="combined" className="space-y-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold mb-1">IFRS9 Combined Results</h2>
                  <p className="text-sm text-muted-foreground">
                    View and download the final processed IFRS9 data in Excel format
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleDownloadResults}
                  className="flex items-center gap-1 border-yellow-400 bg-white text-black hover:bg-yellow-50"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Excel</span>
                </Button>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="flex justify-between items-center p-3 bg-muted border-b">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="py-1 h-8 bg-yellow-400 hover:bg-yellow-500 border-none text-black"
                  >
                    Combined View
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    28 rows
                  </div>
                </div>
                
                <div className="h-[500px] overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/70 sticky top-0">
                      <tr>
                        <th className="p-3 text-left font-semibold text-black">Category</th>
                        <th className="p-3 text-left font-semibold text-black">Stage</th>
                        <th className="p-3 text-left font-semibold text-black">Field</th>
                        <th className="p-3 text-left font-semibold text-black">Value</th>
                        <th className="p-3 text-left font-semibold text-black">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 1</td>
                        <td className="p-3">Gross Carrying Amount</td>
                        <td className="p-3">$1,029.66m</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 1</td>
                        <td className="p-3">Loss Allowance</td>
                        <td className="p-3">$12.64m</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 1</td>
                        <td className="p-3">Coverage Ratio</td>
                        <td className="p-3">0.94%</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 2</td>
                        <td className="p-3">Gross Carrying Amount</td>
                        <td className="p-3">$502.11m</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 2</td>
                        <td className="p-3">Loss Allowance</td>
                        <td className="p-3">$20.71m</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 2</td>
                        <td className="p-3">Coverage Ratio</td>
                        <td className="p-3">6.35%</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t mt-auto py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div>IFRS9 Data Extraction Tool</div>
            <div>© {new Date().getFullYear()} Barclays Financial Services</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
