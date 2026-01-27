import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const NAV_LINKS = [
  { label: "Expertise", href: "#expertise" },
  { label: "Méthodologie", href: "#methodology" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.svg"
              alt={SITE_CONFIG.name}
              className="h-8 w-8"
              width={32}
              height={32}
            />
            <span className="font-semibold text-lg tracking-tight">
              <span className="text-navy">ISDATA</span>
              <span className="text-slate font-normal"> Consulting</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate hover:text-navy transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm">
              Discutons
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-slate hover:text-navy transition-colors py-2"
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
                Discutons
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
