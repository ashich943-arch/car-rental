export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 font-display text-2xl font-extrabold tracking-tight ${className}`}>
      <span className="text-white">LT</span>
      <span className="relative text-brand">
        S
        <span className="absolute -right-2 top-1/2 hidden h-[2px] w-3 -translate-y-1/2 rotate-[-20deg] bg-brand sm:block" />
      </span>
      <span className="ml-2 hidden h-5 w-px bg-line sm:block" />
      <span className="hidden text-[10px] font-medium uppercase tracking-[0.3em] text-muted sm:block">
        Car Rental
      </span>
    </span>
  );
}
