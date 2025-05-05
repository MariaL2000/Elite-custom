export const BASE_URL = import.meta.env.BASE_URL;

interface URLS {
  name: string;
  path: string;
}
export const URLS: URLS[] = [
  { name: 'Home', path: `${BASE_URL}` },
  { name: 'About', path: `${BASE_URL}about` },
  { name: 'Gallery', path: `${BASE_URL}gallery` },

  { name: 'Contact', path: `${BASE_URL}contact` },
  { name: 'Review', path: `${BASE_URL}review` },
];

export const URL_API = 'https://backendelite.onrender.com/api';
