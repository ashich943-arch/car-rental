import Reveal from "../Reveal";
import { Check, Minus } from "lucide-react";

const rows = [
  { feature: "24/7 Customer Support", lts: true, others: false },
  { feature: "Free Delivery Across Dubai", lts: true, others: false },
  { feature: "No Security Deposit Options", lts: true, others: false },
  { feature: "Card, Cash & Crypto Payments", lts: true, others: false },
  { feature: "Mobile App Booking", lts: true, others: true },
  { feature: "Flexible Hourly to Monthly Pricing", lts: true, others: false },
  { feature: "Showroom-Condition Vehicles", lts: true, others: true },
  { feature: "Booking in Under 10 Minutes", lts: true, others: false },
];

export default function ComparisonTable() {
  return (
    <section className="bg-ink py-16">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-2">Compare</p>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">How LTS compares</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-char2 text-xs uppercase tracking-wider text-muted">
                  <th className="px-5 py-4 font-semibold">Feature</th>
                  <th className="px-5 py-4 text-center font-semibold text-brand">LTS Car Rental</th>
                  <th className="px-5 py-4 text-center font-semibold">Typical Others</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.feature} className={i % 2 ? "bg-char2/40" : "bg-char"}>
                    <td className="px-5 py-4 text-sm text-white/85">{r.feature}</td>
                    <td className="px-5 py-4 text-center">
                      {r.lts ? <Check className="mx-auto h-5 w-5 text-brand" /> : <Minus className="mx-auto h-5 w-5 text-muted" />}
                    </td>
                    <td className="px-5 py-4 text-center">
                      {r.others ? <Check className="mx-auto h-5 w-5 text-white/50" /> : <Minus className="mx-auto h-5 w-5 text-muted" />}
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
