import { AlertTriangle, Clock, DollarSign, Users, TrendingDown, ShieldAlert } from "lucide-react";

const PROBLEMS = [
  {
    icon: Clock,
    title: "Recherche de données dispersées",
    description: "Sources multiples, extractions manuelles, definitions non alignees.",
    impact: "Decision lente et contexte incomplet",
  },
  {
    icon: TrendingDown,
    title: "Pipelines fragiles",
    description: "Tests absents, monitoring incomplet, incidents recurrents.",
    impact: "Fiabilite insuffisante",
  },
  {
    icon: DollarSign,
    title: "Couts cloud non maitrises",
    description: "Requetes non optimisees, stockage duplique, absence de suivi.",
    impact: "Depenses difficiles a piloter",
  },
  {
    icon: Users,
    title: "Decalage metier/tech",
    description: "Specifications ambiguës, backlog instable, livrables en decalage.",
    impact: "Priorites confuses",
  },
  {
    icon: ShieldAlert,
    title: "Qualite non mesuree",
    description: "Pas de regles de qualite, pas de catalogue ni d'ownership.",
    impact: "Confiance limitee",
  },
  {
    icon: AlertTriangle,
    title: "Time-to-delivery eleve",
    description: "Architecture legacy, dependances lourdes, processus lents.",
    impact: "Livraisons tardives",
  },
] as const;

export default function ProblemsSection() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
            Vous vous reconnaissez ?
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Problemes typiques sur les systemes data
          </h2>
          <p className="opacity-60 text-lg">
            Nous intervenons quand la donnee ralentit l'analyse, la delivery ou la gouvernance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem) => (
            <article
              key={problem.title}
              className="p-6 bg-white dark:bg-black border border-black/10 dark:border-white/10"
            >
              <problem.icon 
                className="w-8 h-8 mb-4 opacity-70" 
                strokeWidth={1.5} 
              />
              
              <h3 className="font-semibold mb-2 leading-snug">
                {problem.title}
              </h3>
              
              <p className="text-sm opacity-60 mb-3">
                {problem.description}
              </p>
              
              <p className="text-sm font-medium opacity-70">
                {problem.impact}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg opacity-70 mb-4">
            <strong>La bonne nouvelle ?</strong> Ces problèmes ont des solutions éprouvées.
          </p>
          <a href="#expertise" className="text-sm font-medium underline underline-offset-4 opacity-70 hover:opacity-100 transition-opacity">
            Découvrir comment nous les résolvons →
          </a>
        </div>
      </div>
    </section>
  );
}
