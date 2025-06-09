# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# codebase_frontend.md

```md
# .gitignore

\`\`\`
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

\`\`\`

# components.json

\`\`\`json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
\`\`\`

# eslint.config.js

\`\`\`js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
);

\`\`\`

# index.html

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>finscope-data-miner</title>
    <meta name="description" content="Lovable Generated Project" />
    <meta name="author" content="Lovable" />

    <meta property="og:title" content="finscope-data-miner" />
    <meta property="og:description" content="Lovable Generated Project" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  </head>

  <body>
    <div id="root"></div>
    <!-- IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT! -->
    <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

\`\`\`

# package.json

\`\`\`json
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-context-menu": "^2.2.1",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.4",
    "@tanstack/react-query": "^5.56.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "framer-motion": "^12.10.5",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "pdfjs-dist": "^3.10.111",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.0",
    "react-resizable-panels": "^2.1.3",
    "react-router-dom": "^6.26.2",
    "recharts": "^2.12.7",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.3",
    "xlsx": "^0.18.5",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.0",
    "@tailwindcss/typography": "^0.5.15",
    "@types/node": "^22.5.5",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.9.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "globals": "^15.9.0",
    "lovable-tagger": "^1.1.7",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.11",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.0.1",
    "vite": "^5.4.1"
  }
}

\`\`\`

# postcss.config.js

\`\`\`js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

\`\`\`

# public\favicon.ico

This is a binary file of the type: Binary

# public\placeholder.svg

This is a file of the type: SVG Image

# public\robots.txt

\`\`\`txt
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

\`\`\`

# README.md

\`\`\`md
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/f1c52b0c-481b-4d58-84cf-5beb28959f75

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f1c52b0c-481b-4d58-84cf-5beb28959f75) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

\`\`\`sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
\`\`\`

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f1c52b0c-481b-4d58-84cf-5beb28959f75) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

\`\`\`

# src\App.css

\`\`\`css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

\`\`\`

# src\App.tsx

\`\`\`tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen from "./components/IntroScreen";
import Dashboard from "./pages/Dashboard";
import BankSelection from "./pages/BankSelection";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

const queryClient = new QueryClient();

// Simple, elegant fade transition
const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

// Smooth, quick transition
const pageTransition = {
  duration: 0.3,
  ease: "easeInOut"
};

// Animation wrapper component with elegant transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full min-h-screen"
      >
        {/* Theme toggle positioned in header instead of fixed position */}
        <Routes location={location}>
          <Route path="/" element={<IntroScreen />} />
          <Route path="/select-bank" element={<BankSelection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

\`\`\`

# src\components\dashboard\CombinedTab.tsx

\`\`\`tsx

import { Button } from '@/components/ui/button';
import { ProcessingResult } from '@/lib/types';
import { Download } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface CombinedTabProps {
  results: ProcessingResult[];
  onDownloadResults: () => void;
}

const CombinedTab = ({ results, onDownloadResults }: CombinedTabProps) => {
  // Extract unique data entries from all results
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
          <h2 className="text-lg font-semibold mb-1">Combined Results</h2>
          <p className="text-sm text-muted-foreground">
            View and download the final processed data in Excel format
          </p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onDownloadResults}
          className="flex items-center gap-1 border-yellow-400 bg-white text-black hover:bg-yellow-50"
        >
          <Download className="h-4 w-4" />
          <span>Download Excel</span>
        </Button>
      </div>
      
      {combinedData.length > 0 ? (
        <div className="border rounded-lg overflow-hidden">
          <div className="flex justify-between items-center p-3 bg-muted border-b">
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
          
          {/* Increased the height from 500px to 650px for larger view */}
          <ScrollArea className="h-[650px]">
            <Table>
              <TableHeader className="bg-muted/70 sticky top-0">
                <TableRow>
                  <TableHead className="font-semibold text-black">Category</TableHead>
                  <TableHead className="font-semibold text-black">Stage</TableHead>
                  <TableHead className="font-semibold text-black">Field</TableHead>
                  <TableHead className="font-semibold text-black">Value</TableHead>
                  <TableHead className="font-semibold text-black">Source</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {combinedData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.Category === 'ECL By Stage' ? 'ECL' : item.Category}</TableCell>
                    <TableCell>{item.Stage}</TableCell>
                    <TableCell>{item.Field}</TableCell>
                    <TableCell>{item.Value}</TableCell>
                    <TableCell>{item.Source}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
      ) : (
        <div className="border rounded-lg p-12 text-center">
          <p className="text-muted-foreground">No results available yet.</p>
          <p className="text-sm text-muted-foreground mt-1">Process files with prompts to see combined results.</p>
        </div>
      )}
    </div>
  );
};

export default CombinedTab;

\`\`\`

# src\components\dashboard\Footer.tsx

\`\`\`tsx

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-auto py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <div>AiDEx - AI powered Data Extraction</div>
          <div>© {new Date().getFullYear()} Barclays Financial Services</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

\`\`\`

# src\components\dashboard\PromptsTab.tsx

\`\`\`tsx

import PromptSelector from '@/components/PromptSelector';
import PromptDescriptions from '@/components/PromptDescriptions';
import { PromptOption } from '@/lib/types';
import { useCallback } from 'react';

interface PromptsTabProps {
  onPromptSelected: (prompts: PromptOption[]) => void;
  isProcessing: boolean;
  selectedPrompts?: PromptOption[];
}

const PromptsTab = ({ onPromptSelected, isProcessing, selectedPrompts = [] }: PromptsTabProps) => {
  // Use a callback to avoid setState during render
  const handlePromptSelected = useCallback((prompts: PromptOption[]) => {
    onPromptSelected(prompts);
  }, [onPromptSelected]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <PromptSelector 
          onPromptSelected={handlePromptSelected}
          disabled={isProcessing}
          selectedPrompts={selectedPrompts}
        />
      </div>
      <div>
        <PromptDescriptions />
      </div>
    </div>
  );
};

export default PromptsTab;

\`\`\`

# src\components\dashboard\ResultsTab.tsx

\`\`\`tsx

import ResultsViewer from '@/components/ResultsViewer';
import { ProcessingResult } from '@/lib/types';

interface ResultsTabProps {
  results: ProcessingResult[];
  onDownloadResults: () => void;
  isProcessing: boolean;
  processingProgress: number;
  processingStep: string;
}

const ResultsTab = ({ 
  results, 
  onDownloadResults, 
  isProcessing, 
  processingProgress, 
  processingStep 
}: ResultsTabProps) => {
  // Calculate total files and processed files from the results
  const uniqueFileIds = new Set(results.map(r => r.fileId));
  const totalFiles = isProcessing ? Math.max(1, uniqueFileIds.size) : uniqueFileIds.size;
  const processedFiles = isProcessing && processingProgress >= 100 ? totalFiles : uniqueFileIds.size;
  
  return (
    <ResultsViewer 
      results={results}
      onDownloadResults={onDownloadResults}
      isProcessing={isProcessing}
      processingProgress={processingProgress}
      processingStep={processingStep}
      totalFiles={totalFiles}
      processedFiles={processedFiles}
    />
  );
};

export default ResultsTab;

\`\`\`

# src\components\dashboard\SideBySideTab.tsx

\`\`\`tsx

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { ProcessingResult } from '@/lib/types';
import PDFViewer from '@/components/PDFViewer';

interface SideBySideTabProps {
  results: ProcessingResult[];
}

const SideBySideTab = ({ results }: SideBySideTabProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedResult, setSelectedResult] = useState<ProcessingResult | null>(
    results.length > 0 ? results[0] : null
  );
  const [retryCounter, setRetryCounter] = useState(0);
  const [pdfFiles, setPdfFiles] = useState<Map<string, File>>(new Map());

  // Group results by file
  const resultsByFile: Record<string, ProcessingResult[]> = results.reduce((acc, result) => {
    if (!result) return acc;
    if (!acc[result.fileId]) {
      acc[result.fileId] = [];
    }
    acc[result.fileId].push(result);
    return acc;
  }, {} as Record<string, ProcessingResult[]>);

  // Get unique file names
  const uniqueFiles = Object.entries(resultsByFile).map(([_, fileResults]) => {
    return fileResults[0];
  });

  // Create an improved dummy PDF file with better formatting - same as in UploadTab
  const createDummyPDF = (fileName: string): File => {
    // This is a higher quality PDF with better formatting
    const base64PDF = `JVBERi0xLjcKJeTjz9IKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFIvTGFuZyhqYS1KUCkgL1N0cnVjdFRyZWVSb290IDIxIDAgUi9NYXJrSW5mbzw8L01hcmtlZCB0cnVlPj4vTWV0YWRhdGEgNTggMCBSL1ZpZXdlclByZWZlcmVuY2VzIDU5IDAgUj4+CmVuZG9iagoyIDAgb2JqCjw8L1R5cGUvUGFnZXMvQ291bnQgMS9LaWRzWyAzIDAgUl0gPj4KZW5kb2JqCjMgMCBvYmoKPDwvVHlwZS9QYWdlL1BhcmVudCAyIDAgUi9SZXNvdXJjZXM8PC9YT2JqZWN0PDwvSW1hZ2U1IDUgMCBSL0ltYWdlNyA3IDAgUj4+L0ZvbnQ8PC9GMSAxMSAwIFIvRjIgMTMgMCBSL0YzIDE1IDAgUi9GNCAxNyAwIFI+Pi9FeHRHU3RhdGU8PC9HUzcgNyAwIFIvR1M4IDggMCBSPj4vUHJvY1NldFsvUERGL1RleHQvSW1hZ2VCL0ltYWdlQy9JbWFnZUldID4+L01lZGlhQm94WyAwIDAgNTk1LjMyIDg0MS45Ml0gL0NvbnRlbnRzIDQgMCBSL0dyb3VwPDwvVHlwZS9Hcm91cC9TL1RyYW5zcGFyZW5jeS9DUy9EZXZpY2VSR0I+Pi9UYWJzL1MvU3RydWN0UGFyZW50cyAwPj4KZW5kb2JqCjQgMCBvYmoKPDwvRmlsdGVyL0ZsYXRlRGVjb2RlL0xlbmd0aCAxOTA4Pj4Kc3RyZWFtCnictVnbkps4EH3nK3Q5uwo1urHB43gnpHBiy4iL12vv5mErD4MsMBXGBXgr+4d8XDeSuRgwdpKtmiqEkOg+3af7yHy7It9olr6TM87oNb2JxYGqM8qTrCCxgD8CBS3oi0xyEYn0nIooAynMaM5SciW/ZCknb7Oz8w8kE2QinkYHcq2iI8lj8g0awW+p/HuWvvAYBp6wPDqQmNIF/Emf4BFRamDNBHklMTzNNQIqwC4JjI9T+FeSh39MegVj9CjN0E6jBQWnISVqwXOaJCALfodFnBZCo89FivXlErBTYAa841mSJ+mJ8MmzDDC+1QxuJ+pEefBHzJKMJwcS8cN+RtVs8+NPwBa7wOxpt3i8eXn4gfrju8Ct3h1CLx1G7+7QuH+Anj4Oj90XgfmrOOye/WwO+1npeI7ukDsFrrjcHUbyGU0IvkZTp8pfa33pwsb7UuC1gYs8QdNq5jYZxNYzX+/oDXrTTOA+WCzCnJEUJrhA7q0wC3JE4ZPNH3W1mROL04h1Qhim4OKmdhPbAcrTIiVvdZ2z9DC6dAA+UFw4bjA2/P54g+1+PB6NvEvn2Ld6u+pBE9ufjI39wUg/D3F6aoLBHLScFLLJksm+xM/JXCNYM4YeBicJvc8rC7PSK5G6Tjv4i8Wt4wcj63q1ut6qhlggOcgcUYk20WXJHC7Vdu4wSnOEeQrmJpnDxKBkOgLS5kS2KQdTqUHmsHxhnB+GlaEggPm4bDq/rUlUvUjrx4i2DXDjo1hMBHxkDMsODMexmsHZeqXN9+VqKDEpPJhKkDs18A6kTGPycPv00ADXRkNEvF8xRdspeH8QLGfr3wE5KQCh7y/xziq8IATdLe3z1ZPvu9Po0L7ls/lyTA8s1zwx6/aipdyGvrI4SDx7E9cNeGdf3b2et7BfIxgBybl5YQzMoNsqSZS1h9HbCI1zdw6HpcT9hdiBBEcHkiFgY5YXSkAVGjuvamNUrSYyeUp1Gp7oicxolhfyuTsloXNpDRzuTLnjDifqveWQivUky2PkpeB7hFRdRV6wVbyrzLMCHqxUUW/HGQj7VEwIMEOZoVUbVZnWxp4Ge1mCstY3VHkOkUW4dPZVtSvdX51rXq4tUPhM+cyjdAlOM9g0E66NuugYnUCMr9311TxRn51l90OwvcFq4KKw1pQ42gAsntdgwrqmJ/Brl2P82jZQYzOUFO5LqPYvzc/bhpy+N3ubZnfVAJ+pDaKZIL/lQzdTDstKjB6gXjcr9bY9Dru6QF3Ac415RwleFebeUxGlPB5fd9/9gl3oQonA7eUXarKL9KhHka22R4CleLvNYlSY7UgVW3LQmKcd90zcqJPJCcCdiX/62fXPrcdJLJssALwbnztejx93ndtvHcpGx7ocwX8aSO00vRdTTBZeQni3WjjEIb58LMeQO4e/aBMFLTHvizWssNRIkltzmJJCH0nP7ci+co6Pmvr8M/awR8FFekLNDNcymoI7JlvzZquAKc9MsJQHx2+6m8t7oG0zG6S6uCW3cTAdOUfmznGcN6ZM0tyhr7RT4BqKFeBhcMXHwRptklv0KiDZLewprKkKtjTGpuq+d8ctsrGXbnVTB59DE8vjXIXlnJNsKqTqdfqL85PVLBHZU4DUfHWUt1sW5wnXHS2HlQ3GZghWyMvKZYLEf+XimTTHD0te3mdpeML10Xf6TrC3XRu6pksPUrQX1cUQN1hAQGF2aL8feZNFhbq2JIA06UM2wUuTBPjuDAIpPRAVVIQHKJ6Juo5E54bc70m2kUWNSYk8I3cSoNt90tKkmwkLiRLIpGq41cQE9+QrPQzp21JAcDdAA1J8jFWqKOlnQSsj225Yu4R/2EOWWtheOD6IQn8wCdptq5bU90v8l/zAiThahUZBNYzgdGZG3CKqTDehjCfYbIGluBVteMXWN2z/ut6wrSINS+4X6PcYwXVPrZ/IXEU452MocU826M76xG7j6W0B5qAjUYxc/DVJdXOXt6JKbAA2C1+r3ELS+J6T6rRfILmcZCphP+Z9hd8/0QPecIxS/CIRfJ7X97hoRc82nLdXLo1wHtdx998hmVxJynrA01ulvqjjjCUJeEXepU6NJXrW18vtdcbYI80CeXcogFNWJctyyDFxKHcWO76Zawsfpzjrx0ffQTWGusezbCs3v/49v87ZF8X+2O23cr7cyi2fLdBjrm6/K9A/vTLv1bHfdcDhqy+FhdLD8YQN5O+1fwEqNfLlCmVuZHN0cmVhbQplbmRvYmoKMjEgMCBvYmoKPDwvVHlwZS9TdHJ1Y3RUcmVlUm9vdC9QYXJlbnRUcmVlID0gNiAwIFIgL0sgPSA1MCAwIFIvSURUcmVlID0gNTEgMCBSID4+CmVuZG9iagoyMiAwIG9iago8PC9UeXBlL0ZvbnQvU3VidHlwZS9UcnVlVHlwZS9OYW1lL0YxL0Jhc2VGb250L0JDREVFRStDYWxpYnJpL0VuY29kaW5nL1dpbkFuc2lFbmNvZGluZy9Gb250RGVzY3JpcHRvciAyMyAwIFIvRmlyc3RDaGFyIDMyL0xhc3RDaGFyIDg0L1dpZHRocyA1MyAwIFI+PgplbmRvYmoKMjMgMCBvYmoKPDwvVHlwZS9Gb250RGVzY3JpcHRvci9Gb250TmFtZS9CQ0RFRUUrQ2FsaWJyaS9GbGFncyAzMi9JdGFsaWNBbmdsZSAwL0FzY2VudCA3NTAvRGVzY2VudCAtMjUwL0NhcEhlaWdodCA3NTAvQXZnV2lkdGggNTIxL01heFdpZHRoIDE3NDMvRm9udFdlaWdodCA0MDAvWEhlaWdodCAyNTAvU3RlbVYgNTIvRm9udEJCb3hbIC01MDMgLTI1MCAxMjQwIDc1MF0gL0ZvbnRGaWxlMiA1MiAwIFI+PgplbmRvYmoKNTMgMCBvYmoKWyAyMjYgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDY0MyAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCA3MTUgMCA2NjIgMCAwIDAgNTQ0XSAKZW5kb2JqCjUwIDAgb2JqCjw8L1R5cGUvU3RydWN0RWxlbS9TL1Jvb3QvUC11dGlsKFRpdGxlKS9LWzQ5IDAgUl0gL1BnIDMgMCBSID4+CmVuZG9iago0OSAwIG9iago8PC9UeXBlL1N0cnVjdEVsZW0vUy9UaXRsZS9QLXV0aWwoSGVhZGluZzEpL0tbNDggMCBSXSAvUGcgMyAwIFIgPj4KZW5kb2JqCjQ4IDAgb2JqCjw8L1R5cGUvU3RydWN0RWxlbS9TL0hlYWRpbmcxL1AvNTAgMCBSL0tbMF0gL1BnIDMgMCBSID4+CmVuZG9iago1MSAwIG9iago8PC9OYW1lcygibG9hbiIpID4+CmVuZG9iago2IDAgb2JqCjw8L051bXMgWzAgWyA0OCAwIFJdIF0gPj4KZW5kb2JqCnhyZWYKMSA0CjAwMDAwMDAwMTAgNjU1MzUgZiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwMTgxIDAwMDAwIG4gCjAwMDAwMDAyMzggMDAwMDAgbiAKMTEgMgowMDAwMDAwMDAwIDAwMDAwIGYgCjAwMDAwMDAwMDAgMDAwMDAgZiAKMjEgNAowMDAwMDAyMzMwIDAwMDAwIG4gCjAwMDAwMDI0MTggMDAwMDAgbiAKMDAwMDAwMjU5NSAwMDAwMCBuIAowMDAwMDAyODU4IDAwMDAwIG4gCjQ4IDMKMDAwMDAwMzA3NyAwMDAwMCBuIAowMDAwMDAzMDAwIDAwMDAwIG4gCjAwMDAwMDI5MzUgMDAwMDAgbiAKNTAgMQowMDAwMDAyODY1IDAwMDAwIG4gCjUyIDIKMDAwMDAwMDAwMCAwMDAwMCBmIAowMDAwMDAwMDAwIDAwMDAwIGYgCnRyYWlsZXIKPDwvU2l6ZSA1NS9Sb290IDEgMCBSL0luZm8gMjAgMCBSL0lEWzwyRTA1NzM5MkZDM0JCMTQxQjNDNDkzODNBODY4NDg5OD48MkUwNTczOTJGQzNCQjE0MUIzQzQ5MzgzQTg2ODQ4OTg+XSA+PgpzdGFydHhyZWYKMzE0NQolJUVPRgo=`;
    
    try {
      // Convert base64 to blob
      const binaryString = window.atob(base64PDF);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      
      // Create a blob from the binary data
      const pdfBlob = new Blob([bytes.buffer], { type: 'application/pdf' });
      
      // Create a File object from the blob
      const file = new File([pdfBlob], fileName, { type: 'application/pdf' });
      
      // Store the file in our map
      const updatedFiles = new Map(pdfFiles);
      updatedFiles.set(fileName, file);
      setPdfFiles(updatedFiles);
      
      console.log("Created higher-quality PDF file:", file.name, file.size, "bytes");
      return file;
    } catch (error) {
      console.error("Error creating PDF file:", error);
      // Create a minimal fallback PDF
      const minimalPDF = 'JVBERi0xLjAKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0tpZHNbMyAwIFJdL0NvdW50IDE+PgplbmRvYmoKMyAwIG9iago8PC9UeXBlL1BhZ2UvTWVkaWFCb3hbMCAwIDMgM10+PgplbmRvYmoKdHJhaWxlcgo8PC9Sb290IDEgMCBSPj4K';
      const fallbackBytes = Uint8Array.from(window.atob(minimalPDF), c => c.charCodeAt(0));
      const fallbackBlob = new Blob([fallbackBytes], { type: 'application/pdf' });
      return new File([fallbackBlob], fileName, { type: 'application/pdf' });
    }
  };

  // Initialize PDFs when component mounts
  useEffect(() => {
    if (results.length === 0) {
      setSelectedFile(null);
      setSelectedResult(null);
      return;
    }

    // Initialize PDFs for all files
    const newPdfFiles = new Map();
    
    uniqueFiles.forEach(fileInfo => {
      const pdfFile = createDummyPDF(fileInfo.fileName);
      newPdfFiles.set(fileInfo.fileName, pdfFile);
    });
    
    setPdfFiles(newPdfFiles);
    
    // Set defaults if needed
    if (!selectedResult && results.length > 0) {
      setSelectedResult(results[0]);
    }
    
    // Load the first file by default
    if (uniqueFiles.length > 0) {
      const firstFile = uniqueFiles[0];
      const pdfFile = newPdfFiles.get(firstFile.fileName);
      if (pdfFile) {
        setSelectedFile(pdfFile);
      }
    }
  }, [results, retryCounter]);

  // Handle file selection
  const handleFileSelect = (fileId: string, fileName: string) => {
    console.log("File selected:", fileName);
    
    // Use the already created PDF from our map
    const existingPDF = pdfFiles.get(fileName);
    if (existingPDF) {
      setSelectedFile(existingPDF);
    } else {
      // Create one if it doesn't exist yet
      const newPDF = createDummyPDF(fileName);
      setSelectedFile(newPDF);
    }
    
    // Set the first result from this file as the selected result
    const fileResults = resultsByFile[fileId];
    if (fileResults && fileResults.length > 0) {
      setSelectedResult(fileResults[0]);
    }
  };

  // Handle result selection
  const handleResultSelect = (result: ProcessingResult) => {
    setSelectedResult(result);
    
    // Make sure we have a PDF file for this result
    if (result.fileName) {
      const existingPDF = pdfFiles.get(result.fileName);
      if (existingPDF) {
        setSelectedFile(existingPDF);
      } else {
        const newPDF = createDummyPDF(result.fileName);
        setSelectedFile(newPDF);
      }
    }
  };

  // Handle retry loading
  const handleRetryLoading = () => {
    console.log("Retrying PDF load...");
    setRetryCounter(prev => prev + 1);
    
    // Re-create all PDFs
    if (uniqueFiles.length > 0) {
      const newPdfFiles = new Map();
      
      uniqueFiles.forEach(fileInfo => {
        const pdfFile = createDummyPDF(fileInfo.fileName);
        newPdfFiles.set(fileInfo.fileName, pdfFile);
      });
      
      setPdfFiles(newPdfFiles);
      
      // Refresh the current selection
      if (selectedResult?.fileName) {
        const refreshedPDF = newPdfFiles.get(selectedResult.fileName);
        if (refreshedPDF) {
          setSelectedFile(refreshedPDF);
        }
      }
    }
  };

  // Display a loading message if no results are available
  if (results.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-1">Side by Side Comparison</h2>
          <p className="text-sm text-muted-foreground">Compare extracted data with the original document</p>
        </div>
        
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-12 text-center">
            <div className="text-muted-foreground mb-2">
              No extraction results yet
            </div>
            <div className="text-sm text-muted-foreground">
              Process files to see side by side comparison
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-1">Side by Side Comparison</h2>
        <p className="text-sm text-muted-foreground">Compare extracted data with the original document</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Left sidebar - File and Result selection */}
        <div className="lg:col-span-2">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-black text-white p-2 text-sm font-medium">
              Processed Files
            </div>
            <ScrollArea className="h-[600px]">
              <div className="p-2">
                {uniqueFiles.map((fileInfo) => (
                  <div key={fileInfo.fileId} className="mb-4">
                    <div 
                      className="text-sm font-medium p-2 bg-muted cursor-pointer hover:bg-gray-200"
                      onClick={() => handleFileSelect(fileInfo.fileId, fileInfo.fileName)}
                    >
                      {fileInfo.fileName}
                    </div>
                    
                    {resultsByFile[fileInfo.fileId].map(result => {
                      const isSelected = selectedResult?.id === result.id;
                      
                      return (
                        <div 
                          key={result.id}
                          className={`flex items-center justify-between p-2 text-sm rounded-md cursor-pointer ${
                            isSelected ? "bg-yellow-50 border border-yellow-400 text-black" : "hover:bg-muted"
                          }`}
                          onClick={() => handleResultSelect(result)}
                        >
                          <div className="truncate pr-2">{result.promptName}</div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
        
        {/* Center - PDF Viewer */}
        <div className="lg:col-span-2">
          <div className="border rounded-lg overflow-hidden h-full flex flex-col">
            <div className="bg-black text-white p-2 text-sm font-medium">
              Document Preview
            </div>
            <div className="flex-1 flex flex-col bg-white">
              <PDFViewer 
                file={selectedFile}
                className="flex-1"
              />
              
              {/* Retry button */}
              <div className="flex justify-center p-2 bg-white border-t">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                  onClick={handleRetryLoading}
                >
                  <RefreshCw className="h-4 w-4" />
                  Refresh PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right - Extracted Data */}
        <div className="lg:col-span-3">
          <div className="border rounded-lg overflow-hidden h-full flex flex-col">
            <div className="bg-black text-white p-3 flex justify-between items-center">
              <div>
                <div className="font-medium">{selectedResult?.promptName}</div>
                <div className="text-xs text-gray-400">From: {selectedResult?.fileName}</div>
              </div>
            </div>
            
            <div className="p-3 flex-1">
              {selectedResult && selectedResult.status === 'success' && selectedResult.data ? (
                <ScrollArea className="h-[550px]">
                  <Table>
                    <TableHeader className="bg-muted sticky top-0">
                      <TableRow>
                        <TableHead className="font-semibold">Category</TableHead>
                        <TableHead className="font-semibold">Stage</TableHead>
                        <TableHead className="font-semibold">Field</TableHead>
                        <TableHead className="font-semibold">Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedResult.data.map((item, index) => {
                        if (!item) return null;
                        
                        return (
                          <TableRow key={index}>
                            <TableCell>
                              {item.Category === 'ECL By Stage' ? 'ECL' : item.Category}
                            </TableCell>
                            <TableCell>{item.Stage}</TableCell>
                            <TableCell>{item.Field}</TableCell>
                            <TableCell className="font-medium">{item.Value}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </ScrollArea>
              ) : (
                <div className="flex flex-col items-center justify-center h-[550px]">
                  <div className="text-muted-foreground">
                    Select a result to view extracted data
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBySideTab;

\`\`\`

# src\components\dashboard\TabNavigation.tsx

\`\`\`tsx

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

\`\`\`

# src\components\dashboard\UploadTab.tsx

\`\`\`tsx

import { Button } from '@/components/ui/button';
import FileUploader from '@/components/FileUploader';
import { UploadedFile } from '@/lib/types';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Eye, EyeOff } from 'lucide-react';
import PDFViewer from '@/components/PDFViewer';
import { motion } from 'framer-motion';

interface UploadTabProps {
  onFilesUploaded: (files: UploadedFile[]) => void;
  uploadedFiles: UploadedFile[];
  goToNextTab: () => void;
}

const UploadTab = ({ onFilesUploaded, uploadedFiles, goToNextTab }: UploadTabProps) => {
  const [selectedFile, setSelectedFile] = useState<UploadedFile | null>(null);
  const [showPreview, setShowPreview] = useState<boolean>(true);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [actualFiles, setActualFiles] = useState<Map<string, File>>(new Map());

  // Select the first file for preview when files are uploaded
  useEffect(() => {
    if (uploadedFiles.length > 0) {
      // Always select the newest file when a new file is uploaded
      const newestFile = uploadedFiles[uploadedFiles.length - 1];
      setSelectedFile(newestFile);
      const file = actualFiles.get(newestFile.id);
      if (file) {
        setPdfFile(file);
      }
    } else {
      setSelectedFile(null);
      setPdfFile(null);
    }
  }, [uploadedFiles, actualFiles]);

  // Handle files uploaded
  const handleFilesUploaded = (files: UploadedFile[], newActualFiles: Map<string, File>) => {
    // Pass files to parent
    onFilesUploaded(files);
    
    // Store actual File objects
    setActualFiles(newActualFiles);
    
    // If we have files, select the latest one for immediate preview
    if (files.length > 0) {
      const latestFile = files[files.length - 1];
      setSelectedFile(latestFile);
      
      // Set the PDF file for immediate preview
      const fileForPreview = newActualFiles.get(latestFile.id);
      if (fileForPreview) {
        setPdfFile(fileForPreview);
        setShowPreview(true); // Ensure preview is visible
      }
    }
  };

  // Toggle PDF preview visibility
  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  // Handle file selection
  const handleFileSelection = (file: UploadedFile) => {
    setSelectedFile(file);
    const actualFile = actualFiles.get(file.id);
    if (actualFile) {
      setPdfFile(actualFile);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-6">
        <FileUploader 
          onFilesUploaded={handleFilesUploaded}
          acceptedFileTypes={['.pdf']}
        />
        
        {uploadedFiles.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="border rounded-md"
          >
            <div className="bg-muted p-3 font-medium flex justify-between items-center">
              <div>Uploaded Files ({uploadedFiles.length}/10)</div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 px-2 text-muted-foreground"
                onClick={togglePreview}
              >
                {showPreview ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
                {showPreview ? "Hide Preview" : "Show Preview"}
              </Button>
            </div>
            <div className="divide-y max-h-[300px] overflow-y-auto">
              {uploadedFiles.map((file) => (
                <motion.div
                  key={file.id}
                  className={`p-3 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors ${selectedFile?.id === file.id ? 'bg-yellow-50 border-l-2 border-yellow-400' : ''}`}
                  onClick={() => handleFileSelection(file)}
                >
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm font-medium">{file.name}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {Math.round(file.size / 1024).toLocaleString()} KB
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* PDF Preview Section - larger size for A4 display */}
      {uploadedFiles.length > 0 && selectedFile && showPreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-2"
        >
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  PDF Preview
                </div>
                <div className="text-sm font-normal">
                  {selectedFile.name}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-muted/30 h-[750px] flex flex-col">
                <PDFViewer file={pdfFile} className="h-full" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <div className="flex justify-end col-span-full">
        <motion.div>
          <Button 
            onClick={goToNextTab} 
            disabled={uploadedFiles.length === 0}
            className="bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            Next: Select Prompts
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default UploadTab;

\`\`\`

# src\components\FileUploader.tsx

\`\`\`tsx

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

\`\`\`

# src\components\IntroScreen.tsx

\`\`\`tsx
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

const IntroScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    // Simulate progressive loading
    const totalTime = 2000; // 2 seconds
    const intervalTime = 50; // update every 50ms
    const steps = totalTime / intervalTime;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep += 1;
      const newProgress = Math.min(100, Math.floor((currentStep / steps) * 100));
      setLoadingProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 200);
      }
    }, intervalTime);
    
    return () => clearInterval(timer);
  }, []);

  const handleEnterApp = () => {
    navigate('/select-bank');
  };

  // Animation variants for the logo and letters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Combined animation for the logo that includes floating effect
  const logoAnimation = {
    scale: 1,
    opacity: 1,
    y: [0, -8, 0]
  };
  
  // Combined transition for the logo
  const logoTransition = {
    scale: {
      type: "spring",
      damping: 12,
      stiffness: 100
    },
    opacity: {
      type: "spring",
      damping: 12,
      stiffness: 100
    },
    y: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ey-black text-white">
      <div className="w-full max-w-md px-6 py-12 text-center">
        <motion.div 
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="flex justify-center mb-6"
          >
            <motion.div 
              className="h-16 w-16 bg-ey-yellow rounded-md"
              variants={logoVariants}
              initial="hidden"
              animate={logoAnimation}
              transition={logoTransition}
              whileHover={{ scale: 1.05 }}
            ></motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-bold mb-2 flex justify-center"
            variants={containerVariants}
          >
            {Array.from("AiDEx").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={letterVariants}
                custom={index}
                whileHover={floatVariants.animate}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="text-ey-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            AI powered Data Extraction
          </motion.p>
          
          <motion.p 
            className="text-ey-gray-500 text-sm mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Supported by EYQ
          </motion.p>
        </motion.div>
        
        {loading ? (
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Progress 
              value={loadingProgress} 
              className="h-2" 
              indicatorClassName="bg-ey-yellow" 
            />
            <p className="text-sm text-ey-gray-400 animate-pulse">
              Loading application... {loadingProgress}%
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              onClick={handleEnterApp}
              className="w-full bg-ey-yellow hover:bg-ey-yellow/90 text-ey-black font-medium py-2 px-4 rounded"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Enter Application
            </motion.button>
          </motion.div>
        )}
        
        <motion.div 
          className="mt-12 text-xs text-ey-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.2 }}
        >
          <p>© {new Date().getFullYear()} EY | A better working world</p>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroScreen;

\`\`\`

# src\components\PDFViewer.tsx

\`\`\`tsx

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

\`\`\`

# src\components\ProcessingStatus.tsx

\`\`\`tsx

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

\`\`\`

# src\components\PromptDescriptions.tsx

\`\`\`tsx

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, FileText, BookOpen, Activity, BarChart4, Scale } from "lucide-react";
import { useEffect, useState } from "react";

interface Prompt {
  bank: string;
  description: string;
}

interface PromptCategory {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  prompts: Prompt[];
}

const PromptDescriptions = () => {
  const [selectedBank, setSelectedBank] = useState<string>('barclays');
  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const [enableMultiBanks, setEnableMultiBanks] = useState<boolean>(false);
  
  // Fetch bank selection from session storage
  useEffect(() => {
    const bank = sessionStorage.getItem('selectedBank') || 'barclays';
    const multiBank = sessionStorage.getItem('enableMultiBanks') === 'true';
    const storedBanks = sessionStorage.getItem('selectedBanks');
    const parsedBanks = storedBanks ? JSON.parse(storedBanks) : [bank];
    
    setSelectedBank(bank);
    setSelectedBanks(parsedBanks);
    setEnableMultiBanks(multiBank);
  }, []);
  
  const promptCategories: PromptCategory[] = [
    {
      id: "ecl",
      title: "ECL By Stage",
      icon: <FileText className="h-5 w-5 text-yellow-500" />,
      description: "Extract detailed Expected Credit Loss (ECL) data broken down by stages",
      prompts: [
        { bank: "Barclays", description: "Extract ECL values, gross exposures and coverage ratios by product category and stage." },
        { bank: "Santander", description: "Extract ECL provisions, gross balances and coverage ratios for all business categories." },
        { bank: "VM", description: "Extract Stage 1, 2, and 3 ECL, gross exposure, and coverage ratio information." },
        { bank: "HSBC", description: "Extract ECL values across stages for all loan portfolios." },
        { bank: "Lloyds", description: "Extract ECL values and exposure by stage for retail and commercial portfolios." },
        { bank: "NatWest", description: "Extract ECL metrics by stage across personal and commercial banking." },
        { bank: "Standard", description: "Extract ECL provisions across wholesale and retail banking segments." }
      ]
    },
    {
      id: "adjustments",
      title: "Management Adjustments",
      icon: <Scale className="h-5 w-5 text-yellow-500" />,
      description: "Extract adjustments made by management to ECL models",
      prompts: [
        { bank: "Barclays", description: "Extract economic uncertainty adjustments, other adjustments, and total management adjustments." },
        { bank: "Santander", description: "Extract all information related to management overlays or judgemental adjustments." },
        { bank: "HSBC", description: "Extract management adjustments related to economic uncertainty." },
        { bank: "Lloyds", description: "Extract post-model adjustments and management overlays." },
        { bank: "NatWest", description: "Extract in-model and post-model management adjustments." },
        { bank: "Standard", description: "Extract management overlay amounts by portfolio segment." }
      ]
    },
    {
      id: "scenarios",
      title: "Scenario Weights",
      icon: <BarChart4 className="h-5 w-5 text-yellow-500" />,
      description: "Extract scenario probability weights used in IFRS 9 ECL calculations",
      prompts: [
        { bank: "Barclays", description: "Extract probability weights assigned to Upside, Baseline, and Downside scenarios." },
        { bank: "Santander", description: "Extract forward-looking economic scenarios used in IFRS 9 ECL framework." },
        { bank: "HSBC", description: "Extract scenario weightings for Central, Upside and Downside scenarios." },
        { bank: "Lloyds", description: "Extract Base, Upside, and Downside scenario probability weights." },
        { bank: "NatWest", description: "Extract Base, Upside, and Severe downside scenario weights." },
        { bank: "Standard", description: "Extract probability-weighted scenario assumptions." }
      ]
    },
    {
      id: "macro",
      title: "Macro Variables",
      icon: <Activity className="h-5 w-5 text-yellow-500" />,
      description: "Extract macroeconomic variables used in IFRS 9 ECL calculations",
      prompts: [
        { bank: "Barclays", description: "Extract GDP, unemployment, HPI, and bank rate variables for forecast years." },
        { bank: "Santander", description: "Extract macroeconomic variables used in IFRS 9 base case scenario." },
        { bank: "HSBC", description: "Extract key economic inputs for all modeled scenarios." },
        { bank: "Lloyds", description: "Extract UK GDP, unemployment and HPI forecast assumptions." },
        { bank: "NatWest", description: "Extract macroeconomic variables and their five-year outlook." },
        { bank: "Standard", description: "Extract economic factor assumptions across major markets." }
      ]
    },
    {
      id: "other",
      title: "Other Metrics",
      icon: <BookOpen className="h-5 w-5 text-yellow-500" />,
      description: "Extract various credit quality metrics, staging criteria, and sensitivity analyses",
      prompts: [
        { bank: "Barclays", description: "Extract credit quality metrics, staging criteria, and ECL sensitivity analysis." },
        { bank: "Santander", description: "Extract credit and financial metrics by business segment." },
        { bank: "HSBC", description: "Extract staging criteria and significant increase in credit risk (SICR) thresholds." },
        { bank: "Lloyds", description: "Extract credit quality metrics and sensitivity analysis results." },
        { bank: "NatWest", description: "Extract credit risk metrics and SICR thresholds by product type." },
        { bank: "Standard", description: "Extract credit quality metrics by geographic region." }
      ]
    }
  ];

  // Filter prompts based on selected bank(s) and multi-bank setting
  const filterPrompts = (prompts: Prompt[]) => {
    if (enableMultiBanks) {
      // In multi-bank mode, filter by selected banks (case-insensitive)
      return prompts.filter(prompt => 
        selectedBanks.some(bank => 
          prompt.bank.toLowerCase() === bank.toLowerCase()
        )
      );
    }
    
    // In single bank mode, filter by selected bank (case-insensitive)
    return prompts.filter(prompt => 
      prompt.bank.toLowerCase() === selectedBank.toLowerCase()
    );
  };

  // Format selected bank names for display
  const formatBankNames = () => {
    if (!enableMultiBanks) {
      return selectedBank.charAt(0).toUpperCase() + selectedBank.slice(1);
    }

    // Convert bank IDs to display names
    const bankDisplayNames = selectedBanks.map(bankId => {
      const capitalizedBank = bankId.charAt(0).toUpperCase() + bankId.slice(1);
      // Handle special cases
      if (bankId.toLowerCase() === 'natwest') return 'NatWest Group';
      if (bankId.toLowerCase() === 'lloyds') return 'Lloyds Banking Group';
      if (bankId.toLowerCase() === 'standard') return 'Standard Chartered';
      return capitalizedBank;
    });

    if (bankDisplayNames.length === 0) return 'no banks';
    if (bankDisplayNames.length === 1) return bankDisplayNames[0];
    if (bankDisplayNames.length === 2) return `${bankDisplayNames[0]} and ${bankDisplayNames[1]}`;
    
    const lastBank = bankDisplayNames.pop();
    return `${bankDisplayNames.join(', ')}, and ${lastBank}`;
  };

  return (
    <Card className="shadow-lg border border-gray-200 hover:shadow-xl transition-shadow dark:border-gray-700">
      <CardHeader className="bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-700">
        <CardTitle className="text-lg flex items-center">
          <Building className="mr-2 h-5 w-5 text-yellow-500" />
          Available Extraction Prompts
        </CardTitle>
        <CardDescription className="dark:text-gray-300">
          {enableMultiBanks 
            ? `The system can extract the following types of IFRS9 data from ${selectedBanks.length} bank report${selectedBanks.length !== 1 ? 's' : ''}`
            : `The system can extract the following types of IFRS9 data from ${formatBankNames()} reports`
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <Accordion type="single" collapsible className="w-full">
          {promptCategories.map((category) => {
            const filteredPrompts = filterPrompts(category.prompts);
            // Skip categories that have no prompts for the selected bank(s)
            if (filteredPrompts.length === 0) return null;
            
            return (
              <AccordionItem key={category.id} value={category.id} className="border-b border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="hover:bg-gray-50 px-4 py-3 rounded-md dark:hover:bg-gray-800">
                  <div className="flex items-center">
                    {category.icon}
                    <span className="ml-2 font-medium">{category.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 pb-4">
                  <p className="text-sm text-gray-600 mb-4 dark:text-gray-400">{category.description}</p>
                  <div className="space-y-3">
                    {filteredPrompts.map((prompt, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-md border border-gray-200 hover:border-yellow-400 transition-colors dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center mb-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          <div className="font-medium text-sm">{prompt.bank}</div>
                        </div>
                        <div className="text-xs text-gray-600 pl-4 dark:text-gray-400">{prompt.description}</div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
      <CardFooter className="bg-gray-50 text-xs text-center py-3 border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">Supported by</span>
          <span className="font-semibold text-black ml-1 dark:text-white">EYQ</span>
          <span className="text-gray-500 ml-1 dark:text-gray-400">natural language processing</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PromptDescriptions;

\`\`\`

# src\components\PromptSelector.tsx

\`\`\`tsx

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, FileText, Upload } from 'lucide-react';
import { PromptOption, DEFAULT_PROMPTS } from '@/lib/types';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { parseExcelPrompts } from '@/lib/excelUtils';
import { useToast } from '@/hooks/use-toast';

interface PromptSelectorProps {
  onPromptSelected: (prompts: PromptOption[]) => void;
  disabled?: boolean;
  selectedPrompts?: PromptOption[];
}

const PromptSelector = ({ 
  onPromptSelected, 
  disabled = false,
  selectedPrompts: externalSelectedPrompts = [] 
}: PromptSelectorProps) => {
  const [selectedPrompts, setSelectedPrompts] = useState<PromptOption[]>(externalSelectedPrompts);
  const [customPromptFile, setCustomPromptFile] = useState<File | null>(null);
  const [customPrompts, setCustomPrompts] = useState<PromptOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // Group prompts by category
  const promptsByCategory: Record<string, PromptOption[]> = DEFAULT_PROMPTS.reduce((acc, prompt) => {
    if (!acc[prompt.category]) {
      acc[prompt.category] = [];
    }
    acc[prompt.category].push(prompt);
    return acc;
  }, {} as Record<string, PromptOption[]>);
  
  // Group custom prompts by category
  const customPromptsByCategory: Record<string, PromptOption[]> = customPrompts.reduce((acc, prompt) => {
    if (!acc[prompt.category]) {
      acc[prompt.category] = [];
    }
    acc[prompt.category].push(prompt);
    return acc;
  }, {} as Record<string, PromptOption[]>);
  
  // Sync with external selected prompts when they change
  useEffect(() => {
    if (externalSelectedPrompts.length > 0) {
      setSelectedPrompts(externalSelectedPrompts);
    }
  }, [externalSelectedPrompts]);
  
  const togglePrompt = (prompt: PromptOption) => {
    if (disabled) return;
    
    const isSelected = selectedPrompts.some(p => p.id === prompt.id);
    
    if (isSelected) {
      setSelectedPrompts(selectedPrompts.filter(p => p.id !== prompt.id));
    } else {
      setSelectedPrompts([...selectedPrompts, prompt]);
    }
  };
  
  const selectAllPrompts = () => {
    if (disabled) return;
    setSelectedPrompts(DEFAULT_PROMPTS);
  };
  
  const deselectAllPrompts = () => {
    if (disabled) return;
    setSelectedPrompts([]);
  };
  
  const handleApply = () => {
    onPromptSelected(selectedPrompts);
  };
  
  const handleCustomPromptUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCustomPromptFile(file);
      setIsLoading(true);
      
      try {
        const parsedPrompts = await parseExcelPrompts(file);
        setCustomPrompts(parsedPrompts);
        toast({
          title: "Excel File Processed",
          description: `${parsedPrompts.length} prompts loaded from Excel file`,
        });
      } catch (error) {
        toast({
          title: "Error Processing Excel File",
          description: error instanceof Error ? error.message : "Unknown error occurred",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };
  
  const useCustomPrompts = () => {
    if (customPrompts.length > 0) {
      setSelectedPrompts(customPrompts);
      onPromptSelected(customPrompts);
      toast({
        title: "Custom Prompts Selected",
        description: `${customPrompts.length} custom prompts will be used for extraction`,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left side - Info */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-1">Select Data to Extract</h2>
            <p className="text-sm text-muted-foreground">
              Choose which financial data points you want to extract from Barclays's uploaded PDFs.
            </p>
          </div>
          
          <div className="bg-muted p-4 rounded-lg border">
            <h3 className="font-medium mb-2">How It Works</h3>
            <p className="text-sm text-muted-foreground">
              Each prompt is designed to extract specific IFRS9 data points from financial reports. Select prompts based on the data you need.
            </p>
          </div>
        </div>

        {/* Right side - Prompt selection */}
        <div>
          <Tabs defaultValue="predefined" className="w-full">
            <TabsList className="grid grid-cols-2 mb-4 w-full">
              <TabsTrigger value="predefined" className="text-sm">Predefined Prompts</TabsTrigger>
              <TabsTrigger value="custom" className="text-sm">Custom Excel Prompts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="predefined">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium">
                      {selectedPrompts.length} of {DEFAULT_PROMPTS.length} selected
                    </span>
                  </div>
                  <div className="space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={selectAllPrompts} 
                      disabled={disabled || selectedPrompts.length === DEFAULT_PROMPTS.length}
                    >
                      Select All
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={deselectAllPrompts} 
                      disabled={disabled || selectedPrompts.length === 0}
                    >
                      Deselect All
                    </Button>
                  </div>
                </div>
                
                <ScrollArea className="h-[350px] pr-4 -mr-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {DEFAULT_PROMPTS.map((prompt) => (
                      <div 
                        key={prompt.id}
                        className={cn(
                          "border rounded-md p-3 cursor-pointer transition-all",
                          selectedPrompts.some(p => p.id === prompt.id) 
                            ? "border-yellow-400 bg-yellow-50 text-black" 
                            : "border-border"
                        )}
                        onClick={() => togglePrompt(prompt)}
                      >
                        <div className="flex justify-between">
                          <div className="font-medium text-sm">{prompt.name}</div>
                          {selectedPrompts.some(p => p.id === prompt.id) && (
                            <Check className="h-4 w-4 text-yellow-500" />
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {prompt.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                
                <Button 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black" 
                  onClick={handleApply}
                  disabled={disabled || selectedPrompts.length === 0}
                >
                  Apply Selected Prompts
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="custom">
              <div className="space-y-6">
                <div className="bg-muted/50 p-4 rounded-md border">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-sm">Excel Prompt File Format</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Upload an Excel file with prompts. The file should contain columns for Prompt Name, Description, Template, and Category.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="promptFile">Upload Prompt Excel File</Label>
                  <div className="mt-2 flex items-center space-x-3">
                    <div className="flex-1 relative">
                      <Input 
                        id="promptFile"
                        type="file" 
                        onChange={handleCustomPromptUpload} 
                        accept=".xlsx,.xls"
                        disabled={disabled || isLoading}
                        className="flex-1"
                      />
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/70">
                          <div className="animate-spin h-5 w-5 border-2 border-yellow-400 border-t-transparent rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <Button 
                      variant="outline"
                      size="icon"
                      disabled={disabled || isLoading}
                      onClick={() => document.getElementById('promptFile')?.click()}
                    >
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                  {customPromptFile && (
                    <div className="mt-2 flex items-center">
                      <FileText className="h-4 w-4 text-yellow-500 mr-2" />
                      <span className="text-sm">{customPromptFile.name}</span>
                      <Badge variant="outline" className="ml-2">
                        {isLoading ? 'Processing...' : `${customPrompts.length} prompts loaded`}
                      </Badge>
                    </div>
                  )}
                </div>
                
                {customPrompts.length > 0 && (
                  <div className="border rounded-md p-4">
                    <h3 className="text-sm font-medium mb-3">Loaded Custom Prompts</h3>
                    <ScrollArea className="h-[150px]">
                      <div className="space-y-2">
                        {Object.entries(customPromptsByCategory).map(([category, prompts]) => (
                          <div key={category} className="mb-3">
                            <h4 className="text-xs font-semibold text-muted-foreground mb-1">{category}</h4>
                            {prompts.map((prompt, idx) => (
                              <div key={idx} className="text-sm py-1 px-2 rounded-sm hover:bg-muted">
                                {prompt.name}
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
                  disabled={!customPromptFile || disabled || customPrompts.length === 0}
                  onClick={useCustomPrompts}
                >
                  Use Custom Prompts
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PromptSelector;

\`\`\`

# src\components\ResultsViewer.tsx

\`\`\`tsx

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { AlertCircle, Check, Download, Loader, Star } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProcessingResult } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import ProcessingStatus from './ProcessingStatus';

interface ResultsViewerProps {
  results: ProcessingResult[];
  onDownloadResults: () => void;
  isProcessing?: boolean;
  processingProgress?: number;
  processingStep?: string;
  totalFiles?: number;
  processedFiles?: number;
}

const ResultsViewer = ({ 
  results, 
  onDownloadResults, 
  isProcessing = false, 
  processingProgress = 0, 
  processingStep = '',
  totalFiles = 1,
  processedFiles = 0
}: ResultsViewerProps) => {
  const [selectedResult, setSelectedResult] = useState<string | null>(
    results.length > 0 && results[0] ? results[0].id : null
  );
  const [activeTab, setActiveTab] = useState('results');

  const currentResult = results.find(result => result && result.id === selectedResult);
  
  // Group results by file
  const resultsByFile: Record<string, ProcessingResult[]> = results.reduce((acc, result) => {
    if (!result) return acc;
    if (!acc[result.fileId]) {
      acc[result.fileId] = [];
    }
    acc[result.fileId].push(result);
    return acc;
  }, {} as Record<string, ProcessingResult[]>);

  // Check if the current result has ECL By Stage data
  const isEclByStageCategory = currentResult?.data?.some(item => item?.Category === 'ECL By Stage');
  
  if (results.length === 0 && !isProcessing) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-1">Extraction Results</h2>
          <p className="text-sm text-muted-foreground">View and download the extracted financial data for Barclays</p>
        </div>
        
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-12 text-center">
            <div className="text-muted-foreground mb-2">
              No extraction results yet
            </div>
            <div className="text-sm text-muted-foreground">
              Process files to see extraction results
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isProcessing) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-1">Extraction Results</h2>
          <p className="text-sm text-muted-foreground">View and download the extracted financial data for Barclays</p>
        </div>
        
        {/* Processing status */}
        <ProcessingStatus
          isProcessing={isProcessing}
          progress={processingProgress}
          currentStep={processingStep}
          totalFiles={totalFiles}
          processedFiles={processedFiles}
        />
        
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-6">Extraction Results</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-black text-white p-2 text-sm font-medium">
                  Processed Files
                </div>
                <div className="p-2 border-b">
                  <div className="text-sm font-medium p-2 bg-muted rounded">Currently Processing</div>
                </div>
                <div className="p-2">
                  <div className="flex items-center justify-between p-2 text-sm rounded-md hover:bg-muted cursor-pointer">
                    <div className="truncate pr-2">Management Adjustments</div>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 text-sm rounded-md hover:bg-muted cursor-pointer">
                    <div className="truncate pr-2">Loan Loss Rate</div>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 text-sm rounded-md hover:bg-muted cursor-pointer">
                    <div className="truncate pr-2">Macro Variables</div>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                </div>
                <div className="p-2 border-t bg-muted/40">
                  <div className="text-sm font-medium p-2">FY24-Barclays-Results-RA.pdf</div>
                  <div className="flex items-center justify-between p-2 text-sm rounded-md hover:bg-muted cursor-pointer bg-yellow-50 border border-yellow-400">
                    <div className="truncate pr-2 text-black">ECL By Stage</div>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="flex items-center justify-center h-[400px] border rounded-lg">
                <div className="text-center p-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="animate-spin h-10 w-10 border-4 border-yellow-400 border-t-transparent rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Processing Data</h3>
                  <p className="text-sm text-muted-foreground">
                    Extracting information from your documents...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold mb-1">Extraction Results</h2>
            <p className="text-sm text-muted-foreground">View and download the extracted financial data for Barclays</p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onDownloadResults}
            className="flex items-center gap-1 border-yellow-400 hover:bg-yellow-50"
          >
            <Download className="h-4 w-4" />
            <span>Download All</span>
          </Button>
        </div>
        
        <TabsList className="grid grid-cols-2 max-w-[400px]">
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="combined">Combined View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="results" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-black text-white p-2 text-sm font-medium">
                  Processed Files
                </div>
                <ScrollArea className="h-[400px]">
                  <div className="p-2">
                    {Object.entries(resultsByFile).map(([fileId, fileResults]) => {
                      const fileInfo = fileResults[0];
                      if (!fileInfo) return null;
                      
                      return (
                        <div key={fileId} className="mb-4">
                          <div className="text-sm font-medium p-2 bg-muted">
                            {fileInfo.fileName}
                          </div>
                          {fileResults.map(result => {
                            if (!result) return null;
                            const isSelected = selectedResult === result.id;
                            
                            return (
                              <div 
                                key={result.id}
                                className={cn(
                                  "flex items-center justify-between p-2 text-sm rounded-md cursor-pointer",
                                  isSelected ? "bg-yellow-50 border border-yellow-400 text-black" : "hover:bg-muted"
                                )}
                                onClick={() => setSelectedResult(result.id)}
                              >
                                <div className="truncate pr-2">{result.promptName}</div>
                                <div className="flex items-center">
                                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              {currentResult ? (
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-black text-white p-3 flex justify-between items-center">
                    <div>
                      <div className="font-medium">{currentResult.promptName}</div>
                      <div className="text-xs text-gray-400">From: {currentResult.fileName}</div>
                    </div>
                    <Badge 
                      className={cn(
                        "capitalize",
                        currentResult.status === 'success' && "bg-green-500",
                        currentResult.status === 'error' && "bg-destructive",
                        currentResult.status === 'processing' && "bg-amber-500"
                      )}
                    >
                      {currentResult.status}
                    </Badge>
                  </div>
                  
                  <div className="p-3">
                    {currentResult.status === 'processing' && (
                      <div className="flex flex-col items-center justify-center h-[350px] py-8">
                        <Loader className="h-8 w-8 text-yellow-400 animate-spin mb-2" />
                        <div className="text-sm">Processing data extraction...</div>
                      </div>
                    )}
                    
                    {currentResult.status === 'error' && currentResult.error && (
                      <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                          {currentResult.error}
                        </AlertDescription>
                      </Alert>
                    )}
                    
                    {currentResult.status === 'success' && currentResult.data && (
                      <Tabs defaultValue="table">
                        <TabsList className="mb-4">
                          <TabsTrigger value="table">Table View</TabsTrigger>
                          <TabsTrigger value="json">JSON View</TabsTrigger>
                          {/* Only show By Stage tab for ECL By Stage category */}
                          {isEclByStageCategory && (
                            <TabsTrigger value="by-stage">By Stage</TabsTrigger>
                          )}
                        </TabsList>
                        
                        <TabsContent value="table" className="mt-0">
                          <ScrollArea className="h-[350px]">
                            <Table>
                              <TableHeader className="bg-muted sticky top-0">
                                <TableRow>
                                  <TableHead className="font-semibold">Category</TableHead>
                                  <TableHead className="font-semibold">Stage</TableHead>
                                  <TableHead className="font-semibold">Field</TableHead>
                                  <TableHead className="font-semibold">Value</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {currentResult.data.map((item, index) => {
                                  if (!item) return null;
                                  
                                  return (
                                    <TableRow key={index}>
                                      <TableCell>
                                        {item.Category === 'ECL By Stage' ? 'ECL' : item.Category}
                                      </TableCell>
                                      <TableCell>{item.Stage}</TableCell>
                                      <TableCell>{item.Field}</TableCell>
                                      <TableCell className="font-medium">{item.Value}</TableCell>
                                    </TableRow>
                                  );
                                })}
                              </TableBody>
                            </Table>
                          </ScrollArea>
                        </TabsContent>
                        
                        <TabsContent value="json" className="mt-0">
                          <ScrollArea className="h-[350px]">
                            <pre className="bg-muted p-4 rounded-md text-xs overflow-x-auto">
                              {JSON.stringify(currentResult.data, null, 2)}
                            </pre>
                          </ScrollArea>
                        </TabsContent>
                        
                        {/* Only render By Stage content for ECL By Stage category */}
                        {isEclByStageCategory && (
                          <TabsContent value="by-stage" className="mt-0">
                            <ScrollArea className="h-[350px]">
                              <div className="space-y-4">
                                {/* Group data by Stage */}
                                {(() => {
                                  // Get unique stages
                                  const stages = Array.from(
                                    new Set(
                                      currentResult.data
                                        .filter(item => item?.Category === 'ECL By Stage')
                                        .map(item => item?.Stage)
                                    )
                                  );
                                  
                                  return stages.map(stage => {
                                    const stageData = currentResult.data.filter(
                                      item => item?.Stage === stage && item?.Category === 'ECL By Stage'
                                    );
                                    
                                    if (stageData.length === 0) return null;
                                    
                                    return (
                                      <div key={`stage-${stage}`} className="border rounded-md overflow-hidden">
                                        <div className="bg-muted p-2">
                                          <h4 className="font-medium">Stage {stage}</h4>
                                        </div>
                                        <Table>
                                          <TableHeader>
                                            <TableRow>
                                              <TableHead>Category</TableHead>
                                              <TableHead>Field</TableHead>
                                              <TableHead>Value</TableHead>
                                            </TableRow>
                                          </TableHeader>
                                          <TableBody>
                                            {stageData.map((item, index) => (
                                              <TableRow key={index}>
                                                <TableCell>ECL</TableCell>
                                                <TableCell>{item.Field}</TableCell>
                                                <TableCell className="font-medium">{item.Value}</TableCell>
                                              </TableRow>
                                            ))}
                                          </TableBody>
                                        </Table>
                                      </div>
                                    );
                                  });
                                })()}
                              </div>
                            </ScrollArea>
                          </TabsContent>
                        )}
                      </Tabs>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[400px] border rounded-lg">
                  <div className="text-muted-foreground">
                    Select a result to view details
                  </div>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="combined">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Combined Results</h2>
                <p className="text-sm text-muted-foreground">
                  View and download the final processed data in Excel format
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onDownloadResults}
                className="flex items-center gap-1 border-yellow-400 bg-white text-black hover:bg-yellow-50"
              >
                <Download className="h-4 w-4" />
                <span>Download Excel</span>
              </Button>
            </div>
            
            {results.length > 0 ? (
              <div className="border rounded-lg overflow-hidden">
                <div className="flex justify-between items-center p-3 bg-muted border-b">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="py-1 h-8 bg-yellow-400 hover:bg-yellow-500 border-none text-black"
                  >
                    Combined View
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    {results.filter(r => r.data).flatMap(r => r.data || []).length} rows
                  </div>
                </div>
                
                <ScrollArea className="h-[650px]">
                  <Table>
                    <TableHeader className="bg-muted/70 sticky top-0">
                      <TableRow>
                        <TableHead className="font-semibold text-black">Category</TableHead>
                        <TableHead className="font-semibold text-black">Stage</TableHead>
                        <TableHead className="font-semibold text-black">Field</TableHead>
                        <TableHead className="font-semibold text-black">Value</TableHead>
                        <TableHead className="font-semibold text-black">Source</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {results
                        .filter(result => result.status === 'success' && result.data)
                        .flatMap((result, resultIndex) => 
                          (result.data || []).map((item, itemIndex) => (
                            <TableRow key={`${resultIndex}-${itemIndex}`}>
                              <TableCell>
                                {item.Category === 'ECL By Stage' ? 'ECL' : item.Category}
                              </TableCell>
                              <TableCell>{item.Stage}</TableCell>
                              <TableCell>{item.Field}</TableCell>
                              <TableCell>{item.Value}</TableCell>
                              <TableCell>{result.fileName} - {result.promptName}</TableCell>
                            </TableRow>
                          ))
                        )
                      }
                    </TableBody>
                  </Table>
                </ScrollArea>
              </div>
            ) : (
              <div className="border rounded-lg p-12 text-center">
                <p className="text-muted-foreground">No results available yet.</p>
                <p className="text-sm text-muted-foreground mt-1">Process files with prompts to see combined results.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

// Helper component for Progress
const Progress = ({ value, className }: { value: number, className?: string }) => {
  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-2.5", className)}>
      <div 
        className="bg-yellow-400 h-2.5 rounded-full" 
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ResultsViewer;

\`\`\`

# src\components\ThemeProvider.tsx

\`\`\`tsx

"use client";

import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

\`\`\`

# src\components\ThemeToggle.tsx

\`\`\`tsx

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-yellow-400">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:text-black" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-black" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

\`\`\`

# src\components\ui\accordion.tsx

\`\`\`tsx
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

\`\`\`

# src\components\ui\alert-dialog.tsx

\`\`\`tsx
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

\`\`\`

# src\components\ui\alert.tsx

\`\`\`tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }

\`\`\`

# src\components\ui\aspect-ratio.tsx

\`\`\`tsx
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }

\`\`\`

# src\components\ui\avatar.tsx

\`\`\`tsx
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }

\`\`\`

# src\components\ui\badge.tsx

\`\`\`tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

\`\`\`

# src\components\ui\breadcrumb.tsx

\`\`\`tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}

\`\`\`

# src\components\ui\button.tsx

\`\`\`tsx

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground dark:border-gray-600",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        eyOutline: "border border-ey-gray-400 text-white hover:bg-ey-gray-800 hover:border-ey-gray-500 transition-colors",
        eyPrimary: "bg-ey-yellow text-ey-black hover:bg-ey-yellow/90 font-medium transition-colors",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

\`\`\`

# src\components\ui\calendar.tsx

\`\`\`tsx
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

\`\`\`

# src\components\ui\card.tsx

\`\`\`tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

\`\`\`

# src\components\ui\carousel.tsx

\`\`\`tsx
import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}

\`\`\`

# src\components\ui\chart.tsx

\`\`\`tsx
import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}

\`\`\`

# src\components\ui\checkbox.tsx

\`\`\`tsx
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

\`\`\`

# src\components\ui\collapsible.tsx

\`\`\`tsx
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

\`\`\`

# src\components\ui\command.tsx

\`\`\`tsx
import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}

\`\`\`

# src\components\ui\context-menu.tsx

\`\`\`tsx
import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}

\`\`\`

# src\components\ui\dialog.tsx

\`\`\`tsx
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

\`\`\`

# src\components\ui\drawer.tsx

\`\`\`tsx
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}

\`\`\`

# src\components\ui\dropdown-menu.tsx

\`\`\`tsx
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}

\`\`\`

# src\components\ui\form.tsx

\`\`\`tsx
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}

\`\`\`

# src\components\ui\hover-card.tsx

\`\`\`tsx
import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }

\`\`\`

# src\components\ui\input-otp.tsx

\`\`\`tsx
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

\`\`\`

# src\components\ui\input.tsx

\`\`\`tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

\`\`\`

# src\components\ui\label.tsx

\`\`\`tsx
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

\`\`\`

# src\components\ui\menubar.tsx

\`\`\`tsx
import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}

\`\`\`

# src\components\ui\navigation-menu.tsx

\`\`\`tsx
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}

\`\`\`

# src\components\ui\pagination.tsx

\`\`\`tsx
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}

\`\`\`

# src\components\ui\popover.tsx

\`\`\`tsx
import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }

\`\`\`

# src\components\ui\progress.tsx

\`\`\`tsx

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  indicatorClassName?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, indicatorClassName, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 bg-primary transition-all",
        indicatorClassName
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }

\`\`\`

# src\components\ui\radio-group.tsx

\`\`\`tsx
import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }

\`\`\`

# src\components\ui\resizable.tsx

\`\`\`tsx
import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

\`\`\`

# src\components\ui\scroll-area.tsx

\`\`\`tsx
import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }

\`\`\`

# src\components\ui\select.tsx

\`\`\`tsx
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}

\`\`\`

# src\components\ui\separator.tsx

\`\`\`tsx
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

\`\`\`

# src\components\ui\sheet.tsx

\`\`\`tsx
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
  VariantProps<typeof sheetVariants> { }

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet, SheetClose,
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger
}


\`\`\`

# src\components\ui\sidebar.tsx

\`\`\`tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}

\`\`\`

# src\components\ui\skeleton.tsx

\`\`\`tsx
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }

\`\`\`

# src\components\ui\slider.tsx

\`\`\`tsx
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

\`\`\`

# src\components\ui\sonner.tsx

\`\`\`tsx
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }

\`\`\`

# src\components\ui\switch.tsx

\`\`\`tsx
import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }

\`\`\`

# src\components\ui\table.tsx

\`\`\`tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

\`\`\`

# src\components\ui\tabs.tsx

\`\`\`tsx
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }

\`\`\`

# src\components\ui\textarea.tsx

\`\`\`tsx
import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

\`\`\`

# src\components\ui\toast.tsx

\`\`\`tsx
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}

\`\`\`

# src\components\ui\toaster.tsx

\`\`\`tsx
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

\`\`\`

# src\components\ui\toggle-group.tsx

\`\`\`tsx
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }

\`\`\`

# src\components\ui\toggle.tsx

\`\`\`tsx
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }

\`\`\`

# src\components\ui\tooltip.tsx

\`\`\`tsx
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

\`\`\`

# src\components\ui\use-toast.ts

\`\`\`ts
import { useToast, toast } from "@/hooks/use-toast";

export { useToast, toast };

\`\`\`

# src\hooks\use-mobile.tsx

\`\`\`tsx
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

\`\`\`

# src\hooks\use-toast.ts

\`\`\`ts
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }

\`\`\`

# src\index.css

\`\`\`css

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 14%;

    --card: 0 0% 100%;
    --card-foreground: 240 10% 14%;

    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 14%;

    --primary: 52 100% 50%;
    --primary-foreground: 0 0% 0%;

    --secondary: 0 0% 96%;
    --secondary-foreground: 240 10% 14%;

    --muted: 240 5% 96%;
    --muted-foreground: 240 3.8% 46.1%;

    --accent: 0 0% 96%;
    --accent-foreground: 240 10% 14%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;

    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 52 100% 50%;

    --radius: 0.5rem;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 0 0% 28%; /* #474747 - Outer Space */
    --foreground: 0 0% 98%;

    --card: 0 0% 28%;
    --card-foreground: 0 0% 98%;

    --popover: 0 0% 28%;
    --popover-foreground: 0 0% 98%;

    --primary: 52 100% 50%;
    --primary-foreground: 0 0% 0%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 52 100% 50%;
    
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
  
  /* Apply dark mode universally to ensure all elements get the dark background */
  .dark body,
  .dark .bg-white {
    @apply bg-[#474747];
  }
  
  /* Make buttons yellow with black text in dark mode - fixed to avoid circular dependency */
  .dark button[data-state="active"] {
    background-color: #FFE600;
    color: black;
  }
  
  .dark .bg-yellow-400 {
    background-color: #FFE600;
    color: black;
  }
  
  /* Ensure yellow backgrounds always use black text for contrast */
  .bg-yellow-50, 
  .bg-yellow-100, 
  .bg-yellow-200, 
  .bg-yellow-300, 
  .bg-yellow-400, 
  .bg-yellow-500 {
    color: black;
  }
}

@layer components {
  .ey-button {
    @apply bg-ey-yellow hover:bg-ey-yellow/90 text-ey-black font-semibold py-2 px-4 rounded-md transition-colors;
  }
  
  .ey-input {
    @apply border border-ey-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-ey-yellow;
  }

  .ey-card {
    @apply bg-white rounded-lg shadow-md p-6 border border-ey-gray-300 hover:shadow-lg transition-shadow dark:bg-background dark:border-ey-gray-700;
  }
}

\`\`\`

# src\lib\excelUtils.ts

\`\`\`ts

import * as XLSX from 'xlsx';
import { PromptOption } from './types';

// Parse Excel file and extract prompts
export const parseExcelPrompts = async (file: File): Promise<PromptOption[]> => {
  try {
    // Read the Excel file
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    
    // Get the first worksheet
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    
    // Convert the worksheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    
    // Map the JSON data to PromptOption format
    const prompts: PromptOption[] = jsonData.map((row: any, index) => {
      return {
        id: `custom-${index}`,
        name: row['Prompt Name'] || row['Name'] || `Custom Prompt ${index + 1}`,
        description: row['Description'] || 'Custom prompt from Excel file',
        template: row['Template'] || 'Custom_Template',
        category: row['Category'] || 'Custom'
      };
    });
    
    return prompts;
  } catch (error) {
    console.error('Error parsing Excel file:', error);
    throw new Error('Failed to parse Excel file. Please check the format.');
  }
};

// Generate more realistic extraction results based on prompts
export const generateRealisticResults = (promptName: string) => {
  // Create more realistic data based on prompt name/type
  switch (promptName.toLowerCase()) {
    case 'ecl by stage':
      return [
        { Category: "ECL by Stage", Stage: "Stage 1", Field: "Gross Carrying Amount", Value: "$1,245.67m" },
        { Category: "ECL by Stage", Stage: "Stage 1", Field: "Loss Allowance", Value: "$12.45m" },
        { Category: "ECL by Stage", Stage: "Stage 1", Field: "Coverage Ratio", Value: "1.00%" },
        { Category: "ECL by Stage", Stage: "Stage 2", Field: "Gross Carrying Amount", Value: "$428.91m" },
        { Category: "ECL by Stage", Stage: "Stage 2", Field: "Loss Allowance", Value: "$21.45m" },
        { Category: "ECL by Stage", Stage: "Stage 2", Field: "Coverage Ratio", Value: "5.00%" },
        { Category: "ECL by Stage", Stage: "Stage 3", Field: "Gross Carrying Amount", Value: "$85.34m" },
        { Category: "ECL by Stage", Stage: "Stage 3", Field: "Loss Allowance", Value: "$42.67m" },
        { Category: "ECL by Stage", Stage: "Stage 3", Field: "Coverage Ratio", Value: "50.00%" }
      ];
    case 'management adjustments':
      return [
        { Category: "Management Adjustments", Stage: "N/A", Field: "Economic Uncertainty", Value: "$24.5m" },
        { Category: "Management Adjustments", Stage: "N/A", Field: "Model Limitations", Value: "$12.3m" },
        { Category: "Management Adjustments", Stage: "N/A", Field: "Other Adjustments", Value: "$5.8m" },
        { Category: "Management Adjustments", Stage: "N/A", Field: "Total Overlays", Value: "$42.6m" }
      ];
    case 'scenario weights':
      return [
        { Category: "Scenario Weights", Stage: "N/A", Field: "Baseline", Value: "40%" },
        { Category: "Scenario Weights", Stage: "N/A", Field: "Upside", Value: "30%" },
        { Category: "Scenario Weights", Stage: "N/A", Field: "Downside", Value: "30%" }
      ];
    case 'macro variables':
      return [
        { Category: "Macro Variables", Stage: "Baseline", Field: "GDP Growth", Value: "1.3%" },
        { Category: "Macro Variables", Stage: "Baseline", Field: "Unemployment", Value: "4.2%" },
        { Category: "Macro Variables", Stage: "Baseline", Field: "HPI Growth", Value: "1.8%" },
        { Category: "Macro Variables", Stage: "Upside", Field: "GDP Growth", Value: "2.5%" },
        { Category: "Macro Variables", Stage: "Upside", Field: "Unemployment", Value: "3.7%" },
        { Category: "Macro Variables", Stage: "Upside", Field: "HPI Growth", Value: "3.2%" },
        { Category: "Macro Variables", Stage: "Downside", Field: "GDP Growth", Value: "-0.5%" },
        { Category: "Macro Variables", Stage: "Downside", Field: "Unemployment", Value: "5.8%" },
        { Category: "Macro Variables", Stage: "Downside", Field: "HPI Growth", Value: "-2.1%" }
      ];
    default:
      return [
        { Category: promptName, Stage: "N/A", Field: "Value 1", Value: "$123.45m" },
        { Category: promptName, Stage: "N/A", Field: "Value 2", Value: "$67.89m" },
        { Category: promptName, Stage: "N/A", Field: "Ratio", Value: "55.00%" }
      ];
  }
};

\`\`\`

# src\lib\types.ts

\`\`\`ts

// Types for the financial data extraction app

export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  lastModified: number;
  status: 'pending' | 'processing' | 'success' | 'error';
  progress?: number;
}

export interface PromptOption {
  id: string;
  name: string;
  description: string;
  template: string;
  category: string;
}

export interface ExtractedData {
  Category: string;
  Stage: string;
  Field: string;
  Value: string;
}

export interface ProcessingResult {
  id: string;
  fileId: string;
  fileName: string;
  promptId: string;
  promptName: string;
  status: 'pending' | 'processing' | 'success' | 'error';
  timestamp: string;
  data?: ExtractedData[];
  notes?: string;
  error?: string;
}

// Mock data for default prompts
export const DEFAULT_PROMPTS: PromptOption[] = [
  {
    id: 'ecl-by-stage',
    name: 'ECL By Stage',
    description: 'Extract Expected Credit Loss data broken down by stages',
    template: 'ECL_By_Stage',
    category: 'Credit Risk'
  },
  {
    id: 'management-adjustments',
    name: 'Management Adjustments',
    description: 'Extract information about management adjustments to ECL',
    template: 'Management_Adjustments',
    category: 'Credit Risk'
  },
  {
    id: 'scenario-weights',
    name: 'Scenario Weights',
    description: 'Extract economic scenario weightings',
    template: 'Scenario_Weights',
    category: 'Economic Scenarios'
  },
  {
    id: 'macro-variables',
    name: 'Macro Variables',
    description: 'Extract macroeconomic variables used in models',
    template: 'Macro_Variables',
    category: 'Economic Scenarios'
  },
  {
    id: 'credit-quality',
    name: 'Credit Quality',
    description: 'Extract credit quality indicators',
    template: 'Credit_Quality',
    category: 'Credit Risk'
  },
  {
    id: 'loan-loss-rate',
    name: 'Loan Loss Rate',
    description: 'Extract loan loss rate data',
    template: 'Loan_Loss_Rate',
    category: 'Credit Risk'
  },
  {
    id: 'staging-criteria',
    name: 'Staging Criteria',
    description: 'Extract criteria used for staging classification',
    template: 'Staging_Criteria',
    category: 'Methodology'
  },
  {
    id: 'sensitivity-analysis',
    name: 'Sensitivity Analysis',
    description: 'Extract sensitivity analysis results',
    template: 'Sensitivity_Analysis',
    category: 'Economic Scenarios'
  }
];

// Mock data for extracted results (for UI demonstration)
export const MOCK_EXTRACTED_DATA: ExtractedData[] = [
  { Category: 'ECL', Stage: 'Stage 1', Field: 'Retail Loans', Value: '125,000,000' },
  { Category: 'ECL', Stage: 'Stage 1', Field: 'Corporate Loans', Value: '372,500,000' },
  { Category: 'ECL', Stage: 'Stage 2', Field: 'Retail Loans', Value: '89,300,000' },
  { Category: 'ECL', Stage: 'Stage 2', Field: 'Corporate Loans', Value: '246,800,000' },
  { Category: 'ECL', Stage: 'Stage 3', Field: 'Retail Loans', Value: '43,200,000' },
  { Category: 'ECL', Stage: 'Stage 3', Field: 'Corporate Loans', Value: '118,500,000' },
  { Category: 'Summary', Stage: 'N/A', Field: 'Total ECL', Value: '995,300,000' },
  { Category: 'Summary', Stage: 'N/A', Field: 'Coverage Ratio', Value: '2.3%' }
];

\`\`\`

# src\lib\utils.ts

\`\`\`ts

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Ensures proper text contrast on colored backgrounds
 * @param bgColor - The background color class (e.g., 'bg-yellow-400')
 * @returns string - The appropriate text color class
 */
export function getTextColorForBackground(bgColor: string): string {
  // Yellow backgrounds should always have black text
  if (
    bgColor.includes('yellow') || 
    bgColor.includes('lime') || 
    bgColor.includes('green-300') ||
    bgColor.includes('amber')
  ) {
    return 'text-black';
  }
  
  // Dark backgrounds should have white text
  if (
    bgColor.includes('black') || 
    bgColor.includes('gray-800') || 
    bgColor.includes('gray-900') ||
    bgColor.includes('slate-800') ||
    bgColor.includes('slate-900')
  ) {
    return 'text-white';
  }
  
  // Default - use the current text color
  return '';
}

\`\`\`

# src\main.tsx

\`\`\`tsx

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root and render app
createRoot(document.getElementById("root")!).render(<App />);

\`\`\`

# src\pages\BankSelection.tsx

\`\`\`tsx

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { ArrowRight, Check } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const banks = [
  { id: 'barclays', name: 'Barclays' },
  { id: 'hsbc', name: 'HSBC' },
  { id: 'lloyds', name: 'Lloyds Banking Group' },
  { id: 'natwest', name: 'NatWest Group' },
  { id: 'santander', name: 'Santander UK' },
  { id: 'standard', name: 'Standard Chartered' }
];

const BankSelection = () => {
  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState<string>('');
  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const [enableMultiBanks, setEnableMultiBanks] = useState<boolean>(false);

  // Update selected banks when toggling multi-bank mode
  useEffect(() => {
    if (enableMultiBanks) {
      // If switching to multi-bank mode, initialize with the current selection
      if (selectedBank && !selectedBanks.includes(selectedBank)) {
        setSelectedBanks([selectedBank]);
      }
    } else {
      // If switching to single bank mode, use the first selected bank or empty
      setSelectedBank(selectedBanks.length > 0 ? selectedBanks[0] : '');
    }
  }, [enableMultiBanks]);

  const handleContinue = () => {
    if ((enableMultiBanks && selectedBanks.length > 0) || (!enableMultiBanks && selectedBank)) {
      // Store the selected bank(s) in session storage for use across the application
      sessionStorage.setItem('selectedBank', enableMultiBanks ? selectedBanks[0] : selectedBank);
      sessionStorage.setItem('selectedBanks', JSON.stringify(enableMultiBanks ? selectedBanks : [selectedBank]));
      sessionStorage.setItem('enableMultiBanks', enableMultiBanks.toString());
      navigate('/dashboard');
    }
  };

  const toggleBankSelection = (bankId: string) => {
    setSelectedBanks(prevSelected => {
      if (prevSelected.includes(bankId)) {
        return prevSelected.filter(id => id !== bankId);
      } else {
        return [...prevSelected, bankId];
      }
    });
  };

  // Check if a bank is selected in multi-bank mode
  const isBankSelected = (bankId: string) => {
    return selectedBanks.includes(bankId);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ey-black text-white">
      <div className="w-full max-w-md px-6 py-12 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-ey-yellow rounded-md"></div>
          </div>
          
          <h1 className="text-4xl font-bold mb-2">AiDEx</h1>
          <p className="text-ey-gray-400">
            AI powered Data Extraction
          </p>
          <p className="text-ey-gray-500 text-sm mt-1">
            Supported by EYQ
          </p>
        </div>
        
        <div className="border border-ey-gray-700 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Select Bank</h2>
          <p className="text-sm text-ey-gray-400 mb-6">
            Choose the bank you want to analyze for data extraction.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mt-4 mb-4 p-3 bg-ey-gray-800/50 rounded-md">
              <Checkbox 
                id="enableMultiBanks" 
                checked={enableMultiBanks} 
                onCheckedChange={(checked) => setEnableMultiBanks(checked as boolean)}
                className="data-[state=checked]:bg-ey-yellow data-[state=checked]:text-black"
              />
              <Label htmlFor="enableMultiBanks" className="text-sm cursor-pointer">
                Enable multi-bank analysis & comparison
              </Label>
            </div>

            {enableMultiBanks ? (
              // Multi-bank selection UI
              <div className="space-y-2">
                <label className="text-sm font-medium mb-1 block text-left">
                  Financial Institutions
                </label>
                <div className="border border-ey-gray-600 bg-ey-black text-white rounded-md p-1">
                  <div className="space-y-1">
                    {banks.map(bank => (
                      <div 
                        key={bank.id}
                        onClick={() => toggleBankSelection(bank.id)}
                        className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors ${
                          isBankSelected(bank.id) ? 'bg-ey-yellow/20 border border-ey-yellow' : 'hover:bg-ey-gray-800'
                        }`}
                      >
                        <span className="text-sm">{bank.name}</span>
                        {isBankSelected(bank.id) && (
                          <Check className="h-4 w-4 text-ey-yellow" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {selectedBanks.length === 0 && (
                  <p className="text-xs text-ey-yellow mt-1">Please select at least one bank</p>
                )}
              </div>
            ) : (
              // Single bank selection UI
              <div className="text-left">
                <label className="text-sm font-medium mb-1 block">
                  Financial Institution
                </label>
                <Select onValueChange={setSelectedBank} value={selectedBank}>
                  <SelectTrigger className="w-full border-ey-gray-600 bg-ey-black text-white">
                    <SelectValue placeholder="Select a bank" />
                  </SelectTrigger>
                  <SelectContent className="bg-ey-black text-white border-ey-gray-700">
                    {banks.map(bank => (
                      <SelectItem key={bank.id} value={bank.id} className="hover:bg-ey-gray-800">
                        {bank.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            
            <Button 
              onClick={handleContinue}
              disabled={enableMultiBanks ? selectedBanks.length === 0 : !selectedBank}
              className="w-full bg-ey-yellow hover:bg-ey-yellow/90 text-ey-black font-medium mt-6"
            >
              Continue to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="text-xs text-ey-gray-500">
          <p>© {new Date().getFullYear()} EY | A better working world</p>
        </div>
      </div>
    </div>
  );
};

export default BankSelection;

\`\`\`

# src\pages\Dashboard.tsx

\`\`\`tsx
import { useState } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { UploadedFile, PromptOption, ProcessingResult } from '@/lib/types';
import { generateRealisticResults } from '@/lib/excelUtils';
import TabNavigation from '@/components/dashboard/TabNavigation';
import UploadTab from '@/components/dashboard/UploadTab';
import PromptsTab from '@/components/dashboard/PromptsTab';
import ResultsTab from '@/components/dashboard/ResultsTab';
import CombinedTab from '@/components/dashboard/CombinedTab';
import SideBySideTab from '@/components/dashboard/SideBySideTab';
import Footer from '@/components/dashboard/Footer';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [selectedPrompts, setSelectedPrompts] = useState<PromptOption[]>([]);
  const [results, setResults] = useState<ProcessingResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const [processingProgress, setProcessingProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('upload');
  const { toast } = useToast();
  const selectedBank = sessionStorage.getItem('selectedBank') || 'barclays';

  // Handle uploaded files
  const handleFilesUploaded = (files: UploadedFile[]) => {
    setUploadedFiles(files);
  };

  // Handle prompt selection
  const handlePromptSelected = (prompts: PromptOption[]) => {
    setSelectedPrompts(prompts);
    if (prompts.length > 0) {
      toast({
        title: "Prompts Selected",
        description: `${prompts.length} extraction ${prompts.length === 1 ? 'prompt' : 'prompts'} selected`,
      });
    }
  };

  // Simulate the processing function
  const processFiles = async () => {
    if (uploadedFiles.length === 0) {
      toast({
        title: "No files to process",
        description: "Please upload at least one PDF file.",
        variant: "destructive",
      });
      return;
    }

    if (selectedPrompts.length === 0) {
      toast({
        title: "No prompts selected",
        description: "Please select at least one extraction prompt.",
        variant: "destructive",
      });
      return;
    }

    // Start processing
    setIsProcessing(true);
    setProcessingStep('Initializing extraction process...');
    setProcessingProgress(0);
    setActiveTab('results');
    
    // Generate a unique session ID
    const sessionId = Date.now().toString(); 

    try {
      // We assume `uploadedFiles` now contains the metadata returned 
      // by `/api/upload` (handled by UploadTab). 
      // We directly call `/api/process`.

      const processResponse = await fetch('http://localhost:5000/api/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          files: uploadedFiles, // Send the metadata we already have
          prompts: selectedPrompts,
          sessionId: sessionId // Use the generated session ID
        })
      });

      if (!processResponse.ok) {
          const errorData = await processResponse.json();
          throw new Error(errorData.error || `Processing failed with status: ${processResponse.status}`);
      }

      const processData = await processResponse.json();
      
      // Update results
      setResults(processData.results);
      setIsProcessing(false);
      
      toast({
        title: "Processing Complete",
        description: `Processed ${uploadedFiles.length} files with ${selectedPrompts.length} prompts`,
      });

      // Optionally, you might want to start polling /api/status/<sessionId> here
      // if the processing is long-running, instead of expecting
      // immediate results. For now, we assume /api/process returns
      // the final results directly as per your Python code.

    } catch (error) {
      setIsProcessing(false);
      console.error("Processing Error:", error); // Log the error
      toast({
        title: "Processing Error",
        description: error instanceof Error ? error.message : "An unknown error occurred during processing.",
        variant: "destructive",
      });
    }
  };

  // Simulate downloading results
  const handleDownloadResults = () => {
    toast({
      title: "Downloading Results",
      description: "Your results would download as an Excel file in a real implementation.",
    });
  };

  // Reset everything
  const handleReset = () => {
    setUploadedFiles([]);
    setSelectedPrompts([]);
    setResults([]);
    setActiveTab('upload');
    toast({
      title: "Reset Complete",
      description: "All files and prompts have been cleared.",
    });
  };

  // Navigate to the next tab
  const goToNextTab = () => {
    if (activeTab === 'upload') setActiveTab('prompts');
    else if (activeTab === 'prompts') {
      processFiles();
    }
  };

  // Go back to previous tab
  const goToPreviousTab = () => {
    if (activeTab === 'prompts') setActiveTab('upload');
    else if (activeTab === 'results') setActiveTab('prompts');
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Bank indicator */}
      <div className="bg-yellow-400 text-black py-1 px-4 text-sm flex justify-between">
        <div>
          Selected Bank: <span className="font-semibold">{selectedBank.charAt(0).toUpperCase() + selectedBank.slice(1)}</span>
        </div>
        <Button 
          variant="link" 
          size="sm" 
          onClick={() => window.location.href = '/'}
          className="h-auto p-0 text-black underline text-xs"
        >
          Change
        </Button>
      </div>
      
      {/* Tabs header */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <Tabs value={activeTab}>
          <TabsContent value="upload" className="space-y-6">
            <UploadTab 
              onFilesUploaded={handleFilesUploaded}
              uploadedFiles={uploadedFiles}
              goToNextTab={goToNextTab}
            />
          </TabsContent>
          
          <TabsContent value="prompts" className="space-y-6">
            <div className="flex flex-col space-y-4">
              <PromptsTab 
                onPromptSelected={handlePromptSelected}
                isProcessing={isProcessing}
              />
              
              <div className="flex justify-between mt-4">
                <Button 
                  onClick={goToPreviousTab}
                  variant="outline"
                >
                  Back to Upload
                </Button>
                
                <Button 
                  onClick={processFiles}
                  disabled={isProcessing || selectedPrompts.length === 0}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black"
                >
                  Process Files
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="results" className="space-y-6">
            <ResultsTab 
              results={results}
              onDownloadResults={handleDownloadResults}
              isProcessing={isProcessing}
              processingProgress={processingProgress}
              processingStep={processingStep}
            />
          </TabsContent>
          
          <TabsContent value="combined" className="space-y-6">
            <CombinedTab 
              results={results} 
              onDownloadResults={handleDownloadResults} 
            />
          </TabsContent>

          <TabsContent value="sidebyside" className="space-y-6">
            <SideBySideTab results={results} />
          </TabsContent>
        </Tabs>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;

\`\`\`

# src\pages\Index.tsx

\`\`\`tsx

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UploadedFile, PromptOption, ProcessingResult } from '@/lib/types';
import { Button } from '@/components/ui/button';
import FileUploader from '@/components/FileUploader';
import PromptSelector from '@/components/PromptSelector';
import ResultsViewer from '@/components/ResultsViewer';
import { useToast } from '@/hooks/use-toast';
import { Download, Upload, FileText, FileSpreadsheet } from 'lucide-react';
import { generateRealisticResults } from '@/lib/excelUtils';

const Index = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [selectedPrompts, setSelectedPrompts] = useState<PromptOption[]>([]);
  const [results, setResults] = useState<ProcessingResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const [processingProgress, setProcessingProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('upload');
  const { toast } = useToast();

  // Handle uploaded files
  const handleFilesUploaded = (files: UploadedFile[]) => {
    setUploadedFiles(files);
  };

  // Handle prompt selection
  const handlePromptSelected = (prompts: PromptOption[]) => {
    setSelectedPrompts(prompts);
    if (prompts.length > 0) {
      toast({
        title: "Prompts Selected",
        description: `${prompts.length} extraction ${prompts.length === 1 ? 'prompt' : 'prompts'} selected`,
      });
    }
  };

  // Simulate the processing function
  const processFiles = async () => {
    if (uploadedFiles.length === 0) {
      toast({
        title: "No files to process",
        description: "Please upload at least one PDF file.",
        variant: "destructive",
      });
      return;
    }

    if (selectedPrompts.length === 0) {
      toast({
        title: "No prompts selected",
        description: "Please select at least one extraction prompt.",
        variant: "destructive",
      });
      return;
    }

    // Start processing
    setIsProcessing(true);
    setProcessingStep('Initializing extraction process...');
    setProcessingProgress(5);
    setActiveTab('results');

    const newResults: ProcessingResult[] = [];

    // Simulate processing for each file and prompt
    let completedItems = 0;
    const totalItems = uploadedFiles.length * selectedPrompts.length;

    for (const file of uploadedFiles) {
      // Simulate parsing the file
      setProcessingStep(`Parsing ${file.name}...`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProcessingProgress(10 + (completedItems / totalItems) * 30);

      // For each prompt, create a result
      for (const prompt of selectedPrompts) {
        setProcessingStep(`Extracting ${prompt.name} from ${file.name}...`);
        
        // Simulate API request delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Create a result with either success or random error
        const isSuccess = Math.random() > 0.05; // 95% success rate for demo
        
        const result: ProcessingResult = {
          id: `result-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          fileId: file.id,
          fileName: file.name,
          promptId: prompt.id,
          promptName: prompt.name,
          status: isSuccess ? 'success' : 'error',
          timestamp: new Date().toISOString(),
          data: isSuccess ? generateRealisticResults(prompt.name) : undefined,
          notes: isSuccess 
            ? `Extraction completed successfully for ${prompt.name}.` 
            : undefined,
          error: isSuccess 
            ? undefined 
            : "Could not find relevant information in the document or the format was not recognized."
        };
        
        newResults.push(result);
        completedItems++;
        setProcessingProgress(10 + (completedItems / totalItems) * 80);
      }
    }

    // Final processing step
    setProcessingStep('Finalizing results...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProcessingProgress(100);

    // Update results and finish processing
    setResults([...results, ...newResults]);
    setIsProcessing(false);
    
    toast({
      title: "Processing Complete",
      description: `Processed ${uploadedFiles.length} files with ${selectedPrompts.length} prompts`,
      variant: "default",
    });
  };

  // Simulate downloading results
  const handleDownloadResults = () => {
    toast({
      title: "Downloading Results",
      description: "Your results would download as an Excel file in a real implementation.",
    });
  };

  // Reset everything
  const handleReset = () => {
    setUploadedFiles([]);
    setSelectedPrompts([]);
    setResults([]);
    setActiveTab('upload');
    toast({
      title: "Reset Complete",
      description: "All files and prompts have been cleared.",
    });
  };

  // Navigate to the next tab
  const goToNextTab = () => {
    if (activeTab === 'upload') setActiveTab('prompts');
    else if (activeTab === 'prompts') {
      processFiles();
    }
  };

  // Go back to previous tab
  const goToPreviousTab = () => {
    if (activeTab === 'prompts') setActiveTab('upload');
    else if (activeTab === 'results') setActiveTab('prompts');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Tabs header */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto my-4">
              <TabsTrigger 
                value="upload" 
                className={activeTab === 'upload' ? 'bg-yellow-400 text-black' : ''}
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </TabsTrigger>
              <TabsTrigger 
                value="prompts" 
                className={activeTab === 'prompts' ? 'bg-yellow-400 text-black' : ''}
              >
                <FileText className="h-4 w-4 mr-2" />
                Prompts
              </TabsTrigger>
              <TabsTrigger 
                value="results" 
                className={activeTab === 'results' ? 'bg-yellow-400 text-black' : ''}
              >
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                Results
              </TabsTrigger>
              <TabsTrigger 
                value="combined" 
                className={activeTab === 'combined' ? 'bg-yellow-400 text-black' : ''}
              >
                <Download className="h-4 w-4 mr-2" />
                Combined
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <Tabs value={activeTab}>
          {/* Upload Tab */}
          <TabsContent value="upload" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <FileUploader 
                onFilesUploaded={handleFilesUploaded}
                acceptedFileTypes={['.pdf']}
              />
              
              <div className="flex justify-end">
                <Button 
                  onClick={goToNextTab} 
                  disabled={uploadedFiles.length === 0}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black"
                >
                  Next: Select Prompts
                </Button>
              </div>
            </div>
          </TabsContent>
          
          {/* Prompts Tab */}
          <TabsContent value="prompts" className="space-y-6">
            <PromptSelector 
              onPromptSelected={handlePromptSelected} 
              disabled={isProcessing}
            />
          </TabsContent>
          
          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            <ResultsViewer 
              results={results}
              onDownloadResults={handleDownloadResults}
              isProcessing={isProcessing}
              processingProgress={processingProgress}
              processingStep={processingStep}
            />
          </TabsContent>
          
          {/* Combined Tab */}
          <TabsContent value="combined" className="space-y-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold mb-1">IFRS9 Combined Results</h2>
                  <p className="text-sm text-muted-foreground">
                    View and download the final processed IFRS9 data in Excel format
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleDownloadResults}
                  className="flex items-center gap-1 border-yellow-400 bg-white text-black hover:bg-yellow-50"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Excel</span>
                </Button>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="flex justify-between items-center p-3 bg-muted border-b">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="py-1 h-8 bg-yellow-400 hover:bg-yellow-500 border-none text-black"
                  >
                    Combined View
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    28 rows
                  </div>
                </div>
                
                <div className="h-[500px] overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/70 sticky top-0">
                      <tr>
                        <th className="p-3 text-left font-semibold text-black">Category</th>
                        <th className="p-3 text-left font-semibold text-black">Stage</th>
                        <th className="p-3 text-left font-semibold text-black">Field</th>
                        <th className="p-3 text-left font-semibold text-black">Value</th>
                        <th className="p-3 text-left font-semibold text-black">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 1</td>
                        <td className="p-3">Gross Carrying Amount</td>
                        <td className="p-3">$1,029.66m</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 1</td>
                        <td className="p-3">Loss Allowance</td>
                        <td className="p-3">$12.64m</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 1</td>
                        <td className="p-3">Coverage Ratio</td>
                        <td className="p-3">0.94%</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 2</td>
                        <td className="p-3">Gross Carrying Amount</td>
                        <td className="p-3">$502.11m</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 2</td>
                        <td className="p-3">Loss Allowance</td>
                        <td className="p-3">$20.71m</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 2</td>
                        <td className="p-3">Coverage Ratio</td>
                        <td className="p-3">6.35%</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t mt-auto py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div>IFRS9 Data Extraction Tool</div>
            <div>© {new Date().getFullYear()} Barclays Financial Services</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

\`\`\`

# src\pages\NotFound.tsx

\`\`\`tsx
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

\`\`\`

# src\vite-env.d.ts

\`\`\`ts
/// <reference types="vite/client" />

\`\`\`

# tailwind.config.ts

\`\`\`ts

import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				ey: {
					black: '#000000',
					yellow: '#FFE600',
					white: '#FFFFFF',
					gray: {
						100: '#F6F6F7',
						200: '#F1F1F1', 
						300: '#EAEAEA',
						400: '#C8C8C9',
						500: '#9F9EA1',
						600: '#8A898C',
						700: '#555555',
						800: '#403E43',
						900: '#221F26'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-gentle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'float-1': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'float-2': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-7px)' }
				},
				'float-3': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' }
				},
				'float-4': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'float-5': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-3px)' }
				},
				'float-6': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'float-7': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' }
				},
				'float-8': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'page-transition-in': {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'page-transition-out': {
					'0%': { transform: 'translateX(0)', opacity: '1' },
					'100%': { transform: 'translateX(-20px)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-gentle': 'pulse-gentle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'fade-in': 'fade-in 0.6s ease-in-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'float-1': 'float-1 3s ease-in-out infinite',
				'float-2': 'float-2 3.2s ease-in-out infinite 0.1s',
				'float-3': 'float-3 2.8s ease-in-out infinite 0.2s',
				'float-4': 'float-4 3.5s ease-in-out infinite 0.3s',
				'float-5': 'float-5 2.9s ease-in-out infinite 0.4s',
				'float-6': 'float-6 3.1s ease-in-out infinite 0.5s',
				'float-7': 'float-7 3.3s ease-in-out infinite 0.6s',
				'float-8': 'float-8 3.0s ease-in-out infinite 0.7s',
				'page-transition-in': 'page-transition-in 0.3s ease-out',
				'page-transition-out': 'page-transition-out 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

\`\`\`

# tsconfig.app.json

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noImplicitAny": false,
    "noFallthroughCasesInSwitch": false,

    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}

\`\`\`

# tsconfig.json

\`\`\`json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "noImplicitAny": false,
    "noUnusedParameters": false,
    "skipLibCheck": true,
    "allowJs": true,
    "noUnusedLocals": false,
    "strictNullChecks": false
  }
}

\`\`\`

# tsconfig.node.json

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}

\`\`\`

# vite.config.ts

\`\`\`ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

\`\`\`


```

# components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

# eslint.config.js

```js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
);

```

# index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>finscope-data-miner</title>
    <meta name="description" content="Lovable Generated Project" />
    <meta name="author" content="Lovable" />

    <meta property="og:title" content="finscope-data-miner" />
    <meta property="og:description" content="Lovable Generated Project" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  </head>

  <body>
    <div id="root"></div>
    <!-- IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT! -->
    <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

# package.json

```json
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-context-menu": "^2.2.1",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.4",
    "@tanstack/react-query": "^5.56.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "framer-motion": "^12.10.5",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "pdfjs-dist": "^3.10.111",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.0",
    "react-resizable-panels": "^2.1.3",
    "react-router-dom": "^6.26.2",
    "recharts": "^2.12.7",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.3",
    "xlsx": "^0.18.5",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.0",
    "@tailwindcss/typography": "^0.5.15",
    "@types/node": "^22.5.5",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.9.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "globals": "^15.9.0",
    "lovable-tagger": "^1.1.7",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.11",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.0.1",
    "vite": "^5.4.1"
  }
}

```

# postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# public\favicon.ico

This is a binary file of the type: Binary

# public\placeholder.svg

This is a file of the type: SVG Image

# public\robots.txt

```txt
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

```

# README.md

```md
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/f1c52b0c-481b-4d58-84cf-5beb28959f75

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f1c52b0c-481b-4d58-84cf-5beb28959f75) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

\`\`\`sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
\`\`\`

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f1c52b0c-481b-4d58-84cf-5beb28959f75) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

```

# src\App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

# src\App.tsx

```tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen from "./components/IntroScreen";
import Dashboard from "./pages/Dashboard";
import BankSelection from "./pages/BankSelection";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

const queryClient = new QueryClient();

// Simple, elegant fade transition
const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

// Smooth, quick transition
const pageTransition = {
  duration: 0.3,
  ease: "easeInOut"
};

// Animation wrapper component with elegant transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full min-h-screen"
      >
        {/* Theme toggle positioned in header instead of fixed position */}
        <Routes location={location}>
          <Route path="/" element={<IntroScreen />} />
          <Route path="/select-bank" element={<BankSelection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

```

# src\components\dashboard\CombinedTab.tsx

```tsx
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
```

# src\components\dashboard\Footer.tsx

```tsx

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-auto py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <div>AiDEx - AI powered Data Extraction</div>
          <div>© {new Date().getFullYear()} Barclays Financial Services</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

```

# src\components\dashboard\PromptsTab.tsx

```tsx
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
```

# src\components\dashboard\ResultsTab.tsx

```tsx
// src/components/dashboard/ResultsTab.tsx

import ResultsViewer from '@/components/ResultsViewer'; //
import { ProcessingResult } from '@/lib/types'; //

// Define or update ResultsTabProps here
export interface ResultsTabProps {
  results: ProcessingResult[];
  onDownloadResults: () => void;
  isProcessing: boolean;
  processingProgress: number;
  processingStep: string;
  selectedBank: string;         // <-- ENSURE THIS LINE IS PRESENT
  totalUploadedFiles: number; 
}

const ResultsTab = ({ 
  results, 
  onDownloadResults, 
  isProcessing, 
  processingProgress, 
  processingStep,
  selectedBank,
  totalUploadedFiles 
}: ResultsTabProps) => {
  
  const uniqueFileIdsInResults = new Set(results.map(r => r.fileId));
  const totalFilesToDisplay = isProcessing ? Math.max(1, totalUploadedFiles) : uniqueFileIdsInResults.size;
  const processedFilesCount = results.filter(r => r.status === 'success' || r.status === 'error').length;
  
  return (
    <ResultsViewer 
      results={results}
      onDownloadResults={onDownloadResults}
      isProcessing={isProcessing}
      processingProgress={processingProgress}
      processingStep={processingStep}
      totalFiles={totalFilesToDisplay} 
      processedFiles={processedFilesCount}
      selectedBank={selectedBank} // Pass it down
    />
  );
};

export default ResultsTab;
```

# src\components\dashboard\SideBySideTab.tsx

```tsx
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
    const base64PDF = `JVBERi0xLjcKJeTjz9IKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFIvTGFuZyhqYS1KUCkgL1N0cnVjdFRyZWVSb290IDIxIDAgUi9NYXJrSW5mbzw8L01hcmtlZCB0cnVlPj4vTWV0YWRhdGEgNTggMCBSL1ZpZXdlclByZWZlcmVuY2VzIDU5IDAgUj4+CmVuZG9iagoyIDAgb2JqCjw8L1R5cGUvUGFnZXMvQ291bnQgMS9LaWRzWyAzIDAgUl0gPj4KZW5kb2JqCjMgMCBvYmoKPDwvVHlwZS9QYWdlL1BhcmVudCAyIDAgUi9SZXNvdXJjZXM8PC9YT2JqZWN0PDwvSW1hZ2U1IDUgMCBSL0ltYWdlNyA3IDAgUj4+L0ZvbnQ8PC9GMSAxMSAwIFIvRjIgMTMgMCBSL0YzIDE1IDAgUi9GNCAxNyAwIFI+Pi9FeHRHU3RhdGU8PC9HUzcgNyAwIFIvR1M4IDggMCBSPj4vUHJvY1NldFsvUERGL1RleHQvSW1hZ2VCL0ltYWdlQy9JbWFnZUldID4+L01lZGlhQm94WyAwIDAgNTk1LjMyIDg0MS45Ml0gL0NvbnRlbnRzIDQgMCBSL0dyb3VwPDwvVHlwZS9Hcm91cC9TL1RyYW5zcGFyZW5jeS9DUy9EZXZpY2VSR0I+Pi9UYWJzL1MvU3RydWN0UGFyZW50cyAwPj4KZW5kb2JqCjQgMCBvYmoKPDwvRmlsdGVyL0ZsYXRlRGVjb2RlL0xlbmd0aCAxOTA4Pj4Kc3RyZWFtCn陲Vnbkps4EH3nK3Q5uwo1urHB43gnpHBiy4iL12vv5mErD4MsMBXGBXgr+4d8XDeSuRgwdpKtmiqEkOg+3af7yHy7It9olr6TM87oNb2JxYGqM8qTrCCxgD8CBS3oi0xyEYn0nIooAynMaM5SciW/ZCknb7Oz8w8kE2QinkYHcq2iI8lj8g0awW+p/HuWvvAYBp6wPDqQmNIF/Emf4BFRamDNBHklMTzNNQIqwC4JjI9T+FeSh39MegVj9CjN0E6jBQWnISVqwXOaJCALfodFnBZCo89FivXlErBTYAa841mSJ+mJ8MmzDDC+1QxuJ+pEefBHzJKMJwcS8cN+RtVs8+NPwBa7wOxpt3i8eXn4gfrju8Ct3h1CLx1G7+7QuH+Anj4Oj90XgfmrOOye/WwO+1npeI7ukDsFrrjcHUbyGU0IvkZTp8pfa33pwsb7UuC1gYs8QdNq5jYZxNYzX+/oDXrTTOA+WCzCnJEUJrhA7q0wC3JE4ZPNH3W1mROL04h1Qhim4OKmdhPbAcrTIiVvdZ2z9DC6dAA+UFw4bjA2/P54g+1+PB6NvEvn2Ld6u+pBE9ufjI39wUg/D3F6aoLBHLScFLLJksm+xM/JXCNYM4YeBicJvc8rC7PSK5G6Tjv4i8Wt4wcj63q1ut6qhlggOcgcUYk20WXJHC7Vdu4wSnOEeQrmJpnDxKBkOgLS5kS2KQdTqUHmsHxhnB+GlaEggPm4bDq/rUlUvUjrx4i2DXDjo1hMBHxkDMsODMexmsHZeqXN9+VqKDEpPJhKkDs18A6kTGPycPv00ADXRkNEvF8xRdspeH8QLGfr3wE5KQCh7y/xziq8IATdLe3z1ZPvu9Po0L7ls/lyTA8s1zwx6/aipdyGvrI4SDx7E9cNeGdf3b2et7BfIxgBybl5YQzMoNsqSZS1h9HbCI1zdw6HpcT9hdiBBEcHkiFgY5YXSkAVGjuvamNUrSYyeUp1Gp7oicxolhfyuTsloXNpDRzuTLnjDifqveWQivUky2PkpeB7hFRdRV6wVbyrzLMCHqxUUW/HGQj7VEwIMEOZoVUbVZnWxp4Ge1mCstY3VHkOkUW4dPZVtSvdX51rXq4tUPhM+cyjdAlOM9g0E66NuugYnUCMr9311TxRn51l90OwvcFq4KKw1pQ42gAsntdgwrqmJ/Brl2P82jZQYzOUFO5LqPYvzc/bhpy+N3ubZnfVAJ+pDaKZIL/lQzdTDstKjB6gXjcr9bY9Dru6QF3Ac415RwleFebeUxGlPB5fd9/9gl3oQonA7eUXarKL9KhHka22R4CleLvNYlSY7UgVW3LQmKcd90zcqJPJCcCdiX/62fXPrcdJLJssALwbnztejx93ndtvHcpGx7ocwX8aSO00vRdTTBZeQni3WjjEIb58LMeQO4e/aBMFLTHvizWssNRIkltzmJJCH0nP7ci+co6Pmvr8M/awR8FFekLNDNcymoI7JlvzZquAKc9MsJQHx2+6m8t7oG0zG6S6uCW3cTAdOUfmznGcN6ZM0tyhr7RT4BqKFeBhcMXHwRptklv0KiDZLewprKkKtjTGpuq+d8ctsrGXbnVTB59DE8vjXIXlnJNsKqTqdfqL85PVLBHZU4DUfHWUt1sW5wnXHS2HlQ3GZghWyMvKZYLEf+XimTTHD0te3mdpeML10Xf6TrC3XRu6pksPUrQX1cUQN1hAQGF2aL8feZNFhbq2JIA06UM2wUuTBPjuDAIpPRAVVIQHKJ6Juo5E54bc70m2kUWNSYk8I3cSoNt90tKkmwkLiRLIpGq41cQE9+QrPQzp21JAcDdAA1J8jFWqKOlnQSsj225Yu4R/2EOWWtheOD6IQn8wCdptq5bU90v8l/zAiThahUZBNYzgdGZG3CKqTDehjCfYbIGluBVteMXWN2z/ut6wrSINS+4X6PcYwXVPrZ/IXEU452MocU826M76xG7j6W0B5qAjUYxc/DVJdXOXt6JKbAA2C1+r3ELS+J6T6rRfILmcZCphP+Z9hd8/0QPecIxS/CIRfJ7X97hoRc82nLdXLo1wHtdx998hmVxJynrA01ulvqjjjCUJeEXepU6NJXrW18vtdcbYI80CeXcogFNWJctyyDFxKHcWO76Zawsfpzjrx0ffQTWGusezbCs3v/49v87ZF8X+2O23cr7cyi2fLdBjrm6/K9A/vTLv1bHfdcDhqy+FhdLD8YQN5O+1fwEqNfLlCmVuZHN0cmVhbQplbmRvYmoKMjEgMCBvYmoKPDwvVHlwZS9TdHJ1Y3RUcmVlUm9vdC9QYXJlbnRUcmVlID0gNiAwIFIgL0sgPSA1MCAwIFIvSURUcmVlID0gNTEgMCBSID4+CmVuZG9iagoyMiAwIG9iago8PC9UeXBlL0ZvbnQvU3VidHlwZS9UcnVlVHlwZS9OYW1lL0YxL0Jhc2VGb250L0JDREVFRStDYWxpYnJpL0VuY29kaW5nL1dpbkFuc2lFbmNvZGluZy9Gb250RGVzY3JpcHRvciAyMyAwIFIvRmlyc3RDaGFyIDMyL0xhc3RDaGFyIDg0L1dpZHRocyA1MyAwIFI+PgplbmRvYmoKMjMgMCBvYmoKPDwvVHlwZS9Gb250RGVzY3JpcHRvci9Gb250TmFtZS9CQ0RFRUUrQ2FsaWJyaS9GbGFncyAzMi9JdGFsaWNBbmdsZSAwL0FzY2VudCA3NTAvRGVzY2VudCAtMjUwL0NhcEhlaWdodCA3NTAvQXZnV2lkdGggNTIxL01heFdpZHRoIDE3NDMvRm9udFdlaWdodCA0MDAvWEhlaWdodCAyNTAvU3RlbVYgNTIvRm9udEJCb3hbIC01MDMgLTI1MCAxMjQwIDc1MF0gL0ZvbnRGaWxlMiA1MiAwIFI+PgplbmRvYmoKNTMgMCBvYmoKWyAyMjYgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDY0MyAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCA3MTUgMCA2NjIgMCAwIDAgNTQ0XSAKZW5kb2JqCjUwIDAgb2JqCjw8L1R5cGUvU3RydWN0RWxlbS9TL1Jvb3QvUC11dGlsKFRpdGxlKS9LWzQ5IDAgUl0gL1BnIDMgMCBSID4+CmVuZG9iago0OSAwIG9iago8PC9UeXBlL1N0cnVjdEVsZW0vUy9UaXRsZS9QLXV0aWwoSGVhZGluZzEpL0tbNDggMCBSXSAvUGcgMyAwIFIgPj4KZW5kb2JqCjQ4IDAgb2JqCjw8L1R5cGUvU3RydWN0RWxlbS9TL0hlYWRpbmcxL1AvNTAgMCBSL0tbMF0gL1BnIDMgMCBSID4+CmVuZG9iago1MSAwIG9iago8PC9OYW1lcygibG9hbiIpID4+CmVuZG9iago2IDAgb2JqCjw8L051bXMgWzAgWyA0OCAwIFJdIF0gPj4KZW5kb2JqCnhyZWYKMSA0CjAwMDAwMDAwMTAgNjU1MzUgZiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwMTgxIDAwMDAwIG4gCjAwMDAwMDAyMzggMDAwMDAgbiAKMTEgMgowMDAwMDAwMDAwIDAwMDAwIGYgCjAwMDAwMDAwMDAgMDAwMDAgZiAKMjEgNAowMDAwMDAyMzMwIDAwMDAwIG4gCjAwMDAwMDI0MTggMDAwMDAgbiAKMDAwMDAwMjU5NSAwMDAwMCBuIAowMDAwMDAyODU4IDAwMDAwIG4gCjQ4IDMKMDAwMDAwMzA3NyAwMDAwMCBuIAowMDAwMDAzMDAwIDAwMDAwIG4gCjAwMDAwMDI5MzUgMDAwMDAgbiAKNTAgMQowMDAwMDAyODY1IDAwMDAwIG4gCjUyIDIKMDAwMDAwMDAwMCAwMDAwMCBmIAowMDAwMDAwMDAwIDAwMDAwIGYgCnRyYWlsZXIKPDwvU2l6ZSA1NS9Sb290IDEgMCBSL0luZm8gMjAgMCBSL0lEWzwyRTA1NzM5MkZDM0JCMTQxQjNDNDkzODNBODY4NDg5OD48MkUwNTczOTJGQzNCQjE0MUIzQzQ5MzgzQTg2ODQ4OTg+XSA+PgpzdGFydHhyZWYKMzE0NQolJUVPRgo=`; //
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
```

# src\components\dashboard\TabNavigation.tsx

```tsx

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

```

# src\components\dashboard\UploadTab.tsx

```tsx
// src/components/dashboard/UploadTab.tsx

import { Button } from '@/components/ui/button';
import FileUploader from '@/components/FileUploader';
import { UploadedFile } from '@/lib/types';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Eye, EyeOff, Loader2 } from 'lucide-react';
import PDFViewer from '@/components/PDFViewer';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

interface UploadTabProps {
  onFilesUploaded: (files: UploadedFile[]) => void;
  uploadedFiles: UploadedFile[];
  goToNextTab: () => void;
}

const UploadTab = ({ onFilesUploaded, uploadedFiles, goToNextTab }: UploadTabProps) => {
  const [selectedFileForPreview, setSelectedFileForPreview] = useState<UploadedFile | null>(null);
  const [showPreview, setShowPreview] = useState<boolean>(true);
  const [pdfFileForPreview, setPdfFileForPreview] = useState<File | null>(null);
  
  // Stores the mapping from a client-generated ID (from FileUploader) to the actual File object.
  // This is used to get the File object for upload and potentially for preview.
  const [clientRawFileMap, setClientRawFileMap] = useState<Map<string, File>>(new Map());
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  // Effect to update preview when dashboard's uploadedFiles (backend confirmed) change
  useEffect(() => {
    if (uploadedFiles.length > 0) {
      const latestBackendFileMeta = uploadedFiles[uploadedFiles.length - 1];
      setSelectedFileForPreview(latestBackendFileMeta);

      // Attempt to find the raw file for preview using its name and size,
      // as backend IDs won't match client-side IDs in clientRawFileMap.
      let fileToPreview: File | null = null;
      for (const rawFile of clientRawFileMap.values()) {
        if (rawFile.name === latestBackendFileMeta.name && rawFile.size === latestBackendFileMeta.size) {
          fileToPreview = rawFile;
          break;
        }
      }
      setPdfFileForPreview(fileToPreview);

    } else {
      setSelectedFileForPreview(null);
      setPdfFileForPreview(null);
    }
  // Listen to uploadedFiles (from Dashboard) and clientRawFileMap (local state for raw files)
  }, [uploadedFiles, clientRawFileMap]);


  // This function is called by FileUploader when files are selected locally
  const handleFilesSelectedByUploader = async (
    clientSideFileMetadataList: UploadedFile[], // Metadata generated by FileUploader (client-side IDs)
    rawFileObjectsMap: Map<string, File> // The actual File objects, mapped by client-side ID
  ) => {
    // Store the raw files mapped by their client-side ID.
    // This map will be used to retrieve the actual File objects for upload.
    setClientRawFileMap(new Map([...clientRawFileMap, ...rawFileObjectsMap]));
    
    setIsUploading(true);
    toast({ title: "Uploading files...", description: `Attempting to upload ${rawFileObjectsMap.size} file(s).` });

    const formData = new FormData();
    let filesToUploadExist = false;
    
    // Iterate over the File objects from the map to append to FormData
    rawFileObjectsMap.forEach(file => {
      formData.append('files', file); 
      filesToUploadExist = true;
    });

    if (!filesToUploadExist) {
        setIsUploading(false);
        toast({ title: "No new files selected to upload.", variant: "default" });
        // Call onFilesUploaded with current backend-confirmed files if no new files were actually added.
        // This ensures consistency if the user re-selects existing files or an empty list.
        onFilesUploaded(uploadedFiles); // Pass the current state from Dashboard
        return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.status === 'success' && result.files) {
        // `result.files` are the UploadedFile objects from the backend.
        // These have backend-generated IDs.
        // We should merge these with any existing uploaded files, handling potential duplicates if necessary.
        // For simplicity here, we'll assume new uploads replace or add.
        // A more robust solution might check for existing files by name/size if re-uploading is possible.
        
        // Create a map of existing files by their backend ID for quick lookup
        const existingFilesMap = new Map(uploadedFiles.map(f => [f.id, f]));
        const newBackendFiles = result.files as UploadedFile[];

        newBackendFiles.forEach(backendFile => {
            existingFilesMap.set(backendFile.id, backendFile); // Add or update file by backend ID
        });
        
        const updatedFilesForDashboard = Array.from(existingFilesMap.values());
        onFilesUploaded(updatedFilesForDashboard); // Update Dashboard state

        toast({
          title: "Upload Successful",
          description: `${newBackendFiles.length} file(s) processed by server. Total uploaded: ${updatedFilesForDashboard.length}`,
        });
      } else {
        throw new Error(result.error || 'Unknown upload error from server');
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload Failed",
        description: error instanceof Error ? error.message : "Could not upload files to server.",
        variant: "destructive",
      });
      // Optionally, you might want to revert clientRawFileMap or not call onFilesUploaded
      // depending on how you want to handle partial failures or retries.
      // For now, we don't change the dashboard's uploadedFiles state on failure here.
    } finally {
      setIsUploading(false);
    }
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  // Handle selection for preview from the `uploadedFiles` list (which are backend confirmed)
  const handleFileSelectionForPreview = (fileMetadata: UploadedFile) => {
    setSelectedFileForPreview(fileMetadata);
    // Attempt to find the corresponding raw file for preview from the clientRawFileMap
    // This relies on the raw files being available client-side.
    // If files are cleared from clientRawFileMap after upload, this preview might not work for older files.
    let fileToPreview: File | null = null;
    for (const rawFile of clientRawFileMap.values()) {
        // Match by name and size as IDs might differ (client vs backend)
        if (rawFile.name === fileMetadata.name && rawFile.size === fileMetadata.size) {
            fileToPreview = rawFile;
            break;
        }
    }
    if (fileToPreview) {
      setPdfFileForPreview(fileToPreview);
    } else {
      setPdfFileForPreview(null); 
      toast({title: "Preview unavailable", description: "Original file for preview not found locally.", variant: "default"})
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-6">
        <FileUploader 
          onFilesUploaded={handleFilesSelectedByUploader} 
          acceptedFileTypes={['.pdf']}
        />
        
        {isUploading && (
          <div className="flex items-center justify-center p-4 border rounded-md bg-muted">
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
            <span>Uploading files...</span>
          </div>
        )}

        {uploadedFiles.length > 0 && !isUploading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="border rounded-md"
          >
            <div className="bg-muted p-3 font-medium flex justify-between items-center">
              <div>Uploaded Files ({uploadedFiles.length}/10)</div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 px-2 text-muted-foreground"
                onClick={togglePreview}
              >
                {showPreview ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
                {showPreview ? "Hide Preview" : "Show Preview"}
              </Button>
            </div>
            <div className="divide-y max-h-[300px] overflow-y-auto">
              {uploadedFiles.map((file) => ( 
                <motion.div
                  key={file.id} 
                  className={`p-3 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors ${selectedFileForPreview?.id === file.id ? 'bg-yellow-50 border-l-2 border-yellow-400' : ''}`}
                  onClick={() => handleFileSelectionForPreview(file)}
                >
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm font-medium">{file.name}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {Math.round(file.size / 1024).toLocaleString()} KB
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {uploadedFiles.length > 0 && selectedFileForPreview && showPreview && !isUploading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-2"
        >
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  PDF Preview
                </div>
                <div className="text-sm font-normal">
                  {selectedFileForPreview.name}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-muted/30 h-[750px] flex flex-col">
                <PDFViewer file={pdfFileForPreview} className="h-full" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <div className="flex justify-end col-span-full">
        <motion.div>
          <Button 
            onClick={goToNextTab} 
            disabled={uploadedFiles.length === 0 || isUploading}
            className="bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            {isUploading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
            {isUploading ? "Uploading..." : "Next: Select Prompts"}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default UploadTab;
```

# src\components\FileUploader.tsx

```tsx

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

```

# src\components\IntroScreen.tsx

```tsx
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

const IntroScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    // Simulate progressive loading
    const totalTime = 2000; // 2 seconds
    const intervalTime = 50; // update every 50ms
    const steps = totalTime / intervalTime;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep += 1;
      const newProgress = Math.min(100, Math.floor((currentStep / steps) * 100));
      setLoadingProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 200);
      }
    }, intervalTime);
    
    return () => clearInterval(timer);
  }, []);

  const handleEnterApp = () => {
    navigate('/select-bank');
  };

  // Animation variants for the logo and letters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Combined animation for the logo that includes floating effect
  const logoAnimation = {
    scale: 1,
    opacity: 1,
    y: [0, -8, 0]
  };
  
  // Combined transition for the logo
  const logoTransition = {
    scale: {
      type: "spring",
      damping: 12,
      stiffness: 100
    },
    opacity: {
      type: "spring",
      damping: 12,
      stiffness: 100
    },
    y: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ey-black text-white">
      <div className="w-full max-w-md px-6 py-12 text-center">
        <motion.div 
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="flex justify-center mb-6"
          >
            <motion.div 
              className="h-16 w-16 bg-ey-yellow rounded-md"
              variants={logoVariants}
              initial="hidden"
              animate={logoAnimation}
              transition={logoTransition}
              whileHover={{ scale: 1.05 }}
            ></motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-bold mb-2 flex justify-center"
            variants={containerVariants}
          >
            {Array.from("AiDEx").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={letterVariants}
                custom={index}
                whileHover={floatVariants.animate}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="text-ey-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            AI powered Data Extraction
          </motion.p>
          
          <motion.p 
            className="text-ey-gray-500 text-sm mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Supported by EYQ
          </motion.p>
        </motion.div>
        
        {loading ? (
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Progress 
              value={loadingProgress} 
              className="h-2" 
              indicatorClassName="bg-ey-yellow" 
            />
            <p className="text-sm text-ey-gray-400 animate-pulse">
              Loading application... {loadingProgress}%
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              onClick={handleEnterApp}
              className="w-full bg-ey-yellow hover:bg-ey-yellow/90 text-ey-black font-medium py-2 px-4 rounded"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Enter Application
            </motion.button>
          </motion.div>
        )}
        
        <motion.div 
          className="mt-12 text-xs text-ey-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.2 }}
        >
          <p>© {new Date().getFullYear()} EY | A better working world</p>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroScreen;

```

# src\components\PDFViewer.tsx

```tsx

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

```

# src\components\ProcessingStatus.tsx

```tsx

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

```

# src\components\PromptDescriptions.tsx

```tsx
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
```

# src\components\PromptSelector.tsx

```tsx
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
```

# src\components\ResultsViewer.tsx

```tsx
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
```

# src\components\ThemeProvider.tsx

```tsx

"use client";

import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

```

# src\components\ThemeToggle.tsx

```tsx

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-yellow-400">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:text-black" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-black" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

```

# src\components\ui\accordion.tsx

```tsx
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

```

# src\components\ui\alert-dialog.tsx

```tsx
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

```

# src\components\ui\alert.tsx

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }

