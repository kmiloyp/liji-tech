import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productBySlug, products } from "@/content/products";
import { pageMetadata } from "@/lib/meta";
import { ProductView } from "@/views/ProductView";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.es.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = productBySlug("es", (await params).slug);
  if (!p) return {};
  return pageMetadata("es", { kind: "product", id: p.id }, p.es);
}

export default async function Page({ params }: Props) {
  const p = productBySlug("es", (await params).slug);
  if (!p) notFound();
  return <ProductView lang="es" product={p} />;
}
