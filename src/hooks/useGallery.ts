// hooks/useGallery.ts
import { useQuery } from '@tanstack/react-query';
import { getImagesGallery } from '@/api/getImagesGallery';
import { GalleryData } from '@/types/gallery.type';

export const useGallery = () => {
  return useQuery<GalleryData[], Error>({
    queryKey: ['galleryData'],
    queryFn: async () => {
      const response = await getImagesGallery();
      return response.data;
    },
    staleTime: 100000, // los datos se consideran frescos durante 10 segundos
    refetchInterval: 100000, // polling cada 10 segundos
  });
};
