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

5. **Our programmes / Areas of work:**
   - **Featured tier:** Nand Ghar and TACO are large image-led cards (7 : 5). The impact figure sits on a tab cut into the photo's lower-right corner.
   - **Second tier:** Sports, Healthcare, Culture, and Education and Livelihood form an editorial index. The four rows share one image stage; the row you hover, tap or tab into shows its photograph (`initProgrammeIndex` in `main.js`).
   - Featured card figures are confirmed (19 Nov 2026): Nand Ghar **4 Lakh children impacted**, TACO **60,000 animals treated**.
   - **Second tier (19 Nov 2026, from the project team):** Vedanta Sports (180+ medals won), BALCO Medical Centre (45,000 patients treated; specialist cancer care), and Vedanta Foundation under Education and Livelihood (20,000+ skilled annually).
   - ⚠ Culture's `1 Lakh` is still an unconfirmed wireframe placeholder (`data-provisional="true"`).
   - ⚠ Five photos are temporary stock (`data-temp-image`); see `assets/images/CREDITS.md`.
   - Each featured card carries its area of work as a chip on the photo's top-left corner (Women and Child Development, Animal Welfare). The description runs the full width of the image.
   - ⚠ The Explore and View-all links have no destinations yet (`href="#"`).
6. **People behind every number:**
   - A Soft Sage band with four tabs (`initTabs` in `main.js`; arrow keys, Home and End work).
   - **Young children** is the only panel the wireframe supplies. Its sentences, quote and name are the wireframe's own placeholders, shown without square brackets.
   - ⚠ The testimonial (quote, "Sunita Devi, Rampur, Rajasthan") is a **dummy** written for design review (`data-dummy="true"`). It is not a real parent. Replace it with an approved, consented testimonial before launch.
   - ⚠ The reach figures (15 States, 120 Districts, 2,500 Communities) are **dummy data** added for design review (`data-dummy="true"`). The wireframe shows `XX`. Replace them with real figures before launch.
   - The other three tabs show a "Content pending" state. Nothing is invented for them.
   - The testimonial attribution is shown without its leading dash, in line with the no-em-dash rule for the page.

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
8. **Stories of change:**
   - **All:** the featured story is one image card on the left. Its chip ("Featured · Nand Ghar · Read · 6 min") sits top-left, and the title (one line), quote, attribution and link sit on the photo at the bottom over a dark gradient. The card stretches to the height of the three supporting stories on the right, so both columns match. The fourth story (Healthcare) appears under its own filter. "Watch" stories carry a small play marker. Programme filters keep the image-and-text split.
   - **Filters:** seven single-select chips (`initStoryFilters` in `main.js`). A programme filter shows only that programme's stories, each as a wide image-and-text split.
   - **Culture programme:** the wireframe supplies no story, so its filter shows a "Story pending" panel. That wording is set in `main.js` and is not approved copy.
   - ⚠ Story titles, quotes and the attribution are the wireframe's placeholders, shown without square brackets. No stories, names or quotes are invented.
   - ⚠ The four supporting images are temporary stock; see `assets/images/CREDITS.md`. The featured image is an authentic Nand Ghar film still.
   - ⚠ "All stories", "Read the full story" and the story links have no destinations yet (`href="#"`).

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

11. **Films and videos:**
   - A full-bleed Charcoal "screening room" with an expanding reel: one film is open (wide and tall), the other two are collapsed panels on the same baseline. Nand Ghar is open by default; hovering or tabbing into a film opens it (CSS `:has()`, no JavaScript; transitions off under reduced motion).
   - Each still has a play button and a timecode chip; the tag and title sit below.
   - ⚠ The titles are **sample content** (`data-dummy="true"`). The durations are the wireframe's.
   - ⚠ No film files exist yet. Pressing play shows "Film not available yet" (review wording, set in `main.js`).
   - To connect a film, set `data-video-src` on its `<article>`. It then opens in a native `<dialog>` player (`initFilms`). This was tested.
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

## Placeholders still on the page
Square brackets were removed from placeholder text at the project team's request, so placeholders now look like real copy. Find them in `index.html` by attribute:
- `data-placeholder="true"`: wireframe placeholder sentences, titles, quotes and names.
- `data-dummy="true"`: invented stand-in numbers and sample content (Section 6 reach figures and testimonial, and the sample content in Sections 8 to 13).
- `data-provisional="true"`: unconfirmed figures, including the Culture programme's `1 Lakh` figure.
- `data-temp-image`: temporary stock photographs.

Desktop is the current focus (designed at 1440 to 1728 wide; smaller laptops scale down, see "Laptop scale"). Below 960px the sections simply stack and haven't been designed yet.

`src/explorations/` holds the earlier standalone explorations, kept for reference. The homepage doesn't use them.
