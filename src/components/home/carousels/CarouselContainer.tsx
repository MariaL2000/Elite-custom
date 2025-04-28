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
import { Data } from '@/datas/carousel';

// Carga diferida del componente de tarjeta
const LazyCardCarousel = lazy(() => import('./CardCarousel'));

export function CarouselContainer({
  data,
  sliders = 3,
  title,
}: {
  data: Data[];
  sliders?: keyof SlidesPerView;
  title?: string;
}) {
  const [api, setApi] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const { isIOS } = useBrowserDetection();

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
    <div className="relative my-[5%] w-full overflow-hidden py-12" style={carouselStyles}>
      {title && (
        <h1 className="my-[2%] bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-center text-4xl font-bold text-transparent drop-shadow-sm xl:text-[3vw]">
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
          {data.map((i, index) => (
            <CarouselItem
              key={`${i.alt || 'item'}-${index}`}
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
          className="-translate-x-2 scale-[1.5] border-0 bg-white/80 shadow-md"
          onClick={() => api?.scrollPrev()}
        />
        <CarouselNext
          className="translate-x-2 scale-[1.5] border-0 bg-white/80 shadow-md"
          onClick={() => api?.scrollNext()}
        />
      </Carousel>
    </div>
  );
}
