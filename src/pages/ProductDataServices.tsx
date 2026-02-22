import { ArrowRight, Users, Target, Rocket, ClipboardList, BarChart3, Lightbulb, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SITE_CONFIG } from "@/config/site";

const ROLES = [
  {
    icon: Target,
    title: "Product Owner Data",
    description: "Vision produit, priorisation du backlog et definition des livrables data.",
    missions: [
      "Définition de la vision produit data",
      "Gestion et priorisation du backlog",
      "Rédaction des user stories data",
      "Arbitrage fonctionnel quotidien",
      "Validation des livrables (Definition of Done)",
      "Mesure de la valeur métier (KPIs)",
    ],
  },
  {
    icon: Users,
    title: "Data Manager",
    description: "Gouvernance, qualite des donnees et coordination des owners.",
    missions: [
      "Cartographie des données et des flux",
      "Définition des standards de qualité",
      "Gestion du catalogue de données",
      "Coordination des data owners",
      "Mise en place de la gouvernance",
      "Conformité réglementaire (RGPD, etc.)",
    ],
  },
  {
    icon: ClipboardList,
    title: "Chef de Projet Data",
    description: "Pilotage delivery, risques et coordination metier/tech.",
    missions: [
      "Planning et suivi des sprints",
      "Gestion des risques et alertes",
      "Animation des cérémonies agiles",
      "Reporting auprès du COPIL",
      "Gestion du budget et des ressources",
      "Coordination fournisseurs/partenaires",
    ],
  },
  {
    icon: Users,
    title: "Management d'equipe Data",
    description: "Organisation de l'equipe, rituels, objectifs et progression des competences.",
    missions: [
      "Definition des roles et responsabilites",
      "Rituels d'equipe et standards de delivery",
      "Plan de competences et mentoring",
      "Recrutement et onboarding",
      "Alignement objectifs et KPIs",
      "Coordination inter-equipes",
    ],
  },
] as const;

const METHODOLOGY = [
  {
    step: "01",
    title: "Discovery & Cadrage",
    description: "Enjeux, parties prenantes, definition de la vision produit.",
    deliverables: ["Product Vision Board", "Stakeholder Map", "Initial Backlog"],
  },
  {
    step: "02",
    title: "Sprint 0 & Setup",
    description: "Outils, rituels, backlog et roadmap initiale.",
    deliverables: ["Definition of Ready/Done", "Roadmap initiale", "Outils configurés"],
  },
  {
    step: "03",
    title: "Delivery Itératif",
    description: "Sprints courts, livraison continue, adaptation au feedback.",
    deliverables: ["Increments fonctionnels", "Demos régulières", "Metrics de valeur"],
  },
  {
    step: "04",
    title: "Mesure & Amélioration",
    description: "KPIs d'adoption, retrospectives, amelioration continue.",
    deliverables: ["Dashboards d'adoption", "Retros documentées", "Plan d'amélioration"],
  },
] as const;

const VALUE_PROPS = [
  {
    icon: Rocket,
    title: "Time-to-Market accéléré",
    description: "Livraison rapide par cycles courts et priorisation claire.",
    metrics: "Backlog priorise et jalons clairs",
  },
  {
    icon: Target,
    title: "Alignement Métier/IT",
    description: "Traduction des besoins metier en livrables techniques.",
    metrics: "Critere de succes explicites",
  },
  {
    icon: BarChart3,
    title: "Adoption maximisée",
    description: "Produits data concus avec les utilisateurs finaux.",
    metrics: "Mesure d'usage et feedback",
  },
  {
    icon: Lightbulb,
    title: "ROI démontrable",
    description: "Mesure de valeur via KPIs definis au cadrage.",
    metrics: "KPIs partages et suivis",
  },
] as const;

