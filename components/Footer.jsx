import Link from "next/link";
import Logo from "./Logo";
import { CONTACT } from "@/lib/data";
import {
  Mail, Phone, MessageCircle, Send, Instagram, Facebook, Youtube, Linkedin, MapPin,
} from "lucide-react";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Special Offers", href: "/offers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Rent a Car",
    links: [
      { label: "All Cars", href: "/cars" },
      { label: "Luxury", href: "/categories/luxury" },
      { label: "Sports", href: "/categories/sports" },
      { label: "SUV", href: "/categories/suv" },
      { label: "Electric", href: "/categories/electric" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Chauffeur Service", href: "/services#chauffeur" },
      { label: "Airport Transfer", href: "/services#airport" },
      { label: "Long-Term Leasing", href: "/services" },
      { label: "Brands", href: "/brands" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-char2">
      <div className="wrap py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Dubai&apos;s luxury and exotic car rental. 281+ cars in fleet, full insurance included, and free delivery across the city.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`} className="inline-flex items-center gap-2 rounded-md border border-line bg-char px-3 py-2 text-xs font-medium text-white hover:border-brand">
                <MessageCircle className="h-4 w-4 text-brand" /> WhatsApp
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-line bg-char px-3 py-2 text-xs font-medium text-white hover:border-brand">
                <Send className="h-4 w-4 text-brand" /> Telegram
              </a>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 rounded-md border border-line bg-char px-3 py-2 text-xs font-medium text-white hover:border-brand">
                <Mail className="h-4 w-4 text-brand" /> Email
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-muted transition-colors hover:text-brand">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {CONTACT.address}</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-brand" /> {CONTACT.phone}</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-brand" /> {CONTACT.email}</li>
            </ul>
            <div className="mt-5 flex gap-2">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social link" className="grid h-9 w-9 place-items-center rounded-md border border-line text-white/70 transition-colors hover:border-brand hover:text-brand">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LTS Car Rental — {CONTACT.domain}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/terms" className="hover:text-brand">Terms</Link>
            <Link href="/privacy" className="hover:text-brand">Privacy</Link>
            <Link href="#" className="hover:text-brand">Sitemap</Link>
            <div className="flex items-center gap-1.5">
              {["VISA", "MC", "CASH", "CRYPTO"].map((p) => (
                <span key={p} className="rounded border border-line px-2 py-1 text-[9px] font-bold tracking-wide text-muted">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
