/**
 * Class name utility for merging Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names intelligently, handling Tailwind CSS conflicts
 *
 * @example
 * cn("px-2 py-1", "px-4") // => "py-1 px-4" (px-4 overrides px-2)
 * cn("text-red-500", condition && "text-blue-500") // Conditional classes
 *
 * @param inputs - Class names, objects, or arrays of class names
 * @returns Merged class name string with conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
