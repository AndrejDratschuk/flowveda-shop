"use client";
/* eslint-disable @next/next/no-img-element */
// One-to-one port of /FlowVeda Hero 5 Reasons/hero.jsx
// - Asset paths rewritten from "assets/..." to "/images/dads-hero/..."
// - Inline styles preserved verbatim
// - useTweaks panel removed; TWEAK_DEFAULTS inlined
// - Adds "use client" for Next.js (useState/useEffect)

import { useState, useEffect } from "react";

/* ---------- Tweakable defaults (formerly TWEAK_DEFAULTS) ---------- */
const HERO_BG = "Bone" as const;
const EYEBROW = "FOR DADS WHO STOPPED SHOWING UP AT 6PM";
const ACCENT_TONE = "Purple" as const;
const CTA_COPY = "GET STARTED · SAVE 49%";

/* ---------- Data ---------- */
const DOCTORS = [
  { name: "Dr. Anjali Grover",  img: "/images/dads-hero/doctor-grover.png",  role: "Integrative Medicine, MD", org: "Cleveland Clinic Alum", tag: "Board-Certified" },
  { name: "Dr. Marcus Pierson", img: "/images/dads-hero/doctor-pierson.png", role: "Sleep Neurologist",        org: "20+ yrs in Practice",   tag: "Sleep & Stress" },
  { name: "Dr. Sara Faiz",      img: "/images/dads-hero/doctor-faiz.png",    role: "Cognitive Performance",    org: "Stanford Trained",      tag: "Nootropic Research" },
  { name: "Dr. Lena Kasper",    img: "/images/dads-hero/doctor-kasper.png",  role: "Functional Psychiatry",    org: "Mayo Clinic Alum",      tag: "Anxiety Specialist" },
];

const COMPARISON = {
  ours: "FlowVeda® Platinum",
  theirs: "Other Nootropics",
  rows: [
    { feature: "Ayurvedic Adaptogen Blend",    ours: true,  theirs: false, oursVal: "8 actives",    theirsVal: "Synthetic only" },
    { feature: "Clinically-Dosed Ashwagandha", ours: true,  theirs: false, oursVal: "600mg KSM-66", theirsVal: "Underdosed" },
    { feature: "L-Theanine + Bacopa Combo",    ours: true,  theirs: false, oursVal: "200mg + 300mg", theirsVal: "Bacopa only" },
    { feature: "Rhodiola Rosea (3% Salidroside)", ours: true,  theirs: false, oursVal: "300mg",     theirsVal: "Generic ext." },
    { feature: "Lion's Mane (8:1 Fruiting)",   ours: true,  theirs: false, oursVal: "500mg",        theirsVal: "Mycelium" },
    { feature: "Caffeine / Stimulants",        ours: false, theirs: true,  oursVal: "0mg",          theirsVal: "200mg+" },
    { feature: "Artificial Fillers / Dyes",    ours: false, theirs: true,  oursVal: "None",         theirsVal: "Common" },
    { feature: "Third-Party Tested",           ours: true,  theirs: false, oursVal: "Every batch",  theirsVal: "Sometimes" },
  ],
};

const INGREDIENTS = [
  { name: "Ashwagandha",       sub: "KSM-66, 600mg",         benefit: "Cortisol regulation", img: "/images/dads-hero/ing-ashwagandha.png" },
  { name: "L-Theanine",        sub: "200mg",                 benefit: "Calm alertness",      img: "/images/dads-hero/ing-l-theanine.png" },
  { name: "Bacopa Monnieri",   sub: "300mg, 50% bacosides",  benefit: "Memory + recall",     img: "/images/dads-hero/ing-bacopa.png" },
  { name: "Rhodiola Rosea",    sub: "300mg, 3% salidroside", benefit: "Stress resilience",   img: "/images/dads-hero/ing-rhodiola.png" },
  { name: "Lion's Mane",       sub: "500mg, 8:1 fruiting",   benefit: "Neurogenesis",        img: "/images/dads-hero/ing-lions-mane.png" },
  { name: "N-Acetyl Tyrosine", sub: "NALT, 300mg",           benefit: "Focus under stress",  img: "/images/dads-hero/ing-nalt.png" },
  { name: "Folate (5-MTHF)",   sub: "Methylated, 400mcg",    benefit: "Neurotransmitters",   img: "/images/dads-hero/ing-folate.png" },
  { name: "Vitamin B6 (P-5-P)", sub: "Active form, 10mg",    benefit: "Nervous system",      img: "/images/dads-hero/ing-vitamin-b6.png" },
];

