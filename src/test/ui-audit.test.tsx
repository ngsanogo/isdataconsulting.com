import { describe, expect, it } from "vitest";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { SITE_CONFIG } from "@/config/site";
import Index from "@/pages/Index";

describe("UI quality audit", () => {
  it("renders accessible mobile navigation toggle", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const menuToggle = screen.getByRole("button", { name: "Ouvrir le menu" });
    expect(menuToggle).toHaveAttribute("aria-expanded", "false");
  });

  it("renders all service entries in navigation", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    for (const service of SITE_CONFIG.services) {
      expect(screen.getAllByText(service.title).length).toBeGreaterThan(0);
    }
  });

  it("exposes desktop services menu semantics", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const servicesButton = screen.getByRole("button", { name: "Services" });
    expect(servicesButton).toHaveAttribute("aria-haspopup", "menu");
    expect(servicesButton).toHaveAttribute("aria-controls", "services-menu");
    expect(document.getElementById("services-menu")).toHaveAttribute("role", "menu");
  });

  it("renders skip link to main content", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );

    const skipLink = screen.getByRole("link", {
      name: "Aller au contenu principal",
    });

    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("injects canonical and social metadata", async () => {
    render(
      <HelmetProvider>
        <SEO
          title="Audit SEO"
          description="Description de test"
          canonicalPath="/services/data-engineering"
          keywords={["data", "consulting"]}
        />
      </HelmetProvider>,
    );

    await waitFor(() => {
      expect(document.title).toBe("Audit SEO");
    });

    expect(document.head.innerHTML).toContain(
      'href="https://isdataconsulting.com/services/data-engineering"',
    );
    expect(document.head.innerHTML).toContain('property="og:title" content="Audit SEO"');
    expect(document.head.innerHTML).toContain(
      'name="twitter:card" content="summary_large_image"',
    );
  });
});