import * as React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useCarousel } from '@/hooks/usecarousel';
import { useScrollBasedMovement } from '@/hooks/useScrollBasedMovement';
import { CarouselControls } from './CarouselControls';
import { CarouselSlide } from './CarouselSlide';
import { useData } from '@/context/DataContext';

/* ===========================
   CONSTANTES
   =========================== */

const SLIDE_TITLES = ['DESIGN WITH US', 'ELEVATE YOUR EXPERIENCE', 'YOUR DREAM, OUR VISION'];

// 👇 URLs EXACTAS que pediste
const RAW_FALLBACK_URLS = [
  'https://www.lxhausys.com/us/blog/wp-content/uploads/2023/05/size_43ab86c1-4024-4684-adbc-f8c61b62e51f_Blog_1_25_1.jpg',
  'https://www.creativegranite.com/wp-content/uploads/2023/04/Granite-Countertops.jpg',
  'https://4294418.fs1.hubspotusercontent-na1.net/hubfs/4294418/Compressed%20Images%20for%20Blogs%20-%20NOT%20FOR%20WEB/granitecountertop.jfif',
];

// 👇 Imagen REAL para reemplazo automático
const SAFE_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80';

/* ===========================
   HELPERS
   =========================== */

// Detecta si la URL es una imagen real
const isImageUrl = (url: string) => /\.(jpg|jpeg|png|webp|avif|gif)(\?.*)?$/i.test(url);

/* ===========================
   COMPONENTE
   =========================== */

export const CarouselWithPlay = () => {
  const { move, containerRef, elementRef } = useScrollBasedMovement<HTMLDivElement, HTMLDivElement>(
    {
      multiplier: 4,
      padding: -5,
    }
  );

  const { setApi, current, count, isPlaying, togglePlayPause, goToSlide } = useCarousel();

  const { main_carousel } = useData();

  /* ===========================
     IMÁGENES FINALES (BLINDADAS)
     =========================== */

  const images = React.useMemo<string[]>(() => {
    // 1️⃣ Intentamos API (aunque falle casi siempre)
    if (Array.isArray(main_carousel)) {
      const apiImages = main_carousel.filter(
        (url): url is string => typeof url === 'string' && url.startsWith('http')
      );

      if (apiImages.length > 0) return apiImages;
    }

    // 2️⃣ Usamos TUS URLs, pero saneadas
    return RAW_FALLBACK_URLS.map(url => (isImageUrl(url) ? url : SAFE_IMAGE));
  }, [main_carousel]);

  /* ===========================
     RENDER
     =========================== */

  return (
    <div
      ref={containerRef}
      className="relative h-[90vh] w-full overflow-hidden sm:h-[75vh] md:h-[80vh]"
    >
      <Carousel
        setApi={setApi}
        className="size-full"
        opts={{
          loop: true,
          align: 'center',
        }}
      >
        <CarouselContent className="h-full">
          {SLIDE_TITLES.map((title, idx) => (
            <CarouselItem key={title} className="h-full">
              <CarouselSlide
                imageUrl={images[idx % images.length]}
                title={title}
                priority={idx === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <CarouselControls
        ref={elementRef}
        move={move}
        current={current}
        count={count}
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        goToSlide={goToSlide}
      />
    </div>
  );
};
