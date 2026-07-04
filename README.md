# Pricing Card UI

A modern and responsive pricing section built with React, Vite, and Tailwind CSS.

This project presents four pricing plans with animated card entry and a monthly/annual billing toggle. Pricing data is served from a JSON file in the public directory and fetched at runtime.

## Highlights

- Clean, responsive pricing grid (mobile to desktop)
- Monthly and annual pricing toggle
- Staggered card entry animation
- Data-driven plans fetched from a JSON source
- GitHub Pages deployment workflow included

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- ESLint 10

## Project Structure

```text
pricing-card/
	public/
		pricing-plans.json
	src/
		components/
			Pricing.jsx
			PricingCard.jsx
		App.jsx
		main.jsx
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev`: Start Vite development server
- `npm run build`: Create production build in `dist/`
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint checks

## Data Source

Pricing plans are stored in:

- `public/pricing-plans.json`

The app fetches this file in `src/components/Pricing.jsx` using Vite's base URL:

- `${import.meta.env.BASE_URL}pricing-plans.json`

This ensures the fetch works both locally and on GitHub Pages project sites.

## Deployment (GitHub Pages)

This repository includes a GitHub Actions workflow at:

- `.github/workflows/deploy.yml`

Deployment flow:

1. Install dependencies
2. Build with Vite
3. Upload `dist/` as Pages artifact
4. Deploy via `actions/deploy-pages`

Vite base path is configured in `vite.config.js`:

- Uses `/pricing-card/` on GitHub Actions
- Uses `/` in local development

## Troubleshooting

- Blank page on GitHub Pages:
  - Confirm repository Pages source is set to GitHub Actions
  - Verify `vite.config.js` base path matches repository name
- Pricing cards not appearing after deploy:
  - Ensure `public/pricing-plans.json` exists
  - Ensure fetch uses `import.meta.env.BASE_URL`
- Deploy failed with `Deployment failed, try again later`:
  - Usually a transient GitHub Pages issue
  - Re-run the failed workflow from Actions

## License

This project is available for personal and educational use.
