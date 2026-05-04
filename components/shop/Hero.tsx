"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { CHECKOUT_URL, CLINICIAN_COUNT } from "@/lib/constants";

const ROTATION_MS = 5500;

interface Slide {
  headlineLine1: React.ReactNode;
  headlineLine2: string;
  subhead: React.ReactNode;
  subheadMaxW: string;
  rightVisual: "video" | "product" | "result";
  ctaLabel: string;
  footer?: React.ReactNode;
  showLeftCTA: boolean;
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
      subheadMaxW: "max-w-[720px]",
      rightVisual: "video",
      ctaLabel: "Start Your 60-Day Awakening",
      footer: (
        <>
          86% Ayurvedic. Clinically studied ingredients.
          <br />
          60-day money-back guarantee.
        </>
      ),
      showLeftCTA: true,
    },
    {
      headlineLine1: <>The Biology of Choice.</>,
      headlineLine2: "Encapsulated.",
      subhead: (
        <>Eight clinically studied ingredients. One purpose: the calm, focused attention to choose how you respond.</>
      ),
      subheadMaxW: "max-w-[640px]",
      rightVisual: "product",
      ctaLabel: "Start Your 60-Day Awakening",
      showLeftCTA: false, // Slide 2: CTA lives in the right offer card
    },
    {
      headlineLine1: <>Reclaim the</>,
      headlineLine2: "moments that matter.",
      subhead: (
        <>You have half a second between what just happened and what you&rsquo;re about to do. The moment before is yours. Start living by your own rules.</>
      ),
      subheadMaxW: "max-w-[720px]",
      rightVisual: "result",
      ctaLabel: "Start Your 60-Day Awakening",
      footer: (
        <>
          Eight ingredients. One purpose.
          <br />
          60-day money-back guarantee.
        </>
      ),
      showLeftCTA: true,
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
      className="relative min-h-[760px] md:min-h-[820px] overflow-hidden bg-fv-midnight"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* RIGHT-COLUMN BACKGROUND VISUAL LAYER */}
      <div className="absolute inset-0 z-0">
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

        {slide.rightVisual === "product" && (
          <div className="absolute inset-0">
            <Image
              src="/images/taking-flowveda.webp"
              alt="Woman taking a FlowVeda capsule in her kitchen"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        {slide.rightVisual === "result" && (
          <div className="absolute inset-0">
            <Image
              src="/images/beach-serenity.jpeg"
              alt="A woman seated on a beach at sunset, calm water, present in the moment"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>

      {/* CONTENT GRID */}
      <div className="relative z-10 w-full min-h-[760px] md:min-h-[820px] grid grid-cols-1 md:grid-cols-2">
        {/* LEFT COLUMN — vertically distributed: badge top, content bottom */}
        <div className="flex flex-col justify-between px-4 md:pl-8 lg:pl-12 xl:pl-16 pt-16 pb-12 md:pt-20 md:pb-16 max-w-[820px]">
          {/* Badge — top-left, 20% smaller than v3.1 */}
          <div className="animate-fade-in" key={`badge-${index}`}>
            <Image
              src="/images/clinicians-choice-badge.svg"
              alt={`${CLINICIAN_COUNT}+ Clinicians' Choice — Verified by FrontRow MD`}
              width={356}
              height={72}
              priority
              className="h-16 md:h-20 w-auto"
            />
          </div>

          {/* Bottom-pinned content stack */}
          <div className="mt-auto">
            {/* Headline */}
            <h1
              key={`h1-${index}`}
              className="font-display font-extrabold tracking-[-0.02em] leading-[1.1] mb-5 animate-fade-in"
              style={{
                fontSize: "clamp(28px, 3.4vw, 40px)",
                textShadow: slide.rightVisual === "product" ? "0 1px 8px rgba(255,255,255,0.6)" : "0 2px 24px rgba(0,0,0,0.55)",
              }}
            >
              <span
                className="block"
                style={{ color: slide.rightVisual === "product" ? "#1A1A2E" : "#FFFFFF" }}
              >
                {slide.headlineLine1}
              </span>
              <span
                className="block mt-1"
                style={{
                  color: slide.rightVisual === "product" ? "#4A3375" : "#B8A5D4",
                  fontStyle: "italic",
                  fontFamily: "var(--font-newsreader)",
                  fontWeight: 500,
                }}
              >
                {slide.headlineLine2}
              </span>
            </h1>

            {/* Subhead — per-slide max-width forces 2-line wrap */}
            <p
              key={`sub-${index}`}
              className={`font-body font-medium mb-7 ${slide.subheadMaxW} animate-fade-in`}
              style={{
                fontSize: "clamp(16px, 1.6vw, 18px)",
                lineHeight: 1.6,
                color: slide.rightVisual === "product" ? "rgba(26,26,46,0.92)" : "rgba(255,255,255,0.9)",
                textShadow: slide.rightVisual === "product" ? "0 1px 6px rgba(255,255,255,0.5)" : "0 1px 12px rgba(0,0,0,0.55)",
              }}
            >
              {slide.subhead}
            </p>

            {/* CTA + Footer — only on slides 1 and 3 */}
            {slide.showLeftCTA && (
              <>
                <Link
                  key={`cta-${index}`}
                  href={CHECKOUT_URL}
                  className="inline-block bg-fv-grad-purple text-white font-body font-bold text-[14px] tracking-[0.10em] uppercase rounded-[10px] px-10 py-[18px] shadow-fv-cta hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(102,71,156,0.55)] transition-all duration-200 animate-fade-in"
                >
                  {slide.ctaLabel} →
                </Link>

                {slide.footer && (
                  <p
                    key={`foot-${index}`}
                    className="font-body text-[14px] font-bold tracking-[0.10em] uppercase text-white/75 mt-5 leading-[1.7] animate-fade-in"
                  >
                    {slide.footer}
                  </p>
                )}
              </>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN — Slide 2 offer card */}
        <div className="hidden md:flex items-center justify-center px-6 lg:px-10 py-12">
          {slide.rightVisual === "product" && (
            <div
              key={`offer-${index}`}
              className="relative animate-fade-in flex flex-col items-center max-w-[420px] w-full text-center"
            >
              {/* Title */}
              <h3 className="font-display font-extrabold text-white tracking-[-0.02em] leading-[1.1] mb-3"
                  style={{ fontSize: "clamp(22px, 2.2vw, 26px)" }}>
                The 60-Day Awakening
              </h3>

              {/* Price + savings row */}
              <div className="flex items-baseline gap-3 mb-5 justify-center">
                <span
                  className="font-display font-extrabold text-white"
                  style={{ fontSize: "52px", letterSpacing: "-0.025em", lineHeight: 1 }}
                >
                  $99
                </span>
                <span className="font-body text-white/55 line-through text-[18px]">$165</span>
                <span className="font-body font-bold text-[12px] tracking-[0.08em] uppercase text-white bg-fv-pink rounded-full px-3 py-1">
                  40% OFF
                </span>
              </div>

              {/* Pills row — Doctor Trust translation pill style */}
              <div className="flex flex-wrap gap-2 justify-center mb-6 max-w-[420px]">
                {[
                  "2 bottles",
                  "180 capsules",
                  "3/day",
                  "60-day supply",
                  "Ships next business day",
                ].map((pill, i) => (
                  <div
                    key={i}
                    className="bg-white border-t-[3px] border-fv-purple rounded-xl px-4 py-3 shadow-fv-card flex items-center gap-2 whitespace-nowrap"
                  >
                    <div className="w-6 h-6 rounded-full bg-fv-purple text-white flex items-center justify-center flex-shrink-0 font-bold text-[12px]">
                      ✓
                    </div>
                    <span className="font-body font-semibold text-[18px] text-fv-charcoal">
                      {pill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottle photo — 15% smaller than v3.1 (was full aspect-square, now constrained) */}
              <div className="relative w-full mb-6" style={{ maxWidth: "320px", aspectRatio: "1 / 1" }}>
                <Image
                  src="/images/60-day-awakening.png"
                  alt="FlowVeda 60-Day Awakening — two-bottle starter kit"
                  fill
                  sizes="320px"
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* CTA — same brand button as left column */}
              <Link
                href={CHECKOUT_URL}
                className="inline-block bg-fv-grad-purple text-white font-body font-bold text-[14px] tracking-[0.10em] uppercase rounded-[10px] px-10 py-[18px] shadow-fv-cta hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(102,71,156,0.55)] transition-all duration-200 mb-3"
              >
                {slide.ctaLabel} →
              </Link>

              {/* Guarantee line */}
              <p className="font-body text-[13px] font-bold tracking-[0.10em] uppercase text-white/75">
                60-day money-back guarantee
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Slide indicators + nav */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
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
