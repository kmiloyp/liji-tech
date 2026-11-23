import { site } from "@/content/site";

/** Enlace directo a un chat de WhatsApp con el mensaje armado. */
export function waHref(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telHref = `tel:${site.phoneE164}`;

/**
 * Atributos de medición para un enlace de WhatsApp, llamada o correo.
 * El componente <ClickTracker /> los lee y registra el evento.
 */
export function trackAttrs(channel: "whatsapp" | "call" | "email", location: string) {
  return { "data-track": channel, "data-track-location": location } as const;
}
