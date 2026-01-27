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
    <section id="expertise" className="section bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-accent mb-3 uppercase tracking-wide">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Des compétences au service de vos données
          </h2>
          <p className="text-lg text-slate">
            Nous accompagnons les entreprises dans toutes les phases de leur
            cycle de vie data, de l'ingestion à la valorisation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group p-8 bg-slate-50 border border-slate-200 rounded-lg hover:border-navy/30 transition-colors"
            >
              <service.icon
                className="w-10 h-10 text-navy mb-5"
                strokeWidth={1.5}
              />

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="text-slate mb-5 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-slate-200 text-slate-700 rounded"
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
