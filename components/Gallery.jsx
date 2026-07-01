"use client";

import { useState } from "react";

export default function Gallery({ images = [], name, badge, tag }) {
  const list = images.filter(Boolean);
  const [active, setActive] = useState(0);
  const [broken, setBroken] = useState(false);
  const main = list[active];

  return (
    <div>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl photo">
        <div className="absolute left-4 top-4 z-10 flex gap-2">
          {badge && <span className="rounded-md bg-brand px-2.5 py-1 text-xs font-bold text-white">{badge}</span>}
          {tag && <span className="rounded-md border border-line bg-ink/80 px-2.5 py-1 text-xs font-semibold text-white">{tag}</span>}
        </div>

        {main && !broken ? (
          <img src={main} alt={name} className="absolute inset-0 h-full w-full object-cover" onError={() => setBroken(true)} />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-xs uppercase tracking-[0.4em] text-white/15">{name}</div>
        )}
      </div>

      {/* thumbnails only when there is more than one image */}
      {list.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {list.slice(0, 4).map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`aspect-[16/10] overflow-hidden rounded-lg border transition-colors ${
                i === active ? "border-brand" : "border-line hover:border-brand/50"
              }`}
            >
              <img src={src} alt={`${name} ${i + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
