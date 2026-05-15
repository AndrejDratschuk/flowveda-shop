"use client";
import { useEffect } from "react";

// Judge.me config — matches what flowveda.com uses on the live product page.
const JDGM_SHOP_DOMAIN = "flowvedacom.myshopify.com";
const JDGM_PLATFORM = "shopify";
const JDGM_PUBLIC_TOKEN = "i2tQZYPbQZHWETrNaxZxDYE60VU";
// Shopify product ID for FlowVeda® 60-Day Awakening (from the Webflow Products CMS).
const PRODUCT_ID = "7932127477900";

export default function CustomerReviews() {
  useEffect(() => {
    // Seed Judge.me config BEFORE the preloader runs.
    const w = window as unknown as {
      jdgm?: { SHOP_DOMAIN?: string; PLATFORM?: string; PUBLIC_TOKEN?: string };
    };
    w.jdgm = w.jdgm || {};
    w.jdgm.SHOP_DOMAIN = JDGM_SHOP_DOMAIN;
    w.jdgm.PLATFORM = JDGM_PLATFORM;
    w.jdgm.PUBLIC_TOKEN = JDGM_PUBLIC_TOKEN;

    if (!document.querySelector('script[data-jdgm-preloader]')) {
      const s = document.createElement("script");
      s.src = "https://cdn.judge.me/widget_preloader.js";
      s.async = true;
      s.setAttribute("data-jdgm-preloader", "true");
      document.body.appendChild(s);
    }

    if (!document.querySelector('link[data-jdgm-css]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.judge.me/shopify_v2.css";
      link.setAttribute("data-jdgm-css", "true");
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section id="reviews" className="fv-section bg-fv-bone">
      <div className="fv-container">
        <div className="text-center mb-12">
          <span className="fv-eyebrow justify-center inline-flex mb-7">From The Community</span>
          <h2 className="fv-display mb-4">
            Real people, <em>owning the moment before.</em>
          </h2>
          <div className="inline-flex items-center gap-3 mt-4">
            <span aria-hidden="true" className="text-fv-pink text-[20px] tracking-[0.05em]">★★★★★</span>
            <span className="font-body font-bold text-[16px] tracking-[0.08em] uppercase text-fv-charcoal">
              Verified reviews · powered by Judge.me
            </span>
          </div>
        </div>

        {/* Judge.me review widget — renders client-side, pulls real reviews from flowvedacom.myshopify.com */}
        <div className="max-w-[1080px] mx-auto bg-white rounded-2xl border border-fv-border shadow-fv-card p-6 md:p-10">
          <div
            className="jdgm-widget jdgm-review-widget"
            data-id={PRODUCT_ID}
          />
        </div>
      </div>
    </section>
  );
}
