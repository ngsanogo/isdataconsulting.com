#!/usr/bin/env bash
set -euo pipefail

bash .devcontainer/doctor.sh /workspace

npm ci

if command -v code >/dev/null 2>&1; then
  code --install-extension dbaeumer.vscode-eslint --force
  code --install-extension esbenp.prettier-vscode --force
  code --install-extension bradlc.vscode-tailwindcss --force
  code --install-extension ms-azuretools.vscode-docker --force
  code --install-extension vitest.explorer --force
  code --install-extension ms-vscode.makefile-tools --force
fi
