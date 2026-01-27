import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the logo", () => {
    render(<Header />);
    expect(screen.getByText("ISDATA")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Expertise")).toBeInTheDocument();
    expect(screen.getByText("Méthodologie")).toBeInTheDocument();
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  it("renders CTA button", () => {
    render(<Header />);
    const ctaButtons = screen.getAllByRole("link", { name: "Contact" });
    expect(ctaButtons.length).toBeGreaterThan(0);
  });
});
