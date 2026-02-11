import type { Metadata } from 'next';
import ArticulosContent from './ArticulosContent';

export const metadata: Metadata = {
  title: 'Artículos y Publicaciones',
  description:
    'Artículos académicos y publicaciones de Carolina Traslaviña sobre neuropsicología, epilepsia refractaria y neurorehabilitación.',
};

export default function ArticulosPage() {
  return <ArticulosContent />;
}
