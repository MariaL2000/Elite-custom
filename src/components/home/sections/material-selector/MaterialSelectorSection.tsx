import { motion } from 'motion/react';
import { useState, lazy, Suspense } from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { useBrowserDetection } from '@/hooks/useBrowserDetection';
import { MaterialPerView } from './MaterialPerView';
import { Material } from '@/datas/material-selector';
import { useData } from '@/context/DataContext';

// Componente de imagen diferido
const LazyImage = lazy(() => import('@/components/ui/LazyImage'));

export const MaterialSelectorSection = () => {
  const { materials } = useData();
  const [selectedMaterial, setSelectedMaterial] = useState<Material>(materials[0]);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const { isIOS, isSafari } = useBrowserDetection();

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const safariStyles: React.CSSProperties =
    isIOS || isSafari
      ? {
          WebkitBackfaceVisibility: 'hidden',
          WebkitPerspective: 1000,
          willChange: 'transform',
        }
      : {};

  return (
    <section className="relative w-full py-12 md:py-16 xl:py-[8vh]" style={safariStyles}>
      <div className="mx-auto w-full px-4 md:px-6 xl:px-[2vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16 xl:mb-[4vh]"
          style={safariStyles}
        >
          <h2 className="text-3xl font-bold md:text-4xl xl:text-[2.5vw]">
            Choose Your Perfect Material
          </h2>
          <div
            className="mx-auto mb-4 h-1 w-24 bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500 md:mb-6 xl:mb-[1vh] xl:h-[0.2vh] xl:w-[6vw]"
            style={
              isIOS ? { background: 'linear-gradient(to right, #6366f1, #0d9488, #6366f1)' } : {}
            }
          />
          <p className="mx-auto max-w-md md:text-lg xl:max-w-[30vw] xl:text-[1.1vw]">
            Select from our premium materials to find the perfect match for your space
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-[3vw]">
          {/* Material Selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/4 xl:w-[25vw]"
            style={safariStyles}
          >
            <div className="mb-6 text-lg font-medium xl:mb-[1.5vh] xl:text-[1.3vw]">
              <p>Select a material:</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4 lg:flex-col lg:items-start lg:justify-start xl:gap-[1vw]">
              {materials.map(material => (
                <motion.button
                  key={material.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedMaterial(material)}
                  className={`group relative flex items-center gap-3 rounded-full p-2 transition-all md:gap-4 xl:gap-[1vw] xl:p-[0.5vw] ${
                    selectedMaterial.id === material.id
                      ? 'bg-gray-800/50 text-slate-100'
                      : 'hover:bg-gray-800/30'
                  }`}
                  style={safariStyles}
                >
                  <motion.div
                    className={`relative h-14 w-14 overflow-hidden rounded-full border-2 transition-all md:h-16 md:w-16 xl:h-[4vw] xl:w-[4vw] ${
                      selectedMaterial.id === material.id
                        ? 'border-indigo-400'
                        : 'border-gray-600 group-hover:border-gray-400'
                    }`}
                  >
                    <Suspense fallback={<Skeleton className="size-full rounded-full" />}>
                      <LazyImage
                        src={material.thumbnail}
                        alt={material.name}
                        className="size-full object-cover"
                        onLoad={() => handleImageLoad(`thumb-${material.id}`)}
                        style={safariStyles}
                      />
                    </Suspense>
                    {selectedMaterial.id === material.id && (
                      <motion.div
                        className="absolute inset-0 bg-indigo-400/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                  <span className="text-sm font-medium md:text-base xl:text-[1.1vw]">
                    {material.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Material Preview */}
          <MaterialPerView
            handleImageLoad={handleImageLoad}
            loadedImages={loadedImages}
            safariStyles={safariStyles}
            selectedMaterial={selectedMaterial}
          />
        </div>
      </div>
    </section>
  );
};
