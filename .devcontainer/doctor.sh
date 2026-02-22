#!/usr/bin/env bash
set -euo pipefail

if [[ -d /workspace && -f /workspace/package.json ]]; then
  PROJECT_ROOT="/workspace"
elif [[ -d /app && -f /app/package.json ]]; then
  PROJECT_ROOT="/app"
else
  PROJECT_ROOT="${1:-$(pwd)}"
fi

export PATH="${PROJECT_ROOT}/node_modules/.bin:/home/node/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

if [[ "$PATH" == *"/opt/homebrew"* ]] || [[ "$PATH" == *"/Users/"* ]] || [[ "$PATH" == *"/Volumes/"* ]]; then
  echo "[doctor] Forbidden host path detected in PATH: $PATH"
  exit 1
fi

required_bins=(node npm git python3 make)
for bin in "${required_bins[@]}"; do
  if ! command -v "$bin" >/dev/null 2>&1; then
    echo "[doctor] Required binary missing in container: $bin"
    exit 1
  fi
done

writable_dirs=(
  "${PROJECT_ROOT}/node_modules"
  "${PROJECT_ROOT}/.npm"
  "${PROJECT_ROOT}/.cache"
)

for dir in "${writable_dirs[@]}"; do
  mkdir -p "$dir"
  probe="${dir}/.doctor-write-test"
  : > "$probe"
  rm -f "$probe"
done

echo "[doctor] OK - environment is container-only, writable and reproducible"
