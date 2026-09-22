---
name: AgriTech Harvest Earth
colors:
  surface: '#fcf9f1'
  surface-dim: '#dcdad2'
  surface-bright: '#fcf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3eb'
  surface-container: '#f1eee6'
  surface-container-high: '#ebe8e0'
  surface-container-highest: '#e5e2da'
  on-surface: '#1c1c17'
  on-surface-variant: '#42493c'
  inverse-surface: '#31312b'
  inverse-on-surface: '#f3f1e9'
  outline: '#72796b'
  outline-variant: '#c2c9b8'
  surface-tint: '#396a1f'
  primary: '#326318'
  on-primary: '#ffffff'
  primary-container: '#4a7c2f'
  on-primary-container: '#ddffc4'
  inverse-primary: '#9ed67d'
  secondary: '#7a573a'
  on-secondary: '#ffffff'
  secondary-container: '#fdceaa'
  on-secondary-container: '#795639'
  tertiary: '#765000'
  on-tertiary: '#ffffff'
  tertiary-container: '#966600'
  on-tertiary-container: '#fff2e4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b9f296'
  primary-fixed-dim: '#9ed67d'
  on-primary-fixed: '#082100'
  on-primary-fixed-variant: '#215106'
  secondary-fixed: '#ffdcc2'
  secondary-fixed-dim: '#ebbe9a'
  on-secondary-fixed: '#2d1601'
  on-secondary-fixed-variant: '#5f4025'
  tertiary-fixed: '#ffddae'
  tertiary-fixed-dim: '#ffba41'
  on-tertiary-fixed: '#281800'
  on-tertiary-fixed-variant: '#604000'
  background: '#fcf9f1'
  on-background: '#1c1c17'
  surface-variant: '#e5e2da'
typography:
  display-hero:
    fontFamily: Be Vietnam Pro
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 58px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

### Brand Personality & Mission
The design system powers an agri-tech initiative dedicated to rescuing cosmetically imperfect produce through AI valuation and direct-to-consumer commerce. The aesthetic harmonizes organic, tactile honesty with smart, precise algorithmic intelligence. It feels grounded in fertile soil, fresh, and deeply empathetic to farmers, while projecting crisp computational reliability through data visualization, batch tracking, and quality-scoring tags.

### Target Audience & Emotional Response
- **Audience:** Conscious consumers, eco-friendly households, culinary businesses looking for cost savings and sustainable ingredients, and local farmers seeking fair compensation for non-standard harvest yields.
- **Emotional Resonance:** Trustworthy, uplifting, natural, and guilt-free. Users should perceive beauty in natural variance ("imperfect produce, perfect nutrition") while feeling the speed, freshness, and algorithmic clarity of modern logistics.

### Design Movement
**Organic High-Tech & Tactile Warmth:**
- Earthy, warm-tinted neutral backdrops (organic canvas feel) paired with fresh agricultural greens and vibrant turmeric-gold accents.
- Soft, pillowed geometries (14–20px outer corner radials) evoking natural forms, balanced with structured metadata chips, micro-data indicators, and AI confidence badges.
- Smooth ambient lighting and low-elevation physical layering over harsh digital flat lines.

## Colors

### Color Hierarchy & System Roles
The color strategy avoids cold synthetic greens in favor of chlorophyll and sunlit foliage, grounded by fertile loam tones and illuminated with warm turmeric gold.

- **Primary Green (`#4A7C2F` / Variant `#6BA539`):** Represents vitality, verified food quality, fresh produce batches, primary navigation states, and core confirmation actions.
- **Earth Loam Secondary (`#6B4A2E` / Variant `#8B5E34`):** Represents provenance, soil origin, structural frameworks, secondary action buttons, and grounding anchors.
- **Turmeric Gold Tertiary (`#E8A62D`):** Reserved for urgency, AI rescue savings indicators, flash sales, discount tags, and rescue progress metrics.
- **Canvas & Surface Neutral (`#F7F4EC`):** A warm, unbleached cotton/rice paper tone serving as the default application canvas, reducing harsh optical glare compared to sterile `#FFFFFF`.
- **Card Surfaces:** `#FFFFFF` for primary elevated cards and `#FDFBF6` for nested or secondary container zones.
- **Typographic Tones:** Deep soil dark brown (`#2C2416`) for primary legibility and headings; warm peat bark (`#6E6656`) for metadata, hints, and secondary descriptions.

### Accessible Application
- Primary buttons in `#4A7C2F` must pair with white `#FFFFFF` text.
- Accent/CTA elements using `#E8A62D` must use `#2C2416` dark text to preserve strict WCAG AA+ contrast ratios.
- Avoid low-contrast green-on-brown combinations; maintain clear neutral card segregation.

## Typography

### Typographic Intent
**Be Vietnam Pro** delivers native diacritic rendering for the Vietnamese language, preventing broken accent marks or unaligned tone signs. Its open counters and geometric humanism bridge modern technological readability with an organic, friendly cadence.

### Hierarchy & Responsive Behavior
- **Diacritic Protection:** Line-height multipliers are explicitly pegged at 1.4× or above to accommodate stacked Vietnamese tonal marks (hỏi, ngã, nặng, sắc, huyền) without vertical clipping.
- **Numeric Distinction:** Key sale discounts, kilogram prices, and AI assessment scores utilize `700` and `800` weights with tabular spacing where relevant to enhance scannability.
- **Hero Scaling:** Hero and headline sizes dynamically drop on viewports beneath 768px (`display-hero-mobile`, `headline-lg-mobile`) to prevent awkward single-word wrapping in Vietnamese compound structures.

## Layout & Spacing

