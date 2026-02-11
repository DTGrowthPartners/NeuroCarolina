/* ─────────────────────────────────────────
   Site-wide constants — centralised for
   easy adjustments.
   ───────────────────────────────────────── */

/** Intensity of the parallax reaction to mouse (0 = off, 1 = full). */
export const PARALLAX_INTENSITY = 0.25;

/** Speed multiplier for floating geometric shapes (lower = slower). */
export const FLOAT_SPEED = 0.15;

/** WhatsApp phone number (country code, no + sign, no spaces). */
export const WHATSAPP_NUMBER = '573182522605';

/** Pre-filled WhatsApp message template. */
export const WHATSAPP_BASE_MESSAGE =
  'Hola, me gustaría agendar una cita con NeuroCarolina.';

/** Contact email placeholder. */
export const CONTACT_EMAIL = 'psic.carolinatraslavina@gmail.com';

/** Social media links — replace "#" with real URLs. */
export const SOCIALS = {
  instagram: 'https://www.instagram.com/neurocarolinatraslavina/',
  facebook: 'https://www.facebook.com/neurocarolinatraslavina/',
  tiktok: 'https://www.tiktok.com/@neurocarolinatraslavina?_r=1&_t=ZS-93oU8lLISFY',
  linkedin: 'https://linkedin.com/in/carolina-traslaviña-torres',
} as const;

/** Navigation links shared by Navbar and Footer. */
export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Artículos', href: '/articulos' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Contacto', href: '/contacto' },
] as const;
