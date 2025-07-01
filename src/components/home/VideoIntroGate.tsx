import { useEffect, useRef, useState } from 'react';
import { BASE_URL } from '@/config';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export const VideoIntroGate = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showIntro, setShowIntro] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setShowIntro(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const finishIntro = () => {
    setVideoEnded(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 800);
    document.body.style.overflow = 'auto';
    localStorage.setItem('hasSeenIntro', 'true');
  };

  const handleVideoEnd = () => {
    finishIntro();
  };

  const handleSkip = () => {
    videoRef.current?.pause();
    finishIntro();
  };

  const handleReplayIntro = () => {
    localStorage.removeItem('hasSeenIntro');
    setShowIntro(true);
    setVideoEnded(false);
    document.body.style.overflow = 'hidden';
    videoRef.current?.play();
  };

  return (
    <>
      {!showIntro && (
        <div className="fixed top-[0.75rem] right-[4rem] z-40 flex justify-end lg:top-[1.6%] lg:right-[5vw]">
          <Button
            onClick={handleReplayIntro}
            variant="outline"
            className="px-[1.2vw] py-[0.5vw] lg:text-[0.9vw] 2xl:py-[1vw] 2xl:text-[1vw]"
          >
            Ver introducción
          </Button>
        </div>
      )}
      {showIntro && (
        <div
          className={`fixed inset-0 z-50 bg-black transition-opacity duration-700 ${
            videoEnded ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
        >
          <motion.video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <source src={`${BASE_URL}videos/elite.mp4`} type="video/mp4" />
          </motion.video>

          <div className="absolute right-6 bottom-6 z-50">
            <Button
              variant="secondary"
              onClick={handleSkip}
              className="bg-black/60 text-white hover:bg-black/70 2xl:p-[1vw] 2xl:text-[1.5vw]"
            >
              Saltar introducción
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
