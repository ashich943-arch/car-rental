import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { UserCheck, Plane, Check, Clock, ShieldCheck } from "lucide-react";

export const metadata = { title: "Services — LTS Car Rental Dubai" };

const chauffeur = ["Professional, vetted drivers", "Hourly, daily or event-based booking", "Executive sedans and luxury SUVs", "Discreet, punctual and uniformed"];
const airport = ["Meet & greet at DXB and DWC", "Flight tracking for delays", "Luggage assistance included", "Fixed transparent pricing"];

export default function ServicesPage() {
  return (
    <>
      <PageHeader crumb="Services" eyebrow="Services" title="More than a car rental" subtitle="Premium chauffeur service and seamless airport transfers across Dubai." />

      <section id="chauffeur" className="scroll-mt-24 bg-ink py-16">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <Reveal><div className="relative aspect-[4/3] overflow-hidden rounded-2xl photo"><img src="https://marcem.com.pk/wp-content/uploads/2025/08/Chauffeur-1-1-1.webp" alt="Chauffeur service" className="absolute inset-0 h-full w-full object-cover" /></div></Reveal>
          <Reveal delay={0.1}>
            <UserCheck className="h-9 w-9 text-brand" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">Chauffeur Service</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Sit back while a professional driver handles Dubai&apos;s roads. Ideal for business travel, events, weddings and city tours.
            </p>
            <ul className="mt-5 space-y-2.5">
              {chauffeur.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-white/85"><Check className="h-4 w-4 text-brand" /> {f}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-red mt-7">Book a chauffeur</Link>
          </Reveal>
        </div>
      </section>

      <section id="airport" className="scroll-mt-24 bg-char2 py-16">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <Plane className="h-9 w-9 text-brand" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">Airport Transfer</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Arrive to a clean car and a friendly face. We track your flight and meet you at arrivals — no waiting, no surprises.
            </p>
            <ul className="mt-5 space-y-2.5">
              {airport.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-white/85"><Check className="h-4 w-4 text-brand" /> {f}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-red mt-7">Arrange a transfer</Link>
          </Reveal>
          <Reveal className="order-1 lg:order-2"><div className="relative aspect-[4/3] overflow-hidden rounded-2xl photo"><img src="https://ar-airport-car-service1.files.wordpress.com/2024/02/airportcarsgosport-airport-slide-2.jpg" alt="Airport transfer" className="absolute inset-0 h-full w-full object-cover" /></div></Reveal>
        </div>
      </section>

      <section className="bg-ink py-16">
        <div className="wrap grid gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, t: "24/7 Availability", d: "Book any service at any hour, every day." },
            { icon: ShieldCheck, t: "Fully Insured", d: "Every trip covered, every time." },
            { icon: Check, t: "No Hidden Fees", d: "Fixed pricing agreed before you ride." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.05}>
              <div className="rounded-2xl border border-line bg-char2 p-6">
                <b.icon className="h-7 w-7 text-brand" strokeWidth={1.5} />
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{b.t}</h3>
                <p className="mt-2 text-sm text-muted">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
