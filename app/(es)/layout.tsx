import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { RootShell } from "@/components/layout/RootShell";
import { rootMetadata } from "@/lib/meta";
import "../globals.css";

export const metadata: Metadata = rootMetadata();
export const viewport: Viewport = { themeColor: "#08703F" };

export default function SpanishRootLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}
