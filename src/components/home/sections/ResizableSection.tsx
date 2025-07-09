import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Skeleton } from '@/components/ui/skeleton';
import { useBrowserDetection } from '@/hooks/useBrowserDetection';
import { useData } from '@/context/DataContext';
import { ArrowRightIcon } from 'lucide-react';

// Componente de imagen diferido
const LazyImage = lazy(() => import('@/components/ui/LazyImage'));

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
        'https://images.unsplash.com/photo-1677015030639-ffb7bbe68acb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Modern Kitchen Design',
      description: 'Elegant countertops with premium materials',
    },
    {
      image:
        imagesResizable.bathroom ??
        'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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

  if (!isClient) {
    return null;
  }

  // Estilos específicos para Safari
  const panelStyles: React.CSSProperties = isSafari
    ? {
        WebkitBackfaceVisibility: 'hidden',
        WebkitPerspective: 1000,
        willChange: 'transform',
      }
    : {};
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="my-16 w-full px-4 md:px-8 xl:px-[1vw]"
      style={panelStyles}
    >
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl xl:text-[2.5vw] dark:from-slate-200 dark:to-slate-400"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 1px 2px rgba(15, 23, 42, 0.15)',
          }}
        >
          Compare Our Stunning Designs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto max-w-md text-slate-600 md:text-lg xl:max-w-[40vw] xl:text-[1.1vw] dark:text-slate-300"
          style={{
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          Drag the divider to explore and compare our beautiful designs. Each side showcases our
          premium craftsmanship and attention to detail.
        </motion.p>
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
        style={panelStyles}
      >
        <ResizablePanelGroup
          direction="horizontal"
          className="h-[70vh] max-h-[70vh] w-full overflow-hidden rounded-xl border shadow-2xl"
        >
          {panels.map((panel, index) => (
            <>
              {index > 0 && (
                <ResizableHandle className="group">
                  <div className="relative h-full w-2 bg-gradient-to-b from-slate-200 to-slate-300 transition-colors duration-300 group-hover:from-blue-200 group-hover:to-indigo-300">
                    <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-600 transition-colors duration-300 group-hover:text-indigo-600"
                      >
                        <path d="M18 8L22 12L18 16"></path>
                        <path d="M6 8L2 12L6 16"></path>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                      </svg>
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
                      className={`aspect-auto size-full object-cover transition-transform duration-700 ${activePanel === index ? 'scale-105' : 'scale-100'}`}
                      style={panelStyles}
                    />
                  </Suspense>
                  {!loadedImages[index] && (
                    <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

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
                    <div className="mb-3 h-1 w-16 bg-white/70 xl:w-[4vw]"></div>
                    <p className="text-white/90 md:text-lg xl:text-[1.1vw]">{panel.description}</p>
                  </motion.div>
                </div>
              </ResizablePanel>
            </>
          ))}
        </ResizablePanelGroup>

        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 transform">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-slate-600 shadow-lg md:text-base xl:px-[1vw] xl:py-[0.5vh] xl:text-[0.9vw]"
          >
            <ArrowRightIcon className="size-4 xl:size-[1vw]" />
            Drag to compare
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
