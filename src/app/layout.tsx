import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import ClientShell from '@/components/ClientShell';

/* ─── Fonts ─── */
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

/* ─── Global Metadata ─── */
export const metadata: Metadata = {
  title: {
    default: 'NeuroCarolina Traslaviña — Neuropsicología con enfoque humano',
    template: '%s | NeuroCarolina',
  },
  description:
    'Acompañamiento neuropsicológico con enfoque humano, clínico y personalizado. Evaluación, rehabilitación y estimulación cognitiva.',
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: 'NeuroCarolina Traslaviña',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="relative min-h-screen font-sans text-ink">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
