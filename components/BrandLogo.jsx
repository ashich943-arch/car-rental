"use client";

import { useState } from "react";

export default function BrandLogo({ slug, name, src, className = "" }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <img
      src={src || `/brands/${slug}.png`}
      alt={name}
      className={`max-h-full max-w-full w-auto object-contain ${className}`}
      loading="lazy"
      onError={() => setOk(false)}
    />
  );
}
