import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SocialProofSection from "@/components/SocialProofSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Index() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-black focus:px-4 focus:py-2 focus:text-white dark:focus:bg-white dark:focus:text-black"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ProblemsSection />
        <ExpertiseSection />
        <SocialProofSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
