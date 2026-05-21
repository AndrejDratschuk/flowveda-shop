"use client";
import { useState } from "react";
import Image from "next/image";
import CheckoutLink from "./CheckoutLink";
import { ONE_TIME_CHECKOUT_URL, SUBSCRIPTION_CHECKOUT_URL, CLINICIAN_COUNT } from "@/lib/constants";

type Plan = "subscribe" | "onetime";
type Tab = "how" | "ingredients" | "program";

const gallery = [
  { src: "/images/buybox/platinum-flow-pair-49.png", alt: "FlowVeda® Platinum Flow. Two-bottle offer, recommended by 900+ clinicians.", fit: "cover" as const },
  { src: "/images/buybox/supports-calm-focus.png", alt: "Supports Calm Focus, Steady Attention, and The Moment Before Reaction", fit: "cover" as const },
  { src: "/images/buybox/what-to-expect.png", alt: "What to expect after taking FlowVeda after 3, 14, and 30 days", fit: "cover" as const },
  { src: "/images/buybox/capsules-ashwagandha-bacopa-lionsmane.webp", alt: "Inside the capsule:Ashwagandha, Bacopa Monnieri, and Lion's Mane", fit: "contain" as const },
  { src: "/images/buybox/capsules-rhodiola-ltheanine-nalt.webp", alt: "Inside the capsule:Rhodiola Rosea, L-Theanine, and N-Acetyl-L-Tyrosine", fit: "contain" as const },
  { src: "/images/buybox/capsules-b-vitamins.webp", alt: "Inside the capsule:Vitamin B6 and Folate (Vitamin B9)", fit: "contain" as const },
  { src: "/images/buybox/supplement-facts.webp", alt: "FlowVeda® Supplement Facts label, full dose disclosure", fit: "contain" as const },
];

const microBadges = [
  "8 Ingredients",
  "Zero Caffeine",
  `${CLINICIAN_COUNT}+ Clinicians' Choice`,
];

const trustBadges = [
  "Stimulant-Free",
  "Non-GMO · Gluten-Free · Soy-Free",
  "3rd-Party Tested",
  "cGMP-Certified Facility",
  "Assembled in the USA",
  "FDA-Registered Warehouses",
];

const subscribeBullets: { tag?: "FREE" | "EXCLUSIVE"; text: string }[] = [
  { tag: "FREE", text: "60-Day Money-Back Guarantee" },
  { tag: "FREE", text: "Free US Shipping on every shipment" },
  {              text: "Skip, pause, or cancel anytime" },
];

const onetimeBullets = [
  "Single 60-day supply · No subscription",
  "60-Day Money-Back Guarantee",
  "Free US Shipping",
];

const howSteps = [
  { n: 1, title: "Take 2 capsules", body: "Each morning, with or without food." },
  { n: 2, title: "With 8oz water", body: "Plain water aids absorption. No caffeine needed." },
  { n: 3, title: "Daily for 60 days", body: "The mechanism compounds. By day 30, it's foundational." },
];

const programMilestones = [
  { day: "Day 3",  title: "First Pause",         body: "Most users notice the first slowed reaction inside three days." },
  { day: "Day 14", title: "Calmer Baseline",     body: "Adaptogen and amino-acid axis begins to compound." },
  { day: "Day 30", title: "Foundational Shift",  body: "Sustained focus past dinner. Sleep onset noticeably easier." },
  { day: "Day 60", title: "The Awakening",       body: "Calm, focused attention is now your baseline. Risk-free until this day." },
];

