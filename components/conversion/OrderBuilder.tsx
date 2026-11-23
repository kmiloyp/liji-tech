"use client";

import { useId, useMemo, useState } from "react";
import type { Strings } from "@/content/strings";
import { ChatIcon } from "./icons";

/**
 * Armador de pedido: tipo, tamaño, cantidad, impresión a medida y notas.
 * Muestra el mensaje y abre WhatsApp con él. No envía nada a un servidor.
 */
export function OrderBuilder({
  s,
  whatsapp,
  defaultType = 0,
}: {
  s: Strings["order"];
  whatsapp: string;
  defaultType?: number;
}) {
  const id = useId();
  const [type, setType] = useState(s.types[defaultType]);
  const [size, setSize] = useState("");
  const [qty, setQty] = useState("");
  const [custom, setCustom] = useState(false);
  const [notes, setNotes] = useState("");

  const message = useMemo(() => {
    const lines = [s.hi, `${s.mType}: ${type}`];
    if (size.trim()) lines.push(`${s.mSize}: ${size.trim()}`);
    if (qty.trim()) lines.push(`${s.mQty}: ${qty.trim()}`);
    if (custom) lines.push(s.mCustom);
    if (notes.trim()) lines.push(`${s.mNotes}: ${notes.trim()}`);
    return lines.join("\n");
  }, [s, type, size, qty, custom, notes]);

  const href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
  const field =
    "mt-1.5 w-full rounded border border-rule bg-paper px-3 py-2.5 text-ink placeholder:text-ink-2/80 focus:border-brand focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1";

  return (
    <form className="grid gap-4" onSubmit={(e) => e.preventDefault()} aria-describedby={`${id}-msg`}>
      <div>
        <label htmlFor={`${id}-type`} className="text-sm font-semibold">
          {s.type}
        </label>
        <select id={`${id}-type`} className={field} value={type} onChange={(e) => setType(e.target.value)}>
          {s.types.map((tp) => (
            <option key={tp}>{tp}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${id}-size`} className="text-sm font-semibold">
            {s.size}
          </label>
          <input
            id={`${id}-size`}
            className={field}
            placeholder={s.sizePh}
            value={size}
            onChange={(e) => setSize(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor={`${id}-qty`} className="text-sm font-semibold">
            {s.qty}
          </label>
          <input
            id={`${id}-qty`}
            className={field}
            placeholder={s.qtyPh}
            inputMode="numeric"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            autoComplete="off"
          />
        </div>
      </div>
      <label className="flex cursor-pointer items-center gap-3 font-medium">
        <input
          type="checkbox"
          className="size-5 accent-[var(--brand)]"
          checked={custom}
          onChange={(e) => setCustom(e.target.checked)}
        />
        {s.custom}
      </label>
      <div>
        <label htmlFor={`${id}-notes`} className="text-sm font-semibold">
          {s.notes}
        </label>
        <textarea
          id={`${id}-notes`}
          rows={2}
          className={field}
          placeholder={s.notesPh}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <div>
        <p id={`${id}-msg-label`} className="text-sm font-semibold">
          {s.msg}
        </p>
        <output
          id={`${id}-msg`}
          aria-labelledby={`${id}-msg-label`}
          aria-live="polite"
          className="data mt-1.5 block min-h-28 rounded border border-dashed border-ink-2/50 bg-liner/60 p-3 text-[0.85rem] leading-relaxed whitespace-pre-wrap text-ink"
        >
          {message}
        </output>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="btn btn-wa w-full sm:w-auto sm:justify-self-start"
        data-track="whatsapp"
        data-track-location="order-builder"
      >
        <ChatIcon />
        {s.send}
      </a>
    </form>
  );
}