```

# src\components\ui\aspect-ratio.tsx

```tsx
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }

```

# src\components\ui\avatar.tsx

```tsx
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }

```

# src\components\ui\badge.tsx

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

```

# src\components\ui\breadcrumb.tsx

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}

```

# src\components\ui\button.tsx

```tsx

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground dark:border-gray-600",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        eyOutline: "border border-ey-gray-400 text-white hover:bg-ey-gray-800 hover:border-ey-gray-500 transition-colors",
        eyPrimary: "bg-ey-yellow text-ey-black hover:bg-ey-yellow/90 font-medium transition-colors",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

# src\components\ui\calendar.tsx

```tsx
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

```

# src\components\ui\card.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

# src\components\ui\carousel.tsx

```tsx
import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}

```

# src\components\ui\chart.tsx

```tsx
import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}

```

# src\components\ui\checkbox.tsx

```tsx
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

```

# src\components\ui\collapsible.tsx

```tsx
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

```

# src\components\ui\command.tsx

```tsx
import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}

```

# src\components\ui\context-menu.tsx

```tsx
import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}

```

# src\components\ui\dialog.tsx

```tsx
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

```

# src\components\ui\drawer.tsx

```tsx
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}

```

# src\components\ui\dropdown-menu.tsx

```tsx
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}

```

