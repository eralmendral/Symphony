# Symphony Astro Website Boilerplate

A simple Astro website boilerplate with Hello World functionality.

## Features

- Astro 4.0 with static site generation
- TypeScript support
- Modern CSS with gradients and animations
- Responsive design
- Docker support with nginx
- Fast build times

## Prerequisites

- Node.js 18+
- npm or yarn

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Using Docker

```bash
# Build the Docker image
docker build -t symphony-website .

# Run the container
docker run -p 80:80 symphony-website
```

## Development

The website will be available at `http://localhost:4321` in development mode.

## Project Structure

```
src/
├── pages/
│   └── index.astro    # Main page
public/
└── favicon.svg        # Site favicon
```

## Features

- **Fast**: Lightning-fast static site generation
- **Modern**: Built with cutting-edge web technologies  
- **Beautiful**: Clean, responsive design with gradients
- **SEO-friendly**: Optimized for search engines
- **Accessible**: Built with accessibility in mind

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands 