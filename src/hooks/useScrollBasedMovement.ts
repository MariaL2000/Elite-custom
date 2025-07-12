import { useState, useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';

interface ScrollMovementOptions {
  multiplier?: number;
  padding?: number;
  smoothness?: number; // 👈 nuevo
}

export function useScrollBasedMovement<T extends HTMLElement, C extends HTMLElement>(
  options: ScrollMovementOptions = {}
) {
  const { multiplier = 2, padding = 20, smoothness = 1 } = options;

  const [move, setMove] = useState(0);
  const targetMove = useRef(0);
  const elementRef = useRef<T>(null);
  const containerRef = useRef<C>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateTarget = () => {
      if (!elementRef.current || !containerRef.current) return;

      const element = elementRef.current.getBoundingClientRect();
      const container = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementTop = element.top;
      const maxDistance = container.height - element.height + padding;

      const visibilityProgress = Math.max(0, Math.min(1, 1 - elementTop / viewportHeight));
      const calculatedMove = visibilityProgress * maxDistance * multiplier;
      targetMove.current = Math.min(calculatedMove, maxDistance);
    };

    const unsubscribe = scrollY.on('change', updateTarget);
    updateTarget();

    let animationFrame: number;
    const animate = () => {
      setMove(prev => {
        const next = prev + (targetMove.current - prev) * smoothness;
        animationFrame = requestAnimationFrame(animate);
        return next;
      });
    };
    animate();

    return () => {
      unsubscribe();
      cancelAnimationFrame(animationFrame);
    };
  }, [scrollY, multiplier, padding, smoothness]);

  return { move, elementRef, containerRef };
}
