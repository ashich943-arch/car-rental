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
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink pt-[72px]">
      {/* Full-bleed hero image: luxury fleet + Dubai skyline */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/hero/hero.jpg"
          alt="LTS luxury car fleet with Dubai skyline at night"
          className="absolute inset-0 h-full w-full object-cover object-[68%_38%]"
        />
        {/* left scrim for text legibility (desktop) */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-transparent lg:via-ink/55" />
        {/* bottom + top scrims (mobile + edges) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_15%_40%,rgba(227,30,36,0.14),transparent_60%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-6 lg:py-20 2xl:max-w-[1600px] 2xl:px-14">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-xl"
        >
          <motion.h1
            variants={item}
            className="font-display text-[44px] font-extrabold leading-[1.02] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)] sm:text-6xl"
          >
            Rent a
            <br />
            <span className="text-brand">Luxury Car</span>
            <br />
            in Dubai
          </motion.h1>

          <motion.div variants={item} className="my-6 h-[2px] w-16 bg-brand" />

          <motion.p variants={item} className="text-base font-medium text-white/90 sm:text-lg">
            Long-Term Comfort. Unmatched Value.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-x-8 gap-y-6">
            {stats.map((s) => (
              <div key={s.big} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-ink/40 text-brand backdrop-blur-sm">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-brand">{s.big}</p>
                  <p className="whitespace-pre-line text-[11px] leading-tight text-white/70">{s.small}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-5">
            <a href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`} className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white"><MessageCircle className="h-5 w-5" /></span>
              <span className="leading-tight">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-white/60">WhatsApp</span>
                <span className="block text-sm font-semibold text-white">{CONTACT.whatsapp}</span>
              </span>
            </a>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white"><Phone className="h-5 w-5" /></span>
              <span className="leading-tight">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-white/60">Call Us</span>
                <span className="block text-sm font-semibold text-white">{CONTACT.phone}</span>
              </span>
            </a>
            <Link href="/cars" className="btn-red px-8 py-3.5">Book Now</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
