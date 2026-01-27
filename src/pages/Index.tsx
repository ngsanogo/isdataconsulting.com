/**
 * Page d'accueil ISDATA Consulting
 * Structure : Hero → Expertise → Méthodologie → Contact → Footer
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import MethodologySection from "@/components/MethodologySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <MethodologySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
