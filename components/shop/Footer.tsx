import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-fv-midnight text-white/70 py-12 px-6">
      <div className="fv-container-md text-center space-y-6">
        {/* Logo replaces wordmark */}
        <div className="flex justify-center">
          <Image
            src="/images/flowveda-logo.png"
            alt="FlowVeda®"
            width={160}
            height={110}
            className="h-20 w-auto"
          />
        </div>

        <p className="font-body text-[12px] leading-[1.65] max-w-[760px] mx-auto italic text-white/55">
          These statements have not been evaluated by the Food and Drug Administration.
          This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[14px]">
          <a href="https://flowveda.com/our-story" className="hover:text-white transition-colors">Our Story</a>
          <a href="https://flowveda.com/mission" className="hover:text-white transition-colors">Our Mission</a>
          <a href="https://flowveda.com/products/flowveda-60-day-awakening" className="hover:text-white transition-colors">The Solution</a>
          <a href="https://flowveda.com/ingredients" className="hover:text-white transition-colors">The Ingredients</a>
          <a href="https://flowveda.com/science" className="hover:text-white transition-colors">The Science</a>
          <a href="https://flowveda.com/help-center" className="hover:text-white transition-colors">Help Center</a>
          <a href="https://flowveda.com/refund-policy" className="hover:text-white transition-colors">Refund Policy</a>
          <a href="https://flowveda.com/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="https://flowveda.com/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</a>
        </div>

        <p className="font-body text-[12px] text-white/40">
          © {new Date().getFullYear()} FlowVeda® LLC · 401 E Jackson St, Suite 3300 Tampa, FL 33602
        </p>
      </div>
    </footer>
  );
}
