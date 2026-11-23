"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Un solo oyente para todo el sitio. Cada enlace de WhatsApp o llamada lleva
 * data-track="whatsapp|call" y data-track-location="<dónde está el botón>".
 * Registra: canal, ubicación, página e idioma, en Vercel Analytics y,
 * si está configurado, en GA4.
 */
export function ClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const channel = el.dataset.track ?? "unknown";
      const props = {
        location: el.dataset.trackLocation ?? "unknown",
        page: window.location.pathname,
        lang: document.documentElement.lang || "en",
      };
      const name = channel === "call" ? "call_click" : "whatsapp_click";
      track(name, props);
      window.gtag?.("event", name, props);
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
