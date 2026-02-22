import { Briefcase, Clock, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";

const EXPERIENCES = [
  {
    company: "Padoa (Freelance)",
    period: "Août 2025 – Aujourd'hui",
    details: "Migration de données clients, refonte de pipelines à fort volume, maintenance et évolution de la base produit.",
  },
  {
    company: "Peasy (Freelance)",
    period: "Mars 2025 – Juillet 2025",
    details: "Construction et optimisation de base de données, pipelines d'intégration, gouvernance CRM et dashboards automatisés.",
  },
  {
    company: "Institut Jérôme Lejeune",
    period: "Oct. 2021 – Janv. 2025",
    details: "Diagnostic de référentiels, mise en place d'entrepôt de données, workflows ETL, gouvernance et support équipes médicales.",
  },
  {
    company: "AP-HP",
    period: "Sept. 2017 – Sept. 2021",
    details: "Data management d'essais cliniques, administration de bases et automatisation de reporting.",
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
          tag="Parcours"
          title="Expériences clés"
          description=""
        />

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {EXPERIENCES.map((experience) => (
            <div 
              key={experience.company}
              className="flex flex-col p-8 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-medium uppercase tracking-wide">
                  {experience.company}
                </span>
                <p className="text-sm opacity-50 mt-2">{experience.period}</p>
              </div>
              <p className="opacity-80 leading-relaxed">{experience.details}</p>
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
