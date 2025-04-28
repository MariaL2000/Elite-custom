import { Button } from '@/components/ui/button';
import { DrawerClose } from '@/components/ui/drawer';

export const DrawerCloseButton = () => (
  <DrawerClose asChild>
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4 z-50 rounded-full bg-gray-900/50 p-2 text-gray-300 backdrop-blur-sm transition-all hover:bg-gray-800 hover:text-white md:p-2.5 xl:p-[0.7vw]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 md:size-6 xl:size-[1vw]"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </Button>
  </DrawerClose>
);
