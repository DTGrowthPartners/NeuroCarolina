'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';

export interface TimelineItem {
  year?: string;
  title: string;
  description: string;
  modalImage?: string;
  modalImages?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const svgPathRef = useRef<SVGPathElement>(null);

  const [pathD, setPathD] = useState('');
  const [totalLength, setTotalLength] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 40%'],
  });

  const dashOffset = useTransform(scrollYProgress, [0, 1], [totalLength, 0]);

  /* ── Build the SVG curve through all dot centres ── */
  const buildPath = useCallback(() => {
    if (!containerRef.current) return;
    const cRect = containerRef.current.getBoundingClientRect();

    const pts: { x: number; y: number }[] = [];
    dotRefs.current.forEach((dot) => {
      if (dot) {
        const r = dot.getBoundingClientRect();
        pts.push({
          x: r.left - cRect.left + r.width / 2,
          y: r.top - cRect.top + r.height / 2,
        });
      }
    });

    if (pts.length < 2) return;

    const swing = 80;
    let d = `M ${pts[0].x} ${pts[0].y}`;

    for (let i = 0; i < pts.length - 1; i++) {
      const curr = pts[i];
      const next = pts[i + 1];
      const dir = i % 2 === 0 ? 1 : -1;
      const midY = (curr.y + next.y) / 2;

      d += ` C ${curr.x + swing * dir} ${midY}, ${next.x - swing * dir} ${midY}, ${next.x} ${next.y}`;
    }

    setPathD(d);
  }, []);

  useEffect(() => {
    buildPath();
    window.addEventListener('resize', buildPath);
    const t = setTimeout(buildPath, 400);
    return () => {
      window.removeEventListener('resize', buildPath);
      clearTimeout(t);
    };
  }, [buildPath, items]);

  useEffect(() => {
    if (svgPathRef.current && pathD) {
      setTotalLength(svgPathRef.current.getTotalLength());
    }
  }, [pathD]);

  return (
    <>
      <div ref={containerRef} className="relative w-full md:pl-0">
        {/* ── Animated SVG curve (desktop) ── */}
        {pathD && (
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            style={{ overflow: 'visible' }}
          >
            {/* Faint background path */}
            <path
              d={pathD}
              fill="none"
              stroke="var(--brand-lilac)"
              strokeWidth="2"
              strokeOpacity="0.18"
            />
            {/* Animated foreground path */}
            <motion.path
              ref={svgPathRef}
              d={pathD}
              fill="none"
              stroke="var(--brand-purple)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={totalLength}
              style={{ strokeDashoffset: dashOffset }}
            />
          </svg>
        )}

        <div className="space-y-12">
          {items.map((item, i) => {
            const allImages = item.modalImages?.length
              ? item.modalImages
              : item.modalImage
                ? [item.modalImage]
                : [];
            const isEven = i % 2 === 0;
            const isExpanded = expandedIndex === i;

            return (
              <div key={i} className="relative flex w-full flex-col items-center">
                {/* Mobile layout */}
                <div className="w-full md:hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-4 rounded-2xl border border-brand-lilac/10 bg-paper p-5 text-center shadow-soft"
                  >
                    {item.year && (
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-brand-purple">
                        {item.year}
                      </span>
                    )}
                    <h4 className="mb-2 text-base font-medium text-ink">{item.title}</h4>

                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : i)}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-purple"
                    >
                      {isExpanded ? 'Ver menos' : 'Ver más'}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </motion.div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mx-4 overflow-hidden rounded-b-2xl border-x border-b border-brand-lilac/10 bg-paper-soft"
                      >
                        <p className="p-5 text-sm leading-relaxed text-ink-muted">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {allImages.length > 0 && (
                    <div className="mt-4">
                      <MiniGallery images={allImages} onImageClick={setSelectedImage} />
                    </div>
                  )}
                </div>

                {/* Desktop layout */}
                <div className="hidden w-full md:flex md:items-start md:gap-8">
                  {/* Left side */}
                  <div className={`w-[calc(50%-2rem)] ${isEven ? 'text-right' : ''}`}>
                    {isEven && (
                      <>
                        <DesktopCard item={item} />
                        {allImages.length > 0 && (
                          <div className="mt-4">
                            <MiniGallery images={allImages} onImageClick={setSelectedImage} />
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Dot */}
                  <div
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    className="relative z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-brand-purple bg-paper"
                  />

                  {/* Right side */}
                  <div className={`w-[calc(50%-2rem)] ${!isEven ? 'text-left' : ''}`}>
                    {!isEven && (
                      <>
                        <DesktopCard item={item} />
                        {allImages.length > 0 && (
                          <div className="mt-4">
                            <MiniGallery images={allImages} onImageClick={setSelectedImage} />
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -right-12 -top-12 text-white"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={selectedImage}
                alt="Imagen"
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function DesktopCard({ item }: { item: TimelineItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: item.year ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-brand-lilac/10 bg-paper p-6 shadow-soft"
    >
      {item.year && (
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-brand-purple">
          {item.year}
        </span>
      )}
      <h4 className="mb-2 text-base font-medium text-ink">{item.title}</h4>
      <p className="text-sm leading-relaxed text-ink-muted">{item.description}</p>
    </motion.div>
  );
}

function MiniGallery({ images, onImageClick }: { images: string[]; onImageClick: (src: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center justify-center gap-4 py-2">
      {images.length > 1 && (
        <button
          onClick={goPrev}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple text-white hover:bg-brand-lilac"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      <motion.button
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => onImageClick(images[currentIndex])}
        className="relative h-40 w-64 cursor-pointer overflow-hidden rounded-xl shadow-lg"
      >
        <Image
          src={images[currentIndex]}
          alt={`Foto ${currentIndex + 1}`}
          fill
          className="object-cover"
        />
      </motion.button>

      {images.length > 1 && (
        <button
          onClick={goNext}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple text-white hover:bg-brand-lilac"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}
    </div>
  );
}
