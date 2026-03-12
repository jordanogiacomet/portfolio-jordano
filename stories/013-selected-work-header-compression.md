# Story 013 - Selected Work Header Compression

## Status
`done`

## Objective
Compress the intro area of the selected work section so the featured project appears earlier and the section feels less vertically delayed.

## Context
The selected work section has strong direction, but the upper header zone currently consumes too much height before the featured project begins.

## In Scope
- reduce header-to-featured-project distance
- tighten the relationship between heading, description, curation panel, and first project
- preserve the editorial feel
- keep the featured project as the primary visual anchor

## Out of Scope
- rewriting the entire projects section
- changing project selection strategy
- contact or technical depth work
- global typography redesign

## Acceptance Criteria
- the featured project begins earlier
- the top of the section feels tighter without becoming cramped
- the curation panel remains useful but less detached
- the section feels more immediate and intentional

## Likely Files
- `components/Projects.tsx`
- `data/projects.json`

## Dependencies
- Story 011
- `brand.md`
- `decisions.md`

## Validation
- verify desktop and mobile
- confirm the section still feels premium
- confirm the first featured card has stronger immediacy
- run relevant lint/build checks if code changes

## Implementation Notes
- compress the intro, not the meaning
- avoid making the header feel abrupt or underexplained
- preserve the “selected work” framing and featured-project emphasis
- prefer vertical compression and relational tightening over structural reinvention
