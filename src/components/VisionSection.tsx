import { Eye, Shield, Wrench, BookOpen } from "lucide-react";
import SectionHeader from "./SectionHeader";

const CONVICTIONS = [
  {
    icon: Shield,
    title: "La donnée comme actif, pas comme déchet",
    description: "Beaucoup voient la data comme un sous-produit technique. Pour moi, c'est le système nerveux de votre entreprise. Une infrastructure mal conçue, c'est une information qui circule mal.",
  },
  {
    icon: Eye,
    title: "L'obsession de la qualité (Data Quality)",
    description: "Faire circuler de la donnée est facile. Faire circuler de la donnée juste est un métier. Mon expertise à l'AP-HP m'a appris qu'une erreur de donnée n'est pas qu'un bug informatique, c'est une erreur de décision.",
  },
] as const;

const SMART_CONCEPTS = [
  {
    title: "Des pipelines 'rejouables'",
    subtitle: "Résilience par l'idempotence",
    description: "Je conçois des pipelines qui reprennent exactement là où ils se sont arrêtés après une panne, sans créer de doublons dans votre comptabilité. C'est l'idempotence appliquée à vos flux critiques.",
  },
  {
    title: "Une seule source de vérité",
    subtitle: "Single Source of Truth (SSOT)",
    description: "Mon objectif est que votre Directeur Commercial et votre Comptable regardent le même chiffre. Je crée une source de vérité unique pour supprimer les débats stériles en réunion sur 'qui a le bon fichier'.",
  },
] as const;

const REX_HIGHLIGHTS = [
  {
    context: "Padoa",
    challenge: "Ingestion de fortes volumétries",
    solution: "Comment j'ai géré l'ingestion de données massives tout en garantissant une reprise à 100% sans perte de contexte métier. Streaming, batch et orchestration résiliente.",
  },
  {
    context: "Institut Jérôme Lejeune",
    challenge: "Modélisation de données sensibles",
    solution: "Modéliser des données de santé demande une précision chirurgicale. J'applique cette même rigueur à vos stocks ou vos flux financiers. Pas de place pour l'approximation.",
  },
] as const;

const ARCHITECTURE_PRINCIPLES = [
  {
    icon: Wrench,
    title: "Le 'Juste Niveau' de Tech",
    description: "Je ne vous vendrai pas l'outil à la mode si un simple script Python bien documenté fait le job. Mon expertise de 9 ans me permet de savoir quand il faut sortir l'artillerie lourde et quand il faut rester simple et maintenable.",
  },
  {
    icon: BookOpen,
    title: "La documentation comme assurance-vie",
    description: "Un système sans documentation est une dette technique. Je livre systématiquement des Runbooks pour que vos équipes restent autonomes, même après mon départ.",
  },
] as const;

export default function VisionSection() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <SectionHeader
          tag="Ma vision"
          title="L'artisanat Data : expertise de 9 ans"
          description="Mes convictions techniques forgées sur des données critiques"
        />

        {/* Convictions */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {CONVICTIONS.map((conviction) => (
            <div 
              key={conviction.title}
              className="p-8 bg-white dark:bg-gray-900 border-l-4 border-black dark:border-white"
            >
              <conviction.icon className="w-10 h-10 mb-4 opacity-60" strokeWidth={1.5} />
              <h3 className="font-bold text-xl mb-3">{conviction.title}</h3>
              <p className="opacity-80 leading-relaxed">{conviction.description}</p>
            </div>
          ))}
        </div>

        {/* Smart Concepts */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Les concepts qui comptent</h3>
          <div className="space-y-6">
            {SMART_CONCEPTS.map((concept) => (
              <div 
                key={concept.title}
                className="p-6 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <h4 className="font-bold text-lg">{concept.title}</h4>
                  <span className="text-sm opacity-50 italic">{concept.subtitle}</span>
                </div>
                <p className="opacity-80 leading-relaxed">{concept.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Retours d'Expérience */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Retours d'expérience terrain</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {REX_HIGHLIGHTS.map((rex) => (
              <div 
                key={rex.context}
                className="p-8 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-medium uppercase tracking-wide">
                    {rex.context}
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-3">{rex.challenge}</h4>
                <p className="text-sm opacity-80 leading-relaxed">{rex.solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Principes d'Architecture */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Ma position sur l'Architecture</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {ARCHITECTURE_PRINCIPLES.map((principle) => (
              <div 
                key={principle.title}
                className="p-8 bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10"
              >
                <principle.icon className="w-10 h-10 mb-4 opacity-60" strokeWidth={1.5} />
                <h4 className="font-bold text-lg mb-3">{principle.title}</h4>
                <p className="opacity-80 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* L'œil de l'expert */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 bg-black dark:bg-white text-white dark:text-black border-l-4 border-white dark:border-black">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6" strokeWidth={2} />
              <h4 className="font-bold text-xl">L'œil de l'expert</h4>
            </div>
            <p className="text-lg leading-relaxed opacity-90">
              On parle beaucoup d'IA, mais 90% des échecs en IA viennent d'une donnée mal préparée en amont. 
              Mon job est de construire les fondations pour que vos futurs projets ne s'écroulent pas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
