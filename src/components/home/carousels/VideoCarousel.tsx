import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { VideoSlide } from '@/datas/carousel-video';

export const VideoCarousel = ({ slides }: { slides: VideoSlide[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(error => console.error('Error playing video:', error));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const goToNext = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full overflow-hidden py-8 md:py-12"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="mb-8 text-center">
          <h2 className="font-satisfy bg-gradient-to-r from-indigo-400 via-teal-400 to-indigo-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
            Nuestros Videos
          </h2>
          <div className="mx-auto mb-4 h-1 w-16 bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500 sm:w-20" />
          <p className="mx-auto max-w-2xl text-sm text-gray-300 sm:text-base">
            Descubre nuestro trabajo en acción
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 z-20 flex w-full items-center justify-between px-2">
            <motion.button
              onClick={goToPrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="h-8 w-8 rounded-full bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 sm:h-10 sm:w-10"
            >
              <ChevronLeft className="mx-auto h-4 w-4 text-white sm:h-5 sm:w-5" />
            </motion.button>
            <motion.button
              onClick={goToNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="h-8 w-8 rounded-full bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 sm:h-10 sm:w-10"
            >
              <ChevronRight className="mx-auto h-4 w-4 text-white sm:h-5 sm:w-5" />
            </motion.button>
          </div>

          {/* Video Carousel */}
          <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-700 bg-gray-900/50 shadow-xl backdrop-blur-sm sm:rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Poster */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.img
                      src={slides[currentIndex].posterSrc}
                      alt="Video poster"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </AnimatePresence>

                {/* Video */}
                <motion.video
                  ref={videoRef}
                  src={slides[currentIndex].videoSrc}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isPlaying ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full object-cover"
                  preload="metadata"
                  playsInline
                />
              </motion.div>
            </AnimatePresence>

            {/* Play/Pause Button */}
            <motion.div // Cambiado de button a div
              onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                e.stopPropagation(); // Previene que el clic llegue al contenedor
                togglePlay();
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600/90 shadow-md transition-all hover:bg-indigo-700/90 sm:bottom-6 sm:left-6 sm:h-12 sm:w-12"
              style={{ pointerEvents: 'auto' }} // Asegura que reciba eventos
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isPlaying ? 'pause' : 'play'}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.2, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                  ) : (
                    <Play className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Title */}
          <motion.h3
            key={currentIndex}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="mt-4 text-center text-lg font-semibold text-white sm:text-xl"
          >
            {slides[currentIndex].title}
          </motion.h3>

          {/* Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                  }
                  setCurrentIndex(index);
                  setIsPlaying(false);
                }}
                whileHover={{ scale: 1.2 }}
                className={`h-1.5 w-6 rounded-full sm:h-2 sm:w-8 ${
                  currentIndex === index ? 'bg-indigo-500' : 'bg-gray-600'
                }`}
                initial={{ scale: 0.8 }}
                animate={{
                  scale: currentIndex === index ? 1.1 : 1,
                  width: currentIndex === index ? '2rem' : '1.5rem',
                }}
                transition={{ type: 'spring', stiffness: 500 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
