import { NavBar } from './navbar/NavBar';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { ButtonGetQuote } from './home/sections/ButtonGetQuote';

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
      className="border-border/50 fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between border-b bg-(--chanterelle)/10 px-6 py-2 shadow-lg backdrop-blur-md md:px-[1rem]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <img src="logo.jpeg" alt="logo" className="size-4 xl:size-[2vw]" />

      <ButtonGetQuote />
    </motion.nav>
  );
};
