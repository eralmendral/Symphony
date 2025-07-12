FROM rust:1.70 as builder

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Install Tauri CLI
RUN npm install -g @tauri-apps/cli

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run tauri build

# Production stage
FROM debian:bullseye-slim

# Install runtime dependencies
RUN apt-get update && apt-get install -y \
    libgtk-3-0 \
    libwebkit2gtk-4.0-37 \
    libappindicator3-1 \
    librsvg2-2 \
    libssl1.1 \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Copy built application
COPY --from=builder /app/src-tauri/target/release/symphony-desktop /usr/local/bin/

# Set working directory
WORKDIR /app

# Expose port for development
EXPOSE 1420

CMD ["symphony-desktop"] 