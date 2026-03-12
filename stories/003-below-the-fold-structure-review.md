# Story 003 - Below-the-Fold Structure Review

## Status
`done`

## Objective
Review the current below-the-fold section structure and define a cleaner narrative architecture for the middle and lower parts of the portfolio.

## Context
The hero is already strong, but the lower half of the site likely contains weaker, more fragmented, or more generic sections. Before redesigning section by section, the repo should define how these sections should relate to one another.

## In Scope
- review current below-the-fold section sequence
- identify overlap, fragmentation, and weak transitions
- propose a cleaner narrative flow
- define which sections should remain separate and which may be merged or reframed
- document the recommended lower-page structure for future redesign stories

## Out of Scope
- implementing the redesign in code
- rewriting the hero
- full copy pass
- performance tuning
- site-wide spacing refactor

## Acceptance Criteria
- there is a documented target narrative flow for below-the-fold sections
- overlapping or weak sections are identified
- future redesign stories can reference a clear structure instead of guessing
- the proposed structure is consistent with `PRD.md`, `brand.md`, and `decisions.md`

## Likely Files
- `PRD.md`
- `brand.md`
- `decisions.md`
- `progress.txt`
- current section/component files in the app

## Dependencies
- `PRD.md`
- `brand.md`
- `decisions.md`
- Story 002

## Validation
- manually review the proposed structure for coherence
- confirm the structure preserves hero-first quality
- confirm the structure improves narrative continuity
- ensure the proposed grouping does not broaden scope irresponsibly

## Implementation Notes
- prefer fewer stronger narrative blocks
- treat the current lower half as refinement opportunity, not blank slate
- avoid turning the page into a giant dump of categories
- this story should make later section redesign stories easier and narrower

## Review Outcome

Current sequence reviewed:
- `Services -> Proof -> About -> Process -> Projects -> Stack -> Experience -> Studies -> FAQ -> Contact -> Footer`

Main structural issues identified:
- `Proof` appears before actual work and relies on abstract signals instead of concrete evidence.
- `About` and `Process` split one positioning story into two separate stops.
- `Stack`, `Experience`, and `Studies` repeat technical-depth signals across too many isolated sections.
- too many adjacent sections use the same two-column shell and equal visual weight, which flattens the page rhythm.

Recommended target flow:
1. `Services` remains the first below-the-fold block and clarifies the offer.
2. `Selected Work` moves up to become the main proof surface, absorbing the strongest standalone `Proof` signals.
3. `About + Process` becomes one combined block about positioning and working style.
4. `Technical Depth` becomes one consolidated section that merges `Stack`, `Experience`, and `Studies`.
5. `FAQ` stays near the end as practical objection handling.
6. `Contact` closes the page as the intentional conversion surface, followed by the footer.

Notes for follow-up stories:
- Story 004 should keep `Services` separate but make it more curated and authoritative.
- Story 005 should treat work as the primary proof section and reduce the need for a standalone `Proof` block.
- Story 006 should solve `Process`, `Stack`, `Experience`, and `Studies` as one related design problem.
