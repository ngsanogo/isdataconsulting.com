# Architecture

This document describes the high-level architecture of IS Data Consulting website.

## Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser / Client                          │
├─────────────────────────────────────────────────────────────┤
│  React App (SPA - Single Page Application)                  │
│  ├── Router (React Router)                                  │
│  ├── State Management (React Query)                         │
│  ├── Components (shadcn/ui + Custom)                        │
│  └── Styling (Tailwind CSS)                                 │
├─────────────────────────────────────────────────────────────┤
│  Build System (Vite)                                        │
│  ├── TypeScript Compilation                                │
│  ├── Code Splitting                                        │
│  └── Asset Optimization                                    │
├─────────────────────────────────────────────────────────────┤
│  Static Hosting                                             │
│  └── dist/ folder → CDN / Web Server                        │
└─────────────────────────────────────────────────────────────┘
```

## Project Structure

### `/src/components`
- **UI Components** (`/ui`): Reusable shadcn/ui components (buttons, forms, cards, etc.)
- **Feature Components**: Page sections (Header, Hero, Services, etc.)

### `/src/pages`
- **Page Components**: Full page components (Index, NotFound, etc.)
- Each page combines multiple feature components

### `/src/hooks`
- **Custom Hooks**: Reusable logic for React components
- Examples: `use-mobile`, `use-toast`

### `/src/lib`
- **Utilities**: Helper functions and utilities
- Examples: `utils.ts` (clsx, mergeClass)
- `performance.ts`: Performance monitoring

### `/src/config`
- **Configuration Files**: Site metadata, constants
- `site.ts`: Site configuration and SEO metadata

### `/src/test`
- **Test Files**: Unit tests for components and utilities
- Uses Vitest + Testing Library

## Technology Stack

### Core Framework
- **React 18**: UI library
- **TypeScript**: Type safety
- **React Router v6**: Client-side routing

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Class Variance Authority**: Component style variants

### UI Components
- **shadcn/ui**: Copy-paste component library
- **Radix UI**: Accessible component primitives

### Build & Development
- **Vite**: Ultra-fast build tool
- **SWC**: Fast TypeScript compiler
- **PostCSS**: CSS transformation

### Data & State
- **React Query**: Server state management
- **Zod**: Schema validation
- **React Hook Form**: Form state management

### Additional Libraries
- **Framer Motion**: Animations
- **Recharts**: Charts and graphs
- **Sonner**: Toast notifications
- **Lucide React**: Icon library

### Testing & Quality
- **Vitest**: Fast unit test framework
- **Testing Library**: Component testing
- **ESLint**: Code linting
- **TypeScript**: Type checking

## Data Flow

```
User Interaction
    ↓
Event Handler
    ↓
State Update (React)
    ↓
Component Re-render
    ↓
DOM Update
    ↓
Visual Feedback
```

## Component Hierarchy

```
App
├── QueryClientProvider (Data)
├── TooltipProvider (UI Context)
├── BrowserRouter (Routing)
│   └── Routes
│       ├── Route: Index (/)
│       │   ├── Header
│       │   ├── HeroSection
│       │   ├── ServicesSection
│       │   ├── MethodologySection
│       │   ├── ContactSection
│       │   └── Footer
│       └── Route: NotFound (*)
└── Toasters (Notifications)
```

## Routing

Single Page Application (SPA) routing:

```
/                    → Home page (Index)
/*                   → 404 page (NotFound)
```

Client-side navigation using React Router prevents full page reloads.

## Build Process

```
Source Code (TypeScript/JSX)
    ↓
Vite Build
├── TypeScript Compilation (SWC)
├── JSX Transform
├── Tailwind CSS Processing
├── Code Splitting
├── Minification
└── Asset Optimization
    ↓
dist/ (Optimized Build)
├── index.html
├── assets/
│   ├── index-XXXX.js (Main bundle)
│   ├── vendor-XXXX.js (Dependencies)
│   └── style-XXXX.css (Styles)
└── Other Assets
```

## Performance Optimizations

### Code Splitting
- Vite automatically splits code by route
- Lazy loading of components when needed

### Asset Optimization
- CSS and JavaScript minification
- Image optimization
- Font loading strategy

### Caching
- Long-term caching for versioned assets
- Cache busting with file hashes

### Tree Shaking
- Unused code removal during build
- Optimized bundle sizes

## Security Architecture

### Frontend Security
- No sensitive data in client-side code
- Environment variables for configuration
- Content Security Policy ready
- XSS prevention through React's escaping

### Build Security
- Dependency scanning
- No hardcoded secrets
- Secure headers configuration

### Deployment Security
- HTTPS enforced
- Security headers set
- CORS configuration
- Cache headers optimized

## Deployment Architecture

### Static Hosting
```
GitHub Repository
    ↓
GitHub Actions (Build & Test)
    ↓
Build Artifacts
    ↓
Vercel / Netlify / GitHub Pages
    ↓
CDN
    ↓
User Browser
```

### CI/CD Pipeline
1. **Code Push**: Developer pushes to GitHub
2. **Tests**: GitHub Actions runs tests, linting, type checking
3. **Build**: Vite builds optimized production bundle
4. **Deploy**: Automatic deployment to hosting platform
5. **Live**: Changes live on production

## Scalability

### Horizontal Scaling
- Static assets served via CDN
- No backend required
- Scales infinitely

### Code Organization
- Modular component structure
- Reusable utilities and hooks
- Clear separation of concerns

### State Management
- React Query for server state
- React hooks for component state
- Context API for shared state

## Monitoring & Analytics

### Performance Monitoring
- `src/lib/performance.ts`: Core Web Vitals tracking
- Build time optimization
- Bundle size monitoring

### Error Tracking
- Ready for Sentry integration
- Unhandled error boundaries
- Type-safe error handling

### User Analytics
- Ready for Google Analytics integration
- Event tracking capabilities

## Design Patterns

### Component Pattern
- Functional components with hooks
- Props-based configuration
- Composition over inheritance

### Hook Pattern
- Custom hooks for logic reuse
- Separation of concerns
- Type-safe hooks

### Context Pattern
- TooltipProvider for UI state
- QueryClientProvider for data

## Best Practices

1. **TypeScript**: Full type coverage
2. **Testing**: Unit tests for critical paths
3. **Accessibility**: Radix UI for WCAG compliance
4. **Performance**: Code splitting and lazy loading
5. **Security**: No sensitive data exposure
6. **Code Quality**: ESLint and formatting standards
7. **Documentation**: Clear component documentation
8. **Error Handling**: Proper error boundaries and handling

## Future Enhancements

- API integration points
- User authentication
- Database integration
- Advanced analytics
- A/B testing framework
- Progressive Web App (PWA) features
