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
      shortTitle: "Engineering",
      description: "Pipelines ETL/ELT, ingestion batch & streaming, data lakes et warehouses modernes.",
      href: "/services/data-engineering",
    },
    {
      id: "architecture-data",
      title: "Architecture Data",
      shortTitle: "Architecture",
      description: "Conception d'architectures cloud scalables sur AWS, GCP, Azure. Data Mesh, Lakehouse.",
      href: "/services/architecture-data",
    },
    {
      id: "product-data",
      title: "Product Data Services",
      shortTitle: "Product Data",
      description: "Product Owner Data, Chef de Projet Data, Management d'equipe data. Pilotage et delivery data.",
      href: "/services/product-data",
    },
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;
