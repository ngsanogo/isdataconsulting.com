# Security Policy

## Supported Versions

| Version | Status | Security Updates |
|---------|--------|------------------|
| 1.x | Active | ✅ Yes |
| < 1.0 | EOL | ❌ No |

## Reporting Security Issues

**⚠️ IMPORTANT: Do not open public issues or pull requests for security vulnerabilities.**

If you discover a security vulnerability, please email us privately:

**Email:** `security@isdataconsulting.com`

**Please include:**
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

**Response Timeline:**
- Initial acknowledgment: Within 24 hours
- Investigation: Within 1 week
- Patch release: Within 2 weeks (depending on severity)
- Public disclosure: After patch is released and available to users

## Security Best Practices

### For Users

1. **Keep Dependencies Updated**
   ```bash
   npm audit
   npm update
   ```

2. **Review Environment Files**
   - Never commit `.env` files
   - Rotate credentials regularly
   - Use unique tokens per environment

3. **Monitor Releases**
   - Subscribe to GitHub releases
   - Review CHANGELOG for security fixes

### For Contributors

1. **Code Review**
   - Never merge unreviewed code
   - Require status checks on main branch
   - Use CODEOWNERS for critical files

2. **Dependency Management**
   - Use `npm audit` before commits
   - Keep devDependencies updated
   - Use package lockfile

3. **Secret Management**
   - Never hardcode secrets
   - Use environment variables
   - Use `.env.example` without values

## Security Headers

The website implements the following security headers via Netlify:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Content-Security-Policy: ...
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: ...
```

## SSL/TLS Configuration

- ✅ HTTPS enforced (via Netlify)
- ✅ TLS 1.2+ required
- ✅ HSTS enabled
- ✅ Valid certificate

## Data Protection

### What We Collect
- Contact form submissions (email, message)
- Analytics via Plausible (anonymous)
- Server logs (temporary, aggregated)

### What We Don't Do
- ✅ No third-party trackers
- ✅ No personal data sharing
- ✅ No cookies without consent
- ✅ No unnecessary data retention

See [Privacy Policy](https://isdataconsulting.com/privacy) for details.

## Incident Response

In case of a security incident:

1. **Immediate Actions**
   - Isolate affected systems
   - Stop the active threat
   - Preserve evidence

2. **Notification**
   - Inform affected users within 24 hours
   - Contact relevant parties
   - Document incident

3. **Follow-up**
   - Root cause analysis
   - Implement fixes
   - Monitor for recurrence

## Compliance

This website complies with:

- ✅ GDPR (General Data Protection Regulation)
- ✅ CCPA (California Consumer Privacy Act)
- ✅ WCAG 2.1 Level AA (Accessibility)
- ✅ OWASP Top 10 prevention
- ✅ CWE Top 25 awareness

## Security Checklist

- [ ] All dependencies passed `npm audit`
- [ ] No secrets in repository
- [ ] TypeScript strict mode enabled
- [ ] XSS protections in place
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] Code reviewed for vulnerabilities
- [ ] Tests include security scenarios
- [ ] Deployment verified secure

## Tools & Resources

### Vulnerability Scanning
- GitHub: Dependabot
- npm: `npm audit`
- OWASP: Dependency-Check

### Security Testing
- Chrome DevTools
- OWASP ZAP
- Burp Suite Community

### Educational Resources
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [CWE Top 25](https://cwe.mitre.org/top25/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)

## Bug Bounty

Currently, ISData Consulting does not have a formal bug bounty program. However, we appreciate responsible vulnerability disclosure and will:

- Acknowledge researchers
- Provide credit in security advisories
- Consider for future bug bounty program

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for security-related updates.

---

**Last Updated:** February 15, 2026  
**Next Review:** March 15, 2026

For questions, contact: `security@isdataconsulting.com`
