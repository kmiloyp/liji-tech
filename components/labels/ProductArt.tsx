import { hazardById, thermalColors } from "@/content/catalog";
import { CargoTag, tagDesigns } from "./CargoTag";
import { Diamond } from "./Diamond";
import { LithiumMark } from "./LithiumMark";
import { ThermalRoll } from "./ThermalRoll";

/** Ilustración de cada familia de producto (decorativa: el texto de la tarjeta la describe). */
export function ProductArt({ id, size = "md" }: { id: string; size?: "md" | "lg" }) {
  const lg = size === "lg";
  switch (id) {
    case "hazard-class-labels":
      return (
        <div className="flex items-end gap-1.5">
          {["2-flammable-gas", "5.1-oxidizer", "8-corrosive"].map((h, i) => (
            <Diamond
              key={h}
              hazard={hazardById(h)}
              className={`${lg ? "size-36" : "size-[4.6rem]"} drop-shadow-sm`}
              style={{ transform: `translateY(${i % 2 ? -8 : 0}px)` }}
            />
          ))}
        </div>
      );
    case "hazmat-placards":
      return (
        <div className="relative">
          <Diamond hazard={hazardById("3-flammable-liquid")} className={`${lg ? "size-64" : "size-28"} drop-shadow-md`} />
        </div>
      );
    case "lithium-battery-labels":
      return (
        <div className="flex items-end gap-2">
          <LithiumMark un="UN3481" className={`${lg ? "w-44" : "w-[4.6rem]"} drop-shadow-sm`} />
          <Diamond hazard={hazardById("9-miscellaneous")} className={`${lg ? "size-36" : "size-[4.2rem]"} drop-shadow-sm`} />
        </div>
      );
    case "air-cargo-labels":
      return (
        <div className="flex items-end gap-2">
          <CargoTag design={tagDesigns.cargoAircraftOnly} className={`${lg ? "w-40" : "w-[4.6rem]"} drop-shadow-sm`} />
          <CargoTag design={tagDesigns.rushAog} className={`${lg ? "w-32" : "w-16"} drop-shadow-sm`} />
        </div>
      );
    case "handling-labels":
      return (
        <div className="flex items-end gap-2">
          <CargoTag design={tagDesigns.fragile} className={`${lg ? "w-52" : "w-28"} drop-shadow-sm`} />
          <CargoTag design={tagDesigns.thisSideUp} className={`${lg ? "w-28" : "w-14"} drop-shadow-sm`} />
        </div>
      );
    case "thermal-labels":
      return lg ? (
        <div className="flex items-end gap-1">
          {["#FEDD00", "#00A3E0", "#DA291C"].map((c, i) => (
            <ThermalRoll key={c} color={c} className={`w-40 ${i ? "-ml-6" : ""}`} />
          ))}
        </div>
      ) : (
        <div className="flex">
          {[thermalColors.both[8], thermalColors.both[1], thermalColors.both[14], thermalColors.both[6], thermalColors.transferOnly[7]].map(
            (c, i) => (
              <span
                key={c.code}
                className={`size-14 rounded-full shadow-[inset_0_0_0_1px_rgb(0_0_0/0.08),0_2px_4px_rgb(0_0_0/0.1)] ${i ? "-ml-3" : ""}`}
                style={{ background: c.hexAprox }}
              />
            ),
          )}
        </div>
      );
    case "thermal-transfer-ribbons":
      return <RibbonArt className={lg ? "w-60" : "w-28"} />;
    case "custom-labels":
      return (
        <div className={`flex items-end ${lg ? "gap-4" : "gap-2"}`}>
          <ThermalRoll color="#08703F" className={lg ? "w-52" : "w-24"} />
          <div className={`flex flex-col ${lg ? "gap-3" : "gap-1.5"}`}>
            <CargoTag
              design={{ lines: ["YOUR", "BRAND"], bg: "#08703F", fg: "#FFFFFF", ratio: 1.4 }}
              className={`${lg ? "w-40" : "w-20"} drop-shadow-sm`}
            />
            <CargoTag
              design={{ lines: ["YOUR LOGO"], bg: "#FFC72C", fg: "#141414", ratio: 2.4 }}
              className={`${lg ? "w-40" : "w-20"} drop-shadow-sm`}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
}

/** Ribbon de transferencia térmica: rollo de película negra sobre core. */
export function RibbonArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden="true" focusable="false">
      <rect x="30" y="18" width="150" height="84" fill="#1E2321" />
      <rect x="30" y="18" width="150" height="10" fill="rgb(255 255 255 / .08)" />
      <ellipse cx="180" cy="60" rx="18" ry="42" fill="#2A302D" />
      <ellipse cx="30" cy="60" rx="18" ry="42" fill="#3A413D" />
      <ellipse cx="30" cy="60" rx="9" ry="21" fill="#C9A878" />
      <ellipse cx="30" cy="60" rx="6" ry="15" fill="#8A6A44" />
      <path d="M30 102 C 60 112, 110 116, 196 112 L196 118 C 110 120, 60 118, 30 108 Z" fill="#1E2321" opacity=".85" />
    </svg>
  );
}
