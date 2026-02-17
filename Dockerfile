# Base image avec dépendances
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --frozen-lockfile

# Image de développement
FROM deps AS dev
COPY . .
EXPOSE 5173

# Image pour les tests
FROM deps AS test
COPY . .
ENV NODE_ENV=test

# Image pour le linting
FROM deps AS lint
COPY . .

# Image pour le build
FROM deps AS builder
COPY . .
RUN npm run build

# Image de production avec nginx
FROM nginx:alpine AS prod
COPY --from=builder /app/dist /usr/share/nginx/html
COPY <<EOF /etc/nginx/conf.d/default.conf
server {
  listen 80;
  root /usr/share/nginx/html;
  index index.html;
  location / {
    try_files \$uri /index.html;
  }
  location ~* \.(?:js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
  error_page 404 /index.html;
}
EOF
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD sh -c 'kill -0 1 || exit 1'