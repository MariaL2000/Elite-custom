import { Button } from '@/components/ui/button';
import { Pause, Play } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

interface CarouselControlsProps {
  current: number;
  count: number;
  isPlaying: boolean;
  move: number;
  togglePlayPause: () => void;
  goToSlide: (index: number) => void;
}

export const CarouselControls = React.forwardRef<HTMLDivElement, CarouselControlsProps>(
  ({ current, count, isPlaying, move, togglePlayPause, goToSlide }, ref) => {
    return (
      <motion.div
        ref={ref}
        className="absolute top-0 left-1/2 z-20 flex flex-col items-center gap-2 xl:gap-[0.6vw]"
        animate={{ y: move, x: '-50%' }}
        transition={{ type: 'keyframes', stiffness: 100, damping: 30 }}
      >
        <Button
          variant="outline"
          size="icon"
          className="flex size-12 items-center justify-center rounded-full bg-white hover:bg-white/90 xl:size-[3vw]"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <Pause className="size-6 text-black xl:size-[1.5vw]" />
          ) : (
            <Play className="size-6 text-black xl:size-[1.5vw]" />
          )}
        </Button>

        <div className="flex gap-2 xl:gap-[0.3vw]">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`size-3 rounded-full transition-all xl:size-[1vw] ${
                index === current ? 'scale-125 bg-white' : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    );
  }
);

CarouselControls.displayName = 'CarouselControls';
