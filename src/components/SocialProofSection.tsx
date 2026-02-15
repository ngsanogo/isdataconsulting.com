import { Award, Building2, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";
import FeatureList from "./FeatureList";

const CREDENTIALS = [
  {
    icon: Award,
    value: "Experience senior",
    label: "Data Engineering & Architecture",
    detail: "Interventions sur missions courtes et longues",
  },
  {
    icon: Building2,
    value: "Interlocuteur unique",
    label: "Decision et execution alignees",
    detail: "Pas d'intermediaire",
  },
  {
    icon: Users,
    value: "References sur demande",
    label: "Missions verifiables",
    detail: "Partage en echange confidentiel",
  },
] as const;

const EXPERTISE_PROOF = [
  "Architecture cible et ADR documentes",
  "Pipelines testes avec monitoring",
  "Runbooks et transfert de competences",
  "Gouvernance et ownership des donnees",
  "Securite et conformite selon contexte",
  "Management d'equipe data et rituels",
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
        <SectionHeader
          tag="Pourquoi nous faire confiance"
          title="Un expert senior, pas une ESN"
          description="Vous travaillez directement avec un consultant senior. Objectifs, livrables et responsabilites sont explicites."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {CREDENTIALS.map((cred) => (
            <div 
              key={cred.label}
              className="p-8 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors text-center"
            >
              <cred.icon className="w-10 h-10 mx-auto mb-4 opacity-70" strokeWidth={1.5} />
              <p className="text-4xl font-bold mb-2">{cred.value}</p>
              <p className="font-semibold text-lg mb-2">{cred.label}</p>
              <p className="text-base opacity-60">{cred.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="p-8 bg-gray-50 dark:bg-gray-900/30 border border-black/10 dark:border-white/10">
            <h3 className="font-bold text-xl mb-6">
              Expertise démontrée
            </h3>
            <FeatureList items={EXPERTISE_PROOF} variant="detailed" />
          </div>

          <div className="p-8 bg-gray-50 dark:bg-gray-900/30 border border-black/10 dark:border-white/10">
            <h3 className="font-bold text-xl mb-6">
              Clients accompagnés
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {CLIENT_TYPES.map((client) => (
                <div key={client.type}>
                  <p className="font-semibold text-lg mb-2">{client.type}</p>
                  <p className="text-base opacity-70">{client.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-black dark:bg-white text-white dark:text-black">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-grow">
              <h3 className="font-semibold text-lg mb-2">
                La différence ISData Consulting
              </h3>
              <p className="opacity-70">
                Un interlocuteur unique, des livrables explicites et une execution directe.
              </p>
            </div>
            <a 
              href="#contact" 
              className="shrink-0 px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-medium hover:opacity-80 transition-opacity"
            >
              Planifier un appel de cadrage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
