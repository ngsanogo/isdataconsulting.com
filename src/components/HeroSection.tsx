import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center pt-14">
      <div className="container mx-auto">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p className="text-sm opacity-50 mb-4 tracking-wide uppercase">
            Data Engineering & Architecture
          </p>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight mb-6">
            Ingénierie de Données & Business Intelligence
          </h1>

          {/* Description */}
          <p className="text-lg opacity-70 leading-relaxed mb-8 max-w-xl">
            {SITE_CONFIG.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="btn-primary">
              Contact
              <ArrowRight size={16} />
            </a>
            <a href="#expertise" className="btn-secondary">
              Expertise
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-6 border-t border-black/10 dark:border-white/10">
            <p className="text-xs opacity-40">
              {SITE_CONFIG.legalForm} · SIREN {SITE_CONFIG.siren} · France
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
