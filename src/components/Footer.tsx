import { Linkedin, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left: Company info */}
          <div>
            <p className="font-semibold text-lg mb-1">
              ISDATA<span className="font-normal opacity-60"> Consulting</span>
            </p>
            <p className="text-sm opacity-50">Ingénierie de Données & BI</p>
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-6">
            <a
              href={`https://linkedin.com/company/${SITE_CONFIG.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={SITE_CONFIG.annuaire}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm opacity-50 hover:opacity-100 transition-opacity"
            >
              <ExternalLink size={14} />
              <span>Annuaire légal</span>
            </a>
          </div>
        </div>

        {/* Bottom: Legal */}
        <div className="mt-6 pt-6 border-t border-black/10 dark:border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm opacity-40">
            <p>
              © {currentYear} {SITE_CONFIG.name}
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
