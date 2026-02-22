#!/bin/sh
set -eu

cd /app

echo "[devcontainer] Initialisation de l'environnement..."

if [ ! -d node_modules ] || [ -z "$(ls -A node_modules 2>/dev/null || true)" ]; then
  echo "[devcontainer] Installation des dépendances Node.js..."
  npm ci
else
  echo "[devcontainer] node_modules déjà présent, installation ignorée."
fi

if [ -f scripts/setup-git-hooks.sh ]; then
  echo "[devcontainer] Configuration des hooks Git..."
  sh scripts/setup-git-hooks.sh || true
fi

echo "[devcontainer] Setup terminé."
