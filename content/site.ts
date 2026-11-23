/**
 * Datos del negocio. Nombre, dirección y teléfono (NAP) deben escribirse
 * igual en todo el sitio: todo sale de aquí.
 * Teléfono, WhatsApp y dominio llegan por variables de entorno (.env.example).
 */

function clean(value: string | undefined) {
  const v = value?.trim();
  return v ? v : undefined;
}

function resolveSiteUrl() {
  const explicit = clean(process.env.NEXT_PUBLIC_SITE_URL);
  if (explicit) return explicit.replace(/\/+$/, "");
  // Mientras no haya dominio: la URL de producción que asigna Vercel.
  const vercel = clean(process.env.VERCEL_PROJECT_PRODUCTION_URL);
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

function required(name: string, value: string | undefined) {
  const v = clean(value);
  if (!v) throw new Error(`Falta la variable de entorno ${name}. Vea .env.example.`);
  return v;
}

// process.env.X se escribe completo para que Next lo incruste en el cliente.
const phoneE164 = required("NEXT_PUBLIC_PHONE_E164", process.env.NEXT_PUBLIC_PHONE_E164);

export const site = {
  name: "Liji Tech",
  url: resolveSiteUrl(),
  /** Solo dígitos con código de país. Si no está definido, se usa el teléfono. */
  whatsapp: (clean(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) ?? phoneE164).replace(/\D/g, ""),
  phoneE164,
  phoneDisplay: required("NEXT_PUBLIC_PHONE_DISPLAY", process.env.NEXT_PUBLIC_PHONE_DISPLAY),
  gaId: clean(process.env.NEXT_PUBLIC_GA_ID),
  googleVerification: clean(process.env.GOOGLE_SITE_VERIFICATION),
  manufacturer: {
    name: "Eti-Label Inc.",
    shortName: "Eti-Label",
  },
  address: {
    street: "6977 NW 82nd Ave",
    city: "Miami",
    region: "FL",
    zip: "33166",
    country: "US",
  },
  themeColor: "#08703F",
} as const;

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.zip}`;

export const isProductionDomain = Boolean(clean(process.env.NEXT_PUBLIC_SITE_URL));
