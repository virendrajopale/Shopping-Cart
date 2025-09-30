# Shopping Cart

This project contains a Vite React frontend and a Node/Express backend for a simple e-commerce product listing and checkout demo.

## Project Structure

- `frontend/`: React 18 + Vite + Tailwind
- `backend/`: Node.js + Express API (products and checkout)

## Requirements

- Node.js 18+
- npm 9+

## Quick Start (Development)

Open two terminals:

1) Backend
```
cd backend
npm install
npm run dev
```
The API runs on `http://localhost:3001` by default (env `PORT` supported).

2) Frontend
```
cd frontend
npm install
npm run dev
```
The app runs on the Vite dev server (it will print the URL, typically `http://localhost:5173`).

Configure the frontend to reach the backend by setting `VITE_API_URL`.

Create `frontend/.env`:
```
VITE_API_URL=http://localhost:3001
```

## Production Build

- Frontend (Vite build outputs to `frontend/dist`):
```
cd frontend
npm run build
```
- Backend:
  - The current backend serves only the API. Use a static host (e.g., Netlify/Vercel/S3) for the frontend `dist/` or configure Express static hosting if desired.

### Example: Serve frontend `dist` via any static host
Upload `frontend/dist` to your static hosting provider and set `VITE_API_URL` at build time to your API URL.

### Example: Run backend in production
```
cd backend
npm i
npm run start
```
Set env variables as needed:
- `PORT` (default `3001`)

## API

Base URL: `<API_URL>` (local is `http://localhost:3001`)

- `GET /api/products` → returns `{ products: [...] }`
- `POST /api/checkout` → body `{ items: [...] }`, returns `{ success: true, message, items }`

## Frontend Env Vars

- `VITE_API_URL`: Base URL to the backend API. The code falls back to `http://localhost:3001` if not set.

## Deployment Notes

- Ensure CORS is allowed from your frontend origin (backend uses permissive `cors()` by default). Harden it for production by specifying allowed origins.
- Use a process manager (e.g., `pm2`) or your platform’s runtime for the backend.
- Never commit secrets. Example env files can be added as `*.env.example`.

## Scripts

- Frontend: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`
- Backend: `npm run dev`, `npm run start` 