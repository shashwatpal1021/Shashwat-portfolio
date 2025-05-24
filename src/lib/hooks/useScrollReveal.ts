import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
}: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  
  useEffect(() => {
    const node = ref?.current;
    if (!node) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('animate-in');
            if (once) {
              observer.unobserve(node);
            }
          } else if (!once) {
            node.classList.remove('animate-in');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    observer.observe(node);
    
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);
  
  return ref;
}