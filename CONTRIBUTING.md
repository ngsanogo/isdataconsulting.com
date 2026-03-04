# Contributing

This repository follows a simplified GitFlow.

## Branching

- main: production-ready code only
- feature/<short-topic>: new feature or enhancement
- hotfix/<short-topic>: urgent production fix
- release/<version>: optional stabilization branch before production release

## Workflow

1. Create a branch from main.
2. Keep commits focused and atomic.
3. Run quality gates in Docker before opening a PR:
   - make gate
4. Open a Pull Request to main using the repository template.
5. Require review before merge.
6. Use squash merge to keep history clean.

## Pull Request Rules

- Clearly describe scope and risk.
- Document test evidence.
- Highlight security or dependency impacts.
- Keep changes minimal and purposeful.

## Testing Policy (Strict)

- No change is accepted without tests.
- Every commit must pass repository checks in Docker.
- Canonical command: `make gate`.
- Git hooks enforce checks automatically on commit/push.

Exception policy (only when truly not testable):
- Explain explicitly why the change cannot be tested.
- Provide the nearest possible validation evidence (lint, type-check, build, smoke, manual verification steps).
- Add the rationale in the PR description under `Untestable surface`.
