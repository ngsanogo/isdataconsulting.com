import { describe, expect, it } from "vitest";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { SITE_CONFIG } from "@/config/site";
import Index from "@/pages/Index";
import FAQSection from "@/components/FAQSection";
import StickyCTA from "@/components/StickyCTA";

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

  it("toggles mobile navigation drawer", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const menuToggle = screen.getByRole("button", { name: "Ouvrir le menu" });
    fireEvent.click(menuToggle);

    expect(screen.getByRole("button", { name: "Fermer le menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);

    fireEvent.click(screen.getByRole("button", { name: "Fermer le menu" }));
    expect(screen.getByRole("button", { name: "Ouvrir le menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
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

  it("toggles FAQ items with correct aria-expanded state", () => {
    render(<FAQSection />);

    const firstQuestion = screen.getByRole("button", {
      name: "Quelle est la différence avec une ESN ?",
    });

    expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(firstQuestion);
    expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
  });

  it("shows and dismisses sticky CTA after scroll", async () => {
    Object.defineProperty(document.body, "offsetHeight", {
      configurable: true,
      value: 5000,
    });

    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 900,
    });

    render(<StickyCTA />);
    fireEvent.scroll(window);

    const contactLink = await screen.findByRole("link", { name: "Me contacter" });
    expect(contactLink).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Fermer" }));

    await waitFor(() => {
      expect(screen.queryByRole("link", { name: "Me contacter" })).not.toBeInTheDocument();
    });
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