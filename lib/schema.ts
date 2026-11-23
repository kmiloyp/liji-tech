/**
 * Datos estructurados (JSON-LD). Se renderizan en el servidor.
 * Reglas: Liji Tech es Organization (no LocalBusiness). El LocalBusiness es
 * Eti-Label y solo va en /factory. Product sin offers ni precio.
 */
import type { Lang } from "@/content/catalog";
import type { Guide } from "@/content/guides";
import { products, type Product } from "@/content/products";
import { site } from "@/content/site";
import { fill, t } from "@/content/strings";
import { absolute, pathFor } from "./routes";

const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;
const MAKER_ID = `${site.url}/#eti-label`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  postalCode: site.address.zip,
  addressCountry: site.address.country,
};

export function organization(lang: Lang) {
  const s = t(lang);
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    url: absolute("/"),
    description:
      lang === "en"
        ? "Liji Tech sells hazmat, shipping, handling and thermal labels, ribbons and custom flexographic labels made at the Eti-Label plant in Miami, Florida."
        : "Liji Tech vende etiquetas de mercancía peligrosa, envío, manejo y térmicas, ribbons y etiquetas a medida en flexografía, fabricadas en la planta de Eti-Label en Miami, Florida.",
    address: postalAddress,
    telephone: site.phoneE164,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: site.phoneE164,
        availableLanguage: ["English", "Spanish"],
        areaServed: "US",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.home.catH,
      itemListElement: products.map((p) => ({
        "@type": "OfferCatalog",
        name: p[lang].name,
        url: absolute(pathFor(lang, { kind: "product", id: p.id })),
      })),
    },
    parentOrganization: manufacturerRef(),
  };
}

/**
 * Eti-Label como fabricante, sin @id: el único nodo con identidad de Eti-Label
 * es el LocalBusiness de /factory (así no compiten dos tipos por el mismo @id).
 */
export function manufacturerRef() {
  return {
    "@type": "Organization",
    name: site.manufacturer.name,
    address: postalAddress,
    url: absolute(pathFor("en", { kind: "factory" })),
  };
}

export function website(lang: Lang) {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    name: site.name,
    url: absolute("/"),
    inLanguage: ["en", "es"],
    publisher: { "@id": ORG_ID },
    description: t(lang).home.description,
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absolute(it.path),
    })),
  };
}

export function productSchema(lang: Lang, p: Product) {
  const c = p[lang];
  return {
    "@type": "Product",
    name: c.h1,
    description: c.definition,
    url: absolute(pathFor(lang, { kind: "product", id: p.id })),
    brand: { "@type": "Brand", name: site.name },
    manufacturer: manufacturerRef(),
    category: c.name,
    inLanguage: lang,
  };
}

export function faqSchema(items: [string, string][], vars: Record<string, string> = {}) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: fill(a, vars) },
    })),
  };
}

export function articleSchema(lang: Lang, g: Guide) {
  const c = g[lang];
  const url = absolute(pathFor(lang, { kind: "guide", id: g.id }));
  return {
    "@type": "Article",
    headline: c.h1,
    description: c.description,
    url,
    mainEntityOfPage: url,
    inLanguage: lang,
    datePublished: g.published,
    dateModified: g.updated,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

/** LocalBusiness de Eti-Label. Solo en /factory. */
export function etiLabelLocalBusiness(lang: Lang) {
  return {
    "@type": "LocalBusiness",
    "@id": MAKER_ID,
    name: site.manufacturer.name,
    description:
      lang === "en"
        ? "Label printing plant in Miami, Florida. Flexographic printing of hazmat, air cargo, handling and custom labels."
        : "Planta de impresión de etiquetas en Miami, Florida. Impresión flexográfica de etiquetas hazmat, de carga aérea, de manejo y a medida.",
    url: absolute(pathFor(lang, { kind: "factory" })),
    telephone: site.phoneE164,
    address: postalAddress,
    subOrganization: { "@id": ORG_ID },
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
