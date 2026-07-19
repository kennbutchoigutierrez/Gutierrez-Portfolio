# Prompt — Gutierrez Portfolio Design System

> Paste this whole document into Claude Design (or any design model). It contains everything needed to generate the system.

---

## GOAL (read first)

Build a **design SYSTEM only** — not screens, not layouts, not pages. Do **not** design a hero, an about section, a project grid, or any page composition. Output only the reusable foundations:

1. **Palette** — 1 dominant color, 1 accent, plus neutrals
2. **Typography** — a display face + a body face (with a scale)
3. **Components** — button, card, nav, footer (as isolated component specs)
4. **Spacing scale**
5. **Motion personality**

Everything below is context to inform those five deliverables. If you catch yourself laying out a page, stop.

---

## The feeling I'm going for (cross-medium)

If my portfolio were a campaign ad, it would be **Prada's Spring/Summer 1998 campaign** because of its laid-back yet mysterious, nostalgic, and enticing atmosphere, colors, and typography.

If my portfolio were an album cover, it would be **Tame Impala's *The Slow Rush*** because the composition and color are warm and cozy, and the typography is sleek and balances out the warm atmosphere.

If my portfolio were a restaurant menu, it would be **a small neighborhood homemade café's chalkboard** because the handwritten warmth makes you trust the person behind it.

## Non-web inspiration (specific)

**Maison Margiela perfume bottles** — apothecary/utilitarian restraint: stark typographic labels, muted neutral tones, tactile "unbranded luxury." Also in the mood: Prada S/S 1998 campaign, 007 *First Light* opening credits, Tiffany & Co. packaging, and passport stamps of countries (collected-artifact, travel-log feel).

## Voice

Quiet-confident. First person. Short sentences. Treats the reader as an equal. **The design system should feel the way this voice sounds** — understated, sure of itself, warm, never loud.

---

## Baselines (real sites I've already judged as great)

These are sites I picked as "good" in my own eyes. Study them, then read my captures below — the captures ARE my definition of good. Match that bar; don't copy the sites.

- **Baseline-A:** https://ezefaz.com/en#case-studies  (warm photographic editorial)
- **Baseline-B:** https://aditya-gupta.com.np/  (easy to navigate, detailed, creative)

---

## Design-system capture — BASELINE-A (ezefaz.com)

*This is a real breakdown of a site I already picked as great. It is how you learn what "good" looks like to me — palette, typography, components, spacing, motion. Absorb the taste, don't clone the specifics.*

### Palette

**Hero background VIDEO — pixel-sampled from actual frames of the mp4 that plays behind the hero (this is the true source palette):**
- **Deep forest green (dominant, ~37%):** `#0e1b0e`
- **Sage green-gray (~36%):** `#9ea894`
- **Mid greens:** `#739274`, `#606a50`
- **Darker greens:** `#2f4b32`, `#3a5f44`
- **Warm browns / tan (from the render):** `#574d34`, `#867257`, `#483824`

**Accent — the bright citrus/lime green on the round arrow-icon buttons (from CSS, confirmed):**
- **Citrus lime accent:** `#c9f59a` — the high-impact accent, used ONLY on the arrow/CTA icon buttons. Related greens in the system: `#c5d894`, `#d4e4a3`.

**Other real page colors (from inline HTML + CSS, actually used on the live page):**
- **Cream / warm off-white surfaces:** `#f7f6f2` (primary), plus `#fafafa`, `#f5f5f0`, `#f7f8f5`
- **Warm light gray:** `#e6e4df`
- **Near-black greens / darks (section + footer):** `#172218`, `#1b2a1f`, `#1b2424`, `#222f30`, `#1f2a2b`, `#1a1a1a`
- **White:** `#ffffff`
- **Muted olive:** `#c5d894`
- **DO NOT USE — slate-teal `#445e5f`:** appears as a block on the site, but teal is a hard "never use." Substitute a dark green (`#172218` / `#2f4b32`) instead.
- *Ignore the shadcn/Tailwind scaffolding defaults that appear unused in `:root` — `#7c79ff`, `#b27dff`, `#ff2357`, `#fb2c36`, `#f99c00`, `#82181a`, `#00bb7f`, chart-1…5. Not part of the real palette.*

