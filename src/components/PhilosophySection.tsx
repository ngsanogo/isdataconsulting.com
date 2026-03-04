import SectionHeader from "./SectionHeader";

const PRINCIPLES = [
  {
    title: "0% boîte noire",
    description: "Tout est documenté, explicable et transmis à vos équipes.",
  },
  {
    title: "100% pragmatique",
    description: "Je choisis les technologies qui résolvent votre problème, pas celles qui sont à la mode.",
  },
] as const;

export default function PhilosophySection() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <SectionHeader
          tag="Ma philosophie technique"
          title="Pourquoi me confier vos données"
          description="J'ai forgé mes 8 ans d'expérience dans des environnements où l'erreur est interdite : AP-HP, Institut Lejeune et SaaS en hypercroissance (Padoa). J'applique cette même rigueur à vos données d'entreprise."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className="p-8 bg-gray-50 dark:bg-gray-900/30 border border-black/10 dark:border-white/10"
            >
              <h3 className="text-2xl font-bold mb-3">{principle.title}</h3>
              <p className="opacity-75 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
