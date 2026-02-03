import { describe, it, expect } from "vitest";
import { SITE_CONFIG } from "./site";

describe("SITE_CONFIG", () => {
  it("has required company information", () => {
    expect(SITE_CONFIG.name).toBe("ISData Consulting");
    expect(SITE_CONFIG.email).toBe("contact@isdataconsulting.com");
    expect(SITE_CONFIG.phone).toBeDefined();
    expect(SITE_CONFIG.url).toBe("https://isdataconsulting.com");
  });

  it("has valid legal information", () => {
    expect(SITE_CONFIG.siren).toMatch(/^\d{3}\s\d{3}\s\d{3}$/);
    expect(SITE_CONFIG.tva).toMatch(/^FR\d{11}$/);
    expect(SITE_CONFIG.legalForm).toBe("SASU");
  });

  it("has three services defined", () => {
    expect(SITE_CONFIG.services).toHaveLength(3);

    const serviceIds = SITE_CONFIG.services.map((s) => s.id);
    expect(serviceIds).toContain("data-engineering");
    expect(serviceIds).toContain("architecture-data");
    expect(serviceIds).toContain("product-data");
  });

  it("services have required fields", () => {
    SITE_CONFIG.services.forEach((service) => {
      expect(service.id).toBeDefined();
      expect(service.title).toBeDefined();
      expect(service.shortTitle).toBeDefined();
      expect(service.description).toBeDefined();
      expect(service.href).toMatch(/^\/services\//);
      expect(service.keywords).toBeInstanceOf(Array);
    });
  });

  it("has SEO keywords defined", () => {
    expect(SITE_CONFIG.seo.keywords).toBeInstanceOf(Array);
    expect(SITE_CONFIG.seo.keywords.length).toBeGreaterThan(0);
    expect(SITE_CONFIG.seo.keywords).toContain("consultant data engineering");
  });

  it("has social links", () => {
    expect(SITE_CONFIG.social.linkedin).toBe("isdataconsulting");
  });
});
