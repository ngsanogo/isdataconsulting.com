import { describe, it, expect } from "vitest";
import { render, screen } from "../test/test-utils";
import userEvent from "@testing-library/user-event";
import FAQSection from "./FAQSection";

describe("FAQSection", () => {
  it("renders the section heading", () => {
    render(<FAQSection />);

    expect(screen.getByText("Questions fréquentes")).toBeInTheDocument();
    expect(
      screen.getByText("Tout ce que vous devez savoir")
    ).toBeInTheDocument();
  });

  it("renders all FAQ questions", () => {
    render(<FAQSection />);

    // Check for some key questions
    expect(
      screen.getByText(
        /différence entre un consultant data engineering indépendant/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/technologies maîtrisez-vous/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/intervenir en tant que Product Owner/i)
    ).toBeInTheDocument();
  });

  it("expands FAQ answer on click", async () => {
    const user = userEvent.setup();
    render(<FAQSection />);

    // Find a question button
    const questionButton = screen.getByRole("button", {
      name: /quels sont vos tarifs/i,
    });

    // Initially, answer should not be visible
    expect(
      screen.queryByText(/je travaille au tjm/i)
    ).not.toBeInTheDocument();

    // Click to expand
    await user.click(questionButton);

    // Answer should now be visible
    expect(screen.getByText(/je travaille au tjm/i)).toBeInTheDocument();
  });

  it("collapses FAQ answer on second click", async () => {
    const user = userEvent.setup();
    render(<FAQSection />);

    const questionButton = screen.getByRole("button", {
      name: /quels sont vos tarifs/i,
    });

    // Click to expand
    await user.click(questionButton);
    expect(screen.getByText(/je travaille au tjm/i)).toBeInTheDocument();

    // Click to collapse
    await user.click(questionButton);
    expect(
      screen.queryByText(/je travaille au tjm/i)
    ).not.toBeInTheDocument();
  });

  it("has correct aria-expanded attribute", async () => {
    const user = userEvent.setup();
    render(<FAQSection />);

    const questionButton = screen.getByRole("button", {
      name: /quels sont vos tarifs/i,
    });

    // Initially collapsed
    expect(questionButton).toHaveAttribute("aria-expanded", "false");

    // Click to expand
    await user.click(questionButton);
    expect(questionButton).toHaveAttribute("aria-expanded", "true");
  });

  it("renders contact link in header", () => {
    render(<FAQSection />);

    const contactLink = screen.getByRole("link", {
      name: /contactez-moi directement/i,
    });
    expect(contactLink).toHaveAttribute("href", "#contact");
  });
});
