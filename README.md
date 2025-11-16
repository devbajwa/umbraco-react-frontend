# Umbraco React Frontend

This React application serves as the frontend for the headless Umbraco project. It renders content that is fetched from the Node API. The frontend is a simple and clean project written with React, Tailwind CSS, and React Router.

## About This Frontend

The application displays:

- Home Page content (title, subtitle, hero section)
- A grid of projects
- Individual project detail pages

All content is fetched from the Node API, which means nothing is hard coded. Everything is fully driven by the CMS.

## Folder Structure

frontend/
src/
components/
ProjectCard.jsx
pages/
Home.jsx
ProjectDetail.jsx
router/
index.jsx
api/
index.js
App.jsx
main.jsx

This structure keeps components, pages, routing, and API calls separate and easy to follow.

## How The App Works

1. The app starts by calling the Node API.
2. It fetches both the home content and the list of projects.
3. Project tiles on the home page link to individual detail pages.
4. Each slug is matched through React Router.
5. The app displays images, HTML markup, and metadata that came from the CMS.

## How To Run Locally

1. Install dependencies:
   `npm install`
2. Create a `.env` file with:
   `VITE_API_BASE=http://localhost:4000`
3. Start the development server:
   `npm run dev`
4. The frontend will be available at:
   `http://localhost:5173`

## Version Info

- React 18
- React Router
- Tailwind CSS
- Vite
