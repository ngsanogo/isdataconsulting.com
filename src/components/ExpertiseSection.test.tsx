import { describe, it, expect } from "vitest";
import { render, screen } from "../test/test-utils";
import ExpertiseSection from "./ExpertiseSection";

describe("ExpertiseSection", () => {
  it("renders section heading", () => {
    render(<ExpertiseSection />);

    expect(
      screen.getByRole("heading", {
        name: /trois domaines pour livrer, piloter et manager la data/i,
      })
    ).toBeInTheDocument();
  });

  it("renders all three services", () => {
    render(<ExpertiseSection />);

    expect(screen.getByText("Data Engineering")).toBeInTheDocument();
    expect(screen.getByText("Architecture Data")).toBeInTheDocument();
    expect(screen.getByText("Product Data Services")).toBeInTheDocument();
  });

  it("renders service links with correct hrefs", () => {
    render(<ExpertiseSection />);

    const dataEngLink = screen.getByRole("link", {
      name: /voir le detail data engineering/i,
    });
    expect(dataEngLink).toHaveAttribute("href", "/services/data-engineering");

    const archLink = screen.getByRole("link", {
      name: /voir le detail architecture/i,
    });
    expect(archLink).toHaveAttribute("href", "/services/architecture-data");

    const productLink = screen.getByRole("link", {
      name: /voir le detail product data/i,
    });
    expect(productLink).toHaveAttribute("href", "/services/product-data");
  });

  it("renders technology tags", () => {
    render(<ExpertiseSection />);

    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("Airflow")).toBeInTheDocument();
    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("Terraform")).toBeInTheDocument();
  });

  it("renders benefits for each service", () => {
    render(<ExpertiseSection />);

    expect(
      screen.getByText(/tests automatises et alerting/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/schema cible et adr/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/rituels et management d'equipe/i)
    ).toBeInTheDocument();
  });
});
