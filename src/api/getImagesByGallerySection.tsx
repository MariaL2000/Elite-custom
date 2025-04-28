import { URL_API } from '@/config';

export const getImagesByGallerySection = async (section: string) => {
  const res = await fetch(`${URL_API}api/${section}`);

  return await res.json();
};
