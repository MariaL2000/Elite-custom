import { lazy, Suspense, useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';
import { Skeleton } from './skeleton';

interface Props {
  image: string;
  alt: string;
}

const LazyImage = lazy(() => import('@/components/ui/LazyImage'));

export const ImageWithErrorHandling = ({ image, alt }: Props) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  if (status === 'error') {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-slate-100 p-4 dark:bg-slate-800">
        <AlertTriangle className="size-8 text-slate-500 xl:size-[3vw] dark:text-slate-400" />
        <span className="mt-2 text-center text-sm text-slate-500 xl:text-[1vw] dark:text-slate-400">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative h-full w-full"
    >
      <Suspense
        fallback={<Skeleton className="h-full w-full rounded-lg bg-slate-200 dark:bg-slate-700" />}
      >
        <LazyImage
          src={image}
          alt={alt}
          className={`h-full w-full object-cover ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transition: 'opacity 0.5s ease-in-out' }}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      </Suspense>
    </motion.div>
  );
};
