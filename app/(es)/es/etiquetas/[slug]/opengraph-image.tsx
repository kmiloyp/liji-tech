import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { productBySlug, products } from "@/content/products";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Etiqueta Liji Tech";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.es.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = productBySlug("es", (await params).slug) ?? products[0];
  return renderOg({ kicker: "Hecho en Miami, FL 33166", title: p.es.name, sub: p.es.sizes });
}
