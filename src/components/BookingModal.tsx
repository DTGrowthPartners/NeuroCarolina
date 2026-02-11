'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBookingModal } from '@/lib/useBookingModal';
import { WHATSAPP_NUMBER } from '@/lib/constants';

const MOTIVOS = [
  'Valoración psicológica',
  'Valoración neuropsicológica',
  'Evaluación neuropsicológica',
  'Prueba cognitiva',
  'Estimulación cognitiva',
  'Rehabilitación neuropsicológica',
  'Evaluación del neurodesarrollo',
  'Otro',
] as const;

const HORARIOS = [
  'Mañana (8:00 – 12:00)',
  'Tarde (14:00 – 18:00)',
  'Sin preferencia',
] as const;

export default function BookingModal() {
  const { isOpen, close } = useBookingModal();

  const [nombre, setNombre] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [motivo, setMotivo] = useState<string>(MOTIVOS[0]);
  const [horario, setHorario] = useState<string>(HORARIOS[2]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const message = [
      `Hola, me gustaría agendar una cita.`,
      ``,
      `*Nombre:* ${nombre}`,
      `*WhatsApp:* ${whatsapp}`,
      `*Motivo:* ${motivo}`,
      `*Horario preferido:* ${horario}`,
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    close();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="glass-strong relative z-10 w-full max-w-md rounded-3xl p-8 shadow-glass"
          >
            {/* Close */}
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-accent-soft hover:text-brand-purple"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <h2 className="font-display text-2xl text-brand-purple">
              Agendar cita
            </h2>
            <p className="mt-1 text-sm text-ink-muted">
              Completa los datos y te contactaremos por WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="bk-nombre"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Nombre
                </label>
                <input
                  id="bk-nombre"
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-brand-lilac/20 bg-paper px-4 py-2.5 text-sm outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-accent-soft"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label
                  htmlFor="bk-whatsapp"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  WhatsApp
                </label>
                <input
                  id="bk-whatsapp"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+57 300 123 4567"
                  className="w-full rounded-xl border border-brand-lilac/20 bg-paper px-4 py-2.5 text-sm outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-accent-soft"
                />
              </div>

              {/* Motivo */}
              <div>
                <label
                  htmlFor="bk-motivo"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Motivo de consulta
                </label>
                <select
                  id="bk-motivo"
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  className="w-full rounded-xl border border-brand-lilac/20 bg-paper px-4 py-2.5 text-sm outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-accent-soft"
                >
                  {MOTIVOS.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Horario */}
              <div>
                <label
                  htmlFor="bk-horario"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Preferencia de horario
                </label>
                <select
                  id="bk-horario"
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                  className="w-full rounded-xl border border-brand-lilac/20 bg-paper px-4 py-2.5 text-sm outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-accent-soft"
                >
                  {HORARIOS.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#20bd5a] hover:shadow-glass hover:-translate-y-0.5 active:translate-y-px"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar por WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
