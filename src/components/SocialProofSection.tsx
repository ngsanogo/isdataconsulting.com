import { Award, MapPin, Shield, Heart, Clock, Users } from "lucide-react";
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
    detail: "Vous travaillez directement avec moi",
  },
] as const;

const COMMITMENTS = [
  {
    icon: Clock,
    value: "24h",
    label: "Temps de réponse maximum",
  },
  {
    icon: Users,
    value: "1 seul",
    label: "Interlocuteur (moi)",
  },
  {
    icon: MapPin,
    value: "IDF + France",
    label: "Bezons (95) · National",
  },
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
            données patients dans des hôpitaux publics (AP-HP), données de recherche médicale (Institut Jérôme Lejeune), 
            systèmes critiques de santé au travail (Padoa).
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

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Mes engagements concrets</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {COMMITMENTS.map((commitment) => (
              <div 
                key={commitment.label}
                className="p-6 bg-gray-50 dark:bg-gray-900/30 border border-black/10 dark:border-white/10 text-center"
              >
                <commitment.icon className="w-10 h-10 mx-auto mb-3 opacity-60" strokeWidth={1.5} />
                <p className="text-2xl font-bold mb-2">{commitment.value}</p>
                <p className="text-sm opacity-70">{commitment.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
