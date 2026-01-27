const STEPS = [
  {
    number: "01",
    title: "Comprendre",
    description:
      "Audit de l'écosystème data existant, enjeux métiers et techniques.",
  },
  {
    number: "02",
    title: "Concevoir",
    description:
      "Architecture cible, choix technologiques, roadmap pragmatique.",
  },
  {
    number: "03",
    title: "Construire",
    description:
      "Implémentation itérative, code propre, tests, livraisons incrémentales.",
  },
  {
    number: "04",
    title: "Transférer",
    description:
      "Formation des équipes, documentation technique, support à l'autonomie.",
  },
] as const;

export default function MethodologySection() {
  return (
    <section id="methodology" className="section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
            Méthodologie
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Simple. Itératif. Efficace.
          </h2>
          <p className="opacity-60">
            Approche adaptée, focalisée sur la valeur.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div key={step.number}>
              <span className="text-3xl font-semibold opacity-20 mb-3 block">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="opacity-60 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values callout */}
        <div className="mt-16 py-8 border-t border-black/10 dark:border-white/10">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-semibold mb-1">100%</p>
              <p className="text-sm opacity-50">Projets livrés</p>
            </div>
            <div>
              <p className="text-2xl font-semibold mb-1">+10 ans</p>
              <p className="text-sm opacity-50">Expérience data</p>
            </div>
            <div>
              <p className="text-2xl font-semibold mb-1">∞</p>
              <p className="text-sm opacity-50">Qualité code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
