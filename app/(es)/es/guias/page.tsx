import type { Metadata } from "next";
import { t } from "@/content/strings";
import { pageMetadata } from "@/lib/meta";
import { GuidesIndexView } from "@/views/GuidesIndexView";

export const metadata: Metadata = pageMetadata("es", { kind: "guides" }, t("es").guidesIndex);

export default function Page() {
  return <GuidesIndexView lang="es" />;
}
