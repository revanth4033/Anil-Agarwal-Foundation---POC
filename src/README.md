# AAF Homepage (in development)

The whole homepage is one page. Each new section is added to `index.html` below the previous one.

| File | Purpose |
|---|---|
| `index.html` | The homepage. Sections are marked `SECTION 1 · …`, `SECTION 2 · …` in page order. |
| `styles.css` | Shared styles plus one numbered block per section, appended in page order. Loads after `assets/brand/brand-tokens.css`. |
| `main.js` | Mobile menu, hero video, programme index, tabs, story and resource filters, film play buttons. No dependencies. |

## View
From the project root, run `python3 -m http.server 8765`, then open http://127.0.0.1:8765/src/index.html

**Heading colour:** every heading and card title on a light surface uses a soft near-black, `--heading-ink: #1d1d1f`, defined in `styles.css` block 99. Headings on dark surfaces stay white. The brand tokens are unchanged.

**Laptop scale:** the page is designed on a 16-inch laptop screen (about 1728 × 1000 visible). On smaller laptop screens the whole page scales down in proportion (`zoom` on `html`, set by `--z` in `styles.css` block 1a), so each section looks the way it does on the 16-inch screen and the layout never changes. Steps: 1 at 16 inches, 0.92, 0.86 at 14 inches, 0.8 at 13 inches (1440 × 790), 0.75 at 1280 wide or in short windows. This applies only from 1100px wide; tablet and mobile are untouched. Any size set in viewport-height units must be divided by `--z` (see the hero).

**Vertical rhythm:** one spacing system for every section, set as tokens at the top of `styles.css`. Related items sit close, and each step out to a less related item adds space:
- 12px from eyebrow to heading (`--gap-eyebrow`)
- 20px from heading to its supporting text (`--gap-intro`)
- 40px from the heading block to the section content (`--gap-content`)
- 120px between sections on the same surface (`--section-pad` 64 + `--section-lead` 56)
- 80px inside a coloured band and after one (`--band-pad`)

Section headings are 40px. Body text is 16px.

## Sections so far
0. **Header:** a floating pill. It is sticky with a 16px gap above, centred at content width, with a white fill (slightly translucent with a backdrop blur), a hairline edge and a soft shadow. The links are centred and Contact / Collaborate is a filled pill. Below 1100px the links collapse into a rounded card under the pill. In-page anchors use `scroll-margin-top` so they land below it.
1. **Hero (full video banner):**
   - The Nand Ghar film fills the banner edge to edge (full viewport height, 640 to 920px) and runs up behind the floating header.
   - The headline, lead and actions sit on the footage at the lower left.
   - Four figures run below them across the left half of the banner: 400,000+ Children, 10,000+ Centres, 16 States, ₹5,000 cr Five-year plan. Fine vertical white lines divide them (requested in the design review).
   - A navy gradient from the bottom and the left keeps the white text legible. The film loop is in `assets/videos/`.
   - ⚠ The four figures were supplied in the design review (17 Nov 2026). Confirm the numbers and their reporting period with AAF before launch.
2. **Who we are:**
   - The film still is on the left. The eyebrow, headline, purpose and description are stacked on the right.
   - The image takes the text column's height, so both columns share a top and a bottom edge.
   - The image is `assets/images/who-we-are-film-still.jpg`, a still at 13.9 s from the same official Nand Ghar film as the hero.

**Shared band (Sections 2 and 3):** "Who we are" and the Giving Pledge sit together on one full-width Pale Blue band, like the Soft Sage band of Section 6, so the page alternates between plain and banded stretches.

3. **Anil Agarwal’s Giving Pledge ("The Power of Giving"):**
   - A display "75%" sits with the headline and body beside it, and a panoramic Nand Ghar image strip runs below.
   - The image is **temporary**: `assets/images/giving-pledge-temp-nand-ghar-dawn.jpg`, a Nand Ghar film still. The brief calls for a mother and child at an Anganwadi in early morning light.
   - ⚠ The 2021, 2014 and 75% claims still need client verification.

4. **Turning purpose into progress ("Widening circles"):**
   - Three nested planes grow from one shared bottom-left corner: 01 is the Deep Navy core, 02 is a wider pale-blue plane, and 03 is the white field that also holds the heading.
   - Each step's text sits where the smaller plane leaves room, so the steps climb up and to the right.
   - The numbers grow with their planes: 56, then 80, then 112px.

5. **Our programmes:** rebuilt after the client review as five equal cards; see "Section 5: Our programmes (rebuilt)" below.
6. **People behind every number:** redesigned after review as a scroll-turned wheel of photo cards; see "Section 6: People (redesigned)" below.

