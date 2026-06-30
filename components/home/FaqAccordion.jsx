"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqGroups } from "@/lib/data";

export default function FaqAccordion({ heading = "Frequently asked questions", eyebrow = "FAQ" }) {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(0);
  const group = faqGroups[tab];

  return (
    <section className="bg-char2 py-16">
      <div className="wrap">
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{heading}</h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {faqGroups.map((g, i) => (
            <button
              key={g.group}
              onClick={() => { setTab(i); setOpen(0); }}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                tab === i ? "border-brand bg-brand text-white" : "border-line text-muted hover:border-white/40 hover:text-white"
              }`}
            >
              {g.group}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {group.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="overflow-hidden rounded-xl border border-line bg-char">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-medium text-white">{item.q}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
