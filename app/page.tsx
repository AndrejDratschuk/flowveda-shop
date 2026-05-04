import Hero from "@/components/shop/Hero";
import Problem from "@/components/shop/Problem";
import Mechanism from "@/components/shop/Mechanism";
import Reframe from "@/components/shop/Reframe";
import Solution from "@/components/shop/Solution";
import Product from "@/components/shop/Product";
import DoctorTrust from "@/components/shop/DoctorTrust";
import GerbilWheel from "@/components/shop/GerbilWheel";
import Ingredients from "@/components/shop/Ingredients";
import Guarantee from "@/components/shop/Guarantee";
import FinalClose from "@/components/shop/FinalClose";
import Footer from "@/components/shop/Footer";
import StickyMobileCTA from "@/components/shop/StickyMobileCTA";

export default function ShopPage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Problem />
      <Mechanism />
      <Reframe />
      <Solution />
      <Product />
      <DoctorTrust />
      <GerbilWheel />
      <Ingredients />
      <Guarantee />
      <FinalClose />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
