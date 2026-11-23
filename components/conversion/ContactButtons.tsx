import type { Lang } from "@/content/catalog";
import { site } from "@/content/site";
import { t } from "@/content/strings";
import { telHref, trackAttrs, waHref } from "@/lib/contact";
import { ChatIcon, PhoneIcon } from "./icons";

export { ChatIcon, PhoneIcon };

export function WhatsAppButton({
  message,
  label,
  location,
  className = "",
}: {
  message: string;
  label: string;
  location: string;
  className?: string;
}) {
  return (
    <a
      href={waHref(message)}
      className={`btn btn-wa ${className}`}
      target="_blank"
      rel="noopener"
      {...trackAttrs("whatsapp", location)}
    >
      <ChatIcon />
      {label}
    </a>
  );
}

/** Botón de llamada. Siempre muestra el número como texto. */
export function CallButton({
  lang,
  location,
  className = "",
  showNumber = true,
}: {
  lang: Lang;
  location: string;
  className?: string;
  showNumber?: boolean;
}) {
  const s = t(lang);
  return (
    <a href={telHref} className={`btn btn-call ${className}`} {...trackAttrs("call", location)}>
      <PhoneIcon />
      {s.call}
      {showNumber && <span className="data font-medium">{site.phoneDisplay}</span>}
    </a>
  );
}
