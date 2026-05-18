import PromoBar from "@/components/shop/PromoBar";
import Hero from "@/components/shop/Hero";
import Benefits from "@/components/shop/Benefits";
import Problem from "@/components/shop/Problem";
import Outcomes from "@/components/shop/Outcomes";
import PressLogos from "@/components/shop/PressLogos";
import DoctorTrust from "@/components/shop/DoctorTrust";
import CustomerReviews from "@/components/shop/CustomerReviews";
import Comparison from "@/components/shop/Comparison";
import Ingredients from "@/components/shop/Ingredients";
import BuyBox from "@/components/shop/BuyBox";
import Guarantee from "@/components/shop/Guarantee";
import FinalClose from "@/components/shop/FinalClose";
import Footer from "@/components/shop/Footer";
import StickyMobileCTA from "@/components/shop/StickyMobileCTA";

export default function ShopPage() {
  return (
    <main className="overflow-x-hidden">
      <PromoBar />
      <Hero />
      <DoctorTrust />
      <PressLogos />
      <Benefits />
      <Problem />
      <Outcomes />
      <BuyBox />
      <Comparison />
      <Ingredients />
      <Guarantee />
      <FinalClose />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
