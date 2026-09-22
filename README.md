# CapNong storefront

React + TypeScript + Tailwind CSS, built with Vite from the approved CapNong Stitch design.

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local preview address. Pages use hash navigation, so static hosting works without rewrite rules:

- `#/` — Home, with custom SVG rescue-process illustrations.
- `#/nong-san-tuoi` — Search, category filters and price sorting.
- `#/combo-tui-mu` — Mystery box, fixed combos and build-your-own basket.

## Verification

```sh
npm test
npm run build
npm run preview
```

## Structure

- `src/design`: JSX sections converted from the approved homepage, original image references and rescue-process styling.
- `src/pages`: React page composition.
- `src/components`: Header, footer, product card, newsletter and accessible dialog.
- `src/catalog.ts`: Typed catalog, search and cart rules.
- `src/styles.css`: Compiled Tailwind directives and responsive component styles.
- `stitch-reference`: Original design and earlier HTML prototypes.

The cart is stored locally in the browser. AI, account, partner signup and payment are explanatory demos; no real order, email subscription, upload or payment is submitted. Newsletter confirmation is session-only. Product data, ratings, testimonials and marketing claims are illustrative content from the supplied design. Images and fonts currently load from external URLs and require internet access. Product images have a fallback when unavailable.

The HTML-to-JSX conversion was performed once during implementation. The application renders native React components, not an iframe or HTML injection; its build does not depend on conversion tooling or the Tailwind CDN.
