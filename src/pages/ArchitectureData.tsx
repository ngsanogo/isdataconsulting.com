/**
 * Page Architecture Data & Modern Data Platforms
 * SEO Title: Architecture Data Cloud | AWS, GCP, Azure | Consultant Expert | ISData
 * Meta Description: Expert en architecture data cloud : conception de plateformes scalables sur AWS, GCP, Azure. 
 * Data Mesh, Lakehouse, architectures événementielles. Design patterns modernes.
 */
import { ArrowRight, GitBranch, Cloud, Layers, Network, Shield, Gauge, CheckCircle2, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SITE_CONFIG } from "@/config/site";

const ARCHITECTURE_SERVICES = [
  {
    icon: Cloud,
    title: "Architecture Cloud Native",
    description: "Conception d'architectures data sur les trois grands cloud providers, optimisées pour votre contexte.",
    features: [
      "AWS (S3, Redshift, Glue, EMR)",
      "GCP (BigQuery, Dataflow, Composer)",
      "Azure (Synapse, Data Factory, Databricks)",
      "Multi-cloud & Hybrid strategies",
    ],
  },
  {
    icon: Layers,
    title: "Modern Data Platforms",
    description: "Mise en place de plateformes data modernes combinant le meilleur du data lake et du data warehouse.",
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
    description: "Transformation vers une architecture décentralisée orientée domaines métiers.",
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
    description: "Design de systèmes event-driven pour le temps réel et la réactivité métier.",
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
    diagram: `
┌─────────────────────────────────────────────────────────┐
│                    Bronze Layer                          │
│  (Raw Data: JSON, CSV, Parquet - immutable)             │
└────────────────────────┬────────────────────────────────┘
                         │ Transformation
┌────────────────────────▼────────────────────────────────┐
│                    Silver Layer                          │
│  (Cleansed, Validated, Conformed Data)                  │
└────────────────────────┬────────────────────────────────┘
                         │ Aggregation
┌────────────────────────▼────────────────────────────────┐
│                    Gold Layer                            │
│  (Business-ready: Aggregates, Features, Marts)          │
└─────────────────────────────────────────────────────────┘
    `,
  },
  {
    name: "Data Mesh",
    description: "Architecture décentralisée où chaque domaine métier est responsable de ses données comme un produit, avec une plateforme self-service.",
    useCases: ["Grandes organisations", "Autonomie des équipes", "Scalabilité organisationnelle"],
    diagram: `
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Domain A   │     │  Domain B   │     │  Domain C   │
│ ┌─────────┐ │     │ ┌─────────┐ │     │ ┌─────────┐ │
│ │  Data   │ │     │ │  Data   │ │     │ │  Data   │ │
│ │ Product │ │     │ │ Product │ │     │ │ Product │ │
│ └────┬────┘ │     │ └────┬────┘ │     │ └────┬────┘ │
└──────┼──────┘     └──────┼──────┘     └──────┼──────┘
       │                   │                   │
       └───────────────────┼───────────────────┘
                           │
            ┌──────────────▼──────────────┐
            │    Self-Serve Platform      │
            │  (Infra, Tools, Standards)  │
            └─────────────────────────────┘
    `,
  },
  {
    name: "Lambda Architecture",
    description: "Architecture hybride combinant traitement batch (exhaustivité) et streaming (temps réel) pour des analyses complètes et réactives.",
    useCases: ["IoT & capteurs", "Temps réel + historique", "Réconciliation de données"],
    diagram: `
                    ┌─────────────────┐
                    │   Data Sources  │
                    └────────┬────────┘
           ┌─────────────────┼─────────────────┐
           ▼                 ▼                 
┌──────────────────┐  ┌──────────────────┐
│   Batch Layer    │  │   Speed Layer    │
│ (Spark, Hadoop)  │  │ (Kafka, Flink)   │
│  T+1 accuracy    │  │  Real-time       │
└────────┬─────────┘  └────────┬─────────┘
         │                     │
         └──────────┬──────────┘
                    ▼
         ┌──────────────────┐
         │  Serving Layer   │
         │ (Unified View)   │
         └──────────────────┘
    `,
  },
] as const;

const CLOUD_COMPARISON = [
  {
    provider: "AWS",
    strengths: ["Écosystème le plus mature", "Redshift pour le DWH", "Services managés complets"],
    services: ["S3", "Redshift", "Glue", "EMR", "Athena", "Lake Formation"],
  },
  {
    provider: "Google Cloud",
    strengths: ["BigQuery : référence analytique", "ML intégré (Vertex AI)", "Serverless native"],
    services: ["BigQuery", "Dataflow", "Composer", "Dataproc", "Cloud Storage"],
  },
  {
    provider: "Azure",
    strengths: ["Intégration Microsoft", "Synapse tout-en-un", "Fabric émergent"],
    services: ["Synapse", "Data Factory", "Databricks", "ADLS Gen2", "Purview"],
  },
] as const;

