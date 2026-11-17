# Anil Agarwal Foundation: Working Brand Foundation

**Version 1.0 · 16 November 2026**
Companion to `AAF_PROJECT_CONTEXT.txt`. Tokens: `assets/brand/brand-tokens.css`.

This document records the **working** brand foundation for the AAF homepage project. It is not an official AAF brand guideline. Each item carries a status:

| Status | Meaning |
|---|---|
| **Working** | Agreed with the project owner for this project. Use as-is. |
| **Confirm** | In use now, but must be confirmed by the client before launch. |
| **Proposal** | Design starting point. Tune when applied to the UX wireframe. |

---

## 1. Logos

| File | Use | Dimensions / ratio | Source | Status |
|---|---|---|---|---|
| `assets/brand/aaf-logo.svg` | Primary logo for the AAF website | 125.68 × 51.06 (≈ 2.46 : 1) | Vector paths extracted unmodified from the cover of the official *AAF Social Impact Compendium 2023–2024* PDF on vedantalimited.com | **Working**, master file to **Confirm** |
| `assets/brand/vedanta-logo.svg` | Parent-brand reference only (e.g. "a Vedanta initiative") | 200 × 43 (≈ 4.65 : 1) | Original header SVG: `https://www.vedantalimited.com/img/vedanta-logo.svg` | **Working** |

**Rules**
- Use both files exactly as supplied. Do not redraw, recolour, optimise, re-export, crop or replace them.
- Always preserve aspect ratio: set only width *or* height, never both independently, and never stretch.
- The AAF logo is the primary identity. The Vedanta logo must never stand in for it, and Vedanta's visual style must not be copied.
- Place both logos on white or light neutral surfaces. Their placement on dark or photographic backgrounds is not defined yet.
- The **white Vedanta logo variant is not included**. It will be decided during footer design.
- Clear space, minimum size and approved logo variants are **not yet defined** (to **Confirm**). Until then, use as a working minimum clear space about the height of the "af" mark's counter on all sides, and keep the AAF logo at least 120px wide on screen so the wordmark stays legible. Both are **Proposals**.

---

## 2. Colour

### 2.1 AAF primary colours (**Confirm**)

| Token | Hex | RGB | Print source (CMYK) |
|---|---|---|---|
| `--aaf-blue`: AAF Primary Blue | `#0664A8` | 6, 100, 168 | C93 M62.9 Y5.9 K0.4 |
| `--aaf-green`: AAF Primary Green | `#75C044` | 117, 192, 68 | C58.6 M0 Y99.2 K0 |

These are screen conversions of the print colours in the official AAF Social Impact Compendium 2023–2024. They match Vedanta's own RGB web banner of the AAF logo to within a few RGB units. They **replace** the earlier PNG-sampled values `#2B63A4` and `#86BC58`, which are superseded and must not be used. They still need confirming against an official AAF digital brand guideline.

### 2.2 Vedanta colours (**Working**, reference only)

| Token | Hex | Note |
|---|---|---|
| `--vedanta-blue` | `#005298` | Exact fill in the official Vedanta SVG |
| `--vedanta-green` | `#71B32F` | Exact fill in the official Vedanta SVG |

Use these only where the Vedanta brand itself is referenced. Do not use them as AAF interface colours.

### 2.3 Supporting palette (**Proposal**)

| Token | Name | Hex | Intended role |
|---|---|---|---|
| `--color-white` | White | `#FFFFFF` | Dominant page surface, cards |
| `--color-offwhite` | Warm Off-white | `#F7F8F4` | Dominant alternate surface |
| `--color-warm-neutral` | Warm Neutral | `#F0EFE9` | Quiet section or card backgrounds |
| `--color-sage` | Soft Sage | `#EAF1E3` | Occasional supporting surface |
| `--color-pale-blue` | Pale Blue | `#E8EEF4` | Occasional supporting surface, secondary-button hover |
| `--color-navy` | Deep Navy | `#183D5B` | Headings, deep-contrast areas, primary-button hover |
| `--color-charcoal` | Charcoal | `#263238` | Body text |
| `--color-border` | Soft Border | `#DCE2E7` | 1px dividers and card borders |