7. **Overall Impact. ("Stepped tiles"):**
   - **Real figures**, supplied by the project team on 17 Nov 2026. They match the "Impact Created" block on vedantalimited.com.
   - Four rows of light brand-tinted tiles widen as they go down. The heading sits in the open top-left corner, and each row opens with a Nand Ghar film still.
   - **Box size follows the figure.** The rows run from the smallest figures to the largest:
     - warm neutral: three small boxes (169,020 · 114,950 · 42,575)
     - sage: two medium boxes (522,731 · 327,888)
     - white: one large box (1,699,665)
     - pale blue: the widest box (13,316,860)
   - The number sits on top with its line below. Every figure is the same size (Lora 28px).
   - **Sunflower motif, scaled to the figure:** the Nand Ghar sunflower line drawing from Section 4 grows from each wider tile's bottom edge. Medium tiles get half-open flowers, the large tile blooms, and children a full wall in bloom. The small tiles stay plain. It is decorative only (`aria-hidden`) and reuses Section 4's SVG symbols.
   - Descriptions are regular weight with no bold.
   - **Count-up:** figures count up once when first in view (`initCountUp`). This is skipped under reduced motion.
   - ⚠ **Children:** supplied as 13,316,860, but the Vedanta page shows 13,316,861. The reporting period also needs confirming.
   - The heading changed to "Overall Impact." as supplied; the content map still has the old heading and five indicators.
8. **Stories of change (merged with Films and videos):** see "Section 8: Stories of change (merged)" below.

9. **Leadership that gives with intent:**
   - A magazine spread. The Chair leads: a tall portrait rises above a pale-blue panel that carries the quote at display size. The Trustee and Head of Programmes follow as a pair of smaller portrait-and-text profiles.
   - **Profiles 1 and 2 are real people:** Anil Agarwal (Chair slot) and Priya Agarwal Hebbar (Trustee slot). Names, designations and photos come from vedantalimited.com.
   - The designations are their official Vedanta titles, since the site does not state their AAF roles. The AAF roles are kept in `data-role` and need client confirmation.
   - **Profile 3** ("Kavita Nair", Head of Programmes) is fictional sample content with a temporary stock portrait. No official source names this role.
   - ⚠ **All three quotes and mission lines are dummy text** (`data-dummy="true"`), including those beside the two real people. They are not their words. Replace them with client-approved text before launch; the project rules forbid invented leadership quotes on the live site.
   - ⚠ Anil Agarwal also appears in Section 3 (Giving Pledge).
   - Per-portrait crops are set in `styles.css`. Priya Agarwal Hebbar's studio cut-out uses `mix-blend-mode: multiply` on a pale-blue frame, so its white background takes the frame colour.
10. **Reports and resources:**
   - A shelf of publication covers. The annual report is the large cover; the other six sit beside it in two rows.
   - Surfaces show the type: brand solids for reports, Soft Sage for the case study, white for research and policy, Charcoal with a play marker for the film. Document covers have a folded corner.
   - **Filters:** eight single-select chips (`initResourceFilters` in `main.js`). A type filter shows that one cover as a full-width banner.
   - ⚠ **Sample content** (`data-dummy="true"`): all seven titles and dates are fictional. They are not real AAF publications.
   - ⚠ No files or film exist yet. Each action is `href="#"` with `data-pending-link`, which `main.js` stops from navigating. Remove the attribute when the real link is added.
   - The year in the annual report title uses a hyphen (`2025-26`), and the description uses a comma where the wireframe has an em dash.

11. **Films and videos:** merged into Stories of change after review (the three films are "Watch" stories there). The footer link now goes to `#stories`.
12. **News and press:**
   - The featured photograph runs wide on the right, with a white text panel overlapping its left edge.
   - Four dated items follow in a two-column dateline, with both columns aligned row by row. Type markers: press release (blue dot), event (green dot), media coverage (navy ring), announcement (blue ring).
   - ⚠ Every date, headline and the featured summary is **sample content**; none was published.
   - There are no links, CTA or filter, as in the wireframe.
13. **Collaboration:**
   - The five partner types are five overlapping circles in a ring (`mix-blend-mode: multiply`). The colour deepens where they overlap, and an AAF Green dot marks the centre where all five meet.
   - The invitation and a large "Partner with us" button sit on the left.
   - ⚠ "Partner with us" has no destination (`data-pending-link`).
   - ⚠ The contact details are **sample placeholders** (`data-dummy="true"`). They are plain text, not links.

