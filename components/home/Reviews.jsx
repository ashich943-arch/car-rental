import Reveal from "../Reveal";
import { reviews } from "@/lib/data";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section className="bg-ink py-16">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-2">Reviews</p>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            What our customers say
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.05}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-char2 p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand/15 font-display text-sm font-bold text-brand">
                    {r.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{r.name}</p>
                    <p className="text-xs text-muted">{r.date}</p>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className={`h-4 w-4 ${s < r.rating ? "fill-brand text-brand" : "text-line"}`} />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-white/75">{r.text}</blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
