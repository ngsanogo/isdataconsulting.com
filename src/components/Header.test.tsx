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
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders CTA button", () => {
    render(<Header />);
    expect(screen.getByText("Discutons")).toBeInTheDocument();
  });
});
