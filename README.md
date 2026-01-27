# IS Data Consulting

[![Netlify Status](https://api.netlify.com/api/v1/badges/e63dfdb1-22e1-4af4-be2b-129b954c872d/deploy-status)](https://app.netlify.com/projects/isdataconsulting/deploys)

Modern website built with React 18, TypeScript, Vite, and Tailwind CSS. Deployed on Netlify.

## Quick Start

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

```bash
git clone https://github.com/ngsanogo/isdataconsulting.com.git
cd isdataconsulting.com
bun install
```

### Development

```bash
bun run dev        # Start dev server (localhost:8080)
bun run build      # Production build
bun run preview    # Preview build locally
bun run test       # Run tests
bun run lint       # Check code quality
bun run type-check # TypeScript check
```

## Project Structure

```
src/
├── components/     # React components
├── pages/          # Page components
├── hooks/          # Custom hooks
├── lib/            # Utilities
├── config/         # Configuration
└── test/           # Tests

public/            # Static assets
```

## Tech Stack

- React 18, TypeScript, Vite
- Tailwind CSS, shadcn/ui
- Vitest, Testing Library
- GitHub Actions → Netlify

## Deployment

Push to `main` branch. GitHub Actions automatically deploys to Netlify.

**Requirements:** Set `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` secrets in GitHub.
#    - Node version: 18

# 4. Deploy (automatic on main branch)
```

**Why Netlify?**
- ✅ Zero-config for Vite
- ✅ Automatic deployments on push
- ✅ Fast CDN globally
- ✅ Free tier with custom domain support
- ✅ See [netlify.toml](netlify.toml) for configuration

### Other Hosting Options

- **Vercel**: `vercel deploy` (auto-detects Vite)
- **GitHub Pages**: `bun run build && gh-pages -d dist`
- **Traditional Server**: Upload `dist/` folder via FTP

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

---

## 📋 Design Philosophy

Our approach is inspired by **The Zen of Python**:

- **Simple is better than complex** → Clean code, minimal abstractions
- **Explicit is better than implicit** → Clear naming, documented decisions
- **Readability counts** → Code for humans first, machines second
- **Now is better than never** → Iterative delivery, quick feedback loops

---

## ✅ Development Guidelines

### Code Quality

```bash
bun run lint       # ESLint (required before commit)
bun run test       # Unit tests
bun run type-check # TypeScript strict mode
```

### Component Standards

## License

MIT © 2025 IS Data Consulting
