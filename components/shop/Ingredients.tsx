const ingredients = [
  {
    name: "KSM-66® Ashwagandha",
    pills: ["Ayurvedic", "Adaptogen"],
    note: "Supports healthy cortisol levels and the body's stress response.",
    img: "/images/ingredient-ashwagandha.png",
    alt: "KSM-66 Ashwagandha root extract. Clinically studied Ayurvedic adaptogen.",
  },
  {
    name: "Lion's Mane Mushroom",
    pills: ["Ayurvedic", "Mushroom"],
    note: "Supports Nerve Growth Factor and the neural pathways behind neuroplasticity.",
    img: "/images/ingredient-lions-mane.png",
    alt: "Lion's Mane mushroom. Supports Nerve Growth Factor and neural pathways.",
  },
  {
    name: "Bacopa Monnieri",
    pills: ["Ayurvedic"],
    note: "Supports memory, learning, and sustained attention.",
    img: "/images/ingredient-bacopa.png",
    alt: "Bacopa Monnieri. Ayurvedic herb supporting memory and learning.",
  },
  {
    name: "Rhodiola Rosea",
    pills: ["Ayurvedic", "Adaptogen"],
    note: "Helps the body adapt to and endure mental and physical stress.",
    img: "/images/ingredient-rhodiola.png",
    alt: "Rhodiola Rosea. Adaptogen that helps the body adapt to stress.",
  },
  {
    name: "L-Theanine",
    pills: ["Ayurvedic", "Amino Acid"],
    note: "Promotes a calm, alert state of relaxed focus.",
    img: "/images/ingredient-l-theanine.png",
    alt: "L-Theanine. Amino acid promoting calm, alert focus.",
  },
  {
    name: "N-Acetyl L-Tyrosine",
    pills: ["Amino Acid"],
    note: "Supports neurotransmitter production for focus under stress.",
    img: "/images/ingredient-nalt.png",
    alt: "N-Acetyl L-Tyrosine. Supports neurotransmitter production under stress.",
  },
  {
    name: "Vitamin B6",
    pills: ["Vitamin"],
    note: "A cofactor in healthy neurotransmitter synthesis.",
    img: "/images/ingredient-vitamin-b6.png",
    alt: "Vitamin B6. Cofactor in healthy neurotransmitter synthesis.",
  },
  {
    name: "Folate",
    pills: ["Vitamin"],
    note: "Supports methylation pathways and neurotransmitter balance.",
    img: "/images/ingredient-folate.png",
    alt: "Folate. Supports methylation and neurotransmitter balance.",
  },
];

export default function Ingredients() {
  return (
    <section className="fv-section bg-fv-bone">
      <div className="fv-container">
        <div className="text-center max-w-[760px] mx-auto mb-12">
          <span className="fv-eyebrow justify-center inline-flex mb-7">The Formula</span>
          <h2 className="fv-display mb-6">
            Ancient formulation. <em>Modern validation.</em>
          </h2>
          <p className="fv-body-lead text-[24px] leading-[1.6]">
            Eight ingredients, each with a specific role in stress response, cognitive clarity, and sustained awareness. All backed by cited clinical research.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12">
          {ingredients.map((ing, i) => (
            <a
              key={i}
              href={`https://flowveda.com/ingredients/${ing.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
              className="bg-white border-2 border-fv-blue rounded-2xl overflow-hidden shadow-fv-ing hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(45,96,144,0.28)] transition-all duration-200 block"
            >
              <div className="aspect-[16/10] bg-fv-purple-light overflow-hidden">
                <img src={ing.img} alt={ing.alt} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {ing.pills.map((pill, j) => (
                    <span
                      key={j}
                      className="font-body font-bold text-[10px] tracking-[0.10em] uppercase text-fv-purple bg-fv-purple-light border border-fv-purple/30 rounded-full px-2.5 py-1"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-[20px] leading-tight text-fv-charcoal mb-2 tracking-[-0.01em]">{ing.name}</h3>
                <p className="font-body text-[18px] text-fv-text-body leading-snug">{ing.note}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://flowveda.com/ingredients"
            className="inline-block font-body font-bold text-[14px] tracking-[0.10em] uppercase text-fv-charcoal border-2 border-fv-charcoal rounded-[10px] px-9 py-4 hover:bg-fv-charcoal hover:text-white transition-all duration-200"
          >
            See the Full Formula
          </a>
        </div>
      </div>
    </section>
  );
}
