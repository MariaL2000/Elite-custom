import { motion } from 'motion/react';
import { useState, lazy, Suspense } from 'react';
import { Material, materials } from '../../datas/material-selector';
import { Skeleton } from '@/components/ui/skeleton';
import { useBrowserDetection } from '@/hooks/useBrowserDetection';

// Componente de imagen diferido
const LazyImage = lazy(() => import('@/components/ui/LazyImage'));

export const MaterialSelectorSection = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<Material>(materials[0]);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const { isIOS, isSafari } = useBrowserDetection();

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  // Estilos específicos para iOS/Safari
  const safariStyles: React.CSSProperties =
    isIOS || isSafari
      ? {
          WebkitBackfaceVisibility: 'hidden',
          WebkitPerspective: 1000,
          willChange: 'transform',
        }
      : {};

  return (
    <section
      className="relative w-full bg-gray-950 py-12 md:py-16 xl:py-[8vh]"
      style={safariStyles}
    >
      <div className="container mx-auto px-4 md:px-6 xl:px-[2vw]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16 xl:mb-[4vh]"
          style={safariStyles}
        >
          <h2 className="font-satisfy text-3xl font-bold md:text-4xl xl:text-[2.5vw]">
            <span className="bg-gradient-to-r from-indigo-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
              Choose Your Perfect Material
            </span>
          </h2>
          <div
            className="mx-auto mb-4 h-1 w-24 bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500 md:mb-6 xl:mb-[1vh] xl:h-[0.2vh] xl:w-[6vw]"
            style={
              isIOS ? { background: 'linear-gradient(to right, #6366f1, #0d9488, #6366f1)' } : {}
            }
          />
          <p className="mx-auto max-w-md text-gray-300 md:text-lg xl:max-w-[30vw] xl:text-[1.1vw]">
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
            <div className="mb-6 text-lg font-medium text-gray-100 xl:mb-[1.5vh] xl:text-[1.3vw]">
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
                    selectedMaterial.id === material.id ? 'bg-gray-800/50' : 'hover:bg-gray-800/30'
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
                    <Suspense fallback={<Skeleton className="h-full w-full rounded-full" />}>
                      <LazyImage
                        src={material.thumbnail}
                        alt={material.name}
                        className="h-full w-full object-cover"
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
                  <span className="text-sm font-medium text-gray-100 md:text-base xl:text-[1.1vw]">
                    {material.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Material Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-3/4 xl:w-[72vw]"
            style={safariStyles}
          >
            <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-900/50 shadow-xl backdrop-blur-sm">
              <Suspense fallback={<Skeleton className="h-64 w-full md:h-80 lg:h-96 xl:h-[40vh]" />}>
                <LazyImage
                  key={selectedMaterial.image}
                  src={selectedMaterial.image}
                  alt={selectedMaterial.name}
                  className="h-64 w-full object-cover md:h-80 lg:h-96 xl:h-[40vh]"
                  onLoad={() => handleImageLoad(`main-${selectedMaterial.id}`)}
                  style={{
                    opacity: loadedImages[`main-${selectedMaterial.id}`] ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    ...safariStyles,
                  }}
                />
              </Suspense>

              {!loadedImages[`main-${selectedMaterial.id}`] && (
                <Skeleton className="absolute inset-0 h-full w-full" />
              )}

              <motion.div
                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white md:p-8 xl:p-[1.5vw]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={safariStyles}
              >
                <h3 className="text-2xl font-bold md:text-3xl xl:text-[1.8vw]">
                  {selectedMaterial.name}
                </h3>
                <p className="mt-2 text-gray-300 md:mt-3 md:text-lg xl:mt-[0.5vw] xl:text-[1.1vw]">
                  {selectedMaterial.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
