import { Database, GitBranch, Users, ArrowRight, Check } from "lucide-react";

const SERVICES = [
  {
    icon: Database,
    id: "data-engineering",
    title: "Data Engineering",
    subtitle: "Pipelines robustes & performants",
    description:
      "Conception et implementation de pipelines ETL/ELT: ingestion, transformation, tests et monitoring.",
    benefits: [
      "Tests automatises et alerting",
      "Runbooks et documentation",
      "Observabilite des flux",
    ],
    tags: ["Python", "Spark", "Airflow", "dbt", "Kafka"],
    href: "/services/data-engineering",
    cta: "Voir le detail Data Engineering",
  },
  {
    icon: GitBranch,
    id: "architecture-data",
    title: "Architecture Data",
    subtitle: "Plateformes cloud évolutives",
    description:
      "Architecture cible sur AWS, GCP ou Azure, avec choix d'outils justifies et securite integree.",
    benefits: [
      "Schema cible et ADR",
      "Infrastructure as code",
      "Couts et risques identifies",
    ],
    tags: ["AWS", "GCP", "Azure", "Terraform", "Databricks"],
    href: "/services/architecture-data",
    cta: "Voir le detail Architecture",
  },
  {
    icon: Users,
    id: "product-data",
    title: "Product Data Services",
    subtitle: "Product Owner • Chef de Projet • Management d'equipe",
    description:
      "Pilotage et management data: backlog, gouvernance, delivery, KPI et rituels d'equipe.",
    benefits: [
      "Backlog priorise",
      "Definition de KPI",
      "Rituels et management d'equipe",
    ],
    tags: ["Product Owner", "Data Manager", "Agile", "Gouvernance"],
    href: "/services/product-data",
    cta: "Voir le detail Product Data",
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trois domaines pour livrer, piloter et manager la data
          </h2>
          <p className="opacity-60 text-lg leading-relaxed">
            Data Engineering, Architecture Data, Product Data et management d'equipe data.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group p-8 bg-white dark:bg-black border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <service.icon
                  className="w-10 h-10 opacity-80"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm opacity-50 font-medium mb-6">{service.subtitle}</p>

              <p className="opacity-70 mb-6 text-base leading-relaxed flex-grow">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span className="opacity-80">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 pb-6 border-b border-black/10 dark:border-white/10">
                <p className="text-xs opacity-50 mb-3 font-semibold tracking-wide">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
            Toutes nos missions incluent documentation, transfert de competences et support post-projet.
          </p>
        </div>
      </div>
    </section>
  );
}
