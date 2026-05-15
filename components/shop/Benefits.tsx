import Image from "next/image";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4v2" />
        <path d="M12 18v2" />
      </svg>
    ),
    name: "Calm Focus",
    body: "Sustained attention without the spike-and-crash of stimulants.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.5-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-7 11-7 11" />
      </svg>
    ),
    name: "Emotional Regulation",
    body: "Recognize the moment before reaction. Choose your response.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0-6 6c0 2 1 3.5 2 5v3a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-3c1-1.5 2-3 2-5a6 6 0 0 0-6-6Z" />
        <path d="M10 17h4" />
      </svg>
    ),
    name: "Cognitive Clarity",
    body: "Sharper recall. Cleaner thinking. Less mental fog.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    name: "Stress Resilience",
    body: "Adaptogenic support that compounds with daily use.",
  },
];

export default function Benefits() {
  return (
    <section className="fv-section bg-white">
      <div className="fv-container">
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <h2 className="font-display font-extrabold text-fv-purple tracking-[-0.02em] leading-[1.05] mb-5"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            Transform Your Mind.
          </h2>
          <p className="font-body text-[18px] md:text-[19px] text-fv-charcoal-soft leading-[1.6] max-w-[520px] mx-auto">
            Over 200 clinical studies support the eight ingredients in FlowVeda®.
          </p>
        </div>

        {/* Desktop: 3-col grid with product image in the middle column spanning both rows */}
        <div className="hidden md:grid grid-cols-[1fr_minmax(280px,420px)_1fr] gap-x-10 gap-y-14 items-center max-w-[1080px] mx-auto">
          {/* Row 1 left */}
          <div className="text-right pr-2">
            <div className="inline-flex w-14 h-14 rounded-full border-[1.5px] border-fv-purple text-fv-purple items-center justify-center mb-4">
              {pillars[0].icon}
            </div>
            <h3 className="font-display font-extrabold text-fv-purple text-[26px] tracking-[-0.01em] mb-2">
              {pillars[0].name}
            </h3>
            <p className="font-body text-[16px] text-fv-charcoal leading-[1.55] max-w-[280px] ml-auto">
              {pillars[0].body}
            </p>
          </div>

          {/* Center product image — spans both rows */}
          <div className="row-span-2 flex items-center justify-center">
            <div className="relative w-full aspect-[3/4] max-w-[380px]">
              <Image
                src="/images/60-day-awakening.png"
                alt="FlowVeda® 60-Day Awakening — two-bottle starter kit"
                fill
                sizes="380px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Row 1 right */}
          <div className="pl-2">
            <div className="inline-flex w-14 h-14 rounded-full border-[1.5px] border-fv-purple text-fv-purple items-center justify-center mb-4">
              {pillars[1].icon}
            </div>
            <h3 className="font-display font-extrabold text-fv-purple text-[26px] tracking-[-0.01em] mb-2">
              {pillars[1].name}
            </h3>
            <p className="font-body text-[16px] text-fv-charcoal leading-[1.55] max-w-[280px]">
              {pillars[1].body}
            </p>
          </div>

          {/* Row 2 left */}
          <div className="text-right pr-2">
            <div className="inline-flex w-14 h-14 rounded-full border-[1.5px] border-fv-purple text-fv-purple items-center justify-center mb-4">
              {pillars[2].icon}
            </div>
            <h3 className="font-display font-extrabold text-fv-purple text-[26px] tracking-[-0.01em] mb-2">
              {pillars[2].name}
            </h3>
            <p className="font-body text-[16px] text-fv-charcoal leading-[1.55] max-w-[280px] ml-auto">
              {pillars[2].body}
            </p>
          </div>

          {/* Row 2 right */}
          <div className="pl-2">
            <div className="inline-flex w-14 h-14 rounded-full border-[1.5px] border-fv-purple text-fv-purple items-center justify-center mb-4">
              {pillars[3].icon}
            </div>
            <h3 className="font-display font-extrabold text-fv-purple text-[26px] tracking-[-0.01em] mb-2">
              {pillars[3].name}
            </h3>
            <p className="font-body text-[16px] text-fv-charcoal leading-[1.55] max-w-[280px]">
              {pillars[3].body}
            </p>
          </div>
        </div>

        {/* Mobile: product image on top, 2x2 grid below */}
        <div className="md:hidden">
          <div className="relative w-full aspect-[3/4] max-w-[300px] mx-auto mb-10">
            <Image
              src="/images/60-day-awakening.png"
              alt="FlowVeda® 60-Day Awakening — two-bottle starter kit"
              fill
              sizes="300px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {pillars.map((p, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex w-12 h-12 rounded-full border-[1.5px] border-fv-purple text-fv-purple items-center justify-center mb-3">
                  {p.icon}
                </div>
                <h3 className="font-display font-extrabold text-fv-purple text-[19px] mb-1.5">
                  {p.name}
                </h3>
                <p className="font-body text-[14px] text-fv-charcoal leading-[1.5]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
