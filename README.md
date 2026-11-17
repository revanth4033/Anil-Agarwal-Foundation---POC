# Anil Agarwal Foundation: homepage

A static homepage (plain HTML, CSS and JavaScript, no build step).

- Page: `src/index.html`, with `src/styles.css` and `src/main.js`
- Brand tokens, logos, images and video: `assets/`
- Section notes and placeholder markers: `src/README.md`
- Image sources and status: `assets/images/CREDITS.md`

## Run locally
From this folder: `python3 -m http.server 8765`, then open http://127.0.0.1:8765/src/

## Deploy (Vercel)
No build settings are needed (Framework preset: Other, no build command, root directory `./`).
`vercel.json` redirects `/` to `/src/`, and `.vercelignore` keeps project documents and references out of the deployment.

The film master `assets/nand-ghar-hero.mov` (192 MB) is not in git; the page uses the compressed `assets/videos/nand-ghar-hero.mp4`.
