# Reuben Luera Portfolio

Static rebuild of the Framer portfolio (reubenluera.framer.website), generated from the
Framer project tree and self-hosting every image under `assets/images/`.

- `index.html` plus one folder per case study (`/stasis/`, `/survey/`, `/optimizing/`,
  `/aiftv/`, `/aiftv-2/`, `/aionfiretvfake/`, `/mllmjudge/`)
- `assets/base.css`, `assets/site.js`: shared styles and the small amount of JS
  (scroll reveal, before/after slider, carousels, phone menu)
- Fonts load from Google Fonts (Inter, Inter Tight, Montserrat, Nunito, Plaster, Unbounded)

Serve locally with any static server, e.g. `python -m http.server 8765`.
