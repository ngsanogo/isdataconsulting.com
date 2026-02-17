import { Award, MapPin, Shield, Heart } from "lucide-react";
import SectionHeader from "./SectionHeader";

const CREDENTIALS = [
  {
    icon: Heart,
    value: "Données",
    label: "critiques",
    detail: "Hôpitaux, instituts de recherche médicale, santé",
  },
  {
    icon: Award,
    value: "9 ans",
    label: "d'expertise",
    detail: "De la startup en hypercroissance au grand groupe",
  },
  {
    icon: Shield,
    value: "Expert",
    label: "indépendant",
    detail: "Vous travaillez directement avec moi, pas d'intermédiaire",
  },
] as const;

const SECTORS_WORKED = [
  { sector: "Santé & Recherche", details: "Données patients, données de recherche" },
  { sector: "Scale-ups Tech", details: "Données produit, croissance rapide" },
  { sector: "Services B2B", details: "Données clients, activité commerciale" },
] as const;

export default function SocialProofSection() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <SectionHeader
          tag="Pourquoi me faire confiance"
          title="Si on m'a confié des données de santé..."
          description=""
        />

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl opacity-80 leading-relaxed text-center mb-6">
            Pendant 9 ans, j'ai travaillé sur <strong>des données où l'erreur n'est pas permise</strong> : 
            données patients dans des hôpitaux publics, données de recherche médicale, systèmes critiques 24/7.
          </p>
          <p className="text-2xl font-semibold text-center opacity-90">
            Si on m'a confié ces données-là, vous pouvez me confier vos données de vente, 
            de stocks ou de clients les yeux fermés.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {CREDENTIALS.map((cred) => (
            <div 
              key={cred.label}
              className="p-8 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 text-center"
            >
              <cred.icon className="w-12 h-12 mx-auto mb-4 opacity-60" strokeWidth={1.5} />
              <p className="text-4xl font-bold mb-2">{cred.value}</p>
              <p className="font-semibold text-lg mb-2">{cred.label}</p>
              <p className="text-sm opacity-60">{cred.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-gray-50 dark:bg-gray-900/30 border border-black/10 dark:border-white/10">
            <h3 className="font-bold text-xl mb-6">Secteurs d'intervention</h3>
            <div className="space-y-4">
              {SECTORS_WORKED.map((sector) => (
                <div key={sector.sector}>
                  <p className="font-semibold text-lg mb-1">{sector.sector}</p>
                  <p className="text-base opacity-70">{sector.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-white dark:bg-gray-900 border-l-4 border-black dark:border-white">
            <h3 className="font-bold text-xl mb-4">Mon engagement</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <span className="opacity-80"><strong>Rigueur</strong> : Je traite vos données comme si c'était des données médicales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <span className="opacity-80"><strong>Transparence</strong> : Devis clair, pas de surprise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <span className="opacity-80"><strong>Pédagogie</strong> : Je vous explique sans jargon</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <span className="opacity-80"><strong>Autonomie</strong> : Vous restez maître de vos systèmes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 border border-black/10 dark:border-white/10 bg-white dark:bg-gray-900">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              Proximité & Rayonnement
            </h3>
            <p className="opacity-80 leading-relaxed mb-4">
              <strong>Basé à Bezons (95)</strong>, je me déplace facilement en Île-de-France (75, 78, 92, 95) 
              pour vous rencontrer et comprendre vos besoins sur site.
            </p>
            <p className="opacity-80 leading-relaxed">
              <strong>Pour mes clients en région</strong>, je travaille avec des outils de collaboration modernes. 
              J'interviens régulièrement partout en France avec la même réactivité qu'en présentiel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
