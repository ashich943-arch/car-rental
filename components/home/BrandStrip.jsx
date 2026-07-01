import Link from "next/link";
import { brands } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import BrandLogo from "../BrandLogo";

const withLogo = ["lamborghini", "ferrari", "rolls-royce", "bentley", "mercedes-benz", "range-rover", "porsche", "bmw"];

export default function BrandStrip() {
  const shown = brands.filter((b) => withLogo.includes(b.slug));
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

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {shown.map((b) => (
            <Link
              key={b.slug}
              href={`/cars?brand=${b.slug}`}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-black/[0.06] bg-white px-3 py-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-12 w-full items-center justify-center">
                <BrandLogo slug={b.slug} name={b.name} />
              </span>
              <span className="text-center text-xs font-semibold text-ink/75 transition-colors group-hover:text-brand">
                {b.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
