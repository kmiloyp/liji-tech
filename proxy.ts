import { NextResponse, type NextRequest } from "next/server";
import { guides } from "@/content/guides";
import { products } from "@/content/products";

/**
 * Con prerenderizado parcial, notFound() en una ruta con slug llega después de
 * enviar la página con estado 200. Este proxy responde 404 de verdad cuando el
 * slug no existe. Solo corre en las rutas con slug (ver matcher).
 */
const valid: Record<string, Set<string>> = {
  "/labels": new Set(products.map((p) => p.en.slug)),
  "/es/etiquetas": new Set(products.map((p) => p.es.slug)),
  "/guides": new Set(guides.map((g) => g.en.slug)),
  "/es/guias": new Set(guides.map((g) => g.es.slug)),
};

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  for (const [base, slugs] of Object.entries(valid)) {
    if (path.startsWith(base + "/")) {
      const slug = path.slice(base.length + 1).split("/")[0];
      if (!slugs.has(slug)) {
        return NextResponse.rewrite(new URL("/404-not-found", request.url), { status: 404 });
      }
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/labels/:path+", "/guides/:path+", "/es/etiquetas/:path+", "/es/guias/:path+"],
};
