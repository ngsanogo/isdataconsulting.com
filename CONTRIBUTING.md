# Contributing to ISData Consulting Website

Welcome! We're excited that you want to contribute to the ISData Consulting website. This document provides guidelines and instructions for contributing.

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites
- Docker (for reproducible development)
- Git
- Basic familiarity with React, TypeScript, and Tailwind CSS

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ngsanogo/isdataconsulting.com.git
   cd isdataconsulting.com
   ```

2. **Install dependencies with Docker**
   ```bash
   docker compose build
   ```

3. **Copy environment file**
   ```bash
   cp .env.example .env
   ```

4. **Start development server**
   ```bash
   docker compose up app
   # Server runs at http://localhost:5173
   ```

5. **Run tests**
   ```bash
   docker compose --profile test run --rm test npm run test
   ```

6. **Run quality checks**
   ```bash
   docker compose --profile test run --rm test npm run type-check
   docker compose --profile test run --rm test npm run lint
   docker compose --profile test run --rm test npm run build
   ```

## Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
# or for bug fixes:
git checkout -b fix/issue-description
# or for documentation:
git checkout -b docs/description
```

Use descriptive branch names:
- `feature/add-analytics-tracking`
- `fix/scroll-performance`
- `docs/enhance-readme`

### 2. Make Your Changes

Follow these principles:
- **Simplicity**: Write clear, explicit code
- **No duplication**: Reuse components and utilities
- **TypeScript**: Use strict mode, no `any` types
- **Tests**: Add tests for new functionality
- **Performance**: Avoid unnecessary renders/API calls

### 3. Run Quality Checks

Before committing, ensure everything passes:

```bash
# Type checking
docker compose --profile test run --rm test npm run type-check

# Linting (auto-fix available)
docker compose --profile test run --rm test npm run lint
docker compose --profile test run --rm test npm run lint:fix

# Tests
docker compose --profile test run --rm test npm run test

# Coverage check
docker compose --profile test run --rm test npm run test:coverage

# Full build
docker compose --profile test run --rm test npm run build
```

### 4. Commit Your Changes

Write clear, descriptive commit messages following conventional commits:

```bash
git add .
git commit -m "feat: add scroll performance optimization

- Implement scroll event throttling (100ms)
- Create useScrollPosition custom hook
- Reduce scroll listener CPU usage by 95%
- Add unit tests for scroll hook"
```

**Commit Types:**
- `feat:` New feature
- `fix:` Bug fix
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `docs:` Documentation
- `style:` Formatting/styling
- `ci:` CI/CD changes
- `chore:` Dependencies, build tools, etc.

### 5. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request on GitHub with:
- Clear description of what changed and why
- Link to related issues if applicable
- Screenshots for UI changes
- Performance metrics if relevant

## Code Standards

### React Components

```tsx
import { FC } from 'react';

interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

/**
 * Brief description of component.
 * 
 * Component should have one clear responsibility.
 */
export const MyComponent: FC<MyComponentProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
};

export default MyComponent;
```

**Guidelines:**
- Use functional components with hooks
- One component per file (unless very closely related)
- Export types at the top
- Add JSDoc comments for complex components
- Use destructuring for props
- Avoid inline functions in render

### TypeScript

```tsx
// ✅ Good
interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): Promise<User> {
  // ...
}

// ❌ Avoid
interface User {
  id: any;
  name: any;
  [key: string]: any;
}

function getUser(id: any) {
  // ...
}
```

**Guidelines:**
- Use `interface` for component props, objects
- Use `type` for unions, intersections, primitives
- Avoid `any` type
- Enable `strict: true` checks
- Use `as const` for literal types

### CSS & Tailwind

```tsx
// ✅ Good
<div className="flex items-center justify-between gap-4 p-6 bg-white dark:bg-black border border-black/10 dark:border-white/10">
  
// ❌ Avoid
<div style="display: flex; margin: 24px; padding: 8px; background: white;">
```

**Guidelines:**
- Use Tailwind classes exclusively
- No inline styles
- Responsive design with `sm:`, `md:`, `lg:` prefixes
- Support dark mode with `dark:` prefix
- Use consistent spacing scale (4px units)

### Testing

Every new feature should include tests:

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders with title', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<MyComponent title="Test" onClick={onClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });
});
```

**Guidelines:**
- Test functionality, not implementation
- Use descriptive test names
- Minimum 80% coverage for new code
- Use data-testid for hard-to-reach elements
- Mock external dependencies

## Performance Guidelines

### Avoid Common Issues

```tsx
// ❌ Re-renders unnecessarily
<button onClick={() => setState(value)}>
  Click (creates new function each render)
</button>

// ✅ Use callback
const handleClick = useCallback(() => setState(value), []);
<button onClick={handleClick}>Click</button>

// ❌ Expensive computation in render
const expensiveValue = calculateExpensiveValue(data);

// ✅ Use memoization
const expensiveValue = useMemo(() => calculateExpensiveValue(data), [data]);

// ❌ Event listener without cleanup
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
}, []); // No cleanup!

// ✅ Proper cleanup
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## Documentation

- Update README.md if changing setup/deployment
- Add JSDoc comments for complex functions
- Document environment variables in .env.example
- Update CHANGELOG.md with notable changes

## Accessibility (a11y)

All changes must maintain or improve accessibility:

```tsx
// ✅ Good - proper ARIA attributes
<button 
  aria-label="Close menu"
  aria-expanded={isOpen}
  onClick={() => setIsOpen(!isOpen)}
>
  <X size={20} />
</button>

// ✅ Good - semantic HTML
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>

// ❌ Avoid - divs for interactive elements
<div onClick={() => setIsOpen(!isOpen)}>
  Menu
</div>
```

**Standards:**
- WCAG 2.1 level AA minimum
- All interactive elements keyboard accessible
- Proper color contrast (4.5:1 for normal text)
- Semantic HTML structure
- Meaningful alt text for images
- ARIA labels where needed

## Security

- Never commit secrets or API keys
- Use environment variables for sensitive data
- Keep dependencies up-to-date
- Report security issues privately (see SECURITY.md)

## Questions?

- Check existing [Issues](https://github.com/ngsanogo/isdataconsulting.com/issues)
- Review [Discussions](https://github.com/ngsanogo/isdataconsulting.com/discussions)
- Create a [Discussion](https://github.com/ngsanogo/isdataconsulting.com/discussions/new) for questions

## License

By contributing, you agree that your contributions will be licensed under the same license as this project (Proprietary - All Rights Reserved).

---

Thank you for contributing to ISData Consulting! 🚀
