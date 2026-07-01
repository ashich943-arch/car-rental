import Reveal from "../Reveal";
import Link from "next/link";
import { locations } from "@/lib/data";
import { MapPin } from "lucide-react";

export default function Locations() {
  return (
    <section className="bg-char2 py-16">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-2">Coverage</p>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Available across every corner of Dubai
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {locations.map((l, i) => (
            <Reveal key={l.area} delay={i * 0.03}>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(l.area + ", Dubai")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-line bg-char p-4 transition-colors hover:border-brand/60"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-white">{l.area}</span>
                  <span className="block text-xs text-muted">{l.count} cars available</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
