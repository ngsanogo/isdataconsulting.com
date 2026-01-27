# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in IS Data Consulting website, please email **security@isdataconsulting.com** instead of using the issue tracker.

Please include:
- Description of the vulnerability
- Steps to reproduce (if possible)
- Impact assessment
- Suggested fix (if you have one)

We will acknowledge receipt of your report within 24 hours and provide a status update within 5 business days.

## Security Practices

### Dependency Management
- Dependencies are regularly updated using Dependabot
- Security patches are applied within 48 hours of notification
- Regular dependency audits are performed

### Code Security
- All code is reviewed before merging
- Linting rules enforce code quality
- Type checking prevents common errors
- OWASP guidelines are followed

### Deployment Security
- HTTPS only
- Security headers configured (CSP, X-Frame-Options, etc.)
- Environment variables for sensitive data
- No hardcoded secrets in repository

### Data Protection
- No sensitive data is logged
- User data is handled according to GDPR
- Third-party services are vetted

## Security Headers

The application includes the following security headers:
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## Dependencies

We use industry-standard, well-maintained dependencies:
- React: Actively maintained by Meta
- Vite: Popular build tool with strong security record
- TypeScript: Provides type safety
- Tailwind CSS: Utility-first CSS framework
- shadcn/ui: Open-source component library

## Vulnerability Disclosure Timeline

1. **Day 1-2**: Acknowledge and reproduce the issue
2. **Day 3-5**: Develop and test fix
3. **Day 6**: Release patch version
4. **Day 7**: Public disclosure (after patch is released)

## Version Support

| Version | Status | Support Until |
|---------|--------|---------------|
| 1.x     | Current | Active |
| 0.x     | EOL    | 2025-12-31 |

## Compliance

This project aims to comply with:
- OWASP Top 10
- CWE/SANS Top 25
- GDPR (for EU users)
- WCAG 2.1 (for accessibility)

## Questions?

Contact: **security@isdataconsulting.com**
