import { markGuide, thermalColorCount, thermalColors } from "@/content/catalog";
import { guides } from "@/content/guides";
import { products } from "@/content/products";
import { addressLine, site } from "@/content/site";
import { t } from "@/content/strings";
import { absolute, pathFor } from "@/lib/routes";

/**
 * /llms.txt (https://llmstxt.org), generado desde el contenido.
 * Mismos datos del negocio (nombre, dirección, teléfono) que el resto del sitio.
 */
function build() {
  const en = t("en");
  const lines: string[] = [];
  lines.push(`# ${site.name}`, "");
  lines.push(
    `> ${site.name} sells hazmat, shipping, handling and thermal labels, ribbons and custom flexographic labels made at the ${site.manufacturer.shortName} plant in Miami, Florida. Orders and quotes by WhatsApp or phone, in English or Spanish.`,
    "",
  );
  lines.push("## Facts");
  lines.push(`- Labels are made by ${site.manufacturer.name} at ${addressLine}. ${site.name} is the direct sales line of that plant.`);
  lines.push(`- Phone: ${site.phoneDisplay} (${site.phoneE164})`);
  lines.push(`- WhatsApp: https://wa.me/${site.whatsapp}`);
  lines.push(`- Purchase orders by email: ${site.orderEmail}`);
  lines.push(`- ${site.manufacturer.shortName} has printed labels in Miami since ${site.manufacturer.since}. ${site.name} has sold them directly since ${site.founded}.`);
  lines.push(`- Plant hours (pickup available): ${en.plant.hours[0]} ${en.plant.hours[1]}; ${en.plant.hours[2]} ${en.plant.hours[3]}.`);
  lines.push(`- Lead time: ${en.plant.leadP}`);
  lines.push(`- Payment: Zelle or check.`);
  lines.push("- Hazard labels and marks are made to the specifications of the IATA Dangerous Goods Regulations.");
  lines.push("- Printing method: flexography. Stock labels and custom labels.");
  lines.push("- Languages: English and Spanish.");
  lines.push("- No public prices: ask by WhatsApp or phone.", "");

  lines.push("## Products");
  for (const p of products) {
    lines.push(`- [${p.en.name}](${absolute(pathFor("en", { kind: "product", id: p.id }))}): ${p.en.definition}`);
  }
  lines.push(
    `- Thermal label colors: ${thermalColorCount} (${thermalColors.both.length} for direct thermal or thermal transfer, ${thermalColors.transferOnly.length} for thermal transfer only). Circles: ${thermalColors.circlesIn.join(", ")} in.`,
    "",
  );

  lines.push("## Quick reference: marks");
  for (const m of markGuide) lines.push(`- ${m.mark}: ${m.en}. Catalog size: ${m.catalogSize}.`);
  lines.push("", en.markNote, "");

  lines.push("## Guides");
  for (const g of guides) {
    lines.push(`- [${g.en.h1}](${absolute(pathFor("en", { kind: "guide", id: g.id }))}): ${g.en.summary}`);
  }
  lines.push("");

  lines.push("## Pages");
  lines.push(`- [Home](${absolute("/")})`);
  lines.push(`- [Factory: the Eti-Label plant](${absolute(pathFor("en", { kind: "factory" }))})`);
  lines.push("", "## Español");
  lines.push(`- [Inicio](${absolute(pathFor("es", { kind: "home" }))})`);
  for (const p of products) {
    lines.push(`- [${p.es.name}](${absolute(pathFor("es", { kind: "product", id: p.id }))})`);
  }
  for (const g of guides) {
    lines.push(`- [${g.es.h1}](${absolute(pathFor("es", { kind: "guide", id: g.id }))})`);
  }
  lines.push(`- [La planta Eti-Label](${absolute(pathFor("es", { kind: "factory" }))})`);
  return lines.join("\n") + "\n";
}

export function GET() {
  return new Response(build(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
