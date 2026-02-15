import { Database, GitBranch, Users, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";

const SERVICES = [
  {
    icon: Database,
    id: "data-engineering",
    title: "Data Engineering",
    description:
      "Conception et implementation de pipelines ETL/ELT: ingestion, transformation, tests et monitoring.",
    benefits: [
      "Tests automatises et alerting",
      "Runbooks et documentation",
      "Observabilite des flux",
    ],
    href: "/services/data-engineering",
    cta: "Voir le detail",
  },
  {
    icon: GitBranch,
    id: "architecture-data",
    title: "Architecture Data",
    description:
      "Architecture cible sur AWS, GCP ou Azure, avec choix d'outils justifies et securite integree.",
    benefits: [
      "Schema cible et ADR",
      "Infrastructure as code",
      "Couts et risques identifies",
    ],
    href: "/services/architecture-data",
    cta: "Voir le detail",
  },
  {
    icon: Users,
    id: "product-data",
    title: "Product Data Services",
    description:
      "Pilotage et management data: backlog, gouvernance, delivery, KPI et rituels d'equipe.",
    benefits: [
      "Backlog priorise",
      "Definition de KPI",
      "Rituels et management d'equipe",
    ],
    href: "/services/product-data",
    cta: "Voir le detail",
  },
] as const;

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section">
      <div className="container mx-auto">
        <SectionHeader
          tag="Nos Solutions"
          title="Trois domaines pour livrer, piloter et manager la data"
          description="Data Engineering, Architecture Data, Product Data et management d'equipe data."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.benefits}
              />
              <a
                href={service.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity group"
              >
                {service.cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm opacity-50">
            Toutes nos missions incluent documentation, transfert de competences et support post-projet.
          </p>
        </div>
      </div>
    </section>
  );
}
