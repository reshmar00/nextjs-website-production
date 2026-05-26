# About Page — Dynamic Glass Timeline

## Summary

Replace the static infographic image in `pages/about.tsx` with a scrollable, animated zigzag timeline component showing career history from Bachelor's (2009) to present.

## Layout

- Center-spine zigzag: vertical gold line down the middle, cards alternating left/right
- Each entry: card on one side, gold dot on the spine, empty spacer on the other
- Entries ordered newest → oldest (top to bottom)

## Card Structure

Each card has two visually distinct zones:

**Glass header** (role title + date period)
- Gradient background (dark → mid → light, 135deg) with backdrop blur
- Diagonal shine band overlay (rgba white, ~32% opacity at peak)
- 1px top-edge highlight rim
- White bold Raleway text, uppercase, role ~1rem/800, date ~0.65rem/600

**White body** (description only — no company names)
- White background, black text, Raleway uppercase, ~0.68rem/400

## Scroll Animation

Fade + Float Up via Framer Motion `whileInView`:
- `initial`: opacity 0, y +28px
- `animate`/`whileInView`: opacity 1, y 0
- `exit` (on scroll-out): reverts to initial — `viewport={{ once: false, amount: 0.15 }}`
- Duration: 0.6s, easing: `[0.22, 1, 0.36, 1]` (ease-out spring)

## Data

| # | Role | Period | Side | Gradient from → mid → to |
|---|------|--------|------|--------------------------|
| 1 | Geospatial Web Development Intern | Jan 2026 – Present | left | #1AB2BD → #1fcdd8 → #28D6E0 |
| 2 | Software Developer | Jun 2024 – Sep 2025 | right | #990E6E → #c41e97 → #F233B8 |
| 3 | Junior ML Engineer | Dec 2023 – Jun 2024 | left | #E0A40B → #edb90e → #F5CF14 |
| 4 | MSD Student | Aug 2022 – Dec 2023 | right | #B81111 → #c51111 → #CF1111 |
| 5 | Teaching | 2019 – 2022 | left | #451A7D → #4e1e96 → #5A16BA |
| 6 | Language Editing | 2017 – 2018 | right | #872399 → #aa28c6 → #DB2AFA |
| 7 | Advertising | 2015 – 2017 | left | #1A991A → #1db01d → #21C221 |
| 8 | MBA | 2013 – 2015 | right | #9A4A09 → #c25d0c → #E66F0E |
| 9 | Bachelor's Degree | 2009 – 2012 | left | #17178C → #2526b8 → #3132DE |

## Description Copy

1. Successfully launched the FIMbench webapp, part of our company's work with CIROH (Cooperative Institute for Research to Operations in Hydrology).
2. FullStack development, DevOps, and ML Ops under the NSF-funded National Data Platform.
3. Interned at a local startup (PassiveLogic, Inc.), then joined as a Jr. Machine Learning and Object Detection Engineer. Helped set up the base for one of their proprietary iOS applications.
4. Transferred to the University of Utah and graduated from the Master of Software Development program.
5. Volunteered at a non-profit as a teacher, then pursued a Master of Arts in Teaching degree from Westminster College.
6. Joined as Junior Language Editor. Promoted to Team Lead and Executive Editor in less than a year.
7. Account Executive at two advertising startups. Coordinated branding efforts across industries and types of media.
8. Graduated with an MBA in Communication Management, specialising in Advertising.
9. B.Sc. in Visual Communication with an emphasis on Television Production. Then worked 4 months as the in-house Assistant Marketing Manager at a restaurant chain.

## Files Changed

- `pages/about.tsx` — replace image with Timeline component
- `pages/components/Timeline.tsx` — new component (TimelineItem + Timeline)

## Out of Scope

- Mobile responsive layout (can be addressed separately)
- Adding/editing entries via a CMS or admin UI
