import { ArrowRight, CheckCircle2 } from "lucide-react";

const VALUE_POINTS = [
  "Pipelines ETL/ELT robustes et testés",
  "Architectures cloud scalables (AWS, GCP, Azure)",
  "Pilotage agile de vos produits data",
] as const;

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-14">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          {/* Target audience */}
          <p className="text-sm opacity-50 mb-4 tracking-wide uppercase">
            Pour les CTO, CDO et Head of Data
          </p>

          {/* Titre principal - Proposition de valeur claire */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
            Vos données méritent mieux qu'un pipeline qui casse
          </h1>

          {/* Sous-titre orienté bénéfice */}
          <p className="text-xl opacity-70 leading-relaxed mb-8 max-w-2xl">
            Consultant senior <strong>Data Engineering</strong> & <strong>Architecture Cloud</strong>. 
            Je construis des infrastructures data fiables qui accélèrent vos décisions métiers.
          </p>

          {/* Value points */}
          <ul className="space-y-2 mb-8">
            {VALUE_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-green-600 dark:text-green-400 shrink-0" />
                <span className="opacity-80">{point}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#contact" className="btn-primary text-base px-6 py-3">
              Réserver un appel découverte gratuit
              <ArrowRight size={18} />
            </a>
            <a href="#expertise" className="btn-secondary text-base px-6 py-3">
              Voir mes expertises
            </a>
          </div>

          {/* Micro-réassurance */}
          <p className="text-sm opacity-50">
            ✓ Réponse sous 24h &nbsp;&nbsp;✓ +10 ans d'expérience &nbsp;&nbsp;✓ 100% clients satisfaits
          </p>
        </div>
      </div>
    </section>
  );
}
