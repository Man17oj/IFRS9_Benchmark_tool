// src/components/dashboard/SideBySideTab.tsx

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { RefreshCw, Info, Check } from 'lucide-react'; // Added Check, was missing
import { ProcessingResult } from '@/lib/types';
import PDFViewer from '@/components/PDFViewer';
import { Badge } from "@/components/ui/badge"; // Added Badge, was missing
import { cn } from "@/lib/utils"; // Added cn, was missing

// CORRECTED Props Interface
export interface SideBySideTabProps {
  results: ProcessingResult[];
  selectedBank: string; 
}

const SideBySideTab = ({ results, selectedBank }: SideBySideTabProps) => {
  // ... rest of your component logic from the version in codebase_frontend.md ...
  // (Ensure all the component logic is present here, I'm just showing the interface fix)

  const [selectedFileForPdfPreview, setSelectedFileForPdfPreview] = useState<File | null>(null);
  const [selectedProcessingResult, setSelectedProcessingResult] = useState<ProcessingResult | null>(null);
  const [retryPdfCounter, setRetryPdfCounter] = useState(0);
  const [clientSidePdfFiles, setClientSidePdfFiles] = useState<Map<string, File>>(new Map());

  const resultsByFile: Record<string, ProcessingResult[]> = results.reduce((acc, result) => {
    if (!result) return acc;
    const key = result.fileId || result.fileName; 
    if (!acc[key]) acc[key] = [];
    acc[key].push(result);
    return acc;
  }, {} as Record<string, ProcessingResult[]>);

  const uniqueFileEntries = Object.values(resultsByFile).map(fileResults => fileResults[0]).filter(Boolean);

  // createDummyPDF function as provided in your codebase_frontend.md
  const createDummyPDF = (fileName: string): File => {
    const base64PDF = `JVBERi0xLjcKJeTjz9IKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFIvTGFuZyhqYS1KUCkgL1N0cnVjdFRyZWVSb290IDIxIDAgUi9NYXJrSW5mbzw8L01hcmtlZCB0cnVlPj4vTWV0YWRhdGEgNTggMCBSL1ZpZXdlclByZWZlcmVuY2VzIDU5IDAgUj4+CmVuZG9iagoyIDAgb2JqCjw8L1R5cGUvUGFnZXMvQ291bnQgMS9LaWRzWyAzIDAgUl0gPj4KZW5kb2JqCjMgMCBvYmoKPDwvVHlwZS9QYWdlL1BhcmVudCAyIDAgUi9SZXNvdXJjZXM8PC9YT2JqZWN0PDwvSW1hZ2U1IDUgMCBSL0ltYWdlNyA3IDAgUj4+L0ZvbnQ8PC9GMSAxMSAwIFIvRjIgMTMgMCBSL0YzIDE1IDAgUi9GNCAxNyAwIFI+Pi9FeHRHU3RhdGU8PC9HUzcgNyAwIFIvR1M4IDggMCBSPj4vUHJvY1NldFsvUERGL1RleHQvSW1hZ2VCL0ltYWdlQy9JbWFnZUldID4+L01lZGlhQm94WyAwIDAgNTk1LjMyIDg0MS45Ml0gL0NvbnRlbnRzIDQgMCBSL0dyb3VwPDwvVHlwZS9Hcm91cC9TL1RyYW5zcGFyZW5jeS9DUy9EZXZpY2VSR0I+Pi9UYWJzL1MvU3RydWN0UGFyZW50cyAwPj4KZW5kb2JqCjQgMCBvYmoKPDwvRmlsdGVyL0ZsYXRlRGVjb2RlL0xlbmd0aCAxOTA4Pj4Kc3RyZWFtCn陲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S9UcnVlVHlwZS9OYW1lL0YxL0Jhc2VGb250L0JDREVFRStDYWxpYnJpL0VuY29kaW5nL1dpbkFuc2lFbmNvZGluZy9Gb250RGVzY3JpcHRvciAyMyAwIFIvRmlyc3RDaGFyIDMyL0xhc3RDaGFyIDg0L1dpZHRocyA1MyAwIFI+PgplbmRvYmoKMjMgMCBvYmoKPDwvVHlwZS9Gb250RGVzY3JpcHRvci9Gb250TmFtZS9CQ0RFRUUrQ2FsaWJyaS9GbGFncyAzMi9JdGFsaWNBbmdsZSAwL0FzY2VudCA3NTAvRGVzY2VudCAtMjUwL0NhcEhlaWdodCA3NTAvQXZnV2lkdGggNTIxL01heFdpZHRoIDE3NDMvRm9udFdlaWdodCA0MDAvWEhlaWdodCAyNTAvU3RlbVYgNTIvRm9udEJCb3hbIC01MDMgLTI1MCAxMjQwIDc1MF0gL0ZvbnRGaWxlMiA1MiAwIFI+PgplbmRvYmoKNTMgMCBvYmoKWyAyMjYgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDY0MyAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCA3MTUgMCA2NjIgMCAwIDAgNTQ0XSAKZW5kb2JqCjUwIDAgb2JqCjw8L1R5cGUvU3RydWN0RWxlbS9TL1Jvb3QvUC11dGlsKFRpdGxlKS9LWzQ5IDAgUl0gL1BnIDMgMCBSID4+CmVuZG9iago0OSAwIG9iago8PC9UeXBlL1N0cnVjdEVsZW0vUy9UaXRsZS9QLXV0aWwoSGVhZGluZzEpL0tbNDggMCBSXSAvUGcgMyAwIFIgPj4KZW5kb2JqCjQ4IDAgb2JqCjw8L1R5cGUvU3RydWN0RWxlbS9TL0hlYWRpbmcxL1AvNTAgMCBSL0tbMF0gL1BnIDMgMCBSID4+CmVuZG9iago1MSAwIG9iago8PC9OYW1lcygibG9hbiIpID4+CmVuZG9iago2IDAgb2JqCjw8L051bXMgWzAgWyA0OCAwIFJdIF0gPj4KZW5kb2JqCnhyZWYKMSA0CjAwMDAwMDAwMTAgNjU1MzUgZiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwMTgxIDAwMDAwIG4gCjAwMDAwMDAyMzggMDAwMDAgbiAKMTEgMgowMDAwMDAwMDAwIDAwMDAwIGYgCjAwMDAwMDAwMDAgMDAwMDAgZiAKMjEgNAowMDAwMDAyMzMwIDAwMDAwIG4gCjAwMDAwMDI0MTggMDAwMDAgbiAKMDAwMDAwMjU5NSAwMDAwMCBuIAowMDAwMDAyODU4IDAwMDAwIG4gCjQ4IDMKMDAwMDAwMzA3NyAwMDAwMCBuIAowMDAwMDAzMDAwIDAwMDAwIG4gCjAwMDAwMDI5MzUgMDAwMDAgbiAKNTAgMQowMDAwMDAyODY1IDAwMDAwIG4gCjUyIDIKMDAwMDAwMDAwMCAwMDAwMCBmIAowMDAwMDAwMDAwIDAwMDAwIGYgCnRyYWlsZXIKPDwvU2l6ZSA1NS9Sb290IDEgMCBSL0luZm8gMjAgMCBSL0lEWzwyRTA1NzM5MkZDM0JCMTQxQjNDNDkzODNBODY4NDg5OD48MkUwNTczOTJGQzNCQjE0MUIzQzQ5MzgzQTg2ODQ4OTg+XSA+PgpzdGFydHhyZWYKMzE0NQolJUVPRgo=`; //
    try {
      const binaryString = window.atob(base64PDF);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) { bytes[i] = binaryString.charCodeAt(i); }
      const pdfBlob = new Blob([bytes.buffer], { type: 'application/pdf' });
      const file = new File([pdfBlob], fileName, { type: 'application/pdf' });
      setClientSidePdfFiles(prev => new Map(prev).set(fileName, file));
      return file;
    } catch (error) {
      console.error("Error creating dummy PDF:", error);
      const minimalPDF = 'JVBERi0xLjAKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0tpZHNbMyAwIFJdL0NvdW50IDE+PgplbmRvYmoKMyAwIG9iago8PC9UeXBlL1BhZ2UvTWVkaWFCb3hbMCAwIDMgM10+PgplbmRvYmoKdHJhaWxlcgo8PC9Sb290IDEgMCBSPj4K';
      const fallbackBytes = Uint8Array.from(window.atob(minimalPDF), c => c.charCodeAt(0));
      return new File([new Blob([fallbackBytes], { type: 'application/pdf' })], fileName, { type: 'application/pdf' });
    }
  };

  useEffect(() => {
    if (results.length === 0) {
      setSelectedFileForPdfPreview(null);
      setSelectedProcessingResult(null);
      return;
    }
    const newPdfFilesMap = new Map(clientSidePdfFiles);
    uniqueFileEntries.forEach(fileInfo => {
      if (fileInfo && fileInfo.fileName && !newPdfFilesMap.has(fileInfo.fileName)) {
        // This updates clientSidePdfFiles via its setState, which will trigger the other useEffect
        createDummyPDF(fileInfo.fileName); 
      }
    });
    if (!selectedProcessingResult && results.length > 0) {
        const firstValidResult = results.find(r => r != null);
        if (firstValidResult) setSelectedProcessingResult(firstValidResult);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results, retryPdfCounter]); // Removed clientSidePdfFiles to avoid potential loop if createDummyPDF directly sets it

   useEffect(() => { 
    if (selectedProcessingResult && selectedProcessingResult.fileName) {
        const pdf = clientSidePdfFiles.get(selectedProcessingResult.fileName);
        if (pdf) {
            setSelectedFileForPdfPreview(pdf);
        } else {
            const newPdf = createDummyPDF(selectedProcessingResult.fileName); // create if not in map
            setSelectedFileForPdfPreview(newPdf);
        }
    }
  }, [selectedProcessingResult, clientSidePdfFiles]);


  const handleFileSelect = (fileIdOrName: string, fileName: string) => {
    const pdf = clientSidePdfFiles.get(fileName) || createDummyPDF(fileName);
    setSelectedFileForPdfPreview(pdf);
    const fileResults = resultsByFile[fileIdOrName];
    if (fileResults && fileResults.length > 0) {
      setSelectedProcessingResult(fileResults[0]);
    }
  };

  const handleResultSelect = (result: ProcessingResult) => {
    setSelectedProcessingResult(result);
  };

  const handleRetryLoadingPdf = () => {
    setRetryPdfCounter(prev => prev + 1); 
    if (selectedProcessingResult?.fileName) {
      const newPdf = createDummyPDF(selectedProcessingResult.fileName);
      setSelectedFileForPdfPreview(newPdf);
    }
  };
  // ... (rest of the JSX from the previous correct version) ...
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-1">Side by Side Comparison for {selectedBank}</h2>
        <p className="text-sm text-muted-foreground">Compare extracted data with the original document.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {/* Left sidebar - File and Result selection */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden h-full flex flex-col dark:bg-gray-800 dark:border-gray-700">
            <div className="bg-black text-white p-2 text-sm font-medium">Processed Files & Prompts</div>
            <ScrollArea className="flex-grow">
              <div className="p-2">
                {uniqueFileEntries.map((fileInfo) => (
                  <div key={fileInfo.fileId || fileInfo.fileName} className="mb-3">
                    <div 
                      className="text-sm font-medium p-2 bg-muted dark:bg-gray-700 rounded-t-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                      onClick={() => handleFileSelect(fileInfo.fileId || fileInfo.fileName, fileInfo.fileName)}
                    >
                      {fileInfo.fileName}
                    </div>
                    <div className="border border-t-0 rounded-b-md dark:border-gray-600">
                      {(resultsByFile[fileInfo.fileId || fileInfo.fileName] || []).map(result => (
                        <div 
                          key={result.id}
                          className={cn(
                            "flex items-center justify-between p-2 text-sm cursor-pointer border-b dark:border-gray-600 last:border-b-0",
                            selectedProcessingResult?.id === result.id 
                              ? "bg-yellow-100 dark:bg-yellow-700/50 border-l-4 border-yellow-500 dark:border-yellow-400 text-black dark:text-white" 
                              : "hover:bg-muted/50 dark:hover:bg-gray-700/30"
                          )}
                          onClick={() => handleResultSelect(result)}
                        >
                          <span className="truncate pr-2">{result.promptName}</span>
                          {result.status === 'success' && <Check className="h-4 w-4 text-green-500 flex-shrink-0" />}
                          {result.status === 'error' && <Info className="h-4 w-4 text-red-500 flex-shrink-0" />}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <Card className="overflow-hidden h-full flex flex-col dark:bg-gray-800 dark:border-gray-700">
            <div className="bg-black text-white p-2 text-sm font-medium">Document Preview</div>
            <div className="flex-grow flex flex-col bg-gray-100 dark:bg-gray-700">
              <PDFViewer file={selectedFileForPdfPreview} className="flex-1"/>
              <div className="flex justify-center p-2 bg-card border-t dark:bg-gray-800 dark:border-gray-600">
                <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={handleRetryLoadingPdf}>
                  <RefreshCw className="h-4 w-4" /> Reload PDF Preview
                </Button>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="lg:col-span-3">
          <Card className="overflow-hidden h-full flex flex-col dark:bg-gray-800 dark:border-gray-700">
            <div className="bg-black text-white p-3 flex justify-between items-center">
              <div>
                <div className="font-medium">{selectedProcessingResult?.promptName || "No prompt selected"}</div>
                <div className="text-xs text-gray-400">From: {selectedProcessingResult?.fileName || "N/A"}</div>
              </div>
              {selectedProcessingResult && (
                <Badge className={cn("capitalize", 
                    selectedProcessingResult.status === 'success' && "bg-green-600 text-white",
                    selectedProcessingResult.status === 'error' && "bg-red-600 text-white",
                    selectedProcessingResult.status === 'pending' && "bg-blue-500 text-white",
                    selectedProcessingResult.status === 'processing' && "bg-purple-500 text-white"
                )}>
                  {selectedProcessingResult.status}
                </Badge>
              )}
            </div>
            
            <div className="p-3 flex-grow">
              {selectedProcessingResult && selectedProcessingResult.status === 'success' && selectedProcessingResult.data && selectedProcessingResult.data.length > 0 ? (
                <ScrollArea className="h-[calc(100vh_-_250px)] max-h-[550px]">
                  <Table>
                    <TableHeader className="bg-muted dark:bg-gray-700 sticky top-0">
                      <TableRow className="dark:border-gray-600">
                        <TableHead className="font-semibold dark:text-gray-200">Category</TableHead>
                        <TableHead className="font-semibold dark:text-gray-200">Stage</TableHead>
                        <TableHead className="font-semibold dark:text-gray-200">Field</TableHead>
                        <TableHead className="font-semibold dark:text-gray-200">Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedProcessingResult.data.map((item, index) => {
                        if (!item) return null;
                        return (
                          <TableRow key={index} className="dark:border-gray-600">
                            <TableCell className="dark:text-gray-300">{item.Category === 'ECL By Stage' ? 'ECL' : item.Category}</TableCell>
                            <TableCell className="dark:text-gray-300">{item.Stage}</TableCell>
                            <TableCell className="dark:text-gray-300">{item.Field}</TableCell>
                            <TableCell className="font-medium dark:text-gray-200">{item.Value}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </ScrollArea>
              ) : selectedProcessingResult && selectedProcessingResult.status === 'error' ? (
                 <div className="flex flex-col items-center justify-center h-full text-center p-4">
                    <Info className="h-10 w-10 text-red-500 mb-3" />
                    <p className="font-semibold">Error in this extraction.</p>
                    <p className="text-xs text-muted-foreground mt-1">{selectedProcessingResult.error || "An unknown error occurred."}</p>
                 </div>
              ): (
                <div className="flex flex-col items-center justify-center h-full text-center p-4">
                  <Info className="h-10 w-10 text-muted-foreground mb-3" />
                  <p className="text-muted-foreground">
                    {selectedProcessingResult ? "No data extracted for this result or result not successful." : "Select a result to view extracted data."}
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SideBySideTab;