'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import CTAButton from '@/components/CTAButton';
import { WHATSAPP_BASE_MESSAGE, CONTACT_EMAIL } from '@/lib/constants';

export default function ContactoContent() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // TODO: replace with actual form submission (API route, email service, etc.)
    console.log('Formulario enviado:', form);

    // Fallback: open mailto
    const subject = encodeURIComponent('Contacto desde la web — NeuroCarolina');
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\n\n${form.mensaje}`,
    );
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`);

    setSent(true);
  }

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
            Contacto
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl text-ink sm:text-5xl"
          >
            Hablemos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-base text-ink-muted"
          >
            Puedes escribirme directamente por WhatsApp o completar el
            formulario. Respondo lo más pronto posible.
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left — WhatsApp + map + info */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <div className="rounded-2xl border border-brand-lilac/10 bg-paper-soft p-8 shadow-soft">
              <h2 className="mb-2 text-xl font-medium text-ink">
                La forma más rápida
              </h2>
              <p className="mb-6 text-sm text-ink-muted">
                Escríbeme por WhatsApp y agenda tu cita directamente.
              </p>
              <CTAButton variant="whatsapp" className="w-full justify-center">
                Abrir WhatsApp
              </CTAButton>
            </div>

            {/* Contact info */}
            <div className="space-y-4 text-sm text-ink-muted">
              <div className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 flex-shrink-0 text-brand-purple"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>{CONTACT_EMAIL}</span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 flex-shrink-0 text-brand-purple"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Cartagena, Bolívar, Colombia</span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 flex-shrink-0 text-brand-purple"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:3182522605" className="text-brand-purple hover:underline">
                  318 2522605
                </a>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-6 flex flex-col gap-3">
              <CTAButton
                variant="whatsapp"
                className="w-full justify-center"
                whatsappMessage="Hola, me gustaría agendar una cita"
              >
                Escribir por WhatsApp
              </CTAButton>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-brand-lilac/10 shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3924.343867735609!2d-75.49206162496351!3d10.394239389732256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDIzJzM5LjMiTiA3NcKwMjknMjIuMiJX!5e0!3m2!1ses!2sco!4v1770752712055!5m2!1ses!2sco"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full aspect-[4/3]"
                title="Ubicación"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[400px] items-center justify-center rounded-2xl border border-brand-lilac/10 bg-paper-soft p-8"
              >
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-brand-purple">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-ink">
                    Mensaje enviado
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">
                    Gracias por escribirme. Te responderé lo más pronto posible.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-brand-lilac/10 bg-paper p-8 shadow-soft"
              >
                <h2 className="text-xl font-medium text-ink">
                  Envíame un mensaje
                </h2>

                <div>
                  <label
                    htmlFor="ct-nombre"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Nombre
                  </label>
                  <input
                    id="ct-nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, nombre: e.target.value }))
                    }
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border border-brand-lilac/20 bg-paper px-4 py-2.5 text-sm outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-accent-soft"
                  />
                </div>

                <div>
                  <label
                    htmlFor="ct-email"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Email
                  </label>
                  <input
                    id="ct-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="tu@email.com"
                    className="w-full rounded-xl border border-brand-lilac/20 bg-paper px-4 py-2.5 text-sm outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-accent-soft"
                  />
                </div>

                <div>
                  <label
                    htmlFor="ct-mensaje"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="ct-mensaje"
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, mensaje: e.target.value }))
                    }
                    placeholder="Cuéntame en qué puedo ayudarte..."
                    className="w-full resize-none rounded-xl border border-brand-lilac/20 bg-paper px-4 py-2.5 text-sm outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-accent-soft"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-purple px-6 py-3 text-sm font-medium text-white transition-all hover:brightness-[.90] hover:shadow-glass hover:-translate-y-0.5 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
