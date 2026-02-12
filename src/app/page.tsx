'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import CTAButton from '@/components/CTAButton';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import Timeline from '@/components/Timeline';
import FAQ from '@/components/FAQ';
import type { TimelineItem } from '@/components/Timeline';
import type { FAQItem } from '@/components/FAQ';

/* ─── Data ─── */

const SERVICES = [
  {
    title: 'Valoración Psicológica',
    description:
      'Evaluación integral del estado emocional, conductual y cognitivo. Se exploran aspectos como el estado de ánimo, los mecanismos de afrontamiento y la dinámica relacional.',
    details: [
      'Entrevista clínica en profundidad',
      'Aplicación de pruebas psicométricas',
      'Informe detallado con recomendaciones',
    ],
    icon: <SearchIcon />,
    whatsappMessage: 'Hola, me interesa conocer más sobre la Valoración Psicológica',
  },
  {
    title: 'Valoración Neuropsicológica',
    description:
      'Proceso clínico estructurado que incluye anamnesis detallada, análisis de antecedentes, formulación de hipótesis diagnóstica, selección de pruebas estandarizadas e integración de resultados.',
    details: [
      'Anamnesis detallada y revisión de historia clínica',
      'Análisis de antecedentes médicos, neurológicos, académicos y psicosociales',
      'Formulación de hipótesis diagnóstica',
      'Selección y aplicación de pruebas neuropsicológicas estandarizadas',
      'Integración de resultados y elaboración de informe clínico',
    ],
    icon: <BrainIcon />,
    whatsappMessage: 'Hola, me interesa conocer más sobre la Valoración Neuropsicológica',
  },
  {
    title: 'Evaluación Neuropsicológica',
    description:
      'Proceso clínico detallado que examina memoria, atención, lenguaje, funciones ejecutivas, habilidades visoespaciales y velocidad de procesamiento.',
    details: [
      'Pruebas para evaluar: capacidad intelectual, TDAH, TEA, epilepsia, trastornos neurocognitivos y demencias',
      'Batería de pruebas estandarizadas',
      'Correlación clínica de resultados',
      'Informe completo y plan de acción',
    ],
    icon: <ClipboardIcon />,
    whatsappMessage: 'Hola, me interesa conocer más sobre la Evaluación Neuropsicológica',
  },
  {
    title: 'Prueba Cognitiva',
    description:
      'Evaluación del funcionamiento intelectual global mediante escalas estandarizadas.',
    details: [
      'Evaluación de funcionamiento intelectual global (CI)',
      'Aplicación de escalas estandarizadas (WIPPSI, WISC, WAIS u otras según edad)',
      'Seguimiento de evolución clínica',
      'Comparación con datos normativos',
    ],
    icon: <TestIcon />,
    whatsappMessage: 'Hola, me interesa conocer más sobre la Prueba Cognitiva',
  },
  {
    title: 'Estimulación Cognitiva',
    description:
      'Programa personalizado de entrenamiento en memoria, atención y funciones ejecutivas según resultados de evaluación.',
    details: [
      'Programa personalizado según resultados de evaluación',
      'Entrenamiento en memoria, atención y funciones ejecutivas',
      'Rehabilitación de habilidades cognitivas afectadas',
      'Plan terapéutico según perfil neuropsicológico',
    ],
    icon: <SparklesIcon />,
    whatsappMessage: 'Hola, me interesa conocer más sobre la Estimulación Cognitiva',
  },
  {
    title: 'Rehabilitación Neuropsicológica',
    description:
      'Intervención terapéutica basada en evaluación neuropsicológica con estrategias restaurativas y compensatorias.',
    details: [
      'Diseño de plan terapéutico basado en evaluación neuropsicológica',
      'Intervención en memoria, atención y funciones ejecutivas',
      'Estrategias restaurativas y compensatorias',
      'Trabajo interdisciplinario con familia y equipo médico',
    ],
    icon: <HeartIcon />,
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
    icon: <ChildIcon />,
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
    icon: <ShieldIcon />,
    whatsappMessage: 'Hola, me interesa conocer más sobre Trastornos Neurodegenerativos y Demencias',
  },
];

