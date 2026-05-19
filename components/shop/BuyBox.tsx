"use client";
import { useState } from "react";
import Image from "next/image";
import CheckoutLink from "./CheckoutLink";
import { ONE_TIME_CHECKOUT_URL, SUBSCRIPTION_CHECKOUT_URL } from "@/lib/constants";

type Plan = "subscribe" | "onetime";

const gallery = [
  { src: "/images/buybox/platinum-flow-pair.png", alt: "FlowVeda® Platinum Flow — two-bottle offer, recommended by 900+ clinicians", fit: "cover" as const },
  { src: "/images/buybox/supports-calm-focus.png", alt: "Supports Calm Focus, Steady Attention, and The Moment Before Reaction", fit: "cover" as const },
  { src: "/images/buybox/what-to-expect.png", alt: "What to expect after taking FlowVeda after 3, 14, and 30 days", fit: "cover" as const },
  { src: "/images/buybox/capsules-ashwagandha-bacopa-lionsmane.webp", alt: "Inside the capsule:Ashwagandha, Bacopa Monnieri, and Lion's Mane", fit: "contain" as const },
  { src: "/images/buybox/capsules-rhodiola-ltheanine-nalt.webp", alt: "Inside the capsule:Rhodiola Rosea, L-Theanine, and N-Acetyl-L-Tyrosine", fit: "contain" as const },
  { src: "/images/buybox/capsules-b-vitamins.webp", alt: "Inside the capsule:Vitamin B6 and Folate (Vitamin B9)", fit: "contain" as const },
  { src: "/images/buybox/supplement-facts.webp", alt: "FlowVeda® Supplement Facts label, full dose disclosure", fit: "contain" as const },
];

const bullets = [
  "Calm, focused attention without stimulants",
  "Recognize the moment before reaction",
  "8 clinically studied Ayurvedic ingredients",
  "Recommended by 900+ physicians",
];

