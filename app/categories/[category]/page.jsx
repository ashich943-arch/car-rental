import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CarCard from "@/components/CarCard";
import Reveal from "@/components/Reveal";
import { cars, categories, categoryName } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }) {
  return { title: `${categoryName(params.category)} Cars — LTS Car Rental Dubai` };
}

const blurbs = {
  luxury: "The finest chauffeur-grade saloons and flagship models in Dubai.",
  economy: "Reliable, fuel-efficient cars at the best daily rates in the city.",
  sports: "Track-bred performance cars for the thrill of Dubai's roads.",
  suv: "Commanding, spacious SUVs for the city and the desert.",
  convertible: "Open-top driving under the Dubai sky.",
  business: "Executive sedans built for comfort and presence.",
  electric: "Instant torque and zero emissions across the fleet.",
  van: "Spacious seven-seaters for groups and families.",
};

export default function CategoryPage({ params }) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) notFound();
  const list = cars.filter((c) => c.category === cat.slug);

  return (
    <>
      <PageHeader crumb={cat.name} eyebrow="Category" title={`${cat.name} car rental in Dubai`} subtitle={blurbs[cat.slug]} />
      <section className="bg-ink py-14">
        <div className="wrap">
          <p className="mb-6 text-sm text-muted">{list.length} cars available</p>
          {list.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {list.map((c, i) => (
                <Reveal key={c.slug} delay={(i % 4) * 0.05}><CarCard car={c} /></Reveal>
              ))}
            </div>
          ) : (
            <p className="text-muted">More cars in this category coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
