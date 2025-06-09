
import { useState, useEffect, useRef } from 'react';
import * as pdfjs from 'pdfjs-dist';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Loader, RefreshCw } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

// Fix worker import
import { GlobalWorkerOptions } from 'pdfjs-dist';

// Set worker source directly
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  file: File | null;
  className?: string;
}

const PDFViewer = ({ file, className = '' }: PDFViewerProps) => {
  const [pdfDoc, setPdfDoc] = useState<pdfjs.PDFDocumentProxy | null>(null);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [renderError, setRenderError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [retryCount, setRetryCount] = useState(0); // Track retry attempts
  const containerRef = useRef<HTMLDivElement>(null);

  // Load the PDF when the file changes or when retryCount changes
  useEffect(() => {
    if (!file) {
      setPdfDoc(null);
      return;
    }

    let isMounted = true;
    
    // Reset states
    setIsLoading(true);
    setRenderError(null);
    
    console.log("Starting to load PDF file:", file.name);
    
    // Convert file to array buffer
    const fileReader = new FileReader();
    
    fileReader.onload = async (event) => {
      if (!isMounted) return;
      
      try {
        const arrayBuffer = event.target?.result;
        
        if (!arrayBuffer) {
          setRenderError("Failed to read file");
          setIsLoading(false);
          return;
        }
        
        // Load the PDF document
        const typedArray = new Uint8Array(arrayBuffer as ArrayBuffer);
        
        console.log("Creating PDF loading task");
        const loadingTask = pdfjs.getDocument(typedArray);
        
        loadingTask.promise
          .then(pdf => {
            if (!isMounted) return;
            
            console.log("PDF loaded successfully with", pdf.numPages, "pages");
            setPdfDoc(pdf);
            setTotalPages(pdf.numPages);
            setPageNum(1); // Reset to first page when loading new PDF
            setIsLoading(false);
          })
          .catch(error => {
            if (!isMounted) return;
            
            console.error('Error loading PDF:', error);
            setRenderError(`Error loading PDF: ${error.message}`);
            setIsLoading(false);
          });
      } catch (error: any) {
        if (!isMounted) return;
        
        console.error('Error processing PDF:', error);
        setRenderError(`Error processing PDF: ${error.message}`);
        setIsLoading(false);
      }
    };
    
    fileReader.onerror = () => {
      if (!isMounted) return;
      
      setRenderError("Error reading file");
      setIsLoading(false);
    };
    
    // Start reading the file
    fileReader.readAsArrayBuffer(file);
    
    return () => {
      isMounted = false;
      if (pdfDoc) {
        try {
          pdfDoc.destroy().catch(e => console.error("Error destroying PDF:", e));
        } catch (error) {
          console.error("Error destroying previous PDF:", error);
        }
      }
    };
  }, [file, retryCount]);

  // Render the PDF page
  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    let isMounted = true;
    
    const renderPage = async () => {
      if (!isMounted) return;
      
      try {
        // Get the page
        console.log("Getting page", pageNum);
        const page = await pdfDoc.getPage(pageNum);
        
        if (!isMounted || !canvasRef.current) return;
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        if (!context) {
          setRenderError("Could not get canvas context");
          return;
        }
        
        // Calculate scale to fit width
        const containerWidth = containerRef.current?.clientWidth || canvas.parentElement?.clientWidth || 800;
        const viewport = page.getViewport({ scale: 1.0 });
        const scale = Math.min(containerWidth / viewport.width, 1.0); // Limit scale to 1.0 for better quality
        const scaledViewport = page.getViewport({ scale });

        // Set canvas dimensions
        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;
        
        // Improve rendering quality
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        
        // Set background color
        context.fillStyle = '#FFFFFF';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Render the page
        console.log("Rendering page", pageNum, "of PDF");
        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
          background: 'rgba(255,255,255,1)',
        };
        
        await page.render(renderContext).promise;
        
        // Add subtle page border
        context.strokeStyle = '#e2e8f0';
        context.lineWidth = 1;
        context.strokeRect(0, 0, canvas.width, canvas.height);
      } catch (error: any) {
        if (isMounted) {
          console.error('Error rendering page:', error);
          setRenderError(`Error rendering page: ${error.message}`);
        }
      }
    };

    renderPage();
    
    return () => {
      isMounted = false;
    };
  }, [pdfDoc, pageNum]);

  // Effect to adjust canvas size when window resizes
  useEffect(() => {
    const handleResize = () => {
      // Re-render the current page to adjust for new container width
      if (pdfDoc) {
        // Simply update pageNum state to trigger re-render effect
        setPageNum(prevPage => prevPage);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pdfDoc]);

  const goToPreviousPage = () => {
    if (pageNum <= 1) return;
    setPageNum(pageNum - 1);
  };

  const goToNextPage = () => {
    if (pageNum >= totalPages) return;
    setPageNum(pageNum + 1);
  };

  // Create a simple PDF retry button
  const handleRetry = () => {
    if (!file) return;
    setRetryCount(retryCount + 1); // Increment retry count to trigger useEffect
    setIsLoading(true);
    setRenderError(null);
  };

  return (
    <div className={`flex flex-col h-full ${className}`}>
      <ScrollArea className="flex-1 h-full bg-gray-50">
        <div ref={containerRef} className="flex justify-center p-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-64 w-full">
              <Loader className="h-8 w-8 animate-spin text-yellow-400 mb-4" />
              <div className="text-muted-foreground">
                Loading PDF...
              </div>
            </div>
          ) : renderError ? (
            <div className="flex flex-col items-center justify-center h-64 w-full">
              <div className="text-red-500 mb-4">{renderError}</div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleRetry}
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Retry Loading PDF
              </Button>
            </div>
          ) : !pdfDoc ? (
            <div className="flex items-center justify-center h-64 w-full">
              <div className="text-center">
                <div className="text-muted-foreground mb-2">No PDF selected</div>
                <div className="text-xs text-muted-foreground">Upload a PDF document to view it here</div>
              </div>
            </div>
          ) : (
            <div className="relative shadow-lg bg-white rounded-lg p-1">
              <canvas ref={canvasRef} className="relative z-10 rounded-lg" />
            </div>
          )}
        </div>
      </ScrollArea>

      {pdfDoc && (
        <div className="p-2 border-t bg-white flex justify-between items-center">
          <div className="text-sm text-gray-600 truncate max-w-[150px]">
            {file?.name || "Document"}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={pageNum === 1}
              onClick={goToPreviousPage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium min-w-[50px] text-center">
              {pageNum} / {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={pageNum === totalPages}
              onClick={goToNextPage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
