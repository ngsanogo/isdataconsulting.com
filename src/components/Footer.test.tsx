import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders copyright year", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(year.toString()))).toBeInTheDocument();
  });

  it("renders company name in copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/ISDATA CONSULTING/)).toBeInTheDocument();
  });

  it("renders GitHub link", () => {
    render(<Footer />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/ngsanogo");
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("renders LinkedIn link", () => {
    render(<Footer />);
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com");
    expect(linkedinLink).toHaveAttribute("target", "_blank");
  });
});
