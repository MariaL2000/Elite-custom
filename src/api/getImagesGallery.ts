import { GalleryResponse } from '@/types/gallery.type';
import axiosInstance from '@/lib/axios';

export const getImagesGallery = async (): Promise<GalleryResponse> => {
  try {
    // For debugging, try a direct call to the API
    const res = await axiosInstance('/gallery');
    console.log('Raw API response:', res);
    return res.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};
