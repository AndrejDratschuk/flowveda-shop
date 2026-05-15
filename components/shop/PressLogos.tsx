import Image from "next/image";

const logos = [
  { src: "/images/press/cnn.png", alt: "CNN", width: 120 },
  { src: "/images/press/msnbc.png", alt: "MSNBC", width: 130 },
  { src: "/images/press/fox-news.png", alt: "Fox News", width: 120 },
  { src: "/images/press/abc.png", alt: "ABC", width: 70 },
  { src: "/images/press/discovery.png", alt: "Discovery", width: 130 },
  { src: "/images/press/history.png", alt: "History", width: 110 },
  { src: "/images/press/ae.png", alt: "A&E", width: 70 },
  { src: "/images/press/paramount.png", alt: "Paramount", width: 130 },
  { src: "/images/press/hallmark.png", alt: "Hallmark", width: 130 },
  { src: "/images/press/food-network.png", alt: "Food Network", width: 130 },
  { src: "/images/press/hgtv.png", alt: "HGTV", width: 100 },
  { src: "/images/press/travel-channel.png", alt: "Travel Channel", width: 140 },
];

export default function PressLogos() {
  return (
    <section className="bg-white border-y border-fv-border py-10 md:py-12 px-6">
      <div className="fv-container">
        <p className="text-center font-body font-bold text-[12px] md:text-[13px] tracking-[0.22em] uppercase text-fv-charcoal-soft mb-7">
          As seen on
        </p>

        {/* Marquee — duplicated row for seamless loop */}
        <div className="relative overflow-hidden press-marquee-mask">
          <div className="flex gap-10 md:gap-14 items-center press-marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center h-10 md:h-12"
                aria-hidden={i >= logos.length ? "true" : undefined}
              >
                <Image
                  src={logo.src}
                  alt={i >= logos.length ? "" : logo.alt}
                  width={logo.width}
                  height={48}
                  className="h-full w-auto object-contain opacity-80 grayscale"
                  style={{ maxWidth: `${logo.width}px` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .press-marquee-mask {
          mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
        }
        .press-marquee-track {
          width: max-content;
          animation: press-marquee 38s linear infinite;
        }
        @keyframes press-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .press-marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
