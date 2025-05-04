import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();
export const Main = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <div>
          <Header />

          <main>
            <Outlet />
          </main>
          <Toaster />
          <Footer />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
