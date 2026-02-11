'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/Section';
import CTAButton from '@/components/CTAButton';
import { whatsappLink } from '@/lib/utils';

const SERVICIOS = [
  {
    title: 'Valoración Psicológica',
    description:
      'Evaluación integral del estado emocional, conductual y cognitivo. Se exploran aspectos como el estado de ánimo, los mecanismos de afrontamiento y la dinámica relacional, brindando una visión completa del bienestar psicológico.',
    details: [
      'Entrevista clínica en profundidad',
      'Aplicación de pruebas psicométricas',
      'Informe detallado con recomendaciones',
    ],
    whatsappMessage: 'Hola, me interesa conocer más sobre la Valoración Psicológica',
  },
  {
    title: 'Valoración Neuropsicológica',
    description:
      'Análisis especializado de las funciones cerebrales y su impacto en el comportamiento cotidiano. Permite detectar alteraciones cognitivas asociadas a condiciones neurológicas, psiquiátricas o del desarrollo.',
    details: [
      'Evaluación de perfil cognitivo',
      'Identificación de fortalezas y dificultades',
      'Orientación para intervención personalizada',
    ],
    whatsappMessage: 'Hola, me interesa conocer más sobre la Valoración Neuropsicológica',
  },
  {
    title: 'Evaluación Neuropsicológica',
    description:
      'Proceso clínico detallado que examina memoria, atención, lenguaje, funciones ejecutivas, habilidades visoespaciales y velocidad de procesamiento, utilizando instrumentos validados y adaptados.',
    details: [
      'Pruebas para evaluar: capacidad intelectual, TDAH, trastorno del espectro autista, epilepsia, trastornos neurocognitivos y demencias',
      'Batería de pruebas estandarizadas',
      'Correlación clínica de resultados',
      'Informe completo y plan de acción',
    ],
    whatsappMessage: 'Hola, me interesa conocer más sobre la Evaluación Neuropsicológica',
  },
  {
    title: 'Prueba Cognitiva',
    description:
      'Aplicación de pruebas específicas y estandarizadas para medir el rendimiento en dominios cognitivos puntuales. Ideal para seguimiento, screening o complemento de evaluaciones previas.',
    details: [
      'Screening cognitivo rápido',
      'Seguimiento de procesos terapéuticos',
      'Comparación con valores normativos',
    ],
    whatsappMessage: 'Hola, me interesa conocer más sobre la Prueba Cognitiva',
  },
  {
    title: 'Estimulación Cognitiva',
    description:
      'Programas personalizados de actividades y ejercicios diseñados para potenciar y mantener las capacidades mentales. Beneficia a personas en cualquier etapa de la vida.',
    details: [
      'Ejercicios de memoria y atención',
      'Entrenamiento en funciones ejecutivas',
      'Sesiones adaptadas a cada persona',
    ],
    whatsappMessage: 'Hola, me interesa conocer más sobre la Estimulación Cognitiva',
  },
  {
    title: 'Rehabilitación Neuropsicológica',
    description:
      'Intervención terapéutica estructurada para recuperar o compensar funciones cognitivas afectadas tras lesiones cerebrales, enfermedades neurológicas o procesos degenerativos.',
    details: [
      'Plan de rehabilitación individualizado',
      'Estrategias compensatorias',
      'Trabajo conjunto con familia y equipo médico',
    ],
    whatsappMessage: 'Hola, me interesa conocer más sobre la Rehabilitación Neuropsicológica',
  },
  {
    title: 'Evaluación del Neurodesarrollo',
    description:
      'Valoración de los hitos del desarrollo cognitivo, motor, lingüístico y socioemocional en niños y adolescentes, para detección temprana e intervención oportuna.',
    details: [
      'Evaluación por dominios del desarrollo',
      'Detección temprana de señales de alerta',
      'Guía para familias y educadores',
    ],
    whatsappMessage: 'Hola, me interesa conocer más sobre la Evaluación del Neurodesarrollo',
  },
  {
    title: 'Trastornos Neurodegenerativos y Demencias',
    description:
      'Evaluación, diagnóstico diferencial y acompañamiento en condiciones como enfermedad de Alzheimer, demencia frontotemporal, Parkinson y otras patologías neurodegenerativas.',
    details: [
      'Diagnóstico diferencial de demencias',
      'Monitoreo del deterioro cognitivo',
      'Asesoría a cuidadores y familiares',
    ],
    whatsappMessage: 'Hola, me interesa conocer más sobre Trastornos Neurodegenerativos y Demencias',
  },
];

export default function ServiciosContent() {
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
            Servicios
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl text-ink sm:text-5xl"
          >
            ¿Cómo puedo ayudarte?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-ink-muted"
          >
            Cada servicio se adapta a tu historia, tus necesidades y tus
            objetivos. Aquí encontrarás una descripción detallada de lo que
            ofrezco.
          </motion.p>
        </div>
      </section>

      {/* Services list */}
      <Section>
        <div className="space-y-6 md:space-y-8">
          {SERVICIOS.map((s, i) => (
            <ServicioCard key={s.title} servicio={s} index={i} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tinted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-ink">
            ¿No estás seguro de qué necesitas?
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            No te preocupes, en una primera conversación podemos identificar
            juntos cuál es el camino más adecuado para ti.
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

/* ─── Collapsible card (mobile) / full card (desktop) ─── */

function ServicioCard({
  servicio: s,
  index: i,
}: {
  servicio: (typeof SERVICIOS)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: i * 0.06, duration: 0.5 }}
      className="rounded-2xl border border-brand-lilac/10 bg-paper p-6 shadow-soft transition-all hover:border-brand-lilac/20 hover:shadow-glass md:p-10"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent-soft text-sm font-bold text-brand-purple">
          {String(i + 1).padStart(2, '0')}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-medium text-ink md:text-xl">{s.title}</h2>

          {/* Mobile: truncated, with "Ver más" */}
          <div className="md:hidden">
            <p className={`mt-2 text-sm leading-relaxed text-ink-muted ${!open ? 'line-clamp-2' : ''}`}>
              {s.description}
            </p>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-3 space-y-2">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-ink-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-purple" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(s.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-purple px-4 py-2.5 text-xs font-medium text-white transition-all hover:shadow-glass"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consultar
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setOpen(!open)}
              className="mt-3 flex items-center gap-1 text-xs font-medium text-brand-purple"
            >
              {open ? 'Ver menos' : 'Ver más'}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Desktop: full content always visible */}
          <div className="hidden md:block">
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {s.description}
            </p>
            <ul className="mt-4 space-y-2">
              {s.details.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2 text-sm text-ink-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-purple" />
                  {d}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(s.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-purple px-5 py-2.5 text-sm font-medium text-white transition-all hover:shadow-glass"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
