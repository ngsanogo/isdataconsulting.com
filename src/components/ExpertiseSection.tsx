import { Database, GitBranch, BarChart3, Workflow } from "lucide-react";

const SERVICES = [
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Conception et implémentation de pipelines de données robustes. ETL/ELT, streaming, data lakes et warehouses modernes.",
    tags: ["Python", "SQL", "Spark", "Airflow"],
  },
  {
    icon: GitBranch,
    title: "Architecture Data",
    description:
      "Design d'architectures scalables et maintenables. Data Mesh, événementiel, cloud-native et hybride.",
    tags: ["AWS", "Azure", "GCP", "Terraform"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Modélisation dimensionnelle et dashboards décisionnels. De la donnée brute à l'insight actionnable.",
    tags: ["dbt", "Looker", "Power BI", "Metabase"],
  },
  {
    icon: Workflow,
    title: "Conseil & Audit",
    description:
      "Diagnostic de maturité data, roadmap technique et accompagnement à la transformation digitale.",
    tags: ["Stratégie", "Gouvernance", "DataOps"],
  },
] as const;

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
            Expertise
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Compétences
          </h2>
          <p className="opacity-60">
            Accompagnement de l'ingestion à la valorisation de vos données.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="p-6 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors"
            >
              <service.icon
                className="w-8 h-8 mb-4 opacity-80"
                strokeWidth={1.5}
              />

              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

              <p className="opacity-60 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 border border-black/10 dark:border-white/10 opacity-60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
