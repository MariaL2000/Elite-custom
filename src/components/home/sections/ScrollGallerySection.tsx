import { lazy, Suspense, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollGallery } from '@/hooks/useScrollGallery';
import { useBrowserDetection } from '@/hooks/useBrowserDetection';
import { Skeleton } from '@/components/ui/skeleton';
import { useData } from '@/context/DataContext';
import { galleryItems } from '@/datas/gallery';

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

  // Estilos específicos para iOS/Safari
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
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${items.length * 100}vh`, ...safariStyles }}
    >
      <div
        ref={contentRef}
        className="sticky top-0 left-0 h-screen w-full overflow-hidden"
        style={safariStyles}
      >
        <div className="flex size-full flex-col md:flex-row">
          {/* Image Container - Simplificado */}
          <div
            className="relative flex h-1/2 w-full items-center md:h-full md:w-3/5"
            style={safariStyles}
          >
            {items.map((item, index) => (
              <motion.div
                key={`image-${index}`}
                className="absolute inset-0 flex items-center"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  zIndex: activeIndex === index ? 10 : 1,
                }}
                transition={{ duration: 0.7 }}
              >
                <Suspense fallback={<Skeleton className="size-full" />}>
                  <LazyImage
                    src={item?.url}
                    alt={item.alt}
                    className="size-full object-cover md:h-[80vh]"
                  />
                </Suspense>
              </motion.div>
            ))}
          </div>

          {/* Text Container */}
          <div
            className="flex w-full items-center justify-center p-6 md:h-full md:w-2/5 md:p-8"
            style={safariStyles}
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
                <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-4xl xl:mb-[1.5vw] xl:text-[1.8vw]">
                  {items[activeIndex].title}
                </h2>
                <p className="text-lg md:text-xl xl:text-[1.2vw]">
                  {items[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
