import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-16">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="text-sm text-slate mb-6 tracking-wide uppercase">
            Conseil en Data Engineering & Architecture
          </p>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Ingénierie de Données
            <span className="block text-accent">& Business Intelligence</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate leading-relaxed mb-10 max-w-2xl">
            {SITE_CONFIG.description} Expertise technique, solutions
            pragmatiques, résultats mesurables.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">
              Discutons de votre projet
              <ArrowRight size={18} />
            </a>
            <a href="#expertise" className="btn-secondary">
              Voir l'expertise
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-xs text-slate">
              {SITE_CONFIG.legalForm} · SIREN {SITE_CONFIG.siren} · France
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
