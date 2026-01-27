# ISDATA Consulting

Site vitrine B2B pour ISDATA Consulting - Ingénierie de Données & Business Intelligence.

## Stack

- **React 18** + **TypeScript** — Typage strict
- **Vite** — Build ultra-rapide
- **Tailwind CSS** — Design system utilitaire
- **GitHub Pages** — Hébergement statique

## Développement

```bash
bun install        # Installation
bun run dev        # Serveur local (localhost:5173)
bun run build      # Build production
bun run preview    # Aperçu du build
bun run test       # Tests
bun run lint       # Linting
bun run type-check # Vérification TypeScript
```

## Structure

```
src/
├── components/    # Composants React
├── config/        # Configuration site
├── pages/         # Pages
└── test/          # Configuration tests

public/            # Assets statiques
.github/workflows/ # CI/CD GitHub Actions
```

## Déploiement

Le déploiement sur GitHub Pages est automatique via GitHub Actions sur push vers `main`.

**Configuration requise :**
1. Settings → Pages → Source: GitHub Actions
2. Ajouter le domaine custom `isdataconsulting.com`

## Performance

Objectif Lighthouse : **100** sur tous les critères.

## Licence

[MIT](LICENSE)
