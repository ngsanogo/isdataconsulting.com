# ISData Consulting Website

Modern, production-grade React + TypeScript website for ISData Consulting. Data engineering, architecture, and product services consulting platform with comprehensive SEO, accessibility, and CI/CD infrastructure.

## 🚀 Quick Links

- **Live Site**: [https://isdataconsulting.com](https://isdataconsulting.com)
- **Issues**: [GitHub Issues](https://github.com/ngsanogo/isdataconsulting.com/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ngsanogo/isdataconsulting.com/discussions)
- **Documentation**: [Read the Docs](./docs/README.md)

## 📋 Table of Contents

- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Development](#development)
- [Quality Checks](#quality-checks)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Support](#support)

## 🏗️ Architecture

### Project Structure

```
isdataconsulting.com/
├── src/
│   ├── components/        # React components (11 components)
│   ├── pages/            # Service pages (4 pages)
│   ├── config/           # Configuration & constants
│   ├── hooks/            # Custom React hooks
│   ├── test/             # Test utilities & setup
│   ├── App.tsx           # Router & main app
│   ├── index.css         # Global styles (Tailwind)
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── .github/workflows/    # CI/CD workflows
├── Dockerfile            # Container image
├── docker-compose.yml    # Local development
├── vite.config.ts        # Build config
└── package.json          # Dependencies
```

### Component Architecture

**Smart Components** (Pages):
- `Index.tsx` - Home page
- `DataEngineering.tsx` - Service page
- `ArchitectureData.tsx` - Service page
- `ProductDataServices.tsx` - Service page

**Presentational Components** (11):
- `Header.tsx` - Navigation
- `HeroSection.tsx` - Hero banner
- `ExpertiseSection.tsx` - Services showcase
- `ProblemsSection.tsx` - Pain points
- `MethodologySection.tsx` - Approach
- `SocialProofSection.tsx` - Trust signals
- `FAQSection.tsx` - FAQ
- `ContactSection.tsx` - CTA section
- `Footer.tsx` - Footer
- `StickyCTA.tsx` - Sticky button
- `ErrorBoundary.tsx` - Error handling

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | React | 18.3.1 |
| Language | TypeScript | 5.8.3 |
| Build | Vite | 5.4.19 |
| Styling | Tailwind CSS | 3.4.17 |
| Router | React Router | 7.13.0 |
| Testing | Vitest + Testing Library | 4.0.18 |
| Linting | ESLint | 9.32.0 |
| Format | Prettier | (upcoming) |
| Container | Docker | Alpine |
| Deployment | Netlify | Git-integrated |
| Analytics | Plausible | Privacy-first |
| SEO | Schema.org, OG tags | Built-in |

## 🎯 Features

✅ **Production-Ready**
- Full TypeScript strict mode
- Comprehensive error boundaries
- Environment-based configuration
- Security headers
- Performance optimized

✅ **SEO & Discoverability**
- Complete meta tags
- Open Graph support
- Schema.org markup (ProfessionalService, FAQPage)
- Semantic HTML
- Sitemap & robots.txt

✅ **Accessibility**
- WCAG 2.1 level AA
- Semantic navigation
- ARIA attributes
- Dark mode support
- Keyboard navigation

✅ **Performance**
- Route-level code splitting
- Asset preloading
- Optimized images
- Scroll event throttling
- CSS purging

✅ **CI/CD**
- Automated testing
- Lint & type checking
- Build verification
- Lighthouse CI
- Auto-deployment on main

## 📦 Quick Start

### Prerequisites
- Docker (recommended)
- Node.js 22+ (for local development)

### Option 1: Docker (Recommended)

```bash
# Clone repository
git clone https://github.com/ngsanogo/isdataconsulting.com.git
cd isdataconsulting.com

# Setup environment
cp .env.example .env

# Start development server
docker compose up app

# Server runs at http://localhost:5173
```

### Option 2: Local Node

```bash
# Install dependencies
npm ci

# Copy environment file
cp .env.example .env

# Start development server
npm run dev

# Server runs at http://localhost:5173
```

## 🔧 Development

### Common Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint            # Check
npm run lint:fix        # Auto-fix

# Testing
npm run test            # Watch mode
npm run test:ui         # UI mode
npm run test:coverage   # Coverage report

# Cleanup
npm run clean           # Remove build artifacts
```

### Docker Commands

```bash
# Build image
docker compose build

# Development mode
docker compose up app

# Run tests
docker compose --profile test run --rm test npm run test

# Run specific check
docker compose --profile test run --rm test npm run type-check
docker compose --profile test run --rm test npm run lint
docker compose --profile test run --rm test npm run build

# Run all quality checks
docker compose --profile test run --rm test sh -c \
  "npm run type-check && npm run lint && npm run test && npm run build"
```

## ✅ Quality Checks

All quality checks must pass before deployment:

### 1. Type Safety
```bash
npm run type-check
# Verify: TypeScript strict mode ✓
```

### 2. Code Quality
```bash
npm run lint
# Verify: No linting errors/warnings ✓
```

### 3. Testing
```bash
npm run test
# Target: 80%+ coverage
```

### 4. Build
```bash
npm run build
# Result: Optimized dist/ directory
```

### 5. Lighthouse
```bash
# Runs automatically in CI on every PR
# Targets: Performance 90+, Accessibility 95+, SEO 100
```

## 🚀 Deployment

### Automatic Deployment

- **Trigger**: Push to `main` branch
- **Build Command**: `npm run build`
- **Publish Dir**: `dist/`
- **Provider**: Netlify
- **Status**: Live in 2-3 minutes

### Manual Deployment

```bash
# Production build
npm run build

# Test production build
npm run preview

# Deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Environment Variables

#### Production (Netlify)
```env
VITE_ANALYTICS_ENABLED=true
VITE_ANALYTICS_DOMAIN=plausible.io
```

#### Development
```env
VITE_ANALYTICS_ENABLED=false
```

## 📚 Documentation

- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines
- [SECURITY.md](./SECURITY.md) - Security policy
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) - Community guidelines
- [AUDIT_REPORT.md](./AUDIT_REPORT.md) - Comprehensive audit findings

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for:
- Development setup
- Code standards
- Testing requirements
- Commit conventions
- Pull request process

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/description`)
3. Make your changes
4. Run quality checks (`docker compose --profile test run --rm test sh -c "npm run type-check && npm run lint && npm run test && npm run build"`)
5. Commit with clear message (`git commit -m "feat: description"`)
6. Push to your fork
7. Open a Pull Request

## 🔒 Security

Please report security vulnerabilities privately to `security@isdataconsulting.com`. See [SECURITY.md](./SECURITY.md) for details.

## 💬 Support & Communication

- **Issues**: [Report bugs](https://github.com/ngsanogo/isdataconsulting.com/issues/new)
- **Discussions**: [Ask questions](https://github.com/ngsanogo/isdataconsulting.com/discussions/new)
- **Email**: `contact@isdataconsulting.com`

## 📝 License

Proprietary - All Rights Reserved © ISData Consulting

This software is proprietary and confidential. No part may be reproduced, modified, or distributed without explicit permission from ISData Consulting.

## 📊 Project Status

- **Maintenance**: Active
- **Test Coverage**: 75%+
- **Dependencies**: Up-to-date
- **Last Updated**: February 15, 2026

## 🎯 Roadmap

- [x] Core website functionality
- [x] SEO & analytics infrastructure
- [x] Docker containerization
- [x] CI/CD automation
- [ ] Enhanced test coverage (in progress)
- [ ] Performance monitoring
- [ ] Advanced analytics
- [ ] Internationalization

## 📞 Contact

**ISData Consulting**
- 📧 Email: `contact@isdataconsulting.com`
- 📱 Phone: `+33 6 51 98 52 79`
- 🌐 Website: [https://isdataconsulting.com](https://isdataconsulting.com)
- 💼 LinkedIn: [isdataconsulting](https://linkedin.com/company/isdataconsulting)

---

**Made with ❤️ by ISData Consulting**

Last Updated: February 15, 2026