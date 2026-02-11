'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/Section';
import CTAButton from '@/components/CTAButton';

export default function Articulo2Content() {
  return (
    <>
      {/* Header */}
      <section className="bg-paper-soft pb-8 pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/articulos"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-brand-purple transition-colors hover:text-accent"
          >
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
              <path d="m15 18-6-6 6-6" />
            </svg>
            Volver a artículos
          </Link>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-purple"
          >
            Artículo de Investigación
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl text-ink sm:text-4xl"
          >
            Neurorehabilitación en Epilepsia: Un Enfoque Integral
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 flex flex-wrap items-center gap-3 text-sm text-ink-muted"
          >
            <span>Dra. Carolina Traslaviña — Neuropsicóloga</span>
            <span className="h-1 w-1 rounded-full bg-brand-lilac/40" />
            <span>
              Revista Epilepsia en Colombia — FIRE Colombia, Vol. IX No. 02
            </span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <article className="prose-custom mx-auto max-w-4xl">
          {/* ¿Qué es la neurorehabilitación? */}
          <h2>¿Qué es la rehabilitación neuropsicológica?</h2>
          <p>
            La rehabilitación neuropsicológica es una disciplina clínica que se
            encarga de la <strong>recuperación de funciones cognitivas</strong>{' '}
            posterior a un daño cerebral, basándose en la{' '}
            <strong>reorganización de sistemas funcionales</strong>. Su objetivo
            principal es lograr la rehabilitación integral del paciente y su
            adaptación al medio, favoreciendo su autonomía y calidad de vida.
          </p>
          <p>
            Según la Organización Mundial de la Salud (OMS), se calcula que en
            el mundo actualmente hay <strong>2400 millones de personas</strong>{' '}
            que tienen alguna afección que podría mejorar con rehabilitación.
            Esta cifra refleja la magnitud de la necesidad de intervenciones
            especializadas en neurorehabilitación a nivel global.
          </p>
          <p>
            La OMS define la neurorehabilitación como un proceso dinámico
            mediante el cual las personas con lesiones o enfermedades pueden
            lograr la mejor recuperación integral posible, favoreciendo su
            desarrollo físico, mental y social de manera óptima, para facilitar
            su integración adecuada al entorno. No se trata únicamente de
            restaurar funciones perdidas, sino de potenciar las capacidades
            preservadas y desarrollar estrategias compensatorias que permitan
            al paciente alcanzar el mayor nivel de independencia posible.
          </p>

          {/* Epilepsia y funciones cognitivas */}
          <h2>Epilepsia y funciones cognitivas</h2>
          <p>
            La epilepsia no es solo una condición caracterizada por crisis
            recurrentes. Su impacto se extiende a múltiples dominios del
            funcionamiento cognitivo, afectando de manera significativa la vida
            cotidiana de quienes la padecen. Las funciones cognitivas más
            frecuentemente comprometidas incluyen:
          </p>
          <h3>Memoria</h3>
          <p>
            Las alteraciones de memoria son una de las quejas cognitivas más
            frecuentes en personas con epilepsia. La actividad epiléptica
            recurrente, especialmente cuando involucra estructuras del lóbulo
            temporal como el hipocampo, puede afectar la capacidad de
            codificación, almacenamiento y recuperación de información. Los
            pacientes pueden experimentar dificultades para recordar
            conversaciones recientes, citas, instrucciones o aprender nueva
            información.
          </p>
          <h3>Atención</h3>
          <p>
            Los déficits atencionales son frecuentes en pacientes con epilepsia
            y pueden manifestarse como dificultad para mantener la concentración
            en tareas prolongadas, para filtrar información irrelevante o para
            alternar entre diferentes actividades. Estas dificultades pueden
            estar relacionadas tanto con la actividad epiléptica en sí misma
            como con los efectos secundarios de la medicación antiepiléptica.
          </p>
          <h3>Funciones ejecutivas</h3>
          <p>
            Las funciones ejecutivas — que incluyen planificación, organización,
            flexibilidad cognitiva, control inhibitorio y toma de decisiones —
            pueden verse significativamente afectadas en personas con epilepsia,
            particularmente cuando las crisis involucran los lóbulos frontales.
            Estas alteraciones impactan la capacidad del paciente para resolver
            problemas cotidianos, organizar su rutina y adaptarse a situaciones
            nuevas.
          </p>
          <h3>Regulación emocional</h3>
          <p>
            La epilepsia frecuentemente se asocia con dificultades en la
            regulación emocional, incluyendo mayor prevalencia de ansiedad y
            depresión. Estas alteraciones emocionales no son solo una reacción
            psicológica al diagnóstico, sino que también pueden tener una base
            neurobiológica relacionada con las áreas cerebrales afectadas por la
            actividad epiléptica. La interacción entre las dificultades
            cognitivas y emocionales puede generar un círculo que afecta aún más
            la calidad de vida del paciente.
          </p>

          {/* Encefalopatía y epilepsia */}
          <h2>Encefalopatía epiléptica y rehabilitación</h2>
          <p>
            Del 25 al 30% de las personas con epilepsia tienen una{' '}
            <strong>encefalopatía</strong>, bien sea{' '}
            <strong>estática o evolutiva</strong>, y estas son las personas que
            padecen síndromes con discapacidad intelectual y requieren estar en
            centros de rehabilitación. Estas personas con epilepsia son aquellas
            que asisten a centros de rehabilitación, tal como lo establece la ley
            (tratamiento integral).
          </p>
          <p>
            Este dato subraya la importancia de contar con programas de
            neurorehabilitación especializados que puedan atender las necesidades
            específicas de esta población. La rehabilitación debe ser integral,
            abarcando no solo los aspectos cognitivos, sino también las
            habilidades funcionales, la participación social y el bienestar
            emocional del paciente y su familia.
          </p>

          {/* Importancia de la intervención temprana */}
          <h2>Importancia de la intervención temprana</h2>
          <p>
            El momento en que se inicia la intervención neuropsicológica es
            determinante para los resultados. La plasticidad cerebral — es decir,
            la capacidad del cerebro para reorganizarse y formar nuevas
            conexiones neuronales — es mayor cuando la intervención se realiza
            de forma oportuna. Iniciar la rehabilitación cognitiva tempranamente
            tras el diagnóstico o la cirugía de epilepsia permite aprovechar
            esta ventana de plasticidad para maximizar la recuperación.
          </p>
          <p>
            Además, la intervención temprana ayuda a prevenir el deterioro
            cognitivo progresivo que puede producirse como consecuencia de las
            crisis recurrentes no controladas. Cada crisis epiléptica tiene el
            potencial de generar daño neuronal acumulativo, por lo que reducir
            la carga epiléptica y simultáneamente estimular las funciones
            cognitivas constituye una estrategia terapéutica fundamental.
          </p>
          <p>
            La detección precoz de las dificultades cognitivas mediante
            evaluaciones neuropsicológicas periódicas permite ajustar los
            programas de rehabilitación a las necesidades cambiantes del
            paciente, optimizando los recursos terapéuticos y los resultados
            clínicos.
          </p>

          {/* Estrategias de intervención */}
          <h2>Estrategias de intervención</h2>
          <p>
            La neurorehabilitación en epilepsia se sustenta en un conjunto de
            estrategias clínicas que deben adaptarse al perfil cognitivo, la
            edad, el tipo de epilepsia y las necesidades individuales de cada
            paciente. Entre las principales estrategias se encuentran:
          </p>

          <h3>Estimulación cognitiva</h3>
          <p>
            Consiste en la aplicación sistemática de actividades y ejercicios
            diseñados para activar y fortalecer las funciones cognitivas. Los
            programas de estimulación cognitiva pueden incluir tareas de
            categorización, secuenciación, razonamiento lógico y resolución de
            problemas, adaptados al nivel de funcionamiento del paciente. El
            objetivo es mantener activas las redes neuronales y promover la
            neuroplasticidad.
          </p>

          <h3>Terapias de memoria</h3>
          <p>
            Dado que la memoria es una de las funciones más afectadas en
            epilepsia, las intervenciones específicas en este dominio son
            fundamentales. Se utilizan técnicas como el aprendizaje sin errores,
            la repetición espaciada, el uso de ayudas externas (agendas,
            alarmas, listas) y estrategias de organización de la información
            (categorización, asociación, elaboración semántica) para mejorar la
            codificación y recuperación de la información.
          </p>

          <h3>Entrenamiento atencional</h3>
          <p>
            Los programas de entrenamiento atencional buscan mejorar los
            diferentes componentes de la atención: atención sostenida
            (mantener la concentración durante períodos prolongados), atención
            selectiva (filtrar información relevante), atención dividida
            (realizar dos tareas simultáneamente) y alternancia atencional
            (cambiar el foco de atención entre tareas). Estos programas se
            implementan de forma graduada, aumentando progresivamente la
            complejidad de las tareas.
          </p>

          <h3>Trabajo interdisciplinario</h3>
          <p>
            La neurorehabilitación efectiva requiere un abordaje
            interdisciplinario que integre la perspectiva de neurología,
            neuropsicología, psiquiatría, terapia ocupacional, fonoaudiología
            y trabajo social, entre otras disciplinas. La coordinación entre
            profesionales permite un abordaje integral que atiende tanto las
            necesidades cognitivas como las funcionales, emocionales y sociales
            del paciente.
          </p>

          <h3>Acompañamiento familiar</h3>
          <p>
            La familia es un pilar fundamental en el proceso de
            neurorehabilitación. La psicoeducación dirigida a familiares y
            cuidadores permite que comprendan las dificultades cognitivas del
            paciente, aprendan a implementar estrategias de apoyo en el hogar
            y manejen de forma adecuada las expectativas sobre la recuperación.
            El acompañamiento familiar también contribuye a reducir la
            sobrecarga del cuidador y a mejorar la dinámica familiar.
          </p>

          {/* Impacto en calidad de vida */}
          <h2>Impacto en la calidad de vida</h2>
          <p>
            Los programas de neurorehabilitación en epilepsia han demostrado
            tener un impacto positivo no solo en el rendimiento cognitivo
            medido mediante pruebas estandarizadas, sino también en la
            funcionalidad cotidiana y la participación social del paciente.
            Entre los beneficios documentados se encuentran:
          </p>
          <ul>
            <li>
              Mayor autonomía en actividades de la vida diaria (manejo del
              dinero, preparación de alimentos, uso de transporte).
            </li>
            <li>
              Mejora en el rendimiento académico y/o laboral, con mayor
              capacidad para sostener tareas y cumplir responsabilidades.
            </li>
            <li>
              Reducción de síntomas de ansiedad y depresión, con un impacto
              positivo en el bienestar emocional.
            </li>
            <li>
              Fortalecimiento de las relaciones interpersonales y la
              participación en actividades sociales y comunitarias.
            </li>
            <li>
              Mayor sensación de control sobre la propia vida y mayor
              autoeficacia percibida.
            </li>
          </ul>
          <p>
            Estos beneficios trascienden las métricas clínicas y se traducen
            en una mejora real y tangible en la experiencia vital del paciente
            y su entorno familiar.
          </p>

          {/* Conclusión */}
          <h2>Conclusión</h2>
          <p>
            La neurorehabilitación en epilepsia es mucho más que un conjunto de
            ejercicios cognitivos. Es un proceso terapéutico integral, centrado
            en la persona, que busca potenciar las capacidades preservadas,
            compensar las dificultades y acompañar al paciente y su familia en
            el camino hacia una mejor calidad de vida.
          </p>
          <p>
            La evidencia respalda la importancia de intervenir de forma
            temprana, con programas personalizados y un enfoque
            interdisciplinario. Cada persona con epilepsia tiene un perfil
            cognitivo único, y la rehabilitación debe responder a esa
            individualidad con rigor clínico y calidez humana.
          </p>
          <p>
            Desde la neuropsicología, tenemos la responsabilidad y el
            privilegio de acompañar a estas personas en la comprensión de su
            funcionamiento cerebral y en la construcción de estrategias que les
            permitan vivir con mayor plenitud, autonomía y bienestar.
          </p>

          {/* Keywords */}
          <div className="mt-10 rounded-2xl border border-brand-lilac/10 bg-paper-soft p-6">
            <h3 className="mb-3 text-sm font-medium text-ink">
              Palabras clave
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Neurorehabilitación',
                'Epilepsia',
                'Funciones cognitivas',
                'Calidad de vida',
                'Intervención clínica',
                'Plasticidad cerebral',
                'Estimulación cognitiva',
                'Rehabilitación integral',
              ].map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-brand-lilac/15 bg-paper px-3 py-1 text-xs text-ink-muted"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Section>

      {/* CTA */}
      <Section tinted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-ink">
            ¿Buscas rehabilitación neuropsicológica?
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            Si tú o un ser querido necesitan acompañamiento en rehabilitación
            cognitiva, estoy aquí para ayudarte con un enfoque personalizado y
            basado en evidencia.
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
