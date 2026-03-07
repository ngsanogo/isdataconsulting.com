# Contribuer

## Workflow de branche

Ce projet suit un GitFlow simplifié :

| Branche       | Rôle                                             |
| ------------- | ------------------------------------------------ |
| `main`        | Production — déployé automatiquement sur Netlify |
| `feat/<nom>`  | Nouvelles fonctionnalités ou pages               |
| `fix/<nom>`   | Corrections de bugs visuels ou techniques        |
| `chore/<nom>` | Maintenance, CI, config                          |

### Cycle de contribution

```
1. Créer une branche depuis main
   git checkout -b feat/nouveau-service

2. Commiter avec un message clair
   git commit -m "feat: ajout section tarifs"

3. Pousser et ouvrir une Pull Request
   git push -u origin feat/nouveau-service

4. Merge dans main après review
```

## Conventions de commit

Format : `<type>: <description courte>`

| Type    | Usage                                  |
| ------- | -------------------------------------- |
| `feat`  | Nouvelle section, page, fonctionnalité |
| `fix`   | Correction (bug visuel, lien cassé)    |
| `style` | Changement CSS uniquement              |
| `chore` | CI, config, dépendances                |
| `docs`  | Documentation (README, CONTRIBUTING)   |

## Avant de soumettre

- [ ] Tester localement (ouvrir `site/index.html` dans un navigateur)
- [ ] Vérifier le responsive (mobile + desktop)
- [ ] Lancer `npx prettier --check site/` (ou laisser la CI vérifier)
- [ ] Aucun secret dans le code

## Pre-commit hooks

Si [pre-commit](https://pre-commit.com/) est installé :

```bash
pip install pre-commit
pre-commit install
```

Les hooks formatent automatiquement le code et vérifient l'absence de secrets.
