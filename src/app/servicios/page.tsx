import type { Metadata } from 'next';
import ServiciosContent from './ServiciosContent';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Evaluación neuropsicológica, rehabilitación cognitiva, estimulación y más. Conoce todos los servicios de NeuroCarolina Traslaviña.',
};

export default function ServiciosPage() {
  return <ServiciosContent />;
}
