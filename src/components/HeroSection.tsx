import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center pt-14">
      <div className="container mx-auto">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p className="text-sm opacity-50 mb-4 tracking-wide uppercase">
            Consultant Data Engineering & Architecture
          </p>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight mb-6">
            Transformez vos données en avantage compétitif
          </h1>

          {/* Description */}
          <p className="text-lg opacity-70 leading-relaxed mb-8 max-w-xl">
            Cabinet de conseil expert en <strong>Data Engineering</strong>, <strong>Architecture Data Cloud</strong> et <strong>Product Data Services</strong>. 
            De la conception de pipelines à la gouvernance, nous accompagnons votre transformation data.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="btn-primary">
              Évaluation gratuite
              <ArrowRight size={16} />
            </a>
            <a href="#expertise" className="btn-secondary">
              Nos expertises
            </a>
          </div>

          {/* Service highlights */}
          <div className="mt-12 grid grid-cols-3 gap-4 pt-8 border-t border-black/10 dark:border-white/10">
            {SITE_CONFIG.services.map((service) => (
              <a 
                key={service.id}
                href={service.href}
                className="group"
              >
                <p className="text-sm font-medium group-hover:opacity-100 opacity-70 transition-opacity">
                  {service.shortTitle}
                </p>
                <p className="text-xs opacity-40 mt-0.5 hidden sm:block">
                  {service.keywords[0]}
                </p>
              </a>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10">
            <p className="text-xs opacity-40">
              {SITE_CONFIG.legalForm} · SIREN {SITE_CONFIG.siren} · +10 ans d'expérience data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
