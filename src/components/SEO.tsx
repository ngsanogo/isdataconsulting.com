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
  ogImage = "https://isdataconsulting.com/og-image.png",
}: SEOProps) {
  const canonicalUrl = `https://isdataconsulting.com${canonicalPath}`;

  useEffect(() => {
    document.title = title;

    const upsertMetaByName = (name: string, content: string) => {
      let node = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!node) {
        node = document.createElement("meta");
        node.setAttribute("name", name);
        document.head.appendChild(node);
      }
      node.setAttribute("content", content);
    };

    const upsertMetaByProperty = (property: string, content: string) => {
      let node = document.head.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!node) {
        node = document.createElement("meta");
        node.setAttribute("property", property);
        document.head.appendChild(node);
      }
      node.setAttribute("content", content);
    };

    let canonicalNode = document.head.querySelector("link[rel=\"canonical\"]") as HTMLLinkElement | null;
    if (!canonicalNode) {
      canonicalNode = document.createElement("link");
      canonicalNode.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalNode);
    }
    canonicalNode.setAttribute("href", canonicalUrl);

    upsertMetaByName("description", description);
    if (keywords.length > 0) {
      upsertMetaByName("keywords", keywords.join(", "));
    }
    upsertMetaByProperty("og:type", "website");
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:image", ogImage);

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", ogImage);
  }, [canonicalUrl, description, keywords, ogImage, title]);

  return null;
}
