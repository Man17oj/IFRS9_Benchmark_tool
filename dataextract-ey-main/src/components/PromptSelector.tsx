// src/components/PromptSelector.tsx

import { useState, useEffect, useCallback } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'; //
import { Label } from '@/components/ui/label'; //
import { Input } from '@/components/ui/input'; //
import { Button } from '@/components/ui/button'; //
import { Check, FileText, Upload, Loader2 } from 'lucide-react';
import { PromptOption } from '@/lib/types';
import { ScrollArea } from '@/components/ui/scroll-area'; //
import { Badge } from '@/components/ui/badge'; //
import { cn } from '@/lib/utils'; //
import { parseExcelPrompts } from '@/lib/excelUtils'; //
import { useToast } from '@/hooks/use-toast'; //

interface PromptSelectorProps {
  onPromptsApplied: (prompts: PromptOption[]) => void; // Changed from onPromptSelected
  disabled?: boolean;
  availablePredefinedPrompts: PromptOption[];
  initiallyTickedPrompts?: PromptOption[]; // Renamed for clarity
  bankDisplay: string;
}

const PromptSelector = ({ 
  onPromptsApplied, 
  disabled = false,
  availablePredefinedPrompts,
  initiallyTickedPrompts = [],
  bankDisplay
}: PromptSelectorProps) => {
  // Local state for user's temporary selections before applying
  const [locallyTickedPrompts, setLocallyTickedPrompts] = useState<PromptOption[]>([]);
  
  const [customPromptFile, setCustomPromptFile] = useState<File | null>(null);
  const [customPrompts, setCustomPrompts] = useState<PromptOption[]>([]);
  const [isLoadingCustom, setIsLoadingCustom] = useState(false);
  const { toast } = useToast();
  
  // Sync local ticks when initiallyTickedPrompts (from Dashboard) or available prompts change
  useEffect(() => {
    // Filter initiallyTickedPrompts to only include those available for the current bank
    const relevantInitialTicks = initiallyTickedPrompts.filter(initPrompt =>
      availablePredefinedPrompts.some(availPrompt => availPrompt.id === initPrompt.id)
    );
    setLocallyTickedPrompts(relevantInitialTicks);
  }, [initiallyTickedPrompts, availablePredefinedPrompts]);
  
  const togglePrompt = (prompt: PromptOption) => {
    if (disabled) return;
    setLocallyTickedPrompts(prevSelected => {
      const isSelected = prevSelected.some(p => p.id === prompt.id);
      if (isSelected) {
        return prevSelected.filter(p => p.id !== prompt.id);
      } else {
        return [...prevSelected, prompt];
      }
    });
  };
  
  const selectAllPredefinedPrompts = () => {
    if (disabled || availablePredefinedPrompts.length === 0) return;
    setLocallyTickedPrompts([...availablePredefinedPrompts]);
  };
  
  const deselectAllPredefinedPrompts = () => {
    if (disabled) return;
    // Deselect only from the predefined ones, keep custom selections if any were merged previously (though UI separates this now)
    setLocallyTickedPrompts(locallyTickedPrompts.filter(p => !availablePredefinedPrompts.some(ap => ap.id === p.id)));
  };
  
  const handleApplyPredefined = () => {
    // Filter to ensure only available predefined prompts are applied
    const promptsToApply = locallyTickedPrompts.filter(ltp => 
      availablePredefinedPrompts.some(ap => ap.id === ltp.id)
    );
    onPromptsApplied(promptsToApply);
     toast({
        title: "Predefined Prompts Applied",
        description: `${promptsToApply.length} predefined prompt(s) now selected for processing.`,
      });
  };
  
  const handleCustomPromptUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCustomPromptFile(file);
      setIsLoadingCustom(true);
      try {
        const parsedPrompts = await parseExcelPrompts(file);
        setCustomPrompts(parsedPrompts);
        toast({
          title: "Excel File Processed",
          description: `${parsedPrompts.length} custom prompts loaded. Click 'Apply Custom Prompts'.`,
        });
      } catch (error) {
        toast({
          title: "Error Processing Excel File",
          description: error instanceof Error ? error.message : "Unknown error occurred",
          variant: "destructive",
        });
        setCustomPrompts([]);
      } finally {
        setIsLoadingCustom(false);
      }
    }
  };
  
  const handleApplyCustomPrompts = () => {
    if (customPrompts.length > 0) {
      onPromptsApplied(customPrompts); 
      setLocallyTickedPrompts(customPrompts); // Update local selection to reflect this choice
      toast({
        title: "Custom Prompts Applied",
        description: `${customPrompts.length} custom prompt(s) are now selected for processing.`,
      });
    }
  };

  const predefinedPromptsByCategory = (availablePredefinedPrompts || []).reduce((acc, prompt) => {
    const category = prompt.category || "Default";
    if (!acc[category]) acc[category] = [];
    acc[category].push(prompt);
    return acc;
  }, {} as Record<string, PromptOption[]>);

  const customPromptsForDisplayByCategory = customPrompts.reduce((acc, prompt) => {
    const category = prompt.category || "Custom";
    if (!acc[category]) acc[category] = [];
    acc[category].push(prompt);
    return acc;
  }, {} as Record<string, PromptOption[]>);

  return (
    <div className="space-y-6">
      {/* Info Section - This layout can be adjusted as per your original design if it was part of a two-column layout */}
      <div className="space-y-4 lg:col-span-1"> {/* Assuming it's stacked or adjust grid if needed */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Select Data to Extract</h2>
          <p className="text-sm text-muted-foreground">
            Choose financial data points to extract from PDFs for: <span className="font-medium">{bankDisplay}</span>.
          </p>
        </div>
        <div className="bg-muted p-4 rounded-lg border">
          <h3 className="font-medium mb-2">How It Works</h3>
          <p className="text-sm text-muted-foreground">
            Select predefined prompts relevant to {bankDisplay}, or upload an Excel file with your own custom prompts. Selections here will be used for the "Process Files" step.
          </p>
        </div>
      </div>

      {/* Prompt Selection Tabs */}
      <div className="lg:col-span-1"> {/* Assuming it's stacked or adjust grid if needed */}
        <Tabs defaultValue="predefined" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4 w-full">
            <TabsTrigger value="predefined" className="text-sm">Predefined Prompts ({availablePredefinedPrompts.length})</TabsTrigger>
            <TabsTrigger value="custom" className="text-sm">Custom Excel Prompts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="predefined">
            <div className="space-y-4">
              {availablePredefinedPrompts.length === 0 && !disabled ? (
                 <div className="text-center py-10 border rounded-md">
                    <p className="text-muted-foreground">No predefined prompts found for {bankDisplay}.</p>
                    <p className="text-sm text-muted-foreground mt-1">Check the CSV or use the "Custom Excel Prompts" tab.</p>
                 </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="text-sm font-medium">
                        {locallyTickedPrompts.filter(p => availablePredefinedPrompts.some(ap => ap.id === p.id)).length} of {availablePredefinedPrompts.length} selected
                      </span>
                    </div>
                    <div className="space-x-2">
                      <Button 
                        variant="outline" size="sm" onClick={selectAllPredefinedPrompts} 
                        disabled={disabled || availablePredefinedPrompts.length === 0 || locallyTickedPrompts.length === availablePredefinedPrompts.length}
                      >Select All</Button>
                      <Button 
                        variant="outline" size="sm" onClick={deselectAllPredefinedPrompts} 
                        disabled={disabled || locallyTickedPrompts.filter(p => availablePredefinedPrompts.some(ap => ap.id === p.id)).length === 0}
                      >Deselect All</Button>
                    </div>
                  </div>
                  
                  <ScrollArea className="h-[300px] pr-1 border rounded-md p-2"> {/* Adjusted height & padding */}
                    {Object.entries(predefinedPromptsByCategory).map(([category, promptsInCategory]) => (
                      <div key={category} className="mb-4">
                        <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider px-1">{category}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2"> {/* Two columns for prompt cards */}
                          {promptsInCategory.map((prompt) => (
                            <div 
                              key={prompt.id}
                              className={cn(
                                "border rounded-lg p-3 cursor-pointer transition-all hover:shadow-lg", // More card-like
                                locallyTickedPrompts.some(p => p.id === prompt.id) 
                                  ? "border-yellow-500 bg-yellow-100 dark:bg-yellow-700/30 text-black dark:text-white ring-2 ring-yellow-400" 
                                  : "border-gray-300 dark:border-gray-700 bg-card hover:bg-muted/70",
                                disabled ? "opacity-60 cursor-not-allowed" : ""
                              )}
                              onClick={() => !disabled && togglePrompt(prompt)}
                              role="checkbox"
                              aria-checked={locallyTickedPrompts.some(p => p.id === prompt.id)}
                              tabIndex={disabled ? -1 : 0}
                              onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') !disabled && togglePrompt(prompt); }}
                            >
                              <div className="flex justify-between items-start mb-1">
                                <div className="font-semibold text-sm text-foreground">{prompt.name}</div>
                                {locallyTickedPrompts.some(p => p.id === prompt.id) && (
                                  <Check className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground line-clamp-2"> {/* Ensure description class matches styling */}
                                {prompt.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                  
                  <Button 
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black mt-4" 
                    onClick={handleApplyPredefined}
                    disabled={disabled || availablePredefinedPrompts.length === 0}
                  >
                    Apply Selected Predefined Prompts
                  </Button>
                </>
              )}
            </div>
          </TabsContent>
          
          {/* Custom Prompts Tab - styling remains similar, ensure functionality */}
          <TabsContent value="custom">
            {/* ... (Custom Prompts UI - largely unchanged from your previous version) ... */}
            <div className="space-y-6">
                <div className="bg-muted/50 p-4 rounded-md border">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-sm">Upload Custom Prompts via Excel</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        The Excel file should contain columns: `Bank`, `PromptName`, `PromptText`, and optionally `Category`.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="promptFile">Upload Prompt Excel File (.xlsx, .xls)</Label>
                  <div className="mt-2 flex items-center space-x-3">
                    <div className="flex-1 relative">
                      <Input 
                        id="promptFile" type="file" onChange={handleCustomPromptUpload} 
                        accept=".xlsx,.xls" disabled={disabled || isLoadingCustom} className="flex-1"
                      />
                      {isLoadingCustom && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/70">
                          <Loader2 className="h-5 w-5 animate-spin text-yellow-500" />
                        </div>
                      )}
                    </div>
                    <Button 
                      variant="outline" size="icon" disabled={disabled || isLoadingCustom}
                      onClick={() => (document.getElementById('promptFile') as HTMLInputElement)?.click()}
                      aria-label="Upload custom prompt file"
                    ><Upload className="h-4 w-4" /></Button>
                  </div>
                  {customPromptFile && (
                    <div className="mt-2 flex items-center text-sm">
                      <FileText className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                      <span className="truncate">{customPromptFile.name}</span>
                      <Badge variant="outline" className="ml-2 text-xs">
                        {isLoadingCustom ? 'Processing...' : `${customPrompts.length} prompts loaded`}
                      </Badge>
                    </div>
                  )}
                </div>
                
                {customPrompts.length > 0 && !isLoadingCustom && (
                  <div className="border rounded-md p-4">
                    <h3 className="text-sm font-medium mb-3">Loaded Custom Prompts Preview</h3>
                    <ScrollArea className="h-[150px]">
                      <div className="space-y-1">
                        {Object.entries(customPromptsForDisplayByCategory).map(([category, prompts]) => (
                          <div key={category} className="mb-2">
                            <h4 className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">{category}</h4>
                            {prompts.map((prompt) => (
                              <div key={prompt.id} className="text-sm py-0.5 px-1 rounded-sm truncate" title={prompt.name}>
                                - {prompt.name}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                )}
                
                <Button 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black" 
                  disabled={!customPromptFile || disabled || isLoadingCustom || customPrompts.length === 0}
                  onClick={handleApplyCustomPrompts}
                > Apply Custom Prompts
                </Button>
              </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PromptSelector;