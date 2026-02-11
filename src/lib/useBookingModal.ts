'use client';

import { useSyncExternalStore } from 'react';

/* Lightweight global state for the booking modal (no external deps). */

let isOpen = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((fn) => fn());
}

export function openBookingModal() {
  isOpen = true;
  emit();
}

export function closeBookingModal() {
  isOpen = false;
  emit();
}

export function useBookingModal() {
  const open = useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => isOpen,
    () => false, // server snapshot
  );

  return { isOpen: open, open: openBookingModal, close: closeBookingModal };
}
