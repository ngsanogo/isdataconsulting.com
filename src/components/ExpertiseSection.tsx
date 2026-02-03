import { Database, GitBranch, Users, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const SERVICES = [
  {
    icon: Database,
    id: "data-engineering",
    title: "Data Engineering Consulting",
    description:
      "Conception et implémentation de pipelines de données robustes. Ingestion, ETL/ELT, traitement batch & streaming, data lakes et warehouses modernes.",
    tags: ["Python", "SQL", "Spark", "Airflow", "dbt"],
    href: "/services/data-engineering",
    cta: "Découvrir nos services Data Engineering",
  },
  {
    icon: GitBranch,
    id: "architecture-data",
    title: "Architecture Data Cloud",
    description:
      "Design d'architectures data scalables et performantes sur AWS, GCP, Azure. Data Mesh, Lakehouse, architectures événementielles et cloud-native.",
    tags: ["AWS", "GCP", "Azure", "Terraform", "Databricks"],
    href: "/services/architecture-data",
    cta: "Explorer nos expertises Architecture",
  },
  {
    icon: Users,
    id: "product-data",
    title: "Product Data Services",
    description:
      "Product Owner Data, Data Manager, Chef de Projet Data. Pilotage agile de vos produits data, gouvernance et alignement métier/IT.",
    tags: ["Product Owner", "Data Manager", "Agile", "Gouvernance"],
    href: "/services/product-data",
    cta: "Voir nos missions Product Data",
  },
] as const;

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
            Nos Expertises
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Trois piliers pour transformer vos données en valeur
          </h2>
          <p className="opacity-60">
            De l'ingénierie à la gouvernance, un accompagnement complet pour vos projets data.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group p-6 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors flex flex-col"
            >
              <service.icon
                className="w-10 h-10 mb-4 opacity-80"
                strokeWidth={1.5}
              />

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="opacity-60 mb-4 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>

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

        {/* CTA Banner */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900/30 border border-black/10 dark:border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Besoin d'une expertise data sur mesure ?
              </h3>
              <p className="text-sm opacity-60">
                Contactez-nous pour une évaluation gratuite de votre architecture data.
              </p>
            </div>
            <a 
              href="#contact" 
              className="btn-primary shrink-0"
            >
              Évaluation gratuite
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
