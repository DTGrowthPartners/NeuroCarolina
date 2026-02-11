'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/Section';
import Timeline from '@/components/Timeline';
import CTAButton from '@/components/CTAButton';
import type { TimelineItem } from '@/components/Timeline';

const TIMELINE: TimelineItem[] = [
  {
    year: '2024',
    title: 'XVI Congreso Colombiano de Neurología Infantil',
    description:
      'Presentación de póster científico sobre evaluación neuropsicológica en epilepsia pediátrica, contribuyendo a la discusión académica sobre diagnóstico y acompañamiento clínico.',
  },
  {
    year: '2024',
    title: 'Jornada de concientización sobre epilepsia',
    description:
      'Participación activa en jornada de sensibilización sobre epilepsia y acceso a salud mental, acercando la neuropsicología a comunidades que más la necesitan.',
  },
  {
    year: '2023',
    title: 'Museo Histórico del FIRE — Investigación',
    description:
      'Visita de inspiración e investigación al Museo Histórico del FIRE, explorando la historia de la neurología y fortaleciendo la vocación de servicio.',
  },
];

export default function SobreMiContent() {
  return (
    <>
      {/* Header */}
      <section className="bg-paper-soft pb-8 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-purple"
          >
            Sobre mí
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl text-ink sm:text-5xl"
          >
            Carolina Traslaviña
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-lg text-ink-muted"
          >
            Neuropsicóloga
          </motion.p>
        </div>
      </section>

      {/* Bio */}
      <Section>
        <div className="grid items-start gap-12 md:grid-cols-2">
          <Image
            src="/images/pfp2.jpeg"
            alt="Carolina Traslaviña - Neuropsicóloga"
            width={600}
            height={600}
            className="rounded-2xl object-cover sticky top-28"
          />

          <div className="space-y-5 text-base leading-relaxed text-ink-muted">
            <p>
              Soy Carolina Traslaviña, neuropsicóloga clínica con experiencia en
              evaluación y rehabilitación de funciones cognitivas en niños,
              adolescentes y adultos.
            </p>
            <p>
              Mi trabajo se centra en la comprensión integral del funcionamiento
              cerebral y su impacto en la conducta, el aprendizaje y la calidad
              de vida. He acompañado procesos de evaluación en casos de
              trastornos del neurodesarrollo, dificultades atencionales,
              alteraciones cognitivas asociadas a epilepsia y condiciones
              neurológicas, así como en adultos con deterioro cognitivo leve y
              demencias.
            </p>
            <p>
              Tengo experiencia en el abordaje de pacientes con epilepsia,
              incluyendo el análisis del perfil neuropsicológico pre y
              postquirúrgico en casos de lobectomía, callosotomía,
              hemisferectomía, integrando la evaluación clínica con fundamentos
              neuroanatómicos y evidencia científica actual.
            </p>
            <p>
              Mi enfoque es clínico, ético y basado en la evidencia. Considero
              que cada evaluación no es solo la aplicación de pruebas, sino una
              oportunidad para comprender a la persona en su contexto,
              identificar fortalezas y diseñar estrategias de intervención
              personalizadas.
            </p>
            <p>
              Además de la práctica clínica, participo en espacios académicos y
              de divulgación científica sobre neuropsicología, promoviendo el uso
              responsable de la información en temas como desarrollo cognitivo,
              TDAH, Trastorno del espectro autista, epilepsia y trastornos
              neurológicos.
            </p>
            <p>
              Mi propósito es brindar acompañamiento profesional, claro y
              humano, ayudando a las personas y sus familias a comprender su
              funcionamiento cognitivo y potenciar sus capacidades.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tinted>
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Lo que me guía
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: 'Enfoque humano',
              text: 'Cada persona es más que un diagnóstico. Te acompaño con respeto, empatía y calidez en cada paso del proceso.',
            },
            {
              title: 'Base científica',
              text: 'Utilizo instrumentos validados y métodos basados en evidencia para ofrecerte evaluaciones y tratamientos confiables.',
            },
            {
              title: 'Compromiso social',
              text: 'Creo en acercar la neuropsicología a la comunidad, en sensibilizar y en trabajar por el acceso a la salud mental.',
            },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-brand-lilac/10 bg-paper p-7 shadow-soft"
            >
              <h3 className="mb-2 font-medium text-ink">{v.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <div className="mb-14 text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-purple">
            Trayectoria
          </span>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Experiencia y participación
          </h2>
        </div>
        <Timeline items={TIMELINE} />
      </Section>

      {/* CTA */}
      <Section tinted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-ink">
            ¿Te gustaría conocerme?
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            Agenda una primera cita y conversemos sobre cómo puedo ayudarte.
          </p>
          <div className="mt-8">
            <CTAButton>Agendar cita</CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
