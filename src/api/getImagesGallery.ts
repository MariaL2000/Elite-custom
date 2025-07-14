import { GalleryResponse } from '@/types/gallery.type';
import axiosInstance from '@/lib/axios';

export const getImagesGallery = async (): Promise<GalleryResponse> => {
  try {
    const res = await axiosInstance('/gallery');

    return res.data;
  } catch (error) {
    throw error;
  }
};
