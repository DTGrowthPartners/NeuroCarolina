'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import BackgroundBlobs from './BackgroundBlobs';

const GeometricParallaxCanvas = dynamic(
  () => import('./GeometricParallaxCanvas'),
  { ssr: false, loading: () => <BackgroundBlobs /> },
);

export default function HeroBackground() {
  const [ready, setReady] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const c = document.createElement('canvas');
      const gl = c.getContext('webgl2') || c.getContext('webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }
    setReady(true);
  }, []);

  // No WebGL → permanent 2D fallback
  if (!hasWebGL) return <BackgroundBlobs />;

  // Waiting for client mount → show blobs as loading state
  if (!ready) return <BackgroundBlobs />;

  return <GeometricParallaxCanvas />;
}
