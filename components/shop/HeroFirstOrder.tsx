import Image from "next/image";
import { CLINICIAN_COUNT } from "@/lib/constants";
import CheckoutLink from "./CheckoutLink";

const bullets = [
  "Sharper memory. Faster recall. Less mental fog.",
  "Sustained mental energy that lasts past dinner.",
  "Calm focus to actually be present at home.",
];

export default function HeroFirstOrder() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[640px] md:min-h-[720px] lg:min-h-[780px]">
        {/* LEFT — copy column */}
        <div className="relative flex flex-col justify-center px-6 md:px-10 lg:px-16 xl:px-20 py-14 md:py-16 order-2 md:order-1">
          {/* Stars + clinician line */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span aria-hidden="true" className="text-fv-pink text-[18px] tracking-[0.05em]">
              ★★★★★
            </span>
            <span className="font-body font-bold text-[13px] text-fv-charcoal">
              <span className="text-fv-purple">4.8 stars</span> from verified customers ·{" "}
              <span className="text-fv-purple">{CLINICIAN_COUNT}+</span> Clinicians' Choice
            </span>
          </div>

          {/* Headline — one-line gut punch, Grüns formula */}
          <h1
            className="font-display font-extrabold text-fv-midnight tracking-[-0.025em] leading-[1.02] mb-6"
            style={{ fontSize: "clamp(38px, 5vw, 64px)" }}
          >
            Your Edge Is Slipping.
            <span
              className="block font-sub text-fv-purple mt-1.5"
              style={{ fontStyle: "italic", fontWeight: 500 }}
            >
              FlowVeda® Brings It Back.
            </span>
          </h1>

          {/* Benefit bullets */}
          <ul className="space-y-2.5 mb-6">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 font-body text-[16px] md:text-[17px] text-fv-charcoal leading-[1.45]"
              >
                <span className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-fv-purple text-white flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Caption */}
          <p className="font-body font-bold text-[14px] md:text-[15px] text-fv-charcoal mb-8 max-w-[480px] leading-[1.45]">
            Built for dads who want their edge back. 8 clinically studied Ayurvedic ingredients. Zero caffeine. Daily.
          </p>

          {/* CTA + risk-free line (button left-aligned, risk-free centered under it) */}
          <div className="self-start inline-flex flex-col items-center gap-3">
            <CheckoutLink className="inline-block bg-fv-midnight text-white font-body font-bold text-[14px] md:text-[15px] tracking-[0.10em] uppercase rounded-full px-9 md:px-10 py-[18px] md:py-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition-all duration-200">
              Save 40% + Free Shipping →
            </CheckoutLink>

            <div className="inline-flex items-center gap-2">
              <span className="flex-shrink-0 inline-flex w-5 h-5 rounded-full bg-fv-purple text-white items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="font-body font-bold text-[14px] text-fv-charcoal">
                Try it risk-free for <span className="text-fv-purple">60 days</span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — bigger product image on white, with Grüns-style yellow stamp anchored to the image */}
        <div className="relative bg-white flex items-center justify-center px-2 md:px-4 py-4 md:py-6 order-1 md:order-2 overflow-hidden">
          <div className="relative w-full max-w-[640px] md:max-w-[720px]">
            {/* Limited time offer stamp — anchored to image top-left */}
            <div className="absolute -top-2 left-2 md:top-4 md:left-4 z-20 rotate-[-8deg]">
              <div className="relative w-[108px] h-[108px] md:w-[140px] md:h-[140px] flex items-center justify-center rounded-full bg-[#FFD93D] text-fv-midnight shadow-[0_10px_24px_rgba(0,0,0,0.22)] border-[3px] border-fv-midnight">
                <div className="text-center px-3">
                  <div className="font-body font-extrabold text-[10px] md:text-[11px] tracking-[0.14em] uppercase leading-[1.15]">
                    Limited<br/>Time Offer
                  </div>
                  <div className="font-display font-extrabold text-[26px] md:text-[32px] leading-none tracking-[-0.02em] my-1">
                    40%
                  </div>
                  <div className="font-display font-extrabold text-[14px] md:text-[16px] tracking-[0.10em] uppercase leading-none">
                    Off
                  </div>
                </div>
              </div>
            </div>

            <Image
              src="/images/first-order-hero.png"
              alt="FlowVeda® bottle with capsules. Clinicians' Choice, recommended by 900+ physicians."
              width={1000}
              height={750}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