const faqs = [
  {
    q: "When will I notice the shift?",
    a: "Most people begin to feel a difference within the first 2 to 3 weeks. The mechanism compounds. By day 30 the calmer baseline is more stable, and by day 60 it's foundational. That's why we built the protocol around 60 days, and back it with a 60-day money-back guarantee.",
  },
  {
    q: "Is FlowVeda® a stimulant?",
    a: "No. FlowVeda is caffeine-free. The formula supports calm focus through adaptogens (KSM-66® Ashwagandha, Rhodiola), amino acids (L-Theanine, NALT), and B-vitamin cofactors, not by spiking your nervous system.",
  },
  {
    q: "How is FlowClub™ different from a one-time purchase?",
    a: "FlowClub™ is our subscription. You get the same 60-Day Awakening shipped automatically every 60 days, at a deeper discount, with the option to pause, skip, or cancel anytime from your account. One-time is a single 60-day supply at the listed price. No recurring charges.",
  },
  {
    q: "Can I take it with coffee or other supplements?",
    a: "Yes for coffee. Many customers report better focus with less caffeine. For other supplements or prescriptions, always check with your physician. Every ingredient and dose is on the label so you can share it.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "Try it for the full 60 days. If you don't notice a meaningful shift in how you respond to your day, email us and we'll refund you. No return, no questions.",
  },
  {
    q: "Where do you ship?",
    a: "Free shipping across the United States on every 60-Day Awakening. Orders placed before 2pm ET ship the next business day.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-5 h-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function BuyBox() {
  const [plan, setPlan] = useState<Plan>("subscribe");
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<Tab>("how");

  // One-time: $99 (was $165). Subscribe: $84 per 60-day shipment, displayed as $42/mo.
  const oneTimeUnit = 99;
  const subscribeUnit = 84;
  const subscribeMonthly = 42;
  const compareUnit = 165;
  const compareMonthly = Math.round(compareUnit / 2);
  const unit = plan === "subscribe" ? subscribeUnit : oneTimeUnit;
  const total = unit * qty;
  const compareTotal = compareUnit * qty;
  const savings = compareTotal - total;
  const savingsPct = Math.round((savings / compareTotal) * 100);

  // YOU SAVE callouts (IM8 style — per shipment + per year)
  const subSavingsPerShipment = compareUnit - subscribeUnit; // $81
  const subSavingsPerYear = subSavingsPerShipment * 6;       // $486 (6 shipments / yr)
  // Per-capsule price (120 capsules per 60-day supply)
  const subPerCapsule = (subscribeUnit / 120).toFixed(2);
  const onePerCapsule = (oneTimeUnit / 120).toFixed(2);

  const checkoutUrl =
    plan === "subscribe" ? SUBSCRIPTION_CHECKOUT_URL : ONE_TIME_CHECKOUT_URL;

  return (
    <section className="fv-section bg-white" id="get-started">
      <div className="fv-container">
        {/* Section eyebrow + headline (IM8 "RUN THE 90-DAY PROFESSIONAL CASE STUDY" pattern) */}
        <div className="max-w-[820px] mx-auto text-center mb-12 md:mb-16">
          <span className="font-body font-extrabold text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-fv-purple mb-4 inline-block">
            The 60-Day Awakening
          </span>
          <h2 className="font-display font-extrabold text-fv-midnight tracking-[-0.02em] leading-[1.05] mb-4"
              style={{ fontSize: "clamp(30px, 4.2vw, 46px)" }}>
            Try the full protocol. Risk-free for 60 days.
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-fv-charcoal-soft leading-[1.55] max-w-[640px] mx-auto">
            Eight clinically studied Ayurvedic ingredients in one daily capsule. Built around 60 days because that&apos;s how long the mechanism takes to compound, and that&apos;s exactly how long you have to decide it&apos;s working.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-[1180px] mx-auto items-start">
          {/* LEFT — Product gallery */}
          <div className="md:sticky md:top-24">
            {/* Gallery */}
            <div className="flex flex-col-reverse gap-3 md:flex-row md:gap-3.5 md:items-start">
              {/* Thumb strip */}
              <div className="flex flex-row gap-2 overflow-x-auto md:flex-col md:w-[76px] md:flex-shrink-0 md:max-h-[480px] lg:max-h-[540px] md:overflow-x-visible md:overflow-y-auto md:pr-0.5">
                {gallery.map((g, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`Show ${g.alt}`}
                    aria-pressed={activeImage === i}
                    className={`relative aspect-square w-[60px] md:w-auto rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${
                      activeImage === i
                        ? "border-fv-purple shadow-fv-card"
                        : "border-fv-border hover:border-fv-purple/50"
                    }`}
                  >
                    <Image
                      src={g.src}
                      alt=""
                      fill
                      sizes="76px"
                      className={g.fit === "contain" ? "object-contain p-1 bg-white" : "object-cover"}
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="relative aspect-square flex-1 md:self-start bg-white rounded-2xl overflow-hidden shadow-fv-card border border-fv-border group">
                <Image
                  key={gallery[activeImage].src}
                  src={gallery[activeImage].src}
                  alt={gallery[activeImage].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className={gallery[activeImage].fit === "cover" ? "object-cover animate-gallery-fade" : "object-contain animate-gallery-fade"}
                  priority
                />
                <button
                  type="button"
                  onClick={() => setActiveImage((p) => (p - 1 + gallery.length) % gallery.length)}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/85 backdrop-blur-sm border border-fv-border text-fv-charcoal flex items-center justify-center shadow-sm transition-all opacity-0 group-hover:opacity-100 hover:bg-white hover:border-fv-purple hover:text-fv-purple cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImage((p) => (p + 1) % gallery.length)}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/85 backdrop-blur-sm border border-fv-border text-fv-charcoal flex items-center justify-center shadow-sm transition-all opacity-0 group-hover:opacity-100 hover:bg-white hover:border-fv-purple hover:text-fv-purple cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
                <div className="absolute bottom-4 right-4 z-10 bg-white/85 backdrop-blur-sm rounded-full px-3 py-1 border border-fv-border shadow-sm">
                  <span className="font-body font-bold text-[11px] tracking-[0.06em] text-fv-charcoal tabular-nums">
                    {activeImage + 1} / {gallery.length}
                  </span>
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes galleryFade {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              :global(.animate-gallery-fade) {
                animation: galleryFade 0.35s ease-out forwards;
              }
            `}</style>

          </div>

          {/* RIGHT — Buy box */}
          <div>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span aria-hidden="true" className="text-fv-pink text-[16px] tracking-[0.05em]">★★★★★</span>
              <a href="#reviews" className="font-body font-bold text-[13px] text-fv-charcoal underline decoration-fv-border underline-offset-4 hover:decoration-fv-purple">
                4.8 / 5.0 · Verified reviews
              </a>
            </div>

            <h2 className="font-display font-extrabold text-fv-purple tracking-[-0.02em] leading-[1.05] mb-3"
                style={{ fontSize: "clamp(30px, 4vw, 42px)" }}>
              FlowVeda® 60-Day Awakening
            </h2>

            <p className="font-sub italic text-fv-charcoal-soft text-[16px] md:text-[17px] mb-4 leading-snug">
              Daily Ayurvedic Nootropic
            </p>

            <p className="font-body text-[16px] md:text-[17px] text-fv-charcoal-soft leading-[1.55] mb-5">
              Engineered to support calm, focused attention over 60 days. No caffeine, no crashes, and no cognitive cost from a stimulant stack.
            </p>

            {/* Micro-badges (IM8 row of pill chips under product name) */}
            <div className="flex flex-wrap gap-2 mb-7">
              {microBadges.map((b) => (
                <span key={b} className="inline-flex items-center rounded-full bg-fv-purple-light/70 text-fv-purple-deep font-body font-bold text-[11px] md:text-[12px] tracking-[0.04em] px-3 py-1.5">
                  {b}
                </span>
              ))}
            </div>

            {/* Plan-selection label */}
            <p className="font-body font-extrabold text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-fv-charcoal mb-3">
              Subscribe & Save:
            </p>

            {/* Tier cards (IM8-style) */}
            <div className="space-y-5 mb-5">
              <TierCard
                selected={plan === "subscribe"}
                onClick={() => setPlan("subscribe")}
                ribbon="MOST POPULAR"
                saveCallout={`YOU SAVE $${subSavingsPerShipment}/SHIPMENT · $${subSavingsPerYear}/YR`}
                title="FlowClub™ 60-Day Supply"
                savingsPill="Save 49%"
                price={`$${subscribeMonthly}`}
                priceSuffix="/mo"
                strike={`$${compareMonthly}/mo`}
                billing={`Billed $${subscribeUnit} every 60 days · $${subPerCapsule} / capsule`}
                bulletHeader="EVERYTHING IN ONE-TIME, PLUS"
                bullets={subscribeBullets}
              />

              <TierCard
                selected={plan === "onetime"}
                onClick={() => setPlan("onetime")}
                title="One-Time 60-Day Supply"
                savingsPill="Save 40%"
                price={`$${oneTimeUnit}`}
                priceSuffix=""
                strike={`$${compareUnit}`}
                billing={`Billed once · $${onePerCapsule} / capsule`}
                bullets={onetimeBullets.map((b) => ({ text: b }))}
                compact
              />
            </div>

            {/* Quantity row — subtle, single line, doesn't compete with CTA */}
            <div className="flex items-center justify-between gap-3 mb-5 px-1">
              <span className="font-body text-[11px] tracking-[0.14em] uppercase font-extrabold text-fv-text-muted">
                Quantity
              </span>
              <div className="flex items-center gap-3">
                <span className="font-body text-[12px] text-fv-text-muted leading-tight">
                  <span className="font-bold text-fv-charcoal-soft">{qty * 2}</span> bottles · {qty * 60}-day supply
                </span>
                <div className="inline-flex items-center border border-fv-border rounded-full bg-white">
                  <button
                    type="button"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    aria-label="Decrease quantity"
                    className="w-8 h-8 flex items-center justify-center font-display font-extrabold text-[15px] text-fv-charcoal hover:text-fv-purple disabled:opacity-30 cursor-pointer"
                    disabled={qty <= 1}
                  >−</button>
                  <span aria-live="polite" className="w-7 text-center font-display font-extrabold text-[15px] text-fv-charcoal">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty(Math.min(6, qty + 1))}
                    aria-label="Increase quantity"
                    className="w-8 h-8 flex items-center justify-center font-display font-extrabold text-[15px] text-fv-charcoal hover:text-fv-purple disabled:opacity-30 cursor-pointer"
                    disabled={qty >= 6}
                  >+</button>
                </div>
              </div>
            </div>

            {/* Compact total line — no longer competing with the CTA */}
            <div className="flex items-center justify-between mb-5 px-1">
              <span className="font-body text-[11px] tracking-[0.14em] uppercase font-extrabold text-fv-text-muted">
                Total
              </span>
              <div className="flex items-baseline gap-2.5">
                <span className="font-display font-extrabold text-fv-charcoal text-[24px] md:text-[26px] leading-none tracking-[-0.025em]">
                  ${total}
                </span>
                <span className="font-body line-through text-[14px] text-fv-text-muted">
                  ${compareTotal}
                </span>
                <span className="font-body font-extrabold text-[10px] tracking-[0.08em] uppercase text-fv-pink bg-fv-pink/10 rounded-full px-2 py-0.5">
                  Save ${savings} · {savingsPct}%
                </span>
              </div>
            </div>

            {/* Primary CTA — pill-shaped, prominent without overdoing it */}
            <CheckoutLink
              checkoutUrl={checkoutUrl}
              className="group block w-full text-center bg-fv-grad-purple text-white font-display font-extrabold text-[14px] md:text-[15px] lg:text-[16px] tracking-[0.06em] uppercase rounded-full px-6 py-[18px] md:py-[20px] shadow-[0_12px_30px_-10px_rgba(102,71,156,0.55)] hover:shadow-[0_18px_38px_-10px_rgba(102,71,156,0.70)] hover:-translate-y-0.5 transition-all duration-200 mb-3.5 relative overflow-hidden"
            >
              <span className="relative z-10 inline-flex items-center justify-center gap-2.5 leading-none">
                {plan === "subscribe"
                  ? `Start My 60-Day Awakening · $${subscribeMonthly}/mo`
                  : `Get My 60-Day Awakening · $${oneTimeUnit}`}
                <span aria-hidden="true" className="inline-block group-hover:translate-x-1 transition-transform duration-200 text-[1.1em] font-bold">
                  →
                </span>
              </span>
              {/* Subtle inner highlight */}
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
            </CheckoutLink>

            <p className="text-center font-body text-[11px] tracking-[0.08em] uppercase text-fv-text-muted mb-6">
              Free US shipping · 60-day money-back · Cancel anytime
            </p>

            {/* IM8-style trust strip stack */}
            <div className="rounded-2xl bg-fv-bone p-5 md:p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">🏆</span>
                <div>
                  <p className="font-display font-extrabold text-fv-midnight text-[13px] md:text-[14px] leading-tight">
                    Clinicians&apos; Choice · Verified by FrontRow MD
                  </p>
                  <p className="font-body text-fv-charcoal-soft text-[12px] md:text-[13px] mt-0.5">
                    {CLINICIAN_COUNT}+ physicians share FlowVeda with their patients.
                  </p>
                </div>
              </div>
              <div className="h-px bg-fv-border" />
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="font-display font-extrabold text-fv-purple text-[18px] md:text-[20px] leading-none">FREE</div>
                  <div className="font-body text-[10px] tracking-[0.06em] uppercase text-fv-text-muted mt-1.5">Shipping</div>
                </div>
                <div className="border-l border-r border-fv-border">
                  <div className="font-display font-extrabold text-fv-purple text-[18px] md:text-[20px] leading-none">60-Day</div>
                  <div className="font-body text-[10px] tracking-[0.06em] uppercase text-fv-text-muted mt-1.5">Guarantee</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-fv-purple text-[18px] md:text-[20px] leading-none">Cancel</div>
                  <div className="font-body text-[10px] tracking-[0.06em] uppercase text-fv-text-muted mt-1.5">Anytime</div>
                </div>
              </div>
              <div className="h-px bg-fv-border" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {trustBadges.map((b, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-fv-purple text-white flex items-center justify-center text-[9px] font-bold">
                      ✓
                    </span>
                    <span className="font-body font-semibold text-[11px] text-fv-charcoal-soft leading-tight">
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ProductTabs — IM8-style bottom tabs (How to Take / Ingredients / Program) */}
        <div className="max-w-[1180px] mx-auto mt-16">
          <div className="flex flex-wrap gap-2 mb-6 border-b border-fv-border">
            {(["how", "ingredients", "program"] as Tab[]).map((t, i) => {
              const label =
                t === "how"         ? "How to Take" :
                t === "ingredients" ? "Ingredients" :
                                      "The 60-Day Program";
              const active = activeTab === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setActiveTab(t)}
                  className={`font-body font-extrabold text-[12px] md:text-[13px] tracking-[0.10em] uppercase px-5 py-3.5 -mb-px border-b-2 transition-colors cursor-pointer ${
                    active
                      ? "text-fv-purple border-fv-purple"
                      : "text-fv-text-muted border-transparent hover:text-fv-charcoal"
                  }`}
                >
                  <span className="font-body font-bold mr-2 opacity-60 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          {activeTab === "how" && (
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {howSteps.map((s) => (
                <div key={s.n} className="text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-fv-purple text-white font-display font-extrabold text-[20px] mb-4">
                    {s.n}
                  </div>
                  <h4 className="font-display font-extrabold text-fv-charcoal text-[18px] md:text-[20px] tracking-[-0.01em] mb-2">
                    {s.title}
                  </h4>
                  <p className="font-body text-fv-charcoal-soft text-[14px] md:text-[15px] leading-[1.55]">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "ingredients" && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display font-extrabold text-fv-midnight text-[24px] md:text-[28px] tracking-[-0.015em] leading-tight mb-4">
                  Eight clinically studied ingredients. One capsule.
                </h3>
                <p className="font-body text-fv-charcoal-soft text-[15px] md:text-[16px] leading-[1.6] mb-5">
                  Adaptogens for stress (KSM-66® Ashwagandha, Rhodiola), amino acids for calm focus (L-Theanine, NALT), Ayurvedic nootropics for memory and neuroplasticity (Bacopa, Lion&apos;s Mane), and methylated B-vitamin cofactors (B6, Folate).
                </p>
                <a href="#ingredients" className="inline-flex items-center gap-2 font-body font-extrabold text-[12px] tracking-[0.10em] uppercase text-fv-purple underline underline-offset-4 decoration-fv-border hover:decoration-fv-purple">
                  See every dose on the label →
                </a>
              </div>
              <ul className="grid grid-cols-2 gap-2.5">
                {[
                  { name: "Ashwagandha",       sub: "KSM-66®, 600mg" },
                  { name: "Rhodiola Rosea",    sub: "300mg" },
                  { name: "Lion's Mane",       sub: "500mg, 8:1" },
                  { name: "Bacopa Monnieri",   sub: "300mg, 50%" },
                  { name: "L-Theanine",        sub: "200mg" },
                  { name: "N-Acetyl Tyrosine", sub: "NALT, 300mg" },
                  { name: "Vitamin B6",        sub: "P-5-P, 10mg" },
                  { name: "Folate",            sub: "5-MTHF, 400mcg" },
                ].map((ing) => (
                  <li key={ing.name} className="rounded-xl bg-white border border-fv-border px-3 py-2.5 flex items-center justify-between">
                    <span className="font-display font-bold text-fv-charcoal text-[13px] md:text-[14px]">
                      {ing.name}
                    </span>
                    <span className="font-body text-fv-purple font-bold text-[11px] md:text-[12px]">
                      {ing.sub}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "program" && (
            <div>
              <div className="mb-6 max-w-[640px]">
                <h3 className="font-display font-extrabold text-fv-midnight text-[24px] md:text-[28px] tracking-[-0.015em] leading-tight mb-3">
                  The 60-Day Awakening
                </h3>
                <p className="font-body text-fv-charcoal-soft text-[15px] md:text-[16px] leading-[1.6]">
                  Built around the time it actually takes for the mechanism to compound, not an arbitrary 30-day return window. Most people notice the first shift inside three days. The protocol unfolds from there.
                </p>
              </div>
              <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {programMilestones.map((m) => (
                  <li key={m.day} className="rounded-xl border border-fv-border bg-white p-5">
                    <div className="font-display font-extrabold text-fv-purple text-[26px] md:text-[28px] tracking-[-0.02em] leading-none mb-2">
                      {m.day}
                    </div>
                    <div className="font-display font-extrabold text-fv-charcoal text-[16px] md:text-[17px] tracking-[-0.005em] leading-tight mb-2">
                      {m.title}
                    </div>
                    <p className="font-body text-fv-charcoal-soft text-[13px] md:text-[14px] leading-[1.55]">
                      {m.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {/* FAQ */}
        <div className="max-w-[1180px] mx-auto mt-20">
          <div className="text-center mb-10">
            <h3 className="font-display font-extrabold text-fv-purple tracking-[-0.02em] leading-[1.05] mb-3"
                style={{ fontSize: "clamp(28px, 3.6vw, 38px)" }}>
              Questions, answered honestly.
            </h3>
            <p className="font-body text-[16px] text-fv-charcoal-soft leading-[1.55] max-w-[560px] mx-auto">
              Couldn&apos;t find what you need? Email <a href="mailto:hello@flowveda.com" className="text-fv-purple font-semibold hover:underline">hello@flowveda.com</a>. A real person replies within one business day.
            </p>
          </div>

          <div className="max-w-[820px] mx-auto space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-colors duration-200 ${
                    isOpen ? "border-fv-purple bg-fv-purple-light/40" : "border-fv-border bg-fv-bone hover:border-fv-purple/40"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer"
                  >
                    <span className="font-display font-bold text-[17px] md:text-[19px] tracking-[-0.005em] text-fv-charcoal leading-snug">
                      {faq.q}
                    </span>
                    <span className={`flex-shrink-0 ${isOpen ? "text-fv-purple" : "text-fv-charcoal-soft"}`}>
                      <ChevronIcon open={isOpen} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 -mt-1">
                      <p className="font-body text-[15px] md:text-[16px] text-fv-text-body leading-[1.7]">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TierCard — IM8-style rich pricing card ---------- */
function TierCard({
  selected,
  onClick,
  ribbon,
  saveCallout,
  title,
  savingsPill,
  price,
  priceSuffix,
  strike,
  billing,
  bulletHeader,
  bullets,
  compact = false,
}: {
  selected: boolean;
  onClick: () => void;
  ribbon?: string;
  saveCallout?: string;
  title: string;
  savingsPill?: string;
  price: string;
  priceSuffix?: string;
  strike?: string;
  billing?: string;
  bulletHeader?: string;
  bullets: { tag?: "FREE" | "EXCLUSIVE"; text: string }[];
  compact?: boolean;
}) {
  return (
    <div className="relative">
      {/* MOST POPULAR pill: top-RIGHT, overlapping the top edge of the card */}
      {ribbon && (
        <span
          aria-hidden="true"
          style={{ top: -9, right: 14 }}
          className="absolute z-10 inline-flex items-center bg-white text-fv-midnight font-body font-extrabold text-[9px] md:text-[10px] tracking-[0.16em] uppercase rounded-full px-3 py-1 shadow-[0_3px_10px_rgba(26,26,46,0.18)] border border-fv-border"
        >
          {ribbon}
        </span>
      )}

      <button
        type="button"
        onClick={onClick}
        aria-pressed={selected}
        className={`relative w-full text-left rounded-2xl overflow-hidden transition-all cursor-pointer ${
          selected
            ? "border-2 border-fv-purple bg-white shadow-[0_8px_24px_rgba(102,71,156,0.14)]"
            : "border border-fv-border bg-white hover:border-fv-purple/50"
        }`}
      >
        {/* Top "YOU SAVE" strip — CENTERED text */}
        {saveCallout && (
          <div className="bg-fv-grad-purple text-white font-body font-extrabold text-[10px] md:text-[11px] tracking-[0.14em] uppercase px-3 py-1.5 text-center">
            {saveCallout}
          </div>
        )}

        <div className="px-4 md:px-5 py-4">
          {/* Title row + radio + price */}
          <div className="flex items-start gap-2.5 mb-2">
            <span
              className={`flex-shrink-0 w-[18px] h-[18px] mt-0.5 rounded-full border-2 flex items-center justify-center transition-colors ${
                selected ? "border-fv-purple bg-fv-purple" : "border-fv-border bg-white"
              }`}
              aria-hidden="true"
            >
              {selected && (
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-display font-extrabold text-[14px] md:text-[16px] text-fv-charcoal leading-tight tracking-[-0.005em]">
                {title}
                {savingsPill && (
                  <span className="inline-block ml-2 font-body font-extrabold text-[10px] tracking-[0.06em] uppercase text-fv-purple align-middle">
                    ({savingsPill})
                  </span>
                )}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="font-display font-extrabold text-[20px] md:text-[22px] text-fv-charcoal tracking-[-0.02em] leading-none">
                {price}
                {priceSuffix && (
                  <span className="font-body font-semibold text-[11px] text-fv-text-muted tracking-normal ml-0.5">
                    {priceSuffix}
                  </span>
                )}
              </span>
              {strike && (
                <span className="block font-body line-through text-[11px] text-fv-text-muted mt-0.5">
                  {strike}
                </span>
              )}
            </div>
          </div>

          {/* Billing sub-line */}
          {billing && (
            <p className="font-body text-[11px] text-fv-text-muted tracking-[0.02em] pl-7">
              {billing}
            </p>
          )}

          {/* "EVERYTHING IN X, PLUS" divider — IM8 style with side rules */}
          {bulletHeader && (
            <div className="flex items-center gap-3 mt-4 mb-3">
              <div className="flex-1 h-px bg-fv-border" />
              <span className="font-body font-extrabold text-[9px] md:text-[10px] tracking-[0.14em] uppercase text-fv-text-muted whitespace-nowrap">
                {bulletHeader}
              </span>
              <div className="flex-1 h-px bg-fv-border" />
            </div>
          )}

          {/* Bullets — circle check + (optional colored pill) + text */}
          {bullets.length > 0 && (
            <ul className={`space-y-1.5 ${bulletHeader ? "" : "mt-3"}`}>
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 font-body text-[12px] md:text-[13px] text-fv-charcoal leading-snug">
                  <span className="flex-shrink-0 w-[14px] h-[14px] mt-0.5 rounded-full border border-fv-purple/30 bg-white text-fv-purple flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {b.tag && (
                    <span className={`flex-shrink-0 font-body font-extrabold text-[9px] tracking-[0.08em] uppercase rounded px-1.5 py-0.5 ${
                      b.tag === "EXCLUSIVE"
                        ? "bg-fv-midnight text-white"
                        : "bg-fv-pink text-white"
                    }`}>
                      {b.tag}
                    </span>
                  )}
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </button>
    </div>
  );
}
