# Vider Rentals

A production-ready marketing and catalog site for **Vider Rentals**, a professional video gear rental service. The app is built with React, TypeScript, Vite, React Router, and Tailwind CSS with a bespoke dark theme tailored for broadcast teams.

## Features

- Branded launch loader with fade transition into the application
- Responsive layout with hero, about, and featured gear carousel on the landing page
- Gear catalog grid with reusable cards and availability badges
- Detailed gear pages with image galleries, key specs, and direct "Rent Now" actions
- Centralized Instagram contact link via configuration file
- Smooth page transitions, accessible navigation, and meaningful empty states

## Getting Started

```bash
npm install
npm run dev
```

The development server defaults to `http://localhost:5173`.

To create a production build:

```bash
npm run build
```

Preview the build locally with:

```bash
npm run preview
```

> **Note:** The project relies on Tailwind CSS. Ensure PostCSS is configured when integrating into other tooling.

## Project Structure

```
src/
  components/   # Reusable UI components and layout pieces
  data/         # Inventory seed data
  pages/        # Route-level pages
  App.tsx       # Routes and global layout
  main.tsx      # Application bootstrap
```

## Configuration

- `src/config.ts` exports shared configuration such as the Instagram URL used by the "Rent Now" buttons.
- Inventory data lives in `src/data/inventory.ts`. Extend or update this file to manage catalog content.

## Accessibility & UX

- All imagery ships with descriptive alt text.
- Keyboard navigation is supported across menus and the featured carousel (arrow keys and swipe on touch devices).
- External links open in new tabs with `rel="noopener noreferrer"` for security.

## License

This project is provided as-is for demonstration purposes.
