import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Main } from './components/Main';
import { NotFound } from './pages/NotFound';
import { AboutPage, ContactPage, HomePage } from './pages';
import { GalleryPage } from './pages/GalleryPage';
import { GallerySectionPage } from './pages/GalleryDetailSection';
import GalleryLayout from './layouts/GalleryLayout';

const BASE_URL = import.meta.env.BASE_URL;

const App = () => {
  return (
    <BrowserRouter>
      <div className="text-gray-900 duration-1000 dark:bg-slate-950 dark:text-gray-100">
        <Routes>
          <Route element={<Main />}>
            <Route path={BASE_URL} element={<HomePage />} />
            <Route path={`${BASE_URL}about`} element={<AboutPage />} />

            <Route path={`${BASE_URL}contact`} element={<ContactPage />} />
            <Route element={<GalleryLayout />}>
              <Route path={`${BASE_URL}gallery`} element={<GalleryPage />} />
              <Route path={`${BASE_URL}gallery/:section`} element={<GallerySectionPage />} />
            </Route>
          </Route>
          <Route path={`${BASE_URL}*`} element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
