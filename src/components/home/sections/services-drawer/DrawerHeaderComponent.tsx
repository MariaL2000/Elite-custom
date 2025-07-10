import { SeparatorWithColor } from '@/components/SeparatorWithColor';
import { DrawerDescription, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';

export const DrawerHeaderComponent = () => (
  <DrawerHeader className="sticky top-0 z-10 bg-gray-50/95 py-4 text-center backdrop-blur-sm transition-all duration-300 md:py-6 dark:bg-gray-950/80">
    <DrawerTitle className="text-2xl font-bold xl:text-[2vw]">All Our Services</DrawerTitle>
    <SeparatorWithColor />
    <DrawerDescription className="mx-auto max-w-[70vw] text-sm text-gray-500 xl:text-[0.9vw] dark:text-gray-300">
      Discover all our options to transform your home with the best materials and finishes on the
      market.
    </DrawerDescription>
  </DrawerHeader>
);
