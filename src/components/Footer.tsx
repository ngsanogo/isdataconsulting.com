import { Linkedin, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8 pb-8 border-b border-black/10 dark:border-white/10">
          <div>
            <p className="font-bold text-lg mb-2">
              ISData<span className="font-normal opacity-60"> Consulting</span>
            </p>
            <p className="text-base opacity-60">Data Engineering · Architecture Data · Product Data</p>
          </div>

          <div className="flex items-center gap-8">
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
              className="flex items-center gap-2 text-base opacity-60 hover:opacity-100 transition-opacity"
            >
              <ExternalLink size={16} />
              <span>Annuaire légal</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-50">
          <p>
            © {currentYear} {SITE_CONFIG.name}
          </p>
          <p className="text-xs opacity-40">
            {SITE_CONFIG.legalForm} · SIREN {SITE_CONFIG.siren} · TVA{" "}
            {SITE_CONFIG.tva}
          </p>
        </div>
      </div>
    </footer>
  );
}
