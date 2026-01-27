#!/bin/bash

# Pre-deployment security and optimization checks

echo "🔍 Running production checks..."

# 1. Check ESLint
echo "🔍 Running ESLint..."
bun run lint || exit 1

# 2. Run tests
echo "🧪 Running tests..."
bun run test || exit 1

# 3. Build production bundle
echo "📦 Building for production..."
bun run build || exit 1

# 4. Check bundle size
echo "📊 Bundle analysis:"
ls -lh dist/ | grep -E "\.js|\.css"

echo "✅ All checks passed! Ready for deployment."
