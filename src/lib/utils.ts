import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hexToRGBA = (hex: string, alpha: number) => {
  let parsedHex = hex.replace('#', '');

  if (parsedHex.length === 3) {
    parsedHex = parsedHex
      .split('')
      .map(c => c + c)
      .join('');
  }

  const r = parseInt(parsedHex.slice(0, 2), 16);
  const g = parseInt(parsedHex.slice(2, 4), 16);
  const b = parseInt(parsedHex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
