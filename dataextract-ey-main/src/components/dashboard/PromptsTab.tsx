// src/components/dashboard/PromptsTab.tsx
// (Ensure this is the version you have from the previous response, 
// it should be mostly correct for fetching and passing props)

import PromptSelector from '@/components/PromptSelector';
import PromptDescriptions from '@/components/PromptDescriptions';
import { PromptOption } from '@/lib/types';
import { useCallback, useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface PromptsTabProps {
  onPromptSelected: (prompts: PromptOption[]) => void; // This is Dashboard's handler
  isProcessing: boolean;
  selectedPrompts?: PromptOption[]; // User's currently active selection from Dashboard
}

const PromptsTab = ({ 
  onPromptSelected, 
  isProcessing, 
  selectedPrompts: dashboardSelectedPrompts = [] 
}: PromptsTabProps) => {
  const [fetchedBankPrompts, setFetchedBankPrompts] = useState<PromptOption[]>([]);
  const [isLoadingPrompts, setIsLoadingPrompts] = useState(false);
  const [currentBankDisplay, setCurrentBankDisplay] = useState<string>("selected bank(s)");
  const { toast } = useToast();

  // This callback will be called by PromptSelector when its "Apply" button is clicked.
  const handleApplyFromSelector = useCallback((newlyAppliedSelection: PromptOption[]) => {
    onPromptSelected(newlyAppliedSelection); // Update Dashboard's state
    // Toast for applying is now handled within PromptSelector itself after its own apply.
  }, [onPromptSelected]);

  useEffect(() => {
    const fetchBankPrompts = async () => {
      setIsLoadingPrompts(true);
      const storedBank = sessionStorage.getItem('selectedBank') || 'barclays';
      const storedBanksString = sessionStorage.getItem('selectedBanks');
      const enableMulti = sessionStorage.getItem('enableMultiBanks') === 'true';
      
      let banksToFetch: string[] = [];
      if (enableMulti && storedBanksString) {
        try {
          banksToFetch = JSON.parse(storedBanksString);
          setCurrentBankDisplay(banksToFetch.map(b => b.charAt(0).toUpperCase() + b.slice(1)).join(', ') || 'selected banks');
        } catch (e) {
          console.error("Error parsing selectedBanks from sessionStorage", e);
          banksToFetch = [storedBank]; 
          setCurrentBankDisplay(storedBank.charAt(0).toUpperCase() + storedBank.slice(1));
        }
      } else {
        banksToFetch = [storedBank];
        setCurrentBankDisplay(storedBank.charAt(0).toUpperCase() + storedBank.slice(1));
      }

      if (banksToFetch.length === 0 && !enableMulti) { // Check only if not multi-mode and no single bank
        setFetchedBankPrompts([]);
        setIsLoadingPrompts(false);
        toast({ title: "No Bank Selected", description: "Please select a bank on the previous screen.", variant: "destructive" });
        return;
      }
      if (banksToFetch.length === 0 && enableMulti) {
         setFetchedBankPrompts([]);
         setIsLoadingPrompts(false);
         toast({ title: "No Banks Selected for Multi-Analysis", description: "Please select banks on the previous screen.", variant: "default" });
        return;
      }


      try {
        const allFetchedPrompts: PromptOption[] = [];
        const uniquePromptIds = new Set<string>();

        for (const bankId of banksToFetch) {
          const response = await fetch(`http://localhost:5000/api/prompts/default/${bankId}`);
          if (!response.ok) {
            const errorData = await response.json();
            console.warn(`Failed to fetch prompts for ${bankId}: ${errorData.error || response.statusText}`);
            toast({ title: `Prompt Fetch Error for ${bankId}`, description: errorData.error || "Could not load prompts.", variant: "destructive"});
            continue; 
          }
          const data = await response.json();
          if (data.status === 'success' && Array.isArray(data.prompts)) {
            data.prompts.forEach((prompt: PromptOption) => {
              if (!uniquePromptIds.has(prompt.id)) { 
                allFetchedPrompts.push(prompt);
                uniquePromptIds.add(prompt.id);
              }
            });
          } else if (data.message) {
            console.log(data.message); // Log "No prompts found for bank" message
          }
        }
        setFetchedBankPrompts(allFetchedPrompts);
        if (allFetchedPrompts.length === 0 && banksToFetch.length > 0) {
             toast({ title: "No Predefined Prompts", description: `No predefined prompts were found for ${banksToFetch.join(', ')} in the CSV.`, variant: "default" });
        }
      } catch (error) {
        console.error("Error fetching predefined prompts:", error);
        toast({
          title: "Error Fetching Prompts",
          description: error instanceof Error ? error.message : "Could not load predefined prompts from server.",
          variant: "destructive",
        });
        setFetchedBankPrompts([]);
      } finally {
        setIsLoadingPrompts(false);
      }
    };

    fetchBankPrompts();
  }, [toast]); 

  if (isLoadingPrompts) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-yellow-500" />
        <p className="text-muted-foreground">Loading prompts for {currentBankDisplay}...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <PromptSelector 
          onPromptsApplied={handleApplyFromSelector} 
          disabled={isProcessing || isLoadingPrompts}
          availablePredefinedPrompts={fetchedBankPrompts}
          // Pass the dashboard's current selection to pre-tick items in PromptSelector
          initiallyTickedPrompts={dashboardSelectedPrompts} 
          bankDisplay={currentBankDisplay}
        />
      </div>
      <div>
        <PromptDescriptions 
          availablePrompts={fetchedBankPrompts} 
          bankDisplay={currentBankDisplay}
        />
      </div>
    </div>
  );
};

export default PromptsTab;