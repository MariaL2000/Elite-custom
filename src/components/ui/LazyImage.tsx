import { forwardRef, useState } from 'react';

interface LazyImageProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
  [key: string]: any;
}

const LazyImage = forwardRef<HTMLImageElement, LazyImageProps>(({ onLoad, ...props }, ref) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setLoaded(true);
    if (onLoad) onLoad(e);
  };

  return (
    <img
      ref={ref}
      loading="lazy"
      decoding="async"
      onLoad={handleLoad}
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        ...props.style,
      }}
      {...props}
    />
  );
});

export default LazyImage;
