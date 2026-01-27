# Multi-stage build for IS Data Consulting website

# Stage 1: Development
FROM oven/bun:latest AS development

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Expose development server port
EXPOSE 8080

# Default command for development
CMD ["bun", "run", "dev"]

# Stage 2: Build for production
FROM oven/bun:latest AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the project
RUN bun run build

# Stage 3: Production serve
FROM oven/bun:latest AS production

WORKDIR /app

# Copy built artifacts from builder
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app/bun.lockb ./

# Install only production dependencies
RUN bun install --production

# Copy simple HTTP server script
COPY server.js ./

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD bun run health-check || exit 1

# Start HTTP server
CMD ["node", "server.js"]
