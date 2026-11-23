/**
 * Tabla única de URL por idioma. De aquí salen hreflang, canonical,
 * el sitemap, el cambio de idioma y los enlaces internos.
 */
import type { Lang } from "@/content/catalog";
import { guideById, guides } from "@/content/guides";
import { products, productById } from "@/content/products";
import { site } from "@/content/site";

/** Segmentos de URL por idioma (cambiarlos aquí cambia las carpetas en app/ también). */
export const segments = {
  en: { root: "/", labels: "/labels", guides: "/guides", factory: "/factory" },
  es: { root: "/es", labels: "/es/etiquetas", guides: "/es/guias", factory: "/es/fabrica" },
} as const;

export type PageKey =
  | { kind: "home" }
  | { kind: "factory" }
  | { kind: "guides" }
  | { kind: "product"; id: string }
  | { kind: "guide"; id: string };

export function pathFor(lang: Lang, page: PageKey): string {
  const s = segments[lang];
  switch (page.kind) {
    case "home":
      return s.root;
    case "factory":
      return s.factory;
    case "guides":
      return s.guides;
    case "product":
      return `${s.labels}/${productById(page.id)[lang].slug}`;
    case "guide":
      return `${s.guides}/${guideById(page.id)[lang].slug}`;
  }
}

export const absolute = (path: string) => (path === "/" ? `${site.url}/` : `${site.url}${path}`);

export const otherLang = (lang: Lang): Lang => (lang === "en" ? "es" : "en");

/** alternates para generateMetadata: canonical propio + en, es y x-default (inglés). */
export function alternatesFor(lang: Lang, page: PageKey) {
  return {
    canonical: absolute(pathFor(lang, page)),
    languages: {
      en: absolute(pathFor("en", page)),
      es: absolute(pathFor("es", page)),
      "x-default": absolute(pathFor("en", page)),
    },
  };
}

/** Todas las páginas del sitio, en el orden del sitemap. */
export function allPages(): PageKey[] {
  return [
    { kind: "home" },
    ...products.map((p) => ({ kind: "product", id: p.id }) as const),
    { kind: "factory" },
    { kind: "guides" },
    ...guides.map((g) => ({ kind: "guide", id: g.id }) as const),
  ];
}
