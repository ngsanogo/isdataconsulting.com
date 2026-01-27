# Documentation Index

Quick navigation to all documentation files.

## 🚀 Getting Started

**Start here if you're new to the project:**

1. **[GETTING_STARTED_PRODUCTION.md](GETTING_STARTED_PRODUCTION.md)** - Production deployment guide
   - Quick deployment steps
   - Platform comparisons
   - Post-deployment tasks

2. **[QUICKSTART.md](QUICKSTART.md)** - Developer quick start
   - Installation instructions
   - Running the development server
   - Project structure
   - Common tasks

3. **[README.md](README.md)** - Project overview
   - Tech stack
   - Available scripts
   - Project structure

## 📦 Deployment & DevOps

**Guides for deploying your application:**

1. **[DEPLOYMENT.md](DEPLOYMENT.md)** - Comprehensive deployment guide
   - Pre-deployment checklist
   - Building for production
   - Multiple deployment options
   - Environment variables
   - Security checklist
   - Performance optimization

2. **[PRODUCTION_MIGRATION.md](PRODUCTION_MIGRATION.md)** - Migration summary
   - Changes made for production
   - Files modified
   - Production-ready features
   - Next steps

3. **[PRODUCTION_CHECKLIST.md](PRODUCTION_CHECKLIST.md)** - Pre-launch checklist
   - Code quality checks
   - Build & performance
   - Security verification
   - Functionality testing
   - SEO & metadata
   - Deployment verification
   - Post-launch tasks

## 🏗️ Architecture & Design

**Technical documentation:**

1. **[ARCHITECTURE.md](ARCHITECTURE.md)** - Technical architecture
   - System overview
   - Component hierarchy
   - Data flow
   - Build process
   - Performance optimizations
   - Security architecture
   - Design patterns

2. **[Configuration Files Guide](#configuration-files)** (below)

## 🔐 Security & Compliance

**Security and compliance documentation:**

1. **[SECURITY.md](SECURITY.md)** - Security policy
   - Vulnerability reporting
   - Security practices
   - Dependency management
   - Security headers
   - Version support
   - Compliance information

## 👨‍💻 Development

**For developers contributing to the project:**

1. **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contributing guidelines
   - Getting started
   - Development workflow
   - Code standards
   - Component structure
   - Commit messages
   - Pull request process
   - Testing guidelines

2. **[RELEASE.md](RELEASE.md)** - Release procedures
   - Version numbering
   - Release steps
   - Release schedule
   - Hotfix process
   - Support timeline

3. **[CHANGELOG.md](CHANGELOG.md)** - Version history
   - Release notes
   - Changes by version
   - Breaking changes

## 📋 Files & Configuration

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Project metadata & dependencies |
| `tsconfig.json` | TypeScript compiler options |
| `vite.config.ts` | Vite build configuration |
| `tailwind.config.ts` | Tailwind CSS theme |
| `postcss.config.js` | PostCSS processing |
| `eslint.config.js` | Code linting rules |
| `vitest.config.ts` | Test framework config |
| `components.json` | shadcn/ui config |

### Environment & Deployment

| File | Purpose |
|------|---------|
| `.env.example` | Environment variables template |
| `.env.production` | Production environment variables |
| `.npmrc` | npm configuration |
| `vercel.json` | Vercel deployment config |
| `netlify.toml` | Netlify deployment config |
| `.gitignore` | Git ignore patterns |

### GitHub & CI/CD

| File | Purpose |
|------|---------|
| `.github/workflows/deploy.yml` | Automated deployment workflow |
| `.github/workflows/quality.yml` | Code quality checks workflow |

### Scripts

| File | Purpose |
|------|---------|
| `scripts/pre-deploy.sh` | Pre-deployment validation |

## 🗂️ Project Structure

```
isdataconsulting.github.io/
├── .github/workflows/          # GitHub Actions workflows
├── .vscode/                    # VS Code settings
├── scripts/                    # Utility scripts
├── public/                     # Static assets
├── src/                        # Source code
│   ├── components/             # React components
│   ├── pages/                  # Page components
│   ├── hooks/                  # Custom hooks
│   ├── lib/                    # Utilities
│   ├── config/                 # Configuration
│   ├── test/                   # Tests
│   ├── App.tsx                 # Main component
│   └── main.tsx                # Entry point
├── dist/                       # Production build (generated)
├── node_modules/               # Dependencies (generated)
│
├── Configuration Files
├── Documentation Files
└── Build & Test Files
```

## 🔍 Quick Reference

### Scripts

```bash
bun run dev          # Development server
bun run build        # Production build
bun run preview      # Preview production build
bun run test         # Run tests
bun run lint         # Lint code
bun run type-check   # Type checking
bun run predeploy    # Full pre-deployment checks
```

### Important Directories

| Directory | Contains |
|-----------|----------|
| `src/` | All source code |
| `dist/` | Production build output |
| `public/` | Static files |
| `scripts/` | Utility scripts |
| `.github/` | GitHub Actions & configs |

### Key Files to Know

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main app component |
| `src/main.tsx` | Entry point |
| `src/config/site.ts` | Site configuration |
| `src/pages/Index.tsx` | Home page |
| `vite.config.ts` | Build configuration |
| `package.json` | Dependencies & scripts |

## 🎯 Common Tasks

### I want to...

- **Deploy the site** → [GETTING_STARTED_PRODUCTION.md](GETTING_STARTED_PRODUCTION.md)
- **Set up development** → [QUICKSTART.md](QUICKSTART.md)
- **Contribute code** → [CONTRIBUTING.md](CONTRIBUTING.md)
- **Release a new version** → [RELEASE.md](RELEASE.md)
- **Check security** → [SECURITY.md](SECURITY.md)
- **Understand the architecture** → [ARCHITECTURE.md](ARCHITECTURE.md)
- **Deploy manually** → [DEPLOYMENT.md](DEPLOYMENT.md)
- **Check for issues** → [PRODUCTION_CHECKLIST.md](PRODUCTION_CHECKLIST.md)

## 📞 Getting Help

1. **Check the relevant documentation** first
2. **Search existing documentation** for keywords
3. **Check QUICKSTART.md** for common issues
4. **Review SECURITY.md** for security questions
5. **Contact the team** if still stuck

## 📚 External Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

## 🔄 Maintenance

### Regular Tasks

- [ ] Update dependencies monthly
- [ ] Run security audit weekly
- [ ] Review logs regularly
- [ ] Update documentation as needed
- [ ] Monitor performance metrics

### Annual Tasks

- [ ] Major version updates
- [ ] Security review
- [ ] Architecture review
- [ ] Scalability assessment

---

**Last Updated:** January 27, 2026  
**Documentation Version:** 1.0  
**Project Status:** ✅ Production Ready
