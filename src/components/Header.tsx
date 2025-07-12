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
      <div className="flex items-center gap-2 sm:gap-3">
  <img 
    src="elite.PNG" 
    alt="Elite Logo" 
    className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 xl:h-[3vw] 2xl:h-16 object-contain" 
  />
  <img 
    src="elite2.PNG" 
    alt="Elite Text" 
    className="h-6 w-auto sm:h-8 md:h-9 lg:h-10 xl:h-[2.2vw] 2xl:h-12 object-contain" 
  />
</div>

      <ButtonGetQuote />
    </motion.nav>
  );
};
