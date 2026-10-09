# Lucky Pixels Design website

Anna's business website, rebuilt from scratch on 2026-10-08. The old CodeStitch/Eleventy template lives in git history at `cf402b7`.

**Business:** Lucky Pixels Design (Pasadena, CA), a brand and marketing strategy studio: brand strategy, copywriting, visual identity, web design. Audience: small professional practices (law, therapy/counseling) and mission-driven nonprofits. The site is a credibility page and contact point.

## Stack (decided, don't change without asking)
- Plain HTML and CSS. **No JavaScript, no build step, no framework, no npm.** Anna considered a JS-injected header/footer (`components.js`) and chose to keep static pages; the nav must work without JS.
- Hosting: Netlify target (`netlify.toml` publishes the repo root). `CNAME` points `luckypixelsdesign.com` here, so don't delete it. Netlify vs GitHub Pages is not yet confirmed (see `docs/OPEN-QUESTIONS.md`).
- Contact form: Netlify Forms (`data-netlify="true"`, honeypot field `bot-field`, posts to `/thanks/`). It can only be tested once deployed on Netlify. Form only, no email address displayed (lower spam).
- Icons: Heroicons (MIT), inlined as SVG in the HTML. Source copies are in `assets/icons/`.
- Fonts: Bricolage Grotesque (headings) and Source Serif 4 (body), self-hosted in `assets/fonts/`, declared in `assets/css/fonts.css`. No third-party CDNs. Keep it that way.
- Graphics: original SVGs `assets/graphics/flower.svg` and `spark.svg`. They are CSS masks (`.gfx`), so they take their color from the CSS variables. Do not reintroduce CodeStitch artwork (license unclear).

## Files
```
index.html                landing page (hero, what I do, how it works, testimonial, contact form)
about/index.html          bio + photo (300x300) + "What clients come to me with"
services/index.html       4 services + how pricing works
clients/index.html        RCCDP case + Kiri's testimonial
thanks/index.html         shown after the contact form is sent
assets/css/styles.css     ALL styles; brand colors are variables at the top
assets/css/fonts.css      @font-face rules
assets/{fonts,icons,graphics,images}/, assets/favicon.svg
robots.txt, sitemap.xml   update sitemap.xml if a page is added
reference/                local-only, git-ignored: old-site material for reference
docs/                     project tracking (below)
```

## How to edit
- **Colors / palette:** edit only the variables in `:root` at the top of `assets/css/styles.css` (including `--graphic-soft` / `--graphic-strong` for the graphics). Anna dislikes the sage; expect a palette change.
- **Shared header, nav, footer are copied into all 5 HTML files.** When changing them, edit every file (`index.html`, `about/`, `services/`, `clients/`, `thanks/`) and check with `grep` that they match. The nav has `aria-current="page"` on the current page's link.
- **Adding a page:** copy an existing inner page (e.g. `services/index.html`), keep the header/footer, add the nav link in every file, add the URL to `sitemap.xml`, and set a unique `<title>` and meta description.
- **Removing Anna's photo:** delete the `.portrait` block in `about/index.html`.
- **Preview:** from the repo root run `python3 -m http.server 8765`, then open http://localhost:8765/. Paths are root-relative (`/assets/...`), so the site must be served from the root, not opened as a file.
- There is no generator script in the repo; pages are hand-maintained HTML.
- Quality floor: responsive down to phone width, visible keyboard focus, `prefers-reduced-motion` respected, alt text on images, one `<h1>` per page. Keep line length under ~80 characters.

## Copy and voice
- Anna's voice is documented in `docs/VOICE.md`. Read it before writing or editing any copy.
- Copy was written with Anna in interview style: she types rough answers, Claude polishes with minimal edits, she approves. Every change must add value; do not pad her text.
- Use only facts Anna has stated. Never invent clients, numbers, testimonials, credentials, or claims. Mark gaps for Anna instead.
- Kiri Fluetsch's testimonial is used verbatim (it is in `index.html` and `clients/index.html`). Do not alter it.
- Don't add claims about client work Anna hasn't approved.
- Use they/them for people unless told otherwise.

## Privacy
This repo is PUBLIC and Netlify publishes the repo root. Never put private business, financial, family, or client-relationship details in any tracked file, including docs/ and this file. `netlify.toml` blocks /docs/* and /CLAUDE.md from being served, and `reference/` is git-ignored. Keep private context in Claude's own memory, not the repo.

## Working agreements
- Anna is the owner. **Ask before** anything destructive or outward-facing: deleting files, committing, pushing (a push to main may publish the live site), or changing hosting.
- When Anna wants to react to something, show it in chat first; she often prefers to review before files are written.

## Claude-owned tracking docs (update as work happens, without being asked)
- `docs/PROGRESS.md`: done / in progress / next. Update at the end of each work session.
- `docs/DECISIONS.md`: dated log of decisions and why. Add a row whenever Anna decides something.
- `docs/OPEN-QUESTIONS.md`: blockers and unanswered questions. Move answered ones into DECISIONS.
- `docs/VOICE.md`: how Anna writes. Refine when she supplies more samples or edits.
