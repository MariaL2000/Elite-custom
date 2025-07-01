import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useCarousel } from '@/hooks/usecarousel';
import { useScrollBasedMovement } from '@/hooks/useScrollBasedMovement';
import { CarouselControls } from './CarouselControls';
import { CarouselSlide } from './CarouselSlide';
import { slides } from '@/datas/carousel';

export const CarouselWithPlay = () => {
  const { move, containerRef, elementRef } = useScrollBasedMovement<HTMLDivElement, HTMLDivElement>(
    {
      multiplier: 4,
      padding: -5, // Set padding to 0 to prevent overflow
    }
  );

  const { setApi, current, count, isPlaying, togglePlayPause, goToSlide } = useCarousel();

  return (
    <div
      ref={containerRef}
      className="relative mt-5 h-[90vh] w-full overflow-hidden sm:h-[75vh] md:h-[80vh]"
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
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <CarouselSlide imageUrl={slide.imageUrl} title={slide.title} priority />
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
