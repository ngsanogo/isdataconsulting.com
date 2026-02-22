import { ArrowRight, ArrowLeft, Layers, Shield, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { SITE_CONFIG } from "@/config/site";

const ARCHITECTURE_SERVICES = [
  {
    icon: Layers,
    title: "Architecture de plateforme data",
    description: "Définition d'une architecture simple, maintenable et adaptée au contexte métier.",
    features: ["Modélisation", "Règles métier", "Documentation"],
  },
  {
    icon: Shield,
    title: "Qualité et gouvernance des données",
    description: "Mise en place de contrôles pour fiabiliser les données et les usages.",
    features: ["Standards qualité", "Suivi des anomalies", "Processus de gouvernance"],
  },
  {
    icon: Gauge,
    title: "Performance opérationnelle",
    description: "Optimisation de flux et bases pour supporter la croissance des volumes.",
    features: ["Requêtes optimisées", "Pipelines robustes", "Exploitation quotidienne"],
  },
] as const;

const PRINCIPLES = [
  "Architecture orientée cas d'usage métier.",
  "Modélisation explicite et maintenable.",
  "Qualité de données mesurable (règles + contrôles).",
  "Documentation et passation systématique.",
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
        title="Architecte Data freelance | Architecture de plateforme data | ISData Consulting"
        description="Architecte Data freelance: architecture de plateforme data, modélisation, qualité et gouvernance des données."
        keywords={["architecte data", "architecture data", "qualité des données", "gouvernance", "modélisation"]}
        canonicalPath="/services/architecture-data"
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

              <p className="text-sm opacity-50 mb-4 tracking-wide uppercase">Architecte Data</p>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight mb-6">
                Concevoir une architecture data solide
              </h1>

              <p className="text-lg opacity-70 leading-relaxed mb-8 max-w-2xl">
                Mon travail: concevoir des fondations claires pour fiabiliser les flux et faciliter l'exploitation des données.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn-primary">
                  Réserver une visio découverte (1h)
                  <ArrowRight size={16} />
                </a>
                <a href="#services" className="btn-secondary">
                  Voir l'approche
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container mx-auto">
            <SectionHeader
              tag="Services"
              title="Ce que je mets en place"
              description="Architecture et qualité des données dans des contextes exigeants."
            />

            <div className="grid md:grid-cols-3 gap-6">
              {ARCHITECTURE_SERVICES.map((service) => (
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
          <div className="container mx-auto max-w-3xl">
            <SectionHeader
              tag="Méthodologie"
              title="Principes d'architecture"
              description="Cadre d'intervention appliqué sur chaque projet."
            />
            <ul className="space-y-4">
              {PRINCIPLES.map((item) => (
                <li key={item} className="p-4 border border-black/10 dark:border-white/10">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section bg-black dark:bg-white text-white dark:text-black">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Construisons une base data solide</h2>
            <p className="opacity-70 mb-8 max-w-xl mx-auto">On clarifie le besoin, le périmètre et les livrables dès le départ.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Visio découverte — Architecture data`}
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
