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
make help    # Show all available commands
```

If you do not use Make:

```bash
npm ci
npm run check
npm run dev
```

## Quality & Security Gates

```bash
npm run test:secrets  # Detect committed secrets patterns
npm run test:deps     # Fail on actionable outdated deps or vulnerabilities
npm run check         # Full project gate (security + quality + build)
```

## License

Proprietary software.
All rights reserved by ISData Consulting.
