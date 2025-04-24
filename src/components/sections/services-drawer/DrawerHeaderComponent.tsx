import { DrawerDescription, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';

export const DrawerHeaderComponent = () => (
  <DrawerHeader className="sticky top-0 z-10 bg-gray-950/80 py-4 text-center backdrop-blur-sm md:py-6">
    <DrawerTitle className="font-satisfy bg-gradient-to-r from-indigo-400 via-teal-400 to-indigo-400 bg-clip-text text-2xl font-bold text-transparent xl:text-[2vw]">
      Todos Nuestros Servicios
    </DrawerTitle>
    <div className="mx-auto my-1 h-1 w-16 bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500 md:my-2 md:w-24 xl:w-[5vw]"></div>
    <DrawerDescription className="mx-auto max-w-[70vw] text-sm text-gray-300 xl:text-[0.9vw]">
      Descubre todas nuestras opciones para transformar tu hogar con los mejores materiales y
      acabados del mercado.
    </DrawerDescription>
  </DrawerHeader>
);
