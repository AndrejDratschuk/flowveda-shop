import Image from "next/image";

const cards = [
  { stat: "200,000", unit: "years", label: "of survival wiring" },
  { stat: "100%", unit: "", label: "ancestral survival success" },
  { stat: "0", unit: "", label: "preparation for modern stimuli" },
];

export default function Reframe() {
  return (
    <section className="fv-section bg-fv-cloud relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/beautiful-lake.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        {/* Vertical fade — top half more transparent than bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(238,240,234,0.85) 0%, rgba(238,240,234,0.45) 35%, rgba(238,240,234,0) 70%, rgba(238,240,234,0) 100%)",
          }}
        />
      </div>

      <div className="fv-container-md relative z-10">
        <div className="text-center max-w-[820px] mx-auto mb-14">
          <span className="fv-eyebrow justify-center inline-flex mb-7">The Reframe</span>
          <h2 className="fv-display">
            You do have a choice.
            <em className="block mt-2">Most people just never recognize the moment.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white border-[1.5px] border-fv-purple rounded-xl p-9 shadow-[0_8px_24px_rgba(102,71,156,0.16)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(102,71,156,0.22)] transition-all duration-200"
            >
              <div className="w-11 h-[3px] bg-fv-purple rounded-sm mb-5" />
              <div className="font-display font-extrabold text-[44px] leading-none tracking-[-0.025em] text-fv-blue mb-3">
                {card.stat}
                {card.unit && <span className="text-[24px] font-bold text-fv-purple ml-2">{card.unit}</span>}
              </div>
              <p className="font-body text-[21px] leading-[1.65] text-fv-charcoal">
                {card.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-14 max-w-[680px] mx-auto font-display font-semibold text-[30px] text-fv-charcoal leading-[1.45]">
          Your biology is not broken.
          <span className="block mt-2 text-fv-purple font-sub italic font-normal">It is just outdated for this environment.</span>
        </p>
      </div>
    </section>
  );
}
