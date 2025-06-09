// src/pages/Dashboard.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent } from '@/components/ui/tabs'; //
import { useToast } from '@/hooks/use-toast'; //
import { UploadedFile, PromptOption, ProcessingResult } from '@/lib/types'; //
import TabNavigation from '@/components/dashboard/TabNavigation'; //
import UploadTab from '@/components/dashboard/UploadTab'; //
import PromptsTab from '@/components/dashboard/PromptsTab'; //
import ResultsTab from '@/components/dashboard/ResultsTab'; //
import CombinedTab from '@/components/dashboard/CombinedTab'; //
import SideBySideTab from '@/components/dashboard/SideBySideTab'; //
import Footer from '@/components/dashboard/Footer'; //
import { Button } from '@/components/ui/button'; //
import { Loader2 } from 'lucide-react';

const Dashboard = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [selectedPrompts, setSelectedPrompts] = useState<PromptOption[]>([]);
  const [results, setResults] = useState<ProcessingResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const [processingProgress, setProcessingProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('upload');
  const { toast } = useToast();
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const navigate = useNavigate();

  const [bankDisplayInfo, setBankDisplayInfo] = useState<string>('banks');
  
  useEffect(() => {
    const enableMulti = sessionStorage.getItem('enableMultiBanks') === 'true';
    const singleBank = sessionStorage.getItem('selectedBank') || 'Selected Bank';
    const multiBanksString = sessionStorage.getItem('selectedBanks');

    let displayInfo = singleBank.charAt(0).toUpperCase() + singleBank.slice(1);
    if (enableMulti && multiBanksString) {
      try {
        const banksArray = JSON.parse(multiBanksString) as string[];
        if (banksArray.length > 0) {
          displayInfo = banksArray.map((b:string) => b.charAt(0).toUpperCase() + b.slice(1)).join(', ');
        } else {
           displayInfo = "No banks selected"; 
        }
      } catch { /* Keep singleBank displayInfo as fallback */ }
    }
    setBankDisplayInfo(displayInfo);
  }, []);

  const handleFilesUploaded = (backendConfirmedFiles: UploadedFile[]) => {
    setUploadedFiles(backendConfirmedFiles);
  };

  const handlePromptSelectedForProcessing = (promptsToProcess: PromptOption[]) => {
    setSelectedPrompts(promptsToProcess);
    if (promptsToProcess.length > 0) {
      toast({
        title: "Prompts Ready for Processing",
        description: `${promptsToProcess.length} prompt(s) selected. Click 'Process Files'.`,
      });
    }
  };

  const processFiles = async () => {
    // 1. Guard clauses
    if (uploadedFiles.length === 0) {
      toast({
        title: "No Files Uploaded",
        description: "Please upload PDF file(s) first.",
        variant: "destructive",
      });
      return;
    }
    if (selectedPrompts.length === 0) {
      toast({
        title: "No Prompts Selected",
        description: "Please select at least one extraction prompt.",
        variant: "destructive",
      });
      return;
    }
  
    // 2. Initialize state
    setIsProcessing(true);
    setResults([]);
    const newSessionId = `session-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 10)}`;
    setCurrentSessionId(newSessionId);
  
    setProcessingStep(
      `Initializing processing for ${uploadedFiles.length} file(s)...`
    );
    setProcessingProgress(0);
    setActiveTab("results");
  
    // 3. Kick off backend processing (fire-and-forget)
    fetch("http://localhost:5000/api/process", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        files: uploadedFiles.map((f) => ({ id: f.id, name: f.name })),
        prompts: selectedPrompts.map((p) => ({
          id: p.id,
          name: p.name,
          template: p.template,
        })),
        sessionId: newSessionId,
      }),
    }).catch((err) => console.error("Process start error:", err));
  
    // Immediately after your fire-and-forget fetch(…)
const expectedCount = uploadedFiles.length * selectedPrompts.length;

