import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { type Material } from '@/datas/material-selector';

const LazyImage = lazy(() => import('@/components/ui/LazyImage'));

interface Props {
  safariStyles: React.CSSProperties;
  selectedMaterial: Material;
  handleImageLoad: (id: string) => void;
  loadedImages: Record<string, boolean>;
}

export const MaterialPerView = ({
  safariStyles,
  selectedMaterial,
  handleImageLoad,
  loadedImages,
}: Props) => {
  const imageId = `main-${selectedMaterial.id}`;
  const isLoaded = loadedImages[imageId];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="w-[98%] lg:w-3/4 lg:p-0 xl:w-[60vw]"
      style={safariStyles}
    >
      <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-900/50 shadow-xl backdrop-blur-sm">
        <Suspense fallback={<Skeleton className="h-64 w-full md:h-80 lg:h-[60vh]" />}>
          <LazyImage
            key={selectedMaterial.image}
            src={selectedMaterial.image ?? 'https://via.placeholder.com/500/cccccc/808080.png'}
            alt={selectedMaterial.name}
            onLoad={() => handleImageLoad(imageId)}
            className="h-64 w-full object-cover md:h-80 lg:h-[60vh]"
            style={{
              ...safariStyles,
            }}
          />
        </Suspense>

        {!isLoaded && <Skeleton className="absolute inset-0 size-full" />}

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
  );
};
