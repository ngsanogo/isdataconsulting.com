import { Database, GitBranch, Users, ArrowRight, Check } from "lucide-react";

const SERVICES = [
  {
    icon: Database,
    id: "data-engineering",
    title: "Data Engineering",
    subtitle: "Pipelines robustes & performants",
    description:
      "Conception et implémentation de pipelines de données fiables. ETL/ELT modernes, data lakes, warehouses cloud-native.",
    benefits: [
      "Pipelines qui tournent sans intervention",
      "Coûts cloud maîtrisés",
      "Documentation & tests inclus",
    ],
    tags: ["Python", "Spark", "Airflow", "dbt", "Kafka"],
    href: "/services/data-engineering",
    cta: "Voir nos services Data Engineering",
  },
  {
    icon: GitBranch,
    id: "architecture-data",
    title: "Architecture Data",
    subtitle: "Plateformes cloud évolutives",
    description:
      "Design d'architectures data scalables sur AWS, GCP, Azure. Data Mesh, Lakehouse, architectures événementielles.",
    benefits: [
      "Architecture évolutive sans dette technique",
      "Choix technologiques justifiés",
      "Patterns éprouvés en production",
    ],
    tags: ["AWS", "GCP", "Azure", "Terraform", "Databricks"],
    href: "/services/architecture-data",
    cta: "Explorer nos expertises Architecture",
  },
  {
    icon: Users,
    id: "product-data",
    title: "Product Data Services",
    subtitle: "PO Data • Data Manager • Chef de Projet",
    description:
      "Pilotage agile de vos produits data, gouvernance, alignement métier/IT. Le pont entre vos équipes techniques et business.",
    benefits: [
      "Projets qui respectent le planning",
      "Alignement métier/IT permanent",
      "Adoption utilisateur maximisée",
    ],
    tags: ["Product Owner", "Data Manager", "Agile", "Gouvernance"],
    href: "/services/product-data",
    cta: "Voir nos missions Product Data",
  },
] as const;

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
            Nos Solutions
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Trois expertises complémentaires pour structurer vos données
          </h2>
          <p className="opacity-60 text-lg">
            Que vous ayez besoin de pipelines robustes, d'une architecture évolutive 
            ou d'un pilotage projet efficace, nous avons l'expertise adaptée.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group p-6 bg-white dark:bg-black border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <service.icon
                  className="w-10 h-10 opacity-80"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
              <p className="text-sm opacity-50 mb-4">{service.subtitle}</p>

              <p className="opacity-60 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6 flex-grow">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span className="opacity-80">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 border border-black/10 dark:border-white/10 opacity-60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity"
              >
                {service.cta}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm opacity-50 mb-4">
            Toutes nos missions incluent : documentation technique complète, 
            transfert de compétences et support post-projet.
          </p>
        </div>
      </div>
    </section>
  );
}
