import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders the main headline", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Ingénierie de Données/i)).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<HeroSection />);
    expect(screen.getByRole("link", { name: /Contact/i })).toBeInTheDocument();
    expect(screen.getByText("Expertise")).toBeInTheDocument();
  });
});
