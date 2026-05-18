import Image from "next/image";

export default function Problem() {
  return (
    <section className="bg-fv-purple-light/40 px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-[1240px] mx-auto bg-white rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(102,71,156,0.10)]">
        <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr] items-stretch">
          {/* LEFT — content card */}
          <div className="flex items-center justify-center px-6 md:px-12 lg:px-16 py-14 md:py-20">
            <div className="max-w-[520px] w-full text-center">
              <h2 className="font-display font-extrabold text-fv-purple tracking-[-0.02em] leading-[1.05] mb-4"
                  style={{ fontSize: "clamp(34px, 4.8vw, 52px)" }}>
                Modern Living Captures Your Reaction.
              </h2>
              <p className="font-body text-[17px] md:text-[18px] text-fv-charcoal-soft leading-[1.55] mb-10 max-w-[440px] mx-auto">
                FlowVeda® gives back the half-second of space to choose how you respond.
              </p>

              <div className="grid grid-cols-2 gap-6 md:gap-8 mb-10">
                <div>
                  <div className="font-display font-extrabold text-fv-purple text-[64px] md:text-[72px] leading-none tracking-[-0.025em] mb-3">
                    76%
                  </div>
                  <p className="font-body text-[14px] md:text-[15px] text-fv-charcoal leading-[1.5]">
                    of U.S. adults report stress impacting daily decisions and well-being.<sup className="text-fv-purple">1</sup>
                  </p>
                </div>
                <div>
                  <div className="font-display font-extrabold text-fv-purple text-[64px] md:text-[72px] leading-none tracking-[-0.025em] mb-3">
                    1 in 3
                  </div>
                  <p className="font-body text-[14px] md:text-[15px] text-fv-charcoal leading-[1.5]">
                    feel reactive instead of intentional at work and at home.<sup className="text-fv-purple">2</sup>
                  </p>
                </div>
              </div>

              <a href="#get-started" className="inline-block bg-fv-grad-purple text-white font-body font-bold text-[14px] tracking-[0.10em] uppercase rounded-full px-10 py-[18px] shadow-fv-cta hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(102,71,156,0.55)] transition-all duration-200">
                Save 40% + Free Shipping
              </a>

              <p className="mt-5 font-body text-[12px] text-fv-text-muted">
                <a href="https://www.apa.org/news/press/releases/stress" className="underline underline-offset-2 hover:text-fv-purple">¹ Source</a>
                <span className="mx-2">·</span>
                <a href="https://www.cdc.gov/niosh/topics/stress/" className="underline underline-offset-2 hover:text-fv-purple">² Source</a>
              </p>
            </div>
          </div>

          {/* RIGHT — lifestyle image */}
          <div className="relative min-h-[340px] md:min-h-[520px] order-first md:order-last">
            <Image
              src="/images/problem-bottle-capsule.png"
              alt="A woman holding a FlowVeda® capsule and bottle. The calm, focused attention to choose how she responds."
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
