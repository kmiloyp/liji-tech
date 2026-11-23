import Link from "next/link";
import type { Lang } from "@/content/catalog";
import { t } from "@/content/strings";

export type Crumb = { name: string; path: string };

/** Migas de pan visibles. El JSON-LD BreadcrumbList lo arma cada página con los mismos datos. */
export function Breadcrumbs({ lang, items }: { lang: Lang; items: Crumb[] }) {
  return (
    <nav aria-label={t(lang).breadcrumbAria} className="data text-ink-2">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-ink">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.path} className="underline decoration-rule underline-offset-4 hover:text-ink">
                    {c.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
