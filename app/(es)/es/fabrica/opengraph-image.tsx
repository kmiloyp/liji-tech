import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { t } from "@/content/strings";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = t("es").factory.title;

export default function Image() {
  const f = t("es").factory;
  return renderOg({ kicker: "Eti-Label Inc.", title: f.h1 });
}