### Grid & Composition Strategy
The layout is built on a responsive 12-column system for desktop (`min-width: 1024px`), an 8-column system for tablet (`768px - 1023px`), and a 4-column system for mobile (`< 768px`).

- **Outer Margins:** Sized at `2rem` on desktop to allow the rustic `#F7F4EC` warm canvas to breathe. On compact mobile screens, margins condense down to `1rem` to preserve screen real estate for produce grids.
- **Vertical Rhythm:** Rooted in an 8px baseline rhythm (`space-xs` = 4px, `space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 40px).
- **Product & Data Densities:** Produce catalog cards run with an internal structural padding of `space-md` (16px), while nested AI diagnosis cards and nutrition panels use `space-sm` (8px) internal gaps to maintain information grouping.

## Elevation & Depth

### Ambient Loam Layering
This design system rejects flat, unshaded surfaces and harsh neon drop-shadows. Instead, elevation uses sunlit ambient diffuse shadows tinted with warm organic umber (`rgba(44, 36, 22, 0.06)` to `rgba(44, 36, 22, 0.12)`).

- **Base Layer (Canvas):** `#F7F4EC` serves as the foundation ground.
- **Layer 1 (Cards & Feed Panels):** `#FFFFFF` or `#FDFBF6` with a soft ground drop: `box-shadow: 0 4px 16px -2px rgba(44, 36, 22, 0.05), 0 1px 3px 0 rgba(44, 36, 22, 0.03)`.
- **Layer 2 (Interactive Floating & Hover States):** `box-shadow: 0 12px 24px -4px rgba(44, 36, 22, 0.08), 0 4px 8px -2px rgba(44, 36, 22, 0.04)`.
- **Layer 3 (Modals, AI Inspection Drawers, Sticky Bottom Cart):** `box-shadow: 0 20px 40px -8px rgba(44, 36, 22, 0.14)`.
- **Surface Separation:** Uses a subtle 1px border colored with unbleached parchment tint (`#EBE6DA`) instead of heavy border dividers.

## Shapes

### Roundedness Strategy
Following the physical nature of organic fruit, squash, and field crops, sharp 90-degree corners are systematically avoided:

- **Component Standard (`rounded` / 8px):** Checkboxes, form inputs, small micro-badges, and inner notification alerts.
- **Card Containers (`rounded-lg` / 16px to 20px):** Primary product rescue cards, AI inspection panels, farm profile modals.
- **Pill System (`rounded-full` / 9999px):** Status tags, flash discount labels, category filter chips, search fields, and primary floating action buttons.
- **Media Corners:** Farm photography and rescued produce shots always match their parent card's interior curvature (`12px` to `16px`).

## Components

### Buttons
- **Primary Action (Rescue Now / Add to Cart):** Solid `#4A7C2F` fill, text in `#FFFFFF`, font weight `700`, height `48px` (desktop) or `44px` (mobile), curvature `14px` or `rounded-full`. Hover state softens to `#6BA539`.
- **Secondary CTA (View Origin / AI Report):** Border 1.5px solid `#6B4A2E`, text `#6B4A2E`, background transparent or `#FDFBF6`. Hover state fills with `rgba(107, 74, 46, 0.08)`.
- **Highlight CTA (Flash Deal / Super Rescue):** Background `#E8A62D`, text `#2C2416`, font weight `700`.

### Chips & Badges
- **AI Assessment Chip:** Pill shape (`9999px`), background `#FDFBF6`, border 1px solid `#EBE6DA`, leading with an AI icon in `#6BA539`, label in `#2C2416` (e.g., "AI Đạt 94% dinh dưỡng").
- **Cosmetic Flaw Tag:** Soft gold background `rgba(232, 166, 45, 0.15)`, text `#8B5E34`, font weight `700`, font size `11px` (e.g., "Xấu mã nhẹ: Lệch size 10%").
- **Discount & Flash Badges:** Turmeric `#E8A62D` background, `#2C2416` bold text, slight negative rotation (-2deg) in product grid headers for retail punch.

### Cards
- **Produce Rescue Card:** Elevated white (`#FFFFFF`) surface, corner radius `18px`, padded `16px`. Features an upper image container with a 4:3 aspect ratio, rescue tag overlay, farm source metadata, standard strikethrough price, and heavy bold sale price in `#4A7C2F`.
- **AI Quality Breakdown Card:** Nested `#FDFBF6` container with a 1px border in `#EBE6DA`. Displays visual radar charts or percentage bars for freshness, sugar sweetness (Brix), and outer cosmetic variance.

### Input Fields & Search
- **Search Bar:** Pill-shaped (`rounded-full`), height `48px`, background `#FFFFFF`, border 1.5px solid `#EBE6DA`. Placeholder text `#6E6656`. Focus state applies a `#4A7C2F` ring with a 3px diffused glow `rgba(74, 124, 47, 0.2)`.
- **Standard Form Inputs:** Rounded `12px`, background `#FFFFFF`, label set above input in `#2C2416` (`label-lg`).

### Checkboxes & Radios
- **Checkbox:** `20px × 20px`, corner radius `6px`. Unchecked border 1.5px in `#6E6656`. Checked state fills `#4A7C2F` displaying a crisp white checkmark icon.
- **Radio Button:** `20px × 20px`, circular. Checked state features a `#4A7C2F` border and an inner `#4A7C2F` dot indicator.

### Lists & Produce Bins
- **Batch Rescue Feed:** Horizontal cards with image thumbnails (`80px × 80px`, `rounded-lg`), status badges (e.g., "Còn 42kg"), countdown timer, and quick single-click add-to-cart buttons.