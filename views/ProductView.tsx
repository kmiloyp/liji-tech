import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/conversion/ContactButtons";
import { OrderBuilder } from "@/components/conversion/OrderBuilder";
import { CargoTag, tagDesigns, type CargoTagDesign } from "@/components/labels/CargoTag";
import { Diamond } from "@/components/labels/Diamond";
import { LithiumMark } from "@/components/labels/LithiumMark";
import { ProcessArt } from "@/components/labels/ProcessArt";
import { ProductArt } from "@/components/labels/ProductArt";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageShell } from "@/components/layout/PageShell";
import { ColorExplorer } from "@/components/motion/ColorExplorer";
import { ProcessScroll } from "@/components/motion/ProcessScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { hazardClasses, lithiumMarks, thermalColors, type Lang } from "@/content/catalog";
import { guideById } from "@/content/guides";
import { productById, type Product } from "@/content/products";
import { site } from "@/content/site";
import { t } from "@/content/strings";
import { otherLang, pathFor } from "@/lib/routes";
import { breadcrumbs, faqSchema, graph, productSchema } from "@/lib/schema";
import { Faq } from "./HomeView";

export function ProductView({ lang, product }: { lang: Lang; product: Product }) {
  const s = t(lang);
  const c = product[lang];
  const page = { kind: "product", id: product.id } as const;
  const crumbs = [
    { name: s.breadcrumbHome, path: pathFor(lang, { kind: "home" }) },
    { name: c.name, path: pathFor(lang, page) },
  ];

  return (
    <PageShell lang={lang} altHref={pathFor(otherLang(lang), page)} waMessage={c.waMessage}>
      <article>
        {/* Encabezado: definición directa + contacto */}
        <header className="border-b border-rule">
          <div className="wrap grid items-center gap-10 pt-8 pb-12 md:grid-cols-[1.2fr_1fr] md:pt-10 md:pb-16">
            <div>
              <Breadcrumbs lang={lang} items={crumbs} />
              <h1 className="display mt-6 text-[clamp(2.4rem,5vw,4.25rem)]">{c.h1}</h1>
              <p className="mt-5 max-w-[56ch] text-lg leading-relaxed">{c.definition}</p>
              {!c.tables?.length &&
                c.notes?.map((n) => (
                  <p key={n} className="mt-3 max-w-[56ch] text-ink-2">
                    {n}
                  </p>
                ))}
              <div className="mt-7 flex flex-wrap gap-3">
                <WhatsAppButton message={c.waMessage} label={s.product.askPrice} location="product-hero" />
                <CallButton lang={lang} location="product-hero" />
              </div>
            </div>
            <div className="sheet flex min-h-64 items-center justify-center p-8 md:min-h-80">
              <ProductArt id={product.id} size="lg" />
            </div>
          </div>
        </header>

        <Showcase lang={lang} id={product.id} />

        {/* Tamaños */}
        {c.tables?.length ? (
          <section aria-labelledby="sizes-h" className="py-14 md:py-20">
            <div className="wrap">
              <h2 id="sizes-h" className="h2">
                {s.product.sizesH}
              </h2>
              <div className={`mt-8 grid gap-10 ${c.tables && c.tables.length > 1 ? "lg:grid-cols-[2fr_1fr]" : ""}`}>
                {c.tables?.map((tb) => (
                  <div key={tb.caption} className="overflow-x-auto">
                    <table className="spec">
                      <caption>{tb.caption}</caption>
                      <thead>
                        <tr>
                          {tb.head.map((hd) => (
                            <th key={hd} scope="col">
                              {hd}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tb.rows.map((row, ri) => (
                          <tr key={ri}>
                            {row.map((cell, ci) =>
                              ci === 0 ? (
                                <th key={ci} scope="row" className="font-semibold">
                                  {cell}
                                </th>
                              ) : (
                                <td key={ci} className={/^\d/.test(cell) ? "data whitespace-nowrap" : undefined}>
                                  {cell}
                                </td>
                              ),
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
              {c.notes?.map((n) => (
                <p key={n} className="mt-5 max-w-[70ch] text-ink-2">
                  {n}
                </p>
              ))}
              {(product.category === "hazmat" || product.id === "air-cargo-labels") && (
                <p className="mt-5 max-w-[75ch] text-sm text-ink-2">{s.markNote}</p>
              )}
            </div>
          </section>
        ) : null}

        {/* Pedido */}
        <section aria-labelledby="order-h" className="bg-liner py-14 md:py-20">
          <div className="wrap grid gap-10 md:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 id="order-h" className="h2">
                {s.home.orderH}
              </h2>
              <p className="mt-3 text-ink-2">{s.home.orderP}</p>
              <p className="mt-6 text-ink-2">
                {s.call}:{" "}
                <a href={`tel:${site.phoneE164}`} className="link" data-track="call" data-track-location="product-order">
                  {site.phoneDisplay}
                </a>
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-paper p-6 md:p-8">
              <OrderBuilder s={s.order} whatsapp={site.whatsapp} defaultType={product.orderType} />
            </div>
          </div>
        </section>

        {/* Preguntas */}
        <section aria-labelledby="faq-h" className="py-14 md:py-20">
          <div className="wrap grid gap-8 md:grid-cols-[1fr_2fr]">
            <h2 id="faq-h" className="h2">
              {s.product.faqH}
            </h2>
            <Faq items={c.faq} />
          </div>
        </section>

        {/* Guías y relacionados */}
        <section aria-labelledby="related-h" className="border-t border-rule bg-liner py-14 md:py-20">
          <div className="wrap">
            {product.guides.length > 0 && (
              <div className="mb-12">
                <h2 className="h2 text-[clamp(1.7rem,3vw,2.3rem)]">{s.product.guideH}</h2>
                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                  {product.guides.map((gid) => {
                    const g = guideById(gid);
                    return (
                      <li key={gid}>
                        <Link
                          href={pathFor(lang, { kind: "guide", id: gid })}
                          className="group flex items-center justify-between gap-4 rounded-lg border border-rule bg-paper p-5 hover:border-brand"
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
                    );
                  })}
                </ul>
              </div>
            )}
            <h2 id="related-h" className="h2 text-[clamp(1.7rem,3vw,2.3rem)]">
              {s.product.relatedH}
            </h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-3">
              {product.related.map((rid) => {
                const r = productById(rid);
                return (
                  <li key={rid}>
                    <Link
                      href={pathFor(lang, { kind: "product", id: rid })}
                      className="peel sheet group flex h-full flex-col justify-between gap-5 p-5"
                    >
                      <span>
                        <span className="block font-display text-2xl leading-none font-extrabold uppercase">{r[lang].name}</span>
                        <span className="data mt-2 block text-black/60">{r[lang].sizes}</span>
                      </span>
                      <ProductArt id={rid} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </article>

      <JsonLd
        data={graph(
          productSchema(lang, product),
          breadcrumbs(crumbs),
          faqSchema(c.faq),
        )}
      />
    </PageShell>
  );
}

/** Bloque visual propio de cada familia. */
function Showcase({ lang, id }: { lang: Lang; id: string }) {
  const s = t(lang);
  if (id === "hazard-class-labels" || id === "hazmat-placards") {
    return (
      <section aria-label={productById(id)[lang].name} className="py-14 md:py-20">
        <ul className="wrap grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {hazardClasses.map((h) => (
            <li key={h.id} className="flex flex-col items-center text-center">
              <Diamond hazard={h} className="w-full max-w-40 drop-shadow-[0_6px_8px_rgb(6_40_24/0.16)]" />
              <span className="data mt-2 text-ink-2">
                {lang === "en" ? "Class" : "Clase"} {h.number}
              </span>
              <span className="text-sm font-semibold">{h[lang]}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  if (id === "lithium-battery-labels") {
    return (
      <section aria-label={productById(id)[lang].name} className="py-14 md:py-20">
        <ul className="wrap grid grid-cols-2 gap-6 md:grid-cols-5">
          {lithiumMarks.map((m) => (
            <li key={m} className="flex flex-col items-center">
              <LithiumMark un={m} className="w-full max-w-44 drop-shadow-sm" />
              <span className="data mt-2">{m} · 4.5 × 5 in</span>
            </li>
          ))}
          <li className="flex flex-col items-center">
            <Diamond hazard={hazardClasses.find((h) => h.number === "9")!} className="w-full max-w-44" />
            <span className="data mt-2">{lang === "en" ? "Class 9" : "Clase 9"} · 4 × 4 in</span>
          </li>
        </ul>
      </section>
    );
  }
  if (id === "air-cargo-labels" || id === "handling-labels") {
    const designs: [CargoTagDesign, string][] =
      id === "air-cargo-labels"
        ? [
            [tagDesigns.cargoAircraftOnly, "4.5 × 4.75 in"],
            [tagDesigns.dryIce, "4 × 5 in"],
            [tagDesigns.rushAog, "4 × 4 in"],
            [tagDesigns.liveAnimals, "4 × 6 in"],
            [tagDesigns.perishable, "3 × 4 in"],
            [tagDesigns.overpack, "2 × 6 in"],
          ]
        : [
            [tagDesigns.fragile, "4 × 6 in"],
            [tagDesigns.thisSideUp, "3 × 5 in"],
            [tagDesigns.doNotStack, "3 × 4 in"],
            [tagDesigns.keepDry, "4 × 4 in"],
          ];
    return (
      <section aria-label={productById(id)[lang].name} className="bg-liner py-14 md:py-20">
        <ul className="wrap flex flex-wrap items-end justify-center gap-6">
          {designs.map(([d, size]) => (
            <li key={d.lines.join()} className="sheet flex flex-col items-center gap-2 p-4">
              <CargoTag design={d} className="h-32 w-auto md:h-40" />
              <span className="data text-black/60">{size}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  if (id === "thermal-labels") {
    return (
      <section aria-labelledby="colors-h" className="py-14 md:py-20">
        <div className="wrap">
          <h2 id="colors-h" className="h2">
            {s.product.colorsH}
          </h2>
          <p className="mt-3 mb-8 max-w-[60ch] text-ink-2">{s.product.colorsP}</p>
          <ColorExplorer
            groups={[
              { title: s.product.groupBoth, colors: thermalColors.both },
              { title: s.product.groupTransfer, colors: thermalColors.transferOnly },
            ]}
            labels={{ code: s.product.code, ref: s.product.ref, aria: s.product.colorAria, rollAlt: s.product.rollAlt }}
          />
        </div>
      </section>
    );
  }
  if (id === "custom-labels") {
    return (
      <section aria-labelledby="process-h" className="py-14 md:py-20">
        <div className="wrap">
          <h2 id="process-h" className="h2 mb-10">
            {s.product.processH}
          </h2>
          <ProcessScroll
            steps={s.process}
            frames={s.process.map((_, i) => (
              <ProcessArt key={i} step={i} className="h-full max-h-72 w-full" />
            ))}
          />
          <div className="mt-14 rounded-lg bg-brand p-6 text-brand-ink md:p-10">
            <h3 className="font-display text-3xl font-extrabold uppercase">{s.home.needH}</h3>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {s.need.map((n, i) => (
                <li key={n} className="flex gap-3">
                  <span className="data pt-1">0{i + 1}</span>
                  <span>{n}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    );
  }
  return null;
}
