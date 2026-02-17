.PHONY: help dev stop clean install test test-watch test-coverage lint lint-fix type-check build shell prod setup-hooks pre-commit npm

help: ## Show available commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'

dev: ## Start development server
	docker compose up dev

stop: ## Stop all containers
	docker compose down

clean: ## Remove containers, volumes and images
	docker compose down -v
	docker system prune -f

install: ## Rebuild Docker images
	docker compose build --no-cache dev

test: ## Run tests
	docker compose run --rm test

test-watch: ## Run tests in watch mode
	docker compose run --rm test npm run test

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
