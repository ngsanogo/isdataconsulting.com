import { FileSpreadsheet, Database, TrendingUp } from "lucide-react";
import SectionHeader from "./SectionHeader";

const REALITY_POINTS = [
  {
    icon: FileSpreadsheet,
    title: "Le syndrome du fichier Excel",
    description: "Vos équipes perdent des heures chaque semaine à croiser manuellement les données de votre ERP, de votre CRM et de vos outils métier. Le risque d'erreur est maximal.",
  },
  {
    icon: Database,
    title: "Des indicateurs qui arrivent trop tard",
    description: "Vous prenez des décisions stratégiques avec des chiffres qui datent du mois dernier, sans être certain de leur fiabilité.",
  },
  {
    icon: TrendingUp,
    title: "Une infrastructure qui ne tient plus la charge",
    description: "Vos processus actuels cassent à chaque nouveau volume de données. Vos équipes techniques passent leur temps à réparer au lieu de construire.",
  },
] as const;

export default function ProblemsSection() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <SectionHeader
          tag="Pourquoi les PME ?"
          title="Les blocages que je vois sur le terrain"
          description=""
        />

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl opacity-80 leading-relaxed text-center">
            Pas de jargon : des situations concrètes qui ralentissent vos équipes et vos décisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {REALITY_POINTS.map((point) => (
            <div 
              key={point.title}
              className="p-8 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 text-center"
            >
              <point.icon className="w-12 h-12 mx-auto mb-4 opacity-60" strokeWidth={1.5} />
              <h3 className="font-bold text-lg mb-3">{point.title}</h3>
              <p className="opacity-70 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg leading-relaxed opacity-70">
            Résultat : des flux fiabilisés, des données exploitables et des décisions prises au bon moment.
          </p>
        </div>
      </div>
    </section>
  );
}
