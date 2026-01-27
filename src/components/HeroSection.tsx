const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          {/* Code comment style intro */}
          <p className="font-mono text-sm text-muted-foreground mb-6">
            # Conseil en systèmes et logiciels informatiques
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-semibold leading-tight mb-8 tracking-tighter">
            L'ingénierie logicielle simplifiée.
            <br />
            <span className="text-muted-foreground">La donnée maîtrisée.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl">
            ISDATA CONSULTING résout des problèmes complexes par des solutions simples. 
            Expertise technique, fiabilité, transparence.
          </p>

          {/* Simple CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-foreground text-foreground font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Discutons de votre projet →
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center px-6 py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="underline underline-offset-4 decoration-1 decoration-muted-foreground/50 group-hover:decoration-foreground transition-all">
                Voir les services
              </span>
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Minimal info block */}
          <div className="mt-20 pt-8 border-t border-border">
            <p className="font-mono text-xs text-muted-foreground">
              SAS · SIREN 940 718 075 · Bezons, France · Depuis 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