type SlideKind = "product" | "comparison" | "clinicians" | "ingredients" | "guarantee";

const SLIDES: { kind: SlideKind; pill: string }[] = [
  { kind: "product",     pill: "Platinum Flow · 120 Veggie Capsules" },
  { kind: "comparison",  pill: "8 clinically-researched actives" },
  { kind: "clinicians",  pill: "900+ clinicians' choice" },
  { kind: "ingredients", pill: "Inside every capsule" },
  { kind: "guarantee",   pill: "60-Day money-back" },
];

/* ---------- Right card (IM8 pattern: full-bleed slides + outside arrows) ---------- */
function RightCard({ accent }: { accent: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 5200);
    return () => clearInterval(t);
  }, [paused]);

  const slide = SLIDES[i];

  return (
    <div
      className="rc-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: "relative", height: "100%" }}
    >
      {/* Outside arrows */}
      <button
        onClick={() => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length)}
        aria-label="Previous"
        className="rc-arrow rc-arrow-l"
        style={{
          position: "absolute", left: -22, top: "50%", transform: "translateY(-50%)",
          width: 44, height: 44, borderRadius: 999,
          background: "rgba(255,255,255,0.95)",
          border: "1px solid rgba(26,26,46,0.10)",
          boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
          color: "#1A1A2E", fontSize: 22, fontWeight: 500, lineHeight: 1,
          cursor: "pointer", zIndex: 10,
          display: "grid", placeItems: "center", paddingBottom: 3,
        }}
      >‹</button>
      <button
        onClick={() => setI((v) => (v + 1) % SLIDES.length)}
        aria-label="Next"
        className="rc-arrow rc-arrow-r"
        style={{
          position: "absolute", right: -22, top: "50%", transform: "translateY(-50%)",
          width: 44, height: 44, borderRadius: 999,
          background: "rgba(255,255,255,0.95)",
          border: "1px solid rgba(26,26,46,0.10)",
          boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
          color: "#1A1A2E", fontSize: 22, fontWeight: 500, lineHeight: 1,
          cursor: "pointer", zIndex: 10,
          display: "grid", placeItems: "center", paddingBottom: 3,
        }}
      >›</button>

      {/* The card */}
      <div style={{
        background: "linear-gradient(180deg, #F6F1E8 0%, #EFE6D4 100%)",
        borderRadius: 28,
        height: "100%",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 30px 70px rgba(15,10,40,0.25), inset 0 0 0 1px rgba(102,71,156,0.06)",
      }}>
        {/* Full-bleed slide */}
        <div style={{ position: "absolute", inset: 0 }}>
          {slide.kind === "product"     && <SlideProduct accent={accent} />}
          {slide.kind === "comparison"  && <SlideComparison accent={accent} />}
          {slide.kind === "clinicians"  && <SlideClinicians accent={accent} />}
          {slide.kind === "ingredients" && <SlideIngredients accent={accent} />}
          {slide.kind === "guarantee"   && <SlideGuarantee accent={accent} />}
        </div>

        {/* Floating caption pill (hidden on Product slide) */}
        {slide.kind !== "product" && (
          <div style={{
            position: "absolute", bottom: 64, right: 20, zIndex: 5,
            background: "white",
            borderRadius: 999,
            padding: "10px 18px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700, fontSize: 11.5,
            letterSpacing: "0.10em", textTransform: "uppercase",
            color: "#1A1A2E",
            boxShadow: "0 8px 22px rgba(26,26,46,0.16)",
            display: "inline-flex", alignItems: "center", gap: 8,
            maxWidth: "calc(100% - 40px)",
          }}>
            <span style={{ width: 16, height: 16, borderRadius: 999, background: accent, color: "white", fontSize: 10, fontWeight: 900, display: "grid", placeItems: "center", flexShrink: 0 }}>✓</span>
            <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{slide.pill}</span>
          </div>
        )}

        {/* Dot indicators */}
        <div style={{
          position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: 6, zIndex: 5,
        }}>
          {SLIDES.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} style={{
              width: k === i ? 26 : 7, height: 7, borderRadius: 4, border: "none",
              background: k === i ? "#1A1A2E" : "rgba(26,26,46,0.28)",
              transition: "all 0.3s", cursor: "pointer", padding: 0,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Slide: Product (full-bleed marketing image) ---------- */
function SlideProduct({ accent: _accent }: { accent: string }) {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "#DCE7F5",
      overflow: "hidden",
    }}>
      <img
        src="/images/dads-hero/product-hero.png"
        alt="FlowVeda Platinum Flow. 900+ Clinicians' Choice. Stop saying what you regret. Stay present when it matters."
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </div>
  );
}