### → PALETTE TO USE (locked, built from the above)
Build the entire system on this exact palette:
- **Dominant surface (light):** warm cream `#f7f6f2`
- **Dominant dark (sections/footer/anchor):** deep forest green `#0e1b0e` (or `#172218`)
- **Secondary green (blocks, muted UI):** sage `#9ea894`
- **Warm neutral / brown (tactile accent tone):** `#867257` (lighter tan `#d4c8a7`)
- **ACCENT — sparing, high-impact:** citrus lime `#c9f59a` (arrow/CTA icons, small punctuation only)
- **Text:** near-black `#1a1a1a` on light; `#f7f6f2`/white on dark; muted `#e6e4df` for de-emphasis
- **Deep near-black green `#172218`** anchors the footer and appears as an overlay tone in the hero's 3D render.
- **Accent (used sparingly, high-impact):** lime-green `#c9f59a` — appears only as small punctuation: the "Design" service card fill, the round arrow-icon buttons, status dots next to badges, and marquee separator dots.
- **Text colors:** pure white `rgb(255,255,255)` on dark sections, near-black on light sections, with a muted-gray de-emphasis technique inside headlines (part of a headline in dark text, the rest in ~40% opacity gray at the same size/weight).
- **Borders/dividers** use low-opacity white or black rather than a distinct hex: `border-white/10…20`, `border-black/5…10`.

### Typography
- **Display/body font:** "Aspekta" (falls back to Helvetica Neue/Arial), a geometric grotesk sans used for everything except nav labels and tag chips.
- **H1 (hero):** 112px, weight 400, letter-spacing -2.8px, line-height 117.6px — huge, tight-tracked, regular (not bold) weight for an editorial feel.
- **H2:** 60px, weight 500, line-height 66px. **H3:** 24px, weight 500, line-height 32px.
- **Body:** 18px, weight 400, line-height ~29px (1.6 ratio); hero sub-line bumped to 24px/weight 500.
- **Testimonial quotes:** 20px, weight 600 against 18px/500 names and 14px/400 muted role labels.
- **Accent/mono font:** "Geist Mono", reserved for nav links, tag pills, year labels, and section labels — always uppercase, small (12–14px), wide letter-spacing (1.2–1.4px). The clearest "systematic/technical" signal in the type system.

### Components
- **Navigation:** fixed pill-shaped bar, translucent white `rgba(255,255,255,0.8)`, `border-radius: 10px`, thin `border-white/15`, floating with margin from the viewport edge — a glass/frosted look with no actual blur filter (translucency alone does the work).
- **Buttons/CTAs:** two shapes coexist — fully pill-shaped (`border-radius: 9999px`) dark buttons, and a perfect-circle icon button for arrow/link actions. Standard `<button>` = `border-radius:14px` with dark green fill.
- **Tag/badge chips:** fully rounded pills, `bg-white/10` (dark) or light gray (cream), monospace uppercase, subtle `hover:bg-white/20`.
- **Cards:** generous rounding — `rounded-2xl`/`3xl` up to `rounded-[40px]`. Shadows almost absent; the one found is extremely soft: `0 12px 40px rgba(15,23,42,0.06)`. Depth is implied through flat color blocking, not shadow.
- **Footer:** dark green section with an oversized bleeding wordmark clipping off the viewport edges — an oversized-type flourish, plus a conventional link grid and a circular back-to-top button.
- **Case study index rows:** no cards — just hairline dividers separating rows of giant project-name headlines with mono year labels and tag pills.

### Spacing rhythm
- Generous, airy vertical rhythm: sections use `py-20…32` (80–128px) with `px-6…12` horizontal.
- Spacing does the separating work — large internal gaps and single-pixel dividers instead of borders or shadows.
- Overall "generous/editorial," lots of negative space around headlines, content blocks isolated within color-blocked sections.

### Motion personality
- Subtle and atmospheric, not playful or sharp. Eased custom timing (`cubic-bezier(0.22,1,0.36,1)`) at 300–500ms — soft, "premium," not snappy or bouncy.
- Observed: opposing-direction auto-scrolling marquees, an auto-advancing testimonial carousel, `transition-colors`/`transition-all` hovers, a "hero-reveal" headline-in animation.
- No jarring or high-energy motion — slow, ambient, confidence-building.

### Most distinctive element
A photorealistic glassy abstract 3D render (swirling ribbon/glass shapes in sage-green and warm neutrals) used as hero AND footer backdrop, paired with an oversized bleeding wordmark in the footer — this "cinematic render + giant clipped type" pairing is the site's signature.

---

## Design-system capture — BASELINE-B (aditya-gupta.com.np)

*Second real site I judged as great. Same purpose: learn my taste from it.*

### Palette

**Hero colors — pixel-sampled from the actual hero (USE THESE):**
- **Cream background:** `#fcfbfa` (matches the documented `#FFFCF3`) — the dominant hero surface
- **Burnt orange accent:** `#FF4D00` — the brand accent (used as text/links/icons, so it sampled thin from the image but it IS the hero accent)
- **Near-black:** `#0b0a0e` — text and the dark character illustration
- **Warm skin/coral tones:** `#d8a897`, `#d09174` — from the hero illustration only, not core palette

