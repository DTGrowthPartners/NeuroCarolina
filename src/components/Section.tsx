'use client';

import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Use a tinted background instead of white. */
  tinted?: boolean;
}

const revealVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Section({
  children,
  className = '',
  id,
  tinted = false,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={revealVariants}
      className={`px-6 py-20 md:py-28 lg:py-32 ${tinted ? 'bg-paper-soft' : 'bg-paper'} ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </motion.section>
  );
}
