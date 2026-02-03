/**
 * Page d'accueil ISData Consulting
 * Structure optimisée pour la conversion B2B :
 * Hero → Problèmes → Expertise → Social Proof → Méthodologie → FAQ → Contact
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
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
        {/* 1. Hero : Accroche + Proposition de valeur + CTA principal */}
        <HeroSection />
        
        {/* 2. Problèmes : Identification des pain points pour créer l'empathie */}
        <ProblemsSection />
        
        {/* 3. Expertises : Les 3 offres principales avec aperçu */}
        <ExpertiseSection />
        
        {/* 4. Preuves sociales : Crédibilité et confiance */}
        <SocialProofSection />
        
        {/* 5. Méthodologie : Rassurer sur le processus */}
        <MethodologySection />
        
        {/* 6. FAQ : Lever les objections, améliorer le SEO */}
        <FAQSection />
        
        {/* 7. Contact : CTA final avec formulaire */}
        <ContactSection />
      </main>
      <Footer />
      
      {/* CTA Sticky pour maximiser les conversions */}
      <StickyCTA />
    </div>
  );
}
