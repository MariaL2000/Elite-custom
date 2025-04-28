import { Button } from '@/components/ui/button';
import { Pause, Play } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  current: number;
  count: number;
  isPlaying: boolean;
  togglePlayPause: () => void;
  goToSlide: (index: number) => void;
}

export const CarouselControls = ({
  current,
  count,
  isPlaying,
  togglePlayPause,
  goToSlide,
}: Props) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Botón Play/Pause */}
      <Button
        variant="outline"
        size="icon"
        className="flex size-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white xl:size-[3vw]"
        onClick={togglePlayPause}
      >
        {isPlaying ? (
          <Pause className="size-6 text-black xl:size-[2vw]" />
        ) : (
          <Play className="size-6 text-black xl:size-[2vw]" />
        )}
      </Button>

      {/* Indicadores de slides */}
      <div className="flex gap-3">
        {Array.from({ length: count }).map((_, index) => (
          <motion.button
            key={index}
            className={`size-3 rounded-full transition-all xl:size-[1vw] ${
              index === current ? 'scale-125 bg-white' : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </motion.div>
  );
};
