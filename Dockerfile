# --- Stage 1: Base (Dependencies) ---
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./
# Utilisation de npm ci pour la reproductibilité
RUN npm ci

# --- Stage 2: Development ---
FROM base AS dev
COPY . .
# On ne définit pas de CMD ici pour laisser le Compose décider
EXPOSE 3000

# --- Stage 3: Builder (Production Build) ---
FROM dev AS builder
RUN npm run build

# --- Stage 4: Production (Minimal) ---
FROM node:22-alpine AS prod
WORKDIR /app
# On ne récupère que le nécessaire (Zen: Simple is better than complex)
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev
CMD ["npm", "run", "start"]