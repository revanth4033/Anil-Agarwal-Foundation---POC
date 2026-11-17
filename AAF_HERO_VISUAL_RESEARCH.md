# AAF Homepage Hero: Visual Research & Concept Exploration

**Version 1.0 · 16 November 2026 · Status: for review. No direction selected yet.**
**Scope:** hero section and the solid header above it only.
**Inputs:** `AAF_PROJECT_CONTEXT.txt` · `AAF_BRAND_FOUNDATION.md` · `AAF_HOMEPAGE_CONTENT_MAP.md` (§1 Hero) · `home page wireframe.pdf`
**Reference screenshots:** `references/design-references/hero/`, captured 16 November 2026 with headless Chrome at 1440×900 (desktop) and an approximately 390px-wide mobile viewport.

> This document contains research and concepts only. No HTML, CSS or components have been produced. All approved hero copy is reproduced verbatim and was not changed.

---

## 1. Research objective

Find a hero composition for the Anil Agarwal Foundation homepage that:

1. Combines **Immersive Documentary** and **Premium Editorial**: it should feel premium, human, emotionally engaging, editorial, contemporary, distinctive, credible and sophisticated.
2. Gives the **Nand Ghar footage** (children at play at a Nand Ghar centre) a cinematic, authentic role without falling back on "full-screen video with white text on top".
3. Uses a **solid header** that is visually separate from the video, yet feels art-directed rather than a generic bar.
4. Works with the **fixed content set** from the wireframe:

| Element | Approved content |
|---|---|
| Headline | Giving every child a place to begin. |
| Supporting copy | We work alongside communities across India — in childcare, animal welfare, sport, health, culture, education and livelihood — to give people the footing to build their own futures. |
| Primary CTA | Explore our work → |
| Secondary CTA | Why we exist |
| Film link | Nand Ghar — watch the film → |
| Media | Hero footage — [children at play at a Nand Ghar centre] |
| Video controls | Pause · Sound off |
| Indicator | Four progress indicators. Content exists only for item 1, so no further items are invented. |
| Header | AAF logo (`assets/brand/aaf-logo.svg`) · About · Areas of Work ▾ · Our Impact · Stories · Resources · Partnerships · Search · Contact / Collaborate |

5. Respects the brand foundation:
   - **Colour:** AAF Blue `#0664A8`, used for actions; AAF Green `#75C044`, decorative only and never text on light surfaces; Warm Off-white `#F7F8F4`; Deep Navy `#183D5B`; Charcoal `#263238`.
   - **Type:** Lora for the H1 only, Manrope for everything else.
   - **Shapes and effects:** structured, restrained, with subtle borders and minimal shadow.
   - **Accessibility:** WCAG 2.2 AA.

---

## 2. Summary of visual findings

1. **Foundation heroes cluster into four layouts:**
   - full-bleed video or photo with text overlaid (Obama, Rockefeller, Mastercard, NatGeo, Ford)
   - split image and text (Wellcome, UNICEF India)
   - an image band with a statement below (Malala Fund)
   - a typographic or brand-led opener (Age of Union, Libra)

   The first is by far the most common, which is exactly why it reads as generic.
2. **The overlay layout is fragile.** Every overlaid hero needs a dark scrim, which flattens the documentary footage. Obama's large type over moving video was low-contrast at capture time. Rockefeller's green headline over foliage is hard to read. The cost: the footage is darkened to make the text legible, so neither the people nor the words get full attention.
3. **The most premium-feeling references treat the photograph as an object rather than a background.** Magnum frames the image with white margins like a print on a wall. Kinfolk presents a single image as a cover with generous space. Wellcome puts the image in its own frame with a "Read image details" caption. This respect for the image fits AAF's rules on image integrity and captions.
4. **Video controls are increasingly visible and labelled.** Mastercard shows a labelled "Pause" button; Rockefeller has a large pause glyph. AAF's wireframe already asks for Pause and Sound off, so the controls can be designed in rather than hidden. Under WCAG 2.2.2, a pause control is needed for auto-moving content that lasts more than 5 seconds.
5. **Solid headers feel refined when they share a surface with the hero.** Wellcome (dark header over a grey hero band), Magnum (white header, white mat) and Ford (white header with a vertical rule running down the page) avoid the "bar stuck on top" look. The header and hero read as one composition.
6. **Overlapping panels give editorial depth.** WaterAid's blue panel overlaps the photo, and Rockefeller's dark "Who we are" panel overlaps the video's lower edge. Text that half-overlaps an image edge adds depth and authorship, and keeps the text on a solid background.
7. **Indian peer foundations under-use photography in the hero.** Tata Trusts uses a heavily tinted gradient overlay and carousel; Azim Premji uses an illustration on a teal block; UNICEF India uses a celebrity portrait against a saturated blue block. That leaves room for AAF to own a calm, documentary, photography-first position among Indian philanthropies.
8. **Carousels and slide indicators are common but low value.** Gates and Tata Trusts use them. AAF's four indicators only make sense if four real items exist (see §11).

