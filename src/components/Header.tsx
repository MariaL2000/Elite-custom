import { NavBar } from './navbar/NavBar';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { BASE_URL } from '@/config';

export const Header = () => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });

  // Check if the original navbar is visible in the viewport
  const isNavBarVisible = entry?.isIntersecting;

  return (
    <>
      <NavBar ref={ref} />
      <AnimatePresence>{!isNavBarVisible && <NewNavBar />}</AnimatePresence>
    </>
  );
};

export const NewNavBar = () => {
  return (
    <motion.nav
      className="fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between border-b border-gray-800/50 bg-gray-900/80 px-6 py-3 shadow-lg backdrop-blur-md md:px-[2rem]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2">
        <h2 className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-xl font-bold text-transparent">
          Brand
        </h2>
      </div>
      <Button
        variant={'default'}
        className="3xl:p-7 size-fit bg-gradient-to-r from-indigo-600 to-teal-600 shadow-md transition-all duration-300 hover:from-indigo-500 hover:to-teal-500 hover:shadow-teal-500/20"
      >
        <Link className="3xl:text-5xl font-medium" to={`${BASE_URL}contact`}>
          Get quote
        </Link>
      </Button>
    </motion.nav>
  );
};
