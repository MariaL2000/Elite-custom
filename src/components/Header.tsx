import { NavBar } from './navbar/NavBar';
import { motion, AnimatePresence } from 'motion/react';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { ButtonGetQuote } from './home/sections/ButtonGetQuote';
import { Briefcase } from 'lucide-react';

export const Header = () => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });

  const isNavBarVisible = entry?.isIntersecting;

  return (
    <header className="shadow-lg">
      <NavBar ref={ref} />
      <AnimatePresence>{!isNavBarVisible && <NewNavBar />}</AnimatePresence>
    </header>
  );
};

export const NewNavBar = () => {
  return (
    <motion.nav
      className="border-border/50 fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between border-b bg-(--chanterelle)/20 px-6 py-3 shadow-lg backdrop-blur-md md:px-[2rem] dark:bg-(--chanterelle)/20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2">
        <Briefcase className="size-6 xl:size-[1.6vw]" />
      </div>
      <ButtonGetQuote />
    </motion.nav>
  );
};
