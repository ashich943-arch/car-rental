"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Car, ShieldCheck, Truck, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/data";

const stats = [
  { icon: Car, big: "281+", small: "Luxury & Exotic\nCars in Fleet" },
  { icon: ShieldCheck, big: "100%", small: "Full Insurance\nIncluded" },
  { icon: Truck, big: "Free", small: "Delivery Across\nDubai" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[72px]">
      {/* skyline + ambient background (replace with real Dubai night photo in /public/hero) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(80%_60%_at_75%_30%,rgba(227,30,36,0.14),transparent_55%)]" />
        <div className="absolute bottom-0 right-0 hidden h-1/2 w-2/3 opacity-40 lg:block"
             style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent 0 14px, rgba(255,255,255,0.05) 14px 16px, transparent 16px 34px, rgba(255,255,255,0.08) 34px 37px)" }} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="wrap relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 max-w-xl">
          <motion.h1 variants={item} className="font-display text-[44px] font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl">
            Rent a
            <br />
            <span className="text-brand">Luxury Car</span>
            <br />
            in Dubai
          </motion.h1>

          <motion.div variants={item} className="my-6 h-[2px] w-16 bg-brand" />

          <motion.p variants={item} className="text-base font-medium text-white/85 sm:text-lg">
            Long-Term Comfort. Unmatched Value.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-x-8 gap-y-6">
            {stats.map((s) => (
              <div key={s.big} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-brand">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-brand">{s.big}</p>
                  <p className="whitespace-pre-line text-[11px] leading-tight text-muted">{s.small}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-5">
            <a href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`} className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white"><MessageCircle className="h-5 w-5" /></span>
              <span className="leading-tight">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-muted">WhatsApp</span>
                <span className="block text-sm font-semibold text-white">{CONTACT.whatsapp}</span>
              </span>
            </a>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white"><Phone className="h-5 w-5" /></span>
              <span className="leading-tight">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-muted">Call Us</span>
                <span className="block text-sm font-semibold text-white">{CONTACT.phone}</span>
              </span>
            </a>
            <Link href="/cars" className="btn-red px-8 py-3.5">Book Now</Link>
          </motion.div>
        </motion.div>

        {/* RIGHT — car photo slot */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative z-10"
        >
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl photo">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <p className="font-display text-sm uppercase tracking-[0.4em] text-white/25">Hero Car Photo</p>
                <p className="mt-2 text-[11px] text-white/20">Add /public/hero/car.png — silver three-quarter angle</p>
              </div>
            </div>
            {/* ground reflection hint */}
            <div className="absolute inset-x-8 bottom-4 h-10 rounded-full bg-brand/10 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
