# Story 005 - Selected Work Redesign

## Status
`done`

## Objective
Transform the projects/work section into a more curated “selected work” presentation that better communicates relevance, seriousness, and execution quality.

## Context
A generic projects grid often feels interchangeable and weak. The portfolio needs a work presentation that feels more like selected proof than a random list of things built.

## In Scope
- redesign the projects/work section layout
- reposition the section as selected work or equivalent curated proof
- improve project hierarchy and framing
- improve supporting project descriptions if needed
- refine visual treatment so the section feels more editorial and credible
- improve responsive behavior for the section

## Out of Scope
- hero redesign
- services/capabilities redesign
- full contact redesign
- global copy rewrite across the site
- adding fake case-study metrics or fake commercial outcomes
- introducing a multi-page case-study system

## Acceptance Criteria
- the section feels more curated than before
- projects feel intentional rather than generic
- hierarchy is clearer
- visual composition is stronger
- descriptions feel sharper and more professional
- the section supports the portfolio’s premium/product-facing positioning
- no fake proof is introduced

## Likely Files
- work/projects section component
- related work/project content file
- shared card or layout utilities if used by the section
- any image assets or media references used by the section

## Dependencies
- `PRD.md`
- `brand.md`
- `decisions.md`
- Story 003

## Validation
- run relevant lint/typecheck/build commands if code is changed
- manually verify desktop layout
- manually verify mobile layout
- confirm project hierarchy is readable and visually distinct
- confirm the section does not clash with hero tone

## Implementation Notes
- prefer “selected work” logic over “project dump” logic
- support credibility through curation, not quantity
- keep descriptions concise and meaningful
- do not over-template the layout
