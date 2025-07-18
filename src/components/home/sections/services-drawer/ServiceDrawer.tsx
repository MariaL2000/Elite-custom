import { motion } from 'framer-motion';
import { Drawer, DrawerContent, DrawerFooter, DrawerTrigger } from '@/components/ui/drawer';
import { serviceCards } from '@/datas/servicescards';
import { DrawerCloseButton } from './DrawerClosebutton';
import { ServicesGrid } from './ServiceGrid';
import { DrawerHeaderComponent } from './DrawerHeaderComponent';
import { Button } from '@/components/ui/button';
import { useData } from '@/context/DataContext';
import { cn } from '@/lib/utils';
import { useId } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '@/config';

interface ServicesDrawerProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const ServicesDrawer = ({ isOpen, setIsOpen }: ServicesDrawerProps) => {
  const { colors } = useData();
  const id = useId();
  const dynamicClass = `btn-dynamic-${id}`;

  const backgroundColor = colors?.primary ?? 'var(--chocolate-martini)';

  return (
    <>
      <style>
        {`
          .${dynamicClass} {
            background: ${backgroundColor};
          }
         
        `}
      </style>

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
              className={cn(
                dynamicClass,
                'hover:opacity-90 xl:px-[1vw] xl:py-[1.4vw] xl:text-[1vw] 2xl:rounded-[0.6vw]'
              )}
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

              <DrawerFooter className="sticky bottom-0 z-10 bg-white/80 py-2 backdrop-blur-sm transition-colors duration-300 md:py-3 xl:py-[0.8vw]">
                <div className="mx-auto w-full max-w-md px-4 xl:max-w-[50vw] xl:px-[1vw]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="rounded-lg border border-indigo-200 bg-indigo-50 p-2 text-center md:p-3 xl:p-[0.8vw]"
                  >
                    <p className="mb-2 text-xs text-gray-600 md:text-sm xl:text-[0.9vw] xl:leading-[1.2]">
                      Do you need personalized service?
                    </p>

                    <Button
                      asChild
                      className={cn(
                        dynamicClass,
                        'px-4 py-1 text-xs text-white shadow-md transition-all hover:opacity-90 hover:shadow-xl md:px-6 md:py-2 md:text-sm xl:rounded-[0.6vw] xl:px-[1.5vw] xl:py-[1vw] xl:text-[0.9vw] xl:leading-[1.2]'
                      )}
                    >
                      <Link to={`${BASE_URL}contact`}>Contact us</Link>
                    </Button>
                  </motion.div>
                </div>
              </DrawerFooter>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};
