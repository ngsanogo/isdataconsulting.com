const STEPS = [
  {
    number: "01",
    title: "Comprendre",
    description:
      "Audit approfondi de votre écosystème data existant, identification des enjeux métiers et techniques.",
  },
  {
    number: "02",
    title: "Concevoir",
    description:
      "Architecture cible, choix technologiques justifiés, roadmap pragmatique avec quick wins identifiés.",
  },
  {
    number: "03",
    title: "Construire",
    description:
      "Implémentation itérative, code propre et documenté, tests automatisés, livraisons incrémentales.",
  },
  {
    number: "04",
    title: "Transférer",
    description:
      "Formation de vos équipes, documentation technique, support au démarrage et à l'autonomie.",
  },
] as const;

export default function MethodologySection() {
  return (
    <section id="methodology" className="section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-accent mb-3 uppercase tracking-wide">
            Méthodologie
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, itératif, efficace
          </h2>
          <p className="text-lg text-slate">
            Pas de méthodologie rigide. Une approche adaptée à votre contexte,
            focalisée sur la livraison de valeur.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop only) */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-slate-200 -translate-x-4" />
              )}

              <div className="relative">
                <span className="text-4xl font-bold text-slate-300 mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-slate leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Values callout */}
        <div className="mt-20 p-8 bg-white border border-slate-200 rounded-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-navy mb-2">100%</p>
              <p className="text-sm text-slate">Projets livrés dans les délais</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy mb-2">+10 ans</p>
              <p className="text-sm text-slate">D'expérience data & engineering</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy mb-2">∞</p>
              <p className="text-sm text-slate">Engagement qualité code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
