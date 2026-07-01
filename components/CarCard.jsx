import Link from "next/link";
import { aed, brandName } from "@/lib/data";
import { Users, Gauge, Fuel, ArrowRight } from "lucide-react";
import CarImage from "./CarImage";

export default function CarCard({ car, priceMode = "daily" }) {
  const priceLabel = { daily: "per day", weekly: "per week", monthly: "per month", hourly: "per hour" }[priceMode];
  const price = car[priceMode];

  return (
    <Link
      href={`/cars/${car.slug}`}
      className="group flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-char2 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-card"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden photo">
        {(car.tag || car.badge) && (
          <div className="absolute left-3 top-3 z-10 flex gap-2">
            {car.badge && <span className="rounded-md bg-brand px-2 py-1 text-[11px] font-bold text-white">{car.badge}</span>}
            {car.tag && <span className="rounded-md border border-line bg-ink/80 px-2 py-1 text-[11px] font-semibold text-white">{car.tag}</span>}
          </div>
        )}
        {/* car photo (falls back to brand name until /public/cars image is added) */}
        <CarImage src={car.image} alt={car.name} fallback={brandName(car.brand)} pos={car.pos} />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">{brandName(car.brand)} · {car.year}</p>
        <h3 className="mt-1 font-display text-lg font-semibold leading-tight text-white">{car.name}</h3>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] text-muted">
          <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {car.seats} seats</span>
          <span className="inline-flex items-center gap-1"><Gauge className="h-3.5 w-3.5" /> {car.transmission}</span>
          <span className="inline-flex items-center gap-1"><Fuel className="h-3.5 w-3.5" /> {car.fuel}</span>
        </div>

        <div className="mt-4 flex items-end justify-between border-t border-line pt-3">
          <div>
            {priceMode === "daily" && car.oldDaily && (
              <span className="mr-2 text-xs text-muted line-through">{aed(car.oldDaily)}</span>
            )}
            <span className="font-display text-xl font-bold text-white">{aed(price)}</span>
            <span className="ml-1 text-xs text-muted">{priceLabel}</span>
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-white transition-colors group-hover:border-brand group-hover:bg-brand">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
