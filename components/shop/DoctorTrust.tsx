"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { CLINICIAN_COUNT } from "@/lib/constants";

const doctors = [
  { name: "Dr. Joseph Raccuglia, MD", practice: "Family Medicine", years: "30+ Years",
    photo: "/images/doctor-raccuglia.png",
    quote: "I share this with my patients as an option for its ability to aid focus." },
  { name: "Dr. John Kasper, DO", practice: "Internal Medicine", years: "30+ Years",
    photo: "/images/doctor-kasper.png",
    quote: "I recommend this for people who want to feel relaxed enough to focus without stimulants." },
  { name: "Dr. Rajeev Grover, MD", practice: "Internal Medicine", years: "30+ Years",
    photo: "/images/doctor-grover.png",
    quote: "I recommend this to my patients for its promising benefits for recall and cognition." },
  { name: "Dr. Nicholas Biassotto", practice: "Family Medicine", years: "45+ Years",
    photo: "/images/doctor-biasotto.png",
    quote: "Keeps your ability to pay attention steady by reducing stress interference." },
  { name: "Dr. Lloyd Pina, NP", practice: "Family Medicine", years: "10+ Years",
    photo: "/images/doctor-pina.png",
    quote: "It does a good job and can help you gain control over your focus." },
  { name: "Dr. Judy Pierson, FNP", practice: "Internal Medicine", years: "13+ Years",
    photo: "/images/doctor-pierson.png",
    quote: "Can help the body handle mental strain so you can better focus." },
  { name: "Dr. William Fader, NP", practice: "Family Medicine", years: "5 Years",
    photo: "/images/doctor-fader.png",
    quote: "Steadies the mind and keeps you mentally sharp, even under pressure." },
  { name: "Dr. Sabeena Faiz, NP", practice: "Primary Care", years: "18+ Years",
    photo: "/images/doctor-faiz.png",
    quote: "Helps my patients cope with stress while maintaining focus." },
  { name: "Dr. Jessica Turner, NP", practice: "Family Medicine", years: "10+ Years",
    photo: "/images/doctor-turner.png",
    quote: "Provides the nutrients needed for calmness and clear thinking." },
];

export default function DoctorTrust() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w > 1100 ? 4 : w > 800 ? 3 : w > 560 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, doctors.length - perView);

  const tick = useCallback(() => {
    if (paused || document.hidden) return;
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [paused, maxIndex]);

  useEffect(() => {
    intervalRef.current = setInterval(tick, 4500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [tick]);

  const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="bg-white py-12 md:py-16 px-6 md:px-9">
      <div className="fv-container">
        {/* Compact header lockup */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 mb-10 max-w-[1100px] mx-auto">
          <div className="flex-shrink-0">
            <Image
              src="/images/clinicians-choice-badge.svg"
              alt={`${CLINICIAN_COUNT}+ Clinicians' Choice, Verified by FrontRow MD`}
              width={398}
              height={81}
              className="h-[56px] md:h-[64px] w-auto"
            />
          </div>
          <div className="text-center md:text-left flex-1 min-w-0">
            <h2 className="font-display font-extrabold text-fv-midnight tracking-[-0.02em] leading-[1.1] mb-1.5"
                style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
              Trusted by <span className="font-sub text-fv-purple" style={{ fontStyle: "italic", fontWeight: 500 }}>{CLINICIAN_COUNT}+ physicians.</span>
            </h2>
            <p className="font-body text-[14px] md:text-[15px] text-fv-charcoal-soft leading-[1.5] m-0">
              Doctors independently sharing FlowVeda® with patients. Not paid. Verified.
            </p>
          </div>
        </div>

        {/* Compact carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-4 transition-transform duration-700 ease-out"
            style={{ transform: `translateX(calc(-${index} * (100% / ${perView} + ${16 / perView}px)))` }}
          >
            {doctors.map((doc, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-fv-blue border border-fv-purple/60 rounded-xl p-4 flex flex-col items-center text-center shadow-fv-card"
                style={{ flex: `0 0 calc((100% - ${(perView - 1) * 16}px) / ${perView})` }}
              >
                <div className="w-[88px] h-[88px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden mb-2.5 ring-2 ring-fv-purple/40">
                  <img src={doc.photo} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-display font-bold text-white text-[14px] md:text-[15px] leading-tight">{doc.name}</p>
                <p className="font-body font-medium text-[#E8E5ED] text-[12px] md:text-[13px] leading-tight mt-0.5">{doc.practice}</p>
                <p className="font-body font-medium text-[#B8B5C0] text-[10px] tracking-[0.10em] uppercase mt-1.5">{doc.years}</p>
                <div className="border-t border-fv-purple/40 w-full pt-3 mt-3 flex-1 flex items-start">
                  <p className="font-body text-[#F0EDEA] text-[12.5px] md:text-[13px] leading-[1.5]">&ldquo;{doc.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-7">
          <button onClick={prev} aria-label="Previous doctor" className="w-10 h-10 rounded-full bg-white border border-fv-border text-fv-charcoal text-base flex items-center justify-center hover:bg-fv-purple-light hover:border-fv-purple transition-colors">←</button>
          <button onClick={next} aria-label="Next doctor" className="w-10 h-10 rounded-full bg-white border border-fv-border text-fv-charcoal text-base flex items-center justify-center hover:bg-fv-purple-light hover:border-fv-purple transition-colors">→</button>
        </div>
      </div>
    </section>
  );
}
