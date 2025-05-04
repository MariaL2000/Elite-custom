import axios from 'axios';

export const getImagesByGallerySection = async (section: string) => {
  const res = await axios(`/${section}`);

  return await res.data;
};
