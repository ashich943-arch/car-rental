import Reveal from "../Reveal";
import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  return (
    <section className="bg-char2 py-16">
      <div className="wrap">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <Navigation className="h-6 w-6 text-brand" />
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Rent a car near me</h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-line photo">
            {/* Replace with an embedded Google Map iframe for your branch location */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white">
                  <MapPin className="h-6 w-6" />
                </span>
                <p className="text-sm font-semibold text-white/60">Business Bay, Dubai</p>
                <p className="text-xs text-white/30">Embed your Google Maps iframe here</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
