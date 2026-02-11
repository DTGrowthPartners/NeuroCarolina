import type { Metadata } from 'next';
import Articulo2Content from './Articulo2Content';

export const metadata: Metadata = {
  title: 'Neurorehabilitación en Epilepsia: Un Enfoque Integral',
  description:
    'Artículo sobre neurorehabilitación en epilepsia: recuperación de funciones cognitivas, intervención temprana, estrategias clínicas y calidad de vida del paciente.',
};

export default function Articulo2Page() {
  return <Articulo2Content />;
}
