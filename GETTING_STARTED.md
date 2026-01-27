# Getting Started

Welcome! Here's everything you need to develop, test, and deploy IS Data Consulting website.

---

## 📦 Prerequisites

- **Node.js 18+** or **Bun** (recommended)
- **Git**
- A code editor (VS Code recommended)

---

## 🚀 Quick Start (2 minutes)

### 1. Clone & Install

```bash
git clone https://github.com/ngsanogo/isdataconsulting.com.git
cd isdataconsulting.com
bun install
```

### 2. Start Development

```bash
bun run dev
```

Open [http://localhost:8080](http://localhost:8080) → Changes auto-reload!

---

## 🛠 Common Tasks

### Run Tests
```bash
bun run test         # Run once
bun run test:watch   # Watch mode
```

### Check Code Quality
```bash
bun run lint       # ESLint
bun run type-check # TypeScript
```

### Build & Preview
```bash
bun run build    # Create optimized dist/
bun run preview  # View production build
```

---

## 📂 Project Structure

```
src/
├── components/       # React components (Header, Footer, Sections)
├── pages/           # Full pages (Index, NotFound)
├── lib/             # Utilities & helpers
├── config/          # Configuration (site.ts)
├── hooks/           # Custom React hooks
└── test/            # Unit tests
```

---

## 💡 Development Guidelines

### Component Template

```tsx
import React from 'react';

interface Props {
  title: string;
  onClick?: () => void;
}

/**
 * Brief description of what this component does
 */
const Component: React.FC<Props> = ({ title, onClick }) => {
  return <div>{title}</div>;
};

export default Component;
```

### Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(header): add mobile navigation
fix(contact): validate email field
docs(readme): update deployment steps
```

### Testing

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('expected')).toBeInTheDocument();
  });
});
```

---

## 🚀 Deployment

### Netlify (Recommended)

1. Push to GitHub: `git push`
2. Connect repo to Netlify: https://app.netlify.com
3. Auto-deploys on every push! 🎉

See [DEPLOYMENT.md](DEPLOYMENT.md) for details.

---

## 📚 More Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md) - System design
- [DEPLOYMENT.md](DEPLOYMENT.md) - How to deploy
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contributing guidelines
- [SECURITY.md](SECURITY.md) - Security practices
- [PRODUCTION_CHECKLIST.md](PRODUCTION_CHECKLIST.md) - Pre-release checklist

---

## ⚡ Tips

- Use TypeScript for type safety
- Write tests for new features
- Follow ESLint rules
- Keep components small & focused
- Use Tailwind CSS for styling

---

## ❓ Troubleshooting

### Port 8080 already in use
```bash
bun run dev --port 3000  # Use different port
```

### Dependencies issue
```bash
rm -rf node_modules bun.lockb
bun install
```

### Build fails
```bash
bun run build        # Check error
bun run type-check   # Check TypeScript
bun run lint         # Check linting
```

---

## 🤝 Need Help?

- Check existing [GitHub Issues](https://github.com/ngsanogo/isdataconsulting.com/issues)
- Read [CONTRIBUTING.md](CONTRIBUTING.md)
- Email: contact@isdataconsulting.com

---

**Happy coding! 🎉**
