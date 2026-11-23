import Header from "@/components/Header";
import Sections from "@/components/Sections";
import HeroSection from "@/components/HeroSection";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(ellipse_at_50%_30%,#f8dde0,#fbf1ea_65%)]">
      <Header />
      <HeroSection />
      <Sections />
    </main>
  );
}
