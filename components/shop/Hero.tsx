"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { CLINICIAN_COUNT } from "@/lib/constants";

const ROTATION_MS = 6000;

type Visual =
  | { kind: "video"; src: string; poster: string; alt: string }
  | { kind: "image"; src: string; alt: string };

const visuals: Visual[] = [
  {
    kind: "video",
    src: "/videos/flowveda-distraction-hero-heartbeat.mp4",
    poster: "/images/hero-reactionary-world.jpeg",
    alt: "The reactionary world. Notifications, pressure, noise.",
  },
  {
    kind: "image",
    src: "/images/taking-flowveda.webp",
    alt: "A woman taking FlowVeda® in her kitchen",
  },
  {
    kind: "image",
    src: "/images/beach-serenity.jpeg",
    alt: "A woman at the shore at sunset, present in the moment",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const slide = visuals[index];
  const hasAudioVideo = slide.kind === "video";

  const tick = useCallback(() => {
    if (paused || document.hidden) return;
    setIndex((prev) => (prev + 1) % visuals.length);
  }, [paused]);

  useEffect(() => {
    const interval = setInterval(tick, ROTATION_MS);
    return () => clearInterval(interval);
  }, [tick]);

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
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (!video) return;
    video.muted = !next;
    video.volume = 1;
    video.play().catch(() => {
      video.muted = true;
      setSoundEnabled(false);
    });
  };

  const next = () => setIndex((p) => (p + 1) % visuals.length);
  const prev = () => setIndex((p) => (p - 1 + visuals.length) % visuals.length);

  return (
    <section
      className="relative overflow-hidden bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px] md:min-h-[680px] lg:min-h-[720px]">
        {/* LEFT — clean white with copy */}
        <div className="relative bg-white flex flex-col justify-center px-6 md:px-10 lg:px-14 xl:px-16 py-12 md:py-16 order-2 md:order-1">
          {/* Original Clinicians' Choice banner SVG */}
          <div className="mb-7 md:mb-8">
            <Image
              src="/images/clinicians-choice-badge.svg"
              alt={`${CLINICIAN_COUNT}+ Clinicians' Choice, Verified by FrontRow MD`}
              width={356}
              height={72}
              priority
              className="h-[60px] md:h-[72px] w-auto"
            />
          </div>

          {/* Headline — two-line, tighter */}
          <h1
            className="font-display font-extrabold text-fv-midnight tracking-[-0.025em] leading-[1] mb-6"
            style={{ fontSize: "clamp(40px, 5.2vw, 68px)" }}
          >
            <span className="block">Own The Moment</span>
            <span
              className="block font-sub text-fv-purple"
              style={{ fontStyle: "italic", fontWeight: 500 }}
            >
              Before Reaction.
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="font-body text-fv-charcoal-soft mb-7 max-w-[440px]"
            style={{ fontSize: "clamp(15px, 1.4vw, 17px)", lineHeight: 1.55 }}
          >
            A daily Ayurvedic nootropic for the calm, focused attention to choose how you respond, before you react.
          </p>

          {/* Single bold CTA */}
          <a href="#get-started" className="inline-block w-fit bg-fv-midnight text-white font-body font-bold text-[13px] md:text-[14px] tracking-[0.10em] uppercase rounded-full px-8 md:px-9 py-[15px] md:py-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition-all duration-200">
            Save 40% + Free Shipping →
          </a>

          {/* Stars / clinician line */}
          <div className="mt-5 inline-flex items-center gap-2.5">
            <span aria-hidden="true" className="text-fv-pink text-[16px] tracking-[0.05em]">
              ★★★★★
            </span>
            <span className="font-body font-bold text-[12px] text-fv-charcoal">
              {CLINICIAN_COUNT}+ Clinicians' Choice
            </span>
          </div>
        </div>

        {/* RIGHT — video / image slider */}
        <div className="relative bg-fv-midnight min-h-[420px] md:min-h-full order-1 md:order-2 overflow-hidden">
          {slide.kind === "video" ? (
            <>
              <video
                key={slide.src}
                ref={videoRef}
                autoPlay
                loop
                muted={!soundEnabled}
                playsInline
                poster={slide.poster}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={slide.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-fv-midnight/0 to-fv-midnight/20" />
            </>
          ) : (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover animate-hero-fade"
              priority={index === 0}
            />
          )}

          {/* Audio toggle */}
          {hasAudioVideo && (
            <button
              type="button"
              onClick={toggleSound}
              aria-label={soundEnabled ? "Mute hero video" : "Unmute hero video"}
              aria-pressed={soundEnabled}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md transition-colors hover:bg-black/55 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              {soundEnabled ? (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                  <path d="M16 9.5a4 4 0 0 1 0 5" />
                  <path d="M19 6a8 8 0 0 1 0 12" />
                </svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                  <path d="m16 10 5 5" />
                  <path d="m21 10-5 5" />
                </svg>
              )}
            </button>
          )}

          {/* Carousel controls */}
          <div className="absolute bottom-5 right-5 z-20 flex items-center gap-3">
            <div className="flex gap-1.5 mr-2">
              {visuals.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 bg-white" : "w-2 bg-white/45 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white text-sm flex items-center justify-center backdrop-blur-sm transition-colors border border-white/20"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white text-sm flex items-center justify-center backdrop-blur-sm transition-colors border border-white/20"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroFade {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
        :global(.animate-hero-fade) {
          animation: heroFade 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}
