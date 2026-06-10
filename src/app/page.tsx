import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import DisciplinesSection from "@/components/DisciplinesSection";
import StatsSection from "@/components/StatsSection";
import BranchesSection from "@/components/BranchesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <DisciplinesSection />
      <StatsSection />
      <BranchesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
