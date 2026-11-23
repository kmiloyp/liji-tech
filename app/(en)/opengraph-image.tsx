import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { t } from "@/content/strings";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = t("en").home.title;

export default function Image() {
  const h = t("en").home;
  return renderOg({ kicker: "Made in Miami, FL 33166", title: h.h1.join(" "), sub: h.facts.map((f) => f[0]).join(" · ") });
}
