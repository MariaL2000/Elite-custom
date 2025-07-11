import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Skeleton } from '@/components/ui/skeleton';
import { useBrowserDetection } from '@/hooks/useBrowserDetection';
import { useData } from '@/context/DataContext';
import { ArrowRightIcon } from 'lucide-react';

// Lazy load de imagen
const LazyImage = lazy(() => import('@/components/ui/LazyImage'));

// Variants para animación escalonada
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const panelVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const ResizableSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);
  const { isSafari } = useBrowserDetection();
  const { imagesResizable } = useData();

  const panels = [
    {
      image:
        imagesResizable.kitchen ??
        'https://images.unsplash.com/photo-1677015030639-ffb7bbe68acb?q=80&w=1470&auto=format&fit=crop',
      title: 'Modern Kitchen Design',
      description: 'Elegant countertops with premium materials',
    },
    {
      image:
        imagesResizable.bathroom ??
        'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1587&auto=format&fit=crop',
      title: 'Luxury Bathroom',
      description: 'Sophisticated marble finishes',
    },
  ];

  useEffect(() => {
    setIsClient(true);
    setLoadedImages(new Array(panels.length).fill(false));
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  if (!isClient) return null;

  const safariFixStyles: React.CSSProperties = isSafari
    ? {
        WebkitBackfaceVisibility: 'hidden',
        WebkitPerspective: 1000,
        willChange: 'transform',
      }
    : {};

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.3 }}
      className="my-16 w-full px-4 md:px-8 xl:px-[1vw]"
      style={safariFixStyles}
    >
      <div className="mb-12 text-center">
        <motion.h2
          variants={panelVariants}
          transition={{ duration: 0.6 }}
          className="mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl xl:text-[2.5vw]"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 1px 2px rgba(15, 23, 42, 0.15)',
          }}
        >
          Compare Our Stunning Designs
        </motion.h2>

        <motion.p
          variants={panelVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-md text-slate-600 md:text-lg xl:max-w-[40vw] xl:text-[1.1vw]"
          style={{ WebkitFontSmoothing: 'antialiased' }}
        >
          Drag the divider to explore and compare our beautiful designs. Each side showcases our
          premium craftsmanship and attention to detail.
        </motion.p>
      </div>

      <motion.div variants={panelVariants} transition={{ duration: 0.6 }} className="relative">
        <ResizablePanelGroup
          direction="horizontal"
          className="h-[70vh] max-h-[70vh] w-full overflow-hidden rounded-xl border shadow-2xl"
        >
          {panels.map((panel, index) => (
            <motion.div key={index} variants={panelVariants} className="contents">
              {index > 0 && (
                <ResizableHandle className="group">
                  <div className="relative h-full w-2 bg-gradient-to-b from-slate-200 to-slate-300 transition-colors duration-300 group-hover:from-blue-200 group-hover:to-indigo-300">
                    <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 group-hover:scale-110">
                      <ArrowRightIcon className="text-slate-600 group-hover:text-indigo-600" />
                    </div>
                  </div>
                </ResizableHandle>
              )}
              <ResizablePanel
                defaultSize={100 / panels.length}
                minSize={20}
                onMouseEnter={() => setActivePanel(index)}
                onMouseLeave={() => setActivePanel(null)}
                className="group relative"
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Suspense fallback={<Skeleton className="h-full w-full rounded-none" />}>
                    <LazyImage
                      src={panel.image}
                      alt={panel.title}
                      onLoad={() => handleImageLoad(index)}
                      className={`aspect-auto size-full object-cover transition-transform duration-700 ${
                        activePanel === index ? 'scale-105' : 'scale-100'
                      }`}
                      style={safariFixStyles}
                    />
                  </Suspense>

                  {!loadedImages[index] && (
                    <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: activePanel === index ? 1 : 0,
                      y: activePanel === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute right-0 bottom-0 left-0 p-6 text-white md:p-8 xl:p-[1.5vw]"
                  >
                    <h3 className="mb-2 text-2xl font-bold md:text-3xl xl:text-[1.8vw]">
                      {panel.title}
                    </h3>
                    <div className="mb-3 h-1 w-16 bg-white/70 xl:w-[4vw]" />
                    <p className="text-white/90 md:text-lg xl:text-[1.1vw]">{panel.description}</p>
                  </motion.div>
                </div>
              </ResizablePanel>
            </motion.div>
          ))}
        </ResizablePanelGroup>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 transform"
        >
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-slate-600 shadow-lg md:text-base xl:px-[1vw] xl:py-[0.5vh] xl:text-[0.9vw]">
            <ArrowRightIcon className="size-4 xl:size-[1vw]" />
            Drag to compare
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