const TIMELINE: TimelineItem[] = [
  {
    year: '2025',
    title: 'XVI Congreso Colombiano de Neurología Infantil',
    description:
      'Presentación de póster sobre evaluación neuropsicológica en epilepsia pediátrica, contribuyendo al avance del conocimiento en neurología infantil.',
    modalImages: ['/images/Congreso1.jpeg', '/images/Congreso1.1.jpeg', '/images/Congreso1.2.jpeg'],
  },
  {
    year: '2025',
    title: 'Jornada de concientización sobre epilepsia',
    description:
      'Organización y participación en jornada de sensibilización sobre epilepsia y acceso a salud mental, acercando la neuropsicología a la comunidad.',
    modalImage: '/images/Cogreso2.jpeg',
  },
  {
    year: '2025',
    title: 'Investigación en el Museo Histórico del FIRE',
    description:
      'Visita de investigación e inspiración al Museo Histórico del FIRE, explorando la historia de la neurología y su impacto en la práctica clínica actual.',
    modalImages: ['/images/Cogreso3.jpeg', '/images/Congreso3.jpeg'],
  },
];

const FAQS: FAQItem[] = [
  {
    question: '¿Qué es la neuropsicología?',
    answer:
      'La neuropsicología es la disciplina que estudia la relación entre el cerebro y la conducta. Permite entender cómo las funciones cerebrales (memoria, atención, lenguaje, funciones ejecutivas) influyen en la vida diaria, las emociones y el comportamiento.',
  },
  {
    question: '¿Cuándo debería consultar a un neuropsicólogo?',
    answer:
      'Cuando notes dificultades persistentes de memoria, concentración o lenguaje; después de un traumatismo craneoencefálico o ACV; si un niño presenta dificultades de aprendizaje o comportamiento; o ante diagnósticos como epilepsia, TDAH o enfermedades neurodegenerativas.',
  },
  {
    question: '¿Cuánto dura una evaluación neuropsicológica?',
    answer:
      'Generalmente entre 2 y 4 sesiones de aproximadamente 1 hora cada una. La duración puede variar según la complejidad del caso y la edad del paciente. Al finalizar, recibirás un informe completo con resultados y recomendaciones.',
  },
  {
    question: '¿Atiendes niños y adultos?',
    answer:
      'Sí, ofrezco evaluación y acompañamiento neuropsicológico para todas las edades: niños, adolescentes, adultos y adultos mayores, adaptando las pruebas y el abordaje a cada etapa del desarrollo.',
  },
  {
    question: '¿Las sesiones son presenciales o virtuales?',
    answer:
      'Algunas evaluaciones requieren aplicación presencial de pruebas. Sin embargo, las sesiones de seguimiento, orientación y estimulación cognitiva pueden realizarse de forma virtual. Conversemos sobre la mejor opción para tu caso.',
  },
];

