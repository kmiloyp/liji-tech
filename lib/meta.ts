import type { Metadata } from "next";
import type { Lang } from "@/content/catalog";
import { site } from "@/content/site";
import { t } from "@/content/strings";
import { absolute, alternatesFor, pathFor, type PageKey } from "./routes";

const BRAND = ` | ${site.name}`;

/**
 * Metadata de cada página: título, descripción, canonical absoluto,
 * hreflang (en, es, x-default) y Open Graph. La imagen OG la genera
 * el archivo opengraph-image de cada ruta.
 */
export function pageMetadata(
  lang: Lang,
  page: PageKey,
  { title, description, type = "website" }: { title: string; description: string; type?: "website" | "article" },
): Metadata {
  const fullTitle = title.endsWith(BRAND) ? title : `${title}${BRAND}`;
  const s = t(lang);
  return {
    title: { absolute: fullTitle },
    description,
    alternates: alternatesFor(lang, page),
    openGraph: {
      type,
      siteName: site.name,
      title: fullTitle,
      description,
      url: absolute(pathFor(lang, page)),
      locale: s.locale,
      alternateLocale: [t(lang === "en" ? "es" : "en").locale],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

/** Metadata común del layout raíz de cada idioma. */
export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(site.url),
    applicationName: site.name,
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    verification: site.googleVerification ? { google: site.googleVerification } : undefined,
    formatDetection: { telephone: false },
  };
}
