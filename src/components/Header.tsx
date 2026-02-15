import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2">
            <span className="font-bold text-lg tracking-tight">
              ISData<span className="font-normal opacity-60"> Consulting</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="/"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Accueil
            </a>

            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm opacity-60 hover:opacity-100 transition-opacity py-4"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
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
                className={`absolute top-full left-0 w-80 bg-white dark:bg-black border border-black/10 dark:border-white/10 shadow-lg transition-all ${
                  servicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {SITE_CONFIG.services.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className="block p-5 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors border-b border-black/5 dark:border-white/5 last:border-0"
                  >
                    <span className="font-semibold text-base block mb-2">
                      {service.title}
                    </span>
                    <span className="text-sm opacity-60 line-clamp-2">
                      {service.description}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/#methodology"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Méthodologie
            </a>
            <a
              href="/#contact"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Contact
            </a>
            <a href="/#contact" className="btn-primary text-sm">
              Contact
            </a>
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
              <a
                href="/"
                className="text-base opacity-60 hover:opacity-100 transition-opacity py-2"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </a>

              <div className="py-2">
                <p className="text-sm font-medium opacity-50 uppercase tracking-wide mb-2">
                  Services
                </p>
                <div className="pl-4 space-y-2">
                  {SITE_CONFIG.services.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className="block text-base opacity-60 hover:opacity-100 transition-opacity py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="/#methodology"
                className="text-base opacity-60 hover:opacity-100 transition-opacity py-2"
                onClick={() => setIsOpen(false)}
              >
                Méthodologie
              </a>

              <a
                href="/#contact"
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
