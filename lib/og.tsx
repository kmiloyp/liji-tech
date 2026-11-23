import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { addressLine, site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const fontsDir = join(process.cwd(), "assets/fonts");
let fontCache: Promise<{ name: string; data: Buffer; weight: 500 | 800; style: "normal" }[]> | null = null;
function fonts() {
  fontCache ??= Promise.all([
    readFile(join(fontsDir, "BigShoulders-ExtraBold.ttf")).then((data) => ({
      name: "Big Shoulders",
      data,
      weight: 800 as const,
      style: "normal" as const,
    })),
    readFile(join(fontsDir, "PublicSans-Medium.ttf")).then((data) => ({
      name: "Public Sans",
      data,
      weight: 500 as const,
      style: "normal" as const,
    })),
    readFile(join(fontsDir, "IBMPlexMono-Medium.ttf")).then((data) => ({
      name: "IBM Plex Mono",
      data,
      weight: 500 as const,
      style: "normal" as const,
    })),
  ]);
  return fontCache;
}

const DIAMONDS: { bg: string; fg: string; n: string }[] = [
  { bg: "#D52B1E", fg: "#FFFFFF", n: "3" },
  { bg: "#00843D", fg: "#FFFFFF", n: "2" },
  { bg: "#FFCD00", fg: "#141414", n: "5.1" },
  { bg: "#FFFFFF", fg: "#141414", n: "9" },
];

/** Imagen Open Graph de una página: etiqueta superior, título y rombos de clase. */
export async function renderOg({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  const size = title.length > 48 ? 76 : title.length > 30 ? 92 : 108;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FBFCFA",
          color: "#121715",
          fontFamily: "Public Sans",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 0 56px 72px", width: 780 }}>
          <div style={{ display: "flex", fontFamily: "IBM Plex Mono", fontSize: 24, letterSpacing: 2, color: "#08703F" }}>
            {kicker.toUpperCase()}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Big Shoulders",
                fontSize: size,
                lineHeight: 0.95,
                textTransform: "uppercase",
                letterSpacing: -1,
              }}
            >
              {title}
            </div>
            {sub ? <div style={{ marginTop: 22, fontSize: 28, color: "#4A5450", maxWidth: 680 }}>{sub}</div> : null}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 34, height: 34, background: "#08703F", transform: "rotate(45deg)", borderRadius: 3 }} />
            <div style={{ fontFamily: "Big Shoulders", fontSize: 40 }}>{site.name}</div>
            <div style={{ fontFamily: "IBM Plex Mono", fontSize: 20, color: "#4A5450", marginLeft: 12 }}>{addressLine}</div>
          </div>
        </div>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 420, background: "#E4E9E5", display: "flex" }}>
          {DIAMONDS.map((d, i) => {
            const pos = [
              [140, 40],
              [250, 150],
              [30, 150],
              [140, 260],
            ][i];
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: pos[0],
                  top: pos[1] + 60,
                  width: 150,
                  height: 150,
                  background: d.bg,
                  border: d.bg === "#FFFFFF" ? "3px solid #141414" : "none",
                  transform: "rotate(45deg)",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  boxShadow: "0 12px 24px rgba(6,77,44,0.25)",
                }}
              >
                <div
                  style={{
                    transform: "rotate(-45deg)",
                    fontFamily: "Big Shoulders",
                    fontSize: 40,
                    color: d.fg,
                    margin: "0 18px 14px 0",
                  }}
                >
                  {d.n}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts() },
  );
}
