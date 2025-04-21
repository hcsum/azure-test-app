# Simple Node.js Express API

A simple Node.js application with Express that provides a GET API endpoint.

## Features

- Node.js 20
- Express.js
- Docker support
- Simple GET API endpoint
- Health check endpoint

## Running the Application

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. The server will start on http://localhost:3000

### Using Docker

1. Build the Docker image:
   ```bash
   docker build -t azure-practice-app .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 azure-practice-app
   ```

## API Endpoints

- `GET /api/data` - Returns sample JSON data
- `GET /health` - Health check endpoint 