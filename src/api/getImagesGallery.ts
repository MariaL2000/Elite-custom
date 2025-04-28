import { URL_API } from '@/config';
import { GalleryType } from '@/schemas/gallery.schema';

export const getImagesGallery = async (): Promise<GalleryType> => {
  const res = await fetch(`${URL_API}gallery`);
  return await res.json();
};
