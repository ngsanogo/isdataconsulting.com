import { Database, Settings, Compass } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: Database,
    id: "architecture-fondations",
    href: "/services/architecture-data",
    title: "Architecture & Fondations",
    subtitle: "Le plan",
    description:
      "Je définis un plan technique clair, adapté à vos vrais besoins. Objectif : un socle solide, sans usine à gaz, prêt à évoluer avec votre activité.",
    benefits: [
      "Architecture lisible et évolutive",
      "Choix technologiques justifiés",
      "Socle fiable avant accélération",
    ],
  },
  {
    icon: Settings,
    id: "ingenierie-automatisation",
    href: "/services/data-engineering",
    title: "Ingénierie & Automatisation",
    subtitle: "La plomberie",
    description:
      "Je construis des flux robustes pour extraire, nettoyer et centraliser vos données automatiquement. Objectif : supprimer la saisie manuelle, fiabiliser vos chiffres et gagner du temps.",
    benefits: [
      "Pipelines robustes de bout en bout",
      "Moins de manipulations manuelles",
      "Données à jour et exploitables",
    ],
  },
  {
    icon: Compass,
    id: "pilotage-strategie",
    href: "/services/product-data",
    title: "Pilotage & Stratégie",
    subtitle: "La boussole",
    description:
      "Je fais le lien entre vos enjeux métier et l'exécution technique. Objectif : prioriser les bons chantiers, coordonner les équipes et livrer des dashboards utiles pour décider vite.",
    benefits: [
      "Priorités métier-tech claires",
      "Coordination des parties prenantes",
      "Livraison utile et documentée",
    ],
  },
] as const;

export default function ExpertiseSection() {
  return (
    <section id="solutions" className="section">
      <div className="container mx-auto">
        <SectionHeader
          tag="Services"
          title="Concevoir, construire et piloter"
          description="Trois étapes logiques pour prendre le contrôle de vos données, sans jargon et sans détour."
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
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
