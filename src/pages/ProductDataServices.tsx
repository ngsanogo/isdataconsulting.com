/**
 * Page Product Data Services - Product Owner Data / Data Manager / Chef de Projet Data
 * SEO Title: Product Owner Data | Data Manager | Chef de Projet Data | ISData Consulting
 * Meta Description: Services Product Owner Data et Data Manager : pilotage agile de produits data, 
 * priorisation backlog, alignement métier/IT. Accélérez votre time-to-market data.
 */
import { ArrowRight, Users, Target, Rocket, ClipboardList, BarChart3, Lightbulb, CheckCircle2, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SITE_CONFIG } from "@/config/site";

const ROLES = [
  {
    icon: Target,
    title: "Product Owner Data",
    description: "Définition et priorisation de la roadmap produit data, maximisation de la valeur délivrée aux utilisateurs.",
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
    description: "Gouvernance et qualité des données, coordination des parties prenantes data de l'organisation.",
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
    description: "Pilotage opérationnel des projets data, coordination des équipes techniques et métiers.",
    missions: [
      "Planning et suivi des sprints",
      "Gestion des risques et alertes",
      "Animation des cérémonies agiles",
      "Reporting auprès du COPIL",
      "Gestion du budget et des ressources",
      "Coordination fournisseurs/partenaires",
    ],
  },
] as const;

const METHODOLOGY = [
  {
    step: "01",
    title: "Discovery & Cadrage",
    description: "Compréhension des enjeux métiers, cartographie des parties prenantes, définition de la vision produit.",
    deliverables: ["Product Vision Board", "Stakeholder Map", "Initial Backlog"],
  },
  {
    step: "02",
    title: "Sprint 0 & Setup",
    description: "Mise en place des outils, définition des rituels, premiers éléments de roadmap.",
    deliverables: ["Definition of Ready/Done", "Roadmap initiale", "Outils configurés"],
  },
  {
    step: "03",
    title: "Delivery Itératif",
    description: "Sprints de 2 semaines, livraison continue de valeur, adaptation au feedback.",
    deliverables: ["Increments fonctionnels", "Demos régulières", "Metrics de valeur"],
  },
  {
    step: "04",
    title: "Mesure & Amélioration",
    description: "Analyse des KPIs d'adoption et de valeur, rétrospectives, amélioration continue.",
    deliverables: ["Dashboards d'adoption", "Retros documentées", "Plan d'amélioration"],
  },
] as const;

const VALUE_PROPS = [
  {
    icon: Rocket,
    title: "Time-to-Market accéléré",
    description: "Livraison rapide de valeur grâce à une priorisation efficace et des cycles courts.",
    metrics: "Réduction de 40% du délai de mise en production des use cases data",
  },
  {
    icon: Target,
    title: "Alignement Métier/IT",
    description: "Traduction des besoins métiers en spécifications techniques compréhensibles par tous.",
    metrics: "95% de satisfaction des sponsors métiers sur les livrables",
  },
  {
    icon: BarChart3,
    title: "Adoption maximisée",
    description: "Produits data conçus avec et pour les utilisateurs finaux, garantissant l'adoption.",
    metrics: "Taux d'adoption moyen de 80% sur les dashboards et data products",
  },
  {
    icon: Lightbulb,
    title: "ROI démontrable",
    description: "Mesure systématique de la valeur créée pour justifier les investissements data.",
    metrics: "ROI moyen de 250% sur les projets data accompagnés",
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
      "Première cohorte disponible en 6 mois",
      "15 projets de recherche activés la première année",
      "Labellisation EDS par le Health Data Hub",
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
      "Modèle d'attribution fiable déployé",
      "Réallocation de 20% du budget vers les canaux performants",
      "Dashboards self-service pour les équipes marketing",
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
      "Data warehouse opérationnel en 4 mois",
      "100% des contrats et contacts centralisés",
      "Adoption de 85% par les équipes dès le premier mois",
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
      <SEO 
        title="Product Owner Data | Data Manager | Chef de Projet Data | ISData Consulting"
        description="Services Product Owner Data et Data Manager : pilotage agile de produits data, priorisation backlog, alignement métier/IT. Accélérez votre time-to-market data."
        keywords={["product owner data", "data manager", "chef de projet data", "gouvernance données", "pilotage agile data", "backlog data"]}
        canonicalPath="/services/product-data"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center pt-14">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <a href="/" className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 mb-6 transition-opacity">
                <ArrowLeft size={14} />
                Retour à l'accueil
              </a>
              
              <p className="text-sm opacity-50 mb-4 tracking-wide uppercase">
                Product Data Services
              </p>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight mb-6">
                Pilotage agile de vos produits data
              </h1>

              <p className="text-lg opacity-70 leading-relaxed mb-8 max-w-2xl">
                Services de <strong>Product Owner Data</strong>, <strong>Data Manager</strong> et 
                <strong> Chef de Projet Data</strong>. Maximisez la valeur de vos données 
                grâce à un pilotage expert aligné sur vos enjeux métiers.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn-primary">
                  Discuter de votre projet
                  <ArrowRight size={16} />
                </a>
                <a href="#roles" className="btn-secondary">
                  Découvrir les missions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section id="roles" className="section">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Rôles & Missions
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Des expertises complémentaires pour vos projets data
              </h2>
              <p className="opacity-60">
                Que vous ayez besoin d'un Product Owner, d'un Data Manager ou d'un Chef de Projet, 
                nous adaptons notre intervention à votre contexte.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
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

        {/* Value Props Section */}
        <section className="section bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Valeur Ajoutée
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Pourquoi externaliser le pilotage de vos produits data ?
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

        {/* Methodology Section */}
        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Méthodologie
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Une approche structurée et adaptable
              </h2>
              <p className="opacity-60">
                De la discovery à l'amélioration continue, une démarche éprouvée.
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

        {/* Skills Section */}
        <section className="section bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Compétences
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Outils et méthodologies maîtrisés
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

        {/* Case Studies Section */}
        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
                Références
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                Missions Product Data réalisées
              </h2>
              <p className="opacity-60">
                Exemples de missions de pilotage et de gouvernance data.
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

        {/* CTA Section */}
        <section id="contact" className="section bg-black dark:bg-white text-white dark:text-black">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Besoin d'un expert pour piloter vos produits data ?
            </h2>
            <p className="opacity-70 mb-8 max-w-xl mx-auto">
              Discutons de vos enjeux et voyons comment je peux vous accompagner 
              en tant que <strong>Product Owner Data</strong>, <strong>Data Manager</strong> ou 
              <strong> Chef de Projet</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Demande Product Data Services`}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-medium hover:opacity-80 transition-opacity"
              >
                Prendre rendez-vous
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
