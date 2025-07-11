import { lazy, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollGallery } from '@/hooks/useScrollGallery';
import { useBrowserDetection } from '@/hooks/useBrowserDetection';
import { useData } from '@/context/DataContext';
import { galleryItems } from '@/datas/gallery';
import { Card, CardContent } from '@/components/ui/card';

const LazyImage = lazy(() => import('@/components/ui/LazyImage'));

export const ScrollGallerySection = () => {
  const { imagesCarouselWithScroll } = useData();
  const items = galleryItems.map((el, index) => ({
    ...el,
    url: imagesCarouselWithScroll[index] ?? el.url,
  }));

  const { activeIndex, sectionRef, contentRef } = useScrollGallery<HTMLDivElement, HTMLDivElement>({
    items,
    transitionDuration: 1.5,
  });

  const { isIOS, isSafari } = useBrowserDetection();
  const containerRef = useRef<HTMLDivElement>(null);

  const safariStyles: React.CSSProperties =
    isIOS || isSafari
      ? {
          WebkitBackfaceVisibility: 'hidden',
          WebkitPerspective: 1000,
          willChange: 'transform',
        }
      : {};

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = `${items.length * 100}vh`;
    }
  }, [items.length]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full bg-[rgb(var(--chocolate-martini))]/40 backdrop-blur-sm backdrop-saturate-150"
      style={{ height: `${items.length * 100}vh`, ...safariStyles }}
    >
      <div
        ref={contentRef}
        className="sticky top-0 left-0 h-screen w-full overflow-hidden"
        style={safariStyles}
      >
        <div className="flex size-full flex-col md:flex-row">
          {/* Image Container */}
          <motion.div
            className="relative flex h-1/2 w-full items-center justify-center md:h-full md:w-3/5"
            style={safariStyles}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {items.map((item, index) => (
              <motion.div
                key={`image-${index}`}
                className="absolute inset-0 flex items-center justify-center px-6"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  zIndex: activeIndex === index ? 10 : 1,
                }}
                transition={{ duration: 0.7 }}
              >
                <Card className="bg-background/80 w-full rounded-2xl py-0 shadow-2xl backdrop-blur-md transition-transform duration-500 ease-out hover:scale-[1.015]">
                  <CardContent className="h-[30vh] w-full overflow-hidden rounded-lg p-0 md:h-[80vh] 2xl:rounded-2xl">
                    <LazyImage
                      src={item?.url}
                      alt={item.alt}
                      className="size-full rounded-2xl object-contain"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Text Container */}
          <motion.div
            className="flex w-full items-center justify-center md:h-full md:w-2/5 md:p-8"
            style={safariStyles}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[90vw] md:max-w-[38vw]"
                style={safariStyles}
              >
                <h2 className="mb-4 text-4xl font-bold md:mb-6 md:text-4xl xl:mb-[1.5vw] xl:text-[1.9vw]">
                  {items[activeIndex].title}
                </h2>
                <p className="text-lg md:text-xl xl:text-[1.2vw]">
                  {items[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
