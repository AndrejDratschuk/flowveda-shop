import Image from "next/image";
import { CLINICIAN_COUNT } from "@/lib/constants";

export default function HeroStress() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[640px] md:min-h-[720px] lg:min-h-[780px]">
        {/* LEFT — copy column */}
        <div className="relative flex flex-col justify-center px-6 md:px-10 lg:px-16 xl:px-20 py-14 md:py-16 order-2 md:order-1">
          {/* Audience eyebrow — IM8 trainer-page shape */}
          <div className="inline-flex items-center self-start mb-6">
            <span className="rounded-full bg-fv-midnight text-white font-body font-extrabold text-[11px] md:text-[12px] tracking-[0.18em] uppercase px-4 py-2">
              For Dads Who Stopped Showing Up at 6PM
            </span>
          </div>

          {/* Headline — 5 Reasons spine */}
          <h1
            className="font-display font-extrabold text-fv-midnight tracking-[-0.025em] leading-[1.02] mb-6"
            style={{ fontSize: "clamp(36px, 4.8vw, 60px)" }}
          >
            5 Reasons the Dad
            <span
              className="block font-sub text-fv-purple mt-1.5"
              style={{ fontStyle: "italic", fontWeight: 500 }}
            >
              your kids want
            </span>
            <span className="block">has stopped showing up at 6PM.</span>
          </h1>

          {/* Story body — mirrors IM8 hero pacing */}
          <p className="font-body text-[16px] md:text-[17px] text-fv-charcoal leading-[1.55] mb-7 max-w-[520px]">
            You used to come home and <em>be there</em>. Now you walk through
            the door already gone. The kids ask a question and your fuse is
            shorter than the question. You poured a third coffee at 3pm to keep
            up. Now you can't fall asleep, and tomorrow you'll need a
            fourth.
            <br />
            <br />
            You're not getting older. You're not a bad dad. Your stress
            response is running the show, and every "just push through" makes
            it louder.
            <br />
            <br />
            <span className="font-bold">Below: 5 reasons the dad your kids want is still in there, and what's actually been in the way.</span>
          </p>

          {/* CTAs — two side-by-side, IM8 trainer-page style */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <a
              href="#get-started"
              className="inline-block bg-fv-midnight text-white font-body font-bold text-[14px] md:text-[15px] tracking-[0.10em] uppercase rounded-full px-9 md:px-10 py-[18px] md:py-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition-all duration-200"
            >
              Get Started · Save 40%
            </a>
            <a
              href="#five-reasons"
              className="inline-flex items-center gap-2 font-body font-bold text-[14px] md:text-[15px] text-fv-charcoal underline decoration-fv-border underline-offset-4 hover:decoration-fv-purple hover:text-fv-purple transition-colors"
            >
              See the 5 Reasons ↓
            </a>
          </div>

          {/* Social proof row — 3 stats, IM8 style */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-fv-border max-w-[520px]">
            <div>
              <div className="font-display font-extrabold text-fv-purple text-[22px] md:text-[26px] leading-none tracking-[-0.02em] mb-1.5">
                {CLINICIAN_COUNT}+
              </div>
              <p className="font-body text-[11px] md:text-[12px] text-fv-charcoal-soft leading-[1.4] uppercase tracking-[0.05em]">
                Clinicians' Choice
              </p>
            </div>
            <div className="border-l border-fv-border pl-4 md:pl-6">
              <div className="font-display font-extrabold text-fv-purple text-[22px] md:text-[26px] leading-none tracking-[-0.02em] mb-1.5">
                60-Day
              </div>
              <p className="font-body text-[11px] md:text-[12px] text-fv-charcoal-soft leading-[1.4] uppercase tracking-[0.05em]">
                Money-Back Guarantee
              </p>
            </div>
            <div className="border-l border-fv-border pl-4 md:pl-6">
              <div className="font-display font-extrabold text-fv-purple text-[22px] md:text-[26px] leading-none tracking-[-0.02em] mb-1.5">
                Zero
              </div>
              <p className="font-body text-[11px] md:text-[12px] text-fv-charcoal-soft leading-[1.4] uppercase tracking-[0.05em]">
                Caffeine
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — product + stress-moment lifestyle */}
        <div className="relative bg-white flex items-center justify-center px-2 md:px-4 py-4 md:py-6 order-1 md:order-2 overflow-hidden">
          <div className="relative w-full max-w-[640px] md:max-w-[720px]">
            {/* Limited time offer stamp */}
            <div className="absolute -top-2 left-2 md:top-4 md:left-4 z-20 rotate-[-8deg]">
              <div className="relative w-[108px] h-[108px] md:w-[140px] md:h-[140px] flex items-center justify-center rounded-full bg-[#FFD93D] text-fv-midnight shadow-[0_10px_24px_rgba(0,0,0,0.22)] border-[3px] border-fv-midnight">
                <div className="text-center px-3">
                  <div className="font-body font-extrabold text-[10px] md:text-[11px] tracking-[0.14em] uppercase leading-[1.15]">
                    Limited<br />Time Offer
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
