import Link from "next/link";
import type { Lang } from "@/content/catalog";
import { products } from "@/content/products";
import { addressLine, site } from "@/content/site";
import { t } from "@/content/strings";
import { telHref, trackAttrs, waHref } from "@/lib/contact";
import { pathFor } from "@/lib/routes";
import { Logo } from "./Logo";

export function Footer({ lang, waMessage }: { lang: Lang; waMessage: string }) {
  const s = t(lang);
  const home = pathFor(lang, { kind: "home" });
  return (
    <footer className="border-t border-rule bg-liner pb-28 md:pb-10">
      <div className="wrap grid gap-10 pt-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href={home} aria-label={s.logoAlt} className="inline-block rounded-sm">
            <Logo />
          </Link>
          <p className="mt-4 max-w-[30ch] text-ink-2">{s.footer.tagline}</p>
          <p className="data mt-3 text-ink-2">{s.footer.made}</p>
        </div>

        <nav aria-label={s.footer.labelsH}>
          <h2 className="kicker mb-3">{s.footer.labelsH}</h2>
          <ul className="space-y-2">
            {products.map((p) => (
              <li key={p.id}>
                <Link className="hover:text-brand" href={pathFor(lang, { kind: "product", id: p.id })}>
                  {p[lang].name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={s.footer.moreH}>
          <h2 className="kicker mb-3">{s.footer.moreH}</h2>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-brand" href={`${home}#order`}>
                {s.nav.order}
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand" href={pathFor(lang, { kind: "guides" })}>
                {s.nav.guides}
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand" href={pathFor(lang, { kind: "factory" })}>
                {s.nav.factory}
              </Link>
            </li>
          </ul>
          <h2 className="kicker mt-6 mb-3">{s.footer.langsH}</h2>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-brand" href={pathFor("en", { kind: "home" })} hrefLang="en" lang="en">
                English
              </a>
            </li>
            <li>
              <a className="hover:text-brand" href={pathFor("es", { kind: "home" })} hrefLang="es" lang="es">
                Español
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="kicker mb-3">{s.footer.contactH}</h2>
          <address className="not-italic">
            <p className="font-semibold">{site.name}</p>
            <p className="text-ink-2">{addressLine}</p>
            <p className="mt-3">
              <a className="link" href={telHref} {...trackAttrs("call", "footer")}>
                {site.phoneDisplay}
              </a>
            </p>
            <p className="mt-1">
              <a className="link" href={waHref(waMessage)} target="_blank" rel="noopener" {...trackAttrs("whatsapp", "footer")}>
                WhatsApp
              </a>
            </p>
            <p className="mt-1">
              <a className="link break-all" href={`mailto:${site.orderEmail}`} {...trackAttrs("email", "footer")}>
                {site.orderEmail}
              </a>
            </p>
            <p className="data mt-3 text-ink-2">
              {s.plant.hours[0]}: {s.plant.hours[1]}
              <br />
              {s.plant.hours[2]}: {s.plant.hours[3]}
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
}
