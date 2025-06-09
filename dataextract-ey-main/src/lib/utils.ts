
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
