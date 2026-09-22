# GreenBasket Homepage Design

## 1. Goal

Build a polished, responsive React storefront homepage inspired by the provided GreenBasket reference image. The page should communicate freshness and trust at a glance, make product discovery easy, and provide a convincing ecommerce interaction demo without requiring a backend.

## 2. Scope and success criteria

In scope:

- A complete homepage from announcement bar through footer.
- Responsive desktop, tablet, and mobile layouts.
- Local mock data for categories, products, trust points, and testimonials.
- Search filtering over the visible product collection.
- Add-to-cart state with item count and lightweight feedback.
- Newsletter subscription state.
- Accessible semantic structure, labels, focus states, and image alt text.

Out of scope:

- Authentication, checkout, payment processing, routing to product detail pages, or a real API.
- Persistent storage, inventory validation, and server-side form handling.
- Pixel-identical reproduction of the source brand or its proprietary assets.

Success means a user can understand the store proposition within one viewport, browse the curated product collection, filter it by search, add an item to cart, and subscribe without page reloads. The layout must remain usable at narrow mobile widths.

## 3. Visual direction

- Brand palette: deep organic green for navigation and actions; leaf green for accents; warm ivory and soft cream for page surfaces; restrained yellow/orange for promotional emphasis.
- Typography: clean sans-serif with strong display hierarchy for hero and section headings.
- Components: lightly rounded cards, subtle borders/shadows, generous whitespace, restrained decorative leaf/organic motifs.
- Imagery: static external image URLs in the mock data layer, with meaningful alt text. No text is baked into imagery.
- The composition follows the reference rhythm: utility bar, main header/search, primary navigation, hero, trust strip, categories, product grid, value proposition, promotion, testimonials, newsletter, footer.

## 4. Component architecture

`App` owns the page-level interaction state and composes these focused sections:

- `Header`: utility bar, logo/brand, search input, account/cart controls, desktop navigation, mobile menu toggle.
- `Hero`: value proposition, primary/secondary CTAs, farm imagery.
- `TrustStrip`: five concise trust/value points.
- `CategoryRail`: category tiles with horizontal overflow on narrow screens.
- `ProductGrid`: product cards, result count/empty state, add-to-cart callbacks.
- `ProductCard`: image, category, name, short descriptor, price, action.
- `WhyChoose`: four supporting differentiators.
- `PromoBanner`: seasonal campaign CTA.
- `Testimonials`: review cards with ratings and customer identity.
- `Newsletter`: controlled email input and subscribed confirmation.
- `Footer`: brand summary, link groups, contact information, legal/payment note.

Keep content data in a typed module so visual components remain presentational. Use a small `CartItem` shape and a `Set`/record-based state for cart quantities. Avoid a global state library for this single-page demo.

## 5. Interaction and data flow

1. `Header` emits the current search term to `App`.
2. `App` derives filtered products by matching name, category, or descriptor case-insensitively.
3. `ProductGrid` receives the filtered list and an `onAddToCart` handler.
4. `App` updates cart quantities and exposes the aggregate count to `Header`; an ephemeral toast confirms additions.
5. `Newsletter` validates a non-empty email-like value, then switches to a success state without navigation.
6. Mobile navigation is local UI state in `Header`; opening it should not block page scrolling permanently.

Empty search results must show a clear recovery message and a reset action. Images should use `loading="lazy"` except the primary hero image, which should load eagerly.

## 6. Responsive behavior

- Desktop: constrained centered container, two-column hero, six-card product row, full navigation/footer columns.
- Tablet: retain two-column hero where space allows, reduce card columns, allow category/product rails to scroll horizontally.
- Mobile: stacked hero, compact header with menu drawer/dropdown, two-column product grid where readable, horizontally scrollable categories/testimonials, stacked newsletter form and footer groups.
- Interactive controls must have visible focus styles and touch targets of at least roughly 44px.

## 7. Technical choices

- Vite + React + TypeScript.
- Tailwind CSS for layout, responsive variants, and tokens.
- `lucide-react` for interface icons.
- No runtime backend; mock data and interaction state live in the app.
- Use an image URL list that can be swapped for local assets later without changing component contracts.

## 8. Verification

- Type-check/build with the project build script.
- Exercise the search, empty state/reset, add-to-cart count/toast, mobile menu, and newsletter success paths.
- Inspect the rendered page at desktop and mobile widths for overflow, contrast, and alignment.
- Confirm no placeholder `TODO` content remains in the delivered UI.
