import { forwardRef } from 'react';
import { Skeleton } from './skeleton';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  isLoaded: boolean;
}

const LazyImage = forwardRef<HTMLImageElement, LazyImageProps>(
  ({ onLoad, className = '', style, isLoaded, ...props }, ref) => {
    return (
      <div className={`relative ${className}`} style={style}>
        {!isLoaded && <Skeleton className="absolute inset-0 size-full animate-pulse" />}
        <img
          ref={ref}
          loading="lazy"
          decoding="async"
          onLoad={onLoad}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      </div>
    );
  }
);

LazyImage.displayName = 'LazyImage';

export default LazyImage;
