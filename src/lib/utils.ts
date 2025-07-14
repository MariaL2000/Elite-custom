import { Colors } from '@/types/data.type';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getColorsForBtn = (colors?: Colors, variant?: keyof Colors) => {
  const defaultColors: Partial<{ [k in keyof Colors]: string }> = {
    primary: `bg-${
      colors?.primary ? `[${colors.primary}]` : '(--chocolate-martini)'
    } hover:bg-${colors?.primary ? `[${colors.primary}]` : '(--chocolate-martini)'}/90`,
  };

  return defaultColors[variant ?? 'primary'];
};
