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
      title: "Architecture & Fondations",
      shortTitle: "Architecture",
      description: "Conception d'une infrastructure data sobre, lisible et adaptée à vos besoins réels.",
      href: "/services/architecture-data",
    },
    {
      id: "product-management-data",
      title: "Ingénierie & Automatisation",
      shortTitle: "Ingénierie",
      description: "Flux de données robustes et automatisés pour fiabiliser votre production au quotidien.",
      href: "/services/data-engineering",
    },
    {
      id: "product-data",
      title: "Pilotage & Stratégie",
      shortTitle: "Pilotage",
      description: "Traduction des enjeux métier en exécution data concrète, avec coordination et livrables clairs.",
      href: "/services/product-data",
    },
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;
