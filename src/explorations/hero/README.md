# AAF Hero: Concept A "The Mat" (design exploration)

A standalone hero exploration built with HTML, CSS and a little vanilla JavaScript. It uses no frameworks or libraries, and it isn't wired into any homepage.

## View
Fonts load from Google Fonts. Serve the project root so the relative paths to `assets/brand/` resolve:

```
cd <project root>
python3 -m http.server 8765
```

- Hero: http://127.0.0.1:8765/src/explorations/hero/index.html
- Exact-width preview at 360, 390, 430 and 768px: http://127.0.0.1:8765/src/explorations/hero/preview.html

## Files
| File | Purpose |
|---|---|
| `index.html` | Semantic markup: header, nav, hero, figure with the film link placed on the video |
| `hero.css` | All styles. Uses `assets/brand/brand-tokens.css`; hero geometry variables are at the top of the desktop block |
| `hero.js` | Mobile menu disclosure; muted autoplay, off-screen pause, reduced-motion handling; placeholder detection |
| `media/placeholder-poster.svg` | Flat Soft Sage poster used until approved footage exists |
| `preview.html` | Development harness only |

## Footage
- **Source:** Nand Ghar film, https://www.youtube.com/watch?v=GrlYXisbpwQ, supplied by the project team as `assets/nand-ghar-hero.mov` (3584×1888 screen recording, 31.1 s, 190 MB). The original is kept untouched.
- **Web file:** `assets/videos/nand-ghar-hero.mp4` is 1920×1012, 25.4 s, 30 fps, H.264 High with AAC 128k, faststart, 8.2 MB.
  - It's trimmed at 25.4 s, on a shot change, before the film's on-screen statistic banner and Nand Ghar end card.
  - It had to be re-encoded: the source was 49 Mbps with a variable frame rate.
- **Poster:** `assets/videos/nand-ghar-hero-poster.jpg`, frame 90 (3.0 s) of the web file.
- **Desktop crop:** the 1.90:1 film fills a 1.72:1 frame, so about 9% of the width is cropped. `object-position: 50% 50%` applies at ≥960px only; mobile and tablet are unchanged.
- **For a production master,** replace the MP4 in place with a clean export from the agency. A screen recording is not a production master.

## Behaviour
- **Autoplay:** the video is an ambient loop and is always muted. If autoplay is blocked, or `prefers-reduced-motion` is on, it stays on the poster image, and under reduced motion the video isn't downloaded at all.
- **No on-page controls:** the Pause and Sound off buttons were removed at the design team's request. See the accessibility note below.
- **Film link:** `Nand Ghar — watch the film →` sits on the video's lower-right corner as a solid mat-coloured label (no overlay on the footage).
- **Off-screen:** the video pauses when less than 25% of it is visible and resumes when back in view.
- **Load motion:** a 400–500ms fade and rise, removed entirely under reduced motion.

> **Accessibility note:** WCAG 2.2.2 (Pause, Stop, Hide) requires a way to pause motion that starts automatically and lasts more than 5 seconds. Reduced-motion users get a still poster, but other visitors currently have no way to pause the loop. Resolve this before launch.

## Breakpoints
- `< 600px`: stacked layout, 20px gutters, full-width buttons, 4:5 media.
- `600–959px`: stacked layout, 3:2 media.
- `≥ 960px`: overlap composition. The text panel is cut from the mat into the frame's lower-left edge. The panel and the video are bottom-aligned, so the CTAs and the video end on one line. The video is at least `--frame-h` tall (440–520px) and grows if the text needs more height.
- `≥ 1100px`: full navigation in the header; below 1100px it collapses into a menu.