const poll = setInterval(async () => {
  try {
    const statusRes = await fetch(
      `http://localhost:5000/api/status/${newSessionId}`
    );
    if (!statusRes.ok) throw new Error(statusRes.statusText);

    const statusData = await statusRes.json();

    // 1) Update the step text
    setProcessingStep(statusData.step ?? "");

    // 2) Update partial results (if any)
    const incoming = Array.isArray(statusData.results)
      ? statusData.results
      : [];
    setResults(incoming);

    // 3) Compute display%: lock at 99 until all results are in, then 100
    const rawPct = statusData.progress ?? 0;
    const displayPct =
      incoming.length < expectedCount ? Math.min(rawPct, 99) : 100;
    setProcessingProgress(displayPct);

    // 4) Tear down only once we've got every single result
    if (incoming.length >= expectedCount) {
      clearInterval(poll);
      setProcessingProgress(100);
      setIsProcessing(false);
      toast({
        title: "Processing Complete",
        description: `Session ${newSessionId} finished.`,
      });
    }
  } catch (err) {
    console.error("Polling error:", err);
    clearInterval(poll);
    setIsProcessing(false);
    toast({
      title: "Polling Error",
      description: "Unable to fetch processing status.",
      variant: "destructive",
    });
  }
}, 1000);
  };  

  const handleDownloadResults = async () => {
    if (!currentSessionId) {
      toast({ title: "Cannot Download", description: "No processing session found. Please process files first.", variant: "destructive" }); return;
    }
     if (results.length === 0 && !isProcessing) {
       toast({ title: "No Results to Download", description: "Process files to generate results first.", variant: "default"}); return;
     }
     if (isProcessing) {
        toast({ title: "Processing in Progress", description: "Please wait for processing to complete before downloading.", variant: "default"}); return;
     }
    toast({ title: "Preparing Download...", description: "Your Excel file is being generated." });
    try {
      const response = await fetch(`http://localhost:5000/api/download/${currentSessionId}`);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Download request failed with status: " + response.status }));
        throw new Error(errorData.error || `Server error: ${response.statusText}`);
      }
      const blob = await response.blob();
      const contentDisposition = response.headers.get('content-disposition');
      let filename = `IFRS9_Results_${currentSessionId}.xlsx`;
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="?(.+)"?/i);
        if (filenameMatch && filenameMatch.length > 1) filename = filenameMatch[1];
      }
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click(); a.remove();
      window.URL.revokeObjectURL(url);
      toast({ title: "Download Started!", description: `${filename} is downloading.` });
    } catch (error) {
      console.error("Download Error:", error);
      toast({ title: "Download Failed", description: (error instanceof Error ? error.message : "Could not download results."), variant: "destructive" });
    }
  };

  const handleReset = () => {
    setUploadedFiles([]); setSelectedPrompts([]); setResults([]);
    setCurrentSessionId(null); setActiveTab('upload');
    setProcessingProgress(0); setProcessingStep('');
    toast({ title: "Application Reset", description: "All selections and results cleared." });
  };
  
  const goToNextTab = () => {
    if (activeTab === 'upload' && uploadedFiles.length > 0) setActiveTab('prompts');
    else if (activeTab === 'upload' && uploadedFiles.length === 0) {
        toast({title: "No Files Uploaded", description: "Please upload files to proceed.", variant: "default"});
    }
  };

  const goToPreviousTab = () => {
    if (activeTab === 'prompts') setActiveTab('upload');
    else if (['results', 'combined', 'sidebyside'].includes(activeTab)) setActiveTab('prompts');
  };

  // Line 229: Check for typos or missing commas if error persists around here
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="bg-yellow-400 text-black py-1 px-4 text-sm flex justify-between items-center">
        <div>
          Selected Bank(s): <span className="font-semibold">{bankDisplayInfo}</span>
        </div>
        <Button 
          variant="link" size="sm" onClick={() => navigate('/')}
          className="h-auto p-0 text-black underline text-xs hover:text-gray-700"
        >Change Bank(s)</Button>
      </div>
      
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* ... UploadTab and PromptsTab ... */}
          <TabsContent value="upload" className="space-y-6">
            <UploadTab 
              onFilesUploaded={handleFilesUploaded}
              uploadedFiles={uploadedFiles}
              goToNextTab={goToNextTab}
            />
          </TabsContent>
          
          <TabsContent value="prompts" className="space-y-6">
            <div className="flex flex-col space-y-4">
              <PromptsTab 
                onPromptSelected={handlePromptSelectedForProcessing}
                isProcessing={isProcessing}
                selectedPrompts={selectedPrompts}
              />
              <div className="flex justify-between items-center mt-4 pt-4 border-t dark:border-gray-700">
                <Button onClick={goToPreviousTab} variant="outline" disabled={isProcessing}>
                  Back to Upload
                </Button>
                <Button 
                  onClick={processFiles}
                  disabled={isProcessing || selectedPrompts.length === 0 || uploadedFiles.length === 0}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  {isProcessing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isProcessing ? "Processing..." : `Process ${uploadedFiles.length} File(s)`}
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="results" className="space-y-6">
            <ResultsTab 
              results={results}
              onDownloadResults={handleDownloadResults}
              isProcessing={isProcessing}
              processingProgress={processingProgress}
              processingStep={processingStep}
              selectedBank={bankDisplayInfo}
              totalUploadedFiles={uploadedFiles.length}
            />
          </TabsContent>
          
          <TabsContent value="combined" className="space-y-6">
            <CombinedTab 
              results={results} 
              onDownloadResults={handleDownloadResults} 
              selectedBank={bankDisplayInfo}
            />
          </TabsContent>
        {/* Line 244: Where SideBySideTab is rendered */}
          <TabsContent value="sidebyside" className="space-y-6">
            <SideBySideTab 
              results={results} 
              selectedBank={bankDisplayInfo} 
              // No other props seem to be passed here
            />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;