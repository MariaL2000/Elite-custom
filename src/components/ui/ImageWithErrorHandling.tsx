import { lazy, Suspense, useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Skeleton } from './skeleton';

interface Props {
  image: string;
  alt: string;
  className?: string;
}

const LazyImage = lazy(() => import('@/components/ui/LazyImage'));

export const ImageWithErrorHandling = ({ image, alt, className = '' }: Props) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  if (status === 'error') {
    return (
      <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-2xl bg-slate-100 p-4 xl:rounded-[1vw] dark:bg-slate-800">
        <AlertTriangle className="size-8 text-slate-500 xl:size-[3vw] dark:text-slate-400" />
        <span className="mt-2 text-center text-sm text-slate-500 xl:text-[1vw] dark:text-slate-400">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <Skeleton className="aspect-[4/3] w-full rounded-2xl bg-slate-200 xl:rounded-[1vw] dark:bg-slate-700" />
      }
    >
      <LazyImage
        src={image}
        alt={alt}
        className={`aspect-[4/3] w-full rounded-2xl object-cover transition-opacity duration-500 xl:rounded-[1vw] ${
          status === 'loaded' ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />
    </Suspense>
  );
};
