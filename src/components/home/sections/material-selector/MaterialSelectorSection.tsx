import { useState, lazy, Suspense } from 'react';
import { motion } from 'motion/react';

import { Skeleton } from '@/components/ui/skeleton';
import { useBrowserDetection } from '@/hooks/useBrowserDetection';
import { useData } from '@/context/DataContext';
import { MaterialPerView } from './MaterialPerView';
import { Material } from '@/datas/material-selector';

const LazyImage = lazy(() => import('@/components/ui/LazyImage'));

export const MaterialSelectorSection = () => {
  const { materials, loading } = useData();
  const [selectedMaterial, setSelectedMaterial] = useState<Material>(materials[0]);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const { isIOS, isSafari } = useBrowserDetection();

  const safariStyles: React.CSSProperties =
    isIOS || isSafari
      ? { WebkitBackfaceVisibility: 'hidden', WebkitPerspective: 1000, willChange: 'transform' }
      : {};

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
    if (id.startsWith('main-')) {
      const materialId = id.replace('main-', '');
      const loaded = materials.find(m => m.id === materialId);
      if (loaded && loaded.id !== selectedMaterial.id) {
        setSelectedMaterial(loaded);
      }
    }
  };

  return (
    <section className="relative w-full py-12 md:py-16 xl:py-[8vh]" style={safariStyles}>
      <div className="mx-auto w-full px-6 md:px-6 xl:px-[2vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
          style={safariStyles}
        >
          <h2 className="text-3xl font-bold md:text-4xl xl:text-[2.5vw]">
            Choose Your Perfect Material
          </h2>
          <div
            className="mx-auto my-4 h-1 w-24 md:mb-6 xl:mb-[1vh] xl:h-[0.2vh] xl:w-[6vw]"
            style={{
              background: isIOS
                ? 'linear-gradient(to right, #6366f1, #0d9488, #6366f1)'
                : 'linear-gradient(to right, #6366f1, #0d9488, #6366f1)',
            }}
          />
          <p className="mx-auto max-w-md md:text-lg xl:max-w-[30vw] xl:text-[1.1vw]">
            Select from our premium materials to find the perfect match for your space
          </p>
        </motion.div>

        <div className="flex gap-8 lg:flex-row lg:justify-center xl:gap-[3vw]">
          {/* Material list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/4 xl:w-[25vw]"
            style={safariStyles}
          >
            <p className="mb-4 text-lg font-medium xl:text-[1.3vw]">Select a material:</p>
            <div className="grid grid-cols-2 gap-4 xl:gap-[1vw]">
              {materials.map(material => {
                const isSelected = material.id === selectedMaterial.id;
                return (
                  <motion.button
                    key={material.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedMaterial(material)}
                    className={`group flex flex-col items-center gap-2 rounded-xl p-3 transition-all ${
                      isSelected ? 'bg-gray-800/50 text-slate-100' : 'hover:bg-gray-800/30'
                    }`}
                    style={safariStyles}
                  >
                    <motion.div
                      className={`relative size-20 overflow-hidden rounded-full border-2 md:h-24 md:w-24 xl:size-[10vw] ${
                        isSelected
                          ? 'border-indigo-400'
                          : 'border-gray-600 group-hover:border-gray-400'
                      }`}
                    >
                      <Suspense fallback={<Skeleton className="size-full rounded-xl" />}>
                        <LazyImage
                          src={material.thumbnail}
                          alt={material.name}
                          className="h-full w-full object-cover"
                          onLoad={() => handleImageLoad(`thumb-${material.id}`)}
                          style={safariStyles}
                        />
                      </Suspense>
                      {isSelected && (
                        <motion.div
                          className="absolute inset-0 bg-indigo-400/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                    <span className="text-center text-sm font-medium md:text-base xl:text-[1.1vw]">
                      {material.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Preview */}
          {loading ? (
            <Skeleton className="h-64 w-full md:h-80 lg:h-96 xl:h-[40vh]" />
          ) : (
            <MaterialPerView
              safariStyles={safariStyles}
              selectedMaterial={selectedMaterial}
              handleImageLoad={handleImageLoad}
              loadedImages={loadedImages}
            />
          )}
        </div>
      </div>
    </section>
  );
};
