# Story 015 - Technical Depth Compaction

## Status
`done`

## Objective
Compact the technical depth section so it keeps its authority while reducing excessive height and repeated structural weight.

## Context
Technical depth is already one of the stronger sections, but it still feels slightly too tall and over-framed relative to the information being presented.

## In Scope
- tighten summary/stat spacing
- reduce row height in domain listings
- reduce excess vertical spacing between intro and main content
- keep the cream surface strong while improving density

## Out of Scope
- changing the technical narrative direction
- rewriting all stack content
- selected work/contact changes
- accessibility pass

## Acceptance Criteria
- the section becomes materially more compact
- authority and readability remain intact
- the cream panel still feels premium
- the section no longer feels oversized

## Likely Files
- `components/TechnicalDepth.tsx`
- `data/technical-depth.json`
- related stack/experience/studies data files if needed

## Dependencies
- Story 011
- `brand.md`
- `decisions.md`

## Validation
- verify desktop and mobile
- confirm the section stays readable
- confirm the compaction does not make the section feel dense or cramped
- run relevant lint/build checks if code changes

## Implementation Notes
- reduce vertical mass without flattening hierarchy
- prefer compaction through spacing and row rhythm, not through content deletion
- keep the section feeling authoritative and structured
- avoid turning the cream surface into a dense information block
