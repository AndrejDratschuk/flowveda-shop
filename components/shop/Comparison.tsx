"use client";
import { useState } from "react";
import CTAButton from "./CTAButton";

type Cell = "yes" | "no" | "partial" | string;

interface Row {
  feature: React.ReactNode;
  values: [Cell, Cell, Cell, Cell, Cell];
}

const COLUMNS: { name: React.ReactNode; suffix?: string }[] = [
  { name: <>FlowVeda<sup className="text-[10px]">®</sup></>, suffix: "" },
  { name: <>Alpha Brain<sup className="text-[10px]">®</sup> Black Label</>, suffix: "Ω" },
  { name: <>Thesis Clarity</>, suffix: "◊" },
  { name: <>Neuriva Plus</>, suffix: "±" },
  { name: <>Prevagen</>, suffix: "†" },
];

const rows: Row[] = [
  { feature: "Daily Dose (capsules)", values: ["3", "4", "2", "1", "1"] },
  { feature: "Price Per Dose", values: ["$1.79", "$6.25", "$2.34", "$3.40", "$2.64"] },
  { feature: "Price Per Capsule", values: ["$0.60", "$1.56", "$1.17", "$3.40", "$2.64"] },
  { feature: "Formula Transparency", values: ["yes", "partial", "partial", "yes", "yes"] },
  { feature: <>Primary Focus<sup className="text-[10px] text-fv-purple ml-0.5">Φ</sup></>, values: ["Life in Flow", "Flow States", "Flow States", "Memory", "Memory"] },
  { feature: <>Premium Ingredients<sup className="text-[10px] text-fv-purple ml-0.5">*</sup></>, values: ["yes", "yes", "yes", "no", "no"] },
  { feature: "Stimulant-Free", values: ["yes", "yes", "partial", "no", "yes"] },
  { feature: "Ayurvedic % in Formula", values: ["86%", "76%", "44%", "0%", "0%"] },
  { feature: "Supporting Tools & Resources", values: ["yes", "no", "no", "no", "no"] },
];

const disclosures = [
  { mark: "Ω", title: "Alpha Brain® Black Label", body: "80 capsules per bottle (20 servings at 4 capsules per serving). Retail price $124.95 one-time purchase at onnit.com as of March 2026. Price per dose reflects published serving size; per-capsule price calculated from bottle price and capsule count." },
  { mark: "◊", title: "Thesis Clarity", body: "Pricing and formula data from takethesis.com as of March 2026. The caffeine-free Clarity option (Stimulant-Free partial) excludes caffeine and L-Theanine. Thesis uses a proprietary AlphaGrain™ Alpha-GPC blend; individual ingredient dosages within that blend are not published, which is the basis for the partial transparency rating." },
  { mark: "±", title: "Neuriva Plus", body: "Pricing from neuriva.com as of March 2026. Contains coffee fruit extract, which is a caffeine-containing ingredient; this is the basis for the Stimulant-Free \"no\" rating. No Ayurvedic or adaptogenic ingredients are listed on the product label." },
  { mark: "†", title: "Prevagen", body: "Pricing from prevagen.com as of March 2026. Primary active ingredient is apoaequorin, a protein derived from the bioluminescent jellyfish Aequorea victoria. No Ayurvedic or adaptogenic ingredients are listed on the product label." },
  { mark: "Φ", title: "Primary Focus", body: "The \"primary focus\" descriptor reflects each brand's own product positioning. Terms like \"intelligence\" and \"memory\" are relative and not measured by any standardized metric across products." },
  { mark: "*", title: "Premium Ingredients", body: "In this table, \"premium\" refers to clean, transparent, clinically-studied Ayurvedic and adaptogenic ingredients. Ratings are based on each product's ingredient list." },
];

function CellMark({ value }: { value: Cell }) {
  if (value === "yes") {
    // Blue ✓ at 18px / weight 700, just colored character — matches .check-yes
    return <span style={{ color: "#2D6090" }} className="font-bold text-[18px] leading-none" aria-label="Yes">✓</span>;
  }
  if (value === "partial") {
    // Pink ○ at 18px — matches .check-partial
    return <span style={{ color: "#C97A9C" }} className="text-[18px] leading-none" aria-label="Partial">○</span>;
  }
  if (value === "no") {
    // Muted ✕ at 18px, opacity 0.5 — matches .check-no
    return <span className="text-fv-text-muted text-[18px] leading-none opacity-50" aria-label="No">✕</span>;
  }
  // numeric / text value
  return <span className="text-[15px]">{value}</span>;
}

