"use client";

import { useState } from "react";
import Image from "next/image";
import CheckoutLink from "./CheckoutLink";
import {
  ONE_TIME_CHECKOUT_URL,
  SUBSCRIPTION_CHECKOUT_URL,
} from "@/lib/constants";

type Plan = "subscription" | "onetime";

const PLANS: {
  id: Plan;
  title: string;
  subtitle: string;
  badge?: string;
  checkoutUrl: string;
}[] = [
  {
    id: "subscription",
    title: "Subscribe & Save",
    subtitle: "Delivered every 2 months · 15% off · cancel anytime",
    badge: "Best value",
    checkoutUrl: SUBSCRIPTION_CHECKOUT_URL,
  },
  {
    id: "onetime",
    title: "One-time purchase",
    subtitle: "A single 60-day supply · no recurring billing",
    checkoutUrl: ONE_TIME_CHECKOUT_URL,
  },
];

export default function Product() {
  const [plan, setPlan] = useState<Plan>("subscription");
  const selected = PLANS.find((p) => p.id === plan) ?? PLANS[0];

  return (
    <section className="fv-section bg-fv-cloud">
      <div className="fv-container-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden bg-white shadow-fv-card aspect-square">
            <Image
              src="/images/flowveda-at-distance.webp"
              alt="FlowVeda bottle on a sunlit table with soft greenery"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="fv-eyebrow mb-6">The Product</span>
            <h2 className="fv-display mb-6">
              The 60-Day <em>Awakening.</em>
            </h2>
            <p className="fv-body-lead mb-5 text-[24px] leading-[1.6]">
              A daily protocol designed to build a baseline of calm, focused awareness.
            </p>
            <p className="fv-body-lead mb-5 font-display font-semibold text-fv-charcoal text-[26px]">
              3 capsules per day. 180 capsules total.
            </p>
            <p className="fv-body-lead mb-8 text-[24px] leading-[1.6]">
              Most people begin to notice a shift within the first month.
            </p>

            <div
              role="radiogroup"
              aria-label="Choose your plan"
              className="space-y-3 mb-7"
            >
              {PLANS.map((option) => {
                const active = option.id === plan;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setPlan(option.id)}
                    className={`w-full flex items-center gap-4 text-left rounded-xl px-5 py-4 bg-white transition-all duration-200 ${
                      active
                        ? "border-2 border-fv-purple shadow-fv-card"
                        : "border border-fv-charcoal/15 hover:border-fv-purple/50"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        active ? "border-fv-purple" : "border-fv-charcoal/35"
                      }`}
                    >
                      {active && (
                        <span className="w-2.5 h-2.5 rounded-full bg-fv-purple" />
                      )}
                    </span>
                    <span className="flex-1">
                      <span className="block font-display font-semibold text-fv-charcoal text-[19px] leading-tight">
                        {option.title}
                      </span>
                      <span className="block font-body text-fv-charcoal/70 text-[14px] mt-1">
                        {option.subtitle}
                      </span>
                    </span>
                    {option.badge && (
                      <span className="flex-shrink-0 font-body font-bold text-[11px] tracking-[0.08em] uppercase text-white bg-fv-purple rounded-full px-3 py-1">
                        {option.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <CheckoutLink
              checkoutUrl={selected.checkoutUrl}
              className="inline-block bg-fv-grad-purple text-white font-body font-bold text-[14px] tracking-[0.10em] uppercase rounded-[10px] px-10 py-[18px] shadow-fv-cta hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(102,71,156,0.55)] transition-all duration-200"
            >
              {plan === "subscription"
                ? "Start My Subscription"
                : "Buy Once — 60-Day Awakening"}{" "}
              →
            </CheckoutLink>

            <p className="font-body text-[14px] text-fv-charcoal/70 mt-4">
              {plan === "subscription"
                ? "Subscription · billed every 2 months · 15% off · cancel anytime."
                : "One-time purchase · single 60-day supply · no subscription."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
