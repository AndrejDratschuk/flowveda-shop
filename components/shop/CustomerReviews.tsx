"use client";
import { useEffect } from "react";

// Judge.me config — matches what flowveda.com uses on the live product page.
const JDGM_SHOP_DOMAIN = "flowvedacom.myshopify.com";
const JDGM_PLATFORM = "shopify";
const JDGM_PUBLIC_TOKEN = "i2tQZYPbQZHWETrNaxZxDYE60VU";
const PRODUCT_ID = "7932127477900";

export default function CustomerReviews() {
  useEffect(() => {
    const w = window as unknown as {
      jdgm?: { SHOP_DOMAIN?: string; PLATFORM?: string; PUBLIC_TOKEN?: string };
    };
    w.jdgm = w.jdgm || {};
    w.jdgm.SHOP_DOMAIN = JDGM_SHOP_DOMAIN;
    w.jdgm.PLATFORM = JDGM_PLATFORM;
    w.jdgm.PUBLIC_TOKEN = JDGM_PUBLIC_TOKEN;

    if (!document.querySelector("script[data-jdgm-preloader]")) {
      const s = document.createElement("script");
      s.src = "https://cdn.judge.me/widget_preloader.js";
      s.async = true;
      s.setAttribute("data-jdgm-preloader", "true");
      document.body.appendChild(s);
    }

    if (!document.querySelector("link[data-jdgm-css]")) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.judge.me/shopify_v2.css";
      link.setAttribute("data-jdgm-css", "true");
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section id="reviews" className="bg-white py-12 md:py-16 px-6 md:px-9">
      <div className="fv-container">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span aria-hidden="true" className="text-fv-pink text-[18px] tracking-[0.05em]">★★★★★</span>
            <span className="font-body font-bold text-[12px] tracking-[0.10em] uppercase text-fv-charcoal-soft">
              Verified reviews · powered by Judge.me
            </span>
          </div>
          <h2 className="font-display font-extrabold text-fv-midnight tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
            Real people, <span className="font-sub text-fv-purple" style={{ fontStyle: "italic", fontWeight: 500 }}>owning the moment before.</span>
          </h2>
        </div>

        {/* Judge.me reviews carousel — compact, horizontal, one card at a time */}
        <div className="max-w-[860px] mx-auto">
          <div className="jdgm-carousel-wrapper" data-id={PRODUCT_ID} />
        </div>
      </div>
    </section>
  );
}
