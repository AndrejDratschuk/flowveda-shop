import CTAButton from "./CTAButton";

export default function Product() {
  return (
    <section className="fv-section bg-fv-cloud">
      <div className="fv-container-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden bg-white shadow-fv-card aspect-square">
            <img
              src="/images/flowveda-at-distance.webp"
              alt="FlowVeda bottle on a sunlit table with soft greenery"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <span className="fv-eyebrow mb-6">The Product</span>
            <h2 className="fv-display mb-6">
              The 60-Day <em>Awakening.</em>
            </h2>
            <p className="fv-body-lead mb-5">
              A daily protocol designed to build a baseline of calm, focused awareness.
            </p>
            <p className="fv-body-lead mb-5 font-display font-semibold text-fv-charcoal text-[20px]">
              3 capsules per day. 180 capsules total.
            </p>
            <p className="fv-body-lead mb-8">
              Most people begin to notice a shift within the first month.
            </p>
            <p className="font-sub italic text-fv-purple text-[22px] leading-[1.45] mb-10">
              Awareness compounds with consistency.
            </p>
            <CTAButton label="Try Our 60-Day Awakening" />
          </div>
        </div>
      </div>
    </section>
  );
}
