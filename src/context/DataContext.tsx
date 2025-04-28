// DataContext.tsx
import { getImagesGallery } from '@/api/getImagesGallery';
import { GalleryDataType } from '@/schemas/gallery.schema';
import { createContext, useState, useEffect, useMemo } from 'react';

interface DataContextState {
  galleryData: GalleryDataType;
  loading: boolean;
  error: Error | null;
}

export const GalleryContext = createContext<DataContextState>({} as DataContextState);

export const GalleryProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<DataContextState>({
    galleryData: {} as GalleryDataType,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getImagesGallery();
        setState({
          galleryData: response.data,
          loading: false,
          error: null,
        });
      } catch (error) {
        setState(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error : new Error('Error desconocido'),
        }));
      }
    };

    fetchData();
  }, []);

  const contextValue = useMemo(() => state, [state]);

  return <GalleryContext.Provider value={contextValue}>{children}</GalleryContext.Provider>;
};
