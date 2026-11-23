import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/conversion/ContactButtons";
import { ProductArt } from "@/components/labels/ProductArt";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Lang } from "@/content/catalog";
import type { Guide } from "@/content/guides";
import { productById } from "@/content/products";
import { t } from "@/content/strings";
import { otherLang, pathFor } from "@/lib/routes";
import { articleSchema, breadcrumbs, graph } from "@/lib/schema";

export async function GuideView({ lang, guide }: { lang: Lang; guide: Guide }) {
  const s = t(lang);
  const c = guide[lang];
  const page = { kind: "guide", id: guide.id } as const;
  const { default: Body } = await import(`@/content/guides/${lang}/${guide.id}.mdx`);
  const crumbs = [
    { name: s.breadcrumbHome, path: pathFor(lang, { kind: "home" }) },
    { name: s.guidesIndex.name, path: pathFor(lang, { kind: "guides" }) },
    { name: c.h1, path: pathFor(lang, page) },
  ];
  const main = productById(guide.related[0]);
  const date = new Intl.DateTimeFormat(lang === "en" ? "en-US" : "es-US", { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${guide.updated}T12:00:00Z`),
  );

  return (
    <PageShell lang={lang} altHref={pathFor(otherLang(lang), page)} waMessage={main[lang].waMessage}>
      <article>
        <header className="border-b border-rule">
          <div className="wrap pt-8 pb-10 md:pt-10 md:pb-14">
            <Breadcrumbs lang={lang} items={crumbs} />
            <h1 className="display mt-6 max-w-[22ch] text-[clamp(2.3rem,4.6vw,4rem)]">{c.h1}</h1>
            <p className="data mt-5 text-ink-2">
              {s.guidesIndex.updated}: <time dateTime={guide.updated}>{date}</time> · Liji Tech
            </p>
          </div>
        </header>
        <div className="wrap grid gap-12 py-12 lg:grid-cols-[1fr_20rem]">
          <div className="min-w-0">
            <Body />
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="sheet p-6">
              <div className="flex min-h-32 items-center justify-center">
                <ProductArt id={main.id} />
              </div>
              <p className="mt-4 font-display text-2xl font-extrabold uppercase">{main[lang].name}</p>
              <p className="data mt-1 text-black/60">{main[lang].sizes}</p>
              <div className="mt-5 grid gap-2">
                <WhatsAppButton message={main[lang].waMessage} label={s.product.askPrice} location="guide-aside" />
                <CallButton lang={lang} location="guide-aside" />
              </div>
            </div>
            <h2 className="kicker mt-8 mb-3">{s.product.relatedH}</h2>
            <ul className="space-y-2">
              {guide.related.map((id) => (
                <li key={id}>
                  <Link className="link" href={pathFor(lang, { kind: "product", id })}>
                    {productById(id)[lang].name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>
      <JsonLd data={graph(articleSchema(lang, guide), breadcrumbs(crumbs))} />
    </PageShell>
  );
}
