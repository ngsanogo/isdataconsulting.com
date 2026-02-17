# ISData Consulting

Modern React + TypeScript website for ISData Consulting. Data engineering, architecture, and product services consulting platform with comprehensive SEO and CI/CD infrastructure.

**Live**: [isdataconsulting.com](https://isdataconsulting.com)

## Development

### Docker (Recommended)

**Requirements**: Docker Desktop or Docker Engine with Docker Compose

All development tools run in containers - no local Node.js installation required.

```bash
# Initial setup
bash scripts/setup-git-hooks.sh

# Start development server
make dev
```

See [DOCKER.md](DOCKER.md) for complete Docker workflow documentation.

#### Docker Commands

```bash
make dev              # Development server
make test             # Run tests
make test-coverage    # Tests with coverage
make lint             # Lint code
make lint-fix         # Lint and auto-fix
make type-check       # TypeScript validation
make build            # Production build
make help             # List all commands
```

### Local Installation

**Requirements**: Node.js 22+

```bash
npm install
npm run dev
```

#### Available Scripts

```bash
npm run dev              # Development server
npm run build            # Production build
npm run type-check       # TypeScript validation
npm run lint             # Lint code
npm run lint:fix         # Lint and auto-fix
npm run test             # Run tests
npm run test:coverage    # Tests with coverage
```

## Architecture

- **Pages**: 4 service pages (Data Engineering, Architecture, Product Data)
- **Components**: 11 reusable React components
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **Testing**: Vitest + React Testing Library

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | React | 18.3.1 |
| Language | TypeScript | 5.8.3 |
| Bundler | Vite | 5.4.19 |
| Styling | Tailwind CSS | 3.4.17 |
| Routing | React Router | 7.13.0 |
| Testing | Vitest | 4.0.18 |
| Linting | ESLint | 9.32.0 |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines, code standards, and testing requirements.

## Security

See [SECURITY.md](SECURITY.md) for vulnerability reporting and security policies.

## Community

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community standards.

See [CHANGELOG.md](CHANGELOG.md) for version history.

## License

© 2024 ISData Consulting. All rights reserved.
