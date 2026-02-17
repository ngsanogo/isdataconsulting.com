import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import VisionSection from "@/components/VisionSection";
import SocialProofSection from "@/components/SocialProofSection";
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
        <ExpertiseSection />
        <VisionSection />
        <SocialProofSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
