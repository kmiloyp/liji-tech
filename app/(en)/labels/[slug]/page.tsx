import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productBySlug, products } from "@/content/products";
import { pageMetadata } from "@/lib/meta";
import { ProductView } from "@/views/ProductView";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.en.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = productBySlug("en", (await params).slug);
  if (!p) return {};
  return pageMetadata("en", { kind: "product", id: p.id }, p.en);
}

export default async function Page({ params }: Props) {
  const p = productBySlug("en", (await params).slug);
  if (!p) notFound();
  return <ProductView lang="en" product={p} />;
}
