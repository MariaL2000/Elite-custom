import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { DataProvider } from '@/context/DataContext';
import { useState } from 'react';

import { AnimatePresence, motion } from 'motion/react';
import { Intro } from './Intro';
import { useIsMobile } from '@/hooks/useIsMobile';

const queryClient = new QueryClient();

export const Main = () => {
  const [endedVideo, setEndedVideo] = useState(false);
  const isMobile = useIsMobile();

  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        {isMobile ? (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
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
      </DataProvider>
    </QueryClientProvider>
  );
};
