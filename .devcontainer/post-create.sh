#!/usr/bin/env bash
set -euo pipefail

export PATH="/workspace/node_modules/.bin:/home/node/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

if [[ "$PATH" == *"/opt/homebrew"* ]] || [[ "$PATH" == *"/Users/"* ]] || [[ "$PATH" == *"/Volumes/"* ]]; then
  echo "Forbidden host path detected in PATH: $PATH"
  exit 1
fi

npm ci

if command -v code >/dev/null 2>&1; then
  code --install-extension dbaeumer.vscode-eslint --force
  code --install-extension esbenp.prettier-vscode --force
  code --install-extension bradlc.vscode-tailwindcss --force
  code --install-extension ms-azuretools.vscode-docker --force
  code --install-extension vitest.explorer --force
  code --install-extension ms-vscode.makefile-tools --force
fi