14. **Footer ("The closing page"):**
   - A pale-blue sheet with rounded top corners rises out of the page. It's light on purpose, so both original full-colour logos sit on it unmodified, and a thin Deep Navy strip holds the copyright and legal links.
   - The strapline is set large (Lora 40px) as the page's closing line, under the AAF logo and a small "Anil Agarwal Foundation" label.
   - **Navigation:** four columns below the statement (label above a vertical list of links). The fourth column, Get Involved, starts exactly under Contact.
   - **Contact:** contact details and four outline social icons sit on the right.
   - **Emblem:** the five Collaboration circles return as a faint outline emblem in the bottom-right corner, cropped by the sheet's edge.
   - **Link destinations:** footer links that match a section on this page jump to it. Areas of Work go to `#programmes`, and Contact us goes to the footer's contact block.
   - ⚠ "Our footprint", the four social links and the three legal links have no destination yet (`data-pending-link`).
   - ⚠ The contact details are **sample placeholders** (`data-dummy="true"`), shown as plain text.
   - The copyright year sits in one `<span data-year>`.
   - Content comes from the project team's footer brief. That brief supersedes the content map's §14 link groups, social list (X → Facebook) and legal labels.

## Theme: light and dark bands

The client liked the clean, elegant look but wanted some deep, muted shades for depth, in the manner of the Gates and Rockefeller Foundation sites (review, 21 Nov 2026).

**Which sections are dark.** A second pass (senior review, 23 Nov 2026) found the page still read as light pastel: only three bands were dark, the first of them five sections down, and the light sections were tinted pale blue and sage. Now about half the page is dark, light and dark alternate, and no two flat dark bands touch:

