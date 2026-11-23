import type { Lang } from "@/content/catalog";
import { site } from "@/content/site";
import { t } from "@/content/strings";
import { trackAttrs } from "@/lib/contact";

/**
 * Datos prácticos de la planta confirmados por la cliente: horario, retiro,
 * órdenes de compra por correo, forma de pago y tiempo de entrega.
 */
export function PlantInfo({
  lang,
  location,
  showLead = true,
  className = "",
}: {
  lang: Lang;
  location: string;
  showLead?: boolean;
  className?: string;
}) {
  const p = t(lang).plant;
  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${className}`}>
      <div>
        <h3 className="kicker mb-2">{p.hoursH}</h3>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
          <dt className="font-semibold">{p.hours[0]}</dt>
          <dd className="data self-center">{p.hours[1]}</dd>
          <dt className="font-semibold">{p.hours[2]}</dt>
          <dd className="data self-center">{p.hours[3]}</dd>
        </dl>
        <p className="mt-2 text-ink-2">{p.pickup}</p>
      </div>
      <div>
        <h3 className="kicker mb-2">{p.poH}</h3>
        <p>
          {p.poP}{" "}
          <a className="link break-all" href={`mailto:${site.orderEmail}`} {...trackAttrs("email", location)}>
            {site.orderEmail}
          </a>
        </p>
        <p className="mt-2 text-ink-2">{p.pay}</p>
      </div>
      {showLead && (
        <div className="sm:col-span-2">
          <h3 className="kicker mb-2">{p.leadH}</h3>
          <p className="max-w-[62ch] text-ink-2">{p.leadP}</p>
        </div>
      )}
    </div>
  );
}
