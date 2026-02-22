import { Briefcase, Clock, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";

const EXECUTION_MODEL = [
  {
    title: "Cadrage clair",
    details: "Objectifs, périmètre et critères de succès définis avant le démarrage.",
  },
  {
    title: "Delivery incrémental",
    details: "Avancement par étapes courtes avec livrables visibles et retours réguliers.",
  },
  {
    title: "Transmission",
    details: "Documentation, passation et montée en autonomie des équipes.",
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
    label: "expérience en Data Engineering",
  },
] as const;

export default function SocialProofSection() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <SectionHeader
          tag="Méthode"
          title="Comment se déroule la mission"
          description=""
        />

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {EXECUTION_MODEL.map((item) => (
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
