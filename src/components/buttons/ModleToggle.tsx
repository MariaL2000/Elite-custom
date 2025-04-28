import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/providers/ThemeProvider';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 xl:size-[2.5vw] xl:rounded-[0.3vw] 2xl:right-[2vw]"
        >
          <Sun className="size-[1.2rem] scale-100 rotate-0 transition-all xl:size-[1.5vw] dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute size-[1.2rem] scale-0 rotate-90 transition-all xl:size-[1.5vw] dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[12rem] xl:min-w-[8vw] xl:rounded-[0.5vw] xl:py-[0.5vh]"
      >
        <DropdownMenuItem
          className="xl:hover:bg-opacity-10 xl:px-[1vw] xl:py-[1vh] xl:text-[1vw]"
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="xl:hover:bg-opacity-10 xl:px-[1vw] xl:py-[1vh] xl:text-[1vw]"
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="xl:hover:bg-opacity-10 xl:px-[1vw] xl:py-[1vh] xl:text-[1vw]"
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
