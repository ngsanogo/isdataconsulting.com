import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/HeroSection";

describe("HeroSection", () => {
  it("renders main heading", () => {
    render(<HeroSection />);
    expect(screen.getByText(/L'ingénierie logicielle simplifiée/)).toBeInTheDocument();
  });

  it("renders company description", () => {
    render(<HeroSection />);
    expect(screen.getByText(/ISDATA CONSULTING résout des problèmes complexes/)).toBeInTheDocument();
  });

  it("renders CTA button", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Discutons de votre projet/)).toBeInTheDocument();
  });

  it("renders SIREN number", () => {
    render(<HeroSection />);
    expect(screen.getByText(/940 718 075/)).toBeInTheDocument();
  });

  it("has correct link for contact section", () => {
    render(<HeroSection />);
    const contactLink = screen.getByText(/Discutons de votre projet/);
    expect(contactLink.closest("a")).toHaveAttribute("href", "#contact");
  });

  it("has correct link for services section", () => {
    render(<HeroSection />);
    const servicesLink = screen.getByText(/Voir les services/);
    expect(servicesLink.closest("a")).toHaveAttribute("href", "#services");
  });
});
