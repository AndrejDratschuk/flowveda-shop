import type { Metadata } from "next";
import PromoBar from "@/components/shop/PromoBar";
import HeroStress from "@/components/shop/HeroStress";
import DoctorTrust from "@/components/shop/DoctorTrust";
import PressLogos from "@/components/shop/PressLogos";
import FiveReasons from "@/components/shop/FiveReasons";
import BuyBox from "@/components/shop/BuyBox";
import Ingredients from "@/components/shop/Ingredients";
import Comparison from "@/components/shop/Comparison";
import CustomerReviews from "@/components/shop/CustomerReviews";
import Outcomes from "@/components/shop/Outcomes";
import Guarantee from "@/components/shop/Guarantee";
import FinalClose from "@/components/shop/FinalClose";
import Footer from "@/components/shop/Footer";
import StickyMobileCTA from "@/components/shop/StickyMobileCTA";

export const metadata: Metadata = {
  title: "FlowVeda® | 5 Reasons the Dad Your Kids Want Has Stopped Showing Up at 6PM",
  description:
    "Your fuse got short. Coffee stopped working. The names slip. It's not your age. It's your stress response. FlowVeda® is the daily Ayurvedic nootropic for dads. 8 clinically studied ingredients. Zero caffeine. Recommended by 900+ physicians. 60-day money-back guarantee.",
  openGraph: {
    title: "FlowVeda® | Come Back to the Dad Your Kids Want",
    description:
      "Daily Ayurvedic nootropic for dads under stress. Calm focus without stimulants. Recommended by 900+ physicians. 60-day money-back guarantee.",
    url: "https://flowveda.co/pages/stress",
    siteName: "FlowVeda®",
    type: "website",
  },
};

export default function StressPage() {
  return (
    <main className="overflow-x-hidden">
      <PromoBar />
      <HeroStress />
      <DoctorTrust />
      <PressLogos />
      <FiveReasons />
      <BuyBox />
      <Ingredients />
      <Comparison />
      <CustomerReviews />
      <Outcomes />
      <Guarantee />
      <FinalClose />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
