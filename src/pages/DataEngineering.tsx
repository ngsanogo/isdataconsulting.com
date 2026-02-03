/**
 * Page Data Engineering Consulting
 * SEO Title: Consultant Data Engineering | Pipelines ETL/ELT & Data Platforms | ISData
 * Meta Description: Expert en data engineering : conception de pipelines ETL/ELT, 
 * ingestion batch & streaming, data lakes et warehouses. Transformez vos données en actifs stratégiques.
 */
import { ArrowRight, Database, Zap, Shield, TrendingUp, CheckCircle2, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SITE_CONFIG } from "@/config/site";

const SERVICES = [
  {
    icon: Database,
    title: "Ingestion de données",
    description: "Collecte et centralisation de vos données depuis toutes vos sources : bases de données, APIs, fichiers, IoT, SaaS.",
    features: ["Connecteurs sur mesure", "CDC (Change Data Capture)", "APIs REST & GraphQL", "Fichiers (CSV, JSON, Parquet)"],
  },
  {
    icon: Zap,
    title: "Pipelines ETL/ELT",
    description: "Conception et orchestration de flux de transformation robustes, testables et maintenables.",
    features: ["Airflow & Dagster", "dbt transformations", "Data quality checks", "Observabilité intégrée"],
  },
  {
    icon: Shield,
    title: "Traitement Batch & Streaming",
    description: "Architecture de traitement adaptée à vos besoins : temps réel ou traitements planifiés.",
    features: ["Apache Spark", "Kafka & Pub/Sub", "Flink & Beam", "Lambda & Kappa architectures"],
  },
  {
    icon: TrendingUp,
    title: "Data Lakes & Warehouses",
    description: "Mise en place de plateformes de stockage modernes, scalables et coût-optimisées.",
    features: ["Snowflake & BigQuery", "Databricks Lakehouse", "Delta Lake & Iceberg", "Data Mesh patterns"],
  },
] as const;

const TECHNOLOGIES = [
  { name: "Python", category: "Langage" },
  { name: "SQL", category: "Langage" },
  { name: "Scala", category: "Langage" },
  { name: "Apache Airflow", category: "Orchestration" },
  { name: "Dagster", category: "Orchestration" },
  { name: "Prefect", category: "Orchestration" },
  { name: "dbt", category: "Transformation" },
  { name: "Apache Spark", category: "Processing" },
  { name: "Kafka", category: "Streaming" },
  { name: "Snowflake", category: "Warehouse" },
  { name: "BigQuery", category: "Warehouse" },
  { name: "Databricks", category: "Platform" },
] as const;

const CASE_STUDIES = [
  {
    sector: "Santé",
    title: "Plateforme de données patients multi-établissements",
    context: "Un groupe hospitalier de 12 établissements avec des données patients fragmentées entre DPI, laboratoires et imagerie médicale.",
    solution: "Pipeline ELT sécurisé avec Airflow, anonymisation automatique RGPD, data warehouse conforme HDS sur GCP.",
    results: [
      "Consolidation de 2M de dossiers patients",
      "Temps d'accès aux données réduit de 48h à 2 minutes",
      "Conformité HDS et RGPD garantie",
    ],
  },
  {
    sector: "Marketing",
    title: "CDP (Customer Data Platform) temps réel",
    context: "Une agence média gérant 50+ campagnes simultanées avec des données dispersées entre Google Ads, Meta, CRM et web analytics.",
    solution: "Ingestion temps réel avec Airbyte, transformation dbt, activation Snowflake + Hightouch pour reverse ETL.",
    results: [
      "Unification de 15M de profils cross-canal",
      "Attribution marketing en quasi temps réel",
      "ROAS amélioré de 45% grâce aux audiences enrichies",
    ],
  },
  {
    sector: "Association",
    title: "Data Warehouse de gestion des adhérents",
    context: "Une fédération associative nationale avec 500+ associations membres, des contrats, contacts et cotisations dispersés dans Excel, CRM legacy et outils métiers.",
    solution: "Data warehouse BigQuery avec pipelines Airflow, modélisation dbt des dimensions adhérents/contrats/paiements, dashboards Looker Studio.",
    results: [
      "Centralisation de 50 000 contrats et 200 000 contacts",
      "Vision 360° des adhérents en temps réel",
      "Automatisation du reporting fédéral (gain de 2 ETP)",
    ],
  },
] as const;

