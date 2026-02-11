import type { Metadata } from 'next';
import ContactoContent from './ContactoContent';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Agenda tu cita con NeuroCarolina Traslaviña. Escríbenos por WhatsApp o completa el formulario.',
};

export default function ContactoPage() {
  return <ContactoContent />;
}
