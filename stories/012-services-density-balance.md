# Story 012 - Services Density Balance

## Status
`done`

## Objective
Reduce excess vertical mass and improve balance in the services section so the main offer starts earlier and the left framing panel supports rather than dominates.

## Context
The services section is strong, but the left framing block and top spacing still make the section feel slightly too heavy and delayed before the main service cards fully engage.

## In Scope
- compress the section header-to-card distance
- reduce visual heaviness of the left framing panel
- refine spacing inside the framing panel
- improve balance between left support column and right content column
- preserve the section’s premium tone

## Out of Scope
- new service content strategy
- hero changes
- selected work changes
- global section rhythm work beyond what is required locally

## Acceptance Criteria
- the section starts earlier visually
- the first service card feels closer to the section intro
- the left panel feels supportive rather than dominant
- desktop and mobile remain coherent
- no template-like clutter is introduced

## Likely Files
- `components/Services.tsx`
- `data/services.json`
- shared spacing styles if touched locally

## Dependencies
- Story 011
- `brand.md`
- `decisions.md`

## Validation
- verify desktop composition
- verify mobile stacking
- confirm improved balance between framing and cards
- run relevant lint/build checks if code changes

## Implementation Notes
- reduce dead space before the first strong content block
- avoid making the left column too visually “solid” or tall relative to the cards
- prefer subtle compression over structural reinvention
- keep the section feeling premium and editorial, not cramped
