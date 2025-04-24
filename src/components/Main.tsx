import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';

export const Main = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow">
        <main className="w-full">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