const trustBadges = [
  "Stimulant-Free",
  "Non-GMO · Gluten-Free · Soy-Free",
  "3rd-Party Tested",
  "cGMP-Certified Facility",
  "Assembled in the USA",
  "FDA-Registered Warehouses",
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
    a: "FlowClub™ is our subscription. You get the same 60-Day Awakening shipped automatically, with a deeper discount and the option to pause, skip, or cancel anytime from your account. One-time is a single 60-day supply at the listed price. No recurring charges.",
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

  // One-time: $99 (was $165). Subscribe: $84 (Edge bi-monthly plan, ~15% off the one-time).
  const oneTimeUnit = 99;
  const subscribeUnit = 84;
  const compareUnit = 165;
  const unit = plan === "subscribe" ? subscribeUnit : oneTimeUnit;
  const total = unit * qty;
  const compareTotal = compareUnit * qty;
  const savings = compareTotal - total;
  const savingsPct = Math.round((savings / compareTotal) * 100);
  const checkoutUrl =
    plan === "subscribe" ? SUBSCRIPTION_CHECKOUT_URL : ONE_TIME_CHECKOUT_URL;

  return (
    <section className="fv-section bg-white" id="get-started">
      <div className="fv-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-[1180px] mx-auto items-start">
          {/* LEFT — Product gallery. Desktop: vertical thumb column left of
              the main image. Mobile: main image on top, thumbnails in a
              horizontal strip below (Grüns-style). */}
          <div>
            <div className="flex flex-col-reverse gap-3 md:flex-row md:gap-3.5">
            {/* Thumb strip — horizontal below on mobile, vertical column on desktop */}
            <div className="flex flex-row gap-2 overflow-x-auto md:flex-col md:w-[76px] md:flex-shrink-0 md:self-stretch md:overflow-x-visible md:overflow-y-auto md:pr-0.5">
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
            <div
              className="relative aspect-square flex-1 bg-white rounded-2xl overflow-hidden shadow-fv-card border border-fv-border group"
            >
              <Image
                key={gallery[activeImage].src}
                src={gallery[activeImage].src}
                alt={gallery[activeImage].alt}
                fill
                sizes="(max-width: 768px) 100vw, 540px"
                className={gallery[activeImage].fit === "cover" ? "object-cover animate-gallery-fade" : "object-contain animate-gallery-fade"}
                priority
              />

              {/* Prev / next arrows */}
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

              {/* Slide counter */}
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

            <div className="mt-6 flex items-center gap-2.5 px-4 py-3 bg-fv-bone rounded-xl border border-fv-border">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-fv-purple text-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <div>
                <p className="font-body font-bold text-[13px] text-fv-charcoal leading-tight">
                  Third-party tested for purity & potency
                </p>
                <p className="font-sub italic text-fv-purple text-[12px] leading-tight mt-0.5">
                  Verified by 900+ clinicians · FrontRow MD
                </p>
              </div>
            </div>
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

            <p className="font-body text-[17px] md:text-[18px] text-fv-charcoal-soft leading-[1.55] mb-5">
              The FlowVeda® nootropic is formulated to develop calm, focused attention naturally over time, so you can find your zone every day.
            </p>

            <ul className="space-y-2 mb-7">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 font-body text-[15px] md:text-[16px] text-fv-charcoal">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-fv-purple text-white flex items-center justify-center text-[11px] font-bold">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Combined buy card — plan selection + quantity + total + CTA
                in one box so there's no scroll between choosing and buying
                (Grüns-style). */}
            <div className="rounded-2xl border border-fv-border bg-white shadow-fv-card p-4 md:p-5">
              <p className="font-body font-bold text-[12px] tracking-[0.10em] uppercase text-fv-charcoal mb-3">
                Choose your plan
              </p>
              <div className="grid grid-cols-1 gap-2.5 mb-4">
                <PlanCard
                  selected={plan === "subscribe"}
                  onClick={() => setPlan("subscribe")}
                  badge="Save 15% more · Most Popular"
                  title="FlowClub™ Subscribe & Save"
                  meta="Ships every 60 days · Pause or cancel anytime"
                  price={`$${subscribeUnit}`}
                  strike={`$${compareUnit}`}
                />
                <PlanCard
                  selected={plan === "onetime"}
                  onClick={() => setPlan("onetime")}
                  title="One-Time Purchase"
                  meta="Single 60-day supply · No subscription"
                  price={`$${oneTimeUnit}`}
                  strike={`$${compareUnit}`}
                />
              </div>

              {/* Compact quantity row */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="font-body font-bold text-[12px] tracking-[0.10em] uppercase text-fv-charcoal">
                  Quantity
                </span>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center border border-fv-border rounded-full bg-white shadow-fv-card">
                    <button
                      type="button"
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      aria-label="Decrease quantity"
                      className="w-10 h-10 flex items-center justify-center font-display font-extrabold text-[18px] text-fv-charcoal hover:text-fv-purple disabled:opacity-30 cursor-pointer"
                      disabled={qty <= 1}
                    >
                      −
                    </button>
                    <span aria-live="polite" className="w-8 text-center font-display font-extrabold text-[17px] text-fv-charcoal">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty(Math.min(6, qty + 1))}
                      aria-label="Increase quantity"
                      className="w-10 h-10 flex items-center justify-center font-display font-extrabold text-[18px] text-fv-charcoal hover:text-fv-purple disabled:opacity-30 cursor-pointer"
                      disabled={qty >= 6}
                    >
                      +
                    </button>
                  </div>
                  <span className="text-[12px] font-body text-fv-text-body leading-tight text-right">
                    <span className="font-bold text-fv-charcoal">{qty * 2}</span> bottles · {qty * 60}-day supply
                  </span>
                </div>
              </div>

              <div className="h-px bg-fv-border mb-4" />

              {/* Total */}
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <p className="font-body text-[12px] tracking-[0.10em] uppercase font-bold text-fv-text-muted mb-1">
                    Your total
                  </p>
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-display font-extrabold text-fv-charcoal text-[40px] leading-none tracking-[-0.025em]">
                      ${total}
                    </span>
                    <span className="font-body line-through text-[17px] text-fv-text-muted">
                      ${compareTotal}
                    </span>
                  </div>
                </div>
                <span className="font-body font-bold text-[11px] tracking-[0.10em] uppercase text-white bg-fv-pink rounded-full px-3 py-1.5">
                  Save ${savings} · {savingsPct}% Off
                </span>
              </div>

              <CheckoutLink checkoutUrl={checkoutUrl} className="block w-full text-center bg-fv-grad-purple text-white font-body font-bold text-[14px] tracking-[0.10em] uppercase rounded-[10px] px-6 py-[18px] shadow-fv-cta hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(102,71,156,0.55)] transition-all duration-200 mb-2.5">
                Start Now
              </CheckoutLink>

              <p className="text-center font-body text-[12px] tracking-[0.08em] uppercase text-fv-text-muted">
                Free US shipping · 60-day money-back · Cancel anytime
              </p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {trustBadges.map((b, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-2 bg-fv-purple-light/40 rounded-lg">
                  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-fv-purple text-white flex items-center justify-center text-[9px] font-bold">
                    ✓
                  </span>
                  <span className="font-body font-semibold text-[11px] text-fv-charcoal leading-tight">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ — bundled inside the same section, below the buy box */}
        <div className="max-w-[1180px] mx-auto mt-20">
          <div className="text-center mb-10">
            <h3 className="font-display font-extrabold text-fv-purple tracking-[-0.02em] leading-[1.05] mb-3"
                style={{ fontSize: "clamp(28px, 3.6vw, 38px)" }}>
              Questions, answered honestly.
            </h3>
            <p className="font-body text-[16px] text-fv-charcoal-soft leading-[1.55] max-w-[560px] mx-auto">
              Couldn't find what you need? Email <a href="mailto:hello@flowveda.com" className="text-fv-purple font-semibold hover:underline">hello@flowveda.com</a>. A real person replies within one business day.
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

function PlanCard({
  selected,
  onClick,
  badge,
  title,
  meta,
  price,
  strike,
}: {
  selected: boolean;
  onClick: () => void;
  badge?: string;
  title: string;
  meta: string;
  price: string;
  strike?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`relative text-left rounded-xl px-4 md:px-5 py-4 transition-all cursor-pointer ${
        selected
          ? "border-2 border-fv-purple bg-fv-purple-light/40 shadow-[0_4px_18px_rgba(102,71,156,0.18)]"
          : "border border-fv-border bg-white hover:border-fv-purple/50"
      }`}
    >
      {badge && (
        <span className="absolute -top-2.5 left-4 bg-fv-pink text-white font-body font-bold text-[10px] tracking-[0.10em] uppercase rounded-full px-2.5 py-1 shadow-md">
          {badge}
        </span>
      )}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span
            className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
              selected ? "border-fv-purple bg-fv-purple" : "border-fv-border bg-white"
            }`}
            aria-hidden="true"
          >
            {selected && (
              <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </span>
          <div className="min-w-0">
            <p className="font-display font-extrabold text-[15px] md:text-[16px] text-fv-charcoal leading-tight tracking-[-0.005em]">
              {title}
            </p>
            <p className="font-sub italic text-fv-purple text-[12px] md:text-[13px] mt-0.5 leading-tight">
              {meta}
            </p>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <span className="font-display font-extrabold text-[22px] md:text-[24px] text-fv-charcoal tracking-[-0.02em] leading-none">
            {price}
          </span>
          {strike && (
            <span className="block font-body line-through text-[12px] text-fv-text-muted mt-0.5">
              {strike}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
