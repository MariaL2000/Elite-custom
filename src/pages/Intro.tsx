import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { BASE_URL } from '@/config';
import { cn } from '@/lib/utils';

export const IntroPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const [videoEnded, setVideoEnded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const finishIntro = () => {
    setVideoEnded(true);

    setTimeout(() => {
      navigate(`${BASE_URL}home`);
    }, 800);
  };

  const handleSkip = () => {
    videoRef.current?.pause();
    finishIntro();
  };

  const handleVideoEnd = () => finishIntro();

  const handleVideoLoaded = () => setIsLoading(false);

  return (
    <div
      className={`relative inset-0 z-50 h-screen bg-black transition-opacity duration-700 ${
        videoEnded ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
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
          'absolute inset-0 h-full w-full object-contain object-center md:object-fill'
        )}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: 'easeOut' }}
      >
        <source src={`${BASE_URL}videos/intro.webm`} type="video/webm" />
      </motion.video>

      {!isLoading && (
        <div className="absolute right-6 bottom-6 z-50">
          <button
            onClick={handleSkip}
            className="rounded bg-black/60 px-6 py-2 text-lg text-white hover:bg-black/70 xl:text-[1vw]"
          >
            Skip Intro
          </button>
        </div>
      )}
    </div>
  );
};
