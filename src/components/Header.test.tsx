import { describe, it, expect } from "vitest";
import { render, screen } from "../test/test-utils";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("Header", () => {
  it("renders the logo/brand name", () => {
    render(<Header />);

    expect(screen.getByText("ISData")).toBeInTheDocument();
    expect(screen.getByText("Consulting")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Header />);

    expect(screen.getByText("Accueil")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Méthodologie")).toBeInTheDocument();
  });

  it("renders contact button", () => {
    render(<Header />);

    const contactButtons = screen.getAllByText("Contact");
    expect(contactButtons.length).toBeGreaterThan(0);
  });

  it("toggles mobile menu on button click", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: /ouvrir le menu/i });
    expect(menuButton).toBeInTheDocument();

    await user.click(menuButton);

    const closeButton = screen.getByRole("button", { name: /fermer le menu/i });
    expect(closeButton).toBeInTheDocument();
  });

  it("has accessible navigation landmark", () => {
    render(<Header />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders services dropdown on hover", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const servicesButton = screen.getByRole("button", { name: /services/i });

    await user.hover(servicesButton);

    expect(screen.getByText("Data Engineering")).toBeInTheDocument();
    expect(screen.getByText("Architecture Data")).toBeInTheDocument();
    expect(screen.getByText("Product Data Services")).toBeInTheDocument();
  });
});
