import { CLINICIAN_COUNT } from "@/lib/constants";

const trustItems = [
  {
    metric: `${CLINICIAN_COUNT}+`,
    label: "Clinicians' Choice",
    sub: "Verified by FrontRow MD",
  },
  {
    metric: "4.8 ★",
    label: "2,400+ Reviews",
    sub: "From verified customers",
  },
  {
    metric: "8",
    label: "Clinical Ingredients",
    sub: "Backed by 200+ studies",
  },
  {
    metric: "60-Day",
    label: "Money-Back",
    sub: "Notice the shift or it's free",
  },
  {
    metric: "3rd-Party",
    label: "Tested",
    sub: "Purity & potency assured",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-white border-y border-fv-border py-10 md:py-14 px-6">
      <div className="fv-container">
        <p className="text-center fv-eyebrow justify-center inline-flex w-full mb-8">
          Why people trust FlowVeda®
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 md:gap-x-6">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="text-center px-2 border-r border-fv-border last:border-r-0 md:border-r md:last:border-r-0 even:border-r-0 md:even:border-r"
            >
              <div className="font-display font-extrabold text-fv-blue tracking-[-0.02em] leading-none text-[28px] md:text-[34px]">
                {item.metric}
              </div>
              <div className="font-body font-bold text-[12px] md:text-[13px] tracking-[0.10em] uppercase text-fv-charcoal mt-2.5">
                {item.label}
              </div>
              <div className="font-sub italic text-fv-purple text-[14px] md:text-[15px] mt-1.5">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
