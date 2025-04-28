import { useState, useEffect } from 'react';

const useWindowScreen = (breakpoint = 4000): boolean => {
  const [isSuperWide, setIsSuperWide] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkWidth = () => {
      setIsSuperWide(window.innerWidth > breakpoint);
    };

    // Verificación inicial
    checkWidth();

    // Usando ResizeObserver para mejor performance
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        setIsSuperWide(width > breakpoint);
      }
    });

    observer.observe(document.documentElement);

    // Fallback para navegadores antiguos
    const resizeListener = () => checkWidth();
    window.addEventListener('resize', resizeListener);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resizeListener);
    };
  }, [breakpoint]);

  return isSuperWide;
};

export default useWindowScreen;