const BENEFITS = [
  {
    title: "Qualité des données garantie",
    description: "Tests automatisés, validation des schémas, monitoring des anomalies pour des données fiables.",
  },
  {
    title: "Time-to-insight réduit",
    description: "De la donnée brute à l'analyse en minutes plutôt qu'en jours grâce à des pipelines optimisés.",
  },
  {
    title: "Scalabilité native",
    description: "Architectures conçues pour évoluer avec vos volumes sans refonte majeure.",
  },
  {
    title: "Coûts maîtrisés",
    description: "Optimisation du compute et du stockage cloud, FinOps intégré dès la conception.",
  },
] as const;

export default function DataEngineering() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Consultant Data Engineering | Pipelines ETL/ELT & Data Platforms | ISData"
        description="Expert en data engineering : conception de pipelines ETL/ELT, ingestion batch & streaming, data lakes et warehouses. Airflow, dbt, Spark. Transformez vos données en actifs stratégiques."
        keywords={["consultant data engineering", "pipelines ETL ELT", "data platform", "Airflow", "dbt", "Spark", "data lake", "data warehouse"]}
        canonicalPath="/services/data-engineering"
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
                Consultant Data Engineering
              </p>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight mb-6">
                Transformez vos données en actifs stratégiques
              </h1>

              <p className="text-lg opacity-70 leading-relaxed mb-8 max-w-2xl">
                Expert en <strong>data engineering</strong>, je conçois et implémente des 
                <strong> pipelines de données robustes</strong> : ingestion, transformation ETL/ELT, 
                traitement batch et streaming. De l'architecture à la mise en production.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn-primary">
                  Évaluation gratuite de votre architecture
                  <ArrowRight size={16} />
                </a>
                <a href="#services" className="btn-secondary">
                  Découvrir les services
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
                Services Data Engineering
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                De l'ingestion à l'exploitation
              </h2>
              <p className="opacity-60">
                Solutions complètes pour industrialiser vos flux de données et fiabiliser vos analyses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {SERVICES.map((service) => (
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

        {/* Technologies Section */}
        <section className="section bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Stack Technique
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Technologies maîtrisées
              </h2>
              <p className="opacity-60">
                Expertise sur les outils leaders du marché, choisis selon votre contexte.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {TECHNOLOGIES.map((tech) => (
                <span
                  key={tech.name}
                  className="px-4 py-2 border border-black/10 dark:border-white/10 text-sm font-medium"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Bénéfices Métier
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Pourquoi investir dans le Data Engineering ?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BENEFITS.map((benefit) => (
                <div key={benefit.title}>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="section bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Cas Clients
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Projets data engineering réussis
              </h2>
              <p className="opacity-60">
                Exemples de missions réalisées dans différents secteurs.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {CASE_STUDIES.map((study) => (
                <article
                  key={study.title}
                  className="p-6 bg-white dark:bg-black border border-black/10 dark:border-white/10"
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
        <section className="section bg-black dark:bg-white text-white dark:text-black">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Prêt à industrialiser vos données ?
            </h2>
            <p className="opacity-70 mb-8 max-w-xl mx-auto">
              Contactez-nous pour une <strong>évaluation gratuite</strong> de votre architecture data 
              et découvrez comment optimiser vos pipelines de données.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Demande d'évaluation Data Engineering`}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-medium hover:opacity-80 transition-opacity"
              >
                Demander une évaluation gratuite
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
