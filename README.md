# LTS Car Rental — Dubai

A premium multi-page luxury car rental website built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion**, and **lucide-react** icons.

Dark palette (black `#0a0a0a`, charcoal `#1a1a1a`, red accent `#E31E24`), fully responsive, mobile-first. No emojis — clean outline icons only.

---

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (what Vercel runs)
```

Requires Node.js 18.18+ or 20+.

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home (all 17 sections) |
| `/cars` | All cars + filter sidebar |
| `/cars/[slug]` | Single car detail + booking form |
| `/brands` | All brands grid |
| `/categories/[category]` | Category listing (sports, suv, luxury, economy, …) |
| `/offers` | Special offers & deals |
| `/about` | About us |
| `/services` | Chauffeur + airport transfer (`#chauffeur`, `#airport`) |
| `/faq` | FAQ accordion |
| `/contact` | Contact form + map + details |
| `/blog` | Blog listing |

---

## Adding real images (IMPORTANT)

The site ships with styled CSS placeholders so it builds and looks clean with **zero images**. To go live, drop real **photorealistic** photos into `/public`:

- **Cars** → `/public/cars/<file>.jpg` — filenames are set in `lib/data.js` (e.g. `huracan.jpg`). Match them or edit the `image` field.
- **Hero car + skyline** → `/public/hero/` then wire them into `components/home/Hero.jsx` (image slot is marked in the file).
- **Brand logos** → `/public/brands/<brand>.png`. Brand cards are currently **styled text** (see note below).
- **Blog covers** → `/public/blog/<slug>.jpg` (slugs in `lib/data.js`).

All content lives in **`lib/data.js`** — cars, brands, categories, reviews, FAQs, blog posts, and the `CONTACT` block (phone, WhatsApp, email, address). Edit there, the whole site updates.

---

## Two honest notes

1. **Brand logos** — Ferrari, Lamborghini, etc. are trademarked, so I used clean text-based brand cards instead of copying official logos. To use real marks, download the official assets, put them in `/public/brands`, and swap the text card for an `<Image>` in `components/home/BrandStrip.jsx` and `app/brands/page.jsx`.
2. **Maps** — the map areas are placeholders. Paste your Google Maps `<iframe>` embed where marked in `components/home/MapSection.jsx` and `app/contact/page.jsx`.

---

## Deploy (GitHub + Vercel)

1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). No env vars needed. Click **Deploy**.
4. Add your domain `lts-car-rental.com` under **Settings → Domains**.

`next.config.mjs` already allows remote images from Unsplash if you choose to use hosted URLs instead of local files.

---

## Stack

- Next.js 14.2 (App Router, JavaScript — no TypeScript)
- Tailwind CSS 3.4
- Framer Motion 11
- lucide-react (outline icons)
