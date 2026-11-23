import { addressLine, site } from "@/content/site";

/** Búsqueda de la dirección de la planta en Google Maps. */
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.manufacturer.name}, ${addressLine}`,
)}`;
