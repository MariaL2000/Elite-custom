import { createContext, useContext } from 'react';

import { GalleryData } from '@/types/gallery.type';
import { useGallery } from '@/hooks/useGallery';

interface GalleryContextState {
  galleryData: GalleryData[] | undefined;
  loading: boolean;
  error: Error | null;
}

export const GalleryContext = createContext<GalleryContextState | undefined>(undefined);

export const GalleryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data, isLoading, error } = useGallery();

  return (
    <GalleryContext.Provider value={{ galleryData: data, loading: isLoading, error }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGalleryContext must be used within a GalleryProvider');
  }
  return context;
};
