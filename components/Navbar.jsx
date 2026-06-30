"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { brands, categories, bodyTypes } from "@/lib/data";
import {
  ChevronDown, Globe, Search, User, Menu, X, Star, Phone, MapPin,
} from "lucide-react";

const services = [
  { name: "Chauffeur Service", href: "/services#chauffeur" },
  { name: "Airport Transfer", href: "/services#airport" },
];

const locationsList = ["Dubai Marina", "Downtown Dubai", "Business Bay", "Palm Jumeirah", "DXB Airport"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line/70 bg-ink/80 backdrop-blur-xl" : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label="LTS Car Rental home" className="shrink-0">
          <Logo />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* Rent a Car mega menu */}
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
              Rent a Car <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full w-[560px] translate-y-2 rounded-2xl border border-line bg-char p-5 opacity-0 shadow-card transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Categories</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {categories.map((c) => (
                      <li key={c.slug}>
                        <Link href={`/categories/${c.slug}`} className="block rounded px-2 py-1.5 text-sm text-white/80 hover:bg-char2 hover:text-brand">
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Body type</p>
                  <ul className="space-y-1">
                    {bodyTypes.map((b) => (
                      <li key={b}>
                        <Link href="/cars" className="block rounded px-2 py-1.5 text-sm text-white/80 hover:bg-char2 hover:text-brand">
                          {b}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/cars" className="link-arrow mt-3 px-2">View all cars →</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Brands dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
              Brands <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full w-[320px] translate-y-2 rounded-2xl border border-line bg-char p-3 opacity-0 shadow-card transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <ul className="grid grid-cols-2 gap-1">
                {brands.map((b) => (
                  <li key={b.slug}>
                    <Link href={`/cars?brand=${b.slug}`} className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-white/80 hover:bg-char2 hover:text-brand">
                      <span className="grid h-6 w-9 place-items-center rounded border border-line text-[9px] font-bold uppercase text-muted">{b.name.slice(0, 3)}</span>
                      {b.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
              Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full w-[240px] translate-y-2 rounded-2xl border border-line bg-char p-2 opacity-0 shadow-card transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {services.map((s) => (
                <Link key={s.name} href={s.href} className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-char2 hover:text-brand">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/offers" className="rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white">Special Offers</Link>

          {/* Locations dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
              Locations <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full w-[240px] translate-y-2 rounded-2xl border border-line bg-char p-2 opacity-0 shadow-card transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {locationsList.map((l) => (
                <Link key={l} href="/contact" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-char2 hover:text-brand">
                  <MapPin className="h-4 w-4 text-muted" /> {l}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* right cluster */}
        <div className="hidden items-center gap-2 lg:flex">
          <button aria-label="Search" className="grid h-9 w-9 place-items-center rounded-md text-white/70 hover:bg-char2 hover:text-white">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button aria-label="Language and currency" className="flex h-9 items-center gap-1 rounded-md px-2 text-xs font-medium text-white/70 hover:bg-char2 hover:text-white">
            <Globe className="h-[18px] w-[18px]" /> EN · AED
          </button>
          <Link href="/contact" className="flex h-9 items-center gap-1.5 rounded-md border border-line px-3 text-sm font-medium text-white/80 hover:border-brand hover:text-white">
            <User className="h-4 w-4" /> Sign In
          </Link>
          <div className="flex h-9 items-center gap-2 rounded-md border border-line bg-char2 px-2.5">
            <Star className="h-3.5 w-3.5 fill-brand text-brand" />
            <div className="leading-tight">
              <p className="text-[11px] font-semibold text-white">Get the App</p>
              <p className="text-[9px] text-muted">4.8 · 2.4k ratings</p>
            </div>
          </div>
        </div>

        {/* mobile toggle */}
        <button
          aria-label="Open menu"
          className="grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto border-l border-line bg-ink p-5">
            <div className="mb-6 flex items-center justify-between">
              <Logo />
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-md text-white hover:bg-char2">
                <X className="h-6 w-6" />
              </button>
            </div>

            <MobileGroup label="Rent a Car" open={mobileSub === "cars"} onToggle={() => setMobileSub(mobileSub === "cars" ? null : "cars")}>
              {categories.map((c) => (
                <Link key={c.slug} href={`/categories/${c.slug}`} onClick={() => setOpen(false)} className="block rounded px-3 py-2 text-sm text-white/75 hover:text-brand">{c.name}</Link>
              ))}
            </MobileGroup>

            <MobileGroup label="Brands" open={mobileSub === "brands"} onToggle={() => setMobileSub(mobileSub === "brands" ? null : "brands")}>
              {brands.map((b) => (
                <Link key={b.slug} href={`/cars?brand=${b.slug}`} onClick={() => setOpen(false)} className="block rounded px-3 py-2 text-sm text-white/75 hover:text-brand">{b.name}</Link>
              ))}
            </MobileGroup>

            <MobileGroup label="Services" open={mobileSub === "services"} onToggle={() => setMobileSub(mobileSub === "services" ? null : "services")}>
              {services.map((s) => (
                <Link key={s.name} href={s.href} onClick={() => setOpen(false)} className="block rounded px-3 py-2 text-sm text-white/75 hover:text-brand">{s.name}</Link>
              ))}
            </MobileGroup>

            <Link href="/offers" onClick={() => setOpen(false)} className="border-b border-line py-3 text-sm font-medium text-white">Special Offers</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="border-b border-line py-3 text-sm font-medium text-white">About Us</Link>
            <Link href="/faq" onClick={() => setOpen(false)} className="border-b border-line py-3 text-sm font-medium text-white">FAQ</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="border-b border-line py-3 text-sm font-medium text-white">Contact</Link>

            <div className="mt-6 flex items-center gap-3">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-ghost flex-1"><User className="h-4 w-4" /> Sign In</Link>
              <a href="tel:+971522375439" className="btn-red flex-1"><Phone className="h-4 w-4" /> Call</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileGroup({ label, open, onToggle, children }) {
  return (
    <div className="border-b border-line">
      <button onClick={onToggle} className="flex w-full items-center justify-between py-3 text-sm font-medium text-white">
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-2">{children}</div>}
    </div>
  );
}
