# Symphony Angular WebApp Boilerplate

A simple Angular web application boilerplate with Hello World functionality.

## Features

- Angular 17 with standalone components
- TypeScript support
- Modern build system
- Docker support with nginx
- Responsive design

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Using Docker

```bash
# Build the Docker image
docker build -t symphony-webapp .

# Run the container
docker run -p 80:80 symphony-webapp
```

## Development

The application will be available at `http://localhost:4200` in development mode.

## Project Structure

```
src/
├── app/
│   ├── app.component.ts    # Main component
│   ├── app.config.ts       # App configuration
│   └── app.routes.ts       # Routing configuration
├── index.html              # Entry HTML file
├── main.ts                 # Application entry point
└── styles.css              # Global styles
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run watch` - Build and watch for changes 