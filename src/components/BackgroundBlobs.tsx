'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { PARALLAX_INTENSITY } from '@/lib/constants';

/**
 * 2D fallback background — used when WebGL is unavailable.
 * Renders soft, blurred blobs that respond to mouse movement.
 */

interface Blob {
  id: number;
  x: string;
  y: string;
  size: string;
  color: string;
  blur: string;
}

const BLOBS: Blob[] = [
  { id: 1, x: '15%', y: '20%', size: '280px', color: 'rgba(155,126,220,0.08)', blur: '80px' },
  { id: 2, x: '70%', y: '15%', size: '220px', color: 'rgba(232,199,232,0.1)', blur: '60px' },
  { id: 3, x: '50%', y: '60%', size: '320px', color: 'rgba(155,126,220,0.06)', blur: '100px' },
  { id: 4, x: '25%', y: '75%', size: '180px', color: 'rgba(232,199,232,0.08)', blur: '70px' },
  { id: 5, x: '80%', y: '70%', size: '240px', color: 'rgba(122,92,207,0.06)', blur: '90px' },
];

export default function BackgroundBlobs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const cx = (clientX / window.innerWidth - 0.5) * 2;
      const cy = (clientY / window.innerHeight - 0.5) * 2;

      containerRef.current.style.setProperty('--mx', `${cx * PARALLAX_INTENSITY * 30}px`);
      containerRef.current.style.setProperty('--my', `${cy * PARALLAX_INTENSITY * 30}px`);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden w-full h-full"
      aria-hidden="true"
      style={
        {
          '--mx': '0px',
          '--my': '0px',
        } as React.CSSProperties
      }
    >
      {BLOBS.map((blob) => (
        <div
          key={blob.id}
          className="absolute rounded-full transition-transform duration-[2000ms] ease-out"
          style={{
            left: blob.x,
            top: blob.y,
            width: blob.size,
            height: blob.size,
            background: blob.color,
            filter: `blur(${blob.blur})`,
            transform: 'translate(var(--mx), var(--my))',
          }}
        />
      ))}
    </div>
  );
}
