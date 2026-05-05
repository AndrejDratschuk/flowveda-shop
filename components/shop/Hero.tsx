"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { CLINICIAN_COUNT } from "@/lib/constants";
import CheckoutLink from "./CheckoutLink";

const ROTATION_MS = 5500;

interface Slide {
  headlineLine1: React.ReactNode;
  headlineLine2: string;
  subhead: React.ReactNode;
  subheadMaxW: string;
  rightVisual: "video" | "product" | "result";
  videoSrc?: string;
  posterSrc?: string;
  ctaLabel: string;
  footer?: React.ReactNode;
  showLeftCTA: boolean;
  showOfferCard?: boolean;
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const slides: Slide[] = [
    {
      headlineLine1: <>The Biology of Choice.</>,
      headlineLine2: "Encapsulated.",
      subhead: (
        <>Eight clinically studied ingredients. One purpose: the calm, focused attention to choose how you respond.</>
      ),
      subheadMaxW: "max-w-[720px]",
      rightVisual: "video",
      videoSrc: "/videos/flowveda-distraction-hero-heartbeat.mp4",
      posterSrc: "/images/hero-reactionary-world.jpeg",
      ctaLabel: "Start Your 60-Day Awakening",
      showLeftCTA: false,
      showOfferCard: true,
    },
    {
      headlineLine1: <>The world wants your reaction.</>,
      headlineLine2: "Own the moment before.",
      subhead: (
        <>A daily nootropic that supports calm, focused awareness, so you can recognize the moment before reaction, and choose how you respond.</>
      ),
      subheadMaxW: "max-w-[800px]",
      rightVisual: "product",
      ctaLabel: "Start Your 60-Day Awakening",
      footer: undefined,
      showLeftCTA: true,
    },
    {
      headlineLine1: <>Reclaim the</>,
      headlineLine2: "moments that matter.",
      subhead: (
        <>You have half a second between what just happened and what you&rsquo;re about to do. The moment before is yours. Start living by your own rules.</>
      ),
      subheadMaxW: "max-w-[800px]",
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
  const hasAudioVideo = Boolean(slide.videoSrc);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasAudioVideo) return;

    video.muted = !soundEnabled;
    video.volume = 1;
    video.play().catch(() => {
      video.muted = true;
      setSoundEnabled(false);
      video.play().catch(() => undefined);
    });
  }, [hasAudioVideo, soundEnabled, index]);

  const toggleSound = () => {
    const video = videoRef.current;
    const nextSoundState = !soundEnabled;

    setSoundEnabled(nextSoundState);
    if (!video) return;

    video.muted = !nextSoundState;
    video.volume = 1;
    video.play().catch(() => {
      video.muted = true;
      setSoundEnabled(false);
    });
  };

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
              key={slide.videoSrc ?? slide.rightVisual}
              ref={videoRef}
              autoPlay
              loop
              muted={!soundEnabled || !hasAudioVideo}
              playsInline
              poster={slide.posterSrc}
              className="w-full h-full object-cover opacity-55"
            >
              {slide.videoSrc && <source src={slide.videoSrc} type="video/mp4" />}
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-fv-midnight/85 via-fv-midnight/65 to-fv-midnight/35" />
            <div className="absolute inset-0 bg-gradient-to-b from-fv-midnight/30 via-transparent to-fv-midnight/50" />
            {hasAudioVideo && (
              <button
                type="button"
                onClick={toggleSound}
                aria-label={soundEnabled ? "Mute hero video" : "Unmute hero video"}
                aria-pressed={soundEnabled}
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md transition-colors hover:bg-black/55 focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                {soundEnabled ? (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                    <path d="M16 9.5a4 4 0 0 1 0 5" />
                    <path d="M19 6a8 8 0 0 1 0 12" />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                    <path d="m16 10 5 5" />
                    <path d="m21 10-5 5" />
                  </svg>
                )}
              </button>
            )}
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
          <div
            className={`mt-auto ${
              slide.rightVisual === "product"
                ? "bg-white/50 backdrop-blur-sm rounded-2xl px-7 py-8 md:px-10 md:py-10 -ml-4 md:-ml-6 max-w-[760px]"
                : slide.rightVisual === "result"
                ? "bg-black/30 backdrop-blur-sm rounded-2xl px-7 py-8 md:px-10 md:py-10 -ml-4 md:-ml-6 max-w-[760px]"
                : "bg-fv-midnight/40 backdrop-blur-sm rounded-2xl px-7 py-8 md:px-10 md:py-10 -ml-4 md:-ml-6 max-w-[760px]"
            }`}
          >
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
                fontSize: "clamp(20px, 2.0vw, 22px)",
                lineHeight: 1.55,
                color: slide.rightVisual === "product" ? "rgba(26,26,46,0.92)" : "rgba(255,255,255,0.9)",
                textShadow: slide.rightVisual === "product" ? "0 1px 6px rgba(255,255,255,0.5)" : "0 1px 12px rgba(0,0,0,0.55)",
              }}
            >
              {slide.subhead}
            </p>

            {/* CTA + Footer — only on slides 1 and 3 */}
            {slide.showLeftCTA && (
              <>
                <CheckoutLink
                  key={`cta-${index}`}
                  className="inline-block bg-fv-grad-purple text-white font-body font-bold text-[14px] tracking-[0.10em] uppercase rounded-[10px] px-10 py-[18px] shadow-fv-cta hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(102,71,156,0.55)] transition-all duration-200 animate-fade-in"
                >
                  {slide.ctaLabel} →
                </CheckoutLink>

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
        <div className="hidden md:flex items-center justify-end pr-6 lg:pr-10 py-12 w-full">
          {slide.showOfferCard && (
            <div
              key={`offer-${index}`}
              className="relative animate-fade-in bg-white/50 backdrop-blur-sm rounded-2xl px-6 py-6 md:px-7 md:py-7 flex flex-col items-center max-w-[374px] w-full text-center shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
              style={{ marginRight: "calc(33.33% - 187px)" }}
            >
              {/* Title — midnight black */}
              <h3 className="font-display font-extrabold tracking-[-0.02em] leading-[1.1] mb-3"
                  style={{ fontSize: "clamp(20px, 1.8vw, 23px)", color: "#1A1A2E" }}>
                The 60-Day Awakening
              </h3>

              {/* Price + savings row — $99 midnight, $165 darker strike-through */}
              <div className="flex items-baseline gap-3 mb-4 justify-center">
                <span
                  className="font-display font-extrabold"
                  style={{ fontSize: "44px", letterSpacing: "-0.025em", lineHeight: 1, color: "#1A1A2E" }}
                >
                  $99
                </span>
                <span
                  className="font-body line-through text-[17px]"
                  style={{ color: "#3D3D4E" }}
                >
                  $165
                </span>
                <span className="font-body font-bold text-[12px] tracking-[0.08em] uppercase text-white bg-fv-pink rounded-full px-3 py-1">
                  40% OFF
                </span>
              </div>

              {/* Pills row — Doctor Trust translation pill style */}
              <div className="flex flex-wrap gap-2 justify-center mb-4 max-w-[330px]">
                {[
                  "2 bottles",
                  "180 capsules",
                  "3/day",
                  "60-day supply",
                  "Ships next business day",
                ].map((pill, i) => (
                  <div
                    key={i}
                    className="bg-white border-t-[2px] border-fv-purple rounded-lg px-3.5 py-2.5 shadow-fv-card flex items-center gap-2 whitespace-nowrap"
                  >
                    <div className="w-[22px] h-[22px] rounded-full bg-fv-purple text-white flex items-center justify-center flex-shrink-0 font-bold text-[11px]">
                      ✓
                    </div>
                    <span className="font-body font-semibold text-[13px] text-fv-charcoal">
                      {pill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottle photo — 15% smaller than v3.1 (was full aspect-square, now constrained) */}
              <div className="relative w-full mb-4" style={{ maxWidth: "220px", aspectRatio: "1 / 1" }}>
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
              <CheckoutLink
                className="inline-block bg-fv-grad-purple text-white font-body font-bold text-[13px] tracking-[0.09em] uppercase rounded-[10px] px-7 py-[13px] shadow-fv-cta hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(102,71,156,0.55)] transition-all duration-200 mb-2.5"
              >
                {slide.ctaLabel} →
              </CheckoutLink>

              {/* Guarantee line */}
              <p className="font-body text-[15px] font-bold tracking-[0.10em] uppercase text-fv-midnight">
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
