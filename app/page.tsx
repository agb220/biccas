import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import ColabsSection from "./_components/ColabsSection";
import SupportSection from "./_components/SupportSection";
import FeaturesSection from "./_components/FeaturesSection";

export default function Home() {
  return (
    <main>
      <div className="bg-linear-to-br from-[#f0f9f6] via-white to-[#e8f6f1] ">
        <HeroSection />
        <ColabsSection />
      </div>
      <SupportSection />
      <FeaturesSection />
    </main>
  );
}
