# Baseline-A — Design Capture

**Source:** https://ezefaz.com/en#case-studies
**Why picked:** Fits my overall aesthetic; clean but showcases what's being offered smoothly.

## Palette

> Updated with exact values: the hero background is a `<video>` (mp4), pixel-sampled from actual frames; the accent green and page tokens are pulled straight from the site's inline HTML + CSS.

**Hero background video — sampled from actual frames:**
- **Deep forest green (dominant, ~37%):** `#0e1b0e`
- **Sage green-gray (~36%):** `#9ea894`
- **Mid greens:** `#739274`, `#606a50`
- **Darker greens:** `#2f4b32`, `#3a5f44`
- **Warm browns / tan:** `#574d34`, `#867257`, `#483824`

**Accent (used sparingly, high-impact):** bright citrus/lime green `#c9f59a` — appears only as small punctuation: the round arrow-icon buttons ("Let's Chat", "Read Article"), the "Design" service card fill, status dots next to badges, and marquee separator dots. Related greens in the system: `#c5d894`, `#d4e4a3`.

**Other real page colors (inline HTML + CSS, actually used live):**
- **Cream / warm off-white surfaces:** `#f7f6f2` (primary, most-used), plus `#fafafa`, `#f5f5f0`, `#f7f8f5`
- **Warm light gray:** `#e6e4df`
- **Near-black greens / darks (sections + footer):** `#172218`, `#1b2a1f`, `#1b2424`, `#222f30`, `#1f2a2b`, `#1a1a1a`
- **White:** `#ffffff`; **muted olive:** `#c5d894`
- **Text:** white on dark sections, near-black on light sections, with a muted-gray de-emphasis technique inside headlines (part of a headline in dark text, the rest in ~40% opacity gray at the same size/weight).
- **Borders/dividers** use low-opacity white or black rather than a distinct hex: `border-white/10…20`, `border-black/5…10`.
- **DO NOT USE — slate-teal `#445e5f`:** used as a block on the live site, but teal is a hard "never use" for this project — substitute a dark green (`#172218` / `#2f4b32`).
- **Ignore** the shadcn/Tailwind scaffolding defaults in `:root` (`#7c79ff`, `#b27dff`, `#ff2357`, `#fb2c36`, `#f99c00`, `#82181a`, `#00bb7f`, chart-1…5) — unused, not part of the real palette.

**→ Palette to use (locked, built from the above):**
- **Dominant surface (light):** cream `#f7f6f2`
- **Dominant dark (sections/footer):** forest green `#0e1b0e` (or `#172218`)
- **Secondary green:** sage `#9ea894`
- **Warm neutral / brown:** `#867257` (lighter tan `#d4c8a7`)
- **Accent (sparing, high-impact):** citrus lime `#c9f59a`
- **Text:** near-black `#1a1a1a` on light; cream/white on dark; muted `#e6e4df` for de-emphasis

## Typography

- **Display/body font:** "Aspekta" (falls back to Helvetica Neue/Arial), a geometric grotesk sans used for literally everything except nav labels and tag chips.
- **H1 (hero headline):** 112px, weight 400, letter-spacing -2.8px, line-height 117.6px — huge, tight-tracked, regular (not bold) weight for an editorial feel.
- **H2:** 60px, weight 500, line-height 66px.
- **H3:** 24px, weight 500, line-height 32px.
- **Body paragraphs:** 18px, weight 400, line-height ~29px (1.6 ratio); hero sub-line is bumped to 24px/weight 500.
- **Testimonial quotes:** 20px, weight 600 (semibold) for emphasis against 18px/500 names and 14px/400 muted role labels.
- **Accent/mono font:** "Geist Mono" (with "Geist Mono Fallback"), reserved exclusively for nav links, tag pills ("AI SAAS", "React"), year labels ("2024"), and section labels ("TECHNICAL ARSENAL", "01/04") — always uppercase, small (12–14px), with wide letter-spacing (1.2–1.4px). This is the clearest "systematic/technical" signal in the type system.

## Components

- **Navigation:** fixed pill-shaped bar, translucent white `rgba(255,255,255,0.8)` background, `border-radius: 10px`, thin `border-white/15`, floating with margin from viewport edge — a glass/frosted look without an actual blur filter applied (`backdrop-filter` reads "none" in computed styles, so the translucency alone does the work).
- **Buttons/CTAs:** two shapes coexist — fully pill-shaped (`border-radius: 9999px`) dark buttons like "Contact" and "Let's Chat," and separately a perfect circle lime-green icon button for arrow/external-link actions. Standard `<button>` elements resolve to `border-radius:14px` with dark green fill.
- **Tag/badge chips:** fully rounded pills, `bg-white/10` (on dark) or light gray (on cream), monospace uppercase text, subtle `hover:bg-white/20` transition.
- **Cards:** generous rounding — `rounded-2xl`, `rounded-3xl`, and custom values up to `rounded-[40px]`. Shadows are almost entirely absent; the one shadow found is extremely soft: `box-shadow: 0 12px 40px rgba(15,23,42,0.06)` — a barely-there ambient lift rather than a hard drop shadow. Most depth is implied through flat color blocking instead of shadow.
- **Footer:** dark green section with an oversized bleeding wordmark ("Ezequiel") set in the same display font at a scale that clips off the viewport edges — a deliberate oversized-type flourish rather than a conventional multi-column footer, though it does include a conventional Navigate/Connect link grid plus a circular back-to-top button.
- **Case study index rows:** no cards at all — just hairline dividers (`border-black/10`-style) separating rows of giant project-name headlines with mono year labels and tag pills.

## Spacing rhythm

- Generous, airy vertical rhythm: full sections use `py-20`, `py-24`, `py-32` (i.e., 80–128px of vertical padding) with matching horizontal padding around `px-6` to `px-12`.
- The Case Studies teal section alone runs to roughly 2200px tall with large internal gaps between project rows and thin single-pixel dividers as the only visual break — spacing does the separating work, not borders or shadows.
- Overall feel is closer to "generous/editorial" than tight or dense; there's a lot of negative space around headlines, and content blocks are visually isolated within their color-blocked sections.

## Motion personality

- **Overall character:** subtle and atmospheric, not playful or sharp. Transitions use eased custom timing (`cubic-bezier(0.22,1,0.36,1)`) at 300–500ms durations — a soft, "premium" ease rather than snappy or bouncy.
- **Animated elements observed:** a horizontally auto-scrolling marquee ("TECHNICAL ARSENAL" with tech names like GEMINI, CHATGPT, databases) running in opposite directions on two lines (`animate-marquee-left` / `animate-marquee-right`); a testimonial carousel with dot pagination that appears to auto-advance; hover states on nav links, tag pills, and buttons using `transition-colors` / `transition-all`; and a "hero-reveal" class suggesting the headline animates in on load.
- No jarring or high-energy motion — everything reads as slow, ambient, confidence-building rather than attention-grabbing.

## Most distinctive element

The combination of a photorealistic, glassy abstract 3D render — actually a silently looping background **video** (autoplay/muted/loop mp4, ~17s) of swirling ribbon/glass shapes in forest-green, sage, and warm brown tones — used as the hero AND footer backdrop, paired with an oversized, bleeding wordmark typographic flourish in the footer. This "cinematic looping render + giant clipped type" pairing is the strongest signature of the site, far more memorable than the otherwise fairly standard SaaS-portfolio color/type system.
