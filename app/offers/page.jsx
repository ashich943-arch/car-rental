import PageHeader from "@/components/PageHeader";
import CarCard from "@/components/CarCard";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { cars, CONTACT } from "@/lib/data";
import { BadgePercent, Sparkles, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Special Offers & Deals | LTS Car Rental Dubai",
  description: "Limited-time discounts and new arrivals on luxury and exotic car rentals across Dubai.",
};

const discounted = cars.filter((c) => c.badge);
const arrivals = cars.filter((c) => c.tag === "New Arrival");
const hourly = cars.filter((c) => c.tag === "Available now");

function Block({ icon: Icon, eyebrow, title, subtitle, list, priceMode = "daily" }) {
  if (!list.length) return null;
  return (
    <section className="wrap py-14">
      <Reveal>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-2 flex items-center gap-2">
              <Icon className="h-4 w-4 text-brand" /> {eyebrow}
            </p>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            {subtitle && <p className="mt-2 max-w-xl text-sm text-muted">{subtitle}</p>}
          </div>
          <Link href="/cars" className="link-arrow hidden sm:inline-flex">
            View all cars <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((car, i) => (
          <Reveal key={car.slug} delay={i * 0.05}>
            <CarCard car={car} priceMode={priceMode} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function OffersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Limited time"
        title="Special Offers & Deals"
        subtitle="Seasonal discounts, fresh arrivals and hourly rates on Dubai's most wanted luxury and exotic cars. Prices already include full insurance and free delivery."
        crumb="Special Offers"
      />

      <Block
        icon={BadgePercent}
        eyebrow="Discounted now"
        title="Price drops on the fleet"
        subtitle="Strikethrough prices show the saving. Book direct on WhatsApp to lock the rate."
        list={discounted}
      />

      <div className="border-y border-line bg-char2">
        <Block
          icon={Sparkles}
          eyebrow="Just landed"
          title="New arrivals"
          subtitle="The latest additions to our Dubai fleet, ready to drive."
          list={arrivals}
        />
      </div>

      <Block
        icon={Clock}
        eyebrow="Available now"
        title="Hourly rentals"
        subtitle="Need a car for a few hours? These are ready for same-day pickup or delivery."
        list={hourly}
        priceMode="hourly"
      />

      <section className="wrap pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-char2 p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(227,30,36,0.15),transparent_60%)]" />
            <h3 className="relative font-display text-2xl font-bold text-white sm:text-3xl">
              Looking for a custom long-term deal?
            </h3>
            <p className="relative mx-auto mt-3 max-w-xl text-sm text-muted">
              Monthly and long-term rentals come with our best rates. Tell us your dates and budget and we'll build a package for you.
            </p>
            <div className="relative mt-6 flex flex-wrap justify-center gap-3">
              <a href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`} className="btn-red">
                WhatsApp us
              </a>
              <Link href="/contact" className="btn-ghost">
                Contact the team
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
