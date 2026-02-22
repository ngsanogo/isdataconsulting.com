import { describe, expect, it } from "vitest";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { SITE_CONFIG } from "@/config/site";

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