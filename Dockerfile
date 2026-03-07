# ── base ─────────────────────────────────────────────────────
FROM node:22-alpine AS base
WORKDIR /workspace

# ── dev-runtime: one-shot tasks (format, lint, serve) ────────
FROM base AS dev-runtime
RUN npm install -g prettier serve

# ── devcontainer: interactive development ────────────────────
FROM base AS devcontainer

RUN apk add --no-cache \
      bash git curl openssh-client zsh sudo \
      python3 py3-pip \
    && pip3 install --break-system-packages pre-commit \
    && npm install -g prettier serve

ARG USERNAME=vscode
RUN deluser --remove-home node \
    && addgroup -g 1000 "${USERNAME}" \
    && adduser -D -u 1000 -G "${USERNAME}" -s /bin/zsh "${USERNAME}" \
    && echo "${USERNAME} ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER ${USERNAME}

# ── prod: production-like static preview ─────────────────────
FROM nginx:1-alpine AS prod
COPY site/ /usr/share/nginx/html/
EXPOSE 80
