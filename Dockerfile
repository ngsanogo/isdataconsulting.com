FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM deps AS dev
RUN apk add --no-cache bash git openssh-client make python3 g++
COPY . .
EXPOSE 5173

FROM deps AS builder
COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine AS prod
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget -qO- http://127.0.0.1:8080/ >/dev/null || exit 1