# src\components\ui\form.tsx

```tsx
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}

```

# src\components\ui\hover-card.tsx

```tsx
import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }

```

# src\components\ui\input-otp.tsx

```tsx
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

```

# src\components\ui\input.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

```

# src\components\ui\label.tsx

```tsx
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

```

# src\components\ui\menubar.tsx

```tsx
import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}

```

# src\components\ui\navigation-menu.tsx

```tsx
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}

```

# src\components\ui\pagination.tsx

```tsx
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}

```

# src\components\ui\popover.tsx

```tsx
import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }

```

# src\components\ui\progress.tsx

```tsx

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  indicatorClassName?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, indicatorClassName, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 bg-primary transition-all",
        indicatorClassName
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }

```

# src\components\ui\radio-group.tsx

```tsx
import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }

```

# src\components\ui\resizable.tsx

```tsx
import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

```

# src\components\ui\scroll-area.tsx

```tsx
import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }

```

# src\components\ui\select.tsx

```tsx
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}

```

# src\components\ui\separator.tsx

```tsx
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

```

# src\components\ui\sheet.tsx

```tsx
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
  VariantProps<typeof sheetVariants> { }

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet, SheetClose,
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger
}


```

# src\components\ui\sidebar.tsx

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}

```

# src\components\ui\skeleton.tsx