const CASE_STUDIES = [
  {
    sector: "Santé",
    title: "Product Owner Entrepôt de Données de Santé",
    context: "Un CHU lançant son entrepôt de données de santé (EDS) pour la recherche clinique, avec des parties prenantes multiples (DSI, DIM, chercheurs).",
    role: "Product Owner de l'EDS, interface entre les équipes techniques et les chercheurs.",
    actions: [
      "Ateliers de priorisation avec 12 équipes de recherche",
      "Définition des cohortes patients prioritaires",
      "Coordination avec le DPO pour la conformité RGPD",
      "Roadmap de 18 mois avec jalons réglementaires",
    ],
    results: [
      "Premiere cohorte disponible",
      "Activation de projets de recherche",
      "Conformite reglementaire suivie",
    ],
  },
  {
    sector: "Marketing",
    title: "Data Manager Attribution & Mesure",
    context: "Une scale-up e-commerce avec 5M€/mois de budget média, incapable de mesurer le ROI réel de ses campagnes.",
    role: "Data Manager responsable du référentiel attribution et de la qualité des données marketing.",
    actions: [
      "Audit des 12 sources de données marketing",
      "Définition du modèle d'attribution multi-touch",
      "Mise en place de la gouvernance des UTM",
      "Formation des équipes acquisition",
    ],
    results: [
      "Modele d'attribution deploye",
      "Budget realloue selon performance",
      "Dashboards self-service",
    ],
  },
  {
    sector: "Association",
    title: "Chef de Projet Data Warehouse Associatif",
    context: "Une fédération d'associations souhaitant centraliser la gestion de ses 500 structures membres, contrats partenaires et historique des cotisations.",
    role: "Chef de projet data coordonnant la DSI, les équipes métiers (adhésions, partenariats) et le prestataire technique.",
    actions: [
      "Cadrage des besoins avec 8 directions métiers",
      "Priorisation des données critiques (contrats, contacts, paiements)",
      "Coordination du développement en sprints de 2 semaines",
      "Accompagnement au changement et formation des utilisateurs",
    ],
    results: [
      "Data warehouse operationnel",
      "Contrats et contacts centralises",
      "Adoption suivie par les equipes",
    ],
  },
] as const;

const SKILLS = [
  { category: "Méthodologie", items: ["Scrum", "Kanban", "SAFe", "Design Thinking"] },
  { category: "Outils Produit", items: ["Jira", "Confluence", "Notion", "Miro", "Figma"] },
  { category: "Data Governance", items: ["Data Catalog", "Collibra", "Alation", "Data Quality"] },
  { category: "Mesure", items: ["OKRs", "KPIs", "Analytics", "A/B Testing"] },
] as const;

