import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { DataProvider } from '@/context/DataContext';
import { useState } from 'react';

import { AnimatePresence, motion } from 'motion/react';
import { Intro } from './Intro';

const queryClient = new QueryClient();

export const Main = () => {
  const [endedVideo, setEndedVideo] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          <AnimatePresence mode="wait" onExitComplete={() => setEndedVideo(true)}>
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
        </DataProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
