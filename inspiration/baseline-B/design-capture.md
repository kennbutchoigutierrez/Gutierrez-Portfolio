# Baseline-B — Design Capture

**Source:** https://aditya-gupta.com.np/
**Why picked:** Easy to navigate, detailed, and creative.

## Palette

- **Dominant background:** warm off-white/cream `rgb(255, 252, 243)` (`#FFFCF3`) — used almost everywhere as the canvas, giving the whole site a paper-like warmth rather than stark white.
- **Primary accent:** burnt orange `rgb(255, 77, 0)` (`#FF4D00`) — used for the logo dot, section labels ("WHAT I OFFER," "MY JOURNEY"), links, icon badges, and key CTAs like "TOGETHER?" in the closing headline. This is the single most-repeated non-neutral color and functions as the brand color.
- **Text neutral:** near-black `rgb(0,0,0)` for body/headline text, with a softer slate `rgb(26,35,50)` for some subheads and gray `rgb(113,113,122)` (`#71717A`) for secondary/muted copy.
- **Dark mode / footer-adjacent surface:** charcoal `rgb(31,41,55)` (`#1F2937`) and near-black `rgb(26,26,26)` appear in a handful of dark UI blocks (theme toggle area, badges).
- **Sparingly-used "surprise" accent colors on project case-study cards only:** sage/olive green, coral-salmon `rgb(255,95,95)`-ish (`#FF5F5F`), and a teal `rgb(126,196,207)` (`#7EC4CF`) — each portfolio card gets its own saturated color block, making this the one place the palette breaks from neutral+orange.
- **Borders/dividers** use a light gray `rgb(229,231,235)` (`#E5E7EB`), extremely thin (0.8px).

## Typography

- **Display font:** "whyte" (custom/licensed font, with system fallback) — used for all headings. It's bold (700 weight) at huge sizes for hero words like "DEVELOPER" (~103px with tight negative letter-spacing of about -5px), and lighter weight (400) for smaller subheads (~20px). The tight tracking on giant type gives a condensed, poster-like feel.
- **Accent/monospace-style font:** "array" — a pixel-dot/matrix-style font used only for small stylized labels like "GRAPHICS" in the hero (~37px, regular weight). This acts as a distinct textured accent font, not for body copy.
- **Body font:** Poppins (with system-ui/Segoe UI fallback) at a base of 16px/32px line-height — used for paragraphs, nav, and general UI text, giving generous line spacing relative to font size.
- Overall type pairing is a huge, tight-tracked geometric display face contrasted against a rounder, more spaced-out humanist sans for body text.

## Components

- **Buttons** are fully pill-shaped (`border-radius: 9999px`), e.g. "Get in Touch" and "Connect" — small padding (8px/24px), 14px medium-weight text, soft diffused shadow (`0 20px 25px -5px rgba(0,0,0,0.1)` style), not flat/sharp.
- **Cards** (expertise/service cards) use hairline borders (~0.8px, `#E5E7EB`), large 24px corner radius, and essentially no shadow — a flat, outlined-card aesthetic rather than elevated Material-style shadows.
- **Project/case-study cards** break this pattern: no border, bold saturated fill colors per card, large radius, big bold type overlaid directly on the color block, plus a small pill-shaped year tag (e.g. "2023," "2024") in a rounded chip.
- **Nav** is minimal — logo mark ("Aadi" with orange dot) on the left, dark-mode moon toggle on the right, floating over the cream background with no visible container/border.
- **Footer** is understated: thin 1px hairline divider, small caption-sized copyright text, plain text nav links (GitHub, LinkedIn, X, Reddit), and a small decorative cat illustration for personality — no heavy footer columns or dense sitemap.
- A **skill "toggle switch"** styled as a physical red rocker/light-switch appears in the hero as a playful UI easter egg rather than a functional control.

## Spacing rhythm

- Generous, airy vertical rhythm: top-level sections use roughly 128px top padding / 64px bottom padding for hero-adjacent sections, and a more even 80px/80px for content sections like "Services." This is a spacious, breathing layout rather than a dense one.
- A faint **dot-grid ("graph paper") texture** sits behind the entire page, reinforcing a designer's-sketchpad feel and visually softening the large empty cream areas between blocks.

## Motion personality

- **Overall motion character:** subtle and playful rather than sharp or cinematic — nothing jarring, mostly ambient/looping or hover-triggered.
- A continuous **marquee animation** scrolls the client-logo row in the hero indefinitely.
- Small decorative icons (pen tool, globe, fingerprint, sparkle) in the "About" narrative paragraph appear to have animated **dashed-path/dot-drawing effects** (custom keyframes named `pathTriangle`, `dotTriangle`, `pathRect`, `dotRect`, `pathCircle`), suggesting these icons "draw themselves" or pulse subtly.
- A radial-gradient **"star-btn" glow animation** pulses behind at least one button/badge, giving a soft shimmering halo effect.
- Standard utility animations (`pulse`, `ping`, `bounce`, `spin`, `blink`, accordion open/close) exist in the stylesheet for smaller interactive states like accordions or loaders.
- All interactive elements (buttons, links) use quick ~150ms ease transitions on color/background/border — snappy but soft, not abrupt.

## The single most distinctive thing about this design system

The combination of a huge, ultra-tight-tracked poster typeface ("whyte") set against a cream, dot-grid "sketchpad" background, punctuated by one consistent orange brand accent everywhere except the project-card section — where the system deliberately breaks its own restraint and lets each case study wear its own bold, saturated color block. That contrast between a disciplined, almost editorial monochrome-plus-orange system and the sudden bursts of candy-colored project cards is the site's signature move.
