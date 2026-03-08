## Type

- [ ] `feat` — Nouvelle section ou fonctionnalité
- [ ] `fix` — Correction de bug
- [ ] `style` — Changement CSS uniquement
- [ ] `chore` — CI, config, documentation

## Description

Décrivez les changements introduits et pourquoi.

## Validation

- [ ] Testé localement (`site/index.html` dans le navigateur)
- [ ] Pas de lien cassé
- [ ] Responsive mobile + desktop
- [ ] HTML valide (`make check-html`)
- [ ] `prettier --check` passe (ou CI verte)
- [ ] Lighthouse conforme (Perf > 95, SEO > 95, Accessibilité > 92)
- [ ] Aucun secret commité (clé API, token, mot de passe)

## Impact

- [ ] Pas de régression SEO (title, description, canonical, JSON-LD)
- [ ] `robots.txt` et `sitemap.xml` vérifiés si URLs modifiées
