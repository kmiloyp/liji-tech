import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guideBySlug, guides } from "@/content/guides";
import { pageMetadata } from "@/lib/meta";
import { GuideView } from "@/views/GuideView";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.es.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = guideBySlug("es", (await params).slug);
  if (!g) return {};
  return pageMetadata("es", { kind: "guide", id: g.id }, { ...g.es, type: "article" });
}

export default async function Page({ params }: Props) {
  const g = guideBySlug("es", (await params).slug);
  if (!g) notFound();
  return <GuideView lang="es" guide={g} />;
}
