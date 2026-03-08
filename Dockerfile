# ── base ─────────────────────────────────────────────────────
FROM node:22-alpine AS base
WORKDIR /workspace

# ── dev-runtime: one-shot tasks (format, lint, serve) ────────
FROM base AS dev-runtime
RUN npm install -g prettier@4.0.0-alpha.8 serve@14

# ── devcontainer: interactive development ────────────────────
FROM base AS devcontainer

RUN apk add --no-cache \
      bash git curl openssh-client zsh sudo \
      python3 py3-pip \
    && pip3 install --break-system-packages pre-commit \
    && npm install -g prettier@4.0.0-alpha.8 serve@14

ARG USERNAME=vscode
RUN deluser --remove-home node \
    && addgroup -g 1000 "${USERNAME}" \
    && adduser -D -u 1000 -G "${USERNAME}" -s /bin/zsh "${USERNAME}" \
    && echo "${USERNAME} ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER ${USERNAME}

# ── prod: production-like static preview ─────────────────────
FROM nginx:1-alpine AS prod
RUN chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d \
    && touch /var/run/nginx.pid && chown nginx:nginx /var/run/nginx.pid \
    && sed -i 's/listen       80;/listen       8080;/' /etc/nginx/conf.d/default.conf \
    && sed -i '/listen  \[::\]:80;/d' /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx site/ /usr/share/nginx/html/
USER nginx
EXPOSE 8080
