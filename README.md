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
docker compose --profile dev up --build
```

## Quality (Docker)

```bash
docker compose --profile test run --rm test npm run lint
docker compose --profile test run --rm test npm run type-check
docker compose --profile test run --rm test npm run test
docker compose --profile test run --rm test npm run test:coverage
```

## Build (Docker)

```bash
docker compose --profile build run --rm build
docker compose --profile prod up -d
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