---

## 3. Reference websites and source links

Screenshots are real captures from 16 November 2026. Cookie-consent banners appear because the captures used a clean browser; they were not dismissed. Mobile captures are approximate: some render wider than the viewport and are cropped on the right.

| # | Reference | URL | Desktop | Mobile |
|---|---|---|---|---|
| 1 | Obama Foundation | https://www.obama.org/ | `obama-foundation-desktop.png` | `obama-foundation-mobile.png` |
| 2 | WaterAid UK | https://www.wateraid.org/uk | `wateraid-desktop.png` | `wateraid-mobile.png` |
| 3 | Age of Union | https://www.ageofunion.com/ | `age-of-union-desktop.png` *(captured mid-intro animation)* | `age-of-union-mobile.png` |
| 4 | Gates Foundation | https://www.gatesfoundation.org/ | `gates-foundation-desktop.png` | `gates-foundation-mobile.png` |
| 5 | Ford Foundation | https://www.fordfoundation.org/ | `ford-foundation-desktop.png` | `ford-foundation-mobile.png` |
| 6 | Malala Fund | https://malala.org/ | `malala-fund-desktop.png` | `malala-fund-mobile.png` |
| 7 | Mastercard Foundation | https://mastercardfdn.org/ | `mastercard-foundation-desktop.png` | `mastercard-foundation-mobile.png` |
| 8 | Wellcome | https://wellcome.org/ | `wellcome-desktop.png` | `wellcome-mobile.png` |
| 9 | Rockefeller Foundation | https://www.rockefellerfoundation.org/ | `rockefeller-foundation-desktop.png` | `rockefeller-foundation-mobile.png` |
| 10 | National Geographic Society | https://www.nationalgeographic.org/ | `natgeo-society-desktop.png` | none |
| 11 | Magnum Photos *(photography institution)* | https://www.magnumphotos.com/ | `magnum-photos-desktop.png` | `magnum-photos-mobile.png` |
| 12 | Kinfolk *(editorial publication)* | https://www.kinfolk.com/ | `kinfolk-desktop.png` | `kinfolk-mobile.png` |
| 13 | The Libra Foundation | https://www.thelibrafoundation.org/ | `libra-foundation-desktop.png` | `libra-foundation-mobile.png` |
| 14 | Tata Trusts *(Indian peer)* | https://www.tatatrusts.org/ | `tata-trusts-desktop.png` | `tata-trusts-mobile.png` |
| 15 | Azim Premji Foundation *(Indian peer)* | https://azimpremjifoundation.org/ | `azim-premji-foundation-desktop.png` | `azim-premji-foundation-mobile.png` |
| 16 | UNICEF India | https://www.unicef.org/india/ | `unicef-india-desktop.png` | `unicef-india-mobile.png` |
| 17 | Aga Khan Development Network | https://the.akdn/ | none (capture timed out) | `aga-khan-foundation-mobile.png` |

**Could not be captured or inspected** (so not analysed visually):
- Doris Duke Foundation (dorisduke.org): timed out twice.
- Emergence Magazine (emergencemagazine.org): desktop timed out and the mobile capture was blank.
- Patagonia Films: timed out.

