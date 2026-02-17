import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-14">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium opacity-60 mb-4 uppercase tracking-wide">
              PME & ETI
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-8 text-black/95 dark:text-white/95">
              9 ans à structurer les données des plus grands (Hôpitaux, Santé, Tech). 
              Aujourd'hui, je mets cette rigueur au service de votre PME.
            </h1>

            <div className="max-w-3xl mx-auto space-y-6 text-xl opacity-80 leading-relaxed mb-12">
              <p>
                Je suis <strong>Issa Sanogo</strong>. Je ne suis pas une agence, je suis l'expert qui met les mains dans vos bases de données.
              </p>
              <p>
                J'ai travaillé sur des <strong>données critiques</strong> : hôpitaux, instituts de recherche médicale, startups en hypercroissance. 
                <strong> Si on m'a confié des données de santé, vous pouvez me confier vos données de vente les yeux fermés.</strong>
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-12 sm:flex-row sm:gap-4 justify-center">
              <a href="#contact" className="btn-primary text-base px-6 py-3 w-full sm:w-auto">
                Visio de découverte (45-60 min)
                <ArrowRight size={18} />
              </a>
              <a href="#solutions" className="btn-secondary text-base px-6 py-3 w-full sm:w-auto">
                Voir des exemples concrets
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-black/10 dark:border-white/10">
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">9 ans</p>
              <p className="text-sm opacity-70">d'expertise sur données critiques</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">Rigueur</p>
              <p className="text-sm opacity-70">Hôpitaux, Recherche, Scale-ups</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">IDF + France</p>
              <p className="text-sm opacity-70">Bezons (95) · Interventions nationales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
