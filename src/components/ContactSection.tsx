import { Mail, Phone, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const REASSURANCE = [
  "Appel de cadrage (30 min)",
  "Réponse sous 24h",
  "Proposition avec perimetre et planning",
  "Aucun engagement avant validation",
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
              Passons à l'action
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Discutons de votre projet data
            </h2>
            <p className="opacity-70 mb-8 text-lg leading-relaxed">
              Un appel de cadrage pour comprendre vos objectifs, contraintes
              et livrables attendus.
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
                href={`mailto:${SITE_CONFIG.email}?subject=Demande d'appel de cadrage`}
                className="flex items-center justify-center sm:justify-start gap-3 px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-medium hover:opacity-90 transition-opacity w-full sm:w-auto order-1"
              >
                <Mail size={18} />
                {SITE_CONFIG.email}
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
            <h3 className="font-bold text-2xl mb-8 flex items-center gap-3">
              <Calendar size={28} />
              Ce qui se passe après votre message
            </h3>
            
            <ol className="space-y-8">
              <li className="flex gap-5">
                <span className="text-3xl font-bold opacity-30 leading-none">01</span>
                <div>
                  <p className="font-semibold text-lg mb-2">Réponse sous 24h</p>
                  <p className="text-base opacity-70">
                    Nous vous recontactons rapidement pour fixer un créneau.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="text-3xl font-bold opacity-30 leading-none">02</span>
                <div>
                  <p className="font-semibold text-lg mb-2">Appel de cadrage (30 min)</p>
                  <p className="text-base opacity-70">
                    Objectifs, contraintes, perimetre et livrables.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="text-3xl font-bold opacity-30 leading-none">03</span>
                <div>
                  <p className="font-semibold text-lg mb-2">Proposition personnalisée</p>
                  <p className="text-base opacity-70">
                    Proposition avec perimetre, planning et budget indicatif.
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
