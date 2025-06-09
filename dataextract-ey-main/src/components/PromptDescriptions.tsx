// src/components/PromptDescriptions.tsx

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, FileText, Newspaper, Info } from "lucide-react"; 
import { PromptOption } from "@/lib/types"; 
import { useEffect, useState, useMemo } from "react";

interface PromptDescriptionsProps {
  availablePrompts: PromptOption[]; 
  bankDisplay: string; 
}

interface GroupedPrompts {
  [groupTitle: string]: { 
    prompts: PromptOption[];
    isBankGroup?: boolean; 
    categories?: { 
        [categoryName: string]: PromptOption[];
    }
  };
}

// Helper function defined outside or at the top of the component file
const getCategoryIcon = (groupName: string, isBankGroup?: boolean): JSX.Element => {
  if (isBankGroup) return <Building2 className="h-5 w-5 text-yellow-500 flex-shrink-0" />;
  const lowerGroupName = groupName.toLowerCase();
  if (lowerGroupName.includes("ecl") || lowerGroupName.includes("credit risk")) return <FileText className="h-5 w-5 text-yellow-500 flex-shrink-0" />;
  if (lowerGroupName.includes("scenario")) return <Newspaper className="h-5 w-5 text-yellow-500 flex-shrink-0" />;
  if (lowerGroupName.includes("methodology")) return <Info className="h-5 w-5 text-yellow-500 flex-shrink-0" />;
  return <Info className="h-5 w-5 text-yellow-500 flex-shrink-0" />; 
};

