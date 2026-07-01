export default function Logo({ className = "", showTagline = true }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo.png"
        alt="LTS Car Rental"
        className="h-7 w-auto sm:h-8"
      />
      {showTagline && (
        <>
          <span className="hidden h-5 w-px bg-line sm:block" />
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.3em] text-muted sm:block">
            Car Rental
          </span>
        </>
      )}
    </span>
  );
}
