import { Button } from '@/components/ui/button';
import { DrawerFooter } from '@/components/ui/drawer';
import { BASE_URL } from '@/config';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const DrawerFooterComponent = () => (
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
        <Link to={`${BASE_URL}contact`}>
          <Button className="bg-(--chocolate-martini) px-4 py-1 text-xs text-white shadow-md transition-all hover:shadow-indigo-500/30 md:px-6 md:py-2 md:text-sm xl:rounded-[0.6vw] xl:px-[1.5vw] xl:py-[1vw] xl:text-[0.9vw] xl:leading-[1.2]">
            Contact us
          </Button>
        </Link>
      </motion.div>
    </div>
  </DrawerFooter>
);
