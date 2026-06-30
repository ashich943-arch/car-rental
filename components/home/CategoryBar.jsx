"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";
import { Crown, Wallet, Gauge, Caravan, Wind, Briefcase, Zap, Bus } from "lucide-react";

const iconMap = {
  luxury: Crown,
  economy: Wallet,
  sports: Gauge,
  suv: Caravan,
  convertible: Wind,
  business: Briefcase,
  electric: Zap,
  van: Bus,
};

export default function CategoryBar() {
  return (
    <section className="border-y border-line bg-char2 py-14">
      <div className="wrap">
        <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl">
          Find a car of your dream in 60 seconds
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted">
          Pick a category and we will match you with the right car, delivered free across Dubai.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((c, i) => {
            const Icon = iconMap[c.slug];
            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Link
                  href={`/categories/${c.slug}`}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-line bg-char px-4 py-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-glow"
                >
                  <Icon className="h-7 w-7 text-white/70 transition-colors group-hover:text-brand" strokeWidth={1.4} />
                  <span className="text-sm font-medium text-white">{c.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
