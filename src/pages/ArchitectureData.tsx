import { ArrowRight, Cloud, Layers, Network, GitBranch, Gauge, Shield, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { SITE_CONFIG } from "@/config/site";

const ARCHITECTURE_SERVICES = [
  {
    icon: Cloud,
    title: "Architecture Cloud Native",
    description: "Conception d'architectures data sur AWS, GCP ou Azure, adaptees a vos contraintes.",
    features: [
      "AWS (S3, Redshift, Glue, EMR)",
      "GCP (BigQuery, Dataflow, Composer)",
      "Azure (Synapse, Data Factory, Databricks)",
      "Strategie multi-cloud si necessaire",
    ],
  },
  {
    icon: Layers,
    title: "Modern Data Platforms",
    description: "Plateformes data avec lakehouse, catalogues et gouvernance explicite.",
    features: [
      "Lakehouse Architecture",
      "Delta Lake, Iceberg, Hudi",
      "Data Catalog & Discovery",
      "Metadata Management",
    ],
  },
  {
    icon: Network,
    title: "Data Mesh & Décentralisation",
    description: "Architecture decentralisee par domaines avec standards et ownership.",
    features: [
      "Domain-oriented ownership",
      "Data as a Product",
      "Self-serve data platform",
      "Federated governance",
    ],
  },
  {
    icon: GitBranch,
    title: "Architectures Événementielles",
    description: "Systemes event-driven pour besoins temps reel.",
    features: [
      "Event Sourcing",
      "CQRS patterns",
      "Kafka & Event Streaming",
      "Real-time analytics",
    ],
  },
] as const;

const ARCHITECTURE_PATTERNS = [
  {
    name: "Lakehouse",
    description: "Combinaison du data lake (flexibilité, coût) et du data warehouse (performance, gouvernance). Format open-source (Delta, Iceberg) sur stockage objet.",
    useCases: ["Analytics à grande échelle", "ML/AI workloads", "Historisation long-terme"],
  },
  {
    name: "Data Mesh",
    description: "Architecture décentralisée où chaque domaine métier est responsable de ses données comme un produit, avec une plateforme self-service.",
    useCases: ["Grandes organisations", "Autonomie des équipes", "Scalabilité organisationnelle"],
  },
  {
    name: "Lambda Architecture",
    description: "Architecture hybride combinant traitement batch (exhaustivité) et streaming (temps réel) pour des analyses complètes et réactives.",
    useCases: ["IoT & capteurs", "Temps réel + historique", "Réconciliation de données"],
  },
] as const;

const CLOUD_COMPARISON = [
  {
    provider: "AWS",
    strengths: ["Ecosysteme large", "Redshift pour le DWH", "Services manages"],
    services: ["S3", "Redshift", "Glue", "EMR", "Athena", "Lake Formation"],
  },
  {
    provider: "Google Cloud",
    strengths: ["BigQuery analytique", "ML integre (Vertex AI)", "Serverless"],
    services: ["BigQuery", "Dataflow", "Composer", "Dataproc", "Cloud Storage"],
  },
  {
    provider: "Azure",
    strengths: ["Integration Microsoft", "Synapse", "Fabric"],
    services: ["Synapse", "Data Factory", "Databricks", "ADLS Gen2", "Purview"],
  },
] as const;

const CASE_STUDIES = [
  {
    sector: "Santé",
    title: "Plateforme Health Data Hub conforme",
    context: "Un réseau de cliniques privées devant centraliser les données de soins tout en respectant les contraintes HDS et RGPD.",
    solution: "Architecture cloud souveraine sur GCP avec chiffrement bout-en-bout, zones de données isolées par niveau de sensibilité, audit trail complet.",
    results: [
      "Cadre de conformite et securite documente",
      "Interopérabilité HL7 FHIR avec systemes internes",
      "Optimisation des flux de recherche clinique",
    ],
  },
  {
    sector: "Marketing",
    title: "Architecture Composable CDP",
    context: "Un groupe média avec 3 marques, chacune utilisant des outils marketing différents, sans vue unifiée des audiences.",
    solution: "Architecture Lakehouse composable avec Snowflake, Fivetran pour l'ingestion, Census pour l'activation, dbt pour la modélisation.",
    results: [
      "Flexibilite sur les destinations d'activation",
      "Modele Lakehouse documente",
      "Gouvernance des audiences clarifiee",
    ],
  },
  {
    sector: "Association",
    title: "Architecture data centralisée multi-sources",
    context: "Une grande association caritative avec des données donateurs, bénévoles et projets éparpillées entre 10+ outils (CRM, comptabilité, terrain).",
    solution: "Architecture moderne sur BigQuery avec couche d'ingestion Fivetran/Airbyte, modélisation dimensionnelle dbt, gouvernance centralisée.",
    results: [
      "Source unique de verite pour les contacts",
      "Couts et volumetrie suivis",
      "Autonomie accrue des equipes metier",
    ],
  },
] as const;

const DESIGN_PRINCIPLES = [
  {
    icon: Gauge,
    title: "Performance",
    description: "Pattern d'acces explicites: OLAP, OLTP, time-series, graph.",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Disponibilite, reprise, idempotence, controle des erreurs.",
  },
  {
    icon: Layers,
    title: "Scalabilité",
    description: "Partitionnement, sharding, auto-scaling.",
  },
  {
    icon: Network,
    title: "Maintenabilité",
    description: "Infrastructure as code, documentation, observabilite.",
  },
] as const;

export default function ArchitectureData() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Architecture Data Cloud & On-Premise | Expert indépendant Bezons (95) | ISData"
        description="Architecture de données fiable sur Cloud (AWS, Azure) ou vos serveurs locaux (On-Premise). Gain de temps, fiabilité et souveraineté. Expert basé en Île-de-France."
        keywords={["architecture data Cloud On-Premise", "expert data Bezons", "souveraineté données", "AWS Azure", "fiabilité données", "gain de temps data", "Île-de-France"]}
        canonicalPath="/services/architecture-data"
      />
      <Header />
      <main>
        <section className="min-h-[70vh] flex items-center pt-14">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <Link to="/" className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 mb-6 transition-opacity">
                <ArrowLeft size={14} />
                Retour à l'accueil
              </Link>
              
              <p className="text-sm opacity-50 mb-4 tracking-wide uppercase">
                Architecture Data · Cloud ou On-Premise
              </p>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight mb-6">
                Une architecture de données fiable, sur le Cloud ou vos serveurs
              </h1>

              <p className="text-lg opacity-70 leading-relaxed mb-8 max-w-2xl">
                Je conçois des architectures data adaptées à votre contexte : <strong>AWS, Azure</strong> ou <strong>On-Premise</strong>.
                Gain de temps, fiabilité des données et souveraineté selon vos contraintes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn-primary">
                  Réserver une visio découverte (1h)
                  <ArrowRight size={16} />
                </a>
                <a href="#patterns" className="btn-secondary">
                  Voir les patterns
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container mx-auto">
            <SectionHeader
              tag="Expertise Architecture"
              title="Conception de plateformes data"
              description="Architecture cible, ADR, standards et gouvernance."
            />

            <div className="grid md:grid-cols-2 gap-6">
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

        <section id="patterns" className="section bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Design Patterns
              </p>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Patterns d'architecture et criteres de choix
              </h2>
              <p className="opacity-60">
                Choix du pattern selon latence, volume, cout et organisation.
              </p>
            </div>

            <div className="space-y-8">
              {ARCHITECTURE_PATTERNS.map((pattern) => (
                <article
                  key={pattern.name}
                  className="p-6 bg-white dark:bg-black border border-black/10 dark:border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-3">{pattern.name}</h3>
                  <p className="opacity-70 mb-4 leading-relaxed">
                    {pattern.description}
                  </p>

                  <div>
                    <p className="text-sm uppercase tracking-wide opacity-50 mb-2">
                      Cas d'usage
                    </p>
                    <ul className="space-y-1">
                      {pattern.useCases.map((useCase) => (
                        <li key={useCase} className="flex items-center gap-2 text-sm opacity-80">
                          <CheckCircle2 size={14} className="text-green-600 dark:text-green-400" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Multi-Cloud
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                AWS, GCP et Azure
              </h2>
              <p className="opacity-60">
                Choix du cloud selon contraintes techniques et budget.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {CLOUD_COMPARISON.map((cloud) => (
                <article
                  key={cloud.provider}
                  className="p-6 border border-black/10 dark:border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-4">{cloud.provider}</h3>
                  
                  <div className="mb-4">
                    <p className="text-sm uppercase tracking-wide opacity-50 mb-2">Points forts</p>
                    <ul className="space-y-1">
                      {cloud.strengths.map((strength) => (
                        <li key={strength} className="text-sm opacity-70">
                          • {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide opacity-50 mb-2">Services clés</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cloud.services.map((service) => (
                        <span
                          key={service}
                          className="text-xs px-2 py-0.5 border border-black/10 dark:border-white/10 opacity-60"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Principes
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Principes de conception
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DESIGN_PRINCIPLES.map((principle) => (
                <div key={principle.title}>
                  <principle.icon className="w-8 h-8 mb-4 opacity-60" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Références
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Exemples de missions
              </h2>
              <p className="opacity-60">
                Exemples de missions anonymisees. Livrables et details sur demande.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {CASE_STUDIES.map((study) => (
                <article
                  key={study.title}
                  className="p-6 border border-black/10 dark:border-white/10"
                >
                  <span className="text-xs uppercase tracking-wide opacity-50 mb-2 block">
                    {study.sector}
                  </span>
                  <h3 className="text-lg font-semibold mb-3">{study.title}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide opacity-50 mb-1">Contexte</p>
                      <p className="text-sm opacity-70">{study.context}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide opacity-50 mb-1">Solution</p>
                      <p className="text-sm opacity-70">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide opacity-50 mb-2">Résultats</p>
                    <ul className="space-y-1">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 size={14} className="mt-0.5 text-green-600 dark:text-green-400 shrink-0" />
                          <span className="opacity-80">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section bg-black dark:bg-white text-white dark:text-black">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Une architecture de données fiable, à votre mesure
            </h2>
            <p className="opacity-70 mb-8 max-w-xl mx-auto">
              Cloud, On-Premise ou hybride : on en parle pendant 1h ?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Visio découverte — Architecture Data`}
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