export default function Comparison() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-20 md:py-24 px-6">
      <div className="max-w-[1080px] mx-auto">
        {/* Intro */}
        <div className="text-center max-w-[760px] mx-auto mb-12">
          <p className="font-body font-bold text-[14px] tracking-[0.22em] uppercase text-fv-purple mb-3.5">
            Compare to Leading Competitors
          </p>
          <h2 className="font-display font-extrabold text-fv-midnight tracking-[-0.02em] leading-[1.12] m-0"
              style={{ fontSize: "clamp(28px, 4.2vw, 42px)" }}>
            How FlowVeda® Compares
          </h2>
          <p className="font-body font-normal text-[16px] text-fv-text-muted leading-[1.65] mt-4">
            Pricing and formula data current as of March 2026. All data sourced from each competitor's published product pages.
          </p>
        </div>

        {/* Table wrapper */}
        <div className="overflow-x-auto mb-8 rounded-[14px] border border-fv-border bg-white">
          <table className="w-full min-w-[720px] border-collapse text-[15px]">
            <thead>
              <tr>
                <th className="text-left font-body font-bold text-[15px] text-fv-midnight px-3.5 py-4 border-b border-[#F0EEF5]"
                    style={{ background: "#F8F7FB", letterSpacing: "0.02em" }}>
                  Criteria
                </th>
                {COLUMNS.map((col, i) => (
                  <th
                    key={i}
                    className={`text-center font-body font-bold text-[14px] md:text-[15px] px-3.5 py-4 border-b border-[#F0EEF5] leading-tight ${
                      i === 0 ? "text-[#5B4A8A]" : "text-fv-midnight"
                    }`}
                    style={{
                      background: i === 0 ? "#F3F0FF" : "#F8F7FB",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {col.name}
                    {col.suffix && <sup className="text-[11px] text-fv-purple font-semibold ml-0.5">{col.suffix}</sup>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td className="text-left font-body font-semibold text-[14px] md:text-[15px] text-fv-midnight px-3.5 py-4 border-b border-[#F0EEF5] leading-snug">
                    {row.feature}
                  </td>
                  {row.values.map((v, j) => (
                    <td
                      key={j}
                      className={`text-center px-3.5 py-4 border-b border-[#F0EEF5] ${
                        j === 0 ? "text-[#5B4A8A] font-semibold" : "text-fv-text-body"
                      }`}
                      style={{
                        background: j === 0 ? "#F3F0FF" : "transparent",
                      }}
                    >
                      <CellMark value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Disclosure accordion */}
        <div className="max-w-[860px] mx-auto mb-5 rounded-xl border-[1.5px] border-fv-purple overflow-hidden bg-white shadow-fv-card">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-body font-bold text-[16px] text-fv-midnight transition-colors cursor-pointer ${
              open ? "bg-fv-purple-light" : "bg-white hover:bg-fv-purple-light"
            }`}
            style={{ letterSpacing: "0.02em" }}
          >
            <span>Chart References & Disclosures</span>
            <span className="relative w-[22px] h-[22px] flex-shrink-0" aria-hidden="true">
              <span className="absolute top-1/2 left-0 right-0 h-[2.5px] -translate-y-1/2 rounded-[1px] bg-fv-purple" />
              <span
                className={`absolute top-0 bottom-0 left-1/2 w-[2.5px] rounded-[1px] bg-fv-purple transition-all duration-200 ${
                  open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
                style={{ transform: open ? "translateX(-50%) rotate(90deg)" : "translateX(-50%)" }}
              />
            </span>
          </button>
          {open && (
            <div className="px-6 pb-6">
              <div className="my-5 px-5 py-3.5 rounded-lg" style={{ background: "#F8F7FB" }}>
                <p className="font-body text-[15px] text-fv-text-body leading-[1.8] text-center m-0">
                  <strong className="text-fv-midnight font-semibold">Legend:</strong>
                  <span className="ml-1.5"><span style={{ color: "#2D6090" }} className="font-bold">✓</span> Fully meets criterion.</span>
                  <span className="ml-3.5"><span style={{ color: "#C97A9C" }}>○</span> Partially meets criterion.</span>
                  <span className="ml-3.5"><span className="text-fv-text-muted opacity-50">✕</span> Does not meet criterion.</span>
                </p>
              </div>
              {disclosures.map((d) => (
                <p key={d.mark} className="font-body text-[15px] text-fv-text-body leading-[1.7] mb-3.5 last:mb-0">
                  <sup className="text-[14px] text-fv-purple font-semibold mr-0.5">{d.mark}</sup>
                  <strong className="font-semibold text-fv-midnight">{d.title}:</strong> {d.body}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* FDA disclaimer */}
        <p className="max-w-[860px] mx-auto mb-8 px-6 py-4 font-body italic text-[14px] text-fv-text-muted leading-[1.65] text-center rounded-[10px]"
           style={{ background: "#F8F7FB" }}>
          These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Competitor trademarks and product names are the property of their respective owners. Comparison is for informational purposes only.
        </p>

        {/* CTA */}
        <div className="text-center mt-6">
          <CTAButton label="Try Our 60-Day Awakening Today" />
          <p className="font-body font-medium text-[14px] text-fv-text-muted mt-4 m-0">
            Your satisfaction matters. 60-day money-back guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}
