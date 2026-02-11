import { WHATSAPP_NUMBER } from './constants';

/** Build a WhatsApp deep-link with an optional pre-filled message. */
export function whatsappLink(message?: string): string {
  const encoded = encodeURIComponent(message ?? '');
  return `https://wa.me/${WHATSAPP_NUMBER}${encoded ? `?text=${encoded}` : ''}`;
}
