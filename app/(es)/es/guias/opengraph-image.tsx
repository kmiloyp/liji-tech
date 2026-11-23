import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { t } from "@/content/strings";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = t("es").guidesIndex.title;

export default function Image() {
  const g = t("es").guidesIndex;
  return renderOg({ kicker: "Hecho en Miami, FL 33166", title: g.h1, sub: g.lede });
}
