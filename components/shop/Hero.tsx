"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { CHECKOUT_URL, CLINICIAN_COUNT } from "@/lib/constants";

const ROTATION_MS = 5500;

interface Slide {
  headlineLine1: React.ReactNode;
  headlineLine2: string; // line 2 always rendered in purple
  subhead: React.ReactNode;
  ctaLabel: string;
  footer: React.ReactNode;
  rightVisual: "video" | "product" | "result";
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides: Slide[] = [
    {
      headlineLine1: <>The world wants your reaction.</>,
      headlineLine2: "Own the moment before.",
      subhead: (
        <>A daily nootropic that supports calm, focused awareness, so you can recognize the moment before reaction, and choose how you respond.</>
      ),
      ctaLabel: "Start Your 60-Day Awakening",
      footer: (
        <>
          86% Ayurvedic. Clinically studied ingredients.
          <br />
          60-day money-back guarantee.
        </>
      ),
      rightVisual: "video",
    },
    {
      headlineLine1: <>The Biology of Choice.</>,
      headlineLine2: "Encapsulated.",
      subhead: (
        <>Eight clinically studied ingredients. One purpose: the calm, focused attention to choose how you respond.</>
      ),
      ctaLabel: "Start Your 60-Day Awakening",
      footer: (
        <>
          $99 · 40% off the $165 retail.
          <br />
          60-day money-back guarantee.
        </>
      ),
      rightVisual: "product",
    },
    {
      headlineLine1: <>Reclaim the</>,
      headlineLine2: "moments that matter.",
      subhead: (
        <>You have half a second between what just happened and what you&rsquo;re about to do. The moment before is yours. Start living by your own rules.</>
      ),
      ctaLabel: "Start Your 60-Day Awakening",
      footer: (
        <>
          Eight ingredients. One purpose.
          <br />
          60-day money-back guarantee.
        </>
      ),
      rightVisual: "result",
    },
  ];

  const tick = useCallback(() => {
    if (paused || document.hidden) return;
    setIndex((prev) => (prev + 1) % slides.length);
  }, [paused, slides.length]);

  useEffect(() => {
    const interval = setInterval(tick, ROTATION_MS);
    return () => clearInterval(interval);
  }, [tick]);

  const slide = slides[index];
  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative min-h-[720px] md:min-h-[800px] flex items-stretch overflow-hidden bg-fv-midnight"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* RIGHT-COLUMN VISUAL LAYER — switches based on slide */}
      <div className="absolute inset-0 z-0">
        {/* Video plays only during Slide 1 (rightVisual === "video") — full-bleed */}
        {slide.rightVisual === "video" && (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/hero-reactionary-world.jpeg"
              className="w-full h-full object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-fv-midnight/85 via-fv-midnight/65 to-fv-midnight/35" />
            <div className="absolute inset-0 bg-gradient-to-b from-fv-midnight/30 via-transparent to-fv-midnight/50" />
          </>
        )}

