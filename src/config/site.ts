/**
 * Configuration centrale du site ISDATA Consulting
 * Toutes les informations modifiables en un seul endroit
 */

export const SITE_CONFIG = {
  name: "ISDATA Consulting",
  tagline: "L'ingénierie des données au service de la décision",
  description:
    "Cabinet de conseil spécialisé en Data Engineering, Architecture de données et Transformation digitale.",
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
    github: "ngsanogo",
    linkedin: "isdataconsulting",
  },

  // SEO
  seo: {
    keywords: [
      "data consulting",
      "data engineering",
      "architecture données",
      "conseil data",
      "business intelligence",
      "ETL pipeline",
    ],
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
