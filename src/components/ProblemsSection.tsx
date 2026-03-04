import { FileSpreadsheet, Database, TrendingUp } from "lucide-react";
import SectionHeader from "./SectionHeader";

const REALITY_POINTS = [
  {
    icon: FileSpreadsheet,
    title: "Le syndrome du fichier Excel",
    description: "Vos équipes passent des heures à recoller des exports ERP, CRM et outils métier. Un onglet change, une formule saute, et tout le reporting devient douteux.",
  },
  {
    icon: Database,
    title: "Des indicateurs qui arrivent trop tard",
    description: "Vous pilotez avec des chiffres vieux de trois semaines. Les décisions importantes se prennent sans visibilité fiable sur ce qui se passe aujourd'hui.",
  },
  {
    icon: TrendingUp,
    title: "Une infrastructure qui ne tient plus la charge",
    description: "Dès que le volume monte, les traitements plantent, les délais explosent, et vos équipes techniques passent plus de temps à réparer qu'à avancer.",
  },
] as const;

export default function ProblemsSection() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <SectionHeader
          tag="Pourquoi me contacter ?"
          title="Le quotidien qui vous coûte du temps"
          description=""
        />

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl opacity-80 leading-relaxed text-center">
            Ce ne sont pas des concepts. Ce sont des blocages que je vois chaque semaine sur le terrain.
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
