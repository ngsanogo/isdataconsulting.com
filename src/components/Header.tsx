import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Expertise", href: "#expertise" },
  { label: "Méthodologie", href: "#methodology" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-semibold text-lg tracking-tight">
              ISDATA<span className="font-normal opacity-60"> Consulting</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-black/10 dark:border-white/10">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base opacity-60 hover:opacity-100 transition-opacity py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
