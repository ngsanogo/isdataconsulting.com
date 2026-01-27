#!/bin/bash

# Pre-deployment security and optimization checks

echo "🔍 Running production checks..."

# 1. Check for any Lovable references
if grep -r "lovable" --include="*.ts" --include="*.tsx" --include="*.json" --exclude-dir=node_modules .; then
    echo "❌ Found Lovable references! Please remove them."
    exit 1
fi

# 2. Check ESLint
echo "🔍 Running ESLint..."
bun run lint || exit 1

# 3. Run tests
echo "🧪 Running tests..."
bun run test || exit 1

# 4. Build production bundle
echo "📦 Building for production..."
bun run build || exit 1

# 5. Check bundle size
echo "📊 Bundle analysis:"
ls -lh dist/ | grep -E "\.js|\.css"

echo "✅ All checks passed! Ready for deployment."