/* ---------- Slide: Comparison (FlowVeda vs Other Nootropics) ---------- */
function SlideComparison({ accent }: { accent: string }) {
  return (
    <div style={{ position: "absolute", inset: 0, padding: "28px 24px 92px", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", marginBottom: 14 }}>
        <h3 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800, fontSize: 20, color: "#1A1A2E",
          letterSpacing: "-0.015em", lineHeight: 1.1, margin: 0,
        }}>How FlowVeda compares</h3>
      </div>

      {/* Table header */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr",
        gap: 4,
        marginBottom: 6,
        alignItems: "end",
      }}>
        <div />
        <div style={{
          background: "white",
          borderRadius: "12px 12px 0 0",
          padding: "10px 8px",
          textAlign: "center",
          boxShadow: "0 -2px 8px rgba(102,71,156,0.08)",
        }}>
          <div style={{
            fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 10,
            letterSpacing: "0.1em", textTransform: "uppercase", color: accent,
          }}>
            {COMPARISON.ours}
          </div>
        </div>
        <div style={{
          background: "rgba(26,26,46,0.06)",
          borderRadius: "12px 12px 0 0",
          padding: "10px 8px",
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 10,
            letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B6B7C",
          }}>
            {COMPARISON.theirs}
          </div>
        </div>
      </div>

      {/* Table rows */}
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", gap: 3 }}>
        {COMPARISON.rows.map((r) => (
          <div key={r.feature} style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 4,
            alignItems: "stretch",
          }}>
            <div style={{
              padding: "7px 10px",
              fontFamily: "Inter, sans-serif", fontSize: 11.5, fontWeight: 600,
              color: "#1A1A2E", display: "flex", alignItems: "center",
              lineHeight: 1.2,
            }}>{r.feature}</div>
            <div style={{
              background: "white",
              padding: "7px 8px",
              textAlign: "center",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              borderRight: "1px solid rgba(26,26,46,0.04)",
            }}>
              <span style={{
                width: 16, height: 16, borderRadius: 999,
                background: r.ours ? accent : "rgba(26,26,46,0.18)",
                color: "white", fontSize: 10, fontWeight: 900,
                display: "grid", placeItems: "center", flexShrink: 0,
              }}>{r.ours ? "✓" : "✕"}</span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10.5, fontWeight: 700, color: "#1A1A2E", letterSpacing: "-0.005em" }}>
                {r.oursVal}
              </span>
            </div>
            <div style={{
              background: "rgba(26,26,46,0.04)",
              padding: "7px 8px",
              textAlign: "center",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            }}>
              <span style={{
                width: 16, height: 16, borderRadius: 999,
                background: r.theirs ? accent : "rgba(26,26,46,0.22)",
                color: "white", fontSize: 10, fontWeight: 900,
                display: "grid", placeItems: "center", flexShrink: 0,
              }}>{r.theirs ? "✓" : "✕"}</span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10.5, color: "#8A8A9A" }}>
                {r.theirsVal}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Slide: Clinicians (doctor stack) ---------- */
