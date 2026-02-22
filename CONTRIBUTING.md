# Contributing

This repository follows a simplified GitFlow.

## Branching

- main: production-ready code only
- feature/<short-topic>: new feature or enhancement
- hotfix/<short-topic>: urgent production fix

## Workflow

1. Create a branch from main.
2. Keep commits focused and atomic.
3. Run quality gates before opening a PR:
   - npm run check
4. Open a Pull Request to main using the repository template.
5. Require review before merge.
6. Use squash merge to keep history clean.

## Pull Request Rules

- Clearly describe scope and risk.
- Document test evidence.
- Highlight security or dependency impacts.
- Keep changes minimal and purposeful.