const PromptDescriptions = ({ availablePrompts, bankDisplay }: PromptDescriptionsProps) => {
  const [isMultiBankMode, setIsMultiBankMode] = useState(false);
  
  useEffect(() => {
    setIsMultiBankMode(sessionStorage.getItem('enableMultiBanks') === 'true');
  }, []); // Run once on mount or when relevant session storage might change

  const groupedPrompts = useMemo(() => {
    const enableMulti = sessionStorage.getItem('enableMultiBanks') === 'true';
    // setIsMultiBankMode(enableMulti); // Setting state inside useMemo is an anti-pattern. Moved to useEffect.

    if (!availablePrompts || availablePrompts.length === 0) {
      return {};
    }

    const newGroupedPrompts: GroupedPrompts = {};
    if (enableMulti) {
      availablePrompts.forEach(prompt => {
        const bankKey = prompt.bankName || "Other Banks";
        if (!newGroupedPrompts[bankKey]) {
          newGroupedPrompts[bankKey] = { prompts: [], isBankGroup: true, categories: {} };
        }
        newGroupedPrompts[bankKey].prompts.push(prompt);
        
        const categoryKey = prompt.category || "Default Prompts";
        // Ensure categories object exists before pushing
        if (!newGroupedPrompts[bankKey].categories) {
            newGroupedPrompts[bankKey].categories = {};
        }
        if (!newGroupedPrompts[bankKey].categories![categoryKey]) {
          newGroupedPrompts[bankKey].categories![categoryKey] = [];
        }
        newGroupedPrompts[bankKey].categories![categoryKey].push(prompt);
      });
    } else {
      // Single bank mode: group by prompt.category directly
      let singleBankPromptsCategorized: Record<string, PromptOption[]> = {};
      availablePrompts.forEach(prompt => {
          const categoryKey = prompt.category || "Default Prompts";
           if (!singleBankPromptsCategorized[categoryKey]) {
            singleBankPromptsCategorized[categoryKey] = [];
          }
          singleBankPromptsCategorized[categoryKey].push(prompt);
      });
      // If single bank, the top-level group IS the category
      for(const categoryKey in singleBankPromptsCategorized) {
        newGroupedPrompts[categoryKey] = { prompts: singleBankPromptsCategorized[categoryKey], isBankGroup: false };
      }
    }
    return newGroupedPrompts;
  }, [availablePrompts, bankDisplay]); // isMultiBankMode will be stable from its own useEffect

  const renderPromptList = (prompts: PromptOption[]) => (
    prompts.map((prompt) => (
      <div key={prompt.id} className="bg-muted/40 dark:bg-slate-800/30 p-3 rounded-md border border-gray-200 dark:border-slate-700/60 space-y-1.5">
        <div className="font-semibold text-sm text-foreground">{prompt.name}</div>
        {prompt.description && (
          <p className="text-xs text-muted-foreground italic">
            {prompt.description}
          </p>
        )}
        <details className="text-xs">
          <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline focus:outline-none">
            Show Actual Prompt Text
          </summary>
          <pre className="mt-1.5 p-2 bg-gray-100 dark:bg-slate-900/50 rounded text-xs whitespace-pre-wrap break-words overflow-x-auto max-h-48">
            {prompt.template}
          </pre>
        </details>
      </div>
    ))
  );

  // ... (rest of the JSX from the previous correct version) ...
  return (
    <Card className="shadow-sm border-gray-200 dark:border-gray-700 h-full flex flex-col">
      <CardHeader className="bg-gray-50 dark:bg-slate-800/50 border-b dark:border-gray-700">
        <CardTitle className="text-lg flex items-center">
          <Building2 className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0" />
          Available Extraction Prompts
        </CardTitle>
        <CardDescription className="dark:text-slate-400">
          Details of prompts loaded from the CSV for: <span className="font-medium">{bankDisplay}</span>.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4 flex-grow overflow-y-auto">
        {availablePrompts.length === 0 ? (
          <div className="text-center py-10 h-full flex flex-col justify-center items-center">
            <Info className="h-10 w-10 text-muted-foreground mb-3" />
            <p className="text-muted-foreground">No predefined prompts loaded for {bankDisplay}.</p>
            <p className="text-sm text-muted-foreground mt-1">Prompts are sourced from the central CSV file via the backend.</p>
          </div>
        ) : (
          <Accordion type={isMultiBankMode ? "multiple" : "single"} collapsible className="w-full">
            {Object.entries(groupedPrompts).map(([groupTitle, groupData]) => (
              <AccordionItem key={groupTitle} value={groupTitle} className="border-b dark:border-slate-700 last:border-b-0">
                <AccordionTrigger className="hover:bg-gray-100 dark:hover:bg-slate-700/40 px-4 py-3 rounded-t-md text-left">
                  <div className="flex items-center">
                    {getCategoryIcon(groupTitle, groupData.isBankGroup)}
                    <span className="ml-3 font-medium text-foreground">{groupTitle} ({groupData.prompts.length})</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-2 pt-1 pb-3 space-y-2 bg-background dark:bg-slate-800/10 rounded-b-md">
                  {groupData.isBankGroup && groupData.categories ? (
                    <Accordion type="multiple" className="w-full pl-2">
                      {Object.entries(groupData.categories).map(([categoryName, promptsInCategory]) => (
                         <AccordionItem key={`${groupTitle}-${categoryName}`} value={`${groupTitle}-${categoryName}`} className="border-none">
                           <AccordionTrigger className="text-sm hover:bg-gray-50 dark:hover:bg-slate-700/20 px-2 py-2 rounded-md text-left">
                             <div className="flex items-center">
                               {getCategoryIcon(categoryName, false)} {/* isBankGroup is false for categories */}
                               <span className="ml-2 font-normal">{categoryName} ({promptsInCategory.length})</span>
                             </div>
                           </AccordionTrigger>
                           <AccordionContent className="px-2 pt-1 pb-2 space-y-2">
                             {renderPromptList(promptsInCategory)}
                           </AccordionContent>
                         </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    renderPromptList(groupData.prompts)
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </CardContent>
      <CardFooter className="bg-gray-50 dark:bg-slate-800/30 text-xs text-center py-3 border-t dark:border-gray-700 mt-auto">
        <div className="w-full flex items-center justify-center">
          <span className="text-slate-500 dark:text-slate-400">Supported by</span>
          <span className="font-semibold text-black dark:text-white ml-1">EYQ</span>
          <span className="text-slate-500 dark:text-slate-400 ml-1">natural language processing</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PromptDescriptions;