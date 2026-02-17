#!/bin/bash
# Configure git hooks for containerized development

set -e

echo "Configuring git hooks..."

mkdir -p .git/hooks

cp .githooks/pre-commit .git/hooks/pre-commit
cp .githooks/pre-push .git/hooks/pre-push

chmod +x .git/hooks/pre-commit
chmod +x .git/hooks/pre-push

echo "✓ Git hooks configured successfully"
echo ""
echo "Active hooks:"
echo "  • pre-commit: lint, type-check, tests"
echo "  • pre-push: production build"
echo ""
echo "All checks run in Docker containers."
