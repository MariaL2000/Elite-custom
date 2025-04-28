import { useState, useEffect } from 'react';
import { type CarouselApi } from '@/components/ui/carousel';

export function useCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying && api) {
      interval = setInterval(() => {
        api.scrollNext();
      }, 5000); // Cambia cada 5 segundos
    }

    return () => clearInterval(interval);
  }, [isPlaying, api]);

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return {
    api,
    setApi,
    current,
    count,
    isPlaying,
    togglePlayPause,
    goToSlide,
  };
}
