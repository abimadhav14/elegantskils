# Elegant Silks & Sarees Store

React + Vite frontend, Spring Boot backend, **PostgreSQL** database. Product photos are stored locally in `frontend/public/products`, so they are served with the website and do not rely on third-party image hosts.

## Local run (without Docker)
1. Install PostgreSQL 16+ and create the database: `CREATE DATABASE elegant_silks;`
2. From `backend`, set `DB_USERNAME`, `DB_PASSWORD` if your local credentials differ from `postgres/postgres`, then run `mvn spring-boot:run`. API: `http://localhost:8080/api/products`.
3. From `frontend`, run `npm install` then `npm run dev`. Website: `http://localhost:5173`.

## Docker (easy full-stack run)
1. Install Docker Desktop.
2. Copy `.env.example` to `.env` and set a secure DB password.
3. From this project folder run `docker compose up --build`.
4. Open `http://localhost`. PostgreSQL, backend, and frontend/Nginx start together. Nginx serves the React app and proxies `/api` to Spring Boot.

## PostgreSQL details
The backend uses PostgreSQL JDBC and the PostgreSQL Hibernate dialect. `database/schema.sql` is the optional manual schema script; Hibernate also creates/updates the tables at startup. Initial catalogue inserts are idempotent (`ON CONFLICT DO NOTHING`). The identity sequences are synchronized after inserting fixed catalogue IDs.

## Images
Product image files live in `frontend/public/products`. Paths in the catalogue are `/products/<filename>`. `ProductImage.jsx` resolves them through Vite's base path, includes lazy loading and a fallback image. Docker/Nginx uses SPA routing and serves local product files; no remote image host is required. Existing flyer photos were upscaled 2x and mildly sharpened for display (this improves presentation, but cannot recover original detail missing from the flyer). Replace with original product photos when available for true HD quality.

## Frontend build
`npm ci` then `npm run build`.
