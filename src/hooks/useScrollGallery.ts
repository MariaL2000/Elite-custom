import { GalleryItem } from '@/types/gallery.type';
import { useState, useEffect, useRef } from 'react';

interface UseScrollGalleryProps {
  items: GalleryItem[];
  transitionDuration?: number; // Duration in seconds
}
// useScrollGallery.ts
export const useScrollGallery = <T extends HTMLElement, C extends HTMLElement>({
  items,
}: UseScrollGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<T>(null);
  const contentRef = useRef<C>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const { top, height } = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calcula el progreso del scroll (0 a 1)
      const scrollProgress = Math.max(0, Math.min(1, -top / (height - viewportHeight)));

      // Calcula el índice basado en el progreso
      const newIndex = Math.min(Math.floor(scrollProgress * items.length), items.length - 1);

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items.length, activeIndex]);

  return {
    activeIndex,
    sectionRef,
    contentRef,
  };
};
