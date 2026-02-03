/**
 * Section Social Proof & Crédibilité
 * Objectif : Rassurer les décideurs avec des preuves concrètes
 */
import { CheckCircle2, Award, Building2, Users } from "lucide-react";

const CREDENTIALS = [
  {
    icon: Award,
    value: "+10 ans",
    label: "d'expérience en Data Engineering",
    detail: "Grands groupes, scale-ups, associations",
  },
  {
    icon: Building2,
    value: "50+",
    label: "projets data livrés",
    detail: "De la startup au CAC40",
  },
  {
    icon: Users,
    value: "100%",
    label: "de clients satisfaits",
    detail: "Recommandation et récurrence",
  },
] as const;

const EXPERTISE_PROOF = [
  "Certifié Google Cloud Professional Data Engineer",
  "Contributeur open-source (dbt, Airflow)",
  "Expérience en ESN et grands comptes",
  "Formateur data engineering",
  "Speaker conférences tech (Snowflake Summit, dbt meetups)",
] as const;

const CLIENT_TYPES = [
  { type: "Scale-ups", examples: "Séries A-C en hypercroissance" },
  { type: "Grands groupes", examples: "DSI & directions data" },
  { type: "Associations", examples: "Fédérations, ONG" },
  { type: "Agences", examples: "Marketing, média, digital" },
] as const;

export default function SocialProofSection() {
  return (
    <section className="section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
            Pourquoi nous faire confiance
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Un expert senior, pas une ESN
          </h2>
          <p className="opacity-60 text-lg">
            Vous travaillez directement avec un consultant senior expérimenté. 
            Pas de junior, pas de turn-over, pas de surprise.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {CREDENTIALS.map((cred) => (
            <div 
              key={cred.label}
              className="p-6 border border-black/10 dark:border-white/10 text-center"
            >
              <cred.icon className="w-8 h-8 mx-auto mb-3 opacity-60" strokeWidth={1.5} />
              <p className="text-3xl font-semibold mb-1">{cred.value}</p>
              <p className="font-medium mb-1">{cred.label}</p>
              <p className="text-sm opacity-50">{cred.detail}</p>
            </div>
          ))}
        </div>

        {/* Two columns: Expertise + Client types */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Expertise list */}
          <div className="p-6 bg-gray-50 dark:bg-gray-900/30 border border-black/10 dark:border-white/10">
            <h3 className="font-semibold text-lg mb-4">
              Expertise démontrée
            </h3>
            <ul className="space-y-3">
              {EXPERTISE_PROOF.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 text-green-600 dark:text-green-400 shrink-0" />
                  <span className="text-sm opacity-80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Client types */}
          <div className="p-6 bg-gray-50 dark:bg-gray-900/30 border border-black/10 dark:border-white/10">
            <h3 className="font-semibold text-lg mb-4">
              Clients accompagnés
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {CLIENT_TYPES.map((client) => (
                <div key={client.type}>
                  <p className="font-medium mb-1">{client.type}</p>
                  <p className="text-sm opacity-50">{client.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Differentiator */}
        <div className="mt-12 p-6 bg-black dark:bg-white text-white dark:text-black">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-grow">
              <h3 className="font-semibold text-lg mb-2">
                La différence ISData Consulting
              </h3>
              <p className="opacity-70">
                Un interlocuteur unique qui comprend autant les enjeux techniques que business. 
                Pas de commercial, pas de manager intermédiaire : vous parlez directement à celui qui fait.
              </p>
            </div>
            <a 
              href="#contact" 
              className="shrink-0 px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-medium hover:opacity-80 transition-opacity"
            >
              Discutons de votre projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
