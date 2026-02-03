/**
 * Composant SEO pour les pages de services
 * Injecte les métadonnées dans le head de la page
 */
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath: string;
  ogImage?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords = [], 
  canonicalPath,
  ogImage = "https://isdataconsulting.com/og-image.png"
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update keywords
    if (keywords.length > 0) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords.join(", "));
      }
    }

    // Update canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `https://isdataconsulting.com${canonicalPath}`);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("href", `https://isdataconsulting.com${canonicalPath}`);

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute("content", ogImage);

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", description);

  }, [title, description, keywords, canonicalPath, ogImage]);

  return null;
}
