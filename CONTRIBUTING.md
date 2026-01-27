# Contributing

We appreciate your interest in contributing to IS Data Consulting website!

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/isdataconsulting.github.io.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `bun install`

## Development Workflow

```bash
# Start development server
bun run dev

# Run tests
bun run test:watch

# Check code quality
bun run lint

# Type checking
bun run type-check
```

## Code Standards

- **TypeScript**: Use strict typing. Avoid `any` unless absolutely necessary.
- **Components**: Keep components small and focused on a single responsibility.
- **Testing**: Write tests for new features. Aim for >80% coverage.
- **Documentation**: Document complex logic with comments.
- **Naming**: Use clear, descriptive names for variables, functions, and components.

### Component Structure

```tsx
// Proper component structure
import React from 'react';
import { Button } from '@/components/ui/button';

interface ComponentProps {
  title: string;
  onClick?: () => void;
}

/**
 * Brief description of what this component does
 */
export const Component: React.FC<ComponentProps> = ({ title, onClick }) => {
  return (
    <div>
      <h1>{title}</h1>
      {onClick && <Button onClick={onClick}>Click me</Button>}
    </div>
  );
};

export default Component;
```

## Commit Messages

Follow conventional commits:

```
type(scope): description

- feat: A new feature
- fix: A bug fix
- docs: Documentation changes
- style: Code style changes (formatting, missing semicolons, etc.)
- refactor: Code refactoring without feature changes
- perf: Performance improvements
- test: Adding or updating tests
- chore: Maintenance tasks, dependency updates
```

Example:
```
feat(header): add mobile menu support
fix(contact-form): validate email field
docs(readme): update installation instructions
```

## Pull Request Process

1. Ensure your branch is up to date with main
2. Run tests locally: `bun run test`
3. Run linter: `bun run lint`
4. Build locally: `bun run build`
5. Create a clear PR description with:
   - What changes are made
   - Why the changes are needed
   - How to test the changes
6. Link any related issues
7. Request review from maintainers

## Testing Guidelines

- Write unit tests for utilities and hooks
- Write component tests for UI components
- Use meaningful test descriptions
- Aim for high coverage on critical paths

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

## Reporting Issues

Before creating an issue:
1. Check existing issues to avoid duplicates
2. Use a clear title and description
3. Provide steps to reproduce
4. Include expected vs actual behavior
5. Add relevant error messages or screenshots

## Questions?

Feel free to:
- Open a discussion in GitHub Discussions
- Reach out to the maintainers
- Check our documentation

## License

By contributing, you agree that your contributions will be licensed under the project's license.

Thank you for contributing! 🎉
