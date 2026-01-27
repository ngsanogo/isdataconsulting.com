// Site metadata for SEO and social sharing
export const SITE_CONFIG = {
  name: "IS Data Consulting",
  description: "Data Analytics & Business Intelligence Solutions",
  url: "https://isdataconsulting.com",
  image: "https://isdataconsulting.com/og-image.png", // TODO: Replace with actual OG image
  author: "IS Data Consulting",
  email: "contact@isdataconsulting.com",
  phone: "+33 6 51 98 52 79",
  social: {
    twitter: "@isdataconsulting",
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
  "twitter:card": "summary_large_image",
  "twitter:creator": SITE_CONFIG.social.twitter,
} as const;
