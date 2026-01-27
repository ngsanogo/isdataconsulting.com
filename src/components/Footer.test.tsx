import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders company name", () => {
    render(<Footer />);
    expect(screen.getByText(/ISDATA Consulting/i)).toBeInTheDocument();
  });

  it("renders legal information", () => {
    render(<Footer />);
    expect(screen.getByText(/SIREN/i)).toBeInTheDocument();
  });
});