```tsx
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }

```

# src\components\ui\slider.tsx

```tsx
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

```

# src\components\ui\sonner.tsx

```tsx
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }

```

# src\components\ui\switch.tsx

```tsx
import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }

```

# src\components\ui\table.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

```

# src\components\ui\tabs.tsx

```tsx
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }

```

# src\components\ui\textarea.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

```

# src\components\ui\toast.tsx

```tsx
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}

```

# src\components\ui\toaster.tsx

```tsx
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

```

# src\components\ui\toggle-group.tsx

```tsx
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }

```

# src\components\ui\toggle.tsx

```tsx
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }

```

# src\components\ui\tooltip.tsx

```tsx
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

```

# src\components\ui\use-toast.ts

```ts
import { useToast, toast } from "@/hooks/use-toast";

export { useToast, toast };

```

# src\hooks\use-mobile.tsx

```tsx
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

```

# src\hooks\use-toast.ts

```ts
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }

```

# src\index.css

```css

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 14%;

    --card: 0 0% 100%;
    --card-foreground: 240 10% 14%;

    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 14%;

    --primary: 52 100% 50%;
    --primary-foreground: 0 0% 0%;

    --secondary: 0 0% 96%;
    --secondary-foreground: 240 10% 14%;

    --muted: 240 5% 96%;
    --muted-foreground: 240 3.8% 46.1%;

    --accent: 0 0% 96%;
    --accent-foreground: 240 10% 14%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;

    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 52 100% 50%;

    --radius: 0.5rem;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 0 0% 28%; /* #474747 - Outer Space */
    --foreground: 0 0% 98%;

    --card: 0 0% 28%;
    --card-foreground: 0 0% 98%;

    --popover: 0 0% 28%;
    --popover-foreground: 0 0% 98%;

    --primary: 52 100% 50%;
    --primary-foreground: 0 0% 0%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 52 100% 50%;
    
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
  
  /* Apply dark mode universally to ensure all elements get the dark background */
  .dark body,
  .dark .bg-white {
    @apply bg-[#474747];
  }
  
  /* Make buttons yellow with black text in dark mode - fixed to avoid circular dependency */
  .dark button[data-state="active"] {
    background-color: #FFE600;
    color: black;
  }
  
  .dark .bg-yellow-400 {
    background-color: #FFE600;
    color: black;
  }
  
  /* Ensure yellow backgrounds always use black text for contrast */
  .bg-yellow-50, 
  .bg-yellow-100, 
  .bg-yellow-200, 
  .bg-yellow-300, 
  .bg-yellow-400, 
  .bg-yellow-500 {
    color: black;
  }
}

@layer components {
  .ey-button {
    @apply bg-ey-yellow hover:bg-ey-yellow/90 text-ey-black font-semibold py-2 px-4 rounded-md transition-colors;
  }
  
  .ey-input {
    @apply border border-ey-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-ey-yellow;
  }

  .ey-card {
    @apply bg-white rounded-lg shadow-md p-6 border border-ey-gray-300 hover:shadow-lg transition-shadow dark:bg-background dark:border-ey-gray-700;
  }
}

```

