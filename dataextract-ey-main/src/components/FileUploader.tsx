
import { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { UploadedFile } from '@/lib/types';
import { Upload, FileText, X, Check, Loader } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface FileUploaderProps {
  onFilesUploaded: (files: UploadedFile[], actualFiles: Map<string, File>) => void;
  acceptedFileTypes?: string[];
  maxFiles?: number;
}

const FileUploader = ({ 
  onFilesUploaded, 
  acceptedFileTypes = ['.pdf'], 
  maxFiles = 10 
}: FileUploaderProps) => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [actualFiles, setActualFiles] = useState<Map<string, File>>(new Map());
  const { toast } = useToast();

  const handleFileSelect = useCallback((selectedFiles: FileList | null) => {
    if (!selectedFiles || selectedFiles.length === 0) return;

    // Check if adding these files would exceed the maximum
    if (files.length + selectedFiles.length > maxFiles) {
      toast({
        title: "Too many files",
        description: `You can upload a maximum of ${maxFiles} files.`,
        variant: "destructive",
      });
      return;
    }

    const newFiles: UploadedFile[] = [];
    const newActualFiles = new Map(actualFiles);
    
    Array.from(selectedFiles).forEach(file => {
      // Check file type
      const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
      if (!acceptedFileTypes.includes(fileExtension) && !acceptedFileTypes.includes('*')) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported file type. Please upload ${acceptedFileTypes.join(", ")} files.`,
          variant: "destructive",
        });
        return;
      }
      
      // File is valid, add it to our list
      const fileId = `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const newFile: UploadedFile = {
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        status: 'success' as const,  // Mark as success immediately for simplicity
        progress: 100,  // Set to 100% immediately
      };
      
      // Store the actual File object in our Map
      newActualFiles.set(fileId, file);
      newFiles.push(newFile);
    });
    
    if (newFiles.length > 0) {
      // Update state in a single batch
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      setActualFiles(newActualFiles);
      
      // Notify parent component after our state is updated
      setTimeout(() => {
        onFilesUploaded(updatedFiles, newActualFiles);
      }, 0);
    }
  }, [files, actualFiles, maxFiles, acceptedFileTypes, onFilesUploaded, toast]);

  const removeFile = useCallback((id: string) => {
    const updatedFiles = files.filter(file => file.id !== id);
    setFiles(updatedFiles);
    
    // Also remove the actual File object
    const newActualFiles = new Map(actualFiles);
    newActualFiles.delete(id);
    setActualFiles(newActualFiles);
    
    onFilesUploaded(updatedFiles, newActualFiles);
  }, [files, actualFiles, onFilesUploaded]);

  const formatFileSize = (sizeInBytes: number) => {
    if (sizeInBytes < 1024) return `${sizeInBytes} B`;
    else if (sizeInBytes < 1048576) return `${(sizeInBytes / 1024).toFixed(1)} KB`;
    else return `${(sizeInBytes / 1048576).toFixed(1)} MB`;
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  return (
    <div className="w-full space-y-4">
      {/* File upload area */}
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
          isDragging ? "border-yellow-400 bg-yellow-50" : "border-muted-foreground/20",
          files.length >= maxFiles && "opacity-50 cursor-not-allowed"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => files.length < maxFiles && fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept={acceptedFileTypes.join(',')}
          multiple
          onChange={(e) => handleFileSelect(e.target.files)}
          disabled={files.length >= maxFiles}
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <Upload className="h-12 w-12 text-muted-foreground" />
          <h3 className="text-lg font-medium">Upload PDF Financial Reports</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Drag and drop files here, or click to browse. We accept PDF files with financial data.
          </p>
          <Button 
            variant="outline"
            className="mt-2"
            disabled={files.length >= maxFiles}
          >
            Select Files
          </Button>
        </div>
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="font-medium mb-2 text-sm">Uploaded Files ({files.length}/{maxFiles})</h3>
          <div className="space-y-2">
            {files.map(file => (
              <div 
                key={file.id} 
                className="flex items-center p-3 bg-muted/30 rounded-md border"
              >
                <FileText className="h-5 w-5 text-muted-foreground mr-3" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <span className="text-xs text-muted-foreground">{formatFileSize(file.size)}</span>
                  </div>
                  {file.status === 'pending' && (
                    <Progress value={file.progress} className="h-1 mt-1" />
                  )}
                </div>
                <div className="ml-4 flex items-center">
                  {file.status === 'pending' && <Loader className="h-4 w-4 text-muted-foreground animate-spin" />}
                  {file.status === 'success' && <Check className="h-4 w-4 text-green-500" />}
                  {file.status === 'error' && <X className="h-4 w-4 text-destructive" />}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(file.id);
                    }}
                    className="ml-2 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
