# ISData Consulting

Site for isdataconsulting.com.

## Requirements

- Docker

## Setup

```bash
cp .env.example .env
```

## Development (Docker)

```bash
docker compose up --build
```

## Quality (Docker)

```bash
docker compose run --rm app npm run lint
docker compose run --rm app npm run type-check
docker compose run --rm app npm run test
docker compose run --rm app npm run test:coverage
```

## Build (Docker)

```bash
docker compose run --rm app npm run build
docker compose run --rm app npm run preview -- --host 0.0.0.0
```

## Pre-commit (venv)

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install pre-commit
pre-commit install
pre-commit run --all-files
```

## Deployment

Netlify builds with `npm run build` and publishes `dist/`.

## License

Proprietary (All rights reserved).