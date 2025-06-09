// src/components/ResultsViewer.tsx

import { useState, useEffect, useMemo } from 'react'; // Added useMemo
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { AlertCircle, Check, Download, Loader2, Info, ChevronsUpDown, Star } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProcessingResult } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import ProcessingStatus from './ProcessingStatus';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export interface ResultsViewerProps {
  results: ProcessingResult[];
  onDownloadResults: () => void;
  isProcessing?: boolean;
  processingProgress?: number;
  processingStep?: string;
  totalFiles?: number;
  processedFiles?: number;
  selectedBank: string;
}

const ResultsViewer = ({ 
  results, 
  onDownloadResults, 
  isProcessing = false, 
  processingProgress = 0, 
  processingStep = '',
  totalFiles = 1,
  processedFiles = 0,
  selectedBank
}: ResultsViewerProps) => {
  const [selectedResultId, setSelectedResultId] = useState<string | null>(null);
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  useEffect(() => {
    if (results.length > 0) {
      if (!selectedResultId || !results.find(r => r.id === selectedResultId)) {
        setSelectedResultId(results[0].id); 
      }
    } else {
      setSelectedResultId(null); 
    }
    // Only reset notes if the selected result actually changes or results become empty
    // This prevents notes from closing if results array is updated but selection remains the same valid item.
  }, [results]); // Removed selectedResultId from deps to avoid loop with setIsNotesOpen

  useEffect(() => {
    setIsNotesOpen(false); // Close notes when the selected result changes
  }, [selectedResultId]);


  const currentResult = useMemo(() => results.find(result => result && result.id === selectedResultId), [results, selectedResultId]);
  
  const resultsByFile = useMemo(() => results.reduce((acc, result) => {
    if (!result) return acc;
    const fileKey = result.fileId || result.fileName; 
    if (!acc[fileKey]) {
      acc[fileKey] = [];
    }
    acc[fileKey].push(result);
    return acc;
  }, {} as Record<string, ProcessingResult[]>), [results]);

  const isEclByStageCategory = currentResult?.data?.some(item => item?.Category === 'ECL By Stage');
  
  // ... (if (results.length === 0 && !isProcessing) ... block )
  // ... (if (isProcessing && results.length === 0) ... block )
  if (results.length === 0 && !isProcessing) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-1">Extraction Results</h2>
          <p className="text-sm text-muted-foreground">View and download extracted financial data for {selectedBank}</p>
        </div>
        <Card className="dark:border-gray-700">
          <CardContent className="flex flex-col items-center justify-center p-12 text-center">
            <Info className="h-10 w-10 text-muted-foreground mb-4"/>
            <div className="text-muted-foreground mb-2">No extraction results yet.</div>
            <div className="text-sm text-muted-foreground">Process files to see extraction results.</div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isProcessing && results.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-1">Extraction Results</h2>
          <p className="text-sm text-muted-foreground">View and download extracted financial data for {selectedBank}</p>
        </div>
        <ProcessingStatus
          isProcessing={isProcessing}
          progress={processingProgress}
          currentStep={processingStep}
          totalFiles={totalFiles}
          processedFiles={processedFiles}
        />
        <div className="flex items-center justify-center h-[300px] border rounded-lg dark:border-gray-700">
            <div className="text-center p-8">
                <Loader2 className="mx-auto h-12 w-12 text-yellow-500 animate-spin mb-4" />
                <h3 className="text-lg font-medium mb-2">Processing Data...</h3>
                <p className="text-sm text-muted-foreground">
                    {processingStep || "Extracting information from your documents..."}
                </p>
            </div>
        </div>
      </div>
    );
  }


  return (
    <div className="space-y-6">
      {/* ... (Header and Download button section remains the same) ... */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold mb-1">Extraction Results</h2>
          <p className="text-sm text-muted-foreground">View and download extracted financial data for {selectedBank}</p>
        </div>
        <Button 
          variant="outline" size="sm" onClick={onDownloadResults}
          disabled={isProcessing || results.length === 0}
          className="flex items-center gap-1 border-yellow-400 bg-white text-black hover:bg-yellow-50 dark:text-black dark:hover:bg-yellow-100 dark:border-yellow-500"
        >
          <Download className="h-4 w-4" />
          <span>Download All Results</span>
        </Button>
      </div>
      
      {isProcessing && (
          <ProcessingStatus
            isProcessing={isProcessing}
            progress={processingProgress}
            currentStep={processingStep}
            totalFiles={totalFiles}
            processedFiles={processedFiles}
            className="mb-6"
          />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
           {/* ... (Processed Files & Prompts list logic remains the same) ... */}
           <Card className="overflow-hidden h-full flex flex-col dark:bg-gray-800 dark:border-gray-700">
            <div className="bg-black text-white p-2 text-sm font-medium">Processed Files & Prompts</div>
            <ScrollArea className="h-[400px] flex-grow">
              <div className="p-2">
                {Object.entries(resultsByFile).map(([fileKey, fileResults]) => {
                  const fileInfo = fileResults[0];
                  if (!fileInfo) return null;
                  return (
                    <div key={fileKey} className="mb-4">
                      <div className="text-sm font-medium p-2 bg-muted dark:bg-gray-700 rounded-t-md">
                        {fileInfo.fileName}
                      </div>
                      <div className="border border-t-0 rounded-b-md dark:border-gray-600">
                        {fileResults.map(result => {
                          if (!result) return null;
                          const isSelected = selectedResultId === result.id;
                          return (
                            <div 
                              key={result.id}
                              className={cn(
                                "flex items-center justify-between p-2 text-sm rounded-sm cursor-pointer border-b dark:border-gray-600 last:border-b-0",
                                isSelected ? "bg-yellow-100 dark:bg-yellow-700/50 border-l-4 border-yellow-500 dark:border-yellow-400 text-black dark:text-white" : "hover:bg-muted/50 dark:hover:bg-gray-700/30"
                              )}
                              onClick={() => {setSelectedResultId(result.id); /* setIsNotesOpen will be reset by useEffect now */}}
                            >
                              <div className="truncate pr-2">{result.promptName}</div>
                              <div className="flex items-center flex-shrink-0">
                                {result.status === 'success' && <Check className="h-4 w-4 text-green-500" />}
                                {result.status === 'error' && <AlertCircle className="h-4 w-4 text-red-500" />}
                                {(result.status === 'pending' || result.status === 'processing') && <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          {currentResult ? (
            <Card className="overflow-hidden h-full flex flex-col dark:bg-gray-800 dark:border-gray-700">
              {/* ... (Card Header with promptName, fileName, status Badge remains the same) ... */}
              <div className="bg-black text-white p-3 flex justify-between items-center">
                <div>
                  <div className="font-medium">{currentResult.promptName}</div>
                  <div className="text-xs text-gray-400">From: {currentResult.fileName}</div>
                </div>
                <Badge 
                  className={cn("capitalize text-white", currentResult.status === 'success' && "bg-green-600", currentResult.status === 'error' && "bg-red-600", (currentResult.status === 'pending' || currentResult.status === 'processing') && "bg-blue-500")}>
                  {currentResult.status}
                </Badge>
              </div>
              
              <div className="p-3 flex-grow overflow-y-auto">
                {/* ... (status handling for processing and error remains the same) ... */}
                {currentResult.status === 'processing' && ( <div className="flex flex-col items-center justify-center h-full py-8"><Loader2 className="h-8 w-8 text-yellow-500 animate-spin mb-2" /><div className="text-sm text-muted-foreground">Processing...</div></div>)}
                {currentResult.status === 'error' && currentResult.error && ( <Alert variant="destructive" className="my-4"><AlertCircle className="h-4 w-4" /><AlertTitle>Extraction Error</AlertTitle><AlertDescription>{currentResult.error}</AlertDescription></Alert>)}
                
                {currentResult.notes && (
                  <Collapsible open={isNotesOpen} onOpenChange={setIsNotesOpen} className="w-full space-y-1 mb-4">
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="flex items-center justify-start p-0 h-auto text-blue-600 dark:text-blue-400 hover:underline focus-visible:ring-0 focus-visible:ring-offset-0">
                        <Info className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="text-sm font-medium">{isNotesOpen ? "Hide Notes" : "Show Notes from LLM"}</span>
                        <ChevronsUpDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${isNotesOpen ? 'rotate-180' : ''} flex-shrink-0`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Alert variant="default" className="mt-1 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                        <AlertDescription className="text-blue-700 dark:text-blue-300 text-xs whitespace-pre-wrap max-h-48 overflow-y-auto">
                            {currentResult.notes}
                        </AlertDescription>
                      </Alert>
                    </CollapsibleContent>
                  </Collapsible>
                )}
                
                {currentResult.status === 'success' && currentResult.data && currentResult.data.length > 0 && (
                  <Tabs defaultValue="table" className="flex flex-col h-full">
                    {/* ... (TabsList remains the same) ... */}
                    <TabsList className="mb-4 shrink-0">
                      <TabsTrigger value="table">Table View</TabsTrigger>
                      <TabsTrigger value="json">JSON View</TabsTrigger>
                      {isEclByStageCategory && (<TabsTrigger value="by-stage">By Stage</TabsTrigger>)}
                    </TabsList>
                    
                    <ScrollArea className="flex-grow min-h-0">
                      {/* ... (TabsContent for "table" and "json" remain the same) ... */}
                      <TabsContent value="table" className="mt-0">
                        <Table>
                          <TableHeader className="bg-muted dark:bg-gray-700/80 sticky top-0 z-10">
                            <TableRow className="dark:border-gray-600">
                              <TableHead className="font-semibold dark:text-gray-200">Category</TableHead>
                              <TableHead className="font-semibold dark:text-gray-200">Stage</TableHead>
                              <TableHead className="font-semibold dark:text-gray-200">Field</TableHead>
                              <TableHead className="font-semibold dark:text-gray-200">Value</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {currentResult.data.map((item, index) => {
                              if (!item) return null;
                              return (
                                <TableRow key={`table-item-${index}`} className="dark:border-gray-600">
                                  <TableCell className="dark:text-gray-300">{item.Category === 'ECL By Stage' ? 'ECL' : String(item.Category)}</TableCell>
                                  <TableCell className="dark:text-gray-300">{String(item.Stage)}</TableCell>
                                  <TableCell className="dark:text-gray-300">{String(item.Field)}</TableCell>
                                  <TableCell className="font-medium dark:text-gray-200">{String(item.Value)}</TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </TabsContent>
                      <TabsContent value="json" className="mt-0">
                          <pre className="bg-muted dark:bg-gray-700/50 p-4 rounded-md text-xs overflow-x-auto">
                            {JSON.stringify(currentResult.data, null, 2)}
                          </pre>
                      </TabsContent>
                      
                      {isEclByStageCategory && (
                        <TabsContent value="by-stage" className="mt-0">
                            <div className="space-y-4">
                              {(() => {
                                // CORRECTED LINE FOR STAGES:
                                const stages = Array.from(new Set(currentResult.data?.filter(item => item && item.Category === 'ECL By Stage').map(item => item?.Stage).filter((stage): stage is string => Boolean(stage)) ));
                                
                                return stages.map(stage => {
                                  const stageData = currentResult.data?.filter(d => d && d.Stage === stage && d.Category === 'ECL By Stage');
                                  if (!stageData || stageData.length === 0) return null;
                                  
                                  return (
                                    <div key={`stage-group-${stage}`} className="border rounded-md overflow-hidden dark:border-gray-600">
                                      <div className="bg-muted dark:bg-gray-700 p-2"><h4 className="font-medium dark:text-gray-200">Stage {stage}</h4></div>
                                      <Table>
                                        <TableHeader><TableRow className="dark:border-gray-600"><TableHead className="dark:text-gray-300">Category</TableHead><TableHead className="dark:text-gray-300">Field</TableHead><TableHead className="dark:text-gray-300">Value</TableHead></TableRow></TableHeader>
                                        <TableBody>
                                          {stageData.map((item, index) => {
                                              const itemField = (item && typeof item.Field === 'string') ? item.Field : 'N/A';
                                              const itemValue = (item && (typeof item.Value === 'string' || typeof item.Value === 'number')) ? String(item.Value) : 'N/A';
                                              return (
                                                <TableRow key={`by-stage-item-${stage}-${index}`} className="dark:border-gray-600">
                                                    <TableCell className="dark:text-gray-300">ECL</TableCell>
                                                    <TableCell className="dark:text-gray-300">{itemField}</TableCell>
                                                    <TableCell className="font-medium dark:text-gray-200">{itemValue}</TableCell>
                                                </TableRow>
                                            );
                                          })}
                                        </TableBody>
                                      </Table>
                                    </div>
                                  );
                                });
                              })()}
                            </div>
                        </TabsContent>
                      )}
                    </ScrollArea>
                  </Tabs>
                )}
                 {currentResult.status === 'success' && (!currentResult.data || currentResult.data.length === 0) && ( <div className="flex flex-col items-center justify-center h-full py-8"><Info className="h-8 w-8 text-muted-foreground mb-2" /><div className="text-sm text-muted-foreground">No data points were extracted for this prompt.</div></div> )}
              </div>
            </Card>
          ) : ( /* ... (No currentResult selected placeholder remains the same) ... */ 
            <Card className="flex flex-col items-center justify-center h-full dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="text-center">
                <Info className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Select a result from the list on the left to view details.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsViewer;