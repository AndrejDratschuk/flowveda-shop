import Image from "next/image";
import CTAButton from "./CTAButton";

export default function FinalClose() {
  return (
    <section className="relative overflow-hidden py-32 px-6 bg-fv-grad-purple-deep">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/flow-states.webp"
          alt=""
          fill
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-fv-purple-deep/85 via-fv-purple/60 to-fv-blue/85" />

      <div className="fv-container-sm relative z-10 text-center">
        <h2 className="font-display font-extrabold text-white tracking-[-0.025em] leading-[1.05] mb-12"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
          You do have a choice.
          <em className="block font-sub not-italic font-normal text-fv-pink mt-2" style={{ fontStyle: 'italic' }}>
            Most people just never recognize the moment.
          </em>
        </h2>

        <CTAButton label="Start Your 60-Day Awakening" />

        <p className="font-sub italic text-white/75 text-[18px] mt-8">
          60-day money-back guarantee.
        </p>
      </div>
    </section>
  );
}
