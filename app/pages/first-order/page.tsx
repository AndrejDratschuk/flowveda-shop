import type { Metadata } from "next";
import PromoBar from "@/components/shop/PromoBar";
import HeroFirstOrder from "@/components/shop/HeroFirstOrder";
import PressLogos from "@/components/shop/PressLogos";
import BuyBox from "@/components/shop/BuyBox";
import Benefits from "@/components/shop/Benefits";
import Problem from "@/components/shop/Problem";
import Outcomes from "@/components/shop/Outcomes";
import DoctorTrust from "@/components/shop/DoctorTrust";
import Comparison from "@/components/shop/Comparison";
import Ingredients from "@/components/shop/Ingredients";
import Guarantee from "@/components/shop/Guarantee";
import FinalClose from "@/components/shop/FinalClose";
import Footer from "@/components/shop/Footer";
import StickyMobileCTA from "@/components/shop/StickyMobileCTA";

export const metadata: Metadata = {
  title: "FlowVeda® | Save 40% On Your First Order",
  description:
    "You have half a second between stimulus and reaction. FlowVeda® is the daily Ayurvedic nootropic that helps you use it. 8 clinically studied ingredients. Zero caffeine. Recommended by 900+ physicians. Try risk-free for 60 days.",
  openGraph: {
    title: "FlowVeda® | Save 40% On Your First Order",
    description:
      "The daily Ayurvedic nootropic for calm, focused attention. Zero caffeine. Recommended by 900+ physicians. 60-day money-back guarantee.",
    url: "https://flowveda.co/pages/first-order",
    siteName: "FlowVeda®",
    type: "website",
  },
};

export default function FirstOrderPage() {
  return (
    <main className="overflow-x-hidden">
      <PromoBar />
      <HeroFirstOrder />
      <DoctorTrust />
      <PressLogos />
      <BuyBox />
      <Benefits />
      <Problem />
      <Outcomes />
      <Comparison />
      <Ingredients />
      <Guarantee />
      <FinalClose />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
