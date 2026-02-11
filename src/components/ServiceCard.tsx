'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { whatsappLink } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details?: string[];
  whatsappMessage?: string;
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  details,
  whatsappMessage,
  index = 0,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      {/* Mobile: Collapsed icon, tap to expand */}
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        onClick={() => setIsExpanded(true)}
        className="group cursor-pointer rounded-2xl border border-brand-lilac/10 bg-paper-soft p-4 shadow-soft transition-all duration-300 hover:border-brand-lilac/25 hover:shadow-glass md:hidden"
      >
        <motion.div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-accent-soft text-brand-purple"
          animate={{
            y: [0, -8, 0],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.2,
          }}
        >
          {icon}
        </motion.div>
        <p className="mt-2 text-center text-xs font-medium text-ink">{title}</p>
        <motion.span
          className="mt-1.5 block text-center text-[10px] text-ink-muted/60"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Ver más
        </motion.span>
      </motion.article>

      {/* Desktop: Flip card */}
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        className="hidden md:block"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative h-80"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 rounded-2xl border border-brand-lilac/10 bg-paper p-7 shadow-soft"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <motion.div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-brand-purple"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {icon}
            </motion.div>
            <h3 className="mb-2 text-lg font-medium text-ink">{title}</h3>
            <p className="text-sm leading-relaxed text-ink-muted line-clamp-3">
              {description}
            </p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 flex flex-col overflow-y-auto rounded-2xl border border-brand-lilac/20 bg-brand-purple p-6 text-white shadow-glass"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <h3 className="mb-3 text-base font-medium">{title}</h3>
            {details && details.length > 0 && (
              <ul className="flex-1 space-y-2">
                {details.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 text-sm leading-relaxed text-white/85"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-rose" />
                    {d}
                  </li>
                ))}
              </ul>
            )}
            {whatsappMessage && (
              <a
                href={whatsappLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 self-start rounded-xl bg-brand-rose px-4 py-2 text-xs font-medium text-ink transition-all hover:brightness-[1.03]"
              >
                Consultar
              </a>
            )}
          </div>
        </motion.div>
      </motion.article>

      {/* Mobile Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm overflow-hidden rounded-3xl bg-paper shadow-2xl"
            >
              <div className="bg-gradient-to-r from-brand-purple to-brand-lilac p-6 text-center">
                <motion.div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 text-white"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {icon}
                </motion.div>
                <h3 className="font-display text-xl font-bold text-white">
                  {title}
                </h3>
              </div>

              <div className="p-6">
                <p className="mb-4 text-sm leading-relaxed text-ink-muted">
                  {description}
                </p>

                {details && details.length > 0 && (
                  <ul className="mb-6 space-y-2">
                    {details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-ink-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-purple" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                {whatsappMessage && (
                  <motion.a
                    href={whatsappLink(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-purple px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-accent hover:shadow-glass"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Solicitar servicio
                  </motion.a>
                )}

                <motion.button
                  onClick={() => setIsExpanded(false)}
                  className="mt-4 w-full rounded-xl border border-brand-lilac/20 py-3 text-sm text-ink-muted transition-colors hover:bg-paper-soft"
                  whileTap={{ scale: 0.98 }}
                >
                  Cerrar
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
