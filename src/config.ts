export const BASE_URL = import.meta.env.BASE_URL;

interface URLS {
  name: string;
  path: string;
}
export const URLS: URLS[] = [
  { name: 'Home', path: `${BASE_URL}` },
  { name: 'About', path: `${BASE_URL}about` },
  { name: 'Services', path: `${BASE_URL}services` },
  { name: 'Contact', path: `${BASE_URL}contact` },
];

export const URLS_Footer: URLS[] = [...URLS, { name: 'Gallery', path: `${BASE_URL}gallery` }];