# src\lib\excelUtils.ts

```ts

import * as XLSX from 'xlsx';
import { PromptOption } from './types';

// Parse Excel file and extract prompts
export const parseExcelPrompts = async (file: File): Promise<PromptOption[]> => {
  try {
    // Read the Excel file
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    
    // Get the first worksheet
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    
    // Convert the worksheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    
    // Map the JSON data to PromptOption format
    const prompts: PromptOption[] = jsonData.map((row: any, index) => {
      return {
        id: `custom-${index}`,
        name: row['Prompt Name'] || row['Name'] || `Custom Prompt ${index + 1}`,
        description: row['Description'] || 'Custom prompt from Excel file',
        template: row['Template'] || 'Custom_Template',
        category: row['Category'] || 'Custom'
      };
    });
    
    return prompts;
  } catch (error) {
    console.error('Error parsing Excel file:', error);
    throw new Error('Failed to parse Excel file. Please check the format.');
  }
};

// Generate more realistic extraction results based on prompts
export const generateRealisticResults = (promptName: string) => {
  // Create more realistic data based on prompt name/type
  switch (promptName.toLowerCase()) {
    case 'ecl by stage':
      return [
        { Category: "ECL by Stage", Stage: "Stage 1", Field: "Gross Carrying Amount", Value: "$1,245.67m" },
        { Category: "ECL by Stage", Stage: "Stage 1", Field: "Loss Allowance", Value: "$12.45m" },
        { Category: "ECL by Stage", Stage: "Stage 1", Field: "Coverage Ratio", Value: "1.00%" },
        { Category: "ECL by Stage", Stage: "Stage 2", Field: "Gross Carrying Amount", Value: "$428.91m" },
        { Category: "ECL by Stage", Stage: "Stage 2", Field: "Loss Allowance", Value: "$21.45m" },
        { Category: "ECL by Stage", Stage: "Stage 2", Field: "Coverage Ratio", Value: "5.00%" },
        { Category: "ECL by Stage", Stage: "Stage 3", Field: "Gross Carrying Amount", Value: "$85.34m" },
        { Category: "ECL by Stage", Stage: "Stage 3", Field: "Loss Allowance", Value: "$42.67m" },
        { Category: "ECL by Stage", Stage: "Stage 3", Field: "Coverage Ratio", Value: "50.00%" }
      ];
    case 'management adjustments':
      return [
        { Category: "Management Adjustments", Stage: "N/A", Field: "Economic Uncertainty", Value: "$24.5m" },
        { Category: "Management Adjustments", Stage: "N/A", Field: "Model Limitations", Value: "$12.3m" },
        { Category: "Management Adjustments", Stage: "N/A", Field: "Other Adjustments", Value: "$5.8m" },
        { Category: "Management Adjustments", Stage: "N/A", Field: "Total Overlays", Value: "$42.6m" }
      ];
    case 'scenario weights':
      return [
        { Category: "Scenario Weights", Stage: "N/A", Field: "Baseline", Value: "40%" },
        { Category: "Scenario Weights", Stage: "N/A", Field: "Upside", Value: "30%" },
        { Category: "Scenario Weights", Stage: "N/A", Field: "Downside", Value: "30%" }
      ];
    case 'macro variables':
      return [
        { Category: "Macro Variables", Stage: "Baseline", Field: "GDP Growth", Value: "1.3%" },
        { Category: "Macro Variables", Stage: "Baseline", Field: "Unemployment", Value: "4.2%" },
        { Category: "Macro Variables", Stage: "Baseline", Field: "HPI Growth", Value: "1.8%" },
        { Category: "Macro Variables", Stage: "Upside", Field: "GDP Growth", Value: "2.5%" },
        { Category: "Macro Variables", Stage: "Upside", Field: "Unemployment", Value: "3.7%" },
        { Category: "Macro Variables", Stage: "Upside", Field: "HPI Growth", Value: "3.2%" },
        { Category: "Macro Variables", Stage: "Downside", Field: "GDP Growth", Value: "-0.5%" },
        { Category: "Macro Variables", Stage: "Downside", Field: "Unemployment", Value: "5.8%" },
        { Category: "Macro Variables", Stage: "Downside", Field: "HPI Growth", Value: "-2.1%" }
      ];
    default:
      return [
        { Category: promptName, Stage: "N/A", Field: "Value 1", Value: "$123.45m" },
        { Category: promptName, Stage: "N/A", Field: "Value 2", Value: "$67.89m" },
        { Category: promptName, Stage: "N/A", Field: "Ratio", Value: "55.00%" }
      ];
  }
};

```

