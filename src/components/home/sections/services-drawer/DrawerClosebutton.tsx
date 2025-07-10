import { Button } from '@/components/ui/button';
import { DrawerClose } from '@/components/ui/drawer';
import { X } from 'lucide-react';

export const DrawerCloseButton = () => (
  <DrawerClose asChild>
    <Button
      size="icon"
      className="fixed top-4 right-4 z-50 rounded-full bg-(--chocolate-martini)/80 p-2 text-gray-300 transition-all hover:bg-(--chocolate-martini) xl:p-[0.7vw]"
    >
      <X className="size-4 xl:size-[1vw]" />
    </Button>
  </DrawerClose>
);
