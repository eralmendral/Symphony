FROM swift:5.9-focal

# Install Xcode command line tools and dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Build the project (this is a placeholder - actual iOS builds require macOS)
RUN echo "iOS builds require macOS and Xcode. This Dockerfile is for development environment setup only."

# Expose port for development server
EXPOSE 8080

CMD ["echo", "iOS development requires macOS with Xcode installed"] 