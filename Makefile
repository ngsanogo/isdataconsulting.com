.PHONY: format check check-format check-html check-links check-lighthouse serve audit \
	docker-build-dev docker-build-prod docker-up docker-up-prod docker-down docker-ps docker-logs \
	docker-tools-format docker-tools-lint docker-ci docker-ci-lighthouse docker-rebuild

DOCKER_COMPOSE ?= docker compose
LYCHEE_IMAGE ?= lycheeverse/lychee:latest

format:
	@if command -v npx >/dev/null 2>&1; then \
		npx --yes prettier@4.0.0-alpha.8 --write "site/**/*.{html,css,js}" "*.{json,md,yml,yaml}"; \
	else \
		$(DOCKER_COMPOSE) --profile tools run --rm format; \
	fi

check: check-format check-html check-links

check-format:
	@if command -v npx >/dev/null 2>&1; then \
		npx --yes prettier@4.0.0-alpha.8 --check "site/**/*.{html,css,js}" "*.{json,md,yml,yaml}"; \
	else \
		$(DOCKER_COMPOSE) --profile tools run --rm lint; \
	fi

check-html:
	@if command -v npx >/dev/null 2>&1; then \
		npx --yes html-validate "site/**/*.html"; \
	else \
		$(DOCKER_COMPOSE) --profile tools run --rm --entrypoint sh lint -lc 'npx --yes html-validate "site/**/*.html"'; \
	fi

check-links:
	@if command -v npx >/dev/null 2>&1; then \
		npx --yes lychee --exclude-mail --accept 200,429,999 "README.md" "site/**/*.html"; \
	else \
		docker run --rm -v "$(PWD):/work" -w /work $(LYCHEE_IMAGE) --accept '200,429,999' README.md 'site/**/*.html'; \
	fi

check-lighthouse:
	@if command -v npx >/dev/null 2>&1; then \
		npx --yes serve site -l 4173 >/tmp/isdata-serve.log 2>&1 & \
		SERVER_PID=$$!; \
		sleep 2; \
		npx --yes @lhci/cli autorun --config=.lighthouserc.json; \
		STATUS=$$?; \
		kill $$SERVER_PID >/dev/null 2>&1 || true; \
		exit $$STATUS; \
	else \
		$(MAKE) docker-ci-lighthouse; \
	fi

serve:
	@if command -v npx >/dev/null 2>&1; then \
		npx --yes serve site -l 3000; \
	else \
		$(DOCKER_COMPOSE) up -d serve; \
		echo "serve started in Docker on http://localhost:3000"; \
	fi

audit: check check-lighthouse

docker-build-dev:
	$(DOCKER_COMPOSE) build serve

docker-build-prod:
	$(DOCKER_COMPOSE) --profile prod build prod

docker-up:
	$(DOCKER_COMPOSE) up -d serve

docker-up-prod:
	$(DOCKER_COMPOSE) --profile prod up -d prod

docker-down:
	$(DOCKER_COMPOSE) --profile tools --profile prod down --remove-orphans

docker-ps:
	$(DOCKER_COMPOSE) ps

docker-logs:
	$(DOCKER_COMPOSE) logs -f --tail=100 serve prod

docker-tools-format:
	$(DOCKER_COMPOSE) --profile tools run --rm format

docker-tools-lint:
	$(DOCKER_COMPOSE) --profile tools run --rm lint

docker-ci:
	$(DOCKER_COMPOSE) up -d serve
	$(DOCKER_COMPOSE) --profile tools run --rm lint
	$(DOCKER_COMPOSE) --profile tools run --rm --entrypoint sh lint -lc 'npx --yes html-validate "site/**/*.html"'
	docker run --rm -v "$(PWD):/work" -w /work $(LYCHEE_IMAGE) --accept '200,429,999' README.md 'site/**/*.html'
	$(MAKE) docker-ci-lighthouse

docker-ci-lighthouse:
	docker run --rm --network isdataconsulting-network -v "$(PWD):/workspace" -w /workspace node:22-alpine sh -lc 'apk add --no-cache chromium nss freetype harfbuzz ttf-freefont >/dev/null && CHROME_PATH=$$(command -v chromium-browser || command -v chromium) npx --yes @lhci/cli@0.14.x autorun --config=.lighthouserc.json --collect.url=http://isdataconsulting-serve:3000/ --collect.settings.chromeFlags="--no-sandbox --disable-dev-shm-usage"'

docker-rebuild:
	$(DOCKER_COMPOSE) --profile tools --profile prod down --remove-orphans
	$(DOCKER_COMPOSE) up -d --build serve
