import Image from "next/image";

export default function GerbilWheel() {
  return (
    <section className="fv-section relative overflow-hidden bg-fv-midnight">
      {/* Neurons background at 40% opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Neurons.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
      </div>

      {/* Dark blue overlay for text legibility */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-fv-blue-deep/85 via-fv-purple-deep/75 to-fv-midnight/85" />

      <div className="relative z-10">
        <div className="fv-container-md">
          <div className="text-center mb-16">
            <span className="font-body text-[18px] font-bold tracking-[0.22em] uppercase inline-flex items-center gap-3 text-fv-pink mb-6 before:content-[''] before:block before:w-7 before:h-px before:bg-fv-pink">
              The Power of Choice
            </span>
            <h2 className="font-display font-extrabold text-white tracking-[-0.02em] leading-[1.1]"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
              Reaction or <em className="font-sub not-italic font-medium text-fv-pink" style={{ fontStyle: 'italic' }}>Intention.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left: World */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-10 text-center">
              <p className="font-body text-[18px] tracking-[0.22em] uppercase font-bold text-fv-pink mb-6">The World</p>
              <div className="space-y-5">
                {["Stimulus → Reaction", "Speed", "Noise", "Compulsion"].map((label, i) => (
                  <p key={i} className="font-display font-bold text-white text-[28px] tracking-[-0.01em] leading-tight opacity-80">
                    {label}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: FlowVeda */}
            <div className="bg-white/10 backdrop-blur-sm border-2 border-fv-pink/60 rounded-2xl p-10 text-center shadow-2xl">
              <p className="font-body text-[18px] tracking-[0.22em] uppercase font-bold text-fv-pink mb-6">FlowVeda®</p>
              <div className="space-y-5">
                {["Pause", "Awareness", "Intention", "Response"].map((label, i) => (
                  <p key={i} className="font-display font-bold text-white text-[32px] tracking-[-0.01em] leading-tight">
                    {label}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
