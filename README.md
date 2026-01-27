# IS Data Consulting

🚀 **Modern, minimal, and maintainable website** for IS Data Consulting.

Built with React 18, TypeScript, Vite, and Tailwind CSS. Deployed on Netlify.

---

## 🎯 Quick Start

### Prerequisites

- **Node.js 18+** or **Bun**
- Git

### Installation & Development

```bash
# Clone repository
git clone https://github.com/ngsanogo/isdataconsulting.com.git
cd isdataconsulting.com

# Install dependencies
bun install

# Start development server
bun run dev
```

Open [http://localhost:8080](http://localhost:8080) and start editing!

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, shadcn/ui, Radix UI |
| **State** | React Query, React Hook Form, Zod |
| **Testing** | Vitest, Testing Library |
| **Hosting** | Netlify (CDN) |
| **Quality** | ESLint, TypeScript, Vite |

---

## 📂 Project Structure

```
src/
├── components/              # React components
│   ├── ui/                 # shadcn/ui library (copy-paste)
│   ├── Header.tsx          # Site header with navigation
│   ├── Footer.tsx          # Site footer
│   ├── HeroSection.tsx      # Landing hero
│   ├── ServicesSection.tsx  # Services showcase
│   ├── MethodologySection.tsx # Philosophy & approach
│   └── ContactSection.tsx   # Contact CTA
├── pages/
│   ├── Index.tsx           # Home page (/)
│   └── NotFound.tsx        # 404 page
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities & helpers
├── config/                 # Site configuration
└── test/                   # Unit tests

public/                     # Static assets
scripts/                    # Utility scripts
```

---

## 🛠 Available Commands

```bash
bun run dev          # 🚀 Start dev server (localhost:8080)
bun run build        # 📦 Build for production
bun run preview      # 👀 Preview production build locally
bun run test         # 🧪 Run unit tests once
bun run test:watch   # 🧪 Run tests in watch mode
bun run lint         # ✨ Check code quality
bun run type-check   # 📋 TypeScript type checking
```

---

## 🚀 Deployment

### Netlify (Recommended)

```bash
# 1. Push to GitHub
git push

# 2. Connect repository to Netlify
# https://app.netlify.com → Add new site → GitHub

# 3. Configure:
#    - Build command: bun run build
#    - Publish directory: dist
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

```tsx
// ✅ Good: Clear, typed, documented
interface ButtonProps {
  label: string;
  onClick: () => void;
}

/** Primary action button with hover effect */
export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick} className="...">
    {label}
  </button>
);
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(header): add mobile navigation
fix(contact): validate email field
docs(readme): update deployment steps
```

---

## 🔒 Security & Performance

- ✅ TypeScript strict mode
- ✅ Security headers (CSP, X-Frame-Options, etc.)
- ✅ No hardcoded secrets in repository
- ✅ Dependencies regularly updated
- ✅ Minimal bundle size (Vite + tree-shaking)

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [ARCHITECTURE.md](ARCHITECTURE.md) | System design & data flow |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Step-by-step deployment guide |
| [SECURITY.md](SECURITY.md) | Security policies & practices |
| [CONTRIBUTING.md](CONTRIBUTING.md) | How to contribute |
| [CHANGELOG.md](CHANGELOG.md) | Version history |

---

## 🤝 Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

**Quick workflow:**

```bash
# 1. Create feature branch
git checkout -b feature/my-feature

# 2. Make changes & commit
git commit -m "feat: description"

# 3. Push & open PR
git push origin feature/my-feature
```

---

## 📄 License

MIT © 2025 IS Data Consulting

See [LICENSE](LICENSE) for details.

---

## 🆘 Support

- 📧 **Email**: contact@isdataconsulting.com
- 📍 **Location**: 152 Avenue Gabriel Péri, 95870 Bezons, France
- 🔗 **SIREN**: 940 718 075

---

**Made with ❤️ by IS Data Consulting**
