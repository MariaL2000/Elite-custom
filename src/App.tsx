import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Home, Services } from './pages';

import { Main } from './components/Main';
import { NotFound } from './pages/NotFound';

const BASE_URL = import.meta.env.BASE_URL;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path={BASE_URL} element={<Home />} />
          <Route path={`${BASE_URL}about`} element={<About />} />
          <Route path={`${BASE_URL}services`} element={<Services />} />
          <Route path={`${BASE_URL}contact`} element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
