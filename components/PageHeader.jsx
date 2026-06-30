import Link from "next/link";

export default function PageHeader({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-char2 pt-[72px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_0%,rgba(227,30,36,0.12),transparent_60%)]" />
      <div className="wrap relative py-14">
        <nav className="mb-4 flex items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-brand">Home</Link>
          {crumb && <><span>/</span><span className="text-white/70">{crumb}</span></>}
        </nav>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{subtitle}</p>}
      </div>
    </section>
  );
}
