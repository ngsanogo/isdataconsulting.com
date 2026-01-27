import { Database, Code2, LineChart } from "lucide-react";

const services = [
  {
    icon: LineChart,
    title: "Conseil SI",
    subtitle: "# Architecture & Stratégie",
    description:
      "Audit, optimisation et transformation de vos systèmes d'information. Une vision claire pour des décisions éclairées.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    subtitle: "# Pipelines & Analytics",
    description:
      "Conception de pipelines robustes. Exploitation intelligente de votre patrimoine de données.",
  },
  {
    icon: Code2,
    title: "Développement",
    subtitle: "# Solutions Sur-Mesure",
    description:
      "Applications, APIs et outils métier. Du code propre, testé, maintenable.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-spacing">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            ## Services
          </p>
          <h2 className="text-3xl md:text-4xl font-mono font-semibold tracking-tighter">
            Ce que nous faisons
          </h2>
        </div>

        {/* Services grid - simple, clean */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-8 md:p-10"
            >
              <service.icon 
                className="w-6 h-6 text-foreground mb-6" 
                strokeWidth={1.5} 
              />
              
              <p className="font-mono text-xs text-muted-foreground mb-2">
                {service.subtitle}
              </p>
              
              <h3 className="text-xl font-mono font-semibold mb-2 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
