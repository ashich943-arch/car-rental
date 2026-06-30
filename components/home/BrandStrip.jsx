import Link from "next/link";
import { brands } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function BrandStrip() {
  return (
    <section className="bg-[#f3f3f3] py-14 text-ink">
      <div className="wrap">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Most wanted car rental brands in Dubai
          </h2>
          <Link href="/brands" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-ink/80 hover:text-brand">
            All Brands <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rail -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
          {brands.map((b) => (
            <Link
              key={b.slug}
              href={`/cars?brand=${b.slug}`}
              className="grid h-24 w-44 shrink-0 place-items-center rounded-xl border border-black/10 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Replace with official logo asset in /public/brands */}
              <span className="font-display text-lg font-bold uppercase tracking-wide text-ink/80">
                {b.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
