import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Lang } from "@/content/catalog";
import { guides } from "@/content/guides";
import { t } from "@/content/strings";
import { otherLang, pathFor } from "@/lib/routes";
import { breadcrumbs, graph } from "@/lib/schema";

export function GuidesIndexView({ lang }: { lang: Lang }) {
  const s = t(lang);
  const page = { kind: "guides" } as const;
  const crumbs = [
    { name: s.breadcrumbHome, path: pathFor(lang, { kind: "home" }) },
    { name: s.guidesIndex.name, path: pathFor(lang, page) },
  ];
  return (
    <PageShell lang={lang} altHref={pathFor(otherLang(lang), page)}>
      <div className="wrap pt-8 pb-20 md:pt-10">
        <Breadcrumbs lang={lang} items={crumbs} />
        <h1 className="display mt-6 text-[clamp(2.6rem,5.5vw,4.5rem)]">{s.guidesIndex.h1}</h1>
        <p className="mt-4 max-w-[55ch] text-lg text-ink-2">{s.guidesIndex.lede}</p>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {guides.map((g) => (
            <li key={g.id}>
              <article className="peel sheet relative flex h-full flex-col gap-4 p-7">
                <h2 className="font-display text-3xl leading-none font-extrabold uppercase">
                  <Link href={pathFor(lang, { kind: "guide", id: g.id })} className="after:absolute after:inset-0">
                    {g[lang].h1}
                  </Link>
                </h2>
                <p className="text-black/70">{g[lang].description}</p>
                <span className="mt-auto font-semibold text-[#08703F]">
                  {s.guidesIndex.read} <span aria-hidden="true">→</span>
                </span>
              </article>
            </li>
          ))}
        </ul>
      </div>
      <JsonLd data={graph(breadcrumbs(crumbs))} />
    </PageShell>
  );
}
