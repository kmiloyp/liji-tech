import type { Lang } from "@/content/catalog";
import { t } from "@/content/strings";
import { telHref, trackAttrs, waHref } from "@/lib/contact";
import { ChatIcon, PhoneIcon } from "./icons";

/** Barra fija inferior en celular con WhatsApp y llamada. */
export function MobileBar({ lang, waMessage }: { lang: Lang; waMessage: string }) {
  const s = t(lang);
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-rule bg-paper/95 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a
        href={waHref(waMessage)}
        target="_blank"
        rel="noopener"
        className="btn btn-wa"
        {...trackAttrs("whatsapp", "mobile-bar")}
      >
        <ChatIcon />
        {s.wa}
      </a>
      <a href={telHref} className="btn btn-call bg-paper" {...trackAttrs("call", "mobile-bar")}>
        <PhoneIcon />
        {s.call}
      </a>
    </div>
  );
}
