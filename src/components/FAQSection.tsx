import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Quelle est la différence entre un consultant data engineering indépendant et une ESN ?",
    answer: "Vous travaillez avec un interlocuteur unique qui conçoit et livre. Le perimetre, les livrables et le mode de collaboration sont definis avant demarrage.",
  },
  {
    question: "Quelles technologies maîtrisez-vous pour le data engineering ?",
    answer: "Stack selon contexte: orchestration (Airflow, Dagster, Prefect), transformation (dbt, Spark, SQL), ingestion (Airbyte, Fivetran ou custom), stockage (Snowflake, BigQuery, Databricks, PostgreSQL), streaming (Kafka, Pub/Sub), AWS/GCP/Azure.",
  },
  {
    question: "Pouvez-vous intervenir en tant que Product Owner Data ou Chef de Projet ?",
    answer: "Oui. Le role est defini au cadrage: Product Owner Data, Data Manager ou Chef de Projet Data. Objectif: backlog clair, gouvernance et delivery.",
  },
  {
    question: "Comment se déroule une mission type ?",
    answer: "Appel de cadrage (30 min), puis 1) cadrage (audit, architecture cible, roadmap), 2) delivery en sprints, 3) transfert (documentation, formation, support).",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "TJM ou forfait selon perimetre, duree et complexite. Devis apres cadrage.",
  },
  {
    question: "Intervenez-vous en remote ou sur site ?",
    answer: "Les deux. Remote par defaut, onsite ou hybride selon le projet. Le mode de fonctionnement est defini au cadrage.",
  },
  {
    question: "Que se passe-t-il si les livrables ne conviennent pas ?",
    answer: "Nous definissons des criteres de succes et des points de suivi. En cas d'ecart, nous ajustons le plan. Les conditions d'arret sont encadrees par le contrat.",
  },
  {
    question: "Pouvez-vous former nos équipes internes ?",
    answer: "Oui. Le transfert de competences fait partie des livrables: documentation, ateliers et formation sur les outils du projet.",
  },
] as const;

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10 dark:border-white/10 last:border-0">
      <button
        className="w-full py-6 flex items-start justify-between gap-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-base leading-relaxed pr-4">{question}</span>
        <ChevronDown 
          size={20} 
          className={`shrink-0 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="pb-6 pr-8">
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
