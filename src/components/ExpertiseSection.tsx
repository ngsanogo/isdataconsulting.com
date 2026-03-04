import { Database, RefreshCw, BarChart3, BriefcaseBusiness } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: Database,
    id: "data-engineering",
    href: "/services/data-engineering",
    title: "Data Engineering",
    subtitle: "Intervention en tant que Data Engineer",
    description:
      "Conception et industrialisation des flux de données de bout en bout.",
    benefits: [
      "Ingestion et transformation fiables",
      "Données prêtes pour l'usage métier",
      "Pipelines maintenables",
    ],
  },
  {
    icon: BriefcaseBusiness,
    id: "data-product-management",
    href: "/services/product-data",
    title: "Data Product Management",
    subtitle: "Stratégie et priorisation",
    description:
      "Pilotage de la roadmap data produit pour maximiser la valeur métier.",
    benefits: [
      "Roadmap data priorisée",
      "Arbitrages explicites",
      "Valeur métier suivie",
    ],
  },
  {
    icon: RefreshCw,
    id: "data-product-owner",
    href: "/services/product-data",
    title: "Data Product Owner",
    subtitle: "Cadrage et priorisation",
    description:
      "Traduction des besoins métier en backlog data priorisé et livrable.",
    benefits: [
      "Vision produit data",
      "Priorités claires",
      "Alignement métier/tech",
    ],
  },
  {
    icon: BarChart3,
    id: "chef-projet-data",
    href: "/services/product-data",
    title: "Chef de projet Data",
    subtitle: "Pilotage et coordination",
    description:
      "Pilotage opérationnel des chantiers data avec suivi de l'exécution et des livrables.",
    benefits: [
      "Plan d'action concret",
      "Coordination transverse",
      "Livraison documentée",
    ],
  },
] as const;

export default function ExpertiseSection() {
  return (
    <section id="solutions" className="section">
      <div className="container mx-auto">
        <SectionHeader
          tag="Compétences"
          title="Services proposés"
          description="4 offres claires pour fiabiliser, piloter et valoriser vos données rapidement."
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col p-8 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors">
              <service.icon className="w-12 h-12 mb-4 opacity-70" strokeWidth={1.5} />
              <h3 className="font-bold text-2xl mb-2">{service.title}</h3>
              <p className="text-sm opacity-50 mb-4 italic">{service.subtitle}</p>
              <p className="opacity-70 leading-relaxed mb-4">{service.description}</p>
              <Link
                to={service.href}
                className="text-sm font-medium underline underline-offset-4 opacity-80 hover:opacity-100 mb-6"
              >
                Voir l'offre
              </Link>

              <div className="mt-auto">
                <p className="text-sm font-semibold mb-3 opacity-60">Résultats attendus :</p>
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
              Chaque mission démarre par le besoin métier, puis le choix du bon niveau d'architecture.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900/30 border border-black/10 dark:border-white/10">
            <p className="font-semibold mb-2">Transparence totale</p>
            <p className="text-sm opacity-70">
              Livrables clairs, documentation et transmission aux équipes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
