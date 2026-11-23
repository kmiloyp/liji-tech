import type { Metadata } from "next";
import { t } from "@/content/strings";
import { pageMetadata } from "@/lib/meta";
import { HomeView } from "@/views/HomeView";

export const metadata: Metadata = pageMetadata("es", { kind: "home" }, t("es").home);

export default function Page() {
  return <HomeView lang="es" />;
}
