import type { Metadata } from 'next';
import SobreMiContent from './SobreMiContent';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description:
    'Conoce a Carolina Traslaviña, neuropsicóloga con enfoque humano. Formación, experiencia y compromiso con la salud mental.',
};

export default function SobreMiPage() {
  return <SobreMiContent />;
}
