import { Suspense, useState } from 'react';
import { Skeleton } from './skeleton';
import LazyImage from './LazyImage';
import { motion } from 'motion/react';
// import { Card } from './card';

interface AspectRatioImageProps {
  src: string;
  alt?: string;
  className?: string;
  aspectRatio?: string; // ej: "16/9", "4/3", "1/1"
  cardClassName?: string;
  skeletonClassName?: string;
  onLoad?: () => void;
  [key: string]: any;
}

export const AspectRatioImage = ({
  src,
  alt = '',
  className = '',
  aspectRatio = '16/9',
  cardClassName = '',
  skeletonClassName = '',
  onLoad,
  ...props
}: AspectRatioImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div className={`aspect-[${aspectRatio}] max-h-[90vh] w-full`}>
      <motion.div
        className={`relative h-full w-full overflow-hidden ${cardClassName} rounded-xl shadow-lg xl:rounded-[1vw]`}
      >
        {!imageLoaded && (
          <Skeleton className={`absolute inset-0 h-full w-full rounded-xl ${skeletonClassName}`} />
        )}
        <Suspense fallback={<Skeleton className="h-full w-full rounded-xl" />}>
          <LazyImage
            src={src}
            alt={alt}
            className={`${className} object-contain`}
            onLoad={handleImageLoad}
            style={{
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
            {...props}
          />
        </Suspense>
      </motion.div>
    </div>
  );
};
