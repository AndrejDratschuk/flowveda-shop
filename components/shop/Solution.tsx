import Image from "next/image";

export default function Solution() {
  return (
    <section className="fv-section bg-white">
      <div className="fv-container-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="fv-eyebrow mb-7 inline-flex">The Solution</span>
            <h2 className="fv-display mb-8">
              FlowVeda® does not speed up the mind.
              <em className="block mt-3">It slows the moment down, giving you time to choose how you respond before you react.</em>
            </h2>

            <div className="space-y-5">
              <p className="fv-body-lead text-[24px] leading-[1.6]">
                Most nootropics optimize the conditioned mind.
              </p>
              <p className="fv-body-lead text-[24px] leading-[1.6]">
                They help you reach the same results faster.
              </p>
              <p className="fv-body-lead text-[24px] leading-[1.6]">
                FlowVeda® helps you step back from the repetition,
              </p>
              <p className="fv-body-lead text-[24px] leading-[1.6]">
                recognize the moment before reaction,
              </p>
              <p className="font-display font-semibold text-fv-charcoal text-[28px] leading-[1.45]">
                and make a better choice.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-fv-card-hover">
            <Image
              src="/images/chill.webp"
              alt="A man at peace, eyes closed, listening — present in the moment"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
