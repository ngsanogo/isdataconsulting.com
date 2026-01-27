import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header", () => {
  it("renders site logo", () => {
    render(<Header />);
    const logo = screen.getByText(/ISDATA/);
    expect(logo).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Méthodologie")).toBeInTheDocument();
  });

  it("renders contact email", () => {
    render(<Header />);
    expect(screen.getByText("contact@isdata.fr")).toBeInTheDocument();
  });

  it("has correct href for contact link", () => {
    render(<Header />);
    const contactLinks = screen.getAllByText("contact@isdata.fr");
    contactLinks.forEach((link) => {
      expect(link.closest("a")).toHaveAttribute("href", "mailto:contact@isdata.fr");
    });
  });
});
