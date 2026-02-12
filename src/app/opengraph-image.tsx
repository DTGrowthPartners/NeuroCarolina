import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'NeuroCarolina Traslaviña — Neuropsicología con enfoque humano';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #5B2D8B 0%, #3D1A5E 100%)',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: '72px',
            fontWeight: 700,
            color: 'white',
            letterSpacing: '-1px',
          }}
        >
          NeuroCarolina
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '36px',
            fontWeight: 400,
            color: 'white',
            marginTop: '8px',
          }}
        >
          Traslaviña
        </div>
        <div
          style={{
            display: 'flex',
            width: '80px',
            height: '3px',
            background: '#E8C7E8',
            borderRadius: '4px',
            marginTop: '32px',
            marginBottom: '32px',
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: '24px',
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}
        >
          Neuropsicología con enfoque humano
        </div>
      </div>
    ),
    { ...size },
  );
}
