import { Briefcase, Clock, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";

const POSITIONING = [
  {
    title: "Data Engineer",
    details: "Conception de pipelines, fiabilisation de données, automatisation et reporting opérationnel.",
  },
  {
    title: "Data Product Owner",
    details: "Cadrage des besoins, priorisation des sujets data et alignement métier/technique.",
  },
  {
    title: "Chef de projet Data",
    details: "Pilotage des chantiers, coordination transverse et livraison de livrables documentés.",
  },
] as const;

const COMMITMENTS = [
  {
    icon: Clock,
    value: "48h",
    label: "Réponse avec analyse sous 48h",
  },
  {
    icon: Users,
    value: "1 seul",
    label: "Interlocuteur de A à Z (moi)",
  },
  {
    icon: Briefcase,
    value: "8 ans",
    label: "expérience en data engineering",
  },
] as const;

export default function SocialProofSection() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <SectionHeader
          tag="Positionnement"
          title="Rôles et périmètre d'intervention"
          description=""
        />

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {POSITIONING.map((item) => (
            <div 
              key={item.title}
              className="flex flex-col p-8 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-medium uppercase tracking-wide">
                  {item.title}
                </span>
              </div>
              <p className="opacity-80 leading-relaxed">{item.details}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Repères</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {COMMITMENTS.map((commitment) => (
              <div 
                key={commitment.label}
                className="p-6 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 text-center"
              >
                <commitment.icon className="w-10 h-10 mx-auto mb-3 opacity-60" strokeWidth={1.5} />
                <p className="text-2xl font-bold mb-2">{commitment.value}</p>
                <p className="text-sm opacity-70">{commitment.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
