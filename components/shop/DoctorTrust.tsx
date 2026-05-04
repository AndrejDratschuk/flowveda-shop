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

const translationCards = [
  { icon: "✓", text: "Calm focus without overstimulation" },
  { icon: "✓", text: "Reduced stress-driven reactivity" },
  { icon: "✓", text: "Clarity and emotional regulation" },
  { icon: "✓", text: "A different approach to nootropics" },
];

export default function DoctorTrust() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w > 900 ? 3 : w > 640 ? 2 : 1);
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
    <section className="fv-section bg-white">
      <div className="fv-container-md">
        {/* Section eyebrow — centered at top */}
        <div className="text-center mb-10">
          <span className="fv-eyebrow justify-center inline-flex">Doctor Trust</span>
        </div>

        {/* Badge + headline lockup — left-aligned to match carousel below */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-12 max-w-[1080px] mx-auto px-4 md:px-0">
          {/* Badge — 12% larger than v3.6 */}
          <div className="flex-shrink-0">
            <Image
              src="/images/clinicians-choice-badge.svg"
              alt={`${CLINICIAN_COUNT}+ Clinicians' Choice — Verified by FrontRow MD`}
              width={398}
              height={81}
              className="h-[76px] md:h-[86px] w-auto"
            />
          </div>

          {/* Headline + subline — wider container keeps "physicians." on one line */}
          <div className="text-center md:text-left flex-1 min-w-0">
            <h2 className="fv-display mb-3 whitespace-nowrap">
              Trusted by <em>{CLINICIAN_COUNT}+ physicians.</em>
            </h2>
            <p className="fv-body-lead text-[22px] leading-[1.6] max-w-[680px] whitespace-normal">
              Doctors independently sharing FlowVeda® with patients. Not paid. Verified.
            </p>
          </div>
        </div>

        {/* Translation pills — centered, redesigned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-[1080px] mx-auto">
          {translationCards.map((card, i) => (
            <div
              key={i}
              className="bg-white border-t-[3px] border-fv-purple rounded-xl p-5 shadow-fv-card flex items-start gap-3 hover:-translate-y-1 hover:shadow-fv-card-hover transition-all duration-200"
            >
              <div className="w-7 h-7 rounded-full bg-fv-purple text-white flex items-center justify-center flex-shrink-0 font-bold text-[14px]">
                {card.icon}
              </div>
              <p className="font-body text-[19px] font-semibold text-fv-charcoal leading-snug pt-0.5">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-6 transition-transform duration-700 ease-out"
            style={{ transform: `translateX(calc(-${index} * (100% / ${perView} + ${24 / perView}px)))` }}
          >
            {doctors.map((doc, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-fv-blue border border-fv-purple rounded-2xl p-6 flex flex-col items-center text-center shadow-fv-card"
                style={{ flex: `0 0 calc((100% - ${(perView - 1) * 24}px) / ${perView})` }}
              >
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-3">
                  <img src={doc.photo} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-display font-bold text-white text-[20px] mb-1">{doc.name}</p>
                <p className="font-body font-medium text-[#E8E5ED] text-[20px]">{doc.practice}</p>
                <p className="font-body font-medium text-[#B8B5C0] text-[18px] tracking-[0.12em] uppercase mb-3">{doc.years}</p>
                <div className="border-t border-fv-purple w-full pt-3 flex-1 flex items-start">
                  <p className="font-body text-[#F0EDEA] text-[18px] leading-[1.6]">&ldquo;{doc.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-10">
          <button onClick={prev} aria-label="Previous" className="w-12 h-12 rounded-full bg-fv-blue/70 border border-fv-purple/50 text-white text-xl flex items-center justify-center hover:bg-fv-blue transition-colors">←</button>
          <button onClick={next} aria-label="Next" className="w-12 h-12 rounded-full bg-fv-blue/70 border border-fv-purple/50 text-white text-xl flex items-center justify-center hover:bg-fv-blue transition-colors">→</button>
        </div>
      </div>
    </section>
  );
}
