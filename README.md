# ISData Consulting

Site vitrine officiel de **ISData Consulting** — Cabinet de conseil spécialisé en Data Engineering, Architecture de données et Business Intelligence.

🌐 **[isdataconsulting.com](https://isdataconsulting.com)**

[![CI](https://github.com/ngsanogo/isdataconsulting.com/actions/workflows/ci.yml/badge.svg)](https://github.com/ngsanogo/isdataconsulting.com/actions/workflows/ci.yml)

---

## 🚀 Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org/) 20+ (recommandé: LTS)
- npm

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/ngsanogo/isdataconsulting.com.git
cd isdataconsulting.com

# Installer les dépendances
npm install

# Copier le fichier d'environnement (optionnel)
cp .env.example .env
```

### Développement

```bash
# Lancer le serveur de développement (http://localhost:5173)
npm run dev

# Vérifier les erreurs TypeScript
npm run type-check

# Linter le code
npm run lint

# Lancer les tests en mode watch
npm run test

# Lancer les tests avec couverture
npm run test:coverage
```

### Build & Preview

```bash
# Créer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

---

## 📁 Structure du projet

```plaintext
isdataconsulting.com/
├── public/              # Assets statiques (robots.txt, sitemap.xml, images)
├── src/
│   ├── components/      # Composants React réutilisables
│   │   ├── Header.tsx          # Navigation avec dropdown services
│   │   ├── HeroSection.tsx     # Section hero avec CTAs
│   │   ├── ProblemsSection.tsx # Pain points clients
│   │   ├── ExpertiseSection.tsx# 3 offres principales
│   │   ├── SocialProofSection.tsx # Preuves sociales
│   │   ├── MethodologySection.tsx # Process en 4 étapes
│   │   ├── FAQSection.tsx      # FAQ avec accordion
│   │   ├── ContactSection.tsx  # Section contact
│   │   ├── Footer.tsx          # Pied de page
│   │   ├── SEO.tsx             # Gestion meta tags dynamiques
│   │   ├── StickyCTA.tsx       # CTA sticky au scroll
│   │   └── ErrorBoundary.tsx   # Error boundary React
│   ├── config/          # Configuration centralisée
│   │   └── site.ts      # Toutes les infos du site (email, téléphone, SEO...)
│   ├── pages/
│   │   ├── Index.tsx           # Page d'accueil
│   │   ├── DataEngineering.tsx # Service Data Engineering
│   │   ├── ArchitectureData.tsx# Service Architecture Data
│   │   └── ProductDataServices.tsx # Service Product Data
│   ├── App.tsx          # Router principal
│   ├── main.tsx         # Point d'entrée React
│   └── index.css        # Styles Tailwind + design system
├── index.html           # Template HTML (SEO, meta tags, structured data)
├── package.json         # Dépendances et scripts
├── tsconfig.json        # Configuration TypeScript stricte
├── tailwind.config.ts   # Configuration Tailwind (palette noir/blanc)
├── vite.config.ts       # Configuration Vite
├── netlify.toml         # Configuration Netlify (build, redirects, headers)
├── eslint.config.js     # Configuration ESLint
└── README.md
```

---

## 🛠️ Stack technique

| Technologie      | Utilisation                      |
|------------------|----------------------------------|
| **React 18**     | Bibliothèque UI                  |
| **TypeScript**   | Typage strict, maintenabilité    |
| **Vite**         | Build tool moderne et rapide     |
| **Tailwind CSS** | Framework CSS utilitaire         |
| **Lucide React** | Icônes minimalistes              |
| **ESLint**       | Linting (config stricte)         |

---

## 🎨 Design System

### Palette de couleurs

Le site respecte une **palette noir & blanc uniquement** :

- Mode clair : fond blanc, texte noir
- Mode sombre : fond noir, texte blanc (via `prefers-color-scheme`)

### Composants CSS réutilisables

Définis dans [src/index.css](src/index.css) :

```css
.btn-primary     /* Bouton principal (inversé light/dark) */
.btn-secondary   /* Bouton secondaire (bordure) */
.section         /* Espacement vertical des sections */
.card            /* Carte avec bordure */
```

### Typographie

- Police : **Inter** (Google Fonts)
- Poids : 400 (regular), 500 (medium), 600 (semibold)

---

## 🌍 Déploiement

Le site est déployé sur **[Netlify](https://www.netlify.com/)**.

### Configuration Netlify

Voir [netlify.toml](netlify.toml) :

- Build : `npm run build`
- Publish : `dist/`
- SPA redirects : toutes les routes → `index.html`

### Déploiement automatique

Chaque push sur `main` déclenche un déploiement automatique via Netlify Git Integration.

### Déploiement manuel

```bash
npm run build
# Uploader le dossier dist/ sur Netlify
```

---

## 📝 Modification du contenu

Toutes les informations du site sont centralisées dans **[src/config/site.ts](src/config/site.ts)** :

```typescript
export const SITE_CONFIG = {
  name: "ISData Consulting",
  email: "contact@isdataconsulting.com",
  phone: "+33 6 51 98 52 79",
  // ... autres infos
};
```

Pour modifier un texte, une section ou un contact : **éditer ce fichier uniquement**.

---

## ✅ Qualité du code

### Vérifications automatiques

```bash
# TypeScript (strict mode)
npm run type-check

# ESLint (règles strictes)
npm run lint
```

### Configuration stricte

- TypeScript : `strict`, `noUnusedLocals`, `noImplicitAny`
- ESLint : React Hooks, TypeScript ESLint

---

## 📊 SEO & Performance

✅ **SEO optimisé** :

- Meta tags complets (Open Graph, Twitter Cards)
- Structured Data (JSON-LD)
- Sitemap XML + robots.txt
- URL canonique

✅ **Performance** :

- Bundle Vite optimisé
- Font display: swap (pas de FOIT)
- Lazy loading des icônes
- CSS purgé par Tailwind

---

## 📄 Licence

© 2026 ISData Consulting. Tous droits réservés.

**SASU** · SIREN 940 718 075 · TVA FR56940718075

---

## 🤝 Contact

- 📧 Email : [contact@isdataconsulting.com](mailto:contact@isdataconsulting.com)
- 📞 Téléphone : [+33 6 51 98 52 79](tel:+33651985279)
- 💼 LinkedIn : [ISData Consulting](https://linkedin.com/company/isdataconsulting)

---

### Fait avec ❤️ et TypeScript
