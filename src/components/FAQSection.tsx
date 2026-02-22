import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Quelle est la différence avec une ESN ?",
    answer: "Vous travaillez directement avec moi, de la première réunion à la mise en production. Pas d'intermédiaire, pas de commercial, pas de turnover. Le périmètre et les livrables sont définis avant démarrage.",
  },
  {
    question: "Quelles technologies maîtrisez-vous ?",
    answer: "J'adapte les outils au contexte. Pour l'orchestration : Airflow, Dagster. Pour la transformation : dbt, Spark. Pour le stockage : Snowflake, BigQuery, PostgreSQL. Cloud (AWS, Azure) ou sur vos propres serveurs (On-Premise). Je choisis ce qui est le plus adapté à votre budget et vos contraintes.",
  },
  {
    question: "Pouvez-vous aussi piloter le projet ?",
    answer: "Oui. Je peux intervenir comme Chef de Projet Data ou Product Owner Data. L'objectif reste le même : un backlog clair, une gouvernance simple et des livrables concrets.",
  },
  {
    question: "Comment se déroule une mission type ?",
    answer: "Visio de découverte métier (1h), puis analyse de faisabilité technique (48h). Si c'est faisable, on contractualise et j'exécute en sprints courts avec des livrables visibles. Sinon, je vous le dis franchement.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "TJM ou forfait selon le périmètre, la durée et la complexité. Je vous envoie un devis clair après la phase d'évaluation technique.",
  },
  {
    question: "Intervenez-vous en remote ou sur site ?",
    answer: "Les deux. Remote par défaut, mais je me déplace facilement en Île-de-France (basé à Bezons, 95). Hybride ou onsite selon le projet.",
  },
  {
    question: "Que se passe-t-il si les livrables ne conviennent pas ?",
    answer: "Je définis des critères de succès clairs et des points de suivi réguliers. En cas d'écart, j'ajuste le plan. Les conditions d'arrêt sont encadrées par le contrat.",
  },
  {
    question: "Pouvez-vous former mes équipes ?",
    answer: "Oui. Le transfert de compétences fait partie de mes livrables : documentation, ateliers pratiques et formation sur les outils du projet. Mon but est que vous ne dépendiez jamais de moi.",
  },
] as const;

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `faq-panel-${question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className="border-b border-black/10 dark:border-white/10 last:border-0">
      <button
        type="button"
        className="w-full py-6 flex items-start justify-between gap-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-medium text-base leading-relaxed pr-4">{question}</span>
        <ChevronDown 
          size={20} 
          className={`shrink-0 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div id={panelId} className="pb-6 pr-8">
          <p className="text-base opacity-70 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="section">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
            Questions fréquentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tout ce que vous devez savoir
          </h2>
          <p className="opacity-70 text-lg">
            Questions sur le perimetre ou les livrables ? <a href="#contact" className="underline underline-offset-2 font-medium">Contactez-moi</a>.
          </p>
        </div>

        <div className="border border-black/10 dark:border-white/10 divide-y divide-black/10 dark:divide-white/10">
          {FAQS.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
