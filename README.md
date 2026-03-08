[![Netlify Status](https://api.netlify.com/api/v1/badges/e63dfdb1-22e1-4af4-be2b-129b954c872d/deploy-status)](https://app.netlify.com/projects/isdataconsulting/deploys)

# ISData Consulting

> Zéro framework, zéro build, zéro dépendance.

**Production** : [isdataconsulting.com](https://isdataconsulting.com)

---

## Architecture

```
site/                          ← Publié tel quel par Netlify
├── index.html                 Page unique (HTML5 sémantique, Open Graph, JSON-LD)
├── styles.css                 Design system dark-first (CSS variables, responsive)
├── script.js                  Navigation mobile + scroll reveal (IntersectionObserver)
├── robots.txt                 Directives crawlers
├── sitemap.xml                Sitemap Google
└── assets/                    Images (portrait)
.github/workflows/ci.yml       CI — format, HTML, liens, Lighthouse
.devcontainer/                  Dev Container (VS Code / Codespaces)
Dockerfile                      Multi-stage : dev-runtime, devcontainer, prod
docker-compose.yml              Services : format, lint, serve, prod
Makefile                        Raccourcis locaux (format, check, serve…)
netlify.toml                    Headers sécurité, publish dir
```

Pas de transpilation, pas de bundler. Le dossier `site/` **est** le livrable.

`site/` est la **seule source de vérité** pour la production.

## Développement local

```bash
git clone https://github.com/ngsanogo/isdataconsulting.com
cd isdataconsulting.com
```

**Option 1** — Ouvrir directement `site/index.html` dans un navigateur.

**Option 2** — Serveur local :

```bash
cd site && python3 -m http.server 8000
# ou
npx serve site
```

**Option 3** — Dev Container (VS Code / GitHub Codespaces) :

Le fichier `.devcontainer/devcontainer.json` configure un environnement Alpine prêt à l'emploi.

## Commandes de maintenance

```bash
make format           # Formater le code
make check            # Format + validation HTML + liens
make check-lighthouse # Budget Lighthouse local
make audit            # Check complet (inclut Lighthouse)
make serve            # Servir le site en local sur :3000
```

## Déploiement

Netlify déploie automatiquement le contenu de `site/` à chaque push sur `main`.

```bash
git add . && git commit -m "feat: update hero section" && git push
# → En ligne en ~1 minute
```

## Stack

| Composant   | Choix                                                        |
| ----------- | ------------------------------------------------------------ |
| HTML        | HTML5 sémantique + JSON-LD                                   |
| CSS         | CSS3 natif, variables CSS, responsive                        |
| JS          | Vanilla (IntersectionObserver, scroll)                       |
| Fonts       | Instrument Serif · DM Mono · Geist                           |
| Hébergement | Netlify (CDN, headers sécu, HTTPS)                           |
| CI          | GitHub Actions (Prettier, html-validate, lychee, Lighthouse) |

## Qualité continue (CI)

La CI GitHub exécute automatiquement :

- Vérification du formatage (`Prettier`)
- Validation HTML (`html-validate`)
- Vérification des liens (`lychee`)
- Budget Lighthouse (Performance, SEO, Accessibilité, Core Web Vitals)

## Contribuer

Voir [CONTRIBUTING.md](CONTRIBUTING.md) pour le workflow de branche et les conventions.

## Sécurité

Ce repository ne doit contenir **aucun secret** (clé API, token, mot de passe).
Les headers de sécurité (CSP, X-Frame-Options, etc.) sont configurés dans `netlify.toml`.

Pour signaler un problème de sécurité : ngsanogo@proton.me

## Licence

Propriétaire — Tous droits réservés. Voir [LICENSE](LICENSE).
