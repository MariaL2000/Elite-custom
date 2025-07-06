import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useCarousel } from '@/hooks/usecarousel';
import { useScrollBasedMovement } from '@/hooks/useScrollBasedMovement';
import { CarouselControls } from './CarouselControls';
import { CarouselSlide } from './CarouselSlide';
import { useData } from '@/context/DataContext';

export const CarouselWithPlay = () => {
  const { move, containerRef, elementRef } = useScrollBasedMovement<HTMLDivElement, HTMLDivElement>(
    {
      multiplier: 4,
      padding: -5,
    }
  );

  const { setApi, current, count, isPlaying, togglePlayPause, goToSlide } = useCarousel();
  const { main_carousel } = useData();

  const slidesTitles = ['DESIGN WITH US', 'ELEVATE YOUR EXPERIENCE', 'YOUR DREAM, OUR VISION'];
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
          {slidesTitles.map((title, idx) => (
            <CarouselItem key={title + idx} className="h-full">
              <CarouselSlide imageUrl={main_carousel[idx]} title={title} priority />
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
