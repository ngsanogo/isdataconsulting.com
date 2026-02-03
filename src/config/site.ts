/**
 * Configuration centrale du site ISData Consulting
 * Toutes les informations modifiables en un seul endroit
 */

export const SITE_CONFIG = {
  name: "ISData Consulting",
  tagline: "L'ingénierie des données au service de la décision",
  description:
    "Cabinet de conseil spécialisé en Data Engineering, Architecture Data Cloud et Product Data Services. Expert consultant data engineering, architecte data et Product Owner Data.",
  url: "https://isdataconsulting.com",
  image: "https://isdataconsulting.com/og-image.png",

  // Contact
  email: "contact@isdataconsulting.com",
  phone: "+33 6 51 98 52 79",

  // Légal
  legalForm: "SASU",
  siren: "940 718 075",
  tva: "FR56940718075",
  address: "152 Avenue Gabriel Péri, 95870 Bezons",
  annuaire:
    "https://annuaire-entreprises.data.gouv.fr/entreprise/isdata-consulting-940718075",

  // Réseaux sociaux
  social: {
    linkedin: "isdataconsulting",
  },

  // SEO
  seo: {
    keywords: [
      "consultant data engineering",
      "architecture data cloud",
      "product owner data",
      "data manager",
      "chef de projet data",
      "pipelines ETL ELT",
      "data platform",
      "AWS GCP Azure data",
      "data mesh",
      "lakehouse architecture",
      "conseil data",
      "business intelligence",
      "gouvernance données",
    ],
  },

  // Services / Expertises
  services: [
    {
      id: "data-engineering",
      title: "Data Engineering",
      shortTitle: "Engineering",
      description: "Pipelines ETL/ELT, ingestion batch & streaming, data lakes et warehouses modernes.",
      href: "/services/data-engineering",
      keywords: ["consultant data engineering", "pipelines ETL", "data platform", "Airflow", "dbt", "Spark"],
    },
    {
      id: "architecture-data",
      title: "Architecture Data",
      shortTitle: "Architecture",
      description: "Conception d'architectures cloud scalables sur AWS, GCP, Azure. Data Mesh, Lakehouse.",
      href: "/services/architecture-data",
      keywords: ["architecture data cloud", "AWS", "GCP", "Azure", "data mesh", "lakehouse"],
    },
    {
      id: "product-data",
      title: "Product Data Services",
      shortTitle: "Product Data",
      description: "Product Owner Data, Data Manager, Chef de Projet Data. Pilotage agile de vos produits data.",
      href: "/services/product-data",
      keywords: ["product owner data", "data manager", "chef de projet data", "gouvernance data"],
    },
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;