| Section | Ground |
|---|---|
| Hero | dark (film) |
| Part of the Vedanta Group | white |
| **Who we are + Giving Pledge** | **Deep Navy, one band, with a faint AAF Blue glow behind the 75%** |
| Turning purpose into progress | white |
| Our programmes | Warm Off-white |
| **People** | **Deep Navy, with a faint AAF Blue glow behind the cards** |
| Where we work | white; the country is drawn in pale blue, the lit states in AAF Blue |
| **Overall Impact** | **deeper navy; the tiles become translucent panels that brighten row by row, and the widest row is AAF Blue** |
| Stories | white |
| **Leadership** | **Deep Navy; the Chair's panel is a soft lighter plane** |
| Resources | white |
| News | Warm Off-white |
| **Collaboration** | **Deep Navy; the circles become soft blue and green light that brightens where they overlap** |
| Footer | stays light (the AAF logo's blue lettering needs a light ground), on a navy base so its rounded top flows out of Collaboration |

**Light sections.** No pale blue or sage bands any more: white, or the brand's Warm Off-white (#F7F8F4) for a quiet change of surface. Pale blue stays only as small accents (chips, hovers, the map, the Programme report cover). Headings on light surfaces use Deep Navy (`--heading-ink`), so light and dark bands share one ink.

**Colours.** Only brand colours are used: `--dark-navy` (#183d5b, the palette's Deep Navy) and `--dark-deep` (#12304a, one step deeper). On dark:
- text is white or soft white (`--on-dark`, `--on-dark-soft`);
- eyebrows and labels use `--on-dark-accent` (#9cc4e6, AAF Blue lifted, 7.4:1 on Deep Navy);
- buttons turn white;
- focus rings turn white.

**Code.** The tokens are in block 1 of `styles.css` and the rules in block 24 (kept last, so it overrides the light defaults).

## Section 1b: Part of the Vedanta Group

This section was added after the client review and sits between the hero and Who we are. It covers only the relationship with Vedanta, with no programmes, since those have their own section.

**Layout.** One band in two halves:
- **The Group** (warm): Vedanta logo, "A leading global producer of metals, critical minerals and technology." and its operating regions.
- **The Foundation** (white): AAF logo, the published vision and the ₹5,000 crore commitment.

A round knot holding a sunflower sits on the seam. The bottom lines of the two halves align across the seam.

**Copy sources.** The copy comes from vedantalimited.com and is marked `data-provisional`. Confirm with the client:
- the relationship wording;
- that the ₹5,000 crore figure is current.

Code: block 9b in `styles.css`. Code comments keep the original wireframe section numbers, so this one is "1b".

## Section 6b: Where we work (map)

This section was added after the client review, between People and Overall Impact, on a pale-blue band.

**Layout.**
- **Left:** a map of India. Every state is soft white, and the eight states with a named initiative are AAF Blue. Each lit state carries round AAF Blue pins: house (Nand Ghar), plus (Healthcare), paw (Animal welfare), trophy (Sports academy).
- **Right:** the eyebrow and heading, then four figures. The two columns are equal and centred on one line, and the figure rows line up with the heading's left edge:
  - 10,000+ Nand Ghar centres;
  - 170-bed BALCO Medical Centre;
  - 3 states with animal welfare shelters;
  - 3 states with sports academies.

**Interaction** (`initMap()` in `main.js`).
- Hovering or focusing a figure keeps only that initiative's states and pins lit. Clicking holds the choice; clicking again releases it.
- Hovering a lit state or its pin shows a small label with the state and its initiatives.

**Small screens:** the heading comes first, then the map, then the figures.

**Map data.** "States/Admin2" by DataMeet India (https://github.com/datameet/maps), CC BY 4.0, following the Survey of India outline including Jammu & Kashmir and Ladakh.
- I converted and simplified it to an inline SVG of about 80 KB, keeping all 36 states and union territories, including the island groups.
- The licence requires a credit. It sits as a small line in the footer strip, next to the copyright, rather than under the map (moved at review).
- The conversion script is not in the repo. Regenerate the SVG from the shapefile if the boundaries ever need updating.

**Still to confirm:**
- **States and figures:** the data comes from the Foundation's presentation slide (20 Nov 2026) and is marked `data-provisional`.
- **"16 states":** the slide names only six Nand Ghar states, so only those six are lit. The full list is needed.
- **Heading:** "Across India, for a brighter tomorrow." is the slide's own line. Confirm it is approved copy.
- **Map depiction:** the client's legal team should confirm it before launch.

## Section 8: Stories of change (merged)

Stories and Films and videos are now one section. It sits where Stories was, on the light background.

**Layout.**
- **Featured, left:** BALCO Medical Centre (chosen at review), a read story with wireframe placeholders. The photo is temporary stock.
- **List, right:** three supporting stories show in the default view: TACO (watch), Vedanta Sports (read) and Nand Ghar (watch). Two more appear under the filters: Vedanta Sports (watch) and Vedanta Foundation (read).
- **Films:** the three former films are "Watch" stories with a play marker. Their sample titles are kept (`data-dummy`), and no film files exist yet.

**Filters** (`initStoryFilters` in `main.js`). Both work together:
- programme chips, in the Programmes order;
- a small All / Read / Watch switch on the right.

Any filter shows the matching stories as wide rows. A combination with no story shows a pending note.

**Removed:**
- the Films section, its CSS (old block 19) and the film player script;
- the Culture chip;
- the old chip names. "Sports programme", "Healthcare programme" and "Education and Livelihood" are now "Vedanta Sports", "BALCO Medical Centre" and "Vedanta Foundation".

## Section 5: Our programmes (rebuilt)

The section is now a row of five expanding photo cards, in this order: TACO, Vedanta Sports, Nand Ghar, BALCO Medical Centre, Vedanta Foundation. TACO starts open.

**Open and closed cards.**
- One card is open, taking 4.6 times the width of each slim card (at 1440px, 520px against 113px). It shows:
  - the area chip and an arrow badge across the top;
  - the name (32px) at the foot;
  - the content-map description;
  - the impact figure (28px) and its label.
- The other cards stay slim and show the name only (20px), over the photo with a navy fade at the foot.

**Interaction.** Hovering or tabbing to a card opens it, and it stays open after the pointer leaves. The width eases over 0.7s, and the extra text fades in once the card has room. TACO starts open, including without JS. Code: `initProgrammes()` in `main.js`.

**Small screens.** Below 960px the cards stack, all open.

**Figures:**
- 4 Lakh children impacted;
- 60,000 animals treated;
- 180+ medals won;
- 45,000 patients treated;
- 20,000+ skilled annually.

**Still to confirm:**
- Culture is not shown. It can return as a sixth card.
- The "Goal" lines are not shown.
- Four of the photos are temporary stock.

## Section 6: People (redesigned)

The layout is simpler and has one interaction, modelled on the "real strength of change" section of the Adani Foundation homepage.

**How it works on desktop** (960px and wider, with motion allowed):
- The section holds in place, centred in the window, while you scroll through it, about 0.9 screen per turn. The stage is only as tall as its content, so the band keeps normal spacing above and below.
- Four photo cards turn through three positions: large in the centre, small and faded at the top left (the previous group), and small at the bottom right (the next group).
- Cards ride a slight arc as they pass the centre.
- The two soft circles behind the cards each hold a faint sunflower head (no stem). The two flowers turn slowly in opposite directions as the wheel turns.
- Each group rests in the centre for a moment.
- On the left, the centre group's story fades out and the next fades in: name, challenge, change and reach figures, centred beside the cards.
- Clicking a side card brings it to the centre. The cards grow with the window height, from 420px to 560px tall.
- Quotes and the step links were removed at review (21 Nov 2026).

**Fallback:** below 960px, under reduced motion, or without JS, each group is a plain photo-and-story row.

**Content.**
- **Young children:** the wireframe's placeholder sentences, plus **dummy** reach figures (15 / 120 / 2,500), marked `data-dummy`. Replace them before launch.
- The other three groups use the wireframe's placeholder sentences and sample reach figures (`data-dummy`), because no content was supplied for them.
- Photos: Young children is a Nand Ghar film still. The other three groups use temporary Pexels photos.

Code: `initPeople()` in `main.js`, block 14 in `styles.css`.

## Hero: initiative slides

The hero rotates through five initiatives, in this order by review (23 Nov 2026): TACO (01, where it opens), Vedanta Sports (02), Nand Ghar (03, the only real film), BALCO Medical Centre (04) and Vedanta Foundation (05).

**The rail.** A rail along the bottom names all five:
- The active slide's AAF Green line fills while it plays: 10s for the film, 7s for the others. The next slide then crossfades in.
- Clicking a name jumps to that slide.
- There is no pause button (removed at review).

**Footage.**
- Only Nand Ghar (03) has real footage today. Its button carries `data-film`; the video stays paused (`data-off`) until its slide comes round.
- TACO opens the hero, so its still loads with the page (`src`, not `data-src`) and is shown from the start.
- The other four slides show the programme stand-in stills (Pexels, `data-temp-image`, `data-provisional="film to come"`) with a slow drift.
- Each film will replace its still in development.

**Behaviour rules.**
- Rotation holds while keyboard focus is in the rail.
- Rotation holds while the hero is off-screen.
- Under reduced motion it never rotates on its own.

**Copy per slide** (supplied by the project team, 23 Nov 2026). Each slide has its own headline, body, two buttons and four figures, in a `.hero__pane[data-pane]` matching the rail button's `data-slide`. All five panels share one grid cell, so the banner keeps the tallest one's height; they crossfade with the slide and the text rises in again. Inactive panels are `inert` and `aria-hidden`. Figure labels always take two lines and the four figure columns have a fixed width, so the figures and their dividers stay on the same line as the slides change. The page's h1 is the Foundation's name (visually hidden), because the visible headline changes; each slide's headline is an h2. Rotation also holds while keyboard focus is on a slide's buttons.

**Open point.** The figures and the button destinations are to be confirmed by the client; the buttons have no destinations yet (`href="#"`).

Code: `initHeroSlides()` in `main.js`, block 8b in `styles.css`.

## Motion and scrolling

Everything lives in `initMotion()` (`main.js`) and block 23 of `styles.css`. It is all switched off under reduced motion: the page then scrolls natively and nothing is hidden.

- **Smooth scrolling:** Lenis 1.3.26 (jsDelivr, in `<head>`) eases mouse-wheel scrolling (`lerp: 0.085`). Touch scrolling stays native. In-page links glide to their section and land below the header. If the CDN fails, everything else still runs.
- **Reveals (once, on first view):**
  - Section headings rise word by word out of a mask.
  - Eyebrows and text fade up.
  - Card groups stagger in, 90ms apart.
  - Photographs fade in and settle from a 12% zoom.
- **Scroll-linked:**
  - Large photographs drift (parallax, ±5%, drawn at 114%).
  - The hero film drifts and the hero text fades as you scroll away.
  - The sunflower drawings sway ±3° from the stem.
- **Header:** the pill tucks away while scrolling down and comes back when you scroll up or tab into it.

To tune or remove an effect, edit the `REVEAL` lists or the `update()` function in `initMotion()`.

## Placeholders still on the page
Square brackets were removed from placeholder text at the project team's request, so placeholders now look like real copy. Find them in `index.html` by attribute:
- `data-placeholder="true"`: wireframe placeholder sentences, titles, quotes and names.
- `data-dummy="true"`: invented stand-in numbers and sample content (Section 6 reach figures and testimonial, and the sample content in Sections 8 to 13).
- `data-provisional="true"`: unconfirmed figures, including the Culture programme's `1 Lakh` figure.
- `data-temp-image`: temporary stock photographs.

Desktop is the current focus (designed at 1440 to 1728 wide; smaller laptops scale down, see "Laptop scale"). Below 960px the sections simply stack and haven't been designed yet.

`src/explorations/` holds the earlier standalone explorations, kept for reference. The homepage doesn't use them.
