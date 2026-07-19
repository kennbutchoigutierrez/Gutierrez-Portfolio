# Prompt — Gutierrez Portfolio (Claude Design build)

> Paste this whole document into Claude Design. It combines my inspiration direction with a real baseline capture. Build the full one-page portfolio described below. Copy is placeholder where noted — keep it warm and in my voice.

---

## Direction (what it should feel like)

Build a warm, editorial, quietly-confident personal portfolio that feels like **Prada's Spring/Summer 1998 campaign meets Tame Impala's *The Slow Rush*** — laid-back yet a little mysterious, nostalgic and enticing, with cozy warm color and sleek, restrained typography. The tactile, "unbranded luxury" restraint of **Maison Margiela's apothecary labels** and the collected-artifact feel of **passport stamps** should come through: understated, trustworthy, hand-made — never loud, never templated.

**Voice (for all copy):** Quiet-confident. First person. Short sentences. Treats the reader as an equal.

**Tagline (use in the hero):** "From blueprints to inboxes, I build systems that run."

---

## Baseline to learn from

**Primary baseline: https://ezefaz.com/en#case-studies** — a warm photographic editorial portfolio. Study its **structure and pacing**: the generous, airy vertical rhythm; the way sections are separated by whitespace and hairline dividers instead of boxes and shadows; the looping warm background video in the hero; and the case-study index rendered as big headline rows rather than cards. Match that calm, premium pacing. Do **not** copy its teal — see hard excludes.

---

## Structure (decided: traditional one-page)

A single scrolling page with clear, sequential sections separated by generous whitespace and hairline dividers — no side nav, no multi-page routing. Pacing is editorial and unhurried: each section breathes, one idea at a time, anchored by a warm looping hero and a dark forest-green footer.

## Content sections (in this order)

1. **Hero** — full-width, looping warm background video/gradient; my name; the tagline "From blueprints to inboxes, I build systems that run."; a short one-line descriptor of what I do.
2. **About** — short first-person bio (2–4 sentences), and a visible **Download Resume** action (see below).
3. **Work / Projects** — 3–6 projects as an editorial **index of big headline rows** (project name, one-line outcome, year label, small tag pills), ezefaz-style — not a grid of shadowed cards. Each row leads with the result.
4. **Skills / Tools** — brief, scannable; small pill/tag treatment.
5. **Experience** — concise role list (company, role, dates, one line each).
6. **Education** — concise (school, program, dates).
7. **Footer** — see footer slot below (must be the last element).

## Resume access (required)

My resume must be **downloadable directly from the page.** Include a clearly visible **"Download Resume"** button in the **About** section, and repeat it as a link in the **top nav**. Wire it to a placeholder file `resume.pdf`. This is the primary CTA — make it obvious. (Other CTAs are fine if the layout needs them, within the excludes below.)

## Footer slot (required, LAST element on the page)

The footer is a dark forest-green section. It must include a **clearly labelled slot for the Arca logo** (placeholder image, e.g. `arca-logo.svg`) accompanied by the text **"Made for Arca.ph"**. This Arca logo + "Made for Arca.ph" pairing must be the **final element on the page** — nothing below it. An oversized bleeding wordmark of my name above it (ezefaz-style) is welcome.

---

## Design system to apply (from baseline-A capture)

### Palette (locked — build the whole system on this)
- **Dominant surface (light):** warm cream `#f7f6f2`
- **Dominant dark (sections / footer / anchor):** deep forest green `#0e1b0e` (or `#172218`)
- **Secondary green (blocks, muted UI):** sage `#9ea894`
- **Warm neutral / brown (tactile accent tone):** `#867257` (lighter tan `#d4c8a7`)
- **ACCENT — sparing, high-impact:** citrus lime `#c9f59a` — arrow/CTA icons and small punctuation only
- **Text:** near-black `#1a1a1a` on light; cream/white `#f7f6f2` on dark; muted `#e6e4df` for de-emphasis
- These greens/brown are pixel-sampled from baseline-A's actual hero video; the citrus lime is its confirmed arrow accent. Ensure text meets WCAG AA.

### Typography
- **Display / headings:** a geometric grotesk with editorial personality (e.g. Aspekta or similar) — **huge, tight-tracked, regular-to-medium weight** (hero H1 ~100–112px, letter-spacing ~-2.8px, weight 400 for that editorial feel). NOT bold-and-shouty.
- **Body:** highly legible humanist/grotesk at 18px, weight 400, line-height ~1.6.
- **Mono/label accent:** a mono face (e.g. Geist Mono) reserved for nav links, tag pills, year labels, and section labels — always UPPERCASE, small (12–14px), wide letter-spacing (1.2–1.4px). This carries the "systematic/technical" signal.
- **Absolutely no Inter and no Roboto.** No generic default fonts.

### Components
- **Nav:** fixed, floating **pill-shaped** bar with a translucent light background and a thin hairline border, margin from the viewport edge (frosted look via translucency, no heavy blur). Include the Download Resume link here.
- **Buttons:** pill-shaped for text CTAs; a **round citrus-lime icon button** for arrow/download actions. Precise, flat, minimal.
- **Cards / rows:** generous rounding where cards appear, but favor **flat color-blocking and hairline dividers over shadows** — depth is implied, not dropped. Work section uses divider rows, not shadowed cards. **No 4px left accent bar on cards.**
- **Tag/badge chips:** fully rounded pills, mono uppercase text, subtle hover.
- **Footer:** dark forest-green, oversized bleeding wordmark, a simple link grid, a circular back-to-top button, and the Arca slot as the last element.

### Spacing rhythm
Generous, airy, editorial. Section vertical padding ~80–128px, horizontal ~24–48px. Let whitespace and single-pixel dividers do the separating — lots of negative space around headlines; content blocks isolated within color-blocked sections.

### Motion personality
Subtle and atmospheric — never playful or sharp. Soft premium easing (`cubic-bezier(0.22,1,0.36,1)`) at 300–500ms. Slow entrance fades on scroll, a gentle looping hero, quiet hover transitions. Respect `prefers-reduced-motion`. Nothing bouncy, nothing attention-grabbing.

---

## HARD EXCLUDES (non-negotiable)

**Contact/social — capstone rule:**
- **No contact section.**
- **No email address.**
- **No social handles / social links.**
- **No "Get in touch" button** (or any contact CTA).

**Never-use list (from my system):**
- No teal accent (this overrides baseline-A, which uses teal — substitute dark green `#172218` / `#2f4b32`).
- No purple gradient.
- No three-column hero.
- No 4px left accent bar on cards.
- No status dot with a pulsing animation.
- No Lucide icons.
- No generic AI fonts, colors, or mechanisms (explicitly: no Inter, no Roboto, no default shadcn/Tailwind slate palettes, no stock "AI startup" look).

If any proposal violates one of these, discard and regenerate.

---

## Output

Build the complete one-page portfolio as described: Hero → About (with Download Resume) → Work → Skills → Experience → Education → Footer (Arca logo + "Made for Arca.ph" as the final element). Use placeholder copy in my voice and placeholder assets (`resume.pdf`, `arca-logo.svg`, hero video/gradient) where real content isn't provided.
