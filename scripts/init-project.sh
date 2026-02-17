#!/bin/bash
# Initialize project with Docker environment

set -e

echo "Initializing ISData Consulting project..."
echo ""

# Verify Docker installation
if ! command -v docker &> /dev/null; then
    echo "Error: Docker is not installed"
    echo ""
    echo "Install Docker Desktop:"
    echo "  macOS: https://docs.docker.com/desktop/install/mac-install/"
    echo "  Windows: https://docs.docker.com/desktop/install/windows-install/"
    echo "  Linux: https://docs.docker.com/engine/install/"
    exit 1
fi

# Verify Docker Compose availability
if ! docker compose version &> /dev/null; then
    echo "Error: Docker Compose is not available"
    echo "Please install Docker Compose or update Docker Desktop"
    exit 1
fi

echo "✓ Docker is installed and running"
echo ""

# Build Docker images
echo "Building Docker images..."
echo "This may take a few minutes on first run..."
echo ""
docker compose build dev

echo ""
echo "✓ Docker images built successfully"
echo ""

# Configure git hooks
echo "Configuring git hooks..."
mkdir -p .git/hooks
cp .githooks/pre-commit .git/hooks/pre-commit
cp .githooks/pre-push .git/hooks/pre-push
chmod +x .git/hooks/pre-commit
chmod +x .git/hooks/pre-push

echo "✓ Git hooks configured"
echo ""

# Display next steps
echo "=========================================="
echo "Initialization complete"
echo "=========================================="
echo ""
echo "Next steps:"
echo ""
echo "  1. Start development server:"
echo "     make dev"
echo ""
echo "  2. View all commands:"
echo "     make help"
echo ""
echo "  3. Read documentation:"
echo "     cat DOCKER.md"
echo ""
echo "=========================================="
