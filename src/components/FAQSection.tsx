import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Quelle est la différence entre un consultant data engineering indépendant et une ESN ?",
    answer: "Avec un consultant indépendant comme ISData Consulting, vous travaillez directement avec un expert senior (+10 ans d'expérience). Pas de junior affecté à votre projet, pas de turn-over, pas de couche managériale. Vous bénéficiez d'une expertise pointue, d'une réactivité maximale et d'un engagement personnel sur la réussite de votre projet. Le coût est souvent équivalent voire inférieur, pour une qualité de livrable supérieure.",
  },
  {
    question: "Quelles technologies maîtrisez-vous pour le data engineering ?",
    answer: "Je maîtrise l'ensemble de la stack data moderne : orchestration (Airflow, Dagster, Prefect), transformation (dbt, Spark, SQL), ingestion (Airbyte, Fivetran, custom), stockage (Snowflake, BigQuery, Databricks, PostgreSQL), streaming (Kafka, Pub/Sub), et les trois clouds majeurs (AWS, GCP, Azure). Je choisis les technologies adaptées à votre contexte, pas mes préférences personnelles.",
  },
  {
    question: "Pouvez-vous intervenir en tant que Product Owner Data ou Chef de Projet ?",
    answer: "Oui, c'est l'un de mes trois piliers d'expertise. J'accompagne les organisations en tant que Product Owner Data (vision produit, backlog, priorisation), Data Manager (gouvernance, qualité, catalogue) ou Chef de Projet Data (coordination, delivery, COPIL). Mon background technique me permet de faire le pont efficacement entre les équipes métiers et IT.",
  },
  {
    question: "Comment se déroule une mission type ?",
    answer: "Chaque mission commence par un appel découverte gratuit (30 min) pour comprendre votre contexte. Ensuite : 1) Cadrage (1-2 semaines) : audit, architecture cible, roadmap. 2) Build (sprints de 2 semaines) : implémentation itérative avec démos régulières. 3) Transfert : documentation, formation, support. La durée totale varie de quelques semaines à plusieurs mois selon la complexité.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Je travaille au TJM (Tarif Journalier Moyen) adapté à la complexité de la mission et à l'engagement durée. Un devis détaillé est fourni après l'appel découverte. Pour les missions de plusieurs mois, des conditions préférentielles sont possibles. L'objectif est toujours un ROI positif et rapide pour vous.",
  },
  {
    question: "Intervenez-vous en remote ou sur site ?",
    answer: "Les deux. La majorité de mes missions se font en remote (je suis basé en Île-de-France), avec des points réguliers en visio et des déplacements ponctuels sur site si nécessaire. Pour les clients parisiens, une présence hybride est tout à fait possible. L'essentiel est de définir un mode de fonctionnement qui vous convient.",
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait ?",
    answer: "Ma priorité est votre satisfaction. En début de mission, nous définissons des critères de succès clairs et mesurables. Des points réguliers permettent d'ajuster le tir si nécessaire. Si malgré tout le courant ne passe pas, nous pouvons arrêter la collaboration à tout moment avec un préavis raisonnable. Mon taux de satisfaction client de 100% témoigne de mon engagement.",
  },
  {
    question: "Pouvez-vous former nos équipes internes ?",
    answer: "Absolument. Le transfert de compétences fait partie intégrante de ma méthodologie. Je peux également proposer des formations dédiées sur des sujets spécifiques : dbt, Airflow, architecture data, bonnes pratiques data engineering, etc. L'objectif est de vous rendre autonomes, pas dépendants.",
  },
] as const;

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10 dark:border-white/10 last:border-0">
      <button
        className="w-full py-5 flex items-start justify-between gap-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown 
          size={20} 
          className={`shrink-0 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="pb-5 pr-8">
          <p className="text-sm opacity-70 leading-relaxed">
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
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Tout ce que vous devez savoir
          </h2>
          <p className="opacity-60">
            Vous avez d'autres questions ? <a href="#contact" className="underline underline-offset-2">Contactez-moi directement</a>.
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