/* ─── Page ─── */

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Mostrar popup después de que termine la animación de entrada (1.5 segundos)
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute -top-10 right-0 text-white hover:text-brand-lilac"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <Image
                src="/brand/POPUP4.jpeg"
                alt="Popup NeuroCarolina"
                width={500}
                height={600}
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ HERO ═══ */}
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-paper-soft">
        <HeroBackground />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="font-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl"
          >
            Comprender el cerebro{' '}
            <span className="text-brand-purple">
              también es una forma de cuidar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            Acompañamiento neuropsicológico con enfoque humano, clínico y
            personalizado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <CTAButton>Agendar cita</CTAButton>
            <CTAButton
              variant="whatsapp"
              whatsappMessage="Hola, tengo dudas sobre neuropsicología y me gustaría que me orientaras"
            >
              Preguntar por WhatsApp
            </CTAButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
              Scroll
            </span>
            <div className="h-8 w-px animate-scroll-hint bg-brand-lilac/40" />
          </div>
        </motion.div>
      </section>

      {/* ═══ ¿QUÉ HACE UN NEUROPSICÓLOGO? ═══ */}
      <Section id="que-es">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-purple"
            >
              Neuropsicología
            </motion.span>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              ¿Qué hace un neuropsicólogo?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              Un neuropsicólogo es un profesional especializado en comprender
              cómo el cerebro influye en el comportamiento, las emociones y los
              procesos cognitivos como la memoria, la atención, el lenguaje y
              las funciones ejecutivas.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              A través de evaluaciones clínicas detalladas, identifica
              fortalezas y dificultades cognitivas para diseñar planes de
              intervención personalizados que mejoran la calidad de vida de cada
              persona.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:items-start">
              <CTAButton
                variant="primary"
                href="/sobre-mi"
              >
                Conoce más sobre mí
              </CTAButton>
              <CTAButton
                variant="whatsapp"
                whatsappMessage="Hola, quiero saber más sobre cómo funciona una evaluación neuropsicológica"
              >
                Preguntar sobre evaluación
              </CTAButton>
            </div>
          </div>
          <Image
            src="/images/pfp.jpeg"
            alt="NeuroCarolina - Foto profesional"
            width={500}
            height={500}
            className="rounded-2xl object-cover"
          />
        </div>
      </Section>

      {/* ═══ SERVICIOS ═══ */}
      <Section id="servicios" tinted>
        <div className="mb-14 text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-purple">
            Servicios
          </span>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-muted">
            Cada servicio está diseñado para acompañarte de forma cercana,
            profesional y basada en evidencia.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.title}
              index={i}
              icon={s.icon}
              title={s.title}
              description={s.description}
              details={s.details}
              whatsappMessage={s.whatsappMessage}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-sm text-ink-muted">
            ¿Tienes dudas sobre algún servicio en particular?
          </p>
          <CTAButton
            variant="whatsapp"
            whatsappMessage="Hola, me interesa conocer más sobre los servicios de neuropsicología que ofrecen"
          >
            Escríbeme para resolver tus dudas
          </CTAButton>
        </div>
      </Section>

      {/* ═══ RESPALDADA POR ═══ */}
      <section className="bg-paper py-10">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-ink-muted">
            Respaldada por
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10">
            {[
              { src: '/brand/Fire.png', alt: 'FIRE Colombia', size: 'h-8 sm:h-16', href: 'https://firecolombia.co/' },
              { src: '/brand/HappyBrain-removebg-preview.png', alt: 'Happy Brain', size: 'h-10 sm:h-20', href: 'https://www.instagram.com/happybrainctg/' },
              { src: '/brand/Master.png', alt: 'Instituto iMaster', size: 'h-8 sm:h-16', href: 'https://imasterinstituto.com/' },
              { src: '/brand/USB.png', alt: 'USB', size: 'h-10 sm:h-20', href: 'https://usbcartagena.edu.co/' },
              { src: '/brand/Escudo_de_la_Universidad_Simón_Bolívar.svg.png', alt: 'Universidad Simón Bolívar', size: 'h-10 sm:h-20', href: 'https://www.unisimon.edu.co/' },
            ].map((logo) => (
              <a
                key={logo.src}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.size} w-auto`}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REHABILITACIÓN DESTACADA ═══ */}
      <Section id="rehabilitacion">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-purple">
            Rehabilitación
          </span>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Rehabilitación neuropsicológica
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            La rehabilitación neuropsicológica está dirigida a estimular
            procesos cognitivos esenciales como la memoria, la atención y el
            lenguaje. A través de un programa personalizado, se busca recuperar,
            compensar o potenciar las capacidades afectadas, siempre con un
            enfoque cálido y centrado en la persona.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Cada plan de rehabilitación es único, diseñado a partir de una
            evaluación rigurosa y ajustado a las necesidades y objetivos de cada
            paciente y su familia.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton>Agendar cita</CTAButton>
            <CTAButton
              variant="whatsapp"
              whatsappMessage="Hola, me interesa conocer más sobre la rehabilitación neuropsicológica"
            >
              Preguntar sobre rehabilitación
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* ═══ EXPERIENCIA / TIMELINE ═══ */}
      <Section id="experiencia" tinted>
        <div className="mb-14 text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-purple">
            Trayectoria
          </span>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Experiencia y participación
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-muted">
            Un compromiso constante con la formación, la investigación y el
            servicio a la comunidad.
          </p>
        </div>

        <Timeline items={TIMELINE} />
      </Section>

      {/* ═══ ARTÍCULOS PREVIEW ═══ */}
      <Section id="articulos-preview">
        <div className="mb-10 text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-purple">
            Investigación
          </span>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Artículos y publicaciones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-muted">
            Contribuciones académicas e investigaciones clínicas en
            neuropsicología y epilepsia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              slug: 'perfil-neuropsicologico-heterotopia-epilepsia',
              title:
                'Perfil Neuropsicológico Pre y Post en Paciente con Heterotopía como Causa de Epilepsia Refractaria',
              source: 'FIRE Colombia',
              keywords: ['Epilepsia refractaria', 'Heterotopía cerebral', 'Evaluación neuropsicológica'],
            },
            {
              slug: 'neurorehabilitacion-en-epilepsia',
              title: 'Neurorehabilitación en Epilepsia: Un Enfoque Integral',
              source: 'Revista Epilepsia en Colombia — Vol. IX No. 02',
              keywords: ['Neurorehabilitación', 'Epilepsia', 'Funciones cognitivas'],
            },
          ].map((a, i) => (
            <motion.article
              key={a.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-brand-lilac/10 bg-paper p-6 shadow-soft transition-all hover:border-brand-lilac/20 hover:shadow-glass md:p-8"
            >
              <span className="mb-3 inline-block rounded-lg bg-accent-soft px-3 py-1 text-xs font-medium text-brand-purple">
                {a.source}
              </span>
              <h3 className="text-lg font-medium text-ink line-clamp-2">
                {a.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {a.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-brand-lilac/15 bg-paper-soft px-3 py-1 text-xs text-ink-muted"
                  >
                    {k}
                  </span>
                ))}
              </div>
              <Link
                href={`/articulos/${a.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-purple transition-colors hover:text-accent"
              >
                Leer artículo
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
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/articulos"
            className="inline-flex items-center gap-2 rounded-xl border border-brand-lilac/20 px-6 py-3 text-sm font-medium text-brand-purple transition-all hover:bg-paper-soft hover:shadow-soft"
          >
            Ver todas las publicaciones
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
      </Section>

      {/* ═══ FAQ ═══ */}
      <Section id="faq">
        <div className="mb-14 text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-purple">
            Preguntas frecuentes
          </span>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            ¿Tienes dudas?
          </h2>
        </div>

        <FAQ items={FAQS} />
      </Section>

      {/* ═══ CTA FINAL ═══ */}
      <Section tinted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Tu bienestar comienza con una conversación
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            Estoy aquí para acompañarte. Agenda tu primera cita y demos el
            primer paso juntos.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton>Agendar cita</CTAButton>
            <CTAButton variant="whatsapp">Escribir por WhatsApp</CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ─── Inline SVG icons for service cards ─── */

function BrainIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 0-7 7c0 3 1.5 5.5 4 7v4h6v-4c2.5-1.5 4-4 4-7a7 7 0 0 0-7-7Z" />
      <path d="M12 2v8" />
      <path d="M5 9h14" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ChildIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2" />
      <path d="M12 6v6" />
      <path d="M8 8l4 4 4-4" />
      <path d="M8 20l4-8 4 8" />
    </svg>
  );
}

function TestIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2h6l3 7H6L9 2Z" />
      <path d="M12 9v13" />
      <path d="M8 22h8" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}
