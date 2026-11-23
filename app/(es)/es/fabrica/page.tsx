import type { Metadata } from "next";
import { t } from "@/content/strings";
import { pageMetadata } from "@/lib/meta";
import { FactoryView } from "@/views/FactoryView";

export const metadata: Metadata = pageMetadata("es", { kind: "factory" }, t("es").factory);

export default function Page() {
  return <FactoryView lang="es" />;
}
