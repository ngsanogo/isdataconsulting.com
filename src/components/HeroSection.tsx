import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-14">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img
                  src="/photo-issa.jpg"
                  alt="Issa Sanogo, expert data indépendant"
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px] rounded-full object-cover border-2 border-black/10 dark:border-white/10"
                  loading="eager"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs font-medium px-3 py-1 whitespace-nowrap">
                  9 ans d'expertise
                </span>
              </div>
            </div>

            <p className="text-sm font-medium opacity-60 mb-4 uppercase tracking-wide">
              PME & ETI · Île-de-France
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-8 text-black/95 dark:text-white/95">
              J'ai structuré les données de l'AP-HP et de l'Institut Jérôme Lejeune.
              Aujourd'hui, je mets cette rigueur au service de votre PME.
            </h1>

            <div className="max-w-3xl mx-auto space-y-6 text-xl opacity-80 leading-relaxed mb-12">
              <p>
                Je suis <strong>Issa Sanogo</strong>, expert data indépendant. Pas une agence, pas un commercial : je suis l'ingénieur qui met les mains dans vos bases de données.
              </p>
              <p>
                Pendant 9 ans, on m'a confié des <strong>données de santé</strong>, là où une erreur peut avoir des conséquences graves.
                J'apporte cette même exigence à vos données de vente, de stocks ou de clients.
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-12 sm:flex-row sm:gap-4 justify-center">
              <a href="#contact" className="btn-primary text-base px-6 py-3 w-full sm:w-auto">
                Réserver une visio découverte (1h)
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
              <p className="text-sm opacity-70">d'expertise terrain</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">Santé & Tech</p>
              <p className="text-sm opacity-70">AP-HP, Lejeune, Padoa</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">Bezons (95)</p>
              <p className="text-sm opacity-70">Île-de-France · Interventions nationales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
