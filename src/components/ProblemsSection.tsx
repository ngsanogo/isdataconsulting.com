import { AlertTriangle, Clock, DollarSign, Users, TrendingDown, ShieldAlert } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProblemCard from "./ProblemCard";

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
        <SectionHeader
          tag="Problèmes récurrents"
          title="Sur les systèmes data"
          description="Architectures fragmentées, pipelines fragiles, équipes désalignées. Les problèmes types que nous résolvons."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem) => (
            <ProblemCard key={problem.title} {...problem} />
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
