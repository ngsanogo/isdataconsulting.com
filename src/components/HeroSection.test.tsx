import { describe, it, expect } from "vitest";
import { render, screen } from "../test/test-utils";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders the main headline", () => {
    render(<HeroSection />);

    expect(
      screen.getByRole("heading", {
        name: /data engineering, architecture data, product data et management d'equipe data/i,
      })
    ).toBeInTheDocument();
  });

  it("renders target audience", () => {
    render(<HeroSection />);

    expect(screen.getByText(/pour les cto, cdo et head of data/i)).toBeInTheDocument();
  });

  it("renders value points", () => {
    render(<HeroSection />);

    expect(screen.getByText(/etl\/elt testes, monitores, documentes/i)).toBeInTheDocument();
    expect(screen.getByText(/architecture data documentee/i)).toBeInTheDocument();
    expect(screen.getByText(/backlog, kpi, rituels et management/i)).toBeInTheDocument();
  });

  it("renders primary CTA button", () => {
    render(<HeroSection />);

    const ctaLink = screen.getByRole("link", {
      name: /planifier un appel de cadrage/i,
    });
    expect(ctaLink).toHaveAttribute("href", "#contact");
  });

  it("renders secondary CTA button", () => {
    render(<HeroSection />);

    const secondaryCTA = screen.getByRole("link", {
      name: /voir les domaines d'intervention/i,
    });
    expect(secondaryCTA).toHaveAttribute("href", "#expertise");
  });

  it("renders micro-reassurance text", () => {
    render(<HeroSection />);

    expect(screen.getByText(/réponse sous 24h/i)).toBeInTheDocument();
    expect(screen.getByText(/interlocuteur unique/i)).toBeInTheDocument();
  });
});
