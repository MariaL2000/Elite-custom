import { motion } from 'motion/react';
import { lazy, Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';

interface Props {
  images: string[];
  sectionTitle: string | undefined;
}
const LazyImage = lazy(() => import('@/components/ui/LazyImage'));
export const GalleryGrid = ({ images, sectionTitle }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:gap-[1vw]">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg xl:rounded-[1vw]"
        >
          <Suspense
            fallback={
              <Skeleton className="dark:to-700/50 size-ful absolute inset-0 animate-pulse rounded-lg dark:from-slate-700/50 dark:via-slate-600/50" />
            }
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)',
              }}
              transition={{ duration: 0.3 }}
              className="size-full"
            >
              <LazyImage
                src={image}
                alt={`${sectionTitle} ${index + 1}`}
                className="size-full object-cover"
                style={{
                  opacity: 0,
                  transition: 'opacity 0.5s ease-in-out',
                }}
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.style.opacity = '1';
                }}
              />
            </motion.div>
          </Suspense>
        </motion.div>
      ))}
    </div>
  );
};
