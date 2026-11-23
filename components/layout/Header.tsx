import Link from "next/link";
import type { Lang } from "@/content/catalog";
import { t } from "@/content/strings";
import { otherLang, pathFor } from "@/lib/routes";
import { WhatsAppButton } from "../conversion/ContactButtons";
import { Logo } from "./Logo";

export function Header({ lang, altHref, waMessage }: { lang: Lang; altHref: string; waMessage: string }) {
  const s = t(lang);
  const home = pathFor(lang, { kind: "home" });
  const links = [
    { href: `${home}#labels`, label: s.nav.labels },
    { href: `${home}#order`, label: s.nav.order },
    { href: pathFor(lang, { kind: "guides" }), label: s.nav.guides },
    { href: pathFor(lang, { kind: "factory" }), label: s.nav.factory },
  ];
  const other = otherLang(lang);

  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-paper/92 backdrop-blur-md supports-[backdrop-filter]:bg-paper/85">
      <div className="wrap flex h-16 items-center gap-6 lg:h-[4.5rem]">
        <Link href={home} aria-label={s.logoAlt} className="shrink-0 rounded-sm">
          <Logo />
        </Link>

        <nav aria-label={s.navAria} className="hidden md:block">
          <ul className="flex items-center gap-7 text-[0.95rem] font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink-2 transition-colors hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2.5">
          <a
            href={altHref}
            hrefLang={other}
            lang={other}
            className="data rounded border border-rule px-2.5 py-2 font-medium hover:border-ink"
            title={s.otherLangLabel}
          >
            {s.otherLangShort}
            <span className="sr-only"> · {s.otherLangLabel}</span>
          </a>
          <WhatsAppButton
            message={waMessage}
            label={s.wa}
            location="header"
            className="btn-sm hidden sm:inline-flex"
          />
          {/* Menú en celular, sin JavaScript */}
          <details className="group relative md:hidden">
            <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded border border-rule [&::-webkit-details-marker]:hidden">
              <span className="sr-only">{s.navAria}</span>
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" className="group-open:hidden" />
                <path d="M6 6l12 12M18 6L6 18" className="hidden group-open:block" />
              </svg>
            </summary>
            <nav aria-label={s.navAria} className="sheet absolute right-0 top-12 w-56 p-2 text-ink">
              <ul>
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block rounded px-3 py-2.5 font-medium text-label-ink hover:bg-black/5">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

