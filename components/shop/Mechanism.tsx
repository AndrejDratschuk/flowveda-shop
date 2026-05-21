import Image from "next/image";

export default function Mechanism() {
  return (
    <section className="fv-section bg-white relative overflow-hidden">
      {/* Section background — Half-a-second lotus at 40% opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Half-a-second.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
      </div>

      <div className="fv-container-md relative z-10">
        <div className="max-w-[820px] mb-16 text-center mx-auto">
          <span className="fv-eyebrow justify-center inline-flex mb-6">The Mechanism</span>
          <h2 className="fv-display mb-8">
            Watch what happens
            <em className="block mt-2">in less than a second.</em>
          </h2>
          <p className="fv-body-lead text-[24px] leading-[1.6]">
            Every reaction travels the same path. Once you see it, a door opens.
          </p>
          <p className="fv-body-lead text-[24px] leading-[1.6] mt-4">
            This is not personal failure. This is biology.
          </p>
        </div>

        {/* 488ms timing diagram — the moment before */}
        <div className="rounded-2xl border border-fv-purple bg-white p-8 md:p-12 shadow-fv-card">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-9 items-center">
            <div className="text-center">
              <div className="font-display font-extrabold text-[52px] leading-none tracking-[-0.032em] text-fv-blue">
                ~12ms
              </div>
              <div className="font-body text-[18px] tracking-[0.18em] uppercase text-fv-charcoal mt-3 font-bold">
                Amygdala fires
              </div>
              <div className="font-sub italic text-[20px] text-fv-purple mt-2">
                the alarm
              </div>
            </div>

            <div className="relative h-20">
              <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 rounded-sm bg-fv-grad-purple-deep" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2.5 bg-white border-[1.5px] border-fv-purple rounded-full whitespace-nowrap shadow-[0_2px_12px_rgba(102,71,156,0.15)]">
                <span className="font-sub italic text-[20px] text-fv-purple font-medium">
                  488ms · the moment before
                </span>
              </div>
            </div>

            <div className="text-center">
              <div className="font-display font-extrabold text-[52px] leading-none tracking-[-0.032em] text-fv-blue">
                ~500ms
              </div>
              <div className="font-body text-[18px] tracking-[0.18em] uppercase text-fv-charcoal mt-3 font-bold">
                Prefrontal cortex engages
              </div>
              <div className="font-sub italic text-[20px] text-fv-purple mt-2">
                the choice
              </div>
            </div>
          </div>

          <p className="text-center font-body italic text-[14px] text-fv-text-muted mt-6">
            Öhman · LeDoux · cited in the FlowVeda® EQ research summary.
          </p>
        </div>

        <p className="fv-body-lead text-center mt-12 max-w-[680px] mx-auto font-display font-semibold text-[26px]">
          488 milliseconds.
          <span className="block mt-2">The space where choice becomes possible.</span>
        </p>
      </div>
    </section>
  );
}
