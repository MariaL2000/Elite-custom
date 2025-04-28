import { forwardRef, useState } from 'react';

const LazyImage = forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ onLoad, style, ...props }, ref) => {
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
          ...style,
        }}
        {...props}
      />
    );
  }
);
export default LazyImage;
