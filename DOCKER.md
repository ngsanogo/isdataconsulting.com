# Docker Development Guide

This project is configured for containerized development. All operations run in Docker containers, eliminating the need for local Node.js installation.

## Prerequisites

- Docker Desktop (macOS/Windows) or Docker Engine with Docker Compose (Linux)

## Initial Setup

```bash
# Configure git hooks
bash scripts/setup-git-hooks.sh

# Start development
make dev
```

Access the application at http://localhost:5173

## Commands

### Development

```bash
make dev              # Start development server with hot-reload
make stop             # Stop all containers
make shell            # Open interactive shell in container
```

### Testing

```bash
make test             # Run all tests
make test-watch       # Run tests in watch mode
make test-coverage    # Run tests with coverage report
```

### Code Quality

```bash
make lint             # Check code with ESLint
make lint-fix         # Lint and auto-fix issues
make type-check       # Validate TypeScript types
```

### Build

```bash
make build            # Build production bundle
make prod             # Start production server (nginx on port 8080)
```

### Maintenance

```bash
make clean            # Remove containers, volumes and images
make install          # Rebuild Docker images from scratch
make help             # List all available commands
```

### Package Management

```bash
# Install dependency
make npm CMD="install package-name"

# Install dev dependency
make npm CMD="install -D package-name"

# Uninstall dependency
make npm CMD="uninstall package-name"

# After installing dependencies, rebuild images
make install
```

## Git Hooks

Git hooks execute automatically in Docker containers:

### Pre-commit Hook
Runs before each commit:
- ESLint with auto-fix
- TypeScript type checking
- Tests with coverage

### Pre-push Hook
Runs before each push:
- Production build validation

### Setup

```bash
bash scripts/setup-git-hooks.sh
# or
make setup-hooks
```

### Bypass Hooks

```bash
git commit --no-verify -m "message"
git push --no-verify
```

## Docker Architecture

### Dockerfile

Multi-stage build with optimized layers:
- **deps**: Base image with npm dependencies
- **dev**: Development environment
- **test**: Testing environment
- **lint**: Linting environment
- **builder**: Production build
- **prod**: Production nginx server

### Services

Docker Compose defines the following services:

| Service | Purpose | Profile |
|---------|---------|---------|
| dev | Development server | default |
| test | Run tests | tools |
| test-coverage | Tests with coverage | tools |
| lint | Code linting | tools |
| lint-fix | Lint with auto-fix | tools |
| type-check | TypeScript validation | tools |
| build | Production build | tools |
| shell | Interactive shell | tools |
| prod | Production server | production |

### Volumes

A named volume `node_modules` persists dependencies across container restarts, improving performance and avoiding host-container conflicts.

## Workflows

### Daily Development

```bash
# Start development
make dev

# In another terminal, run tests
make test

# Make code changes (hot-reload active)

# Commit (hooks run automatically)
git commit -m "feat: new feature"

# Push (build tested automatically)
git push
```

### Adding Dependencies

```bash
# Install package
make npm CMD="install react-query"

# Rebuild images
make install

# Restart development
make dev
```

### Debugging

```bash
# Open shell in container
make shell

# Inside container, run commands
npm run test -- --verbose
ls -la
cat package.json

# Exit shell
exit
```

### Testing Production Build

```bash
# Build application
make build

# Start production server
make prod

# Access http://localhost:8080

# Stop server
make stop
```

## Troubleshooting

### Tests Failing

```bash
# Verbose test output
docker compose run --rm test npm run test -- --verbose

# Run specific test file
docker compose run --rm test npm run test -- src/path/to/test.tsx
```

### Dependency Issues

```bash
# Clean and rebuild
make clean
make install
make dev
```

### Performance Issues

```bash
# Check Docker resource usage
docker stats

# Clean unused Docker resources
docker system prune -a
```

## CI/CD Integration

This Docker configuration integrates with all CI/CD platforms:

```yaml
# Example GitHub Actions workflow
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: docker compose run --rm test-coverage
```

## Benefits

- **Consistent Environment**: Development, CI/CD, and production use identical containers
- **No Local Dependencies**: Only Docker required on developer machines
- **Fast Onboarding**: New developers operational in minutes
- **Isolation**: No version conflicts or system pollution
- **Reproducibility**: Deterministic builds across all environments

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Reference](https://docs.docker.com/compose/)
- Project README.md for quick reference
