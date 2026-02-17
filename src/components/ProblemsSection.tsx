import { FileSpreadsheet, Database, TrendingUp } from "lucide-react";
import SectionHeader from "./SectionHeader";

const REALITY_POINTS = [
  {
    icon: FileSpreadsheet,
    title: "Des données éparpillées",
    description: "Entre Excel, votre ERP, vos outils marketing... Impossible d'avoir une vue d'ensemble claire.",
  },
  {
    icon: Database,
    title: "Un pilotage à vue",
    description: "Vous prenez des décisions importantes sans être certain de vos chiffres. Et ça vous pèse.",
  },
  {
    icon: TrendingUp,
    title: "Une croissance freinée",
    description: "Vos process manuels ne suivent plus. Vous perdez du temps à consolider au lieu de décider.",
  },
] as const;

export default function ProblemsSection() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <SectionHeader
          tag="Pourquoi les PME ?"
          title="Vous méritez mieux qu'un pilotage à vue"
          description=""
        />

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl opacity-80 leading-relaxed text-center">
            Vous avez des données, mais elles sont éparpillées entre Excel, votre ERP et vos outils marketing. 
            <strong> Résultat : vous pilotez à vue</strong>, ou pire, avec des chiffres faux. 
          </p>
          <p className="text-xl opacity-80 leading-relaxed text-center mt-4">
            Vous méritez <strong>des données fiables et centralisées</strong>, sans l'usine à gaz.
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
            <strong>La bonne nouvelle ?</strong> Ces problèmes ont des solutions. 
            Je ne suis pas là pour vous vendre une transformation digitale à 6 chiffres. 
            Je suis là pour <strong>nettoyer, connecter et automatiser</strong> ce qui doit l'être.
          </p>
        </div>
      </div>
    </section>
  );
}
