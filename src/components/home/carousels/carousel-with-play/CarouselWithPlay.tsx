import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useCarousel } from '@/hooks/usecarousel';
import { CarouselControls } from './CarouselControls';
import { CarouselSlide } from './CarouselSlide';
import { slides } from '@/datas/carousel';

export const CarouselWithPlay = () => {
  const { current, count, isPlaying, togglePlayPause, goToSlide, setApi } = useCarousel();

  return (
    <div className="relative h-[90vh] w-full overflow-hidden sm:h-[75vh] md:h-[80vh]">
      <Carousel
        opts={{
          loop: true,
          align: 'center',
          duration: 20, // Ajusta la velocidad de transición
        }}
        setApi={setApi}
        className="h-full"
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <CarouselSlide imageUrl={slide.imageUrl} title={slide.title} priority={index === 0} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Controles en la parte inferior */}
      <div className="absolute right-0 bottom-[8rem] left-0 z-20 flex justify-center">
        <CarouselControls
          current={current}
          count={count}
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          goToSlide={goToSlide}
        />
      </div>
    </div>
  );
};
