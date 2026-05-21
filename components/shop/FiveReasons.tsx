import Image from "next/image";

type Reason = {
  num: string;
  headline: string;
  body: React.ReactNode;
  tags: string[];
  proofKind: "ingredients" | "quote" | "stat" | "image" | "math";
  proofContent: React.ReactNode;
};

const reasons: Reason[] = [
  {
    num: "01",
    headline: "Why Your Fuse Got Short. And It's Not \"Just Getting Older.\"",
    body: (
      <>
        The first sign isn&apos;t a thought. It&apos;s a tone. The way the
        words come out when your son asks for the third time. The reason
        isn&apos;t that you&apos;ve gotten less patient. It&apos;s that your
        stress response has gotten more reactive. Cortisol that should rise in
        the morning and fall by dinner stays elevated through the day. Your
        nervous system is in sympathetic mode by the time you walk through the
        door, which means the first frustration of the evening lands on a
        system that&apos;s already at 80%. You don&apos;t choose the snap. The
        snap chooses you.
        <br />
        <br />
        FlowVeda® includes <strong>KSM-66® Ashwagandha</strong>, the
        clinically studied adaptogen extract, to support a healthy stress
        response, and <strong>Rhodiola Rosea</strong> to support resilience
        under sustained pressure. Two ingredients with one job: lower the
        noise floor of your nervous system, so the first ask of the evening
        doesn&apos;t have to land on a system at 80%.
      </>
    ),
    tags: ["KSM-66® Ashwagandha", "Rhodiola Rosea", "Adaptogens"],
    proofKind: "quote",
    proofContent: (
      <>
        <p className="font-sub italic text-fv-charcoal text-[17px] md:text-[18px] leading-[1.5] mb-4">
          &ldquo;The first thing my wife noticed was that I stopped barking on
          the third question. Five weeks in and the kids feel different around
          me.&rdquo;
        </p>
        <div className="font-body text-[13px] text-fv-charcoal-soft">
          <span className="font-bold text-fv-charcoal">Marcus T.</span>
          <span className="mx-2">·</span>
          Verified Customer · FlowClub™ member
        </div>
      </>
    ),
  },
  {
    num: "02",
    headline: "You're Tired All Day. And Wired at 11pm. Both Are the Same Problem.",
    body: (
      <>
        By 3pm you can&apos;t think straight. By 11pm you can&apos;t sleep.
        Both of those are the same dysregulation: your sympathetic nervous
        system stuck on, and your parasympathetic (the <em>off switch</em>)
        never fully engaging. Coffee makes the 3pm slump worse by 11pm.
        Melatonin papers over the symptom without addressing the input. The
        state you&apos;re missing is something Ayurveda has a name for and
        modern research now backs: <em>calm alertness</em>. Awake without
        being amped.
        <br />
        <br />
        FlowVeda® includes <strong>L-Theanine</strong>, an amino acid that
        supports the calm, focused state, and{" "}
        <strong>N-Acetyl L-Tyrosine (NALT)</strong> to support focus and
        motivation chemistry without spiking your nervous system. It&apos;s
        not a sedative. It&apos;s not a stimulant. It&apos;s the state where
        the pause becomes accessible.
      </>
    ),
    tags: ["L-Theanine", "N-Acetyl L-Tyrosine", "Calm-Focus Aminos"],
    proofKind: "stat",
    proofContent: (
      <div className="grid grid-cols-2 gap-6 text-center">
        <div>
          <div className="font-display font-extrabold text-fv-purple text-[56px] md:text-[64px] leading-none tracking-[-0.025em] mb-2">
            488ms
          </div>
          <p className="font-body text-[13px] text-fv-charcoal leading-[1.4]">
            the half-second between stimulus and reaction. FlowVeda® supports
            the calm state where it becomes accessible.
          </p>
        </div>
        <div>
          <div className="font-display font-extrabold text-fv-purple text-[56px] md:text-[64px] leading-none tracking-[-0.025em] mb-2">
            0mg
          </div>
          <p className="font-body text-[13px] text-fv-charcoal leading-[1.4]">
            of caffeine. The calm-focus axis works <em>with</em> your nervous
            system, not against it.
          </p>
        </div>
      </div>
    ),
  },
  {
    num: "03",
    headline: "The Names. The Birthdays. The \"What Were We Just Talking About.\" That Isn't Your Age.",
    body: (
      <>
        The teacher&apos;s name slips. The thing you were going to grab from
        the kitchen is gone by the time you get there. You&apos;re convinced
        something is wrong. There usually isn&apos;t. Chronic stress shifts
        where your brain spends its energy, toward threat scanning, away from
        the working-memory circuits that hold a name, a context, a thread of
        conversation. The memory isn&apos;t gone. The bandwidth to retrieve it
        is being spent somewhere else.
        <br />
        <br />
        FlowVeda® includes <strong>Bacopa Monnieri</strong>, an Ayurvedic
        herb traditionally used to support memory and the ability to hold
        attention where you place it, alongside <strong>Vitamin B6</strong>{" "}
        and <strong>Folate</strong> to support the foundation chemistry your
        brain&apos;s signaling system runs on. Bring the bandwidth back where
        the names live.
      </>
    ),
    tags: ["Bacopa Monnieri", "Vitamin B6", "Folate (Methylated)"],
    proofKind: "ingredients",
    proofContent: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-fv-border">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/images/ingredient-bacopa.png"
              alt="Bacopa Monnieri"
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
          <div>
            <div className="font-body font-bold text-[14px] text-fv-charcoal">
              Bacopa Monnieri
            </div>
            <div className="font-body text-[12px] text-fv-charcoal-soft">
              Memory and sustained attention
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-fv-border">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/images/ingredient-vitamin-b6.png"
              alt="Vitamin B6"
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
          <div>
            <div className="font-body font-bold text-[14px] text-fv-charcoal">
              Vitamin B6
            </div>
            <div className="font-body text-[12px] text-fv-charcoal-soft">
              Neurotransmitter signaling cofactor
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-fv-border">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/images/ingredient-folate.png"
              alt="Folate"
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
          <div>
            <div className="font-body font-bold text-[14px] text-fv-charcoal">
              Folate (Methylated)
            </div>
            <div className="font-body text-[12px] text-fv-charcoal-soft">
              The foundation chemistry the rest builds on
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: "04",
    headline: "Your Brain Is Still Plastic. You Just Stopped Feeding It.",
    body: (
      <>
        Here&apos;s the part most men over 35 don&apos;t know: your brain is
        still building new pathways every week. Neuroplasticity doesn&apos;t
        stop at 25. But the <em>signal</em> that drives it can quiet down
        under chronic stress, poor sleep, and the years of &ldquo;I&apos;ll
        handle that later.&rdquo; When the signal is quiet, you stop adapting.
        You feel set in your ways even when you don&apos;t want to be. Your
        kid changes faster than you can adjust.
        <br />
        <br />
        FlowVeda® includes <strong>Lion&apos;s Mane Mushroom</strong>, which
        research has explored for its role in supporting Nerve Growth Factor:
        the molecule behind your brain&apos;s ability to adapt and build new
        pathways. You&apos;re not too old to learn how your son listens this
        year. You just need the signal turned back up.
      </>
    ),
    tags: ["Lion's Mane Mushroom", "Neuroplasticity Support"],
    proofKind: "image",
    proofContent: (
      <div className="relative rounded-2xl overflow-hidden border border-fv-border aspect-[4/3] bg-fv-bone">
        <Image
          src="/images/Neurons.webp"
          alt="Neural pathways supported by Lion's Mane Mushroom."
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="font-sub italic text-white text-[15px] leading-[1.4]">
            Lion&apos;s Mane. Explored in research for supporting the brain&apos;s ability to adapt and build.
          </p>
        </div>
      </div>
    ),
  },
  {
    num: "05",
    headline: "Why Coffee Has Stopped Working. And Why That's Information, Not a Coffee Problem",
    body: (
      <>
        You drink more and feel less. You added a pre-workout. You tried the
        mushroom coffee. Nothing lasts. That isn&apos;t because coffee got
        weaker. It&apos;s because the <em>system</em> coffee borrows from
        (your adrenal output, your dopamine response, your B-vitamin reserves)
        is running low. Stimulants borrow against tomorrow to get you through
        this afternoon. After enough afternoons, the bill comes due.
        <br />
        <br />
        FlowVeda® takes the opposite approach: zero caffeine, zero stimulants.
        Eight ingredients ({" "}
        <strong>
          KSM-66® Ashwagandha, Rhodiola Rosea, Lion&apos;s Mane, Bacopa
          Monnieri, L-Theanine, NALT, Vitamin B6, Folate
        </strong>
        ), each with one job in the calm-focus equation. Not borrowed energy.{" "}
        <em>Replenished</em> capacity. The kind that&apos;s still there at
        bedtime, and the kind your kids will recognize.
      </>
    ),
    tags: ["All 8 Ingredients", "Caffeine-Free", "60-Day Guarantee"],
    proofKind: "math",
    proofContent: (
      <div className="rounded-2xl bg-fv-midnight text-white p-6 md:p-7">
        <div className="font-body font-extrabold text-[11px] tracking-[0.18em] uppercase text-fv-pink mb-4">
          The Math
        </div>
        <ul className="space-y-3 font-body text-[15px] md:text-[16px] leading-[1.5]">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-fv-pink text-fv-midnight flex items-center justify-center text-[11px] font-extrabold">
              60
            </span>
            <span>days of FlowVeda® in every Awakening</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-fv-pink text-fv-midnight flex items-center justify-center text-[11px] font-extrabold">
              8
            </span>
            <span>clinically studied ingredients, every dose on the label</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-fv-pink text-fv-midnight flex items-center justify-center text-[11px] font-extrabold">
              0
            </span>
            <span>caffeine. No spike. No 3pm crash. No 11pm wired-tired.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-fv-pink text-fv-midnight flex items-center justify-center text-[11px] font-extrabold">
              900+
            </span>
            <span>physicians' Clinicians' Choice</span>
          </li>
        </ul>
        <div className="h-px bg-white/15 my-5" />
        <p className="font-body text-[14px] leading-[1.55] text-white/90">
          If the dad your kids want isn&apos;t showing up again by day 60, email us. Every dollar back. No return. No questions.{" "}
          <span className="font-bold text-fv-pink">You walk away whole.</span>
        </p>
      </div>
    ),
  },
];

