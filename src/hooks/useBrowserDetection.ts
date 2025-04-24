// hooks/useBrowserDetection.ts
import { useEffect, useState } from 'react';

export const useBrowserDetection = () => {
  const [isSafari, setIsSafari] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    setIsSafari(/^((?!chrome|android).)*safari/i.test(ua));
    setIsIOS(/iPad|iPhone|iPod/.test(ua));
  }, []);

  return { isSafari, isIOS };
};
