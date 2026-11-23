import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { guideBySlug, guides } from "@/content/guides";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Liji Tech guide";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.en.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const g = guideBySlug("en", (await params).slug) ?? guides[0];
  return renderOg({ kicker: "Guide", title: g.en.h1, sub: g.en.summary });
}
