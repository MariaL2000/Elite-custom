import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { NotFound } from './pages/NotFound';
import { AboutPage, ContactPage, HomePage } from './pages';
import { GalleryPage } from './pages/GalleryPage';
import { GallerySectionPage } from './pages/GalleryDetailSection';
import GalleryLayout from './layouts/GalleryLayout';
import ReviewPage from './pages/ReviewPage';

import ScrollToTop from './components/ScrollToTop';
import { AppLayout } from './layouts/AppLayout';

const BASE_URL = import.meta.env.BASE_URL;

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path={BASE_URL} element={<Navigate to={`${BASE_URL}home`} />} />
        <Route element={<AppLayout />}>
          <Route path={`${BASE_URL}home`} element={<HomePage />} />
          <Route path={`${BASE_URL}about`} element={<AboutPage />} />

          <Route path={`${BASE_URL}contact`} element={<ContactPage />} />
          <Route element={<GalleryLayout />}>
            <Route path={`${BASE_URL}gallery`} element={<GalleryPage />} />
            <Route path={`${BASE_URL}gallery/:section`} element={<GallerySectionPage />} />
          </Route>
          <Route path={`${BASE_URL}review`} element={<ReviewPage />} />
          <Route path={`${BASE_URL}*`} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
