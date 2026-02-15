import { ArrowRight, CheckCircle2 } from "lucide-react";

const VALUE_POINTS = [
  "ETL/ELT testes, monitores, documentes",
  "Architecture data documentee (AWS, GCP, Azure)",
  "Backlog, KPI, rituels et management d'equipe data",
] as const;

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-14">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm opacity-50 mb-4 tracking-wide uppercase">
            Pour les CTO, CDO et Head of Data
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
            Data engineering, architecture data, product data et management d'equipe data
          </h1>

          <p className="text-xl opacity-70 leading-relaxed mb-8 max-w-2xl">
            ISData Consulting accompagne en <strong>Data Engineering</strong>, <strong>Architecture Data</strong>,
            <strong>Product Owner Data</strong>, <strong>Chef de Projet Data</strong> et
            <strong>Management d'equipe data</strong>.
            Livrables explicites: pipelines, architecture, backlog, KPI, rituels et runbooks.
          </p>

          <ul className="space-y-2 mb-8">
            {VALUE_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-green-600 dark:text-green-400 shrink-0" />
                <span className="opacity-80">{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#contact" className="btn-primary text-base px-6 py-3">
              Planifier un appel de cadrage
              <ArrowRight size={18} />
            </a>
            <a href="#expertise" className="btn-secondary text-base px-6 py-3">
              Voir les domaines d'intervention
            </a>
          </div>

          <p className="text-sm opacity-50">
            Réponse sous 24h · Interlocuteur unique
          </p>
        </div>
      </div>
    </section>
  );
}
