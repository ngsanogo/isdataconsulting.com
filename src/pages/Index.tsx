import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ManifestoSection from "@/components/ManifestoSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import SocialProofSection from "@/components/SocialProofSection";
import MethodologySection from "@/components/MethodologySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ManifestoSection />
        <ExpertiseSection />
        <ArchitectureSection />
        <SocialProofSection />
        <MethodologySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
