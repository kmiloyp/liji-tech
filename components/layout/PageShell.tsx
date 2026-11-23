import { ViewTransition, type ReactNode } from "react";
import type { Lang } from "@/content/catalog";
import { t } from "@/content/strings";
import { MobileBar } from "../conversion/MobileBar";
import { Footer } from "./Footer";
import { Header } from "./Header";

/**
 * Estructura de cada página. Recibe del servidor la URL equivalente en el otro
 * idioma (altHref) y el mensaje de WhatsApp de esa página.
 */
export function PageShell({
  lang,
  altHref,
  waMessage,
  children,
}: {
  lang: Lang;
  altHref: string;
  waMessage?: string;
  children: ReactNode;
}) {
  const msg = waMessage ?? t(lang).waDefault;
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded bg-brand px-4 py-2 text-brand-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {t(lang).skip}
      </a>
      <Header lang={lang} altHref={altHref} waMessage={msg} />
      {/* Transición suave entre páginas (View Transitions API, sin JS propio). */}
      <ViewTransition>
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
      </ViewTransition>
      <Footer lang={lang} waMessage={msg} />
      <MobileBar lang={lang} waMessage={msg} />
    </>
  );
}
