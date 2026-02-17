import { Cloud, Server, Layers } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ARCHITECTURE_OPTIONS = [
  {
    icon: Cloud,
    title: "Cloud",
    description: "Flexibilité et scalabilité",
    details: "AWS, Azure, GCP pour une croissance sans limite",
    ideal: "Idéal si : Croissance rapide, accès distant, budget flexible",
  },
  {
    icon: Layers,
    title: "Hybride",
    description: "Le meilleur des deux mondes",
    details: "Données sensibles en local, analytics dans le Cloud",
    ideal: "Idéal si : Contraintes réglementaires + besoin de flexibilité",
  },
  {
    icon: Server,
    title: "On-Premise",
    description: "Maîtrise et confidentialité",
    details: "Vos serveurs, vos règles, vos données",
    ideal: "Idéal si : Secteur réglementé, confidentialité maximale",
  },
] as const;

export default function ArchitectureSection() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <SectionHeader
          tag="Architecture"
          title="Une architecture adaptée à vos murs, pas aux tendances"
          description=""
        />

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-xl opacity-80 leading-relaxed">
            Le Cloud n'est pas la solution unique. Que vous préfériez la <strong>flexibilité d'AWS/Azure</strong> ou 
            la <strong>sécurité de vos propres serveurs</strong>, je conçois l'infrastructure qui respecte vos 
            contraintes de budget et de confidentialité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ARCHITECTURE_OPTIONS.map((option) => (
            <div 
              key={option.title}
              className="p-8 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 text-center"
            >
              <option.icon className="w-16 h-16 mx-auto mb-4 opacity-60" strokeWidth={1.5} />
              <h3 className="font-bold text-2xl mb-2">{option.title}</h3>
              <p className="text-lg opacity-70 mb-4">{option.description}</p>
              <p className="text-base opacity-60 mb-6">{option.details}</p>
              <div className="pt-6 border-t border-black/10 dark:border-white/10">
                <p className="text-sm opacity-50 italic">{option.ideal}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg leading-relaxed opacity-70">
            <strong>Mon approche :</strong> Je vous aide à choisir en fonction de vos contraintes réelles 
            (budget, conformité, compétences internes), pas en fonction des modes.
          </p>
        </div>
      </div>
    </section>
  );
}
