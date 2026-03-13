# Story 020 - Technical Depth Purpose Rework

## Status
`done`

## Objective
Rework the technical-depth section so it communicates a clearer buyer-facing purpose, stronger relevance, and more commercially useful credibility instead of reading like a broad technical inventory.

## Context
The current technical-depth section is structurally cleaner than the earlier stack/experience/studies split, but it still risks feeling too abstract, too sparse, or too internally framed for a first-time visitor. It shows seriousness, but it does not yet make its role in the page narrative clear enough.

Because this section sits in the credibility zone of the portfolio, it must help visitors understand where Jordano’s technical depth becomes valuable in real work. The goal is not to remove technical seriousness, but to make that seriousness more legible, more focused, and more useful to a hiring or client decision.

## In Scope
- reframe the technical-depth section around clearer purpose
- improve section hierarchy and buyer-facing readability
- reduce inventory-like or overly abstract presentation
- simplify, merge, or retitle internal groups if needed
- improve the relationship between the section heading, support copy, and main credibility blocks
- reduce empty-feeling composition if present
- make the section feel more necessary in the overall page narrative
- verify desktop and mobile coherence for the updated section

## Out of Scope
- hero redesign
- broad full-page spacing refactor
- rewriting the entire portfolio copy
- redesigning unrelated sections outside local adjustments strictly required for coherence
- changing the overall brand palette
- inventing fake proof, fake metrics, or fake outcomes
- adding new backend functionality

## Acceptance Criteria
- the technical-depth section has a clearly understandable purpose for a first-time visitor
- the section feels more commercially useful and less like a technical inventory
- hierarchy is clearer and the section is easier to scan
- the section no longer feels conceptually ambiguous or structurally unnecessary
- composition feels denser in a purposeful way, not empty or over-spread
- the section remains compatible with the hero and overall brand direction
- no fake claims, inflated expertise signals, or generic filler are introduced

## Likely Files
- `components/TechnicalDepth.tsx`
- `data/technical-depth.json`
- `app/globals.css`
- `progress.txt`

## Dependencies
- `PRD.md`
- `brand.md`
- `decisions.md`
- `progress.txt`
- Story 006
- Story 015

## Validation
- run the smallest relevant lint check for touched files
- run typecheck if structure, content mapping, or component logic changes
- run build if rendered layout or styling changes
- manually review the technical-depth section for:
  - section purpose clarity
  - hierarchy
  - buyer-facing usefulness
  - desktop composition
  - mobile stacking
  - compatibility with adjacent sections
- document any browser-review limitation honestly if a browser-capable environment is unavailable

## Implementation Notes
- this section should explain where technical depth becomes useful, not just show that it exists
- prefer a small number of strong technical themes over broad grouped inventory
- reduce abstract framing that delays understanding
- keep the tone calm, serious, and premium
- preserve technical credibility without turning the section into study notes
- if a support panel or side structure adds little value, simplify or reduce it
- clarity should win over abstraction when the two conflict

## Suggested Skill
- `section-redesign`
- `content-normalization`
- `ui-polish`
