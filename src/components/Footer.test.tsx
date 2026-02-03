import { describe, it, expect } from "vitest";
import { render, screen } from "../test/test-utils";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders company name", () => {
    render(<Footer />);

    expect(screen.getByText("ISData")).toBeInTheDocument();
  });

  it("renders LinkedIn link", () => {
    render(<Footer />);

    const linkedInLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://linkedin.com/company/isdataconsulting"
    );
    expect(linkedInLink).toHaveAttribute("target", "_blank");
    expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders legal annuaire link", () => {
    render(<Footer />);

    const annuaireLink = screen.getByRole("link", { name: /annuaire légal/i });
    expect(annuaireLink).toHaveAttribute("target", "_blank");
    expect(annuaireLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders current year in copyright", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it("renders legal information (SIREN, TVA)", () => {
    render(<Footer />);

    expect(screen.getByText(/siren 940 718 075/i)).toBeInTheDocument();
    expect(screen.getByText(/tva fr56940718075/i)).toBeInTheDocument();
  });
});