const CASE_STUDIES = [
  {
    sector: "Finance",
    title: "Migration vers une Lakehouse Architecture",
    context: "Une fintech en hypercroissance avec un data warehouse legacy Teradata coûteux et rigide.",
    solution: "Migration vers Delta Lake sur Databricks, avec architecture medallion (Bronze/Silver/Gold) et gouvernance Unity Catalog.",
    results: [
      "Réduction de 60% des coûts d'infrastructure",
      "Temps de requête divisé par 5",
      "Onboarding de nouveaux use cases en jours vs mois",
    ],
  },
  {
    sector: "Retail",
    title: "Plateforme Data Mesh multi-domaines",
    context: "Un groupe retail avec 5 BUs autonomes, chacune avec sa propre stack data, empêchant les synergies.",
    solution: "Plateforme self-service GCP avec BigQuery, data contracts entre domaines, catalogue Dataplex.",
    results: [
      "5 domaines data autonomes et interopérables",
      "Time-to-market divisé par 3 pour les nouveaux produits data",
      "Gouvernance fédérée respectant l'autonomie des BUs",
    ],
  },
  {
    sector: "Industrie",
    title: "Architecture événementielle IoT",
    context: "Un industriel 4.0 collectant des données de 10 000 capteurs sans capacité d'exploitation temps réel.",
    solution: "Architecture event-driven avec Kafka, traitement Flink, stockage Delta Lake, dashboards Grafana.",
    results: [
      "Latence de détection d'anomalies < 1 seconde",
      "Scalabilité à 100 000+ capteurs sans refonte",
      "Maintenance prédictive avec 95% de précision",
    ],
  },
] as const;

const DESIGN_PRINCIPLES = [
  {
    icon: Gauge,
    title: "Performance",
    description: "Architectures optimisées pour vos patterns d'accès : OLAP, OLTP, time-series, graph.",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Haute disponibilité, disaster recovery, idempotence, exactly-once processing.",
  },
  {
    icon: Layers,
    title: "Scalabilité",
    description: "Design pour la croissance : partitionnement, sharding, auto-scaling, elasticité.",
  },
  {
    icon: Network,
    title: "Maintenabilité",
    description: "Code as Infrastructure (Terraform), documentation as code, observabilité native.",
  },
] as const;

export default function ArchitectureData() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Architecture Data Cloud | AWS, GCP, Azure | Consultant Expert | ISData"
        description="Expert en architecture data cloud : conception de plateformes scalables sur AWS, GCP, Azure. Data Mesh, Lakehouse, architectures événementielles. Design patterns modernes."
        keywords={["architecture data cloud", "AWS data", "GCP BigQuery", "Azure Synapse", "data mesh", "lakehouse", "Databricks", "Terraform"]}
        canonicalPath="/services/architecture-data"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center pt-14">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <a href="/" className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 mb-6 transition-opacity">
                <ArrowLeft size={14} />
                Retour à l'accueil
              </a>
              
              <p className="text-sm opacity-50 mb-4 tracking-wide uppercase">
                Architecture Data Cloud
              </p>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight mb-6">
                Des architectures data scalables, performantes et fiables
              </h1>

              <p className="text-lg opacity-70 leading-relaxed mb-8 max-w-2xl">
                Expert en <strong>architecture data cloud</strong>, je conçois des plateformes 
                modernes sur <strong>AWS, GCP et Azure</strong>. Data Mesh, Lakehouse, 
                architectures événementielles : des patterns adaptés à vos enjeux de scalabilité et performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn-primary">
                  Audit gratuit de votre architecture
                  <ArrowRight size={16} />
                </a>
                <a href="#patterns" className="btn-secondary">
                  Voir les patterns
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Expertise Architecture
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Conception de plateformes data modernes
              </h2>
              <p className="opacity-60">
                Des architectures pensées pour durer, évoluer et créer de la valeur.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ARCHITECTURE_SERVICES.map((service) => (
                <article
                  key={service.title}
                  className="p-6 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors"
                >
                  <service.icon className="w-8 h-8 mb-4 opacity-80" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="opacity-60 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm opacity-70">
                        <CheckCircle2 size={14} className="text-green-600 dark:text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Patterns Section */}
        <section id="patterns" className="section bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Design Patterns
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Patterns d'architecture modernes
              </h2>
              <p className="opacity-60">
                Les architectures de référence adaptées à différents contextes.
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
                  
                  <div className="grid lg:grid-cols-2 gap-6">
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
                    
                    <div>
                      <p className="text-sm uppercase tracking-wide opacity-50 mb-2">
                        Schéma
                      </p>
                      <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-4 overflow-x-auto font-mono opacity-80">
                        {pattern.diagram.trim()}
                      </pre>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Multi-Cloud
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Expertise AWS, GCP & Azure
              </h2>
              <p className="opacity-60">
                Choix du cloud adapté à votre contexte, ou stratégie multi-cloud maîtrisée.
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

        {/* Design Principles */}
        <section className="section bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Principes
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Nos principes de conception
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

        {/* Case Studies Section */}
        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Références
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Architectures déployées
              </h2>
              <p className="opacity-60">
                Exemples de plateformes conçues et mises en production.
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

        {/* CTA Section */}
        <section id="contact" className="section bg-black dark:bg-white text-white dark:text-black">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Votre architecture data a besoin d'évoluer ?
            </h2>
            <p className="opacity-70 mb-8 max-w-xl mx-auto">
              Contactez-nous pour un <strong>audit gratuit</strong> de votre architecture actuelle 
              et découvrez les opportunités d'optimisation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Demande d'audit Architecture Data`}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-medium hover:opacity-80 transition-opacity"
              >
                Demander un audit gratuit
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
