import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';
import { ThemeProvider } from '@/providers/ThemeProvider';

export const Main = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};
