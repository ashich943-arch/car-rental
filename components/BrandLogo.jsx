"use client";

import { useState } from "react";

export default function BrandLogo({ slug, name, src, scale = 1, className = "" }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <img
      src={src || `/brands/${slug}.png`}
      alt={name}
      style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
      className={`max-h-full max-w-full w-auto object-contain ${className}`}
      loading="lazy"
      onError={() => setOk(false)}
    />
  );
}
