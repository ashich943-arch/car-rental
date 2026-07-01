"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CarCard from "./CarCard";
import { cars, brands, categories, bodyTypes, transmissions } from "@/lib/data";
import { SlidersHorizontal, X } from "lucide-react";

export default function CarsExplorer() {
  const params = useSearchParams();
  const brandParam = params.get("brand") || "";
  const catParam = params.get("category") || "";
  const bodyParam = params.get("body") || "";
  const q = (params.get("q") || "").toLowerCase().trim();

  const [brand, setBrand] = useState(brandParam);
  const [category, setCategory] = useState(catParam);
  const [body, setBody] = useState(bodyParam);
  const [trans, setTrans] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // keep filters in sync when the URL changes (e.g. clicking a brand in the navbar)
  useEffect(() => { setBrand(brandParam); }, [brandParam]);
  useEffect(() => { setCategory(catParam); }, [catParam]);
  useEffect(() => { setBody(bodyParam); }, [bodyParam]);

  const filtered = useMemo(() => {
    let list = cars.filter((c) =>
      (!brand || c.brand === brand) &&
      (!category || c.category === category) &&
      (!body || c.body === body) &&
      (!trans || c.transmission === trans) &&
      (!q || `${c.name} ${c.brand} ${c.category} ${c.body}`.toLowerCase().includes(q)) &&
      c.daily <= maxPrice
    );
    if (sort === "low") list = [...list].sort((a, b) => a.daily - b.daily);
    if (sort === "high") list = [...list].sort((a, b) => b.daily - a.daily);
    if (sort === "featured") list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
    return list;
  }, [brand, category, body, trans, maxPrice, sort, q]);

  const reset = () => { setBrand(""); setCategory(""); setBody(""); setTrans(""); setMaxPrice(5000); };

  const Filters = (
    <div className="space-y-7">
      <FilterBlock label="Category">
        {categories.map((c) => (
          <Radio key={c.slug} name="cat" checked={category === c.slug} onChange={() => setCategory(category === c.slug ? "" : c.slug)} label={c.name} />
        ))}
      </FilterBlock>
      <FilterBlock label="Brand">
        {brands.map((b) => (
          <Radio key={b.slug} name="brand" checked={brand === b.slug} onChange={() => setBrand(brand === b.slug ? "" : b.slug)} label={b.name} />
        ))}
      </FilterBlock>
      <FilterBlock label="Body type">
        {bodyTypes.map((b) => (
          <Radio key={b} name="body" checked={body === b} onChange={() => setBody(body === b ? "" : b)} label={b} />
        ))}
      </FilterBlock>
      <FilterBlock label="Transmission">
        {transmissions.map((t) => (
          <Radio key={t} name="trans" checked={trans === t} onChange={() => setTrans(trans === t ? "" : t)} label={t} />
        ))}
      </FilterBlock>
      <FilterBlock label={`Max price · AED ${maxPrice}/day`}>
        <input type="range" min="150" max="5000" step="50" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-brand" />
      </FilterBlock>
      <button onClick={reset} className="text-sm font-semibold text-brand hover:text-brandhi">Reset filters</button>
    </div>
  );

  return (
    <div className="wrap grid gap-8 py-12 lg:grid-cols-[260px_1fr]">
      {/* desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-2xl border border-line bg-char2 p-6">{Filters}</div>
      </aside>

      <div>
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm text-muted">{filtered.length} cars available</p>
          <div className="flex items-center gap-2">
            <button onClick={() => setShowFilters(true)} className="btn-ghost px-4 py-2 lg:hidden">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-md border border-line bg-char2 px-3 py-2 text-sm text-white outline-none">
              <option value="featured">Featured</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
            </select>
          </div>
        </div>

        {filtered.length ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((c) => <CarCard key={c.slug} car={c} />)}
          </div>
        ) : (
          <div className="rounded-2xl border border-line bg-char2 p-12 text-center">
            <p className="text-sm text-white">No cars match these filters.</p>
            <button onClick={reset} className="btn-red mt-4">Clear filters</button>
          </div>
        )}
      </div>

      {/* mobile filter drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowFilters(false)} />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-2xl border-t border-line bg-ink p-6">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-display text-lg font-bold text-white">Filters</p>
              <button onClick={() => setShowFilters(false)} className="grid h-9 w-9 place-items-center rounded-md text-white hover:bg-char2"><X className="h-5 w-5" /></button>
            </div>
            {Filters}
            <button onClick={() => setShowFilters(false)} className="btn-red mt-6 w-full">Show {filtered.length} cars</button>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterBlock({ label, children }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Radio({ checked, onChange, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-white/80">
      <span className={`grid h-4 w-4 place-items-center rounded-full border ${checked ? "border-brand" : "border-line"}`}>
        {checked && <span className="h-2 w-2 rounded-full bg-brand" />}
      </span>
      <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
