import { CLINICIAN_COUNT } from "@/lib/constants";

const stats = [
  { value: "200+", label: "peer-reviewed clinical studies cited across the formula." },
  { value: `${CLINICIAN_COUNT}+`, label: "physicians who share FlowVeda® with patients." },
  { value: "86%", label: "of every capsule is Ayurvedic-based. No proprietary blends." },
  { value: "8", label: "clinically-studied compounds. Every dose published on the label." },
];

const certifications = [
  "3rd-Party Lab Tested",
  "cGMP-Certified Facility",
  "FDA-Registered Warehouses",
  "Transparent Sourcing · QR-Code Tracking",
];

export default function Outcomes() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-16 bg-white">
      <div className="fv-container">
        <div className="rounded-3xl bg-fv-bone px-6 md:px-12 lg:px-16 py-14 md:py-20 max-w-[1240px] mx-auto">
          {/* Stats block */}
          <div className="text-center max-w-[760px] mx-auto mb-12">
            <h2 className="font-display font-extrabold text-fv-purple tracking-[-0.02em] leading-[1.05] mb-5"
                style={{ fontSize: "clamp(34px, 4.8vw, 50px)" }}>
              Backed by Science. Not Hype.
            </h2>
            <p className="font-body text-[16px] md:text-[18px] text-fv-charcoal-soft leading-[1.6]">
              We can't promise miracles. We can show you exactly what's in the bottle, and the research behind every ingredient.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 max-w-[1080px] mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-extrabold text-fv-purple text-[60px] md:text-[80px] leading-none tracking-[-0.025em] mb-4">
                  {s.value}
                </div>
                <p className="font-body text-[14px] md:text-[15px] text-fv-charcoal leading-[1.5] max-w-[220px] mx-auto">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center font-body italic text-[12px] md:text-[13px] text-fv-text-muted mt-10 max-w-[700px] mx-auto">
            Studies and clinician counts current as of 2026. Every cited study is linked on the <a href="https://flowveda.com/science" className="underline underline-offset-2 hover:text-fv-purple">FlowVeda® Science</a> page.
          </p>

          {/* Divider */}
          <div className="h-px bg-fv-border my-12 md:my-16 max-w-[640px] mx-auto" />

          {/* Quality block */}
          <div className="text-center max-w-[820px] mx-auto">
            <h3 className="font-display font-extrabold text-fv-purple tracking-[-0.02em] leading-[1.05] mb-5"
                style={{ fontSize: "clamp(28px, 3.6vw, 38px)" }}>
              Quality You Can Trust.
            </h3>
            <p className="font-body text-[15px] md:text-[16px] text-fv-charcoal-soft leading-[1.6] mb-9 max-w-[640px] mx-auto">
              Every batch of FlowVeda® is tested by an independent third-party lab and produced under the certifications you'd expect, plus a few you wouldn't:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-[680px] mx-auto">
              {certifications.map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2.5 px-2">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-fv-purple text-white">
                    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-body font-semibold text-[14px] md:text-[15px] text-fv-charcoal leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
