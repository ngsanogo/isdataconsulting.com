import { ArrowRight } from "lucide-react";
import FeatureList from "./FeatureList";

const VALUE_POINTS = [
  "ETL/ELT testés, monitorés, documentés",
  "Architectures data documentées (AWS, GCP, Azure)",
  "Backlog, KPI, rituels et management d'équipe data",
] as const;

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-14">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-6 text-black/95 dark:text-white/95">
            <span className="block">Pipelines</span>
            <span className="block text-base font-mono opacity-60 mb-2">→ Architecture</span>
            <span className="block">Data qui scale</span>
          </h1>

          <p className="text-xl opacity-70 leading-relaxed mb-8 max-w-2xl">
            Conception de <strong>pipelines ETL/ELT</strong> testés, <strong>architectures data cloud</strong> sur AWS GCP Azure, 
            <strong>pilotage agile</strong> et <strong>gouvernance data</strong>. Livrables documentés et maintenables.
          </p>

          <ul className="space-y-2 mb-8">
            <FeatureList items={VALUE_POINTS} />
          </ul>

          <div className="flex flex-col gap-3 mb-8 sm:flex-row sm:gap-4">
            <a href="#contact" className="btn-primary text-base px-6 py-3 w-full sm:w-auto">
              Planifier un appel de cadrage
              <ArrowRight size={18} />
            </a>
            <a href="#expertise" className="btn-secondary text-base px-6 py-3 w-full sm:w-auto">
              Voir les domaines d'intervention
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
