
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