**Full palette (context):**
- **Dominant background:** warm off-white/cream `#FFFCF3` — used almost everywhere, giving a paper-like warmth rather than stark white.
- **Primary accent:** burnt orange `#FF4D00` — logo dot, section labels, links, icon badges, key CTAs. The single most-repeated non-neutral; functions as the brand color.
- **Text neutral:** near-black `rgb(0,0,0)` for body/headline, softer slate `rgb(26,35,50)` for some subheads, gray `#71717A` for muted copy.
- **Dark surfaces:** charcoal `#1F2937` and near-black `rgb(26,26,26)` in a few dark UI blocks.
- **"Surprise" accents on project cards only:** sage/olive green, coral-salmon `#FF5F5F`, teal `#7EC4CF` — each portfolio card gets its own saturated color block; the one place the palette breaks from neutral+orange.
- **Borders/dividers:** light gray `#E5E7EB`, extremely thin (0.8px).

### Typography
- **Display font:** "whyte" — bold (700) at huge sizes for hero words (~103px, tracking ~-5px), lighter (400) for smaller subheads (~20px). Tight tracking gives a condensed, poster-like feel.
- **Accent font:** "array" — a pixel-dot/matrix-style face used only for small stylized labels (~37px, regular). A distinct textured accent font, not body copy.
- **Body font:** Poppins, 16px/32px line-height — generous line spacing.
- Pairing: a huge tight-tracked geometric display face against a rounder, more spaced-out humanist sans for body.

### Components
- **Buttons:** fully pill-shaped (`border-radius: 9999px`), small padding (8px/24px), 14px medium text, soft diffused shadow (`0 20px 25px -5px rgba(0,0,0,0.1)`).
- **Cards (service):** hairline borders (~0.8px `#E5E7EB`), 24px radius, essentially no shadow — flat outlined-card aesthetic.
- **Project cards:** no border, bold saturated fill per card, large radius, big bold type on the color block, plus a small pill-shaped year tag.
- **Nav:** minimal — logo mark with orange dot left, dark-mode moon toggle right, floating over cream with no container/border.
- **Footer:** understated — thin 1px divider, small caption copyright, plain text nav links, a small decorative cat illustration; no heavy columns.
- **Easter egg:** a skill "toggle switch" styled as a physical red rocker/light-switch in the hero.

### Spacing rhythm
- Generous, airy: hero-adjacent sections ~128px top / 64px bottom; content sections ~80/80. Spacious, breathing, not dense.
- A faint dot-grid "graph paper" texture sits behind the whole page, reinforcing a designer's-sketchpad feel and softening the large cream areas.

### Motion personality
- Subtle and playful rather than sharp/cinematic — ambient/looping or hover-triggered, nothing jarring.
- A continuous marquee scrolls the client-logo row. Decorative icons "draw themselves" via dashed-path/dot keyframes. A radial-gradient glow pulses behind a button/badge.
- All interactive elements use ~150ms ease transitions — snappy but soft.

### Most distinctive thing
A huge ultra-tight-tracked poster typeface on a cream dot-grid "sketchpad" background, one consistent orange accent everywhere — except project cards, where the system deliberately breaks its own restraint and lets each case study wear its own bold saturated color block.

---

## HARD REQUIREMENTS — never use (non-negotiable, NOT suggestions)

- **No teal accent**
- **No purple gradient**
- **No three-column hero**
- **No 4px left accent bar on cards**
- **No "Get in touch" button** (capstone rule — there is no contact)
- **No status dot with a pulsing animation**
- **No Lucide icons**
- **No generic AI fonts, colors, and mechanisms** (this explicitly means: no Inter, no Roboto, no default shadcn/Tailwind slate palettes, no stock "AI startup" look)

If any proposal violates one of these, discard it and regenerate. These override anything the baselines above happen to do (e.g. baseline-A uses teal — do NOT carry that over).

---

## OUTPUT SHAPE (exactly what to return)

Return a single design-system spec with these five parts and nothing else:

1. **Palette**
   - 1 dominant color (hex + role)
   - 1 accent color (hex + role; used sparingly, high-impact)
   - A neutral ramp (background, surface, borders, text — hex values)
   - Note light/dark handling if relevant; ensure text meets WCAG AA.

2. **Typography**
   - 1 display/heading face + 1 body face — **named real fonts, and NOT Inter or Roboto**
   - A type scale (H1 / H2 / H3 / body / small) with size, weight, line-height, letter-spacing
   - Optionally a mono/accent face for labels

3. **Components** (isolated specs, not placed on a page)
   - **Button** — shape, radius, fill/border, text style, hover
   - **Card** — radius, border, shadow (or absence), fill
   - **Nav** — shape, background, treatment
   - **Footer** — structure and treatment

4. **Spacing scale** — a named scale (e.g. 4 / 8 / 16 / 24 / 40 / 64 / 96 / 128) and how section vs. component rhythm should differ

5. **Motion personality** — described in words + concrete timings/easings (durations, easing curves, what animates and what does NOT)

Deliver tokens/values I can reuse. No page mockups.
