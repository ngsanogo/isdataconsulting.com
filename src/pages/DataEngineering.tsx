import { ArrowRight, ArrowLeft, Database, RefreshCw, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { SITE_CONFIG } from "@/config/site";

const SERVICES = [
  {
    icon: Database,
    title: "Migration et centralisation de données",
    description: "Reprise de données depuis plusieurs sources et structuration dans une base exploitable.",
    features: ["Collecte multi-sources", "Nettoyage et standardisation", "Modélisation de données"],
  },
  {
    icon: RefreshCw,
    title: "Industrialisation de pipelines",
    description: "Refonte de flux data pour des volumes élevés avec suivi qualité.",
    features: ["Orchestration Airflow", "Automatisation", "Contrôles de qualité"],
  },
  {
    icon: BarChart3,
    title: "Reporting opérationnel",
    description: "Mise à disposition des données pour les équipes métier via dashboards.",
    features: ["Power BI", "Tableau", "Looker Studio"],
  },
] as const;

const STACK = [
  "Python",
  "R",
  "SQL",
  "PostgreSQL",
  "SQL Server",
  "MySQL",
  "Airflow",
  "Docker",
  "Git",
] as const;

export default function DataEngineering() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-black focus:px-4 focus:py-2 focus:text-white dark:focus:bg-white dark:focus:text-black"
      >
        Aller au contenu principal
      </a>
      <SEO
        title="Data Engineer freelance | Flux & Pipelines de données | ISData Consulting"
        description="Conception de pipelines data fiables: migration, qualité, automatisation et reporting pour des décisions plus rapides."
        keywords={["data engineer freelance", "data engineering", "pipelines", "migration de données", "airflow", "sql", "python"]}
        canonicalPath="/services/data-engineering"
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

              <p className="text-sm opacity-50 mb-4 tracking-wide uppercase">Flux & Pipelines de données</p>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight mb-6">
                Industrialiser vos flux data
              </h1>

              <p className="text-lg opacity-70 leading-relaxed mb-8 max-w-2xl">
                Je conçois des pipelines fiables pour collecter, transformer et rendre vos données actionnables.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn-primary">
                  Réserver une visio découverte (1h)
                  <ArrowRight size={16} />
                </a>
                <a href="#services" className="btn-secondary">
                  Voir les services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container mx-auto">
            <SectionHeader
              tag="Services"
              title="Interventions principales"
              description="Approche orientée stack, qualité et industrialisation des flux."
            />

            <div className="grid md:grid-cols-3 gap-6">
              {SERVICES.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto">
            <div className="max-w-xl mb-8">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">Stack</p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Technologies utilisées</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {STACK.map((item) => (
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
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Parlons de votre besoin data</h2>
            <p className="opacity-70 mb-8 max-w-xl mx-auto">Cadrage, faisabilité et plan d'action concret.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Visio découverte — Pipelines de données`}
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
