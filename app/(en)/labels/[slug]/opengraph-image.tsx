import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { productBySlug, products } from "@/content/products";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Liji Tech label";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.en.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = productBySlug("en", (await params).slug) ?? products[0];
  return renderOg({ kicker: "Made in Miami, FL 33166", title: p.en.name, sub: p.en.sizes });
}
