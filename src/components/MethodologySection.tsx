import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Comprendre",
    description:
      "Audit de votre écosystème data : sources, flux, outils, équipes. Identification des quick wins et des chantiers structurants.",
    deliverable: "Diagnostic & recommandations",
  },
  {
    number: "02",
    title: "Concevoir",
    description:
      "Architecture cible adaptée à vos contraintes. Choix technologiques justifiés, roadmap réaliste et priorisée.",
    deliverable: "Design technique & roadmap",
  },
  {
    number: "03",
    title: "Construire",
    description:
      "Implémentation itérative en sprints courts. Code propre, testé, documenté. Démos régulières pour valider l'alignement.",
    deliverable: "Livrables incrémentaux",
  },
  {
    number: "04",
    title: "Transférer",
    description:
      "Formation de vos équipes, documentation complète, support post-projet. Vous devenez autonomes, pas dépendants.",
    deliverable: "Autonomie garantie",
  },
] as const;

const COMMITMENTS = [
  {
    value: "24h",
    label: "Temps de réponse",
    detail: "Maximum garanti",
  },
  {
    value: "100%",
    label: "Projets livrés",
    detail: "Dans les délais convenus",
  },
  {
    value: "+10 ans",
    label: "Expérience",
    detail: "Data Engineering & Cloud",
  },
  {
    value: "0",
    label: "Intermédiaire",
    detail: "Vous parlez au consultant",
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
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Une méthode éprouvée, focalisée sur la valeur
          </h2>
          <p className="opacity-60 text-lg">
            Pas de tunnel de 6 mois sans livrable. Des itérations courtes, 
            des résultats visibles rapidement, une communication transparente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STEPS.map((step) => (
            <div 
              key={step.number}
              className="p-6 bg-white dark:bg-black border border-black/10 dark:border-white/10"
            >
              <span className="text-4xl font-semibold opacity-15 block mb-4">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="opacity-60 text-sm leading-relaxed mb-4">
                {step.description}
              </p>
              <p className="text-sm font-medium text-green-600 dark:text-green-400">
                → {step.deliverable}
              </p>
            </div>
          ))}
        </div>

        <div className="py-8 border-t border-b border-black/10 dark:border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {COMMITMENTS.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-semibold mb-1">{item.value}</p>
                <p className="font-medium text-sm mb-0.5">{item.label}</p>
                <p className="text-xs opacity-50">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="opacity-60 mb-4">
            Prêt à structurer votre projet data ?
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Réserver un appel découverte
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
