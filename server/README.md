# Symphony Go Server Boilerplate

A simple Go server boilerplate with Hello World functionality.

## Features

- RESTful API endpoints
- JSON response format
- Health check endpoint
- Docker support
- Environment variable configuration

## Quick Start

### Local Development

```bash
# Run the server
go run main.go

# Or build and run
go build -o server main.go
./server
```

### Using Docker

```bash
# Build the Docker image
docker build -t symphony-server .

# Run the container
docker run -p 8080:8080 symphony-server
```

## API Endpoints

- `GET /` - Hello World message
- `GET /health` - Health check endpoint

## Environment Variables

- `PORT` - Server port (default: 8080)

## Example Response

```json
{
  "message": "Hello World from Go Server!",
  "status": "success"
}
``` 