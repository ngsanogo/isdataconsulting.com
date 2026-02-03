import { describe, it, expect } from "vitest";
import { render, screen } from "../test/test-utils";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders the main headline", () => {
    render(<HeroSection />);

    expect(
      screen.getByRole("heading", {
        name: /vos données méritent mieux qu'un pipeline qui casse/i,
      })
    ).toBeInTheDocument();
  });

  it("renders target audience", () => {
    render(<HeroSection />);

    expect(screen.getByText(/pour les cto, cdo et head of data/i)).toBeInTheDocument();
  });

  it("renders value points", () => {
    render(<HeroSection />);

    expect(screen.getByText(/pipelines etl\/elt robustes/i)).toBeInTheDocument();
    expect(screen.getByText(/architectures cloud scalables/i)).toBeInTheDocument();
    expect(screen.getByText(/pilotage agile/i)).toBeInTheDocument();
  });

  it("renders primary CTA button", () => {
    render(<HeroSection />);

    const ctaLink = screen.getByRole("link", {
      name: /réserver un appel découverte gratuit/i,
    });
    expect(ctaLink).toHaveAttribute("href", "#contact");
  });

  it("renders secondary CTA button", () => {
    render(<HeroSection />);

    const secondaryCTA = screen.getByRole("link", {
      name: /voir mes expertises/i,
    });
    expect(secondaryCTA).toHaveAttribute("href", "#expertise");
  });

  it("renders micro-reassurance text", () => {
    render(<HeroSection />);

    expect(screen.getByText(/réponse sous 24h/i)).toBeInTheDocument();
    expect(screen.getByText(/\+10 ans d'expérience/i)).toBeInTheDocument();
  });
});
