import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { BASE_URL } from '@/config';
import { cn } from '@/lib/utils';

interface Props {
  setEndedVideo: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Intro = ({ setEndedVideo }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const triggerOutro = () => {
    setIsFadingOut(true);

    setEndedVideo(true);
  };

  const handleVideoEnd = () => triggerOutro();

  const handleSkip = () => {
    videoRef.current?.pause();
    triggerOutro();
  };

  const handleVideoLoaded = () => setIsLoading(false);

  return (
    <motion.div
      key="intro-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative hidden h-[100vh] bg-black lg:block',
        isFadingOut && 'pointer-events-none'
      )}
    >
      {isLoading && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black">
          <div className="size-16 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent 2xl:size-32" />
        </div>
      )}

      <motion.video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        onEnded={handleVideoEnd}
        onCanPlay={handleVideoLoaded}
        preload="auto"
        className={cn(
          isLoading ? 'invisible' : 'visible',
          'fixed left-0 h-full w-full object-contain lg:object-fill'
        )}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <source src={`${BASE_URL}videos/intro.webm`} type="video/webm" />
      </motion.video>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute right-6 bottom-12 z-50"
        >
          <button
            onClick={handleSkip}
            className="rounded bg-black/60 px-6 py-2 text-lg text-white hover:bg-black/70 xl:text-[1vw]"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};
