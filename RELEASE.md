# Release Process

This document outlines how to release a new version of IS Data Consulting.

## Version Numbering

We follow [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes (e.g., 1.0.0 → 2.0.0)
- **MINOR**: New features (e.g., 1.0.0 → 1.1.0)
- **PATCH**: Bug fixes (e.g., 1.0.0 → 1.0.1)

## Pre-Release Checklist

- [ ] All tests passing: `bun run test`
- [ ] Linting clean: `bun run lint`
- [ ] Type checking passes: `bun run type-check`
- [ ] Build succeeds: `bun run build`
- [ ] No security vulnerabilities: `bun audit`
- [ ] Dependencies up to date
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] All PRs merged and reviewed

## Release Steps

### 1. Update Version

```bash
# Update package.json version
# Update version in src/config/site.ts if needed
# Update CHANGELOG.md with release notes
```

### 2. Create Release Branch

```bash
git checkout -b release/v1.2.0
git add package.json CHANGELOG.md
git commit -m "chore: bump version to 1.2.0"
git push origin release/v1.2.0
```

### 3. Create Pull Request

- Create PR from `release/v1.2.0` to `main`
- Add release notes in PR description
- Request review from maintainers
- Squash and merge once approved

### 4. Create GitHub Release

```bash
# Tag the release
git tag -a v1.2.0 -m "Release version 1.2.0"
git push origin v1.2.0

# Create GitHub Release with:
# - Version number: v1.2.0
# - Release notes from CHANGELOG
# - Generated release notes
```

### 5. Verify Deployment

- GitHub Actions deploy workflow triggers automatically
- Monitor deployment status
- Verify production site is updated
- Test functionality in production

## Post-Release

- [ ] Verify analytics are working
- [ ] Check error tracking (Sentry, etc.)
- [ ] Monitor performance metrics
- [ ] Share release notes with team
- [ ] Update external documentation
- [ ] Consider social media announcement

## Rollback Procedure

If critical issues are discovered:

```bash
# Via GitHub Actions
# - Go to Actions → Deploy workflow
# - Click "Re-run jobs" on previous successful deployment

# Or manual rollback
git revert <commit-hash>
git push origin main
```

## Release Schedule

- **Patch releases**: As needed for bug fixes
- **Minor releases**: Monthly or as features complete
- **Major releases**: Quarterly or on significant updates

## Communication

- Announce major releases in team channels
- Update documentation site
- Consider email notification to users
- Post on social media for major releases

## Hotfix Process

For critical production issues:

```bash
git checkout main
git pull origin main
git checkout -b hotfix/issue-name

# Make fix
git commit -m "fix: critical issue description"
git push origin hotfix/issue-name

# Create PR to main for review
# Once merged, create release following Release Steps above
```

## Support for Old Versions

| Version | Status | Support |
|---------|--------|---------|
| 1.x | Current | Full |
| 0.x | Legacy | Security fixes only |

## Questions?

Contact the maintainers if you have questions about the release process.
