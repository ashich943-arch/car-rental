"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle, Send, X, Headphones } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const wa = CONTACT.whatsapp.replace(/\D/g, "");
  const tel = CONTACT.phone.replace(/\s/g, "");

  const items = [
    { label: "Call us", icon: Phone, href: `tel:${tel}`, sub: CONTACT.phone },
    { label: "WhatsApp", icon: MessageCircle, href: `https://wa.me/${wa}`, sub: "Reply in minutes" },
    { label: "Telegram", icon: Send, href: "#", sub: "Chat with us" },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-64 overflow-hidden rounded-2xl border border-line bg-char shadow-card"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <p className="text-sm font-semibold text-white">Need help? Reach us</p>
            </div>
            <div className="p-2">
              {items.map((it) => (
                <a key={it.label} href={it.href} className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-char2">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-brand/15 text-brand">
                    <it.icon className="h-4 w-4" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-medium text-white">{it.label}</span>
                    <span className="block text-[11px] text-muted">{it.sub}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-glow transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <Headphones className="h-6 w-6" />}
      </button>
    </div>
  );
}
