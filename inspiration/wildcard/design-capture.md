# Wildcard — Design Capture

**Source:** https://www.sunnypatel.net/
**Why picked:** Animated, showcases the skills on the page itself, very technical.

## Palette

- **Base background** is near-black charcoal `rgb(11,13,15)` (~`#0B0D0F`) — this dominates roughly 90%+ of the surface area.
- **Primary text** is warm off-white/cream `rgb(237,232,220)` (~`#EDE8DC`), not pure white — gives a slightly aged, paper-like tone against the black.
- **Secondary/body text** is a muted warm gray `rgb(199,195,186)` (~`#C7C3BA`); tertiary/meta text (labels, terminal logs) drops to a cooler gray `rgb(138,146,155)` (~`#8A929B`).
- **The single accent color** is a burnt orange/terracotta `rgb(217,102,61)` (~`#D9663D`) — used sparingly and deliberately: one highlighted word in the hero ("silicon"), status dots ("Actively maintained," "Open to software roles"), link hovers, and the final CTA button border/tint. It never dominates a whole surface.
- **Card/panel backgrounds** sit one step up from the base at `rgb(18,21,24)` (~`#121518`), with hairline borders in `rgb(38,43,48)` (~`#262B30`) — very low contrast, almost invisible until you look closely.
- **Buttons** use translucent color washes rather than flat hex (e.g., orange at ~10% opacity for fill, ~50% for border) rather than solid fills — a glassy, tinted-glass approach rather than blocky color.

## Typography

- **Display/headline font** is Geist (sans), weight 600 (semibold), heavily tightened tracking (letter-spacing around ‑2.6px on the H1, ‑0.9px on H2) — condensed, technical, modern-grotesk feel.
- **Body font** is Hanken Grotesk, regular 400 weight, humanist sans, size ~18px with generous 29px line-height for paragraphs — noticeably softer/rounder than the headline font, creating contrast between "engineered" headlines and "readable" body copy.
- **H1** sits around 75px/71px line-height; **H2** around 44px/46px — a big jump between hero and section headers, then body drops to 16–18px, so the type scale is quite extreme (big leaps, few in-between sizes).
- **A third font, Geist Mono**, is used as the accent/monospace face — reserved for the terminal boot sequence, section eyebrow labels ("SESSION," "SELECTED WORK"), nav numbering ("01 Projects"), and button labels — reinforcing a "developer console" personality throughout.

## Components

- **Buttons:** small radius (6px), thin hairline borders (0.8px) rather than filled blocks, translucent color backgrounds, mono font for labels, no drop shadow — flat and precise rather than glossy.
- **Cards (project panels):** 10px radius (`--radius: .625rem`), 0.8px hairline border in that same dark gray, semi-transparent dark fill with backdrop-blur (glass effect), and a soft ambient shadow (`0 24px 60px -30px rgba(0,0,0,.7)` plus a 1px inset highlight on top) rather than a hard drop shadow — gives a floating, softly-lit panel look. Cards also carry a fractal-noise SVG grain texture overlay at ~2.5% opacity, adding subtle analog/film grain texture rather than flat digital color.
- **Nav:** fixed top bar, transparent/dark, numbered links ("01 Projects," "02 Work," "03 About") in mono, a search pill with visible "Ctrl K" shortcut hint, and a solid cream-filled "Get in touch" button that's the only fully opaque, high-contrast button on the page.
- **Footer:** no cards or boxes at all — just a single hairline top divider, plain text columns (site links, social links, location, copyright), completely flat with zero shadow or radius, mirroring the terminal/CLI aesthetic with mono copyright text.
- Overall there are **no hard shadows** anywhere except the soft ambient card shadow; borders are the primary structuring device, at sub-pixel weight (0.8px), keeping everything feeling thin and precise.

## Spacing rhythm

- Generous vertical breathing room between major sections — hairline divider rules with large empty padding (roughly 96–150px of vertical space) separate hero, terminal panel, work grid, "what I do," and CTA sections.
- Within sections, spacing is tighter and grid-based (project cards in a 3-up row with modest gutters), so the rhythm alternates: tight/dense within a component, generous/airy between components.

## Motion personality

- **Overall feel:** subtle and atmospheric, not playful or sharp — motion is used to reinforce the "systems/terminal" theme rather than to delight.
- **Observed animated elements:** a typing/boot animation in the terminal panel ("$ boot --profile sunny" types out with a blinking cursor and status lines resolving to "all layers online"); a faint ambient glow/gradient bloom that drifts behind the hero illustration and card headers; likely scroll-triggered fades on section reveals (headings and cards appear to animate in as you scroll, consistent with the `transition:all` set globally on elements).
- No bouncy, elastic, or high-energy motion — everything eases in slowly, matching the low-key, engineering-console mood.

## Most distinctive thing

The site's defining trait is its **"boot sequence" / terminal-console conceit** — a retro CRT monitor illustration paired with a live-typing boot log, mono-font system labels ("SESSION," numbered nav items), and a nearly monochrome near-black palette pierced by exactly one warm terracotta accent — turning a personal portfolio into something that reads like powering on a piece of hardware rather than loading a webpage.
