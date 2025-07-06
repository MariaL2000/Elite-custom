import { forwardRef, useState } from 'react';
import { Skeleton } from './skeleton'; // Asegúrate de que esta ruta sea correcta

const LazyImage = forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ onLoad, className = '', style, ...props }, ref) => {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true);
      if (onLoad) onLoad(e);
    };

    return (
      <div className={`relative ${className}`} style={style}>
        {!loaded && <Skeleton className="absolute inset-0 size-full animate-pulse" />}
        <img
          ref={ref}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      </div>
    );
  }
);

LazyImage.displayName = 'LazyImage';

export default LazyImage;
