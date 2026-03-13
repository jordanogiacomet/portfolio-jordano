# Story 019 - Header Polish

## Status
`todo`

## Objective
Refine the site header so it feels more intentional, more premium, and more aligned with the visual quality of the hero and the rest of the portfolio.

## Context
The current header is functional, but it still feels too generic and visually underpowered relative to the rest of the site. It behaves more like a standard navigation shell than a deliberate brand surface.

Because the header is the first persistent interface element across the page, it should reinforce identity, improve scan quality, and support navigation with stronger visual confidence. The goal is not to make it louder or heavier, but to make it feel more designed, more distinctive, and more coherent with the portfolio’s premium dark editorial direction.

## In Scope
- refine the visual presence of the header
- improve hierarchy between brand area, navigation, and any CTA treatment
- strengthen spacing, padding, and compositional balance
- improve active, hover, and focus states if needed
- reduce generic “capsule nav” feel if present
- improve desktop and mobile perceived quality without broad navigation restructuring
- keep the header clearly compatible with the hero and page identity

## Out of Scope
- hero redesign
- changing the site information architecture
- adding complex new navigation behavior
- introducing a new design language unrelated to the current identity
- redesigning multiple lower-page sections
- rewriting large amounts of site copy
- adding backend or analytics functionality

## Acceptance Criteria
- the header feels more intentional and less generic than before
- the brand/name area has clearer visual presence
- navigation hierarchy is clearer on desktop and mobile
- hover, active, and focus states feel deliberate and readable
- the header feels compatible with the hero rather than visually weaker or disconnected
- the updated header does not become heavy, flashy, or template-like
- no unrelated page-wide redesign is introduced

## Likely Files
- `components/Navbar.tsx`
- `components/site-links.ts`
- `app/globals.css`
- `progress.txt`

## Dependencies
- `PRD.md`
- `brand.md`
- `decisions.md`
- `progress.txt`

## Validation
- run the smallest relevant lint check for touched files
- run typecheck if component structure or logic changes
- run build if styling or rendered behavior changes
- manually review the header for:
  - desktop visual presence
  - mobile clarity
  - spacing and hierarchy
  - hover/focus/active state quality
  - compatibility with the hero
- document any browser-review limitation honestly if a browser-capable environment is unavailable

## Implementation Notes
- prefer refinement over novelty
- strengthen presence through hierarchy, spacing, and surface quality before adding decorative elements
- keep the header calm, premium, and technically credible
- avoid turning the navigation into a flashy product-marketing bar
- the header should feel like a designed brand surface, not a default component wrapper
- preserve usability and touch/focus clarity while improving visual maturity

## Suggested Skill
- `ui-polish`
- `accessibility-review` if interactive state visibility is adjusted
- `content-normalization` only if visible navigation/CTA labels change