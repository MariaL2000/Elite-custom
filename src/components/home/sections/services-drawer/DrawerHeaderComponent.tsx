import { DrawerDescription, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';

export const DrawerHeaderComponent = () => (
  <DrawerHeader className="sticky top-0 z-10 bg-gray-50/95 py-4 text-center backdrop-blur-sm transition-all duration-300 md:py-6 dark:bg-gray-950/80">
    <DrawerTitle className="font-satisfy bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500 bg-clip-text text-2xl font-bold text-transparent xl:text-[2vw] dark:from-indigo-400 dark:via-teal-400 dark:to-indigo-400">
    All Our Services
    </DrawerTitle>
    <div className="mx-auto my-1 h-[2px] w-16 bg-gradient-to-r from-indigo-400/70 via-teal-400/70 to-indigo-400/70 md:my-2 md:w-24 xl:w-[5vw] dark:from-indigo-500 dark:via-teal-500 dark:to-indigo-500"></div>
    <DrawerDescription className="mx-auto max-w-[70vw] text-sm text-gray-500 xl:text-[0.9vw] dark:text-gray-300">
    Discover all our options to transform your home with the best materials and finishes on the market.
    </DrawerDescription>
  </DrawerHeader>
);