# src\lib\types.ts

```ts
// src/lib/types.ts

export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  lastModified: number;
  status: 'pending' | 'processing' | 'success' | 'error';
  progress?: number;
}

export interface PromptOption {
  id: string;
  name: string;
  description: string;
  template: string;
  category: string;
  bankName?: string; // <-- ENSURE THIS LINE IS PRESENT AND CORRECT
}

export interface ExtractedData {
  Category: string;
  Stage: string;
  Field: string;
  Value: string;
}

export interface ProcessingResult {
  id: string;
  fileId: string;
  fileName: string;
  promptId: string;
  promptName: string;
  status: 'pending' | 'processing' | 'success' | 'error';
  timestamp: string;
  data?: ExtractedData[];
  notes?: string;
  error?: string;
}
```

# src\lib\utils.ts

```ts

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Ensures proper text contrast on colored backgrounds
 * @param bgColor - The background color class (e.g., 'bg-yellow-400')
 * @returns string - The appropriate text color class
 */
export function getTextColorForBackground(bgColor: string): string {
  // Yellow backgrounds should always have black text
  if (
    bgColor.includes('yellow') || 
    bgColor.includes('lime') || 
    bgColor.includes('green-300') ||
    bgColor.includes('amber')
  ) {
    return 'text-black';
  }
  
  // Dark backgrounds should have white text
  if (
    bgColor.includes('black') || 
    bgColor.includes('gray-800') || 
    bgColor.includes('gray-900') ||
    bgColor.includes('slate-800') ||
    bgColor.includes('slate-900')
  ) {
    return 'text-white';
  }
  
  // Default - use the current text color
  return '';
}

```

