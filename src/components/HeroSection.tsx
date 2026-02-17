import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-14">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <p className="text-sm font-medium opacity-60 mb-4 uppercase tracking-wide">
            PME & ETI
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-6 text-black/95 dark:text-white/95">
            9 ans à structurer les données des plus grands (Hôpitaux, Santé, Tech). 
            Aujourd'hui, je mets cette rigueur au service de votre PME.
          </h1>

          <p className="text-xl opacity-70 leading-relaxed mb-8 max-w-3xl">
            J'aide les entreprises à <strong>automatiser leurs flux</strong> et <strong>fiabiliser leurs chiffres</strong>. 
            Basé en Île-de-France, j'interviens partout en France pour transformer vos données éparpillées en levier de décision.
          </p>

          <div className="flex flex-col gap-3 mb-8 sm:flex-row sm:gap-4">
            <a href="#contact" className="btn-primary text-base px-6 py-3 w-full sm:w-auto">
              Diagnostic offert (15 min)
              <ArrowRight size={18} />
            </a>
            <a href="#solutions" className="btn-secondary text-base px-6 py-3 w-full sm:w-auto">
              Voir des exemples concrets
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10">
            <p className="text-base opacity-70">
              <strong>Données critiques confiées</strong> : Si on m'a confié des données de santé (hôpitaux, instituts de recherche), 
              vous pouvez me confier vos données de vente les yeux fermés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
