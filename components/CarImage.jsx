"use client";

import { useState } from "react";

export default function CarImage({ src, alt, fallback = "" }) {
  const [ok, setOk] = useState(Boolean(src));

  if (!ok) {
    return (
      <div className="absolute inset-0 grid place-items-center text-xs uppercase tracking-[0.3em] text-white/15">
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
      onError={() => setOk(false)}
    />
  );
}