function SlideClinicians({ accent }: { accent: string }) {
  return (
    <div style={{
      position: "absolute", inset: 0,
      padding: "30px 26px 92px",
      display: "flex", flexDirection: "column",
    }}>
      <div style={{ textAlign: "center", marginBottom: 14 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 10,
          letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6B7C",
        }}>
          Scientific Advisory Board
        </div>
        <h3 style={{
          marginTop: 6,
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800, fontSize: 20, color: "#1A1A2E",
          letterSpacing: "-0.015em", lineHeight: 1.1, margin: "6px 0 0",
        }}>
          Recommended by <span style={{ color: accent }}>900+</span> physicians
        </h3>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 10, minHeight: 0 }}>
        {DOCTORS.slice(0, 3).map((d) => (
          <div key={d.name} style={{
            background: "white",
            borderRadius: 16,
            padding: "12px 16px",
            display: "flex", alignItems: "center", gap: 14,
            boxShadow: "0 6px 16px rgba(102,71,156,0.10), inset 0 0 0 1px rgba(26,26,46,0.04)",
          }}>
            <div style={{
              position: "relative",
              width: 54, height: 54, borderRadius: 999,
              flexShrink: 0,
              background: "linear-gradient(135deg, #F3F0FF 0%, #E8E6F0 100%)",
              padding: 2.5,
            }}>
              <div style={{
                width: "100%", height: "100%", borderRadius: 999, overflow: "hidden",
                background: "#EEE",
              }}>
                <img src={d.img} alt={d.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div style={{
                position: "absolute", bottom: -1, right: -1,
                width: 16, height: 16, borderRadius: 999,
                background: "#1F8A5B", color: "white",
                display: "grid", placeItems: "center",
                fontSize: 9, fontWeight: 900,
                border: "2px solid white",
              }}>✓</div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 14.5, color: "#1A1A2E", letterSpacing: "-0.01em" }}>
                {d.name}
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11.5, color: "#6B6B7C", marginTop: 1 }}>
                {d.role}
              </div>
              <div style={{
                display: "inline-block",
                marginTop: 4,
                fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 9.5,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: accent, background: "#F3F0FF",
                padding: "2.5px 7px", borderRadius: 999,
              }}>{d.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Slide: Ingredients (grid with images) ---------- */
function SlideIngredients({ accent }: { accent: string }) {
  return (
    <div style={{
      position: "absolute", inset: 0,
      padding: "26px 22px 86px",
      display: "flex", flexDirection: "column",
    }}>
      <div style={{ textAlign: "center", marginBottom: 14 }}>
        <div style={{
          fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 10,
          letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6B7C",
        }}>Inside the bottle</div>
        <h3 style={{
          marginTop: 4,
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800, fontSize: 19, color: "#1A1A2E",
          letterSpacing: "-0.015em", lineHeight: 1.1, margin: "4px 0 0",
        }}>
          <span style={{ color: accent }}>8</span> Ayurvedic actives, clinically researched
        </h3>
      </div>

      <div style={{
        flex: 1, display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 8,
        minHeight: 0,
      }}>
        {INGREDIENTS.map((ing) => (
          <div key={ing.name} style={{
            background: "white",
            borderRadius: 12,
            padding: "8px 10px",
            boxShadow: "0 4px 10px rgba(102,71,156,0.08), inset 0 0 0 1px rgba(26,26,46,0.04)",
            display: "flex", alignItems: "center", gap: 10,
            minWidth: 0,
          }}>
            <div style={{
              width: 46, height: 46, borderRadius: 12,
              background: "linear-gradient(135deg, #F7F4FF 0%, #EFEAF8 100%)",
              flexShrink: 0,
              display: "grid", placeItems: "center",
              overflow: "hidden",
              border: "1px solid rgba(102,71,156,0.10)",
            }}>
              <img src={ing.img} alt={ing.name} style={{ width: "112%", height: "112%", objectFit: "contain", transform: "scale(1.05)" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 11.5,
                color: "#1A1A2E", letterSpacing: "-0.005em", lineHeight: 1.15,
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
              }}>{ing.name}</div>
              <div style={{
                fontFamily: "Inter, sans-serif", fontSize: 9.5, color: accent, fontWeight: 700,
                letterSpacing: "0.02em", marginTop: 1,
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
              }}>{ing.sub}</div>
              <div style={{
                fontFamily: "Inter, sans-serif", fontSize: 10, color: "#6B6B7C", marginTop: 2, lineHeight: 1.25,
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
              }}>{ing.benefit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Slide: Guarantee (clean shield) ---------- */
function SlideGuarantee({ accent }: { accent: string }) {
  return (
    <div style={{
      position: "absolute", inset: 0,
      padding: "32px 28px 86px",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center",
      background: "linear-gradient(180deg, #F6F1E8 0%, #EBE0CC 100%)",
    }}>
      {/* Decorative laurels */}
      <svg viewBox="0 0 320 80" width="220" height="56" style={{ marginBottom: -8, opacity: 0.55 }}>
        <g fill="none" stroke="#1A1A2E" strokeWidth="1.4" strokeLinecap="round">
          <path d="M30 40 Q 90 18, 160 22" />
          <path d="M290 40 Q 230 18, 160 22" />
          {[...Array(6)].map((_, k) => {
            const t = 0.15 + k * 0.13;
            const xL = 30 + (160 - 30) * t;
            const yL = 40 - Math.sin(t * Math.PI) * 22;
            const xR = 290 - (290 - 160) * t;
            const yR = 40 - Math.sin(t * Math.PI) * 22;
            return (
              <g key={k}>
                <ellipse cx={xL} cy={yL} rx="9" ry="3.2" transform={`rotate(${-40 + k * 12} ${xL} ${yL})`} />
                <ellipse cx={xR} cy={yR} rx="9" ry="3.2" transform={`rotate(${40 - k * 12} ${xR} ${yR})`} />
              </g>
            );
          })}
        </g>
      </svg>

      {/* Main display */}
      <div style={{
        fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 10,
        letterSpacing: "0.22em", textTransform: "uppercase", color: "#6B6B7C",
      }}>
        The FlowVeda Promise
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 14, marginBottom: 4 }}>
        <div style={{
          fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
          fontSize: 96, color: accent, lineHeight: 0.9, letterSpacing: "-0.04em",
        }}>60</div>
        <div style={{ textAlign: "left" }}>
          <div style={{
            fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
            fontSize: 26, color: "#1A1A2E", lineHeight: 1, letterSpacing: "-0.02em",
          }}>Day</div>
          <div style={{
            fontFamily: "Newsreader, serif", fontStyle: "italic", fontWeight: 400,
            fontSize: 22, color: "#1A1A2E", lineHeight: 1, marginTop: 4,
          }}>Awakening</div>
        </div>
      </div>

      <div style={{
        marginTop: 12,
        display: "inline-flex", alignItems: "center", gap: 8,
        background: "white", padding: "8px 14px", borderRadius: 999,
        boxShadow: "0 4px 14px rgba(26,26,46,0.08)",
      }}>
        <span style={{
          width: 18, height: 18, borderRadius: 999, background: "#1F8A5B",
          color: "white", fontSize: 11, fontWeight: 900,
          display: "grid", placeItems: "center",
        }}>✓</span>
        <span style={{
          fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 11.5,
          letterSpacing: "0.08em", textTransform: "uppercase", color: "#1A1A2E",
        }}>
          Or your money back · No questions
        </span>
      </div>

      <p style={{
        fontFamily: "Inter, sans-serif", fontSize: 12.5, color: "#6B6B7C",
        lineHeight: 1.55, maxWidth: 320, margin: "16px 0 0",
      }}>
        Two months of FlowVeda®, taken daily. If the room doesn&apos;t get quieter, we&apos;ll send every cent back.
      </p>
    </div>
  );
}

/* ---------- Stat (left column trust row) ---------- */
function Stat({ n, label, text, mute, divider }: { n: string; label: string; text: string; mute: string; divider: string }) {
  return (
    <div style={{ borderLeft: `1px solid ${divider}`, paddingLeft: 18, marginLeft: -1 }}>
      <div style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontWeight: 800,
        fontSize: 22,
        letterSpacing: "-0.02em",
        color: text,
        lineHeight: 1,
        marginBottom: 6,
      }}>{n}</div>
      <div style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 10.5,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: mute,
        fontWeight: 600,
      }}>{label}</div>
    </div>
  );
}

/* ---------- Hero (main) ---------- */
export default function HeroDads() {
  const accent =
    (ACCENT_TONE as string) === "Pink" ? "#EC81B4" :
    (ACCENT_TONE as string) === "Blue" ? "#1E466B" :
    "#8265B8";

  const heroBackgrounds: Record<string, string> = {
    Bone:     "#F5F2EC",
    White:    "#FFFFFF",
    Lavender: "#F3EEF8",
    Cloud:    "#EEF0EA",
    Slate:    "#15192E",
  };
  const isLight = HERO_BG !== "Slate";
  const text = isLight ? "#1A1A2E" : "white";
  const textMuted = isLight ? "rgba(26,26,46,0.65)" : "rgba(255,255,255,0.78)";
  const divider = isLight ? "rgba(26,26,46,0.12)" : "rgba(255,255,255,0.14)";

  return (
    <div style={{ background: "white", fontFamily: "Inter, sans-serif" }}>
      {/* Promo bar */}
      <div style={{
        background: "#0E0E1A", color: "white", textAlign: "center",
        padding: "11px 24px",
        fontFamily: "Inter, sans-serif", fontSize: 12.5, fontWeight: 700,
        letterSpacing: "0.06em",
      }}>
        <span>SAVE 49% + FREE SHIPPING</span>
        <span style={{ fontStyle: "italic", fontFamily: "Newsreader, serif", fontWeight: 400, opacity: 0.78, margin: "0 12px" }}>
          on the 60-Day Awakening
        </span>
        <a href="#get-started" style={{ color: "#EC81B4", textDecoration: "none", fontWeight: 800, letterSpacing: "0.1em" }}>
          START →
        </a>
      </div>

      {/* Logo bar */}
      <div style={{
        background: "#1A1A2E",
        padding: "18px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <img src="/images/dads-hero/flowveda-logo.png" alt="FlowVeda" style={{ height: 34, width: "auto" }} />
      </div>

      {/* Hero */}
      <section style={{
        background: heroBackgrounds[HERO_BG],
        color: text,
        position: "relative",
        overflow: "hidden",
      }}>
        {!isLight && (
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle at 20% 110%, rgba(130,101,184,0.18) 0%, transparent 50%)",
            pointerEvents: "none",
          }} />
        )}

        <div className="hero-grid" style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "72px 56px 64px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 72,
          alignItems: "center",
          position: "relative",
        }}>
          {/* LEFT */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center",
              background: isLight ? "#1A1A2E" : "rgba(255,255,255,0.08)",
              border: isLight ? "none" : "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              color: "white",
              borderRadius: 999,
              padding: "9px 18px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}>
              {EYEBROW}
            </div>

            <h1 style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(34px, 3.8vw, 52px)",
              lineHeight: 1.04,
              letterSpacing: "-0.022em",
              margin: "22px 0 20px",
              color: text,
              maxWidth: 600,
            }}>
              5 Reasons the dad{" "}
              <span style={{
                fontFamily: "Newsreader, serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: accent,
              }}>your kids want</span>{" "}
              has stopped showing up at 6PM.
            </h1>

            <p style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 15,
              lineHeight: 1.55,
              color: textMuted,
              maxWidth: 520,
              margin: "0 0 28px",
            }}>
              You used to come home and{" "}
              <em style={{ fontFamily: "Newsreader, serif", fontStyle: "italic", color: text }}>be there</em>.
              {" "}Now you walk through the door already gone. Your stress response is running the show, and every &ldquo;just push through&rdquo; makes it louder. FlowVeda® rebuilds the pause between trigger and reaction, in 60 days.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap", marginBottom: 40 }}>
              <a href="#get-started" style={{
                background: isLight ? "#1A1A2E" : "white",
                color: isLight ? "white" : "#1A1A2E",
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: 13.5,
                letterSpacing: "0.1em",
                padding: "18px 34px",
                borderRadius: 999,
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                transition: "transform 0.2s",
                display: "inline-block",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
                {CTA_COPY}
              </a>
              <a href="#five-reasons" style={{
                color: text,
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "underline",
                textUnderlineOffset: 5,
                textDecorationColor: divider,
                textDecorationThickness: 1.5,
              }}>
                See the 5 Reasons ↓
              </a>
            </div>

            <div style={{
              borderTop: `1px solid ${divider}`,
              paddingTop: 28,
              display: "grid",
              gridTemplateColumns: "auto auto auto 1fr",
              gap: 28,
              alignItems: "center",
              maxWidth: 620,
            }}>
              <Stat n="900+" label="Clinicians' Choice" text={text} mute={textMuted} divider={divider} />
              <Stat n="60-Day" label="Money-Back" text={text} mute={textMuted} divider={divider} />
              <Stat n="Zero" label="Caffeine" text={text} mute={textMuted} divider={divider} />
              <div style={{
                borderLeft: `1px solid ${divider}`,
                paddingLeft: 22,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 999,
                  background: isLight ? "rgba(31,138,91,0.10)" : "rgba(255,255,255,0.08)",
                  border: `1px solid ${isLight ? "rgba(31,138,91,0.25)" : "rgba(255,255,255,0.16)"}`,
                  flexShrink: 0,
                  display: "grid", placeItems: "center",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isLight ? "#1F8A5B" : "white"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3 4.5 6v6c0 5 3.5 8 7.5 9 4-1 7.5-4 7.5-9V6L12 3Z" /><path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: "0.18em", color: textMuted, textTransform: "uppercase", fontWeight: 700 }}>
                    Clinicians&apos; Choice
                  </div>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 14, color: text, marginTop: 2 }}>
                    Verified by FrontRow MD
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right" style={{ height: 560, position: "relative" }}>
            <RightCard accent={accent} />
          </div>
        </div>

        {/* Marquee */}
        <div style={{
          background: isLight ? "white" : "rgba(255,255,255,0.04)",
          borderTop: `1px solid ${divider}`,
          padding: "16px 0",
          overflow: "hidden",
          position: "relative",
        }}>
          <div style={{
            display: "flex",
            gap: 56,
            animation: "marquee 38s linear infinite",
            whiteSpace: "nowrap",
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: isLight ? "#1A1A2E" : "rgba(255,255,255,0.85)",
          }}>
            {[...Array(2)].flatMap((_, r) => [
              "★  900+ Clinicians' Choice",
              "✦  60-Day Money-Back",
              "🇺🇸  Made in USA",
              "⚡  Zero Caffeine",
              "✓  Third-Party Tested",
              "🌿  Ayurvedic Adaptogens",
              "🧪  90-Day Clinical Trial",
            ].map((s, i) => (
              <span key={`${r}-${i}`} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {s}
                <span style={{ opacity: 0.4 }}>•</span>
              </span>
            )))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 48px 48px 40px !important;
          }
          .hero-right {
            height: 560px !important;
            max-width: 560px;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (max-width: 640px) {
          .hero-grid {
            padding: 36px 28px 32px !important;
          }
          .hero-right {
            height: 520px !important;
          }
        }
      `}</style>
    </div>
  );
}
