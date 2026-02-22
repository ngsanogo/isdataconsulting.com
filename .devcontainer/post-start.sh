#!/usr/bin/env bash
set -euo pipefail

cd /workspace

export PATH="/workspace/node_modules/.bin:/home/node/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

if [[ "$PATH" == *"/opt/homebrew"* ]] || [[ "$PATH" == *"/Users/"* ]] || [[ "$PATH" == *"/Volumes/"* ]]; then
  echo "Forbidden host path detected in PATH: $PATH"
  exit 1
fi

required_bins=(node npm git python3 make)
for bin in "${required_bins[@]}"; do
  if ! command -v "$bin" >/dev/null 2>&1; then
    echo "Required binary missing in container: $bin"
    exit 1
  fi
done

npm ci
