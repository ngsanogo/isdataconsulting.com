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
      title: "Data Engineering",
      shortTitle: "Data Engineering",
      description: "Je construis les tuyaux qui font circuler vos données automatiquement, sans perte et sans erreur.",
      href: "/services/data-engineering",
    },
    {
      id: "product-management-data",
      title: "Data Product Management",
      shortTitle: "Product Management",
      description: "Cadrage produit data, priorisation et pilotage de la valeur métier.",
      href: "/services/product-data",
    },
    {
      id: "product-data",
      title: "Data Product Owner & Chefferie de projet Data",
      shortTitle: "Product Owner & Projet",
      description: "Coordination opérationnelle, delivery et alignement métier-technique des sujets data.",
      href: "/services/product-data",
    },
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;
