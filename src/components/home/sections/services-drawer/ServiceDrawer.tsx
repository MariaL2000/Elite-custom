import { motion } from 'framer-motion';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { serviceCards } from '@/datas/servicescards';
import { DrawerCloseButton } from './DrawerClosebutton';
import { DrawerFooterComponent } from './DrawerFooterComponent';
import { ServicesGrid } from './ServiceGrid';
import { DrawerHeaderComponent } from './DrawerHeaderComponent';
import { Button } from '@/components/ui/button';
import { useData } from '@/context/DataContext';
import { cn, getColorsForBtn } from '@/lib/utils';

interface ServicesDrawerProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const ServicesDrawer = ({ isOpen, setIsOpen }: ServicesDrawerProps) => {
  const { colors } = useData();
  const colorsBtn = getColorsForBtn(colors);
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Button
            className={cn(colorsBtn, 'xl:px-[1vw] xl:py-[1.4vw] xl:text-[1vw] 2xl:rounded-[0.6vw]')}
          >
            View more services
          </Button>
        </motion.div>
      </DrawerTrigger>

      <DrawerContent className="max-h-[85vh] w-full border-t border-gray-800 bg-slate-50 backdrop-blur-lg">
        <div className="relative mx-auto h-full w-full max-w-[90%]">
          <DrawerCloseButton />

          <div className="flex h-full flex-col">
            <div className="flex-1 overflow-y-auto">
              <DrawerHeaderComponent />
              <ServicesGrid cards={serviceCards} />
            </div>

            <DrawerFooterComponent />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
