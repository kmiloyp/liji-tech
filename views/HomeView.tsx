import Link from "next/link";
import type { CSSProperties } from "react";
import { CallButton, WhatsAppButton } from "@/components/conversion/ContactButtons";
import { OrderBuilder } from "@/components/conversion/OrderBuilder";
import { CargoTag, tagDesigns } from "@/components/labels/CargoTag";
import { Diamond } from "@/components/labels/Diamond";
import { LithiumMark } from "@/components/labels/LithiumMark";
import { ProductArt } from "@/components/labels/ProductArt";
import { PageShell } from "@/components/layout/PageShell";
import { CatalogGrid } from "@/components/motion/CatalogGrid";
import { LabelFinder } from "@/components/motion/LabelFinder";
import { RollStrip } from "@/components/motion/RollStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { type Lang, hazardById, markGuide, thermalColors } from "@/content/catalog";
import { guides } from "@/content/guides";
import { products } from "@/content/products";
import { addressLine, site } from "@/content/site";
import { fill, t, whoProducts } from "@/content/strings";
import { mapsHref } from "@/lib/maps";
import { otherLang, pathFor } from "@/lib/routes";
import { faqSchema, graph } from "@/lib/schema";

const HERO = [
  "2-flammable-gas",
  "2-non-flammable-gas",
  "5.1-oxidizer",
  "2-toxic-gas",
  "4-flammable-solid",
  "3-flammable-liquid",
  "5.2-organic-peroxide",
  "8-corrosive",
  "9-miscellaneous",
];

