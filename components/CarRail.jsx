import Link from "next/link";
import CarCard from "./CarCard";
import { ArrowRight } from "lucide-react";

export default function CarRail({ title, subtitle, link, linkLabel = "View all", cars, priceMode = "daily" }) {
  return (
    <div>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          {subtitle && <p className="eyebrow mb-2">{subtitle}</p>}
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        </div>
        {link && (
          <Link href={link} className="link-arrow shrink-0">
            {linkLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      <div className="rail -mx-5 flex gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0">
        {cars.map((c) => (
          <div key={c.slug} className="w-[280px] shrink-0 sm:w-[320px]">
            <CarCard car={c} priceMode={priceMode} />
          </div>
        ))}
      </div>
    </div>
  );
}
