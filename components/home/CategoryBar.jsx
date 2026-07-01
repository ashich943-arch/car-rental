"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";

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
          {categories.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                href={`/categories/${c.slug}`}
                className="group relative flex flex-col items-center overflow-hidden rounded-xl border border-line bg-char px-3 pb-3 pt-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-glow"
              >
                {/* red glow that intensifies on hover */}
                <span className="pointer-events-none absolute inset-x-0 top-2 h-20 bg-[radial-gradient(60%_100%_at_50%_50%,rgba(227,30,36,0.16),transparent_70%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                {/* car image (side profile, transparent PNG) — full car, never clipped */}
                <span className="relative h-20 w-full px-1">
                  <img
                    src={`/categories/${c.slug}.png`}
                    alt={c.name}
                    className="h-full w-full object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </span>

                <span className="relative mt-3 text-sm font-medium text-white transition-colors group-hover:text-brand">
                  {c.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
