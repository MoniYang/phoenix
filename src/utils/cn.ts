import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";  // 修改为正确的包名

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}