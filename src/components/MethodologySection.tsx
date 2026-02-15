import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Comprendre",
    description:
      "Audit de l'ecosysteme data: sources, flux, outils, equipe, governance.",
    deliverable: "Diagnostic et risques",
  },
  {
    number: "02",
    title: "Concevoir",
    description:
      "Architecture cible et choix technologiques justifies.",
    deliverable: "Design technique et roadmap",
  },
  {
    number: "03",
    title: "Construire",
    description:
      "Implementation par sprints: code, tests, monitoring et documentation.",
    deliverable: "Livrables incrementaux",
  },
  {
    number: "04",
    title: "Transférer",
    description:
      "Formation, runbooks, rituels d'equipe et support post-projet.",
    deliverable: "Autonomie operationnelle",
  },
] as const;

const COMMITMENTS = [
  {
    value: "24h",
    label: "Temps de réponse",
    detail: "Maximum garanti",
  },
  {
    value: "1",
    label: "Interlocuteur",
    detail: "Decision et execution alignees",
  },
  {
    value: "Plan",
    label: "Planning",
    detail: "Valide avant demarrage",
  },
  {
    value: "Docs",
    label: "Livrables",
    detail: "Documentes et maintenables",
  },
] as const;

export default function MethodologySection() {
  return (
    <section id="methodology" className="section bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
            Notre approche
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Une methode simple et livrable
          </h2>
          <p className="opacity-70 text-lg leading-relaxed">
            Iterations courtes, livrables visibles, communication explicite.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {STEPS.map((step) => (
            <div 
              key={step.number}
              className="p-8 bg-white dark:bg-black border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors"
            >
              <span className="text-5xl font-bold opacity-10 block mb-6">
                {step.number}
              </span>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="opacity-70 text-base leading-relaxed mb-6">
                {step.description}
              </p>
              <p className="text-base font-medium text-green-600 dark:text-green-400">
                → {step.deliverable}
              </p>
            </div>
          ))}
        </div>

        <div className="py-12 border-t border-b border-black/10 dark:border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {COMMITMENTS.map((item) => (
              <div key={item.label} className="text-left sm:text-center">
                <p className="text-4xl font-bold mb-2">{item.value}</p>
                <p className="font-semibold text-base mb-1">{item.label}</p>
                <p className="text-sm opacity-60">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="opacity-70 text-lg mb-6">
            Prêt à structurer votre projet data ?
          </p>
          <a href="#contact" className="btn-primary inline-flex text-base">
            Planifier un appel de cadrage
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
