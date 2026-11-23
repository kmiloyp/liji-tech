import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { guideBySlug, guides } from "@/content/guides";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Guía de Liji Tech";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.es.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const g = guideBySlug("es", (await params).slug) ?? guides[0];
  return renderOg({ kicker: "Guía", title: g.es.h1, sub: g.es.summary });
}
