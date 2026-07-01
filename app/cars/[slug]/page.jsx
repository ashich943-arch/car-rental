import Link from "next/link";
import { notFound } from "next/navigation";
import { cars, carBySlug, brandName, categoryName, aed } from "@/lib/data";
import BookingForm from "@/components/BookingForm";
import CarRail from "@/components/CarRail";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import { Check, Cog, Users, Fuel, Gauge, Zap, Calendar, Palette } from "lucide-react";

export function generateStaticParams() {
  return cars.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const car = carBySlug(params.slug);
  return { title: car ? `${car.name} — LTS Car Rental` : "Car — LTS Car Rental" };
}

export default function CarDetail({ params }) {
  const car = carBySlug(params.slug);
  if (!car) notFound();

  const related = cars.filter((c) => c.category === car.category && c.slug !== car.slug).slice(0, 8);
  const specs = [
    { icon: Cog, label: "Engine", value: car.engine },
    { icon: Zap, label: "Power", value: car.power },
    { icon: Users, label: "Seats", value: `${car.seats}` },
    { icon: Gauge, label: "Transmission", value: car.transmission },
    { icon: Fuel, label: "Fuel", value: car.fuel },
    { icon: Calendar, label: "Year", value: `${car.year}` },
    { icon: Palette, label: "Color", value: car.color },
  ];
  const pricing = [
    { label: "Daily", value: car.daily, note: "per day" },
    { label: "Weekly", value: car.weekly, note: "per week" },
    { label: "Monthly", value: car.monthly, note: "per month" },
  ];

  return (
    <>
      <div className="pt-[72px]">
        <div className="wrap py-8">
          <nav className="flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="hover:text-brand">Home</Link><span>/</span>
            <Link href="/cars" className="hover:text-brand">Cars</Link><span>/</span>
            <span className="text-white/70">{car.name}</span>
          </nav>
        </div>

        <div className="wrap grid gap-10 pb-16 lg:grid-cols-[1fr_380px]">
          {/* LEFT — gallery + info */}
          <div>
            <Reveal>
              <Gallery
                images={car.images || [car.image]}
                name={car.name}
                badge={car.badge}
                tag={car.tag}
              />
            </Reveal>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">{brandName(car.brand)} · {categoryName(car.category)}</p>
              <h1 className="mt-1 font-display text-3xl font-extrabold text-white sm:text-4xl">{car.name}</h1>
            </div>

            {/* specs */}
            <div className="mt-8">
              <h2 className="mb-4 font-display text-xl font-bold text-white">Specifications</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {specs.map((s) => (
                  <div key={s.label} className="rounded-xl border border-line bg-char2 p-4">
                    <s.icon className="h-5 w-5 text-brand" strokeWidth={1.5} />
                    <p className="mt-2 text-xs text-muted">{s.label}</p>
                    <p className="text-sm font-semibold text-white">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* features */}
            <div className="mt-8">
              <h2 className="mb-4 font-display text-xl font-bold text-white">Included features</h2>
              <div className="grid gap-2 sm:grid-cols-2">
                {car.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 rounded-lg border border-line bg-char2 px-4 py-3 text-sm text-white/85">
                    <Check className="h-4 w-4 shrink-0 text-brand" /> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — sticky pricing + booking */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="mb-4 rounded-2xl border border-line bg-char2 p-6">
              <div className="space-y-2">
                {pricing.map((p) => (
                  <div key={p.label} className="flex items-center justify-between border-b border-line py-2 last:border-0">
                    <span className="text-sm text-muted">{p.label}</span>
                    <span className="font-display text-lg font-bold text-white">{aed(p.value)} <span className="text-xs font-normal text-muted">{p.note}</span></span>
                  </div>
                ))}
              </div>
            </div>
            <BookingForm carName={car.name} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-line bg-char2 py-16">
          <div className="wrap">
            <CarRail title="You may also like" link={`/categories/${car.category}`} linkLabel={`All ${categoryName(car.category)}`} cars={related} />
          </div>
        </section>
      )}
    </>
  );
}
