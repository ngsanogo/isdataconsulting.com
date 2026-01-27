// Site metadata for SEO and social sharing
export const SITE_CONFIG = {
  name: "ISData Consulting",
  description: "Data Analytics & Business Intelligence Solutions",
  url: "https://isdataconsulting.com",
  image: "https://isdataconsulting.com/logo.png",
  author: "ISData Consulting",
  email: "contact@isdataconsulting.com",
  phone: "+33 6 51 98 52 79",
  // Legal information
  siren: "940 718 075",
  tva: "FR56940718075",
  address: "152 Avenue Gabriel Péri, 95870 Bezons",
  legalForm: "SASU",
  social: {
    linkedin: "isdataconsulting",
    github: "ngsanogo",
  },
  seo: {
    keywords: [
      "data consulting",
      "business intelligence",
      "data analytics",
      "data engineering",
      "système d'information",
      "conseil IT",
      "développement logiciel",
    ],
  },
} as const;

export const DEFAULT_OG_TAGS = {
  "og:type": "website",
  "og:site_name": SITE_CONFIG.name,
  "og:image": SITE_CONFIG.image,
  "og:url": SITE_CONFIG.url,
} as const;
