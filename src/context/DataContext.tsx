import { createContext, useContext, ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '@/api/fetchData';
import { DataSecondCarousel, DataType } from '@/types/data.type';
import { Material, materialsInfo } from '@/datas/material-selector';

type ContextType = {
  main_carousel: string[];
  second_carousel: DataSecondCarousel[];
  imagesCarouselWithScroll: string[];
  materials: Material[];
  imagesResizable: { [k in 'kitchen' | 'bathroom']?: string };
  colors: DataType['colors'];
  loading: boolean;
  error: string | null;
};

const DataContext = createContext<ContextType>({} as ContextType);

export const useData = () => useContext(DataContext);

type ProviderProps = {
  children: ReactNode;
};

export const DataProvider = ({ children }: ProviderProps) => {
  const { data, isLoading, error } = useQuery<DataType, Error>({
    queryKey: ['siteData'],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
  });

  const newDataForCarousel = () => {
    let newArr: DataSecondCarousel[] = [];

    for (const key in data?.galleries) {
      const images = data.galleries[key as keyof typeof data.galleries] || [];
      images.forEach((img, idx) => {
        newArr.push({
          title: key,
          url: img,
          alt: `${img}+${idx}`,
          description: '',
        });
      });
    }

    return newArr;
  };
  const second_carousel = newDataForCarousel();
  const materials: Material[] = materialsInfo.map(m => ({
    ...m,
    image: data?.materials[m.id as keyof typeof data.materials] ?? '',
    thumbnail: data?.materials[m.id as keyof typeof data.materials] ?? '',
  }));

  const imagesResizable = {
    kitchen: data?.galleries.kitchen[0],

    bathroom: data?.galleries.bathroom[0],
  };

  const imagesCarouselWithScroll = data?.second_carousel ?? [];
  const value = {
    main_carousel: data?.main_carousel ?? [],
    second_carousel,
    materials,
    imagesCarouselWithScroll,
    imagesResizable,
    colors: data?.colors ?? {
      primary: null,
      secondary: null,
      buttons: null,
    },
    loading: isLoading,
    error: error?.message ?? null,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