# src\main.tsx

```tsx

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root and render app
createRoot(document.getElementById("root")!).render(<App />);

```

# src\pages\BankSelection.tsx

```tsx

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { ArrowRight, Check } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const banks = [
  { id: 'barclays', name: 'Barclays' },
  { id: 'hsbc', name: 'HSBC' },
  { id: 'lloyds', name: 'Lloyds Banking Group' },
  { id: 'natwest', name: 'NatWest Group' },
  { id: 'santander', name: 'Santander UK' },
  { id: 'standard', name: 'Standard Chartered' }
];

const BankSelection = () => {
  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState<string>('');
  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const [enableMultiBanks, setEnableMultiBanks] = useState<boolean>(false);

  // Update selected banks when toggling multi-bank mode
  useEffect(() => {
    if (enableMultiBanks) {
      // If switching to multi-bank mode, initialize with the current selection
      if (selectedBank && !selectedBanks.includes(selectedBank)) {
        setSelectedBanks([selectedBank]);
      }
    } else {
      // If switching to single bank mode, use the first selected bank or empty
      setSelectedBank(selectedBanks.length > 0 ? selectedBanks[0] : '');
    }
  }, [enableMultiBanks]);

  const handleContinue = () => {
    if ((enableMultiBanks && selectedBanks.length > 0) || (!enableMultiBanks && selectedBank)) {
      // Store the selected bank(s) in session storage for use across the application
      sessionStorage.setItem('selectedBank', enableMultiBanks ? selectedBanks[0] : selectedBank);
      sessionStorage.setItem('selectedBanks', JSON.stringify(enableMultiBanks ? selectedBanks : [selectedBank]));
      sessionStorage.setItem('enableMultiBanks', enableMultiBanks.toString());
      navigate('/dashboard');
    }
  };

  const toggleBankSelection = (bankId: string) => {
    setSelectedBanks(prevSelected => {
      if (prevSelected.includes(bankId)) {
        return prevSelected.filter(id => id !== bankId);
      } else {
        return [...prevSelected, bankId];
      }
    });
  };

  // Check if a bank is selected in multi-bank mode
  const isBankSelected = (bankId: string) => {
    return selectedBanks.includes(bankId);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ey-black text-white">
      <div className="w-full max-w-md px-6 py-12 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-ey-yellow rounded-md"></div>
          </div>
          
          <h1 className="text-4xl font-bold mb-2">AiDEx</h1>
          <p className="text-ey-gray-400">
            AI powered Data Extraction
          </p>
          <p className="text-ey-gray-500 text-sm mt-1">
            Supported by EYQ
          </p>
        </div>
        
        <div className="border border-ey-gray-700 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Select Bank</h2>
          <p className="text-sm text-ey-gray-400 mb-6">
            Choose the bank you want to analyze for data extraction.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mt-4 mb-4 p-3 bg-ey-gray-800/50 rounded-md">
              <Checkbox 
                id="enableMultiBanks" 
                checked={enableMultiBanks} 
                onCheckedChange={(checked) => setEnableMultiBanks(checked as boolean)}
                className="data-[state=checked]:bg-ey-yellow data-[state=checked]:text-black"
              />
              <Label htmlFor="enableMultiBanks" className="text-sm cursor-pointer">
                Enable multi-bank analysis & comparison
              </Label>
            </div>

            {enableMultiBanks ? (
              // Multi-bank selection UI
              <div className="space-y-2">
                <label className="text-sm font-medium mb-1 block text-left">
                  Financial Institutions
                </label>
                <div className="border border-ey-gray-600 bg-ey-black text-white rounded-md p-1">
                  <div className="space-y-1">
                    {banks.map(bank => (
                      <div 
                        key={bank.id}
                        onClick={() => toggleBankSelection(bank.id)}
                        className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors ${
                          isBankSelected(bank.id) ? 'bg-ey-yellow/20 border border-ey-yellow' : 'hover:bg-ey-gray-800'
                        }`}
                      >
                        <span className="text-sm">{bank.name}</span>
                        {isBankSelected(bank.id) && (
                          <Check className="h-4 w-4 text-ey-yellow" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {selectedBanks.length === 0 && (
                  <p className="text-xs text-ey-yellow mt-1">Please select at least one bank</p>
                )}
              </div>
            ) : (
              // Single bank selection UI
              <div className="text-left">
                <label className="text-sm font-medium mb-1 block">
                  Financial Institution
                </label>
                <Select onValueChange={setSelectedBank} value={selectedBank}>
                  <SelectTrigger className="w-full border-ey-gray-600 bg-ey-black text-white">
                    <SelectValue placeholder="Select a bank" />
                  </SelectTrigger>
                  <SelectContent className="bg-ey-black text-white border-ey-gray-700">
                    {banks.map(bank => (
                      <SelectItem key={bank.id} value={bank.id} className="hover:bg-ey-gray-800">
                        {bank.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            
            <Button 
              onClick={handleContinue}
              disabled={enableMultiBanks ? selectedBanks.length === 0 : !selectedBank}
              className="w-full bg-ey-yellow hover:bg-ey-yellow/90 text-ey-black font-medium mt-6"
            >
              Continue to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="text-xs text-ey-gray-500">
          <p>© {new Date().getFullYear()} EY | A better working world</p>
        </div>
      </div>
    </div>
  );
};

export default BankSelection;

```

# src\pages\Dashboard.tsx

```tsx
// src/pages/Dashboard.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent } from '@/components/ui/tabs'; //
import { useToast } from '@/hooks/use-toast'; //
import { UploadedFile, PromptOption, ProcessingResult } from '@/lib/types'; //
import TabNavigation from '@/components/dashboard/TabNavigation'; //
import UploadTab from '@/components/dashboard/UploadTab'; //
import PromptsTab from '@/components/dashboard/PromptsTab'; //
import ResultsTab from '@/components/dashboard/ResultsTab'; //
import CombinedTab from '@/components/dashboard/CombinedTab'; //
import SideBySideTab from '@/components/dashboard/SideBySideTab'; //
import Footer from '@/components/dashboard/Footer'; //
import { Button } from '@/components/ui/button'; //
import { Loader2 } from 'lucide-react';

const Dashboard = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [selectedPrompts, setSelectedPrompts] = useState<PromptOption[]>([]);
  const [results, setResults] = useState<ProcessingResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const [processingProgress, setProcessingProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('upload');
  const { toast } = useToast();
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const navigate = useNavigate();

  const [bankDisplayInfo, setBankDisplayInfo] = useState<string>('banks');
  
  useEffect(() => {
    const enableMulti = sessionStorage.getItem('enableMultiBanks') === 'true';
    const singleBank = sessionStorage.getItem('selectedBank') || 'Selected Bank';
    const multiBanksString = sessionStorage.getItem('selectedBanks');

    let displayInfo = singleBank.charAt(0).toUpperCase() + singleBank.slice(1);
    if (enableMulti && multiBanksString) {
      try {
        const banksArray = JSON.parse(multiBanksString) as string[];
        if (banksArray.length > 0) {
          displayInfo = banksArray.map((b:string) => b.charAt(0).toUpperCase() + b.slice(1)).join(', ');
        } else {
           displayInfo = "No banks selected"; 
        }
      } catch { /* Keep singleBank displayInfo as fallback */ }
    }
    setBankDisplayInfo(displayInfo);
  }, []);

  const handleFilesUploaded = (backendConfirmedFiles: UploadedFile[]) => {
    setUploadedFiles(backendConfirmedFiles);
  };

  const handlePromptSelectedForProcessing = (promptsToProcess: PromptOption[]) => {
    setSelectedPrompts(promptsToProcess);
    if (promptsToProcess.length > 0) {
      toast({
        title: "Prompts Ready for Processing",
        description: `${promptsToProcess.length} prompt(s) selected. Click 'Process Files'.`,
      });
    }
  };

  const processFiles = async () => {
    if (uploadedFiles.length === 0) {
      toast({ title: "No Files Uploaded", description: "Please upload PDF file(s) first.", variant: "destructive" });
      return;
    }
    if (selectedPrompts.length === 0) {
      toast({ title: "No Prompts Selected", description: "Please select at least one extraction prompt.", variant: "destructive" });
      return;
    }

    setIsProcessing(true);
    setResults([]); 
    const newSessionId = `session-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
    setCurrentSessionId(newSessionId);
    
    setProcessingStep(`Initializing processing for ${uploadedFiles.length} file(s)...`);
    setProcessingProgress(5);
    setActiveTab('results');

    try {
      const response = await fetch('http://localhost:5000/api/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          files: uploadedFiles.map(f => ({ id: f.id, name: f.name })), 
          prompts: selectedPrompts.map(p => ({ id: p.id, name: p.name, template: p.template })), 
          sessionId: newSessionId 
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Server error during processing setup."}));
        throw new Error(errorData.error || `Processing request failed: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.status === 'success' && data.results) {
        setResults(data.results);
        setProcessingStep('Processing complete!');
        setProcessingProgress(100);
        toast({ title: "Processing Complete", description: `Session ${newSessionId} finished.`});
      } else {
         throw new Error(data.error || "Processing finished with an unexpected status or no results.");
      }
    } catch (error) {
      console.error("Processing Error:", error);
      setProcessingStep('Error during processing.');
      setProcessingProgress(100);
      toast({ title: "Processing Error", description: error instanceof Error ? error.message : "An unknown error occurred.", variant: "destructive" });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownloadResults = async () => {
    if (!currentSessionId) {
      toast({ title: "Cannot Download", description: "No processing session found. Please process files first.", variant: "destructive" }); return;
    }
     if (results.length === 0 && !isProcessing) {
       toast({ title: "No Results to Download", description: "Process files to generate results first.", variant: "default"}); return;
     }
     if (isProcessing) {
        toast({ title: "Processing in Progress", description: "Please wait for processing to complete before downloading.", variant: "default"}); return;
     }
    toast({ title: "Preparing Download...", description: "Your Excel file is being generated." });
    try {
      const response = await fetch(`http://localhost:5000/api/download/${currentSessionId}`);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Download request failed with status: " + response.status }));
        throw new Error(errorData.error || `Server error: ${response.statusText}`);
      }
      const blob = await response.blob();
      const contentDisposition = response.headers.get('content-disposition');
      let filename = `IFRS9_Results_${currentSessionId}.xlsx`;
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="?(.+)"?/i);
        if (filenameMatch && filenameMatch.length > 1) filename = filenameMatch[1];
      }
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click(); a.remove();
      window.URL.revokeObjectURL(url);
      toast({ title: "Download Started!", description: `${filename} is downloading.` });
    } catch (error) {
      console.error("Download Error:", error);
      toast({ title: "Download Failed", description: (error instanceof Error ? error.message : "Could not download results."), variant: "destructive" });
    }
  };

  const handleReset = () => {
    setUploadedFiles([]); setSelectedPrompts([]); setResults([]);
    setCurrentSessionId(null); setActiveTab('upload');
    setProcessingProgress(0); setProcessingStep('');
    toast({ title: "Application Reset", description: "All selections and results cleared." });
  };
  
  const goToNextTab = () => {
    if (activeTab === 'upload' && uploadedFiles.length > 0) setActiveTab('prompts');
    else if (activeTab === 'upload' && uploadedFiles.length === 0) {
        toast({title: "No Files Uploaded", description: "Please upload files to proceed.", variant: "default"});
    }
  };

  const goToPreviousTab = () => {
    if (activeTab === 'prompts') setActiveTab('upload');
    else if (['results', 'combined', 'sidebyside'].includes(activeTab)) setActiveTab('prompts');
  };

  // Line 229: Check for typos or missing commas if error persists around here
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="bg-yellow-400 text-black py-1 px-4 text-sm flex justify-between items-center">
        <div>
          Selected Bank(s): <span className="font-semibold">{bankDisplayInfo}</span>
        </div>
        <Button 
          variant="link" size="sm" onClick={() => navigate('/')}
          className="h-auto p-0 text-black underline text-xs hover:text-gray-700"
        >Change Bank(s)</Button>
      </div>
      
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* ... UploadTab and PromptsTab ... */}
          <TabsContent value="upload" className="space-y-6">
            <UploadTab 
              onFilesUploaded={handleFilesUploaded}
              uploadedFiles={uploadedFiles}
              goToNextTab={goToNextTab}
            />
          </TabsContent>
          
          <TabsContent value="prompts" className="space-y-6">
            <div className="flex flex-col space-y-4">
              <PromptsTab 
                onPromptSelected={handlePromptSelectedForProcessing}
                isProcessing={isProcessing}
                selectedPrompts={selectedPrompts}
              />
              <div className="flex justify-between items-center mt-4 pt-4 border-t dark:border-gray-700">
                <Button onClick={goToPreviousTab} variant="outline" disabled={isProcessing}>
                  Back to Upload
                </Button>
                <Button 
                  onClick={processFiles}
                  disabled={isProcessing || selectedPrompts.length === 0 || uploadedFiles.length === 0}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  {isProcessing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isProcessing ? "Processing..." : `Process ${uploadedFiles.length} File(s)`}
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="results" className="space-y-6">
            <ResultsTab 
              results={results}
              onDownloadResults={handleDownloadResults}
              isProcessing={isProcessing}
              processingProgress={processingProgress}
              processingStep={processingStep}
              selectedBank={bankDisplayInfo}
              totalUploadedFiles={uploadedFiles.length}
            />
          </TabsContent>
          
          <TabsContent value="combined" className="space-y-6">
            <CombinedTab 
              results={results} 
              onDownloadResults={handleDownloadResults} 
              selectedBank={bankDisplayInfo}
            />
          </TabsContent>
        {/* Line 244: Where SideBySideTab is rendered */}
          <TabsContent value="sidebyside" className="space-y-6">
            <SideBySideTab 
              results={results} 
              selectedBank={bankDisplayInfo} 
              // No other props seem to be passed here
            />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
```

# src\pages\Index.tsx

```tsx

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UploadedFile, PromptOption, ProcessingResult } from '@/lib/types';
import { Button } from '@/components/ui/button';
import FileUploader from '@/components/FileUploader';
import PromptSelector from '@/components/PromptSelector';
import ResultsViewer from '@/components/ResultsViewer';
import { useToast } from '@/hooks/use-toast';
import { Download, Upload, FileText, FileSpreadsheet } from 'lucide-react';
import { generateRealisticResults } from '@/lib/excelUtils';

