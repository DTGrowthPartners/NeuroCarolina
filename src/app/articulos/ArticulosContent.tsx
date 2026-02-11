'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/Section';
import CTAButton from '@/components/CTAButton';

const ARTICULOS = [
  {
    slug: 'perfil-neuropsicologico-heterotopia-epilepsia',
    title:
      'Perfil Neuropsicológico Pre y Post en Paciente con Heterotopía como Causa de Epilepsia Refractaria: Estudio de Caso',
    summary:
      'Estudio de caso presentado en el XVI Congreso Colombiano de Neurología Infantil, que analiza el perfil cognitivo antes y después de la intervención quirúrgica en un paciente con heterotopía cerebral como causa de epilepsia refractaria. Se evaluaron funciones como memoria, atención, funciones ejecutivas y capacidad intelectual mediante instrumentos estandarizados como la WAIS-IV y la MoCA.',
    keywords: [
      'Epilepsia refractaria',
      'Heterotopía cerebral',
      'Evaluación neuropsicológica',
      'Cirugía de epilepsia',
      'Perfil cognitivo',
    ],
    source: 'Fundación Centro Colombiano de Epilepsia y Enfermedades Neurológicas Jaime Fandiño Franky — FIRE',
  },
  {
    slug: 'neurorehabilitacion-en-epilepsia',
    title: 'Neurorehabilitación en Epilepsia: Un Enfoque Integral',
    summary:
      'Artículo publicado en la Revista de Epilepsia en Colombia (Vol. IX No. 02) que aborda la neurorehabilitación como disciplina clave para la recuperación de funciones cognitivas en personas con epilepsia. Se exponen las bases conceptuales según la OMS, las implicaciones de la encefalopatía epiléptica y la importancia de la rehabilitación integral.',
    keywords: [
      'Neurorehabilitación',
      'Epilepsia',
      'Funciones cognitivas',
      'Calidad de vida',
      'Intervención clínica',
    ],
    source: 'Revista Epilepsia en Colombia — FIRE Colombia, Vol. IX No. 02',
  },
];

export default function ArticulosContent() {
  return (
    <>
      {/* Header */}
      <section className="bg-paper-soft pb-8 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-purple"
          >
            Investigación
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl text-ink sm:text-5xl"
          >
            Artículos y Publicaciones
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-ink-muted"
          >
            Esta sección reúne mis contribuciones académicas, investigaciones
            clínicas y participaciones en congresos en el campo de la
            neuropsicología y la epilepsia. Cada publicación refleja mi
            compromiso con la evidencia científica y el acompañamiento humano.
          </motion.p>
        </div>
      </section>

      {/* Articles list */}
      <Section>
        <div className="space-y-8">
          {ARTICULOS.map((a, i) => (
            <motion.article
              key={a.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-brand-lilac/10 bg-paper p-8 shadow-soft transition-all hover:border-brand-lilac/20 hover:shadow-glass md:p-10"
            >
              <span className="mb-3 inline-block rounded-lg bg-accent-soft px-3 py-1 text-xs font-medium text-brand-purple">
                {a.source}
              </span>
              <h2 className="text-xl font-medium text-ink md:text-2xl">
                {a.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                {a.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {a.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-brand-lilac/15 bg-paper-soft px-3 py-1 text-xs text-ink-muted"
                  >
                    {k}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href={`/articulos/${a.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-5 py-2.5 text-sm font-medium text-white transition-all hover:shadow-glass"
                >
                  Leer artículo completo
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tinted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-ink">
            ¿Te interesa mi trabajo clínico?
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            Si deseas conocer más sobre mi enfoque o agendar una evaluación
            neuropsicológica, no dudes en contactarme.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton>Agendar cita</CTAButton>
            <CTAButton variant="whatsapp">Escribir por WhatsApp</CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
