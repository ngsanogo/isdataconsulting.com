# ISDATA Consulting

Site vitrine B2B pour **ISDATA Consulting** — Ingénierie de Données & Business Intelligence.

🔗 **[isdataconsulting.com](https://isdataconsulting.com)**

---

## Stack Technique

| Technologie | Usage |
|-------------|-------|
| **React 18** | Interface utilisateur |
| **TypeScript** | Typage strict |
| **Vite** | Build & dev server |
| **Tailwind CSS** | Design system |
| **Vitest** | Tests unitaires |
| **Netlify** | Hébergement & CDN |

---

## Développement

### Prérequis

- Node.js 20+
- npm 9+

### Installation

```bash
npm install
```

### Commandes

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur local (localhost:3000) |
| `npm run build` | Build production |
| `npm run preview` | Aperçu du build |
| `npm run test` | Tests unitaires |
| `npm run lint` | Linting ESLint |
| `npm run type-check` | Vérification TypeScript |

---

## Structure du Projet

```
.
├── public/             # Assets statiques
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── components/     # Composants React
│   ├── config/         # Configuration centralisée
│   ├── pages/          # Pages
│   └── test/           # Configuration tests
├── netlify.toml        # Configuration Netlify
└── package.json
```

---

## Déploiement

Le site est déployé automatiquement sur **Netlify** à chaque push sur `main`.

### Configuration Netlify

1. Connecter le repository GitHub
2. Build command: `npm install && npm run build`
3. Publish directory: `dist`
4. Ajouter le domaine custom `isdataconsulting.com`

### CI/CD

Le workflow GitHub Actions (`.github/workflows/ci.yml`) exécute :
- Type checking
- Linting
- Tests
- Build

---

## Licence

[MIT](LICENSE)

---

© 2025 ISDATA Consulting
