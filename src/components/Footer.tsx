import { Linkedin, ExternalLink, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8 pb-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-md">
            <p className="font-bold text-lg mb-2">
              ISData<span className="font-normal opacity-60"> Consulting</span>
            </p>
            <p className="text-base opacity-70 mb-3">Data Engineer · Architecte Data · Data Product Owner · Chef de projet Data</p>
            <p className="text-sm opacity-60 flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Interventions remote et sur site selon projet</span>
            </p>
            <div className="mt-5 space-y-2">
              <p className="text-xs uppercase tracking-wide opacity-50">Services</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm opacity-80">
                {SITE_CONFIG.services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="hover:opacity-100 underline underline-offset-4"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 text-sm opacity-70 pt-1">
                <Link to="/#solutions" className="hover:opacity-100 transition-opacity">
                  Voir les services
                </Link>
                <Link to="/#contact" className="hover:opacity-100 transition-opacity">
                  Réserver une visio découverte (1h)
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-base opacity-70 hover:opacity-100 transition-opacity"
            >
              {SITE_CONFIG.email}
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-base opacity-70 hover:opacity-100 transition-opacity"
            >
              {SITE_CONFIG.phone}
            </a>
            <div className="flex items-center gap-6 mt-2">
              <a
                href={`https://linkedin.com/company/${SITE_CONFIG.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={SITE_CONFIG.annuaire}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                <ExternalLink size={14} />
                <span>Vérifier sur annuaire légal</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>
            © {currentYear} {SITE_CONFIG.name} · Tous droits réservés
          </p>
          <p className="text-sm">
            {SITE_CONFIG.legalForm} · SIREN {SITE_CONFIG.siren}
          </p>
        </div>
      </div>
    </footer>
  );
}
