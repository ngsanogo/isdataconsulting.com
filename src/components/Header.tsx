import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Méthodologie", href: "#methodology" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.png" alt="IS Data Consulting" className="h-10 w-10" />
            <span className="font-mono font-semibold text-lg tracking-tight">
              ISDATA<span className="text-muted-foreground">_</span>CONSULTING
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:contact@isdata.fr"
              className="text-sm font-medium text-foreground border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
            >
              contact@isdata.fr
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:contact@isdata.fr"
              className="text-foreground border border-foreground px-4 py-2 text-center hover:bg-foreground hover:text-background transition-colors mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              contact@isdata.fr
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
