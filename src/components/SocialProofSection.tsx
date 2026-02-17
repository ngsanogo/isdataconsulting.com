import { MapPin, Clock, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";

const MISSIONS = [
  {
    client: "AP-HP",
    sector: "Hôpitaux publics",
    what: "Structuration des flux de données patients entre plusieurs établissements. Données sensibles, contraintes réglementaires fortes (HDS, RGPD).",
    takeaway: "Ce que ça m'a appris : une donnée mal structurée dans un hôpital, ce n'est pas un bug, c'est un risque pour un patient. J'applique cette rigueur à chaque mission.",
  },
  {
    client: "Institut Jérôme Lejeune",
    sector: "Recherche médicale",
    what: "Modélisation et centralisation de données de recherche génétique. Précision chirurgicale sur des schémas de données complexes.",
    takeaway: "Ce que ça m'a appris : la modélisation de données demande une exigence absolue. Je l'applique à vos données de stocks, de clients ou de comptabilité.",
  },
  {
    client: "Padoa",
    sector: "Santé au travail · Scale-up",
    what: "Ingestion de données massives en environnement de forte croissance. Reprise à 100% sans perte, orchestration résiliente.",
    takeaway: "Ce que ça m'a appris : faire tenir un système sous la pression de la croissance. Vos données de vente doublent ? Le système doit suivre sans casser.",
  },
] as const;

const COMMITMENTS = [
  {
    icon: Clock,
    value: "48h",
    label: "Réponse avec analyse sous 48h",
  },
  {
    icon: Users,
    value: "1 seul",
    label: "Interlocuteur de A à Z (moi)",
  },
  {
    icon: MapPin,
    value: "Bezons (95)",
    label: "Île-de-France · National",
  },
] as const;

export default function SocialProofSection() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <SectionHeader
          tag="Parcours"
          title="D'où je viens, pourquoi ça compte pour vous"
          description=""
        />

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl opacity-80 leading-relaxed text-center">
            Pendant 9 ans, j'ai travaillé sur des <strong>données où l'erreur n'est pas permise</strong>. 
            Voici les missions qui ont forgé ma méthode de travail.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {MISSIONS.map((mission) => (
            <div 
              key={mission.client}
              className="flex flex-col p-8 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-medium uppercase tracking-wide">
                  {mission.client}
                </span>
                <p className="text-sm opacity-50 mt-2">{mission.sector}</p>
              </div>
              <p className="opacity-80 leading-relaxed mb-4">{mission.what}</p>
              <div className="mt-auto p-4 bg-gray-50 dark:bg-gray-800/50 border-l-4 border-black dark:border-white">
                <p className="text-sm opacity-80 italic">{mission.takeaway}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10">
              <p className="font-semibold mb-2">Le juste niveau de tech</p>
              <p className="text-sm opacity-70">
                Je ne vous vendrai pas l'outil à la mode si un simple script bien documenté fait le travail. 
                Mon rôle est de <strong>choisir la solution la plus simple qui résout votre problème</strong>.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10">
              <p className="font-semibold mb-2">Documentation systématique</p>
              <p className="text-sm opacity-70">
                Chaque système livré est accompagné de sa documentation et de ses guides de dépannage. 
                <strong>Mon but : que vos équipes soient autonomes après mon départ.</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Mes engagements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {COMMITMENTS.map((commitment) => (
              <div 
                key={commitment.label}
                className="p-6 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 text-center"
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