**Agency and industry sources read** (text only, no hero screenshots):
- **Use All Five, The Libra Foundation case study** (https://www.useallfive.com/work/the-libra-foundation): a rebrand with documentary films made with grantees. The rationale is that the work should be "more about their grantees than themselves".
- **Social Driver, Public Welfare Foundation** (https://socialdriver.com/work/public-welfare-foundation): "heavy use of photography" so the humanity of the work shows through. The tone is described as "vivid, gritty, and hopeful".
- **Webby Awards, Emergence Magazine by Studio Airport** (https://www.webbyawards.com/crafted-with-code/emergence-magazine): "strip everything down to the essentials". Micro-animations were prototyped before being built.
- **Numiko, *The best non-profit websites 2026*** (https://numiko.com/insights/the-best-non-profit-websites-2026): highlights Obama Foundation (hero video plus a split screen as you scroll), WaterAid (hero video and storytelling), Eden Reforestation Projects (hero video) and Farm Africa (a scroll-based zoom into one word).
- Search results also pointed to award listings ([Awwwards social-responsibility category](https://www.awwwards.com/inspiration_search/social-responsibility/), [Good Design Awards, ALNF](https://good-design.org/projects/alnf-literacy-is-freedom/)). These were not inspected in detail.

### 3.1 Reference analysis

Each entry covers what the site does, why it works or fails, and what AAF can take from it. The numbers in brackets refer to the twelve analysis points in the brief.

**1. Obama Foundation**
- **What it does:** a promotional banner in deep green sits above a nav that floats over the hero video [1]. Very large condensed sans type is set over the moving video and animates in word by word ("…that brings change home") [4, 10]. A labelled cookie layer covers the lower left.
- **Why it works or fails:** scale and motion give energy, but the type sits directly over busy footage and was low-contrast at capture [8]. On mobile, the type stacks above the video against a solid blue fallback [11].
- **Lesson for AAF:** headline motion can carry emotion, but avoid type over moving footage.

**2. WaterAid UK**
- **What it does:** a solid white header with a large logo and chunky navigation [1]. A full-width documentary portrait of a mother and baby sits beneath a solid blue panel that overlaps the photo's left half [3]. The panel holds the headline and a donation module.
- **Why it works or fails:** the panel guarantees contrast and gives authorship [8]. The portrait is cropped so the faces stay clear of the panel [7]. On mobile the photo goes on top and the panel below [11].
- **Lesson for AAF:** *an overlapping solid panel instead of a scrim*. WaterAid's version is bold and transactional; AAF's should be quieter and editorial.

**3. Age of Union**
- **What it does:** a typographic, brand-led opening. A giant wordmark is revealed in blocks across a flat colour field before the imagery arrives (the capture caught the intro mid-sequence) [10].
- **Why it works or fails:** it's distinctive, but it delays the content and relies on motion.
- **Lesson for AAF:** an intro sequence is too much for AAF. Keeping type and image in separate fields is still useful.

**4. Gates Foundation**
- **What it does:** a solid yellow header whose colour continues into a frame around a rounded, inset video [1, 2]. This makes the header and hero one surface. The headline is set in all caps over a scrimmed video. On the right, vertical dot indicators come with up and down arrows [9].
- **Why it works:** the header colour wrapping the video frame is a strong way to integrate a solid header.
- **Lesson for AAF:** *continuity between the header surface and the hero frame*. Avoid the shouty caps and the brand-yellow saturation.

**5. Ford Foundation**
- **What it does:** a thin announcement bar, then a solid white header with a stacked serif wordmark [1]. A darkened architectural photo has a serif headline and serif body copy on its left third. A thin vertical rule runs from the header down the page edge.
- **Why it works:** the rule is a quiet editorial device that ties the header to the page grid.
- **Lesson for AAF:** *structural hairlines* as a premium, non-decorative device. The scrimmed photo is still the generic pattern.

**6. Malala Fund**
- **What it does:** a solid white header [1]. A wide, letterbox-shaped band of documentary video (a close-up of hands writing in a notebook) is followed by a centred, light-weight statement on white **below** the image [3, 4].
- **Why it works:** the image is never darkened, and the text is calm and highly legible. On mobile the image becomes taller and the statement moves onto it [11].
- **Lesson for AAF:** *a letterbox crop plus text outside the image*. The centred statement is pleasant but static, and the CTA hierarchy is weak.

**7. Mastercard Foundation**
- **What it does:** a full-bleed classroom video of two girls, tightly cropped on faces [7]. The headline sits in a dark translucent band at the bottom, with a **labelled "Pause" button** top right [9].
- **Why it works or fails:** the faces carry the emotion. The bottom band is a halfway step between an overlay and a separate panel.
- **Lesson for AAF:** *tight, human crops and visible, labelled controls*. The translucent band still dims the footage.

**8. Wellcome**
- **What it does:** a solid dark header [1]. A split hero: a sans headline, a short accent rule, a lead paragraph and one button on the left; a framed aerial photo with rounded corners on the right, and a **"Read image details"** caption toggle beneath it [3].
- **Why it works:** it's calm and institutional, and it captions the image honestly.
- **Lesson for AAF:** *an image caption or credit as a designed element*. This supports AAF's rule against presenting images as evidence they aren't.

**9. Rockefeller Foundation**
- **What it does:** the nav sits transparently over a full-bleed video of children in a field. A two-tone headline sits over the footage, with a pause glyph on the right and social links on the right edge. A solid dark "Who we are" panel overlaps the video's bottom edge [3].
- **Why it works or fails:** the overlapping panel adds depth, but the two-tone headline over foliage has weak contrast.
- **Lesson for AAF:** *a solid panel overlapping the bottom edge of the video*.

**10. National Geographic Society**
- **What it does:** a solid dark two-tier header [1]. A centred eyebrow, headline, paragraph and yellow CTA sit over a nature photo [2–6].
- **Why it fails:** it's the archetypal "centred text over full-bleed image".
- **Lesson for AAF:** a pattern to avoid.

**11. Magnum Photos**
- **What it does:** a minimal white header with a square black logo and a single row of text links [1]. One photograph sits inside a generous white mat, like a print on a gallery wall, with no text over the image [3, 7].
- **Why it works:** the photograph is treated as authored work.
- **Lesson for AAF:** *the photograph as an object, with a passe-partout (mat)*. This is the strongest single idea for "premium documentary".

**12. Kinfolk**
- **What it does:** a minimal header with a centred serif wordmark and a hamburger menu. Below is a centred serif title, a single cover image, and "Buy | Read" as quiet text CTAs. The whitespace is extreme.
- **Lesson for AAF:** *restraint and text-link CTAs*. It's too sparse for an institution with seven navigation items.

**13. The Libra Foundation**
- **What it does:** a giant custom wordmark fills the first screen, with a minimal top-right nav and imagery only after scrolling.
- **Lesson for AAF:** brand-first boldness, but it isn't documentary. Not suitable for AAF's emotional brief.

**14. Tata Trusts** *(Indian peer)*
- **What it does:** a transparent header with icons; a rounded-outline card with carousel arrows over a gradient-tinted archival image; animated text overlays.
- **Why it fails:** the many layers of effect hurt both readability and credibility.
- **Lesson for AAF:** a cautionary example for an Indian philanthropic context: no gradients, tints or decorative frames.

**15. Azim Premji Foundation** *(Indian peer)*
- **What it does:** a solid white header; a teal block hero with a serif headline and a line illustration of children reading; news cards overlap the bottom.
- **Lesson for AAF:** warm and local, but illustration-led. AAF can stand apart with real documentary footage.

**16. UNICEF India**
- **What it does:** a two-tier saturated blue header; a split hero with a portrait on the left and a cyan block with a bold headline and Donate on the right.
- **Lesson for AAF:** split layouts work in India, but a saturated block feels campaign-like. AAF should use neutrals.

**17. Aga Khan Development Network** *(mobile only)*
- **What it does:** a minimal header, a breadcrumb, then a full-width documentary image with a calm institutional tone.
- **Lesson for AAF:** limited evidence; not used for the concepts.

---

## 4. Mobbin research findings

**Mobbin could not be accessed for this research.**
- The Mobbin connector in this Claude Code session failed to connect: "No claude.ai OAuth token available".
- Opening `https://mobbin.com/discover/sites/latest` in your Chrome browser redirected to Mobbin's sign-in page, because the browser isn't signed in. Signing in to third-party accounts isn't something I can do on your behalf.

**No Mobbin references are cited, and none have been invented.**

**To include Mobbin in a follow-up pass:**
- Sign in to Mobbin in Chrome, or reconnect the Mobbin connector.
- Then search Sites for: "hero", "video hero", "editorial", "split hero", "media controls", "solid navigation".
- Look across industries such as nonprofit, media and publishing, culture and museums, architecture, and premium retail.

---

## 5. Common patterns worth learning from

| # | Pattern | Seen in | Why it works | How AAF could use it |
|---|---|---|---|---|
| P1 | **Image as object (matted frame)** | Magnum, Kinfolk, Wellcome, Gates (inset frame) | Treats the footage as authored work; lifts the perceived quality | Inset the Nand Ghar video in a warm off-white mat instead of making it wallpaper |
| P2 | **Text outside, or half-overlapping, the image** | Malala Fund (below), WaterAid and Rockefeller (overlapping panel), Wellcome (split) | Full contrast without darkening the footage; editorial layering | Put the headline on a solid surface: beside, below, or overlapping the frame edge by a set grid amount |
| P3 | **Header surface continues into the hero** | Gates, Magnum, Wellcome, Ford (rule) | Makes the solid header feel part of the composition, not stuck on | Header background = hero mat colour; one hairline system shared by both |
| P4 | **Visible, labelled video controls** | Mastercard ("Pause"), Rockefeller | Accessibility (WCAG 2.2.2); signals care and confidence | Design Pause and Sound off as quiet text buttons in a "film caption" bar |
| P5 | **Caption or credit as a designed element** | Wellcome ("Read image details") | Honest framing of imagery | A small caption line naming the footage (wording to be approved), next to the film link |
| P6 | **Letterbox crop** | Malala Fund | Cinematic, calm, leaves room for text | A wide 21:9 or 2.39:1 frame for a cinematic feel |
| P7 | **Structural hairlines** | Ford, Wellcome (accent rule) | Editorial rigour without decoration | 1px Soft Border rules tying header, frame and caption to the grid |
| P8 | **Tight human crop** | Mastercard, WaterAid | Faces and eye contact carry the emotion | Frame for children's faces and hands; let the composition, not overlays, lead the eye |

---

## 6. Patterns to avoid

| Pattern | Seen in | Why to avoid it for AAF |
|---|---|---|
| Centred headline + paragraph + button over a darkened full-bleed image | NatGeo, Ford, Rockefeller, Obama | The generic NGO/corporate hero the brief rules out; the scrim kills documentary warmth |
| Gradient tints, colour washes and duotones over photos | Tata Trusts | Undermine authenticity; against the brand foundation (no random gradients) |
| Saturated brand-colour blocks as the hero field | UNICEF India, Azim Premji, WaterAid panel | Campaign- or charity-appeal tone; breaks the roughly 70% neutral balance |
| Carousels with arrows | Tata Trusts, Gates | Low engagement past slide 1; AAF has content for only one item |
| Long intro animations or giant wordmark reveals | Age of Union, Libra | Delay content; too much motion for the brief |
| Transparent nav over video | Obama, Rockefeller, Tata Trusts | Contradicts the preference for a solid header; nav readability changes with each frame |
| Social-icon rails and floating Donate buttons | Rockefeller, NatGeo | Visual noise; not in AAF's approved content |
| Promo or announcement bars above the header | Obama, Ford, Mastercard | Not in AAF's content; weakens the first impression |
| All-caps condensed "slogan" headlines | Gates, Obama | Shouty; AAF's headline is gentle and should read like a sentence |

---

## 7. Four original AAF hero concepts

**Shared foundations for all four concepts:**
- **Header:** a solid warm off-white (`#F7F8F4`) or white bar, about 76–84px tall on desktop.
  - The AAF logo is used unmodified on the left, at roughly 140–160px wide.
  - Navigation in Manrope 15–16px, Charcoal, with an AAF Blue underline for hover, focus and the current item.
  - `Areas of Work ▾` opens a dropdown whose contents are still to be defined.
  - The search button has an accessible label.
  - `Contact / Collaborate` is the header's only filled element.
- **Hero copy:** used verbatim.
- **Video:** muted autoplay. Pause is required.
  - With `prefers-reduced-motion`, the video does not autoplay and a poster frame shows instead.
- **Text over footage:** the headline never sits on moving footage without a solid surface behind it.

### Concept A: "The Mat" *(framed documentary print)*

**Core visual idea:** the Nand Ghar footage is presented like a documentary photograph on a gallery wall. It sits inside a warm off-white mat that continues from the header, and the headline sits on that mat as the "title" of the work. This is premium editorial restraint holding immersive footage.

| Aspect | Treatment |
|---|---|
| **Header** | The off-white header sits on the same surface as the mat, so they read as one sheet. A single 1px Soft Border hairline under the nav lines up with the video frame's left and right edges. |
| **Composition** | Desktop: a 12-column grid inside the 1280px container.<br>• Video frame: columns 4–12, about 72vh tall, 14px radius, inset by the container gutter.<br>• Text column: columns 1–4, bottom-aligned with the frame. |
| **Video/photo** | Full colour and **no scrim**, because nothing sits on it. The crop is a wide landscape (about 3:2) with the subject on the right third, children moving into the frame. A slow, natural-light, handheld feel. |
| **Headline** | On the mat, columns 1–4. The text column overlaps the frame's left edge by one column, on a solid off-white panel, so it reads like a caption card laid on a print. Lora 400, about 56–64px, 3–4 lines, Deep Navy. |
| **Supporting copy** | Below the headline in the same panel: Manrope 17–18px lead size, Charcoal, max about 34ch. |
| **CTAs** | `Explore our work →` is a primary AAF Blue button. `Why we exist` sits beside it as a text link with an underline. |
| **Film link and controls** | A slim **caption bar** under the frame, separated by a hairline and aligned to the frame edges:<br>• left: `Nand Ghar — watch the film →`, with a small AAF Green dot (decorative)<br>• right: `Pause` · `Sound off` as quiet Manrope 13px text buttons<br>• the four progress indicators sit as thin segments in the bar, if retained |
| **Typography** | Lora appears once (the H1); all UI is in Manrope. |
| **Colour** | About 85% off-white and white, the footage provides the warmth, AAF Blue on the primary CTA and focus states only, and a green dot. |
| **Motion** | On load:<br>• the frame fades in with a slight scale from 1.02 to 1, over 400ms<br>• the headline lines rise 8px and fade in with staggered timing<br>• no parallax<br>On hover, the film link's arrow nudges 4px. |
| **Mobile** | • Header: logo, search and menu.<br>• The frame goes full-width minus 16px gutters, at 4:5 portrait with the crop tuned for children's faces.<br>• Below it: the caption bar, then the headline panel (no overlap on mobile), copy, and CTAs stacked full-width. |
| **Advantages** | • Truly distinctive among foundations.<br>• The documentary image is never darkened.<br>• The header is integrated by construction.<br>• Contrast is guaranteed.<br>• Captioning fits AAF's image integrity rules. |
| **Drawbacks** | • Less "immersive" than full-bleed; the video is about 70% of the width.<br>• Depends heavily on footage quality, since there's nowhere to hide.<br>• The overlap needs careful grid discipline at tablet widths. |
| **Why it suits AAF** | It says "we show the work honestly and with care": premium, credible and human, without spectacle. |

### Concept B: "Title Card" *(cinematic letterbox)*

**Core visual idea:** the hero behaves like the opening of a documentary film. An edge-to-edge **letterbox** shot (about 2.39:1) is followed by a title card on a solid surface, with the headline set large and the credits-like supporting copy and CTAs arranged on the grid.

| Aspect | Treatment |
|---|---|
| **Header** | A solid white header with a hairline bottom border. The nav is right-aligned and `Contact / Collaborate` is an outlined button, which keeps the hero's primary CTA the only filled blue element above the fold. |
| **Composition** | Two stacked bands:<br>• **Band 1:** the full-bleed letterbox video, about 55–60vh.<br>• **Band 2:** a title card on Warm Off-white, about 35–40vh, laid out on 12 columns. |
| **Video/photo** | Cinematic wide crop of children at play, with the horizon low and movement across the frame. No scrim. A subtle 1px Soft Border line at the bottom edge of the frame. |
| **Headline** | Title card, columns 1–7. Lora 400, about 56–64px, two lines ("Giving every child a place to / begin." will wrap naturally; line breaks aren't forced). |
| **Supporting copy** | Title card, columns 8–12, top-aligned with the headline's first line, like a film synopsis. Manrope 17px. |
| **CTAs** | Under the supporting copy (columns 8–12): the primary button `Explore our work →` and the text link `Why we exist`. |
| **Film link and controls** | Inside the letterbox, bottom edge, on a 40px solid Deep Navy strip at 100% opacity, like the black bars of a cinema frame:<br>• left: `Nand Ghar — watch the film →`<br>• right: `Pause`, `Sound off`, and a thin progress line for the current clip<br>• the four indicators, if retained, act as chapter ticks on that line |
| **Typography** | A large, calm Lora headline against a structured Manrope "synopsis" column, which gives editorial contrast. |
| **Colour** | White and off-white dominate. Deep Navy appears only in the slim cinema strip. Blue CTA. Green appears only as the active chapter tick, paired with length so it doesn't rely on colour alone. |
| **Motion** | On load, the letterbox "opens" (the frame height eases from 0.9× to 1× over 500ms, once). Video crossfades between chapters, if more than one exists. |
| **Mobile** | • The letterbox becomes 16:9 full-bleed.<br>• The cinema strip stays under the video, with the film link on line 1 and the controls on line 2.<br>• The title card stacks: headline, copy, then CTAs. |
| **Advantages** | • Cinematic and emotionally immersive.<br>• No text on footage.<br>• Very clear hierarchy.<br>• Easy to build responsively.<br>• The film link and controls get a natural home. |
| **Drawbacks** | • The headline sits below the fold line on short laptop screens (about 768px tall) unless the video height is capped.<br>• Two stacked bands can feel conventional if the title card isn't carefully typeset.<br>• Some resemblance to the Malala Fund's band-then-text structure, which is distinguished here by the cinema strip and the split synopsis. |
| **Why it suits AAF** | It frames Nand Ghar as a film AAF is proud of. It ties directly to the "watch the film" link and the Films section later on the page. |

### Concept C: "Field Notebook" *(asymmetric editorial split)*

**Core visual idea:** an asymmetric, magazine-feature composition. A tall, **portrait-format** video (about 4:5) sits beside a column of generous editorial typography, like an opening spread in a long-form feature. The vertical crop is unusual for web heroes and gets close to the children.

| Aspect | Treatment |
|---|---|
| **Header** | A solid off-white header. A **vertical hairline**, the column rule, drops from the header's bottom border down through the hero, between the text and video columns, tying the header to the spread. |
| **Composition** | • Text: columns 1–6 on the left.<br>• Video: columns 7–12 on the right, bleeding off the right edge of the viewport (the frame breaks out of the container on one side only).<br>• Height: about 82vh. |
| **Video/photo** | A portrait crop (4:5) focused on two or three children mid-play, eye-level, in natural light. No scrim. Small caption text under the frame, on the mat. |
| **Headline** | Columns 1–6, vertically centred. Lora 400, about 56–64px, Deep Navy. |
| **Supporting copy** | Below the headline: Manrope lead size, max about 40ch. A short 32px AAF Green rule above the copy acts as a section marker (decorative only). |
| **CTAs** | Below the copy: the primary button and the `Why we exist` text link. |
| **Film link and controls** | • `Nand Ghar — watch the film →` sits above the headline as a small Manrope 13px label with an arrow, a kicker linking the text to the footage.<br>• `Pause` and `Sound off` sit as text buttons in the caption line beneath the video.<br>• The indicators, if kept, appear as `01 / 04`-style numerals in that caption line. |
| **Typography** | Kicker, headline, rule, lead and actions: a classic editorial stack, kept to two families and three sizes. |
| **Colour** | An off-white field with full-colour footage. Blue for the CTA. A green rule marker. |
| **Motion** | • On load, the video frame "wipes" open from the right edge (clip-path, 600ms, once).<br>• The text fades in.<br>• On scroll, a very slight (≤ 24px) vertical offset between the columns. It's optional and disabled under reduced motion. |
| **Mobile** | • The video becomes a full-width 4:5 frame, followed by the kicker, headline, copy and CTAs.<br>• The column rule becomes a horizontal hairline. |
| **Advantages** | • A very distinctive vertical crop; intimate and human.<br>• Strong editorial authorship.<br>• Clean contrast.<br>• The portrait crop reuses well on mobile. |
| **Drawbacks** | • Portrait footage must be shot or cropped specifically, which is harder with existing landscape footage.<br>• The text column is large, so the hero feels less "cinematic".<br>• The one-side breakout needs careful handling on ultra-wide screens. |
| **Why it suits AAF** | It reads like a serious feature about real children in a real place. Premium editorial, with the documentary warmth kept intact. |

### Concept D: "Opening the Door" *(scroll-revealed storytelling)*

**Core visual idea:** the hero starts with the **words first**. The headline sits on a calm off-white stage, and the Nand Ghar footage plays inside a modest frame beneath it. As the visitor begins to scroll, the frame **expands to the full viewport width**, a single "door opening" that moves the visitor from AAF's statement into the children's world. It's a storytelling metaphor for "a place to begin".

| Aspect | Treatment |
|---|---|
| **Header** | A solid white header that stays sticky and condenses from about 84px to 64px after scroll. A hairline bottom border. |
| **Composition** | **First screen:**<br>• headline centred-left (columns 1–8), with copy and CTAs to its right (columns 9–12)<br>• below, a video frame within the container, about 45vh tall, rounded 14px<br>**On scroll** (the first ~60vh of scroll): the frame grows to full-bleed and about 90vh, the radius goes to 0, and the text scrolls away naturally. |
| **Video/photo** | Wide crop with a central subject, so it works at both frame sizes. No scrim at any stage, because the text never sits on the video. |
| **Headline** | Above the frame on the off-white stage. Lora 400, about 64px (the largest of the four; needs approval against the 56px working scale), Deep Navy. |
| **Supporting copy** | Right column (9–12), aligned to the headline's baseline. Manrope 16–17px. |
| **CTAs** | Under the supporting copy: the primary button and the text link. |
| **Film link and controls** | • `Nand Ghar — watch the film →` sits on the frame's top-left edge, outside the frame on the stage at first, then pinned as a small solid label once the frame is full-bleed.<br>• `Pause` and `Sound off` are pinned bottom-right on a solid chip with 100% opaque background.<br>• The indicators sit beside the controls, if retained. |
| **Typography** | Statement-first: the largest Lora moment of the four concepts. |
| **Colour** | White and off-white stage, then full-colour footage. Minimal blue. Navy for the chips. |
| **Motion** | One scroll-linked transform (scale and radius), built with GPU-friendly transforms. Under `prefers-reduced-motion`, it's a static layout with the frame at full width from the start. No other motion. |
| **Mobile** | • The scroll expansion is disabled.<br>• Order: headline, copy, CTAs, then a full-bleed 4:5 video with the film link and controls on a solid strip below. |
| **Advantages** | • The most memorable, with a clear narrative metaphor.<br>• Starts with an editorial statement and ends in full immersion.<br>• The text never sits on footage. |
| **Drawbacks** | • The highest build and performance cost.<br>• Scroll-linked effects can feel gimmicky if overdone.<br>• The footage is small at first glance.<br>• Its success depends heavily on the motion quality.<br>• Needs careful testing for accessibility and jank. |
| **Why it suits AAF** | It turns the headline's idea, *a place to begin*, into the experience. It's distinctive without decoration. |

---

## 8. Comparison of the four concepts

Ratings run from ● (low) to ●●●●● (high), as a design judgement.

| Criterion | A · The Mat | B · Title Card | C · Field Notebook | D · Opening the Door |
|---|---|---|---|---|
| Immersive documentary feel | ●●●○○ | ●●●●○ | ●●●○○ | ●●●●● (after scroll) |
| Premium editorial feel | ●●●●● | ●●●●○ | ●●●●● | ●●●●○ |
| Distinctiveness vs. foundation sites | ●●●●○ | ●●●○○ | ●●●●○ | ●●●●● |
| Headline legibility / contrast | ●●●●● | ●●●●● | ●●●●● | ●●●●● |
| Footage shown undimmed | ●●●●● | ●●●●● | ●●●●● | ●●●●● |
| Solid header integration | ●●●●● | ●●●○○ | ●●●●○ | ●●●○○ |
| Natural home for film link + controls | ●●●●● | ●●●●● | ●●●○○ | ●●●○○ |
| Above-the-fold completeness (1366×768) | ●●●●○ | ●●●○○ | ●●●●○ | ●●●●○ |
| Mobile simplicity | ●●●●○ | ●●●●● | ●●●●○ | ●●●○○ |
| Build complexity / risk (more = simpler) | ●●●●○ | ●●●●● | ●●●○○ | ●●○○○ |
| Dependence on specific footage | Medium | Low–medium | High (portrait crop) | Medium |

---

## 9. Recommended concept and justification

**Recommendation for discussion: Concept A, "The Mat", strengthened with the cinema-style caption bar idea from Concept B.**

> This is a recommendation, not a final selection. All four concepts are presented for your review.

**Why Concept A:**
1. **It meets the brief's hardest requirement best:** a solid header that feels integrated. The header and mat are one surface, joined by the same hairline system.
2. **It's the most "Premium Editorial" without losing the "Immersive Documentary" footage.** The footage is large (about 70% width, about 72vh) and is never darkened, cropped behind text or covered by a scrim.
3. **It gives every approved element a deliberate home:**
   - the headline and copy on the overlapping caption panel
   - the CTAs in the panel
   - `Nand Ghar — watch the film →`, Pause and Sound off in the caption bar
   - the four indicators as thin segments in that bar
4. **It's original.** The matted-print idea comes from photography institutions (Magnum), the overlapping solid panel from WaterAid and Rockefeller, and the integrated surface from Gates. Together these form a composition that none of the references uses, in a calm register that suits an Indian philanthropic foundation.
5. **It fits brand and accessibility rules by construction:**
   - text always sits on solid neutrals (Deep Navy on off-white is about 10:1)
   - AAF Blue appears only on the primary action
   - Green is decorative only
   - the controls are labelled text buttons

**Second choice: Concept B.** Choose it if maximum cinematic immersion and the simplest build matter more than distinctiveness.

**Concept D** is the most memorable. It's worth revisiting once the hero footage exists and performance budgets are known.

---

## 10. Desktop and mobile considerations

### Desktop (1280–1440px reference; also test 1366×768 and 1920×1080)
- **Hero height:** keep the hero within one viewport, header included. Cap the video height so that the headline, CTAs and film link are all visible at 1366×768.
- **Container:** use the 1280px container from `brand-tokens.css`. Frame edges, caption bar and header hairline must all share the same grid lines.
- **Headline:** Lora 400, 56px working scale. Concepts A, C and D may want 60–64px; approval is needed before going beyond the scale. Keep it to about 22ch per line and avoid single-word last lines where possible, without rewriting copy.
- **Header CTA vs. hero CTA:** both `Contact / Collaborate` and `Explore our work →` are actions. Making the header button outlined, or a quieter filled navy, keeps the hero's primary CTA the single strongest element. Suggested; to be confirmed.
- **Video:**
  - Format: H.264 MP4 plus WebM, 1920px wide, 8–20 second loop, under about 6–8 MB.
  - Poster: a still frame used as the first paint and LCP image.
  - Loading: preload the poster only, start the video after first paint, and pause it when it scrolls off-screen.
- **Controls:**
  - `Pause` toggles to a play state; the label for that state isn't specified (see §11).
  - `Sound off` reflects the muted default; the label when sound is on isn't specified.
  - Both are real `<button>`s with visible focus rings (2px AAF Blue, 3px offset).
- **Reduced motion:** no autoplay; show the poster and a visible play option. No load or scroll animations.
- **Captions:** if the footage contains speech or meaningful sound, captions or a transcript are needed for the film behind `Nand Ghar — watch the film →`.

### Mobile (360–430px)
- **Header:** logo, search icon and menu button. The seven nav items move into a menu panel, with `Contact / Collaborate` as the last item or a pinned button inside the menu.
- **Order:** media, then caption bar or controls, then headline, copy and CTAs. Alternatively the headline can come first (Concept D). Overlaps collapse into clean stacking.
- **Media aspect:** 4:5 or 16:9. Art-direct a separate mobile crop so the children's faces stay in frame.
- **Headline size:** about 36–40px (the token scale gives 36px at 360px).
- **CTAs:** full-width stacked buttons with a minimum 44px touch target. `Why we exist` stays a text link.
- **Data:** consider serving the poster image only on mobile data or under `prefers-reduced-data`, with tap-to-play.

---

## 11. Open questions and assets required

### Open questions
1. **Four progress indicators.** What do items 2–4 contain: more clips of the same film, other programmes, or nothing? Until they're defined, I recommend showing **no indicator**, or a single-clip progress line, rather than four empty segments.
2. **"Sound off" behaviour.** Is it a toggle (Sound off ↔ Sound on), and does the hero clip have meaningful audio at all? If it doesn't, the control may be unnecessary. That change would need approval, because it's in the wireframe.
3. **Pause / play label pair.** Confirm the label for the resumed state, for example "Play".
4. **`Nand Ghar — watch the film →` destination:** in-page modal player, the Films section (§11), or an external host such as YouTube or Vimeo?
5. **`Why we exist` destination:** the content map notes that no homepage section has this title.
6. **Header CTA styling:** is an outlined or navy `Contact / Collaborate` acceptable, so the hero CTA leads?
7. **Headline size:** may the hero H1 exceed the 56px working scale (60–64px) for Concepts A, C or D?
8. **Footage caption line:** is a small caption under the frame acceptable (Concepts A and C)? If so, its wording must be supplied and approved; none is invented here.
9. **Mobbin pass:** do you want a follow-up once Mobbin access works?

### Assets required
1. **Hero footage:** authentic Nand Ghar footage of children at play, ideally 4K or at least 1080p, in natural light.
   - Clips: 8–20 seconds suitable for looping, plus a longer master for the film.
   - Shoot or crop for both landscape (3:2 or 2.39:1) and portrait (4:5) frames, or confirm which concept the footage will serve.
   - Usage rights and consent covering all children and guardians shown.
2. **Poster frames:** one per aspect ratio, high resolution.
3. **The Nand Ghar film** (behind the film link): file or hosted URL, duration, and captions or transcript.
4. **Content for indicator items 2–4**, if they're kept.
5. **AAF logo usage rules** (minimum size and clear space) to finalise header proportions. A working minimum of 120px width is in place.
6. **Destination URLs** for all header items and hero CTAs.

---

*End of hero research. No implementation has started. Awaiting your review and choice of direction.*
