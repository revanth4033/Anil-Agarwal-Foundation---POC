# AAF Who We Are: design exploration (desktop, 1440)

Two variations of the Who We Are section, each shown below the approved hero so you can judge how the page continues. Neither is wired into a homepage. Mobile and tablet aren't designed yet.

## View
From the project root, run `python3 -m http.server 8765`, then open:

- Compare: http://127.0.0.1:8765/src/explorations/who-we-are/index.html (side by side, or A or B alone, at a true 1440px width scaled to fit)
- Variation A: http://127.0.0.1:8765/src/explorations/who-we-are/variation-a.html#who-we-are
- Variation B: http://127.0.0.1:8765/src/explorations/who-we-are/variation-b.html#who-we-are

## Files
| File | Purpose |
|---|---|
| `who-we-are.css` | Shared: section spacing, label, type basics |
| `variation-a.css` | Editorial Statement layout |
| `variation-b.css` | Asymmetric Editorial Grid layout |
| `variation-a.html`, `variation-b.html` | Header and hero, then the section |
| `index.html` | Comparison harness (development only) |

The pages link `assets/brand/brand-tokens.css`, `../hero/hero.css` and `../hero/hero.js` without modifying them. The header and hero markup is a verbatim copy of `src/explorations/hero/index.html`, so if the hero changes, re-copy it.

## Content
The approved content is used verbatim: section label, heading, purpose statement and organisational description. The label displays in capitals via CSS only; the source text is still "Who we are". There's no JavaScript, imagery, icons, cards or CTAs.

## Shared decisions
- **Background:** the hero's warm off-white mat continues, with no section container.
- **Spacing:** about 160px from the bottom of the hero to the section.
- **Label:** the hero's film-link motif (green dot plus AAF Blue Manrope capitals).
- **Alignment:** both layouts are built on the hero's verticals: x = 80 (hero headline), 570 (the panel/video seam) and 1360 (the video's right edge).
- **Headline sizes:** 52px in A and 68px in B. These are section-local values, not tokens. The token scale has 56px (H1) and 40px (H2). 40px is too light for a statement, so a size needs to be agreed before build.
