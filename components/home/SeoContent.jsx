import Reveal from "../Reveal";

const types = [
  { title: "Hourly Rental", body: "Perfect for short city trips, meetings or a quick photoshoot. Pay only for the hours you drive with no long commitment." },
  { title: "Daily Rental", body: "The most flexible option for tourists and short stays. Includes generous daily mileage, full insurance and free delivery." },
  { title: "Weekly Rental", body: "A better rate for week-long trips and extended visits. Ideal balance of freedom and value across Dubai." },
  { title: "Monthly Rental", body: "Significant savings for residents between cars or on long projects. No deposit options and free maintenance support." },
  { title: "Long-Term Lease", body: "Drive a premium car for a fraction of ownership cost. Fixed monthly pricing, servicing and replacement vehicles included." },
];

export default function SeoContent() {
  return (
    <section className="bg-ink py-16">
      <div className="wrap">
        <Reveal>
          <h2 className="max-w-2xl font-display text-2xl font-bold text-white sm:text-3xl">
            Flexible car rental in Dubai for every kind of trip
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            Whether you need a car for an hour or a year, LTS Car Rental gives you transparent pricing, comprehensive
            insurance and free delivery across Dubai. Choose the plan that fits your stay and switch any time.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.04}>
              <div className="border-l-2 border-brand pl-4">
                <h3 className="font-display text-lg font-semibold text-white">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-brand/40 bg-brand/5 p-5">
              <h3 className="font-display text-lg font-semibold text-white">New Car Rental</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Fresh arrivals added to the fleet every month. Be the first to drive the latest models, fully insured and delivered to your door.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