No other colours are part of the system. Do not add tints, gradients or extra accents without approval.

### 2.4 Usage and balance (**Working**)
- **Neutrals dominate.** White and warm off-white carry most of the page. A rough starting balance is 70% light neutrals, 15% blue, 10% green and 5% deep accents. That's a guide, not a rule.
- **Blue** is the main brand anchor: primary actions, links, key highlights and focus states.
- **Green** is the complementary accent: small markers, rules, icons, highlights and the occasional supporting surface. **It is never used for text on light backgrounds.**
- **Navy and charcoal** carry readable text and deep contrast.
- **Sage and pale blue** are for occasional surfaces, not every section or card.
- Avoid big blue or green blocks on every section, random gradients and decorative colour.

### 2.5 Measured contrast (WCAG 2.x)

| Foreground on background | Ratio | Result |
|---|---|---|
| White on AAF Blue | 6.18 : 1 | Pass AA (all text) |
| AAF Blue on White | 6.18 : 1 | Pass AA |
| AAF Blue on Off-white / Warm Neutral / Sage / Pale Blue | 5.80 / 5.37 / 5.36 / 5.29 : 1 | Pass AA |
| Charcoal on White / Off-white | 13.16 / 12.34 : 1 | Pass AAA |
| Deep Navy on White | 11.31 : 1 | Pass AAA |
| White on Deep Navy | 11.31 : 1 | Pass AAA |
| Deep Navy on AAF Green | 5.05 : 1 | Pass AA |
| Charcoal on AAF Green | 5.88 : 1 | Pass AA |
| **AAF Green on White** | **2.24 : 1** | **Fail**: decorative use only, never text or essential UI |
| **White on AAF Green** | **2.24 : 1** | **Fail**: never put white text on green |
| Soft Border on White | 1.31 : 1 | Decorative divider only, so it can't be the only boundary of an input |

Never use colour alone to carry meaning.

---

## 3. Typography (**Working**)

| Role | Font | Used for |
|---|---|---|
| Primary | **Manrope** | Navigation, body copy, labels, buttons, statistics, cards, all UI |
| Editorial | **Lora** | Hero headline and selected editorial section headings only |

**Direction: restrained and sophisticated.** Lora is the occasional editorial voice, not the default heading font. Keep weights and sizes few.

### 3.1 Type scale (**Proposal**, to be tuned against the wireframe)

| Token | Mobile → desktop | Font / weight | Line height |
|---|---|---|---|
| `--font-size-h1` | 36 → 56px | Lora 400 | 1.15 |
| `--font-size-h2` | 28 → 40px | Lora 400 (selected) or Manrope 600 | 1.15 |
| `--font-size-h3` | 20 → 24px | Manrope 600 | 1.3 |
| `--font-size-h4` | 18px | Manrope 600 | 1.3 |
| `--font-size-lead` | 17 → 20px | Manrope 400 | 1.6 |
| `--font-size-body` | 16px | Manrope 400 | 1.6 |
| `--font-size-small` | 14px | Manrope 400/500 | 1.6 |
| `--font-size-label` | 13px | Manrope 600, optional uppercase with 0.06em tracking | 1.3 |
| `--font-size-stat` | 36 → 56px | Manrope 600/700 | 1.15 |

Sizes scale fluidly between about 360px and 1280px viewports using `clamp()`. Keep paragraphs to about 68 characters (`--measure-body`) and display headlines to about 22 characters (`--measure-heading`) to avoid awkward wrapping.

### 3.2 Font setup

The fonts aren't configured yet, because there's no website code. When implementation starts, load **only** these weights:

- **Lora:** 400 (add 400 italic only if the wireframe needs it)
- **Manrope:** 400, 500, 600, 700

