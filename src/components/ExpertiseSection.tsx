import { Database, RefreshCw, BarChart3, Wrench } from "lucide-react";
import SectionHeader from "./SectionHeader";

const SERVICES = [
  {
    icon: Database,
    id: "centralisation-warehouse",
    title: "Centralisation de vos données",
    subtitle: "Data Warehouse",
    description:
      "Vos données sont réparties entre Excel, votre CRM et votre logiciel métier ? Je construis un socle unique (entrepôt de données) pour que vous ayez une vue d'ensemble fiable sur votre activité.",
    example: "Exemple : Institut de recherche avec données patients éparpillées → 1 base centralisée sécurisée",
    benefits: [
      "Toutes vos sources connectées en un seul endroit",
      "Historique complet et fiable",
      "Requêtes rapides pour vos analyses",
    ],
  },
  {
    icon: BarChart3,
    id: "automatisation-rapports",
    title: "Automatisation de vos rapports",
    subtitle: "Tableaux de bord & BI",
    description:
      "Finis les copier-coller manuels chaque lundi matin. Je développe des tableaux de bord automatisés (Power BI, Tableau) qui se mettent à jour seuls pour vous aider à décider plus vite.",
    example: "Exemple : Direction d'hôpital avec reporting manuel → Dashboards temps réel",
    benefits: [
      "Rapports automatiques chaque matin",
      "Indicateurs clés visibles en un coup d'œil",
      "Alertes si anomalie détectée",
    ],
  },
  {
    icon: RefreshCw,
    id: "migration-recuperation",
    title: "Migration & Récupération de données",
    subtitle: "Changement de système",
    description:
      "Vous changez de logiciel ou d'ERP ? Je sécurise la reprise de l'historique de vos données clients pour qu'aucune information ne se perde et que vos nouveaux outils soient opérationnels immédiatement.",
    example: "Exemple : Scale-up santé avec migration système critique → 0 perte de données",
    benefits: [
      "Récupération complète de l'historique",
      "Tests rigoureux avant mise en production",
      "Formation de vos équipes sur le nouvel outil",
    ],
  },
  {
    icon: Wrench,
    id: "audit-nettoyage",
    title: "Audit & Nettoyage de bases",
    subtitle: "Qualité des données",
    description:
      "Vos fichiers clients comportent des erreurs, des doublons ou des formats incohérents ? J'interviens pour diagnostiquer, standardiser et fiabiliser vos référentiels de données.",
    example: "Exemple : PME avec base clients polluée → Données nettoyées et normalisées",
    benefits: [
      "Diagnostic complet de la qualité",
      "Dédoublonnage et normalisation",
      "Règles de validation pour l'avenir",
    ],
  },
] as const;

export default function ExpertiseSection() {
  return (
    <section id="solutions" className="section">
      <div className="container mx-auto">
        <SectionHeader
          tag="Exemples concrets"
          title="Ce que je fais pour résoudre vos problèmes"
          description="Des situations réelles que j'ai déjà rencontrées et résolues."
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col p-8 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors">
              <service.icon className="w-12 h-12 mb-4 opacity-70" strokeWidth={1.5} />
              <h3 className="font-bold text-2xl mb-2">{service.title}</h3>
              <p className="text-sm opacity-50 mb-4 italic">{service.subtitle}</p>
              <p className="opacity-70 leading-relaxed mb-4">{service.description}</p>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-l-4 border-black dark:border-white mb-6">
                <p className="text-sm opacity-80 italic">{service.example}</p>
              </div>
              
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

        <div className="max-w-2xl mx-auto text-center p-8 bg-gray-50 dark:bg-gray-900/30 border border-black/10 dark:border-white/10">
          <p className="text-lg leading-relaxed opacity-80">
            <strong>Ma philosophie :</strong> Je ne vous laisse pas avec un système que vous ne comprenez pas. 
            Chaque mission inclut de la formation et de la documentation claire. 
            <strong> Vous devez pouvoir reprendre la main.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
