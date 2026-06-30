import Reveal from "../Reveal";
import Link from "next/link";
import { cars, aed, brandName } from "@/lib/data";

export default function PricingTable() {
  const list = cars.slice(0, 9);
  return (
    <section className="bg-ink py-16">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-2">Pricing</p>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Popular cars pricing</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="bg-char2 text-xs uppercase tracking-wider text-muted">
                  <th className="px-5 py-4 font-semibold">Model</th>
                  <th className="px-5 py-4 font-semibold">Daily</th>
                  <th className="px-5 py-4 font-semibold">Weekly</th>
                  <th className="px-5 py-4 font-semibold">Monthly</th>
                  <th className="px-5 py-4" />
                </tr>
              </thead>
              <tbody>
                {list.map((c, i) => (
                  <tr key={c.slug} className={i % 2 ? "bg-char2/40" : "bg-char"}>
                    <td className="px-5 py-4">
                      <span className="block text-sm font-semibold text-white">{c.name}</span>
                      <span className="text-xs text-muted">{brandName(c.brand)} · {c.year}</span>
                    </td>
                    <td className="px-5 py-4 text-sm text-white/85">{aed(c.daily)}</td>
                    <td className="px-5 py-4 text-sm text-white/85">{aed(c.weekly)}</td>
                    <td className="px-5 py-4 text-sm text-white/85">{aed(c.monthly)}</td>
                    <td className="px-5 py-4 text-right">
                      <Link href={`/cars/${c.slug}`} className="text-sm font-semibold text-brand hover:text-brandhi">Book →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
