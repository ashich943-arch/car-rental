import Reveal from "../Reveal";
import {
  CreditCard, FileText, Smartphone, UserCheck, Headphones, Car, Wallet,
  ShieldCheck, ClipboardCheck, Lock, Truck, PlusCircle, CalendarX, Sparkles, BadgePercent,
} from "lucide-react";

const benefits = [
  { icon: Wallet, title: "No Deposit", text: "Most cars available with zero security deposit." },
  { icon: FileText, title: "Leasing", text: "Flexible long-term leasing for residents." },
  { icon: Smartphone, title: "Mobile App", text: "Book and manage rentals from your phone." },
  { icon: UserCheck, title: "Chauffeur Services", text: "Professional drivers on request." },
  { icon: Headphones, title: "24/7 Support", text: "Real people available any time, any day." },
  { icon: Car, title: "Best Car Fleet", text: "281+ luxury and exotic cars in stock." },
  { icon: CreditCard, title: "Payment Methods", text: "Card, cash, transfer and crypto accepted." },
  { icon: ShieldCheck, title: "No Hidden Charges", text: "What you see is what you pay." },
  { icon: ClipboardCheck, title: "Easy Process", text: "Book and drive in under ten minutes." },
  { icon: Lock, title: "Secure Booking", text: "Encrypted online booking and payments." },
  { icon: Truck, title: "Free Delivery", text: "Delivered free across all of Dubai." },
  { icon: PlusCircle, title: "Add-ons", text: "Child seats, GPS and extra driver options." },
  { icon: CalendarX, title: "No Cancellation Fee", text: "Plans change — cancel without penalty." },
  { icon: Sparkles, title: "Great Condition", text: "Every car detailed before delivery." },
  { icon: BadgePercent, title: "Discounts", text: "Better rates on weekly and monthly rentals." },
];

export default function BenefitsGrid() {
  return (
    <section className="bg-char2 py-16">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-2">Why LTS</p>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Everything included, nothing hidden</h2>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.05}>
              <div className="flex h-full items-start gap-4 rounded-xl border border-line bg-char p-5 transition-colors hover:border-brand/50">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                  <b.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{b.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{b.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
