import { AlertTriangle, Clock, DollarSign, Users, TrendingDown, ShieldAlert } from "lucide-react";

const PROBLEMS = [
  {
    icon: Clock,
    title: "Vos équipes passent plus de temps à chercher des données qu'à les analyser",
    description: "Données dispersées dans des silos, extractions manuelles chronophages, Excel qui se multiplient.",
    impact: "Jusqu'à 40% du temps des analystes perdu",
  },
  {
    icon: TrendingDown,
    title: "Vos pipelines de données sont fragiles et cassent régulièrement",
    description: "Pas d'alerting, pas de tests, des échecs silencieux qui impactent les décisions métiers.",
    impact: "Données erronées = mauvaises décisions",
  },
  {
    icon: DollarSign,
    title: "Vos coûts cloud explosent sans visibilité claire",
    description: "Requêtes non optimisées, stockage dupliqué, absence de FinOps structuré.",
    impact: "Budgets data hors de contrôle",
  },
  {
    icon: Users,
    title: "Le métier et la tech ne se comprennent pas",
    description: "Specs mal traduites, livrables qui ne correspondent pas aux attentes, frustration des deux côtés.",
    impact: "Projets data qui n'aboutissent pas",
  },
  {
    icon: ShieldAlert,
    title: "Vous n'avez pas confiance dans la qualité de vos données",
    description: "Pas de documentation, pas de catalogue, impossible de savoir si une donnée est fiable.",
    impact: "Adoption des outils data en berne",
  },
  {
    icon: AlertTriangle,
    title: "Vos projets data prennent des mois au lieu de semaines",
    description: "Architecture legacy, dette technique, processus lourds qui freinent l'innovation.",
    impact: "Concurrents plus agiles sur la data",
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
            Les défis data que rencontrent nos clients
          </h2>
          <p className="opacity-60 text-lg">
            Ces problématiques freinent votre transformation data. 
            Nous les avons résolues des dizaines de fois.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem) => (
            <article
              key={problem.title}
              className="p-6 bg-white dark:bg-black border border-black/10 dark:border-white/10"
            >
              <problem.icon 
                className="w-8 h-8 mb-4 text-red-500 dark:text-red-400" 
                strokeWidth={1.5} 
              />
              
              <h3 className="font-semibold mb-2 leading-snug">
                {problem.title}
              </h3>
              
              <p className="text-sm opacity-60 mb-3">
                {problem.description}
              </p>
              
              <p className="text-sm font-medium text-red-600 dark:text-red-400">
                ⚠️ {problem.impact}
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
