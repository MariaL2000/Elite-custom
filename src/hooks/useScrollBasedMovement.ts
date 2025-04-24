import { useState, useRef, useEffect } from 'react';
import { useScroll } from 'motion/react';

interface ScrollMovementOptions {
  multiplier?: number;
  padding?: number;
}

export function useScrollBasedMovement<T extends HTMLElement, C extends HTMLElement>(
  options: ScrollMovementOptions = {}
) {
  const { multiplier = 2, padding = 20 } = options;

  const [move, setMove] = useState(0);
  const elementRef = useRef<T>(null);
  const containerRef = useRef<C>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updatePosition = () => {
      if (!elementRef.current || !containerRef.current) return;

      // Get element and container position information
      const element = elementRef.current.getBoundingClientRect();
      const container = containerRef.current.getBoundingClientRect();

      // Calculate the viewport height
      const viewportHeight = window.innerHeight;

      // Calculate how much of the element is visible in the viewport
      const elementTop = element.top;

      // Calculate the maximum distance the element can move
      const maxDistance = container.height - element.height + padding;

      // Calculate visibility progress (0 when element enters viewport, 1 when it's fully visible)
      const visibilityProgress = Math.max(0, Math.min(1, 1 - elementTop / viewportHeight));

      // Calculate the target position but limit it to maxDistance
      const calculatedMove = visibilityProgress * maxDistance * multiplier;
      const limitedMove = Math.min(calculatedMove, maxDistance);

      // Set the move value based on element visibility with the limit applied
      setMove(limitedMove);
    };

    // Add scrollY as a dependency to update position when scroll changes
    const unsubscribe = scrollY.on('change', updatePosition);

    // Initial position update
    updatePosition();

    return () => unsubscribe();
  }, [scrollY, multiplier, padding]);

  return { move, elementRef, containerRef };
}
