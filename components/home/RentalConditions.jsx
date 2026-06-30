import Reveal from "../Reveal";
import { ShieldCheck, CalendarClock, Award, FileText, Plane, Home } from "lucide-react";

const conditions = [
  { icon: ShieldCheck, title: "Comprehensive Insurance", text: "100% insurance included on every rental, with optional zero-excess cover." },
  { icon: CalendarClock, title: "Minimum Age 21+", text: "21 for standard cars, 25 for exotic and luxury models." },
  { icon: Award, title: "1 Year Driving Experience", text: "At least one year of valid driving experience required." },
];

export default function RentalConditions() {
  return (
    <section className="bg-char2 py-16">
      <div className="wrap grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-2">Conditions</p>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Rental conditions</h2>
          <div className="mt-6 space-y-3">
            {conditions.map((c) => (
              <div key={c.title} className="flex items-start gap-4 rounded-xl border border-line bg-char p-5">
                <c.icon className="h-6 w-6 shrink-0 text-brand" strokeWidth={1.5} />
                <div>
                  <h3 className="text-sm font-semibold text-white">{c.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-2">Documents</p>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Required documents</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-char p-5">
              <div className="mb-3 flex items-center gap-2">
                <Plane className="h-5 w-5 text-brand" />
                <h3 className="text-sm font-semibold text-white">Tourist</h3>
              </div>
              <ul className="space-y-2 text-xs text-muted">
                <li className="flex gap-2"><FileText className="h-4 w-4 shrink-0 text-brand" /> Passport copy</li>
                <li className="flex gap-2"><FileText className="h-4 w-4 shrink-0 text-brand" /> Visa or entry stamp</li>
                <li className="flex gap-2"><FileText className="h-4 w-4 shrink-0 text-brand" /> Home licence + International Driving Permit</li>
              </ul>
            </div>
            <div className="rounded-xl border border-line bg-char p-5">
              <div className="mb-3 flex items-center gap-2">
                <Home className="h-5 w-5 text-brand" />
                <h3 className="text-sm font-semibold text-white">Resident</h3>
              </div>
              <ul className="space-y-2 text-xs text-muted">
                <li className="flex gap-2"><FileText className="h-4 w-4 shrink-0 text-brand" /> UAE residence visa</li>
                <li className="flex gap-2"><FileText className="h-4 w-4 shrink-0 text-brand" /> Emirates ID</li>
                <li className="flex gap-2"><FileText className="h-4 w-4 shrink-0 text-brand" /> Valid UAE driving licence</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
