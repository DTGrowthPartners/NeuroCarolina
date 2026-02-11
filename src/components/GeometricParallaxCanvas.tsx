'use client';

import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FLOAT_SPEED } from '@/lib/constants';

/* ───────────────────────────────────────────────
   Figuras flotando y girando sin movimiento del mouse.
   ─────────────────────────────────────────────── */

interface ShapeCfg {
  pos: [number, number, number];
  color: string;
  scale: number;
  geo: 'sphere' | 'torus' | 'octa' | 'ring';
  /** Each shape gets a unique phase offset so they don't move in sync. */
  phase: number;
  floatAmp: number;
}

const SHAPES: ShapeCfg[] = [
  { pos: [-4.5, 2.5, -1], color: '#9B7EDC', scale: 0.8, geo: 'sphere', phase: 0, floatAmp: 0.6 },
  { pos: [-3.2, 1.4, -1], color: '#E8C7E8', scale: 0.65, geo: 'torus', phase: 0.3, floatAmp: 0.5 },
  { pos: [-1.5, 3, -0.8], color: '#9B7EDC', scale: 0.5, geo: 'octa', phase: 0.6, floatAmp: 0.4 },
  { pos: [0, 2.2, -1.2], color: '#E8C7E8', scale: 0.7, geo: 'ring', phase: 0.9, floatAmp: 0.55 },
  { pos: [1.5, 3.2, -0.6], color: '#9B7EDC', scale: 0.45, geo: 'sphere', phase: 1.2, floatAmp: 0.5 },
  { pos: [3, 2.5, -1], color: '#E8C7E8', scale: 0.75, geo: 'torus', phase: 1.5, floatAmp: 0.6 },
  { pos: [4.2, 1.2, -1.3], color: '#9B7EDC', scale: 0.55, geo: 'octa', phase: 1.8, floatAmp: 0.45 },
  { pos: [-4, -0.5, -1.5], color: '#E8C7E8', scale: 0.6, geo: 'ring', phase: 2.1, floatAmp: 0.5 },
  { pos: [-2.5, -1.2, -0.8], color: '#9B7EDC', scale: 0.8, geo: 'sphere', phase: 2.4, floatAmp: 0.6 },
  { pos: [-1, 0.5, -1], color: '#E8C7E8', scale: 0.5, geo: 'torus', phase: 2.7, floatAmp: 0.45 },
  { pos: [0.5, -1.5, -1.2], color: '#9B7EDC', scale: 0.65, geo: 'octa', phase: 3.0, floatAmp: 0.55 },
  { pos: [2, 0, -0.9], color: '#E8C7E8', scale: 0.7, geo: 'ring', phase: 3.3, floatAmp: 0.5 },
  { pos: [3.5, -0.8, -1.1], color: '#9B7EDC', scale: 0.55, geo: 'sphere', phase: 3.6, floatAmp: 0.6 },
  { pos: [4.5, -1.5, -0.7], color: '#E8C7E8', scale: 0.6, geo: 'torus', phase: 3.9, floatAmp: 0.45 },
  { pos: [-3.5, -2.5, -1], color: '#9B7EDC', scale: 0.7, geo: 'octa', phase: 4.2, floatAmp: 0.55 },
  { pos: [-2, -3, -0.8], color: '#E8C7E8', scale: 0.5, geo: 'ring', phase: 4.5, floatAmp: 0.5 },
  { pos: [-0.5, -2.8, -1.3], color: '#9B7EDC', scale: 0.65, geo: 'sphere', phase: 4.8, floatAmp: 0.6 },
  { pos: [1, -3.2, -1], color: '#E8C7E8', scale: 0.55, geo: 'torus', phase: 5.1, floatAmp: 0.5 },
  { pos: [2.5, -2.5, -0.9], color: '#9B7EDC', scale: 0.7, geo: 'octa', phase: 5.4, floatAmp: 0.55 },
  { pos: [4, -3, -1.2], color: '#E8C7E8', scale: 0.6, geo: 'ring', phase: 5.7, floatAmp: 0.6 },
];

function Shape({ cfg }: { cfg: ShapeCfg }) {
  const ref = useRef<THREE.Mesh>(null!);

  const mat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.22,
        roughness: 0.8,
        metalness: 0.05,
      }),
    [cfg.color],
  );

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();

    // ── Floating (time-based, always runs) ──
    const speed = FLOAT_SPEED * 0.8;
    const floatY = Math.sin(t * speed + cfg.phase) * cfg.floatAmp;
    const floatX = Math.cos(t * speed * 0.6 + cfg.phase) * cfg.floatAmp * 0.4;

    ref.current.position.x = cfg.pos[0] + floatX;
    ref.current.position.y = cfg.pos[1] + floatY;
    ref.current.position.z = cfg.pos[2];

    // ── Gentle rotation ──
    ref.current.rotation.x = t * 0.08;
    ref.current.rotation.y = t * 0.1;
  });

  const geometry = useMemo(() => {
    switch (cfg.geo) {
      case 'sphere':
        return new THREE.SphereGeometry(1, 32, 32);
      case 'torus':
        return new THREE.TorusGeometry(1, 0.35, 16, 48);
      case 'octa':
        return new THREE.OctahedronGeometry(1, 0);
      case 'ring':
        return new THREE.TorusGeometry(1, 0.08, 16, 48);
    }
  }, [cfg.geo]);

  return (
    <mesh
      ref={ref}
      position={cfg.pos}
      scale={cfg.scale}
      geometry={geometry}
      material={mat}
    />
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      {SHAPES.map((cfg, i) => (
        <Shape key={i} cfg={cfg} />
      ))}
    </>
  );
}

export default function GeometricParallaxCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full" aria-hidden="true">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
          style={{ background: 'transparent', width: '100%', height: '100%' }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
