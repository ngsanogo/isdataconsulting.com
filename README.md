# isdataconsulting.com

Personal consulting website for Issa Sanogo. Built with React, TypeScript, and Vite. All development runs in Docker containers.

**Live**: [isdataconsulting.com](https://isdataconsulting.com)

## Quick Start

### Stateless Dev Container (Recommended)

1. Open the repository in VS Code/Cursor.
2. Run **Dev Containers: Reopen in Container**.
3. Wait for `postCreateCommand` to finish (`npm ci` + extensions).
4. Run `npm run dev` (or `make dev`) inside the container terminal.

The host macOS is used only as UI: dependencies/build artifacts are isolated to Docker volumes (`node_modules`, `.venv`, `.uv`, `target`, `__pycache__`, caches).

Environment guarantees:

- Toolchain is container-only and reproducible (Node 22, `git`, `python3`, `make`).
- On **every container start**, bootstrap audit is re-executed (`postStartCommand`): PATH validation + required binaries + writable volumes.
- Dependency installation is deterministic on container creation (`postCreateCommand`: `npm ci`) and on explicit reset (`make reset`).
- No dependency/build artifacts are written to macOS; only source code is bind-mounted.
- Setup matches CI/Netlify flow (`npm ci`, `npm run build`) to reduce drift.

### Docker (Recommended)

```bash
make dev              # Start dev server at http://localhost:5173
make launch           # Rebuild + start dev server at http://localhost:5173
make reset            # Full project reset (purge + rebuild)
make test             # Run tests
make lint             # Lint code
make build            # Production build
make help             # List all commands
```

### Local Setup

```bash
Node.js 22+ required.
npm ci
npm run dev
```

## Tech Stack

React 18 · TypeScript 5.9 · Vite 7.3 · Tailwind CSS 3.4 · React Router 7 · Vitest 4 · ESLint 10 · OXLint

## License

© 2026 ISData Consulting. All rights reserved.
