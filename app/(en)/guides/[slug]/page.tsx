import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guideBySlug, guides } from "@/content/guides";
import { pageMetadata } from "@/lib/meta";
import { GuideView } from "@/views/GuideView";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.en.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = guideBySlug("en", (await params).slug);
  if (!g) return {};
  return pageMetadata("en", { kind: "guide", id: g.id }, { ...g.en, type: "article" });
}

export default async function Page({ params }: Props) {
  const g = guideBySlug("en", (await params).slug);
  if (!g) notFound();
  return <GuideView lang="en" guide={g} />;
}
