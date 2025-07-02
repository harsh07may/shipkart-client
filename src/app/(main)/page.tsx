import CategoriesSection from "./_components/CategoriesSection";
import DetailsSection from "./_components/DetailsSection";
import HeroSection from "./_components/HeroSection";
import MarqueeSection from "./_components/MaqueeSection";

export default function Home() {
  return (
    <main className="dotted-bg min-h-screen bg-amber-50 font-sans">
      <HeroSection />
      <MarqueeSection />
      <CategoriesSection />
      <DetailsSection />
    </main>
  );
}
