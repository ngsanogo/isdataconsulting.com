.PHONY: help dev launch doctor deps-refresh stop clean reset install test test-watch test-coverage lint lint-fix type-check build shell prod gate setup-hooks pre-commit npm

help: ## Show available commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'

dev: ## Start development server
	docker compose up dev

launch: ## Launch local test server at http://localhost:5173 (with rebuild)
	docker compose up --build dev

doctor: ## Audit container environment (PATH, required binaries, writable volumes)
	docker compose run --rm shell sh -lc "bash .devcontainer/doctor.sh"

deps-refresh: ## Reinstall dependencies deterministically (npm ci)
	docker compose run --rm shell sh -lc "npm ci"

stop: ## Stop all containers
	docker compose down

clean: ## Remove containers, volumes and images
	docker compose down -v
	docker system prune -f

reset: ## Total project reset: stop, purge project volumes/images, rebuild dev image
	docker compose down --volumes --remove-orphans --rmi local
	docker compose build --no-cache dev

install: ## Rebuild Docker images
	docker compose build --no-cache dev

test: ## Run tests
	docker compose run --rm test

test-watch: ## Run tests in watch mode
	docker compose run --rm test npm run test:watch

test-coverage: ## Run tests with coverage
	docker compose run --rm test-coverage

lint: ## Lint code
	docker compose run --rm lint

lint-fix: ## Lint and auto-fix code
	docker compose run --rm lint-fix

type-check: ## Type check TypeScript
	docker compose run --rm type-check

build: ## Build production bundle
	docker compose run --rm build

shell: ## Open interactive shell
	docker compose run --rm shell

prod: ## Start production server
	docker compose --profile production up prod

gate: ## Run full pre-production gate in Docker (quality + prod smoke test)
	docker compose --profile tools run --rm shell sh -lc "npm ci && npm run check && npm run test:coverage"
	@set -e; \
	trap 'docker compose --profile production down -v --remove-orphans' EXIT; \
	docker compose --profile production up -d --build prod; \
	docker compose --profile tools run --rm shell sh -lc "node scripts/prod-smoke.mjs http://prod:8080"

pre-commit: ## Run pre-commit checks
	@$(MAKE) lint-fix
	@$(MAKE) type-check
	@$(MAKE) test-coverage

setup-hooks: ## Configure git hooks
	@mkdir -p .git/hooks
	@cp .githooks/pre-commit .git/hooks/pre-commit
	@cp .githooks/pre-push .git/hooks/pre-push
	@chmod +x .git/hooks/pre-commit
	@chmod +x .git/hooks/pre-push
	@echo "Git hooks configured successfully"

npm: ## Execute npm command (usage: make npm CMD="install package-name")
	docker compose run --rm shell npm $(CMD)
