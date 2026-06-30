import Reveal from "../Reveal";
import Logo from "../Logo";
import { Star } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-ink py-16">
      <div className="wrap text-center">
        <Reveal>
          <div className="mx-auto mb-5 inline-grid h-14 w-14 place-items-center rounded-full border border-line">
            <Logo className="text-xl" />
          </div>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Why you should rent a car with us?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted">
            Trusted by thousands of residents and visitors for transparent pricing, instant delivery and a flawless fleet.
          </p>

          <div className="mx-auto mt-7 inline-flex items-center gap-3 rounded-full border border-line bg-char2 px-5 py-3">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-brand text-brand" />
              ))}
            </span>
            <span className="text-sm font-semibold text-white">4.8 / 5</span>
            <span className="text-xs text-muted">on 2,400+ Google reviews</span>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 opacity-70">
          {["Partner One", "Partner Two", "Partner Three", "Partner Four", "Partner Five"].map((p) => (
            <span key={p} className="rounded-lg border border-line px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
