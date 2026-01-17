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

  const carouselStyles: React.CSSProperties = isIOS
    ? { WebkitBackfaceVisibility: 'hidden', WebkitPerspective: 1000, willChange: 'transform' }
    : {};

  // Generamos fallback de cards si API falla o datos vacíos
  const cardsToRender =
    !loading && second_carousel && second_carousel.length > 0
      ? second_carousel
      : Array.from({ length: 9 }, (_, i) => ({ index: i }));

  return (
    <div className="relative my-[5%] w-full overflow-hidden py-12" style={carouselStyles}>
      {title && (
        <h1
          className="my-[2%] bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-center text-3xl font-bold text-transparent xl:text-[2.5vw]"
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
        opts={{ loop: true, align: 'center' }}
        className="m-[0_auto] w-[95%] xl:w-[85%]"
        setApi={setApi}
        onMouseDown={() => setIsPending(true)}
      >
        <CarouselContent className={isPending ? 'transition-none' : ''}>
          {cardsToRender.map((item: any, index: number) => (
            <CarouselItem
              key={`card-${index}`}
              className={`basis-full md:basis-1/2 ${slidesPerViewLg[sliders]}`}
            >
              <div className="p-[2%]">
                <Card className="overflow-hidden border-0 bg-linear-to-br from-slate-50 to-slate-100 p-0 shadow-lg">
                  <CardContent className="aspect-square p-0">
                    <Suspense fallback={<Skeleton className="h-full w-full" />}>
                      <LazyCardCarousel
                        data={item.url ? item : undefined} // si no hay url → fallback
                        index={index}
                        isIOS={isIOS}
                      />
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
