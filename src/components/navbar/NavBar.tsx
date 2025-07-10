import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { URLS } from '@/config';

export const NavBar = ({ ref }: React.RefAttributes<HTMLElement>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      ref={ref}
      className={cn(
        'relative z-10 flex w-full items-center justify-between gap-8 px-4 py-3 transition-all duration-300 md:justify-start md:px-8 md:py-4 xl:gap-16 xl:px-[2vw] xl:py-[1vw]',
        scrolled
          ? 'bg-gradient-to-r from-(--canoli-cream)/95 to-(--safari)/95 shadow-lg backdrop-blur-md'
          : 'bg-gradient-to-r from-(--canoli-cream) to-(--safari)'
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Desktop Navigation */}

      <div className="hidden md:flex md:items-center md:gap-6 xl:gap-[1vw]">
        {URLS.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              cn(
                'group relative px-3 py-2 text-sm font-medium transition-colors md:text-base xl:text-[1vw]',
                'hover:text-(--baltic-amber)',
                isActive ? 'text-(--baltic-amber)' : 'text-gray-700'
              )
            }
          >
            {name}
            <motion.span
              className={cn(
                'absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-(--baltic-amber) to-(--chocolate-martini)',
                'opacity-0 transition-all duration-300 group-hover:opacity-100'
              )}
              initial={{ width: 0 }}
              animate={{
                width: '100%',
                opacity: 1,
              }}
              whileHover={{ width: '100%', opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-700 hover:bg-gray-200/50 md:hidden dark:text-gray-300 dark:hover:bg-gray-800/50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full right-0 left-0 z-50 flex flex-col border-t border-gray-200 shadow-lg md:hidden dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {URLS.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'flex items-center justify-between border-b border-gray-200 px-6 py-4 text-base font-medium transition-colors dark:border-gray-700',
                    'hover:bg-gray-100 dark:hover:bg-gray-800',
                    isActive ? 'bg-gray-100 text-(--chocolate-martini)' : 'bg-white text-gray-700'
                  )
                }
              >
                {name}
                <ChevronRight className="size-4 opacity-70" />
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
