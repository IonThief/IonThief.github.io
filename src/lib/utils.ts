import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Efficiently merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
