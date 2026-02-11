'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import { openBookingModal } from '@/lib/useBookingModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-strong shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/NeuroCarolina/Logo Morado.png"
              alt="NeuroCarolina Logo"
              width={150}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-purple/80 transition-colors hover:text-brand-purple"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={openBookingModal}
            className="hidden rounded-xl bg-brand-rose px-5 py-2.5 text-sm font-medium text-ink shadow-soft transition-all hover:shadow-glass hover:brightness-[1.03] hover:-translate-y-0.5 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 md:block"
          >
            Agendar cita
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative -ml-2.5 flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-accent-soft md:hidden"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <div className="relative h-5 w-5">
              <span className="absolute left-0 top-0 h-0.5 w-5 rounded bg-ink" />
              <span className="absolute left-0 top-2 h-0.5 w-5 rounded bg-ink" />
              <span className="absolute left-0 top-4 h-0.5 w-5 rounded bg-ink" />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-paper/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-2xl text-brand-purple transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 }}
                onClick={() => {
                  setMobileOpen(false);
                  openBookingModal();
                }}
                className="mt-4 rounded-xl bg-brand-rose px-8 py-3.5 text-sm font-medium text-ink shadow-soft transition-all hover:shadow-glass hover:brightness-[1.03]"
              >
                Agendar cita
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
