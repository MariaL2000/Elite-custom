import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Pause, Play } from 'lucide-react';
import { BASE_URL } from '@/config';

interface TextItem {
  id: number;
  title: string;
  description: string;
}

export const VideoScrollSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const textItems: TextItem[] = [
    { id: 1, title: 'First Message', description: 'Discover the beginning of our story.' },
    { id: 2, title: 'Second Message', description: 'Exploring new possibilities together.' },
    { id: 3, title: 'Third Message', description: 'Innovation in every detail.' },
    { id: 4, title: 'Fourth Message', description: 'Building the future today.' },
    { id: 5, title: 'Fifth Message', description: 'Excellence in every project.' },
  ];

  useEffect(() => {
    if (!isMobile && sectionRef.current) {
      const handleScroll = () => {
        const section = sectionRef.current;
        if (!section) return;

        const { top, height } = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const scrollProgress = Math.max(0, Math.min(1, -top / (height - viewportHeight)));
        const textIndex = Math.min(
          Math.floor(scrollProgress * textItems.length),
          textItems.length - 1
        );

        setActiveTextIndex(textIndex);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile, textItems.length]);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(error => {
        console.error('Error al reproducir el video:', error);
        if (typeof videoRef.current?.play === 'function') {
          videoRef.current.play();
        }
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div
      ref={sectionRef}
      className="relative hidden w-full shadow-xl lg:block"
      style={{ height: isMobile ? 'auto' : `${textItems.length * 100}vh` }}
    >
      {/* Video Container */}
      <div className={`sticky top-0 h-screen w-full ${isMobile ? 'relative' : ''}`}>
        {/* Skeleton Loader */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
            <div className="h-20 w-20 animate-spin rounded-full border-4 border-white/30 border-t-white" />
          </div>
        )}

        {/* Video */}
        <video
          key={window.location.pathname}
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={handleVideoLoaded}
        >
          <source src={`${BASE_URL}videos/elite.mp4`} type="video/mp4" />
        </video>

        {/* Video Controls */}
        {!isLoading && (
          <Button
            variant="outline"
            size="icon"
            onClick={toggleVideo}
            className="absolute right-6 bottom-6 z-20 h-12 w-12 rounded-full border-2 bg-black/30 transition-colors duration-300 hover:bg-black/40 md:h-14 md:w-14 xl:h-16 xl:w-16"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 text-white md:h-7 md:w-7 xl:h-8 xl:w-8" />
            ) : (
              <Play className="h-6 w-6 text-white md:h-7 md:w-7 xl:h-8 xl:w-8" />
            )}
          </Button>
        )}

        {/* Text content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            {isMobile ? (
              <div className="space-y-16 py-16">
                {textItems.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="py-8"
                  >
                    <h3 className="mb-4 text-3xl font-bold md:text-4xl xl:text-[2.5vw]">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl xl:text-[1.2vw]">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              textItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeTextIndex === index ? 1 : 0,
                    y: activeTextIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-[45%] left-[5%] flex items-center justify-center"
                >
                  <div>
                    <h3 className="mb-4 text-4xl font-bold md:text-5xl xl:text-[3vw]">
                      {item.title}
                    </h3>
                    <p className="text-xl md:text-2xl xl:text-[1.5vw]">{item.description}</p>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
