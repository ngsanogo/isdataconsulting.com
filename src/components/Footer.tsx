import { Github, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company info */}
          <div>
            <p className="font-mono font-semibold text-sm mb-3">À propos</p>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              {SITE_CONFIG.name}
              <br />
              {SITE_CONFIG.legalForm} · SIREN {SITE_CONFIG.siren}
              <br />
              {SITE_CONFIG.address}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono font-semibold text-sm mb-3">Contact</p>
            <div className="font-mono text-xs text-muted-foreground space-y-1">
              <p>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-foreground transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p>
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-foreground transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="font-mono font-semibold text-sm mb-3">Légal</p>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              TVA: {SITE_CONFIG.tva}
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ngsanogo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
