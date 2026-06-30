import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { brands, cars } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Brands — LTS Car Rental Dubai" };

export default function BrandsPage() {
  return (
    <>
      <PageHeader crumb="Brands" eyebrow="Brands" title="Rent by brand" subtitle="From hypercars to executive saloons — explore our fleet by manufacturer." />
      <section className="bg-ink py-14">
        <div className="wrap grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((b, i) => {
            const count = cars.filter((c) => c.brand === b.slug).length;
            return (
              <Reveal key={b.slug} delay={(i % 4) * 0.05}>
                <Link href={`/cars?brand=${b.slug}`} className="group flex h-44 flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-char2 transition-all hover:-translate-y-1 hover:border-brand/60 hover:shadow-card">
                  {/* Replace with official logo asset in /public/brands */}
                  <span className="font-display text-xl font-bold uppercase tracking-wide text-white/85 group-hover:text-brand">{b.name}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted">{count} cars <ArrowRight className="h-3 w-3" /></span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
