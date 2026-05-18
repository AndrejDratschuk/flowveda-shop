export default function PromoBar() {
  return (
    <div className="bg-fv-midnight text-white">
      <a href="#get-started" className="block w-full">
        <div className="fv-container px-4 py-2.5 flex items-center justify-center gap-3 text-center">
          <span className="font-body font-bold text-[12px] md:text-[13px] tracking-[0.14em] uppercase">
            Save 40% + Free Shipping
          </span>
          <span className="hidden sm:inline text-fv-pink/90 font-sub italic text-[14px]">
            on the 60-Day Awakening
          </span>
          <span className="font-body font-bold text-[12px] md:text-[13px] tracking-[0.10em] uppercase text-fv-pink underline-offset-4 underline decoration-fv-pink/60 hover:decoration-fv-pink transition-colors">
            Start →
          </span>
        </div>
      </a>
    </div>
  );
}