function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-fv-purple-light text-fv-purple-deep font-body font-bold text-[11px] md:text-[12px] tracking-[0.05em] uppercase px-3 py-1.5 border border-fv-purple/15">
      {children}
    </span>
  );
}

export default function FiveReasons() {
  return (
    <section id="five-reasons" className="bg-fv-bone py-16 md:py-24">
      <div className="fv-container">
        {/* Section header */}
        <div className="text-center max-w-[720px] mx-auto mb-14 md:mb-20">
          <span className="font-body font-extrabold text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-fv-purple mb-4 inline-block">
            The 5 Reasons
          </span>
          <h2
            className="font-display font-extrabold text-fv-midnight tracking-[-0.02em] leading-[1.05] mb-5"
            style={{ fontSize: "clamp(32px, 4.4vw, 48px)" }}
          >
            The Dad Your Kids Want Is{" "}
            <span className="font-sub italic text-fv-purple font-medium">still in there.</span>
          </h2>
          <p className="font-body text-[17px] md:text-[18px] text-fv-charcoal-soft leading-[1.55]">
            Five things every probiotic, every focus pill, and every cup of coffee has missed.
          </p>
        </div>

        {/* The 5 reasons */}
        <div className="space-y-14 md:space-y-20 max-w-[1180px] mx-auto">
          {reasons.map((r, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={r.num}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center"
              >
                {/* Copy column */}
                <div className={reverse ? "md:order-2" : ""}>
                  {/* Big number */}
                  <div
                    className="font-display font-extrabold text-fv-purple/25 leading-none tracking-[-0.03em] mb-3"
                    style={{ fontSize: "clamp(72px, 9vw, 120px)" }}
                  >
                    {r.num}
                  </div>

                  {/* Headline */}
                  <h3
                    className="font-display font-extrabold text-fv-midnight tracking-[-0.02em] leading-[1.1] mb-5"
                    style={{ fontSize: "clamp(26px, 3.2vw, 36px)" }}
                  >
                    {r.headline}
                  </h3>

                  {/* Body */}
                  <div className="font-body text-[16px] md:text-[17px] text-fv-charcoal-soft leading-[1.6] mb-6">
                    {r.body}
                  </div>

                  {/* Tag pills */}
                  <div className="flex flex-wrap gap-2">
                    {r.tags.map((t) => (
                      <TagPill key={t}>{t}</TagPill>
                    ))}
                  </div>
                </div>

                {/* Proof column */}
                <div className={reverse ? "md:order-1" : ""}>
                  <div
                    className={
                      r.proofKind === "math" || r.proofKind === "image"
                        ? ""
                        : "rounded-2xl bg-white border border-fv-border shadow-fv-card p-6 md:p-7"
                    }
                  >
                    {r.proofContent}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <a
            href="#get-started"
            className="inline-block bg-fv-grad-purple text-white font-body font-bold text-[14px] md:text-[15px] tracking-[0.10em] uppercase rounded-full px-10 md:px-12 py-[18px] md:py-[20px] shadow-fv-cta hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(102,71,156,0.55)] transition-all duration-200"
          >
            Start My 60-Day Awakening · Save 40%
          </a>
          <p className="mt-4 font-body text-[13px] text-fv-charcoal-soft">
            60-day money-back guarantee · Free US shipping · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
