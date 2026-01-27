import { Linkedin, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left: Company info */}
          <div>
            <p className="font-semibold text-lg mb-2">
              <span className="text-navy">ISDATA</span>
              <span className="text-slate font-normal"> Consulting</span>
            </p>
            <p className="text-sm text-slate max-w-md">
              Ingénierie de Données & Business Intelligence
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-6">
            <a
              href={`https://linkedin.com/company/${SITE_CONFIG.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-navy transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={SITE_CONFIG.annuaire}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate hover:text-navy transition-colors"
            >
              <ExternalLink size={16} />
              <span>Annuaire légal</span>
            </a>
          </div>
        </div>

        {/* Bottom: Legal */}
        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate">
            <p>
              © {currentYear} {SITE_CONFIG.name}. Tous droits réservés.
            </p>
            <p className="text-xs">
              {SITE_CONFIG.legalForm} · SIREN {SITE_CONFIG.siren} · TVA{" "}
              {SITE_CONFIG.tva}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
