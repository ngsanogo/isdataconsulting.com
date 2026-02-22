import { ArrowRight, ArrowLeft, ClipboardList, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { SITE_CONFIG } from "@/config/site";

const ROLES = [
  {
    icon: Target,
    title: "Cadrage fonctionnel",
    description: "Traduction des besoins métier en backlog data et priorités actionnables.",
    features: ["Analyse des besoins", "Priorisation", "Livrables clairs"],
  },
  {
    icon: ClipboardList,
    title: "Pilotage de projet data",
    description: "Suivi des chantiers data de bout en bout avec coordination transverse.",
    features: ["Planification", "Suivi d'avancement", "Documentation projet"],
  },
  {
    icon: Users,
    title: "Accompagnement des équipes",
    description: "Travail avec les équipes métiers et techniques pour une adoption durable.",
    features: ["Support utilisateurs", "Montée en autonomie", "Passation"],
  },
] as const;

const TOOLS = ["Jira", "Confluence", "Power BI", "Tableau", "Looker Studio"] as const;

export default function ProductDataServices() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-black focus:px-4 focus:py-2 focus:text-white dark:focus:bg-white dark:focus:text-black"
      >
        Aller au contenu principal
      </a>
      <SEO
        title="Data Product Owner & Chef de projet Data | ISData Consulting"
        description="Cadrage, priorisation, coordination métier/tech et delivery data."
        keywords={["data product owner", "chef de projet data", "pilotage data", "jira", "confluence"]}
        canonicalPath="/services/product-data"
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="min-h-[70vh] flex items-center pt-14">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <Link to="/" className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 mb-6 transition-opacity">
                <ArrowLeft size={14} />
                Retour à l'accueil
              </Link>

              <p className="text-sm opacity-50 mb-4 tracking-wide uppercase">Data Product Owner & Chef de projet Data</p>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight mb-6">
                Data Product Owner et Chef de projet Data
              </h1>

              <p className="text-lg opacity-70 leading-relaxed mb-8 max-w-2xl">
                J'interviens sur le cadrage, la priorisation, la coordination des équipes et la livraison des sujets data.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn-primary">
                  Réserver une visio découverte (1h)
                  <ArrowRight size={16} />
                </a>
                <a href="#roles" className="btn-secondary">
                  Voir les interventions
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="roles" className="section">
          <div className="container mx-auto">
            <SectionHeader
              tag="Interventions"
              title="Rôle en mission"
              description="Approche pragmatique orientée méthodologie et delivery."
            />

            <div className="grid md:grid-cols-3 gap-6">
              {ROLES.map((role) => (
                <ServiceCard
                  key={role.title}
                  icon={role.icon}
                  title={role.title}
                  description={role.description}
                  features={role.features}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto max-w-3xl">
            <SectionHeader
              tag="Outils"
              title="Outils de pilotage et reporting"
              description="Outils utilisés en mission selon les équipes et le contexte."
            />
            <div className="flex flex-wrap gap-3">
              {TOOLS.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 border border-black/10 dark:border-white/10 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section bg-black dark:bg-white text-white dark:text-black">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Parlons de votre projet</h2>
            <p className="opacity-70 mb-8 max-w-xl mx-auto">On définit un plan d'action simple, des priorités et des livrables mesurables.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Visio découverte — Pilotage projet data`}
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