export default function ProductDataServices() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-black focus:px-4 focus:py-2 focus:text-white dark:focus:bg-white dark:focus:text-black"
      >
        Aller au contenu principal
      </a>
      <SEO 
        title="Pilotage de projet Data | Chef de Projet & Product Owner | Expert Bezons (95) | ISData"
        description="Je pilote votre projet data de A à Z : cadrage, exécution agile, transfert. Gain de temps, livrables fiables. Expert indépendant basé en Île-de-France."
        keywords={["pilotage projet data PME", "chef de projet data IDF", "product owner data", "gain de temps", "fiabilité données", "expert data Bezons", "Île-de-France"]}
        canonicalPath="/services/product-data"
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="min-h-[70vh] flex items-center pt-14">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <Link to="/" className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 mb-6 transition-opacity">
                <ArrowLeft size={14} />
                Retour à l'accueil
              </Link>
              
              <p className="text-sm opacity-50 mb-4 tracking-wide uppercase">
                Pilotage de projet Data
              </p>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight mb-6">
                Je pilote votre projet data de A à Z
              </h1>

              <p className="text-lg opacity-70 leading-relaxed mb-8 max-w-2xl">
                Cadrage, exécution agile et transfert à vos équipes. Un seul interlocuteur,
                des livrables concrets et une gouvernance simple.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn-primary">
                  Réserver une visio découverte (1h)
                  <ArrowRight size={16} />
                </a>
                <a href="#roles" className="btn-secondary">
                  Découvrir les missions
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="roles" className="section">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Rôles & Missions
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Product Owner, Chef de Projet, Management d'equipe
              </h2>
              <p className="opacity-60">
                Intervention definie selon perimetre, responsabilites et livrables.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {ROLES.map((role) => (
                <article
                  key={role.title}
                  className="p-6 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors"
                >
                  <role.icon className="w-8 h-8 mb-4 opacity-80" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                  <p className="opacity-60 mb-4 text-sm leading-relaxed">
                    {role.description}
                  </p>
                  
                  <p className="text-xs uppercase tracking-wide opacity-50 mb-2">Missions clés</p>
                  <ul className="space-y-1.5">
                    {role.missions.map((mission) => (
                      <li key={mission} className="flex items-start gap-2 text-sm opacity-70">
                        <CheckCircle2 size={14} className="mt-0.5 text-green-600 dark:text-green-400 shrink-0" />
                        {mission}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Valeur ajoutee
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Pourquoi externaliser le pilotage
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {VALUE_PROPS.map((prop) => (
                <article
                  key={prop.title}
                  className="p-6 bg-white dark:bg-black border border-black/10 dark:border-white/10"
                >
                  <prop.icon className="w-8 h-8 mb-4 opacity-80" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
                  <p className="opacity-60 mb-3 text-sm leading-relaxed">
                    {prop.description}
                  </p>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">
                    📈 {prop.metrics}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Méthodologie
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Une approche structuree
              </h2>
              <p className="opacity-60">
                De la discovery a l'amelioration continue.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {METHODOLOGY.map((phase) => (
                <div key={phase.step}>
                  <span className="text-3xl font-semibold opacity-20 mb-3 block">
                    {phase.step}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed mb-3">
                    {phase.description}
                  </p>
                  <div>
                    <p className="text-xs uppercase tracking-wide opacity-50 mb-1">Livrables</p>
                    <ul className="space-y-0.5">
                      {phase.deliverables.map((d) => (
                        <li key={d} className="text-xs opacity-60">• {d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Competences
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Outils et methodologies
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILLS.map((skill) => (
                <div key={skill.category}>
                  <h3 className="text-sm uppercase tracking-wide opacity-50 mb-3">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 border border-black/10 dark:border-white/10 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Références
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Exemples de missions
              </h2>
              <p className="opacity-60">
                Exemples de missions anonymisees. Livrables et details sur demande.
              </p>
            </div>

            <div className="space-y-6">
              {CASE_STUDIES.map((study) => (
                <article
                  key={study.title}
                  className="p-6 border border-black/10 dark:border-white/10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="lg:w-1/3">
                      <span className="text-xs uppercase tracking-wide opacity-50 mb-2 block">
                        {study.sector}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                      <p className="opacity-60 text-sm mb-3">{study.context}</p>
                      <p className="text-sm font-medium">{study.role}</p>
                    </div>
                    
                    <div className="lg:w-1/3">
                      <p className="text-xs uppercase tracking-wide opacity-50 mb-2">Actions menées</p>
                      <ul className="space-y-1.5">
                        {study.actions.map((action) => (
                          <li key={action} className="flex items-start gap-2 text-sm opacity-70">
                            <span className="opacity-40">•</span>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="lg:w-1/3">
                      <p className="text-xs uppercase tracking-wide opacity-50 mb-2">Résultats</p>
                      <ul className="space-y-1.5">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 size={14} className="mt-0.5 text-green-600 dark:text-green-400 shrink-0" />
                            <span className="opacity-80">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section bg-black dark:bg-white text-white dark:text-black">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Un projet data à piloter ?
            </h2>
            <p className="opacity-70 mb-8 max-w-xl mx-auto">
              Cadrage, livrables et planning : on fait le point ensemble.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Visio découverte — Pilotage projet Data`}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-medium hover:opacity-80 transition-opacity"
              >
                Réserver une visio découverte (1h)
                <ArrowRight size={16} />
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 px-6 py-3 border border-white/30 dark:border-black/30 font-medium hover:opacity-80 transition-opacity"
              >
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
