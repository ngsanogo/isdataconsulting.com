const principles = [
  {
    code: ">>> simple > complex",
    title: "Simple is better than complex",
    description:
      "Nous privilégions les solutions directes et compréhensibles. Pas de sur-ingénierie, pas de complexité artificielle.",
  },
  {
    code: ">>> explicit > implicit",
    title: "Explicit is better than implicit",
    description:
      "Documentation claire, communication transparente. Vous savez exactement ce que nous faisons et pourquoi.",
  },
  {
    code: ">>> readability.counts()",
    title: "Readability counts",
    description:
      "Un code lisible est un code maintenable. Nous écrivons pour les humains d'abord, les machines ensuite.",
  },
  {
    code: ">>> now > never",
    title: "Now is better than never",
    description:
      "Livraisons itératives, valeur immédiate. Pas de projets sans fin ni de promesses floues.",
  },
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="section-spacing bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            ## Méthodologie
          </p>
          <h2 className="text-3xl md:text-4xl font-mono font-semibold tracking-tighter mb-4">
            Notre philosophie
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Inspirée du Zen de Python, notre approche valorise la clarté, 
            la simplicité et l'efficacité.
          </p>
        </div>

        {/* Principles */}
        <div className="space-y-px">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-background p-8 md:p-10 border-l border-primary/40"
            >
              <code className="font-mono text-sm text-primary block mb-2">
                {principle.code}
              </code>
              
              <h3 className="text-lg font-mono font-semibold mb-3 tracking-tight">
                {principle.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
