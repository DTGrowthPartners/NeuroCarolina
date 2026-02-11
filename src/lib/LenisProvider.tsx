'use client';

import { useEffect } from 'react';

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) return;

    let destroyed = false;

    import('lenis').then(({ default: Lenis }) => {
      if (destroyed) return;

      const lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        if (destroyed) return;
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Store for cleanup
      (window as any).__lenis = lenis;
    }).catch(() => {
      // Lenis failed to load — graceful degradation, native scroll
    });

    return () => {
      destroyed = true;
      if ((window as any).__lenis) {
        (window as any).__lenis.destroy();
        delete (window as any).__lenis;
      }
    };
  }, []);

  return <>{children}</>;
}
