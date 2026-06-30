"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { CONTACT } from "@/lib/data";
import {
  Phone, MessageCircle, Send, Mail, MapPin, Clock, Check,
} from "lucide-react";

const details = [
  { icon: Phone, label: "Call us", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/[^0-9+]/g, "")}` },
  { icon: MessageCircle, label: "WhatsApp", value: CONTACT.whatsapp, href: `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}` },
  { icon: Send, label: "Telegram", value: CONTACT.telegram, href: "#" },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact LTS Car Rental"
        subtitle="Booking, support or a custom long-term quote — our team replies within minutes, 24/7."
        crumb="Contact"
      />

      <section className="wrap py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: details + hours */}
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-white">Reach us directly</h2>
              <p className="mt-2 text-sm text-muted">Pick whichever channel suits you best.</p>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 0.05}>
                  <a href={d.href} className="card flex items-center gap-3 p-4 transition-colors hover:border-brand/60">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">{d.label}</span>
                      <span className="block truncate text-sm font-medium text-white">{d.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="card mt-6 p-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-semibold text-white">Our office</p>
                    <p className="mt-1 text-sm text-muted">{CONTACT.address}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-3 border-t border-line pt-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-semibold text-white">Business hours</p>
                    <p className="mt-1 text-sm text-muted">Open 24 hours, 7 days a week — including public holidays.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="card p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-white">
                    <Check className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">Message sent</h3>
                  <p className="mt-2 max-w-xs text-sm text-muted">
                    Thanks {form.name || "there"} — our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-white">Send us a message</h3>
                  <div>
                    <label className="mb-1.5 block text-xs text-muted">Full name</label>
                    <input
                      required value={form.name} onChange={set("name")}
                      className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-brand/60"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-muted">Phone / WhatsApp</label>
                    <input
                      required value={form.phone} onChange={set("phone")}
                      className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-brand/60"
                      placeholder="+971 5X XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-muted">Message</label>
                    <textarea
                      required value={form.message} onChange={set("message")} rows={4}
                      className="w-full resize-none rounded-xl border border-line bg-ink px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-brand/60"
                      placeholder="Which car are you interested in, and for which dates?"
                    />
                  </div>
                  <button type="submit" className="btn-red w-full justify-center">Send message</button>
                  <p className="text-center text-xs text-muted">
                    Prefer to talk now? <a href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`} className="text-brand">Message us on WhatsApp</a>
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-char2 py-16">
        <div className="wrap">
          <Reveal>
            <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-line photo">
              {/* Replace with an embedded Google Map iframe for your branch location */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <p className="text-sm font-semibold text-white/60">Business Bay, Dubai</p>
                  <p className="text-xs text-white/30">Embed your Google Maps iframe here</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
