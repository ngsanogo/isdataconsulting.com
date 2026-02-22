export const SITE_CONFIG = {
  name: "ISData Consulting",

  email: "contact@isdataconsulting.com",
  phone: "+33 6 51 98 52 79",

  legalForm: "SAS",
  siren: "940 718 075",
  tva: "FR56940718075",
  annuaire:
    "https://annuaire-entreprises.data.gouv.fr/entreprise/isdata-consulting-940718075",

  social: {
    linkedin: "isdataconsulting",
  },

  services: [
    {
      id: "data-engineering",
      title: "Flux & Pipelines de données",
      shortTitle: "Pipelines",
      description: "Je construis les tuyaux qui font circuler vos données automatiquement, sans perte et sans erreur.",
      href: "/services/data-engineering",
    },
    {
      id: "architecture-data",
      title: "Architecture Data (Cloud ou On-Premise)",
      shortTitle: "Architecture",
      description: "Une structure de données fiable et maintenable selon votre contexte.",
      href: "/services/architecture-data",
    },
    {
      id: "product-data",
      title: "Pilotage de projet Data",
      shortTitle: "Pilotage",
      description: "Je pilote votre projet data de A à Z : cadrage, exécution agile, transfert à vos équipes.",
      href: "/services/product-data",
    },
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;
