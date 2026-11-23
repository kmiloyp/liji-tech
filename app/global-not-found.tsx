import type { Metadata } from "next";
import Link from "next/link";
import { fontVars } from "./fonts";
import { Diamond } from "@/components/labels/Diamond";
import { Logo } from "@/components/layout/Logo";
import { hazardById } from "@/content/catalog";
import { products } from "@/content/products";
import { strings } from "@/content/strings";
import { pathFor } from "@/lib/routes";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 | Liji Tech",
  description: "Page not found. Página no encontrada.",
};

/**
 * 404 global (hay dos layouts raíz, uno por idioma). Bilingüe, con enlaces al catálogo.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontVars}>
      <body className="min-h-dvh bg-paper text-ink antialiased">
        <header className="border-b border-rule">
          <div className="wrap flex h-16 items-center">
            <Link href="/" aria-label="Liji Tech, home">
              <Logo />
            </Link>
          </div>
        </header>
        <main className="wrap grid gap-12 py-16 md:grid-cols-2">
          {(["en", "es"] as const).map((lang) => {
            const s = strings[lang];
            return (
              <section key={lang} lang={lang} aria-labelledby={`nf-${lang}`}>
                {lang === "en" ? (
                  <h1 id="nf-en" className="display text-5xl">
                    {s.notFound.h1}
                  </h1>
                ) : (
                  <h2 id="nf-es" className="display text-5xl">
                    {s.notFound.h1}
                  </h2>
                )}
                <p className="mt-4 text-ink-2">{s.notFound.p}</p>
                <ul className="mt-4 space-y-2">
                  {products.map((p) => (
                    <li key={p.id}>
                      <Link className="link" href={pathFor(lang, { kind: "product", id: p.id })}>
                        {p[lang].name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-6">
                  <Link className="btn btn-wa" href={pathFor(lang, { kind: "home" })}>
                    {s.notFound.home}
                  </Link>
                </p>
              </section>
            );
          })}
          <div className="pointer-events-none fixed right-6 bottom-6 hidden w-40 rotate-12 opacity-90 md:block" aria-hidden="true">
            <Diamond hazard={hazardById("9-miscellaneous")} />
          </div>
        </main>
      </body>
    </html>
  );
}
