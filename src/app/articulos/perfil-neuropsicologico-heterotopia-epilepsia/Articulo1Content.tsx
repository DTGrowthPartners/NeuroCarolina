'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/Section';
import CTAButton from '@/components/CTAButton';

export default function Articulo1Content() {
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
            Estudio de Caso
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl text-ink sm:text-4xl"
          >
            Perfil Neuropsicológico Pre y Post en Paciente con Heterotopía como
            Causa de Epilepsia Refractaria
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 flex flex-wrap items-center gap-3 text-sm text-ink-muted"
          >
            <span>Carolina Traslaviña Torres & Yorbeth Lenin Salazar Márquez</span>
            <span className="h-1 w-1 rounded-full bg-brand-lilac/40" />
            <span>
              Fundación Centro Colombiano de Epilepsia y Enfermedades
              Neurológicas Jaime Fandiño Franky — FIRE
            </span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <article className="prose-custom mx-auto max-w-4xl">
          {/* Introducción */}
          <h2>Introducción</h2>
          <p>
            La heterotopía cerebral es un grupo de malformaciones corticales que
            se produce por defectos en la migración neuronal durante el
            desarrollo embrionario. Se caracteriza por la presencia de neuronas
            ubicadas en localizaciones anormales, fuera de la corteza cerebral,
            lo que puede generar focos epileptogénicos de difícil control
            farmacológico.
          </p>
          <p>
            Dentro del espectro de las heterotopías, se encuentran las formas
            subependimarias (periventriculares), las heterotopías en banda
            (subcorticales) y formas focales que pueden comprometer diferentes
            regiones cerebrales. Estas malformaciones constituyen una causa
            reconocida de epilepsia refractaria, es decir, aquella que no
            responde adecuadamente al tratamiento con fármacos antiepilépticos
            convencionales.
          </p>
          <p>
            Cuando la epilepsia es refractaria y existe una lesión estructural
            identificable, como en el caso de la heterotopía, la cirugía de
            epilepsia se convierte en una opción terapéutica relevante. En este
            contexto, la evaluación neuropsicológica juega un papel fundamental:
            permite conocer el perfil cognitivo del paciente antes de la
            intervención, anticipar posibles riesgos quirúrgicos sobre funciones
            cerebrales y, posteriormente, documentar los cambios cognitivos que
            se producen tras la cirugía.
          </p>
          <p>
            El presente estudio de caso fue desarrollado en la Fundación Centro
            Colombiano de Epilepsia y Enfermedades Neurológicas Jaime Fandiño
            Franky (FIRE), con el objetivo de describir el perfil
            neuropsicológico pre y postquirúrgico de un paciente con heterotopía
            como causa de epilepsia refractaria, contribuyendo al conocimiento
            clínico sobre esta condición.
          </p>

          {/* Objetivo */}
          <h2>Objetivo del Estudio</h2>
          <p>
            Describir el perfil neuropsicológico pre y post quirúrgico en un
            paciente con heterotopía cerebral como causa de epilepsia
            refractaria, evaluado en la Fundación Centro Colombiano de Epilepsia
            y Enfermedades Neurológicas Jaime Fandiño Franky, con el fin de
            identificar cambios cognitivos asociados a la intervención
            neuroquirúrgica y aportar evidencia clínica sobre el abordaje
            integral de esta condición.
          </p>

          {/* Información del paciente */}
          <h2>Información del Paciente</h2>
          <p>
            Se describe el caso clínico de un paciente femenino de 56 años de
            edad, lateralidad diestra, bachiller, que refiere haber iniciado
            crisis epilépticas desde los 16 años, con un progresivo empeoramiento
            en la frecuencia de las mismas. La paciente presentaba crisis de tipo
            focal con pérdida de conciencia, descrita como episodios de desconexión
            con el medio, con evolución a bilateral tónico-clónica, con una
            frecuencia que podía alcanzar hasta 4 o 5 crisis diarias. También
            reportaba crisis mioclónicas que afectaban principalmente
            extremidades superiores, incluyendo caída de objetos de las manos,
            compromiso del tronco facial y desviación de la comisura labial.
          </p>

          {/* Metodología */}
          <h2>Metodología</h2>
          <p>
            Se empleó un diseño de estudio de caso, en el cual se realizó una
            evaluación neuropsicológica integral tanto en fase prequirúrgica
            como postquirúrgica. Se utilizaron instrumentos estandarizados y
            validados para la exploración de las principales funciones
            cognitivas.
          </p>
          <h3>Instrumentos aplicados</h3>
          <ul>
            <li>
              <strong>Escala de Inteligencia de Wechsler para Adultos (WAIS-IV):</strong>{' '}
              evaluación de capacidad intelectual global, comprensión verbal,
              razonamiento perceptual, memoria de trabajo y velocidad de
              procesamiento.
            </li>
            <li>
              <strong>Evaluación Cognitiva Montreal (MoCA):</strong> screening
              cognitivo que evalúa atención, concentración, funciones ejecutivas,
              memoria, lenguaje, capacidades visuoconstructivas, cálculo y
              orientación.
            </li>
            <li>
              <strong>Curvas de memoria verbal:</strong> evaluación de
              aprendizaje, retención y recuperación de información verbal.
            </li>
            <li>
              <strong>Pruebas de funciones ejecutivas:</strong> evaluación de
              planificación, flexibilidad cognitiva, control inhibitorio y toma
              de decisiones.
            </li>
            <li>
              <strong>Neuroimagen:</strong> resonancia magnética cerebral con
              protocolo de epilepsia para identificación y localización de la
              heterotopía.
            </li>
          </ul>
          <p>
            La evaluación prequirúrgica se realizó con el objetivo de establecer
            una línea base del funcionamiento cognitivo y contribuir a la toma de
            decisiones quirúrgicas. La evaluación postquirúrgica permitió
            documentar los cambios en el perfil neuropsicológico tras la
            intervención.
          </p>

          {/* Resultados */}
          <h2>Resultados</h2>

          <h3>Evaluación Cognitiva Montreal (MoCA)</h3>
          <p>
            La comparación de los puntajes de la MoCA entre la evaluación
            prequirúrgica y postquirúrgica evidenció cambios significativos en
            varias funciones cognitivas:
          </p>
          <div className="my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-lilac/20">
                  <th className="py-3 pr-4 text-left font-medium text-ink">
                    Dominio cognitivo
                  </th>
                  <th className="py-3 px-4 text-center font-medium text-ink">
                    Pre
                  </th>
                  <th className="py-3 px-4 text-center font-medium text-ink">
                    Post
                  </th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-brand-lilac/10">
                  <td className="py-2.5 pr-4">Visuoespacial / Ejecutiva</td>
                  <td className="py-2.5 px-4 text-center">3/5</td>
                  <td className="py-2.5 px-4 text-center">4/5</td>
                </tr>
                <tr className="border-b border-brand-lilac/10">
                  <td className="py-2.5 pr-4">Identificación</td>
                  <td className="py-2.5 px-4 text-center">3/3</td>
                  <td className="py-2.5 px-4 text-center">3/3</td>
                </tr>
                <tr className="border-b border-brand-lilac/10">
                  <td className="py-2.5 pr-4">Atención</td>
                  <td className="py-2.5 px-4 text-center">3/6</td>
                  <td className="py-2.5 px-4 text-center">4/6</td>
                </tr>
                <tr className="border-b border-brand-lilac/10">
                  <td className="py-2.5 pr-4">Lenguaje</td>
                  <td className="py-2.5 px-4 text-center">1/3</td>
                  <td className="py-2.5 px-4 text-center">2/3</td>
                </tr>
                <tr className="border-b border-brand-lilac/10">
                  <td className="py-2.5 pr-4">Abstracción</td>
                  <td className="py-2.5 px-4 text-center">1/2</td>
                  <td className="py-2.5 px-4 text-center">2/2</td>
                </tr>
                <tr className="border-b border-brand-lilac/10">
                  <td className="py-2.5 pr-4">Recuerdo diferido</td>
                  <td className="py-2.5 px-4 text-center">0/5</td>
                  <td className="py-2.5 px-4 text-center">1/5</td>
                </tr>
                <tr className="border-b border-brand-lilac/10">
                  <td className="py-2.5 pr-4">Orientación</td>
                  <td className="py-2.5 px-4 text-center">5/6</td>
                  <td className="py-2.5 px-4 text-center">6/6</td>
                </tr>
                <tr className="font-medium text-ink">
                  <td className="py-2.5 pr-4">Total</td>
                  <td className="py-2.5 px-4 text-center">16/30</td>
                  <td className="py-2.5 px-4 text-center">22/30</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Se observa una mejoría global de 16 a 22 puntos, con avances
            particularmente notables en los dominios de atención, lenguaje,
            abstracción y orientación. El recuerdo diferido, aunque mejoró
            ligeramente, continuó siendo el dominio con mayor compromiso,
            lo que es consistente con las alteraciones de memoria frecuentemente
            asociadas a la epilepsia crónica.
          </p>

          <h3>Capacidad intelectual (WAIS-IV)</h3>
          <p>
            La evaluación con la Escala de Inteligencia de Wechsler para Adultos
            reveló un perfil prequirúrgico con compromiso en memoria de trabajo
            y velocidad de procesamiento, dominios frecuentemente afectados en
            pacientes con epilepsia refractaria. Tras la intervención
            quirúrgica, se documentó una mejora en el desempeño general, con una
            recuperación parcial en velocidad de procesamiento y mayor estabilidad
            en comprensión verbal y razonamiento perceptual.
          </p>

          <h3>Curvas de memoria</h3>
          <p>
            En la evaluación prequirúrgica, la curva de aprendizaje verbal
            mostró un patrón aplanado con dificultades significativas en la
            consolidación y evocación de información. En la evaluación
            postquirúrgica, se evidenció una curva de aprendizaje con mejor
            progresión, lo que sugiere una mayor capacidad de codificación y
            retención de material verbal tras la reducción de la actividad
            epiléptica.
          </p>

          {/* Discusión */}
          <h2>Discusión Clínica</h2>
          <p>
            Los resultados de este estudio de caso evidencian la relevancia
            de la evaluación neuropsicológica como herramienta esencial en el
            abordaje integral de pacientes con epilepsia refractaria candidatos
            a cirugía. La documentación del perfil cognitivo pre y
            postquirúrgico permite no solo medir el impacto de la intervención,
            sino también orientar la planificación de estrategias de
            rehabilitación cognitiva individualizadas.
          </p>
          <p>
            En este caso particular, la heterotopía como malformación del
            desarrollo cortical generaba un foco epileptogénico de difícil
            control, con consecuencias acumulativas sobre el funcionamiento
            cognitivo. La mejoría observada tras la cirugía en dominios como
            atención, lenguaje y abstracción sugiere que la reducción de la
            carga epiléptica permite una reorganización funcional parcial.
          </p>
          <p>
            Es importante destacar que la memoria de evocación diferida
            continuó siendo el dominio con mayor compromiso, lo cual es
            consistente con la literatura que describe alteraciones mnésicas
            persistentes en pacientes con epilepsia de larga evolución. Este
            hallazgo refuerza la necesidad de implementar programas de
            rehabilitación neuropsicológica enfocados en estrategias
            compensatorias de memoria tras la intervención quirúrgica.
          </p>
          <p>
            El seguimiento neuropsicológico longitudinal constituye una
            herramienta invaluable para comprender la trayectoria cognitiva
            del paciente, ajustar intervenciones terapéuticas y proporcionar
            información relevante al equipo interdisciplinario de epilepsia.
          </p>

          {/* Conclusión */}
          <h2>Conclusión</h2>
          <p>
            Se presentó un caso de heterotopía nodular subependimaria como
            causa de epilepsia refractaria en el que se realizó una
            intervención quirúrgica tipo callosotomía, con mejoría en el
            rendimiento cognitivo global y reducción de las crisis. Se evidenció
            una mejoría clínicamente significativa en el puntaje de la MoCA
            (de 16 a 22 puntos), con avances particulares en atención,
            abstracción, lenguaje y orientación.
          </p>
          <p>
            Este caso ilustra la importancia del trabajo interdisciplinario
            en epilepsia, integrando una evaluación neuropsicológica rigurosa
            como parte fundamental del proceso pre y postquirúrgico. Los
            resultados contribuyen a la evidencia sobre las posibilidades de
            recuperación cognitiva en pacientes sometidos a cirugía de
            epilepsia y subrayan la necesidad de programas de rehabilitación
            neuropsicológica como parte del manejo integral.
          </p>

          {/* Keywords */}
          <div className="mt-10 rounded-2xl border border-brand-lilac/10 bg-paper-soft p-6">
            <h3 className="mb-3 text-sm font-medium text-ink">
              Palabras clave
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Epilepsia refractaria',
                'Heterotopía cerebral',
                'Evaluación neuropsicológica',
                'Cirugía de epilepsia',
                'Perfil cognitivo',
                'WAIS-IV',
                'MoCA',
                'Callosotomía',
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
            ¿Necesitas una evaluación neuropsicológica?
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            Si tú o un familiar conviven con epilepsia u otra condición
            neurológica, puedo ayudarte a comprender el funcionamiento cognitivo
            y diseñar un plan de intervención personalizado.
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
