# Story 014 - About and Process Compaction

## Status
`done`

## Objective
Reduce structural bulk in the about/process area so the section reads more clearly and avoids feeling like two oversized sections fused together.

## Context
The current about/process composition is not weak, but it carries too much vertical and structural mass for the amount of narrative work it needs to do.

## In Scope
- tighten spacing between about and process content
- reduce card height or visual bulk in the process area
- improve the relationship between biography framing and process steps
- preserve readability and premium tone

## Out of Scope
- rewriting the biography content wholesale
- changing the overall process narrative
- selected work or contact redesign

## Acceptance Criteria
- the section feels more concise
- process cards feel less oversized
- the area reads as one coherent block instead of two large blocks stacked
- mobile behavior remains strong

## Likely Files
- `components/About.tsx`
- `data/about.json`
- `data/process.json`

## Dependencies
- Story 011
- `brand.md`

## Validation
- verify desktop density
- verify mobile stacking
- confirm improved economy without loss of clarity
- run relevant lint/build checks if code changes

## Implementation Notes
- compress structure before touching copy
- avoid making the section feel cramped or under-explained
- preserve warmth and clarity while reducing mass
- the goal is one coherent narrative block, not two oversized stacked moments
