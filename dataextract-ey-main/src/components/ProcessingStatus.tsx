
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

interface ProcessingStatusProps {
  isProcessing: boolean;
  progress: number;
  currentStep: string;
  totalFiles?: number;
  processedFiles?: number;
  className?: string;
}

const ProcessingStatus = ({
  isProcessing,
  progress,
  currentStep,
  totalFiles = 1,
  processedFiles = 0,
  className
}: ProcessingStatusProps) => {
  if (!isProcessing) return null;

  return (
    <Card className={cn("border-yellow-400 bg-yellow-50", className)}>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center text-sm">
              <span className="font-medium text-black">Processing</span>
              <span className="ml-2 text-black/70">{processedFiles}/{totalFiles} files</span>
            </div>
            <p className="text-xs text-black/70">Extracting financial data from reports</p>
          </div>
          <Loader className="h-4 w-4 text-yellow-500 animate-spin" />
        </div>
        
        <div className="space-y-2">
          <div className="text-sm font-medium text-black">{currentStep}</div>
          <div className="relative">
            <Progress 
              value={progress} 
              className="h-2" 
              indicatorClassName="bg-yellow-400" 
            />
            <div className="absolute right-0 top-0 -mt-5 text-xs font-medium text-black">
              {progress.toFixed(1)}%
            </div>
          </div>
          <div className="text-xs text-black/70">
            Processing financial data, please wait...
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessingStatus;
