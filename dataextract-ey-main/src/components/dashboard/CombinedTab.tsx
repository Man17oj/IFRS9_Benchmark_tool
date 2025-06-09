// src/components/dashboard/CombinedTab.tsx

import { Button } from '@/components/ui/button';
import { ProcessingResult } from '@/lib/types';
import { Download } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export interface CombinedTabProps { // Ensure this interface matches Dashboard's usage
  results: ProcessingResult[];
  onDownloadResults: () => void;
  selectedBank: string;
}

const CombinedTab = ({ results, onDownloadResults, selectedBank }: CombinedTabProps) => {
  // ... (rest of the component logic from the previous correct version)
  const combinedData = results
    .filter(result => result.status === 'success' && result.data)
    .flatMap(result => {
      return result.data?.map(item => ({
        ...item,
        Source: `${result.fileName} - ${result.promptName}`
      })) || [];
    });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold mb-1">Combined Results for {selectedBank}</h2>
          <p className="text-sm text-muted-foreground">
            View and download the final processed data in Excel format
          </p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onDownloadResults}
          className="flex items-center gap-1 border-yellow-400 bg-white text-black hover:bg-yellow-50 dark:text-black dark:hover:bg-yellow-100 dark:border-yellow-500"
        >
          <Download className="h-4 w-4" />
          <span>Download Excel</span>
        </Button>
      </div>
      
      {combinedData.length > 0 ? (
        <div className="border rounded-lg overflow-hidden dark:border-gray-700">
          <div className="flex justify-between items-center p-3 bg-muted dark:bg-gray-800 border-b dark:border-gray-700">
            <Button 
              variant="outline" 
              size="sm" 
              className="py-1 h-8 bg-yellow-400 hover:bg-yellow-500 border-none text-black"
            >
              Combined View
            </Button>
            <div className="text-sm text-muted-foreground">
              {combinedData.length} rows
            </div>
          </div>
          <ScrollArea className="h-[650px]">
            <Table>
              <TableHeader className="bg-muted/70 dark:bg-gray-800/70 sticky top-0">
                <TableRow className="dark:border-gray-700">
                  <TableHead className="font-semibold text-black dark:text-white">Category</TableHead>
                  <TableHead className="font-semibold text-black dark:text-white">Stage</TableHead>
                  <TableHead className="font-semibold text-black dark:text-white">Field</TableHead>
                  <TableHead className="font-semibold text-black dark:text-white">Value</TableHead>
                  <TableHead className="font-semibold text-black dark:text-white">Source</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {combinedData.map((item, index) => (
                  <TableRow key={index} className="dark:border-gray-700">
                    <TableCell className="dark:text-gray-300">{item.Category === 'ECL By Stage' ? 'ECL' : item.Category}</TableCell>
                    <TableCell className="dark:text-gray-300">{item.Stage}</TableCell>
                    <TableCell className="dark:text-gray-300">{item.Field}</TableCell>
                    <TableCell className="dark:text-gray-300">{item.Value}</TableCell>
                    <TableCell className="dark:text-gray-300">{item.Source}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
      ) : (
        <div className="border rounded-lg p-12 text-center dark:border-gray-700">
          <p className="text-muted-foreground">No results available yet.</p>
          <p className="text-sm text-muted-foreground mt-1">Process files with prompts to see combined results.</p>
        </div>
      )}
    </div>
  );
};

export default CombinedTab;