# Symphony Angular Web App

Angular 17 web application boilerplate for Symphony.

## Prerequisites

- Node.js 18 or newer.
- npm.

## Quick Start

```bash
npm install
npm start
```

The app runs on `http://localhost:4200`.

## Scripts

```bash
npm start       # Start the Angular dev server
npm run build   # Build for production
npm run watch   # Build in watch mode for development
npm test        # Run Karma/Jasmine tests
```

## Project Structure

```text
webapp/
|-- src/
|   |-- app/
|   |   |-- app.component.ts
|   |   |-- app.config.ts
|   |   `-- app.routes.ts
|   |-- index.html
|   |-- main.ts
|   `-- styles.css
|-- angular.json
|-- package.json
|-- tsconfig.json
|-- Dockerfile
`-- nginx.conf
```

## Development Notes

- Keep UI behavior in Angular components and routes.
- Keep shared styling in `src/styles.css` unless a component-specific style is needed.
- Add tests for user-visible behavior, routing changes, forms, and data transformations.
- Use the top-level `skills/frontend-ui-ux` and `skills/testing-quality` guidance for larger UI changes.

## Docker

```bash
docker build -t symphony-webapp .
docker run -p 80:80 symphony-webapp
```

## Verification

Before opening a pull request for webapp changes, run:

```bash
npm test
npm run build
```