**Option A: Google Fonts (simplest, no build step)**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Lora:wght@400&family=Manrope:wght@400;500;600;700&display=swap">
```

**Option B: Self-hosted (recommended for production, with better privacy and performance control)**

Both fonts are under the SIL Open Font License. Download the WOFF2 files (variable or static) from the official Google Fonts / upstream repositories into a `fonts/` directory and declare them:

```css
@font-face {
  font-family: "Manrope";
  src: url("/fonts/Manrope-Variable.woff2") format("woff2");
  font-weight: 400 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Lora";
  src: url("/fonts/Lora-Variable.woff2") format("woff2");
  font-weight: 400 700;
  font-style: normal;
  font-display: swap;
}
```

Either way:
- Use `font-display: swap`. Fallback stacks are defined in the tokens: `--font-primary` falls back to the system UI sans, and `--font-editorial` falls back to Georgia.
- Preload only the Manrope file (or files) used above the fold.
- Do not add a font-loading library.

The final choice between Option A and B is **Confirm**, and depends on hosting and privacy requirements.

---

## 4. Layout, spacing and shape (**Proposal**)

| Item | Token(s) | Value |
|---|---|---|
| Container | `--container-max` / `--container-wide` | 1280px / 1320px |
| Side gutter | `--container-gutter` | 16 → 40px |
| Grid | `--grid-columns`, `--grid-gap` | 12 columns, 16 → 32px gap |
| Section spacing | `--section-space` | 64 → 120px |
| Spacing scale | `--space-1` … `--space-12` | 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120px |
| Card padding | `--card-padding` | 20 → 32px |
| Border | `--border` | 1px solid Soft Border |
| Radius | `--radius-button`, `--radius-card`, `--radius-media`, `--radius-sm` | 8px, 14px, 14px, 4px |
| Shadow | `--shadow-sm`, `--shadow-md` | Minimal, navy-tinted, only when separation needs it |

Use only the spacing scale; no arbitrary margins. Every section aligns to the shared container.

---

## 5. Components: style principles (**Working**)

These are style rules only. No components have been built yet.

- **Cards (structured):** consistent padding and radius, a 1px soft border or a quiet neutral surface, well-cropped imagery, clear title, concise copy and a purposeful link. Hover and focus states are consistent. No heavy shadows, glassmorphism, thick borders or decorative icons. Don't force every section into the same card grid.
- **Primary button:** AAF Blue background with a white label, turning Deep Navy on hover. 8px radius and a visible focus ring.
- **Secondary button:** transparent or white background with an AAF Blue border and label, turning Pale Blue on hover. Same size as the primary button.
- **Text link:** AAF Blue, turning Deep Navy with an underline on hover and focus. An arrow only where it helps show navigation.
- **Focus:** a 2px AAF Blue outline with a 3px offset (`--focus-ring`), always visible for keyboard users.
- **Motion:** subtle and purposeful, at 150–400ms with standard easing. No parallax, bouncing or constant animation. All durations drop to 0 under `prefers-reduced-motion`.

---

## 6. Design principles (**Working**)

1. **Premium Editorial + Modern Impact:** refined typography and editorial image compositions, combined with structured, modular, contemporary layouts.
2. **Human-centred, credible, contemporary:** warm and inspiring, while staying institutional and trustworthy.
3. **Structured card layouts**, with visual variety between sections.
4. **Generous but purposeful whitespace.**
5. **Subtle borders, minimal shadows.**
6. **Consistent spacing, radius and typography** through the tokens.
7. **Authentic documentary photography:** real people and communities, natural light, respectful representation. Stock or generated images are placeholders only and are never presented as AAF programme evidence.
8. **Accessible contrast:** WCAG 2.2 AA as the working target.
9. **Subtle interactions and transitions** that respect reduced motion.

**The site must not look like** a generic NGO template, an industrial or investor-relations corporate site, a playful startup landing page or an over-decorated magazine.

---

## 7. Open items requiring client confirmation

1. Official AAF digital brand guideline, to confirm the screen values of AAF Blue `#0664A8` and Green `#75C044`.
2. AAF logo master file (AI / EPS / SVG) and logo usage rules: clear space, minimum size, approved variants (mono, reversed) and use on dark or photographic backgrounds.
3. Whether and how the Vedanta logo and the white Vedanta variant appear (to be decided during footer design), and the wording of the AAF–Vedanta relationship line.
4. Supporting palette hex values (currently proposals).
5. Final type sizes and line heights after they're applied to the wireframe.
6. Container width, spacing scale, radii and shadow values.
7. Font hosting method: Google Fonts or self-hosted.
8. Accessibility target (WCAG 2.2 AA assumed).
9. Final photography grading and crop rules.
