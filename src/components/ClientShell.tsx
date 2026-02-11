'use client';

import dynamic from 'next/dynamic';
import ErrorBoundary from './ErrorBoundary';
import LenisProvider from '@/lib/LenisProvider';
import SplashScreen from './SplashScreen';

const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });
const BookingModal = dynamic(() => import('./BookingModal'), { ssr: false });

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <SplashScreen>
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BookingModal />
        </LenisProvider>
      </SplashScreen>
    </ErrorBoundary>
  );
}
