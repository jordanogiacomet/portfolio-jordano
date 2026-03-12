# Story 016 - Contact Height Calibration

## Status
`done`

## Objective
Calibrate the final contact section so it remains strong and premium but stops feeling taller and heavier than necessary.

## Context
The contact section now works much better as a real closing surface, but it still carries more vertical mass than it needs, especially in the right guidance panel and the overall relationship between headline, CTA area, and lower contact cards.

## In Scope
- reduce overall visual height of the section
- reduce height or padding of the right-side guidance panel
- tighten spacing between the main contact block and the lower contact cards
- preserve clarity and conversion intent

## Out of Scope
- changing contact strategy
- building complex new form behavior
- hero/services/projects redesign

## Acceptance Criteria
- the section remains premium and intentional
- overall height is reduced
- the right panel feels better calibrated
- CTA and contact cards feel more connected
- the page closes with stronger rhythm

## Likely Files
- `components/Contact.tsx`
- `data/contact.json`
- shared contact link utilities if needed

## Dependencies
- Story 011
- `brand.md`
- `decisions.md`

## Validation
- verify desktop and mobile
- confirm the section closes the page more cleanly
- confirm conversion clarity remains strong
- run relevant lint/build checks if code changes

## Implementation Notes
- reduce dead space before reducing clarity
- keep the right panel useful, but less dominant
- preserve the premium closing feel
- avoid over-compressing the final CTA into something abrupt
