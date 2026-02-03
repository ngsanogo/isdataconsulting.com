import { describe, it, expect } from "vitest";
import { render, screen } from "../test/test-utils";
import ExpertiseSection from "./ExpertiseSection";

describe("ExpertiseSection", () => {
  it("renders section heading", () => {
    render(<ExpertiseSection />);

    expect(
      screen.getByRole("heading", {
        name: /trois expertises complémentaires/i,
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
      name: /voir nos services data engineering/i,
    });
    expect(dataEngLink).toHaveAttribute("href", "/services/data-engineering");

    const archLink = screen.getByRole("link", {
      name: /explorer nos expertises architecture/i,
    });
    expect(archLink).toHaveAttribute("href", "/services/architecture-data");

    const productLink = screen.getByRole("link", {
      name: /voir nos missions product data/i,
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
      screen.getByText(/pipelines qui tournent sans intervention/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/architecture évolutive sans dette technique/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/projets qui respectent le planning/i)
    ).toBeInTheDocument();
  });
});
