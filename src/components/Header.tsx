import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-lg tracking-tight">
              ISData<span className="font-normal opacity-60"> Consulting</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Accueil
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              onBlur={(event) => {
                const nextFocusedNode = event.relatedTarget as Node | null;
                if (!event.currentTarget.contains(nextFocusedNode)) {
                  setServicesOpen(false);
                }
              }}
            >
              <button
                type="button"
                id="services-menu-button"
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setServicesOpen(false);
                  }
                }}
                className="flex items-center gap-1 text-sm opacity-60 hover:opacity-100 transition-opacity py-4"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id="services-menu"
                role="menu"
                aria-labelledby="services-menu-button"
                className={`absolute top-full left-0 w-80 bg-white dark:bg-black border border-black/10 dark:border-white/10 shadow-lg transition-all ${
                  servicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {SITE_CONFIG.services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    role="menuitem"
                    className="block p-5 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors border-b border-black/5 dark:border-white/5 last:border-0"
                  >
                    <span className="font-semibold text-base block mb-2">
                      {service.title}
                    </span>
                    <span className="text-sm opacity-60 line-clamp-2">
                      {service.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/#faq"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              FAQ
            </Link>
            <Link to="/#contact" className="btn-primary text-sm">
              Contact
            </Link>
          </div>

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

        {isOpen && (
          <div className="md:hidden py-4 border-t border-black/10 dark:border-white/10">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-base opacity-60 hover:opacity-100 transition-opacity py-2"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>

              <div className="py-2">
                <p className="text-sm font-medium opacity-50 uppercase tracking-wide mb-2">
                  Services
                </p>
                <div className="pl-4 space-y-2">
                  {SITE_CONFIG.services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block text-base opacity-60 hover:opacity-100 transition-opacity py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/#faq"
                className="text-base opacity-60 hover:opacity-100 transition-opacity py-2"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>

              <Link
                to="/#contact"
                className="btn-primary text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