const Index = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [selectedPrompts, setSelectedPrompts] = useState<PromptOption[]>([]);
  const [results, setResults] = useState<ProcessingResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const [processingProgress, setProcessingProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('upload');
  const { toast } = useToast();

  // Handle uploaded files
  const handleFilesUploaded = (files: UploadedFile[]) => {
    setUploadedFiles(files);
  };

  // Handle prompt selection
  const handlePromptSelected = (prompts: PromptOption[]) => {
    setSelectedPrompts(prompts);
    if (prompts.length > 0) {
      toast({
        title: "Prompts Selected",
        description: `${prompts.length} extraction ${prompts.length === 1 ? 'prompt' : 'prompts'} selected`,
      });
    }
  };

  // Simulate the processing function
  const processFiles = async () => {
    if (uploadedFiles.length === 0) {
      toast({
        title: "No files to process",
        description: "Please upload at least one PDF file.",
        variant: "destructive",
      });
      return;
    }

    if (selectedPrompts.length === 0) {
      toast({
        title: "No prompts selected",
        description: "Please select at least one extraction prompt.",
        variant: "destructive",
      });
      return;
    }

    // Start processing
    setIsProcessing(true);
    setProcessingStep('Initializing extraction process...');
    setProcessingProgress(5);
    setActiveTab('results');

    const newResults: ProcessingResult[] = [];

    // Simulate processing for each file and prompt
    let completedItems = 0;
    const totalItems = uploadedFiles.length * selectedPrompts.length;

    for (const file of uploadedFiles) {
      // Simulate parsing the file
      setProcessingStep(`Parsing ${file.name}...`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProcessingProgress(10 + (completedItems / totalItems) * 30);

      // For each prompt, create a result
      for (const prompt of selectedPrompts) {
        setProcessingStep(`Extracting ${prompt.name} from ${file.name}...`);
        
        // Simulate API request delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Create a result with either success or random error
        const isSuccess = Math.random() > 0.05; // 95% success rate for demo
        
        const result: ProcessingResult = {
          id: `result-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          fileId: file.id,
          fileName: file.name,
          promptId: prompt.id,
          promptName: prompt.name,
          status: isSuccess ? 'success' : 'error',
          timestamp: new Date().toISOString(),
          data: isSuccess ? generateRealisticResults(prompt.name) : undefined,
          notes: isSuccess 
            ? `Extraction completed successfully for ${prompt.name}.` 
            : undefined,
          error: isSuccess 
            ? undefined 
            : "Could not find relevant information in the document or the format was not recognized."
        };
        
        newResults.push(result);
        completedItems++;
        setProcessingProgress(10 + (completedItems / totalItems) * 80);
      }
    }

    // Final processing step
    setProcessingStep('Finalizing results...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProcessingProgress(100);

    // Update results and finish processing
    setResults([...results, ...newResults]);
    setIsProcessing(false);
    
    toast({
      title: "Processing Complete",
      description: `Processed ${uploadedFiles.length} files with ${selectedPrompts.length} prompts`,
      variant: "default",
    });
  };

  // Simulate downloading results
  const handleDownloadResults = () => {
    toast({
      title: "Downloading Results",
      description: "Your results would download as an Excel file in a real implementation.",
    });
  };

  // Reset everything
  const handleReset = () => {
    setUploadedFiles([]);
    setSelectedPrompts([]);
    setResults([]);
    setActiveTab('upload');
    toast({
      title: "Reset Complete",
      description: "All files and prompts have been cleared.",
    });
  };

  // Navigate to the next tab
  const goToNextTab = () => {
    if (activeTab === 'upload') setActiveTab('prompts');
    else if (activeTab === 'prompts') {
      processFiles();
    }
  };

  // Go back to previous tab
  const goToPreviousTab = () => {
    if (activeTab === 'prompts') setActiveTab('upload');
    else if (activeTab === 'results') setActiveTab('prompts');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Tabs header */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto my-4">
              <TabsTrigger 
                value="upload" 
                className={activeTab === 'upload' ? 'bg-yellow-400 text-black' : ''}
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </TabsTrigger>
              <TabsTrigger 
                value="prompts" 
                className={activeTab === 'prompts' ? 'bg-yellow-400 text-black' : ''}
              >
                <FileText className="h-4 w-4 mr-2" />
                Prompts
              </TabsTrigger>
              <TabsTrigger 
                value="results" 
                className={activeTab === 'results' ? 'bg-yellow-400 text-black' : ''}
              >
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                Results
              </TabsTrigger>
              <TabsTrigger 
                value="combined" 
                className={activeTab === 'combined' ? 'bg-yellow-400 text-black' : ''}
              >
                <Download className="h-4 w-4 mr-2" />
                Combined
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <Tabs value={activeTab}>
          {/* Upload Tab */}
          <TabsContent value="upload" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <FileUploader 
                onFilesUploaded={handleFilesUploaded}
                acceptedFileTypes={['.pdf']}
              />
              
              <div className="flex justify-end">
                <Button 
                  onClick={goToNextTab} 
                  disabled={uploadedFiles.length === 0}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black"
                >
                  Next: Select Prompts
                </Button>
              </div>
            </div>
          </TabsContent>
          
          {/* Prompts Tab */}
          <TabsContent value="prompts" className="space-y-6">
            <PromptSelector 
              onPromptSelected={handlePromptSelected} 
              disabled={isProcessing}
            />
          </TabsContent>
          
          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            <ResultsViewer 
              results={results}
              onDownloadResults={handleDownloadResults}
              isProcessing={isProcessing}
              processingProgress={processingProgress}
              processingStep={processingStep}
            />
          </TabsContent>
          
          {/* Combined Tab */}
          <TabsContent value="combined" className="space-y-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold mb-1">IFRS9 Combined Results</h2>
                  <p className="text-sm text-muted-foreground">
                    View and download the final processed IFRS9 data in Excel format
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleDownloadResults}
                  className="flex items-center gap-1 border-yellow-400 bg-white text-black hover:bg-yellow-50"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Excel</span>
                </Button>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="flex justify-between items-center p-3 bg-muted border-b">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="py-1 h-8 bg-yellow-400 hover:bg-yellow-500 border-none text-black"
                  >
                    Combined View
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    28 rows
                  </div>
                </div>
                
                <div className="h-[500px] overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/70 sticky top-0">
                      <tr>
                        <th className="p-3 text-left font-semibold text-black">Category</th>
                        <th className="p-3 text-left font-semibold text-black">Stage</th>
                        <th className="p-3 text-left font-semibold text-black">Field</th>
                        <th className="p-3 text-left font-semibold text-black">Value</th>
                        <th className="p-3 text-left font-semibold text-black">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 1</td>
                        <td className="p-3">Gross Carrying Amount</td>
                        <td className="p-3">$1,029.66m</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 1</td>
                        <td className="p-3">Loss Allowance</td>
                        <td className="p-3">$12.64m</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 1</td>
                        <td className="p-3">Coverage Ratio</td>
                        <td className="p-3">0.94%</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 2</td>
                        <td className="p-3">Gross Carrying Amount</td>
                        <td className="p-3">$502.11m</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 2</td>
                        <td className="p-3">Loss Allowance</td>
                        <td className="p-3">$20.71m</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">ECL by Stage</td>
                        <td className="p-3">Stage 2</td>
                        <td className="p-3">Coverage Ratio</td>
                        <td className="p-3">6.35%</td>
                        <td className="p-3">FY24-Barclays-Results-RA.pdf - ECL by Stage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t mt-auto py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div>IFRS9 Data Extraction Tool</div>
            <div>© {new Date().getFullYear()} Barclays Financial Services</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

```

# src\pages\NotFound.tsx

```tsx
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

```

# src\vite-env.d.ts

```ts
/// <reference types="vite/client" />

```

# tailwind.config.ts

```ts

import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				ey: {
					black: '#000000',
					yellow: '#FFE600',
					white: '#FFFFFF',
					gray: {
						100: '#F6F6F7',
						200: '#F1F1F1', 
						300: '#EAEAEA',
						400: '#C8C8C9',
						500: '#9F9EA1',
						600: '#8A898C',
						700: '#555555',
						800: '#403E43',
						900: '#221F26'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-gentle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'float-1': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'float-2': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-7px)' }
				},
				'float-3': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' }
				},
				'float-4': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'float-5': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-3px)' }
				},
				'float-6': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'float-7': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' }
				},
				'float-8': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'page-transition-in': {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'page-transition-out': {
					'0%': { transform: 'translateX(0)', opacity: '1' },
					'100%': { transform: 'translateX(-20px)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-gentle': 'pulse-gentle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'fade-in': 'fade-in 0.6s ease-in-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'float-1': 'float-1 3s ease-in-out infinite',
				'float-2': 'float-2 3.2s ease-in-out infinite 0.1s',
				'float-3': 'float-3 2.8s ease-in-out infinite 0.2s',
				'float-4': 'float-4 3.5s ease-in-out infinite 0.3s',
				'float-5': 'float-5 2.9s ease-in-out infinite 0.4s',
				'float-6': 'float-6 3.1s ease-in-out infinite 0.5s',
				'float-7': 'float-7 3.3s ease-in-out infinite 0.6s',
				'float-8': 'float-8 3.0s ease-in-out infinite 0.7s',
				'page-transition-in': 'page-transition-in 0.3s ease-out',
				'page-transition-out': 'page-transition-out 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

```

# tsconfig.app.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noImplicitAny": false,
    "noFallthroughCasesInSwitch": false,

    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}

```

# tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "noImplicitAny": false,
    "noUnusedParameters": false,
    "skipLibCheck": true,
    "allowJs": true,
    "noUnusedLocals": false,
    "strictNullChecks": false
  }
}

```

# tsconfig.node.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}

```

# vite.config.ts

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

```

