import Image from "next/image";
import CheckoutLink from "./CheckoutLink";

const includes = [
  "2 bottles · 180 capsules",
  "Full 60-day protocol",
  "3 capsules per day",
  "Ships next business day",
  "Free shipping in the US",
  "60-day money-back guarantee",
];

export default function Pricing() {
  return (
    <section className="fv-section bg-fv-bone" id="get-started">
      <div className="fv-container">
        <div className="text-center max-w-[760px] mx-auto mb-12">
          <span className="fv-eyebrow justify-center inline-flex mb-7">Get Started</span>
          <h2 className="fv-display mb-5">
            The 60-Day <em>Awakening.</em>
          </h2>
          <p className="fv-body-lead text-[22px] leading-[1.55]">
            Two bottles. One protocol. The space to choose how you respond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-[1040px] mx-auto bg-white rounded-2xl overflow-hidden border border-fv-border shadow-fv-card-hover">
          {/* Left: product image */}
          <div className="relative bg-fv-purple-light flex items-center justify-center p-10 md:p-14">
            <div className="relative w-full max-w-[360px] aspect-square">
              <Image
                src="/images/60-day-awakening.png"
                alt="FlowVeda 60-Day Awakening — two-bottle starter kit"
                fill
                sizes="(max-width: 768px) 80vw, 360px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
            <span className="absolute top-5 left-5 bg-fv-pink text-white font-body font-bold text-[11px] tracking-[0.12em] uppercase rounded-full px-3 py-1.5">
              Save 40%
            </span>
          </div>

          {/* Right: offer card */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 mb-5">
              <span aria-hidden="true" className="text-fv-pink text-[16px] tracking-[0.05em]">★★★★★</span>
              <span className="font-body font-bold text-[12px] tracking-[0.10em] uppercase text-fv-charcoal">
                4.8 · 2,400+ reviews
              </span>
            </div>

            <h3 className="font-display font-extrabold text-[28px] md:text-[30px] tracking-[-0.02em] text-fv-charcoal mb-4 leading-tight">
              The 60-Day Awakening
            </h3>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display font-extrabold text-fv-charcoal text-[52px] leading-none tracking-[-0.025em]">
                $99
              </span>
              <span className="font-body line-through text-[20px] text-fv-text-muted">
                $165
              </span>
              <span className="font-body font-bold text-[11px] tracking-[0.10em] uppercase text-white bg-fv-pink rounded-full px-3 py-1.5">
                40% Off
              </span>
            </div>

            <p className="font-sub italic text-fv-purple text-[16px] mb-6">
              $1.79 per daily dose · $0.60 per capsule.
            </p>

            <ul className="space-y-2.5 mb-7">
              {includes.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-[15px] text-fv-charcoal">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-fv-purple text-white flex items-center justify-center text-[11px] font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <CheckoutLink className="inline-block text-center bg-fv-grad-purple text-white font-body font-bold text-[14px] tracking-[0.10em] uppercase rounded-[10px] px-8 py-[18px] shadow-fv-cta hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(102,71,156,0.55)] transition-all duration-200 mb-3">
              Start the 60-Day Awakening →
            </CheckoutLink>

            <p className="font-body text-[12px] tracking-[0.10em] uppercase text-fv-text-muted text-center">
              Secure checkout · Free US shipping · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
