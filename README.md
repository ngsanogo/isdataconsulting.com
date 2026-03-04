# ISData Consulting Website

Official repository for the ISData Consulting website.

Live website: https://isdataconsulting.com

## Vision

This project provides a production-grade, fast, and secure web presence for ISData Consulting.

Engineering goals:
- Docker-first reproducibility
- Strict quality gates (lint, types, tests, build)
- Dependency and security hygiene by default
- Minimal, maintainable repository structure

## Architecture

Application layers:
- UI: React 19 + TypeScript
- Build/runtime: Vite 7
- Styling: Tailwind CSS 4
- Routing: React Router 7
- Quality: ESLint, OXLint, Vitest

Repository layout (minimal):
- src: application source code
- src/test: test suite
- public: static assets
- scripts: automation and quality/security scripts
- .github/workflows: CI pipelines

## Quick Setup (Docker)

Recommended commands:

```bash
make dev     # Start development server
make test    # Run tests
make lint    # Run lint checks
make build   # Build production artifacts
make gate    # Full pre-production gate (quality + security + prod smoke)
make help    # Show all available commands
```

If you do not use Make (still Docker-only):

```bash
docker compose up dev
docker compose run --rm lint
docker compose run --rm test
docker compose run --rm build
```

## Quality & Security Gates

```bash
make gate             # Canonical full gate executed in containers
```

## License

Proprietary software.
All rights reserved by ISData Consulting.
