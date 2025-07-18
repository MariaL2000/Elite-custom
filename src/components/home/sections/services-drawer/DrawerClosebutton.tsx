import { Button } from '@/components/ui/button';
import { DrawerClose } from '@/components/ui/drawer';
import { useData } from '@/context/DataContext';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { useId } from 'react';

export const DrawerCloseButton = () => {
  const { colors } = useData();
  const id = useId();
  const dynamicClass = `btn-dynamic-${id}`;

  const backgroundColor = colors.primary ?? 'var(--chocolate-martini)';

  return (
    <>
      <style>
        {`
          .${dynamicClass} {
            background: ${backgroundColor};
          }
          
        `}
      </style>
      <DrawerClose asChild>
        <Button
          size="icon"
          className={cn(
            dynamicClass,
            'fixed top-4 right-4 z-50 rounded-full p-2 text-gray-300 transition-all hover:opacity-80 xl:p-[0.7vw]'
          )}
        >
          <X className="size-4 xl:size-[1vw]" />
        </Button>
      </DrawerClose>
    </>
  );
};
