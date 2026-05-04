import Image from "next/image";

export default function Problem() {
  return (
    <section className="fv-section bg-fv-cloud relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stress-reaction.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
      </div>

      <div className="fv-container-sm text-center relative z-10">
        <span className="fv-eyebrow justify-center inline-flex mb-7">The Problem</span>
        <h2 className="fv-display mb-8">
          The modern world is engineered to
          <em className="block mt-2">capture your reaction.</em>
        </h2>
        <p className="fv-body-lead max-w-[720px] mx-auto text-[24px] leading-[1.6]">
          Notifications. Pressure. Noise.
        </p>
        <p className="fv-body-lead max-w-[720px] mx-auto mt-4 text-[24px] leading-[1.6]">
          Over time, response becomes automatic.
        </p>
        <p className="max-w-[720px] mx-auto mt-4 font-display font-semibold text-[28px] text-fv-charcoal leading-[1.45]">
          You stop choosing. You start reacting.
        </p>
      </div>
    </section>
  );
}
