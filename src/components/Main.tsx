import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';

import { Toaster } from '@/components/ui/sonner';

import { useId, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Intro } from './Intro';
import { useIsMobile } from '@/hooks/useIsMobile';
import RedirectToAdmin from '@/pages/RedirectToAdmin';
import { useData } from '@/context/DataContext';
import { cn } from '@/lib/utils';

export const Main = () => {
  const [endedVideo, setEndedVideo] = useState(false);
  const { colors } = useData();
  const id = useId();
  const location = useLocation();
  const isMobile = useIsMobile();

  if (location.pathname.endsWith('/admin')) return <RedirectToAdmin />;

  const bgBody = `bg-body-${id}`;
  const background = colors?.secondary ?? 'var(--safari)/25';
  console.log(colors);

  return (
    <>
      <style>
        {`.${bgBody}{
background:${background}
}`}
      </style>
      {isMobile ? (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className={cn(bgBody, 'text-gray-900 duration-1000')}
        >
          <Header />
          <main>
            <Outlet />
          </main>
          <Toaster />
          <Footer />
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          {!endedVideo ? (
            <Intro key="intro" setEndedVideo={setEndedVideo} />
          ) : (
            <motion.div
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={cn(bgBody, 'text-gray-900 duration-1000')}
            >
              <Header />
              <main>
                <Outlet />
              </main>
              <Toaster />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};
