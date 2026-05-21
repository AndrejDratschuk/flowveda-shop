"use client";
import { useState } from "react";

const faqs = [
  {
    q: "When will I notice the shift?",
    a: "Most people begin to feel a difference within the first 2 to 3 weeks. The mechanism compounds. By day 30 the calmer baseline is more stable, and by day 60 it's foundational. That's why we built the protocol around 60 days, and why we back it with a 60-day money-back guarantee.",
  },
  {
    q: "Is FlowVeda® a stimulant?",
    a: "No. FlowVeda is caffeine-free. The formula supports calm focus through adaptogens (KSM-66® Ashwagandha, Rhodiola), amino acids (L-Theanine, NALT), and B-vitamin cofactors, not by spiking your nervous system. You can take it alongside coffee if you want, but it doesn't replace one stimulant with another.",
  },
  {
    q: "How is this different from other nootropics?",
    a: "Most nootropics optimize the conditioned mind. They help you reach the same automatic results faster. FlowVeda is built around the 488-millisecond window between stimulus and reaction. The goal is not more speed. The goal is more space: the awareness to choose how you respond.",
  },
  {
    q: "Can I take it with coffee or other supplements?",
    a: "Yes for coffee. Many customers report better focus with less caffeine. For other supplements or prescriptions, always check with your physician. If you'd like to share the FlowVeda formula with your doctor, every ingredient and dose is on the label.",
  },
  {
    q: "Is it safe to take long-term?",
    a: "Yes. Every ingredient in FlowVeda is clinically studied at the doses we use, third-party tested for purity, and recommended by 900+ clinicians through FrontRow MD. Awareness compounds with consistency. Most customers stay on it precisely because the baseline keeps deepening.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "Try it for the full 60 days. If you don't notice a meaningful shift in how you respond to your day, email us and we'll refund you. No return, no questions. We can guarantee this because the formula is built around how human biology works, not around hype.",
  },
  {
    q: "Where do you ship?",
    a: "We ship across the United States with free shipping on all 60-Day Awakening orders. Orders placed before 2pm ET ship the next business day. International shipping is rolling out in 2026. Join the waitlist on our homepage.",
  },
  {
    q: "Is there a subscription, or one-time?",
    a: "Both. You can purchase the 60-Day Awakening one-time at the checkout, or set up a recurring delivery every 60 days at the same discount. Cancel or pause anytime from your account. No calls, no friction.",
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

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="fv-section bg-white">
      <div className="fv-container-md">
        <div className="text-center mb-12">
          <span className="fv-eyebrow justify-center inline-flex mb-7">FAQ</span>
          <h2 className="fv-display mb-4">
            Questions, <em>answered honestly.</em>
          </h2>
          <p className="fv-body-lead text-[20px] leading-[1.55] max-w-[640px] mx-auto">
            Couldn't find what you need? Email <a href="mailto:hello@flowveda.com" className="text-fv-purple font-semibold hover:underline">hello@flowveda.com</a>. A real person will reply within one business day.
          </p>
        </div>

        <div className="max-w-[860px] mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-fv-purple bg-fv-purple-light/40"
                    : "border-fv-border bg-fv-bone hover:border-fv-purple/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer"
                >
                  <span className="font-display font-bold text-[18px] md:text-[20px] tracking-[-0.005em] text-fv-charcoal leading-snug">
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 ${isOpen ? "text-fv-purple" : "text-fv-charcoal-soft"}`}>
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 -mt-1">
                    <p className="font-body text-[16px] md:text-[17px] text-fv-text-body leading-[1.7]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
