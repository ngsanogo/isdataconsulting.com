import { ArrowRight, Database, Zap, Shield, TrendingUp, CheckCircle2, ArrowLeft } from "lucide-react";
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
    title: "Ingestion de données",
    description: "Ingestion depuis bases de donnees, APIs, fichiers, IoT ou SaaS, avec mapping et contrats de schema.",
    features: ["Connecteurs sur mesure", "CDC (Change Data Capture)", "APIs REST & GraphQL", "Fichiers (CSV, JSON, Parquet)"],
  },
  {
    icon: Zap,
    title: "Pipelines ETL/ELT",
    description: "Orchestration et transformation avec tests, monitoring et runbooks.",
    features: ["Airflow & Dagster", "dbt transformations", "Data quality checks", "Observabilité intégrée"],
  },
  {
    icon: Shield,
    title: "Traitement Batch & Streaming",
    description: "Traitements batch ou streaming, avec SLA et gestion des incidents.",
    features: ["Apache Spark", "Kafka & Pub/Sub", "Flink & Beam", "Lambda & Kappa architectures"],
  },
  {
    icon: TrendingUp,
    title: "Data Lakes & Warehouses",
    description: "Stockage et modeles analytiques avec gouvernance et controle des couts.",
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
      "Consolidation des dossiers patients",
      "Reduction du temps d'acces aux donnees",
      "Conformite HDS et RGPD selon contraintes",
    ],
  },
  {
    sector: "Marketing",
    title: "CDP (Customer Data Platform) temps réel",
    context: "Une agence média gérant 50+ campagnes simultanées avec des données dispersées entre Google Ads, Meta, CRM et web analytics.",
    solution: "Ingestion temps réel avec Airbyte, transformation dbt, activation Snowflake + Hightouch pour reverse ETL.",
    results: [
      "Unification des profils cross-canal",
      "Attribution marketing plus reactive",
      "Audiences enrichies et activables",
    ],
  },
  {
    sector: "Association",
    title: "Data Warehouse de gestion des adhérents",
    context: "Une fédération associative nationale avec 500+ associations membres, des contrats, contacts et cotisations dispersés dans Excel, CRM legacy et outils métiers.",
    solution: "Data warehouse BigQuery avec pipelines Airflow, modélisation dbt des dimensions adhérents/contrats/paiements, dashboards Looker Studio.",
    results: [
      "Centralisation des contrats et contacts",
      "Vision 360 des adherents",
      "Reporting automatise",
    ],
  },
] as const;

const BENEFITS = [
  {
    title: "Qualite mesuree",
    description: "Tests automatises, validation de schemas, alertes et monitoring.",
  },
  {
    title: "Time-to-insight",
    description: "Flux optimises pour livrer des donnees utilisables.",
  },
  {
    title: "Scalabilite",
    description: "Architecture qui evolue avec les volumes et les usages.",
  },
  {
    title: "Couts suivis",
    description: "Suivi des couts et optimisations structurelles.",
  },
] as const;

export default function DataEngineering() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Pipelines de données automatisés | Expert Data indépendant Bezons (95) | ISData"
        description="Automatisation de vos flux de données : gain de temps, fiabilité et vue d'ensemble. Expert data indépendant basé en Île-de-France (Bezons, 95). Cloud ou On-Premise."
        keywords={["automatisation données PME", "pipelines données fiables", "gain de temps data", "expert data Bezons", "Île-de-France", "Airflow", "dbt", "Cloud On-Premise"]}
        canonicalPath="/services/data-engineering"
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
                Flux & Pipelines de données
              </p>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight mb-6">
                Vos données circulent automatiquement, sans perte, sans erreur
              </h1>

              <p className="text-lg opacity-70 leading-relaxed mb-8 max-w-2xl">
                Je construis les tuyaux qui font circuler vos données : ingestion, transformation,
                automatisation. Résultat : gain de temps, fiabilité et une vue d'ensemble claire.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn-primary">
                  Réserver une visio découverte (1h)
                  <ArrowRight size={16} />
                </a>
                <a href="#services" className="btn-secondary">
                  Découvrir les services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container mx-auto">
            <SectionHeader
              tag="Services Data Engineering"
              title="De l'ingestion a l'exploitation"
              description="Livrables: pipelines, tests, monitoring, documentation."
            />

            <div className="grid md:grid-cols-2 gap-6">
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
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Stack technique
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Technologies utilisees selon contexte
              </h2>
              <p className="opacity-60">
                Choix d'outils justifies par contraintes techniques et budget.
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

        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Benefices metier
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Pourquoi investir dans le Data Engineering
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

        <section className="section bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Cas Clients
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

        <section id="contact" className="section bg-black dark:bg-white text-white dark:text-black">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Vos données méritent de circuler sans accroc
            </h2>
            <p className="opacity-70 mb-8 max-w-xl mx-auto">
              Gain de temps, fiabilité, vue d'ensemble : on en parle ?
            </p>

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
