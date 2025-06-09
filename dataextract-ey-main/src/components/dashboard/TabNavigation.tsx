
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, FileText, FileSpreadsheet, Download, LayoutPanelLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
  return (
    <div className="border-b dark:border-gray-700">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl mx-auto my-4">
            <TabsTrigger 
              value="upload" 
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black dark:text-white dark:data-[state=active]:bg-yellow-400 dark:data-[state=active]:text-black"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </TabsTrigger>
            <TabsTrigger 
              value="prompts" 
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black dark:text-white dark:data-[state=active]:bg-yellow-400 dark:data-[state=active]:text-black"
            >
              <FileText className="h-4 w-4 mr-2" />
              Prompts
            </TabsTrigger>
            <TabsTrigger 
              value="results" 
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black dark:text-white dark:data-[state=active]:bg-yellow-400 dark:data-[state=active]:text-black"
            >
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Results
            </TabsTrigger>
            <TabsTrigger 
              value="combined" 
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black dark:text-white dark:data-[state=active]:bg-yellow-400 dark:data-[state=active]:text-black"
            >
              <Download className="h-4 w-4 mr-2" />
              Combined
            </TabsTrigger>
            <TabsTrigger 
              value="sidebyside" 
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black dark:text-white dark:data-[state=active]:bg-yellow-400 dark:data-[state=active]:text-black"
            >
              <LayoutPanelLeft className="h-4 w-4 mr-2" />
              Side by Side
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <ThemeToggle className="mr-4" />
      </div>
    </div>
  );
};

export default TabNavigation;
