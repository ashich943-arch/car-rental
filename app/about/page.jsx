import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { ShieldCheck, Clock, Truck, Award } from "lucide-react";

export const metadata = { title: "About Us — LTS Car Rental Dubai" };

const stats = [
  { value: "281+", label: "Cars in fleet" },
  { value: "12k+", label: "Happy customers" },
  { value: "4.8", label: "Average rating" },
  { value: "24/7", label: "Support" },
];

const values = [
  { icon: ShieldCheck, title: "Transparency", text: "Clear pricing with full insurance and no hidden charges, ever." },
  { icon: Truck, title: "Convenience", text: "Free delivery and collection anywhere in Dubai, on your schedule." },
  { icon: Clock, title: "Reliability", text: "A meticulously maintained fleet and round-the-clock support." },
  { icon: Award, title: "Quality", text: "Only showroom-condition luxury and exotic vehicles make the cut." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader crumb="About" eyebrow="Our story" title="Driven by service, defined by the fleet" subtitle="LTS Car Rental was built to make renting a premium car in Dubai effortless — transparent pricing, instant delivery and a fleet you can trust." />

      <section className="bg-ink py-16">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl photo">
              <img src="https://lts-car-rental.com/wp-content/uploads/2026/02/Adobe-Express-file.png" alt="LTS Car Rental" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Going the Extra Mile — Every Time</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              With LTS, renting a car isn't just a transaction — it's an experience. Based in Dubai, we specialize in
              delivering luxury, performance, and prestige to clients who expect nothing but the best.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Today, we proudly serve tourists, business executives, influencers, and car enthusiasts who want more than
              just a rental — they want an experience.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-line bg-char2 p-4 text-center">
                  <p className="font-display text-2xl font-bold text-brand">{s.value}</p>
                  <p className="mt-1 text-xs text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink pb-4">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-char2 p-8">
              <p className="eyebrow mb-2">Our Mission</p>
              <p className="text-lg font-medium leading-relaxed text-white">
                To provide a smooth, transparent, and premium car rental experience that matches the luxury lifestyle of Dubai.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-line bg-char2 p-8">
              <p className="eyebrow mb-2">Our Vision</p>
              <p className="text-lg font-medium leading-relaxed text-white">
                To become one of Dubai's most trusted names in luxury and exotic car rentals — known for reliability, exclusivity, and elite service.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-char2 py-16">
        <div className="wrap">
          <Reveal><h2 className="font-display text-2xl font-bold text-white sm:text-3xl">What we stand for</h2></Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-char p-6">
                  <v.icon className="h-7 w-7 text-brand" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16">
        <div className="wrap">
          <Reveal><h2 className="font-display text-2xl font-bold text-white sm:text-3xl">The team behind the wheel</h2></Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["Fleet Director", "Customer Lead", "Operations", "Delivery Lead"].map((role, i) => (
              <Reveal key={role} delay={i * 0.05}>
                <div className="rounded-2xl border border-line bg-char2 p-5 text-center">
                  <div className="mx-auto h-24 w-24 rounded-full photo" />
                  <p className="mt-4 text-sm font-semibold text-white">Team Member</p>
                  <p className="text-xs text-muted">{role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