        {/* Product slide — kitchen image fills right half */}
        {slide.rightVisual === "product" && (
          <>
            <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
              <Image
                src="/images/taking-flowveda.webp"
                alt="Woman taking a FlowVeda capsule in her kitchen"
                fill
                className="object-cover"
                priority
              />
              {/* Soft scrim on the right image so the product card pops */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-fv-midnight/10 to-fv-midnight/40" />
            </div>
            {/* Left half deep navy/purple */}
            <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-br from-fv-midnight via-fv-purple-deep/40 to-fv-midnight" />
          </>
        )}

        {/* Result slide — mountaintop fills right half */}
        {slide.rightVisual === "result" && (
          <>
            <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
              <Image
                src="/images/embracing-the-mountaintop.webp"
                alt="Woman on a mountaintop at sunset, arms open, embracing the moment"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-fv-midnight/10 to-fv-midnight/40" />
            </div>
            <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-br from-fv-midnight via-fv-purple-deep/40 to-fv-midnight" />
          </>
        )}
      </div>

      {/* CONTENT — two columns on desktop */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 items-center">
        {/* LEFT COLUMN — copy stack */}
        <div className="px-4 md:pl-8 lg:pl-12 xl:pl-16 py-20 md:py-24 max-w-[680px]">
          {/* Big badge */}
          <div className="mb-6 animate-fade-in" key={`badge-${index}`}>
            <Image
              src="/images/clinicians-choice-badge.svg"
              alt={`${CLINICIAN_COUNT}+ Clinicians' Choice — Verified by FrontRow MD`}
              width={420}
              height={85}
              priority
              className="h-20 md:h-24 w-auto"
            />
          </div>

          {/* Headline — line 1 white, line 2 purple/lavender */}
          <h1
            key={`h1-${index}`}
            className="font-display font-extrabold tracking-[-0.02em] leading-[1.1] mb-5 animate-fade-in"
            style={{ fontSize: "clamp(28px, 3.4vw, 40px)", textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}
          >
            <span className="block text-white">{slide.headlineLine1}</span>
            <span className="block mt-1" style={{ color: "#B8A5D4", fontStyle: "italic", fontFamily: "var(--font-newsreader)", fontWeight: 500 }}>
              {slide.headlineLine2}
            </span>
          </h1>

          {/* Subhead */}
          <p
            key={`sub-${index}`}
            className="font-body font-medium text-white/90 mb-8 max-w-[560px] animate-fade-in"
            style={{ fontSize: "clamp(16px, 1.6vw, 18px)", lineHeight: 1.65, textShadow: "0 1px 12px rgba(0,0,0,0.55)" }}
          >
            {slide.subhead}
          </p>

          {/* CTA — same on every slide */}
          <Link
            key={`cta-${index}`}
            href={CHECKOUT_URL}
            className="inline-block bg-fv-grad-purple text-white font-body font-bold text-[14px] tracking-[0.10em] uppercase rounded-[10px] px-10 py-[18px] shadow-fv-cta hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(102,71,156,0.55)] transition-all duration-200 animate-fade-in"
          >
            {slide.ctaLabel} →
          </Link>

          {/* Footer — matches button typography (14px, bold, tracking) */}
          <p
            key={`foot-${index}`}
            className="font-body text-[14px] font-bold tracking-[0.10em] uppercase text-white/75 mt-5 leading-[1.7] animate-fade-in"
          >
            {slide.footer}
          </p>
        </div>

        {/* RIGHT COLUMN — only Slide 2 renders the product card here */}
        <div className="hidden md:flex items-center justify-center px-8 lg:px-12 py-12">
          {slide.rightVisual === "product" && (
            <div
              key={`product-${index}`}
              className="relative animate-fade-in flex flex-col items-center max-w-[440px] w-full"
            >
              {/* Bottle photo */}
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src="/images/60-day-awakening.png"
                  alt="FlowVeda 60-Day Awakening — two-bottle starter kit"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Price + pills card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 w-full">
                {/* Price row */}
                <div className="flex items-baseline gap-3 mb-4 justify-center">
                  <span className="font-display font-extrabold text-fv-charcoal" style={{ fontSize: "44px", letterSpacing: "-0.025em" }}>
                    $99
                  </span>
                  <span className="font-body text-fv-text-muted line-through text-[18px]">$165</span>
                  <span className="font-body font-bold text-[12px] tracking-[0.08em] uppercase text-white bg-fv-pink rounded-full px-3 py-1">
                    40% OFF
                  </span>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {["2 bottles", "180 capsules", "3/day", "60-day supply", "Ships next business day"].map((pill, i) => (
                    <span
                      key={i}
                      className="font-body font-semibold text-[11px] tracking-[0.04em] text-fv-charcoal bg-fv-purple-light border border-fv-purple/30 rounded-full px-3 py-1.5 whitespace-nowrap"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Slide indicators + nav */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-base flex items-center justify-center backdrop-blur-sm transition-colors"
        >
          ←
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next slide"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-base flex items-center justify-center backdrop-blur-sm transition-colors"
        >
          →
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}
