import type { MetadataRoute } from "next";
import { guideById } from "@/content/guides";
import { absolute, allPages, pathFor, type PageKey } from "@/lib/routes";

/** Fecha de la última revisión del contenido (actualícela al publicar cambios). */
const CONTENT_UPDATED = "2026-11-23";

function lastModified(page: PageKey) {
  return page.kind === "guide" ? guideById(page.id).updated : CONTENT_UPDATED;
}

/** Todas las URL en los dos idiomas, cada una con sus alternativas hreflang. */
export default function sitemap(): MetadataRoute.Sitemap {
  return allPages().flatMap((page) => {
    const languages = {
      en: absolute(pathFor("en", page)),
      es: absolute(pathFor("es", page)),
      "x-default": absolute(pathFor("en", page)),
    };
    return (["en", "es"] as const).map((lang) => ({
      url: absolute(pathFor(lang, page)),
      lastModified: lastModified(page),
      changeFrequency: page.kind === "home" ? ("weekly" as const) : ("monthly" as const),
      priority: page.kind === "home" ? 1 : page.kind === "product" ? 0.9 : 0.6,
      alternates: { languages },
    }));
  });
}
