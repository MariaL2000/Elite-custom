import { Button } from '@/components/ui/button';
import { DrawerFooter } from '@/components/ui/drawer';
import { BASE_URL } from '@/config';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const DrawerFooterComponent = () => (
  <DrawerFooter className="sticky bottom-0 z-10 bg-gray-950/80 py-2 backdrop-blur-sm md:py-3 xl:py-[0.8vw]">
    <div className="mx-auto w-full max-w-md px-4 xl:max-w-[50vw] xl:px-[1vw]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-lg border border-indigo-700/50 bg-indigo-900/30 p-2 text-center md:p-3 xl:p-[0.8vw]"
      >
        <p className="mb-2 text-xs text-gray-200 md:text-sm xl:text-[0.9vw] xl:leading-[1.2]">
          ¿Necesitas un servicio personalizado?
        </p>
        <Link to={`${BASE_URL}contact`}>
          <Button className="bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500 px-4 py-1 text-xs md:px-6 md:py-2 md:text-sm xl:px-[1.5vw] xl:py-[0.6vw] xl:text-[0.9vw] xl:leading-[1.2]">
            Contáctanos
          </Button>
        </Link>
      </motion.div>
    </div>
  </DrawerFooter>
);
