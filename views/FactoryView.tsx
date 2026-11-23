import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/conversion/ContactButtons";
import { ProcessArt } from "@/components/labels/ProcessArt";
import { ProductArt } from "@/components/labels/ProductArt";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageShell } from "@/components/layout/PageShell";
import { ProcessScroll } from "@/components/motion/ProcessScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Lang } from "@/content/catalog";
import { products } from "@/content/products";
import { addressLine, site } from "@/content/site";
import { t } from "@/content/strings";
import { mapsHref } from "@/lib/maps";
import { otherLang, pathFor } from "@/lib/routes";
import { breadcrumbs, etiLabelLocalBusiness, graph } from "@/lib/schema";

/**
 * Página de la planta Eti-Label. A esta página enlaza la ficha de Google de Eti-Label.
 * PENDIENTE: fotos reales de la planta, la prensa y los rollos (public/photos/),
 * y los datos que el cliente confirme (ver AGENTS.md). Mientras, ilustraciones.
 */
export function FactoryView({ lang }: { lang: Lang }) {
  const s = t(lang);
  const f = s.factory;
  const page = { kind: "factory" } as const;
  const crumbs = [
    { name: s.breadcrumbHome, path: pathFor(lang, { kind: "home" }) },
    { name: f.name, path: pathFor(lang, page) },
  ];
  return (
    <PageShell lang={lang} altHref={pathFor(otherLang(lang), page)}>
      <header className="border-b border-rule">
        <div className="wrap grid items-center gap-10 pt-8 pb-12 md:grid-cols-[1.2fr_1fr] md:pt-10 md:pb-16">
          <div>
            <Breadcrumbs lang={lang} items={crumbs} />
            <h1 className="display mt-6 text-[clamp(2.6rem,5.5vw,4.75rem)]">
              {f.h1.split(site.manufacturer.shortName).flatMap((part, i) =>
                i === 0 ? [part] : [<span key={i} className="whitespace-nowrap">{site.manufacturer.shortName}</span>, part],
              )}
            </h1>
            <p className="mt-5 max-w-[56ch] text-lg leading-relaxed">{f.lede}</p>
            <address className="mt-6 not-italic">
              <p className="font-display text-2xl font-bold">{site.manufacturer.name}</p>
              <p className="text-ink-2">{addressLine}</p>
            </address>
          </div>
          <div className="sheet flex aspect-[4/3] items-center justify-center p-10">
            <ProcessArt step={2} className="h-full w-full" />
          </div>
        </div>
      </header>

      <section aria-labelledby="what-h" className="py-14 md:py-20">
        <div className="wrap">
          <h2 id="what-h" className="h2">
            {f.whatH}
          </h2>
          <p className="mt-3 max-w-[62ch] text-lg text-ink-2">{f.whatP}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <li key={p.id}>
                <Link
                  href={pathFor(lang, { kind: "product", id: p.id })}
                  className="peel sheet flex h-full flex-col justify-between gap-5 p-5"
                >
                  <span className="font-display text-xl leading-none font-extrabold uppercase">{p[lang].name}</span>
                  <ProductArt id={p.id} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="how-h" className="bg-liner py-14 md:py-20">
        <div className="wrap">
          <h2 id="how-h" className="h2 mb-10">
            {f.howH}
          </h2>
          <ProcessScroll
            steps={s.process}
            frames={s.process.map((_, i) => (
              <ProcessArt key={i} step={i} className="h-full max-h-72 w-full" />
            ))}
          />
        </div>
      </section>

      <section aria-labelledby="visit-h" className="py-14 md:py-20">
        <div className="wrap grid items-end gap-8 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 id="visit-h" className="h2">
              {f.visitH}
            </h2>
            <address className="mt-4 not-italic">
              <p className="text-lg font-semibold">{site.manufacturer.name}</p>
              <p className="text-lg text-ink-2">{addressLine}</p>
              <p className="mt-2">
                <a href={mapsHref} className="link" target="_blank" rel="noopener">
                  {f.mapLink}
                </a>
              </p>
            </address>
            <p className="mt-6 max-w-[50ch] text-ink-2">{f.visitP}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <WhatsAppButton message={s.waDefault} label={s.home.ctaWa} location="factory" />
            <CallButton lang={lang} location="factory" />
          </div>
        </div>
      </section>

      <JsonLd data={graph(etiLabelLocalBusiness(lang), breadcrumbs(crumbs))} />
    </PageShell>
  );
}
