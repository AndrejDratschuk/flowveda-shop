"use client";
import { useEffect, useState } from "react";
import CheckoutLink from "./CheckoutLink";

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <CheckoutLink
        className="block w-full text-center bg-fv-grad-purple text-white font-body font-bold text-[14px] tracking-[0.10em] uppercase rounded-full py-4 shadow-fv-cta"
      >
        Start Your 60-Day Awakening
      </CheckoutLink>
    </div>
  );
}
