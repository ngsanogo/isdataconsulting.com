import { Database, RefreshCw, BarChart3 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const SERVICES = [
  {
    icon: Database,
    id: "centralisation-warehouse",
    title: "Centralisation des données",
    subtitle: "Entrepôt et modélisation",
    description:
      "Construction d'un socle unique pour fiabiliser et exploiter vos données métier.",
    benefits: [
      "Sources unifiées",
      "Historique exploitable",
      "Base prête pour l'analyse",
    ],
  },
  {
    icon: BarChart3,
    id: "reporting-bi",
    title: "Reporting et BI",
    subtitle: "Power BI, Tableau, Looker Studio",
    description:
      "Mise en place de tableaux de bord automatisés pour le suivi opérationnel et décisionnel.",
    benefits: [
      "Indicateurs partagés",
      "Mise à jour automatisée",
      "Décision plus rapide",
    ],
  },
  {
    icon: RefreshCw,
    id: "migration-pipelines",
    title: "Migration et pipelines",
    subtitle: "Fiabilisation des flux",
    description:
      "Migration de données, standardisation et industrialisation des flux pour des volumes importants.",
    benefits: [
      "Qualité de données renforcée",
      "Pipelines maintenables",
      "Documentation opérationnelle",
    ],
  },
] as const;

export default function ExpertiseSection() {
  return (
    <section id="solutions" className="section">
      <div className="container mx-auto">
        <SectionHeader
          tag="Compétences"
          title="Ce que je fais"
          description="Prestations alignées avec mon parcours de Data Engineer."
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col p-8 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors">
              <service.icon className="w-12 h-12 mb-4 opacity-70" strokeWidth={1.5} />
              <h3 className="font-bold text-2xl mb-2">{service.title}</h3>
              <p className="text-sm opacity-50 mb-4 italic">{service.subtitle}</p>
              <p className="opacity-70 leading-relaxed mb-4">{service.description}</p>

              <div className="mt-auto">
                <p className="text-sm font-semibold mb-3 opacity-60">Ce que vous obtenez :</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span className="opacity-70 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          <div className="p-6 bg-gray-50 dark:bg-gray-900/30 border border-black/10 dark:border-white/10">
            <p className="font-semibold mb-2">Architecture adaptée</p>
            <p className="text-sm opacity-70">
              Architecture de plateforme et règles de qualité adaptées à votre contexte et à vos contraintes métier.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900/30 border border-black/10 dark:border-white/10">
            <p className="font-semibold mb-2">Transparence totale</p>
            <p className="text-sm opacity-70">
              Documentation, transmission et montée en autonomie des équipes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
