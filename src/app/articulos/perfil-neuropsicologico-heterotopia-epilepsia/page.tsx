import type { Metadata } from 'next';
import Articulo1Content from './Articulo1Content';

export const metadata: Metadata = {
  title:
    'Perfil Neuropsicológico Pre y Post en Paciente con Heterotopía y Epilepsia Refractaria',
  description:
    'Estudio de caso sobre el perfil cognitivo antes y después de cirugía en paciente con heterotopía cerebral como causa de epilepsia refractaria. Evaluación neuropsicológica con WAIS-IV y MoCA.',
};

export default function Articulo1Page() {
  return <Articulo1Content />;
}