export function HomeView({ lang }: { lang: Lang }) {
  const s = t(lang);
  const h = s.home;
  const vars = { tel: site.phoneDisplay, addr: addressLine };
  const productPages = Object.fromEntries(
    products.map((p) => [p.id, { id: p.id, name: p[lang].name, href: pathFor(lang, { kind: "product", id: p.id }) }]),
  );

  return (
    <PageShell lang={lang} altHref={pathFor(otherLang(lang), { kind: "home" })}>
      {/* ---------- Hero ---------- */}
      <section className="overflow-hidden">
        <div className="wrap grid items-center gap-5 pt-5 pb-10 md:grid-cols-[1.05fr_1fr] md:gap-10 md:pt-14 md:pb-14">
          <div className="md:order-none">
            <p className="kicker mb-5">
              <span className="font-semibold text-brand">{h.eyebrow}</span>
              <span aria-hidden="true"> · </span>
              <span lang={otherLang(lang)}>{h.eyebrowLang}</span>
            </p>
            <h1 className="display text-[clamp(2.5rem,5.2vw,4.75rem)]">
              {h.h1.map((line, i) => (
                <span key={line} className="line-mask" style={{ "--l": i } as CSSProperties}>
                  <span className={i === h.h1.length - 1 ? "text-brand" : undefined}>{line}</span>
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-[44ch] text-lg text-ink-2">{h.lede}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppButton message={s.waDefault} label={h.ctaWa} location="hero" />
              <CallButton lang={lang} location="hero" />
            </div>
          </div>
          <div
            role="img"
            aria-label={h.heroArt}
            className="relative order-first mx-auto aspect-square w-full max-w-[13.5rem] sm:max-w-[22rem] md:order-none md:max-w-[34rem]"
          >
            {HERO.map((id, i) => {
              const r = Math.floor(i / 3);
              const c = i % 3;
              const size = 30;
              const step = size / 2 + 2.2;
              const style = {
                left: `${50 - size / 2 + (c - r) * step}%`,
                top: `${2 + (c + r) * step}%`,
                width: `${size}%`,
                "--i": i,
                "--rot": `${(i % 2 ? 1 : -1) * (6 + i)}deg`,
                "--fx": `${(c - 1) * 14}px`,
              } as CSSProperties;
              return (
                <div key={id} className="stick absolute drop-shadow-[0_8px_10px_rgb(6_40_24/0.18)]" style={style}>
                  <Diamond hazard={hazardById(id)} className="block w-full" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="wrap">
          <dl className="grid grid-cols-2 border-t border-rule md:grid-cols-4">
            {h.facts.map(([k, v], i) => (
              <div
                key={k}
                className={`py-5 pr-4 ${i % 2 ? "border-l border-rule pl-4" : ""} ${
                  i > 1 ? "border-t border-rule md:border-t-0" : ""
                } ${i === 2 ? "md:border-l md:pl-4" : ""}`}
              >
                <dt className="kicker text-brand">{k}</dt>
                <dd className="mt-1 font-display text-[1.45rem] leading-tight font-bold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Cinta de rollo ---------- */}
      <div className="border-y border-dashed border-ink/15 bg-liner py-10">
        <RollStrip label={h.rollAria}>
          <ul className="flex gap-3 px-4">
            {rollItems().map((it, i) => (
              <li key={i} className="sheet flex w-44 shrink-0 flex-col items-center justify-between gap-2 p-3 sm:w-52">
                <div className="flex h-32 items-center justify-center sm:h-36">{it.art}</div>
                <span className="data text-[0.72rem] text-black/60">{it.caption}</span>
              </li>
            ))}
          </ul>
        </RollStrip>
      </div>

      {/* ---------- Catálogo ---------- */}
      <section id="labels" aria-labelledby="labels-h" className="py-16 md:py-24">
        <div className="wrap">
          <h2 id="labels-h" className="h2">
            {h.catH}
          </h2>
          <p className="mt-3 mb-8 max-w-[60ch] text-ink-2">{h.catP}</p>
          <CatalogGrid
            filterLabel={h.filterAria}
            filters={[
              { key: "all", label: h.filters.all },
              { key: "hazmat", label: h.filters.hazmat },
              { key: "cargo", label: h.filters.cargo },
              { key: "thermal", label: h.filters.thermal },
              { key: "custom", label: h.filters.custom },
            ]}
            items={products.map((p, i) => ({
              id: p.id,
              category: p.category,
              span: i === 0 ? "wide" : p.id === "custom-labels" ? "full" : undefined,
              node: (
                <Link
                  href={pathFor(lang, { kind: "product", id: p.id })}
                  className="peel sheet group flex h-full min-h-64 flex-col justify-between gap-6 p-5 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div>
                    <h3 className="font-display text-[1.65rem] leading-none font-extrabold uppercase">{p[lang].name}</h3>
                    <p className="data mt-2 text-black/60">{p[lang].sizes}</p>
                  </div>
                  <div className="flex min-h-28 items-end">
                    <ProductArt id={p.id} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-[#08703F]">
                    {h.seeSizes}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              ),
            }))}
          />
        </div>
      </section>

      {/* ---------- Buscador + armador de pedido ---------- */}
      <section id="order" aria-labelledby="order-h" className="bg-liner py-16 md:py-24">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-rule bg-paper p-6 md:p-8">
            <h2 className="h2 text-[clamp(1.8rem,3.2vw,2.5rem)]">{h.finderH}</h2>
            <p className="mt-2 mb-6 text-ink-2">{h.finderP}</p>
            <LabelFinder
              s={s.finder}
              who={s.who}
              whoProducts={whoProducts}
              pages={productPages}
              whatsapp={site.whatsapp}
            />
          </div>
          <div className="rounded-lg border border-rule bg-paper p-6 md:p-8">
            <h2 id="order-h" className="h2 text-[clamp(1.8rem,3.2vw,2.5rem)]">
              {h.orderH}
            </h2>
            <p className="mt-2 text-ink-2">{h.orderP}</p>
            <ol className="my-6 grid gap-2 sm:grid-cols-3">
              {h.steps.map((step, i) => (
                <li key={step} className="flex gap-2 text-sm">
                  <span className="data grid size-6 shrink-0 place-items-center rounded-full bg-brand text-brand-ink">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
            <OrderBuilder s={s.order} whatsapp={site.whatsapp} />
          </div>
        </div>
      </section>

      {/* ---------- Según lo que envía ---------- */}
      <section aria-labelledby="who-h" className="py-16 md:py-24">
        <div className="wrap">
          <h2 id="who-h" className="h2">
            {h.whoH}
          </h2>
          <p className="mt-3 mb-8 max-w-[60ch] text-ink-2">{h.whoP}</p>
          <div className="overflow-x-auto">
            <table className="spec min-w-[36rem]">
              <thead>
                <tr>
                  <th scope="col">{h.whoHead[0]}</th>
                  <th scope="col">{h.whoHead[1]}</th>
                </tr>
              </thead>
              <tbody>
                {s.who.map(([who, labels], i) => (
                  <tr key={who}>
                    <th scope="row" className="w-[38%] font-semibold">
                      {who}
                    </th>
                    <td>
                      {labels}
                      <span className="mt-1 block">
                        {whoProducts[i].slice(0, 2).map((id) => (
                          <Link key={id} href={productPages[id].href} className="link mr-4 text-sm">
                            {productPages[id].name}
                          </Link>
                        ))}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------- A medida ---------- */}
      <section aria-labelledby="custom-h" className="bg-brand text-brand-ink">
        <div className="wrap grid items-center gap-10 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <h2 id="custom-h" className="h2">
              {h.customH}
            </h2>
            <p className="mt-4 max-w-[52ch] text-lg opacity-90">{h.customP}</p>
            <h3 className="mt-8 font-display text-2xl font-extrabold uppercase">{h.needH}</h3>
            <ol className="mt-3 grid gap-2 sm:grid-cols-2">
              {s.need.map((n, i) => (
                <li key={n} className="flex gap-3">
                  <span className="data pt-1">0{i + 1}</span>
                  <span>{n}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton
                message={products.find((p) => p.id === "custom-labels")![lang].waMessage}
                label={h.customCta}
                location="custom-section"
                className="bg-paper text-ink hover:bg-ink hover:text-paper"
              />
              <Link href={pathFor(lang, { kind: "product", id: "custom-labels" })} className="btn border-1.5 border border-current">
                {products.find((p) => p.id === "custom-labels")![lang].name}
              </Link>
            </div>
          </div>
          <div className="sheet flex min-h-72 items-center justify-center p-8">
            <ProductArt id="custom-labels" size="lg" />
          </div>
        </div>
      </section>

      {/* ---------- Guía de marcas ---------- */}
      <section aria-labelledby="guide-h" className="py-16 md:py-24">
        <div className="wrap">
          <h2 id="guide-h" className="h2">
            {h.guideH}
          </h2>
          <p className="mt-3 mb-8 max-w-[60ch] text-ink-2">{h.guideP}</p>
          <div className="overflow-x-auto">
            <table className="spec min-w-[34rem]">
              <thead>
                <tr>
                  {h.guideHead.map((c) => (
                    <th key={c} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {markGuide.map((m) => (
                  <tr key={m.mark}>
                    <th scope="row" className="data font-semibold whitespace-nowrap text-ink">
                      {m.mark}
                    </th>
                    <td>{m[lang]}</td>
                    <td className="data whitespace-nowrap">{m.catalogSize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-[75ch] text-sm text-ink-2">{s.markNote}</p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {guides.map((g) => (
              <li key={g.id}>
                <Link
                  href={pathFor(lang, { kind: "guide", id: g.id })}
                  className="group flex h-full items-center justify-between gap-4 rounded-lg border border-rule p-5 hover:border-brand"
                >
                  <span>
                    <span className="block font-display text-xl font-extrabold uppercase">{g[lang].h1}</span>
                    <span className="mt-1 block text-sm text-ink-2">{g[lang].summary}</span>
                  </span>
                  <span aria-hidden="true" className="text-2xl text-brand transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Preguntas ---------- */}
      <section aria-labelledby="faq-h" className="border-t border-rule bg-liner py-16 md:py-24">
        <div className="wrap grid gap-8 md:grid-cols-[1fr_2fr]">
          <h2 id="faq-h" className="h2">
            {h.faqH}
          </h2>
          <Faq items={s.faq} vars={vars} />
        </div>
      </section>

      {/* ---------- Contacto ---------- */}
      <section aria-labelledby="contact-h" className="py-16 md:py-24">
        <div className="wrap grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 id="contact-h" className="display text-[clamp(2.6rem,6vw,5rem)]">
              {h.contactH}
            </h2>
            <p className="mt-4 text-lg text-ink-2">{fill(h.contactP, vars)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton message={s.waDefault} label={h.ctaWa} location="contact" />
              <CallButton lang={lang} location="contact" />
            </div>
          </div>
          <address className="not-italic">
            <p className="kicker">{h.plant}</p>
            <p className="mt-2 font-display text-2xl font-bold">{site.manufacturer.name}</p>
            <p className="text-ink-2">{addressLine}</p>
            <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              <a href={mapsHref} className="link" target="_blank" rel="noopener">
                {s.factory.mapLink}
              </a>
              <Link href={pathFor(lang, { kind: "factory" })} className="link">
                {h.seeFactory}
              </Link>
            </p>
          </address>
        </div>
      </section>

      <JsonLd data={graph(faqSchema(s.faq, vars))} />
    </PageShell>
  );
}

export function Faq({ items, vars }: { items: [string, string][]; vars?: Record<string, string> }) {
  return (
    <div className="divide-y divide-rule border-y border-rule">
      {items.map(([q, a]) => (
        <details key={q} className="group py-1">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
            <h3 className="font-sans text-lg font-semibold">{q}</h3>
            <span
              aria-hidden="true"
              className="mt-1 grid size-6 shrink-0 place-items-center rounded-full border border-rule text-brand transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-[70ch] pb-5 text-ink-2">{vars ? fill(a, vars) : a}</p>
        </details>
      ))}
    </div>
  );
}

function rollItems() {
  const d = (id: string, caption: string) => ({
    art: <Diamond hazard={hazardById(id)} className="size-32 sm:size-36" />,
    caption,
  });
  const swatch = (i: number) => {
    const c = thermalColors.both[i];
    return {
      art: <span className="block size-28 rounded-full shadow-inner sm:size-32" style={{ background: c.hexAprox }} />,
      caption: `${c.code} · ${c.ref}`,
    };
  };
  return [
    d("3-flammable-liquid", "CLASS 3 · 4 × 4 in"),
    { art: <CargoTag design={tagDesigns.cargoAircraftOnly} className="w-32" />, caption: "CAO · 4.5 × 4.75 in" },
    { art: <LithiumMark un="UN3481" className="w-28" />, caption: "UN3481 · 4.5 × 5 in" },
    { art: <CargoTag design={tagDesigns.fragile} className="w-40" />, caption: "FRAGILE · 4 × 6 in" },
    d("2-non-flammable-gas", "CLASS 2 · 4 × 4 in"),
    swatch(1),
    { art: <CargoTag design={tagDesigns.rushAog} className="w-32" />, caption: "RUSH AOG · 4 × 4 in" },
    swatch(6),
    d("9-miscellaneous", "CLASS 9 · 4 × 4 in"),
    { art: <CargoTag design={tagDesigns.thisSideUp} className="w-28" />, caption: "THIS SIDE UP · 3 × 5 in" },
    swatch(10),
    d("5.1-oxidizer", "5.1 · 4 × 4 in"),
    { art: <CargoTag design={tagDesigns.dryIce} className="w-28" />, caption: "UN1845 · 4 × 5 in" },
    { art: <LithiumMark un="UN3480" className="w-28" />, caption: "UN3480 · 4.5 × 5 in" },
    d("8-corrosive", "CLASS 8 · 4 × 4 in"),
    { art: <CargoTag design={tagDesigns.perishable} className="w-36" />, caption: "PERISHABLE · 3 × 4 in" },
    swatch(14),
    d("2-flammable-gas", "CLASS 2 · 4 × 4 in"),
  ];
}
