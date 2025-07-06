import CategoriesSection from "./_sections/CategoriesSection";
import DetailsSection from "./_sections/DetailsSection";
import HeroSection from "./_sections/HeroSection";
import MarqueeSection from "./_sections/MaqueeSection";
import NewArrivalsSection from "./_sections/NewArrivalsSection";

export default function Home() {
  return (
    <main className="dotted-bg min-h-screen bg-amber-50 font-sans">
      <HeroSection />
      <MarqueeSection />
      <CategoriesSection />
      <DetailsSection />
      <NewArrivalsSection />
    </main>
  );
}
