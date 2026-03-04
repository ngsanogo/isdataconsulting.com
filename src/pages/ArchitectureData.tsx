import { ArrowRight, ArrowLeft, DraftingCompass, ShieldCheck, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { SITE_CONFIG } from "@/config/site";

const PILLARS = [
  {
    icon: DraftingCompass,
    title: "Diagnostic et plan cible",
    description: "Cartographie de l'existant, contraintes métiers et choix d'une architecture réaliste.",
    features: ["Sources et flux audités", "Points de rupture identifiés", "Plan de mise en oeuvre"],
  },
  {
    icon: Layers3,
    title: "Fondations techniques",
    description: "Mise en place d'un socle simple, lisible et prêt à évoluer avec votre activité.",
    features: ["Modèle de données clair", "Standards d'intégration", "Coûts maîtrisés"],
  },
  {
    icon: ShieldCheck,
    title: "Gouvernance et fiabilité",
    description: "Règles explicites pour éviter les zones grises et fiabiliser durablement vos données.",
    features: ["Rôles et responsabilités", "Contrôles qualité", "Documentation transmissible"],
  },
] as const;

const RELATED_SERVICES = [
  { label: "Ingénierie & Automatisation", href: "/services/data-engineering" },
  { label: "Pilotage & Stratégie", href: "/services/product-data" },
] as const;

export default function ArchitectureData() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-black focus:px-4 focus:py-2 focus:text-white dark:focus:bg-white dark:focus:text-black"
      >
        Aller au contenu principal
      </a>
      <SEO
        title="Architecture Data freelance | Fondations robustes et sans usine a gaz | ISData Consulting"
        description="Conception d'une architecture data claire et maintenable: diagnostic, plan cible, standards et documentation pour des fondations solides."
        keywords={["architecture data", "consultant data", "fondations data", "gouvernance data", "schema de donnees"]}
        canonicalPath="/services/architecture-data"
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="min-h-[70vh] flex items-center pt-14">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <Link to="/" className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 mb-6 transition-opacity">
                <ArrowLeft size={14} />
                Retour a l'accueil
              </Link>

              <p className="text-sm opacity-50 mb-4 tracking-wide uppercase">Architecture & Fondations</p>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight mb-6">
                Une architecture data sobre, claire et faite pour durer
              </h1>

              <p className="text-lg opacity-70 leading-relaxed mb-8 max-w-2xl">
                Je conçois le bon niveau d'architecture pour votre contexte: ni bricolage fragile, ni usine a gaz.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn-primary">
                  Réserver une visio découverte (1h)
                  <ArrowRight size={16} />
                </a>
                <a href="#details" className="btn-secondary">
                  Voir le détail
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="details" className="section">
          <div className="container mx-auto">
            <SectionHeader
              tag="Intervention"
              title="Ce que je mets en place"
              description="Des fondations explicites pour sécuriser vos flux et accélérer la suite." 
            />

            <div className="grid md:grid-cols-3 gap-6">
              {PILLARS.map((pillar) => (
                <ServiceCard
                  key={pillar.title}
                  icon={pillar.icon}
                  title={pillar.title}
                  description={pillar.description}
                  features={pillar.features}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container mx-auto max-w-3xl">
            <SectionHeader
              tag="Navigation"
              title="Et ensuite ?"
              description="Une fois les fondations en place, vous pouvez industrialiser et piloter." 
            />
            <div className="flex flex-wrap gap-3">
              {RELATED_SERVICES.map((service) => (
                <Link key={service.label} to={service.href} className="btn-secondary">
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section bg-black dark:bg-white text-white dark:text-black">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Parlons de votre architecture data</h2>
            <p className="opacity-70 mb-8 max-w-xl mx-auto">En 48h, vous avez une lecture claire des options, des risques et des priorités.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent("Visio découverte (1h) — Architecture & Fondations")}`}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-medium hover:opacity-80 transition-opacity"
              >
                Réserver une visio découverte (1h)
                <ArrowRight size={16} />
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 px-6 py-3 border border-white/30 dark:border-black/30 font-medium hover:opacity-80 transition-opacity"
              >
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
