import Image from "next/image";

export default function Guarantee() {
  return (
    <section className="fv-section bg-fv-cloud relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/productivity.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
      </div>

      <div className="fv-container-sm text-center relative z-10">
        <span className="fv-eyebrow justify-center inline-flex mb-7">The Guarantee</span>
        <h2 className="fv-display mb-8">
          Try it for <em>60 days.</em>
        </h2>
        <p className="font-display font-semibold text-fv-charcoal text-[30px] leading-[1.4] max-w-[760px] mx-auto">
          If you do not notice a meaningful shift, get your money back.
        </p>
      </div>
    </section>
  );
}
