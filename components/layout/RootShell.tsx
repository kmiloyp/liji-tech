import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import type { ReactNode } from "react";
import { fontVars } from "@/app/fonts";
import type { Lang } from "@/content/catalog";
import { site } from "@/content/site";
import { graph, organization, website } from "@/lib/schema";
import { ClickTracker } from "../conversion/ClickTracker";
import { JsonLd } from "../seo/JsonLd";

/** <html> y <body> de cada idioma (cada grupo de rutas tiene su propio layout raíz). */
export function RootShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={fontVars}>
      <body className="min-h-dvh antialiased">
        {children}
        <JsonLd data={graph(organization(lang), website(lang))} />
        <ClickTracker />
        {/* Vercel Web Analytics solo existe en despliegues de Vercel. */}
        {process.env.VERCEL === "1" && <Analytics />}
        {site.gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${site.gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
