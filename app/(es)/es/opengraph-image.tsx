import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { t } from "@/content/strings";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = t("es").home.title;

export default function Image() {
  const h = t("es").home;
  return renderOg({ kicker: "Hecho en Miami, FL 33166", title: h.h1.join(" "), sub: h.facts.map((f) => f[0]).join(" · ") });
}
