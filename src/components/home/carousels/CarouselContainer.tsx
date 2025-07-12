import { Suspense, lazy, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { SlidesPerView } from '@/types/carousel-type';
import { Skeleton } from '@/components/ui/skeleton';
import { useBrowserDetection } from '@/hooks/useBrowserDetection';
import { useData } from '@/context/DataContext';

const LazyCardCarousel = lazy(() => import('./CardCarousel'));

export function CarouselContainer({
  sliders = 3,
  title,
}: {
  sliders?: keyof SlidesPerView;
  title?: string;
}) {
  const [api, setApi] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const { isIOS } = useBrowserDetection();
  const { second_carousel, loading } = useData();

  const slidesPerViewLg: SlidesPerView = {
    3: 'lg:basis-1/3',
    4: 'lg:basis-1/4',
    5: 'lg:basis-1/5',
  };

  // Estilos específicos para Safari/iOS
  const carouselStyles: React.CSSProperties = isIOS
    ? {
        WebkitBackfaceVisibility: 'hidden',
        WebkitPerspective: 1000,
        willChange: 'transform',
      }
    : {};

  return (
    <div 
  className="relative my-[5%] w-full overflow-hidden py-12" 
  style={{
    ...carouselStyles,
    background: `
      linear-gradient(135deg, 
        rgba(255, 248, 220, 0.15) 0%,
        rgba(245, 222, 179, 0.20) 25%,
        rgba(222, 184, 135, 0.15) 50%,
        rgba(210, 180, 140, 0.20) 75%,
        rgba(188, 143, 143, 0.15) 100%
      )
    `,
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: `
      inset 0 1px 0 rgba(255, 255, 255, 0.1),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
      0 8px 32px rgba(0, 0, 0, 0.1)
    `,
  }}
>

      {title && (
        <h1
          className="my-[2%] bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-center text-3xl font-bold text-transparent xl:text-[2.5vw]"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 1px 2px rgba(15, 23, 42, 0.2)',
          }}
        >
          {title}
        </h1>
      )}

      <Carousel
        opts={{
          loop: true,
          align: 'center',
        }}
        className="m-[0_auto] w-[95%] xl:w-[85%]"
        setApi={setApi}
        onMouseDown={() => setIsPending(true)}
      >
        <CarouselContent className={isPending ? 'transition-none' : ''}>
          {loading
            ? Array.from({ length: 9 }).map((_, index) => (
                <CarouselItem
                  key={`skeleton-${index}`}
                  className={`basis-full md:basis-1/2 ${slidesPerViewLg[sliders]}`}
                >
                  <div className="p-[2%]">
                    <Card className="overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-slate-100 p-0 shadow-lg">
                      <CardContent className="aspect-square p-0">
                        <Skeleton className="size-full" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))
            : second_carousel.map(i => (
                <CarouselItem
                  key={i.alt}
                  className={`basis-full md:basis-1/2 ${slidesPerViewLg[sliders]}`}
                >
                  <div className="p-[2%]">
                    <Card className="overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-slate-100 p-0 shadow-lg">
                      <CardContent className="aspect-square p-0">
                        <Suspense fallback={<Skeleton className="h-full w-full" />}>
                          <LazyCardCarousel data={i} isIOS={isIOS} />
                        </Suspense>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
        </CarouselContent>

        <CarouselPrevious
          size="icon"
          className="-translate-x-2 scale-[1.5] border-0 bg-white/80 shadow-md xl:p-[0.8vw]"
          onClick={() => api?.scrollPrev()}
        />
        <CarouselNext
          size="icon"
          className="translate-x-2 scale-[1.5] border-0 bg-white/80 shadow-md xl:p-[0.8vw]"
          onClick={() => api?.scrollNext()}
        />
      </Carousel>
    </div>
  );
}
