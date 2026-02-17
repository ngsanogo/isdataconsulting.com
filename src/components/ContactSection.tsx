import { Mail, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const REASSURANCE = [
  "Visio de découverte offerte (1h)",
  "Analyse de faisabilité sous 48h",
  "Devis clair, sans surprise",
  "Si je ne peux pas aider, je vous le dis",
] as const;

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section bg-black dark:bg-white text-white dark:text-black"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
              On en parle ?
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Parlons de vos données
            </h2>
            <p className="opacity-70 mb-8 text-lg leading-relaxed">
              Je vous écoute, je vous conseille, et on voit ensemble si je peux vous aider. 
              Pas de vente forcée, pas de jargon.
            </p>

            <ul className="space-y-4 mb-10">
              {REASSURANCE.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-green-400 shrink-0" />
                  <span className="opacity-90 text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-4 flex flex-col sm:flex-row sm:gap-4">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Visio de découverte métier (1h)`}
                className="flex items-center justify-center sm:justify-start gap-3 px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-medium hover:opacity-90 transition-opacity w-full sm:w-auto order-1"
              >
                <Mail size={18} />
                M'envoyer un email
                <ArrowRight size={16} className="hidden sm:inline" />
              </a>
              
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center sm:justify-start gap-3 px-6 py-3 border border-white/30 dark:border-black/30 font-medium hover:opacity-80 transition-opacity w-full sm:w-auto order-2"
              >
                <Phone size={18} />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>

          <div className="p-8 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20">
            <h3 className="font-bold text-2xl mb-8">
              Une approche en 3 temps
            </h3>
            
            <ol className="space-y-8">
              <li className="flex gap-5">
                <span className="text-3xl font-bold opacity-30 leading-none">01</span>
                <div>
                  <p className="font-semibold text-lg mb-2">Visio de découverte métier (1h)</p>
                  <p className="text-base opacity-70 mb-3">
                    On sort de la technique pure pour comprendre votre business.
                  </p>
                  <p className="text-sm opacity-60">
                    <strong>Objectif :</strong> Identifier vos sources de données (ERP, CRM, Excel), 
                    vos flux actuels et vos points de douleur opérationnels.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="text-3xl font-bold opacity-30 leading-none">02</span>
                <div>
                  <p className="font-semibold text-lg mb-2">Phase d'étude et d'évaluation (24-48h)</p>
                  <p className="text-base opacity-70 mb-3">
                    Le travail de l'ingénieur se fait ici, à tête reposée.
                  </p>
                  <p className="text-sm opacity-60">
                    <strong>La réponse :</strong> Sous 48h, je vous reviens avec une proposition concrète. 
                    Si je ne peux pas garantir une solution fiable et industrielle, je vous le dis franchement 
                    et je vous oriente vers un confrère.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="text-3xl font-bold opacity-30 leading-none">03</span>
                <div>
                  <p className="font-semibold text-lg mb-2">Contractualisation et Delivery Agile</p>
                  <p className="text-base opacity-70 mb-3">
                    Une fois d'accord sur la direction, on lance l'exécution.
                  </p>
                  <p className="text-sm opacity-60">
                    <strong>Méthode Agile :</strong> On avance par itérations. Vous voyez des résultats concrets 
                    rapidement (pipelines testés, premiers dashboards), pas dans 6 mois. 
                    Chaque brique posée est documentée pour que vos équipes soient autonomes après mon passage.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
