# Story 002 - Language Consistency Strategy

## Status
`done`

## Objective
Choose and document a consistent public-facing language strategy for the portfolio so the site stops feeling mixed or transitional.

## Context
Mixed-language UI often makes a portfolio feel unfinished unless bilingual behavior is intentional. The redesign requires cleaner narrative control and a more polished public-facing impression.

## In Scope
- decide the primary language for the public-facing site
- document the decision in repo docs
- record the decision in `decisions.md`
- define the scope of application for this language strategy
- identify areas likely affected by the eventual copy cleanup

## Out of Scope
- full copy rewrite across the site
- translation of every section immediately
- implementation of a bilingual switcher
- CMS or localization infrastructure
- changing section structure

## Acceptance Criteria
- the repo clearly defines one primary language for public-facing UI
- the decision is recorded in `decisions.md`
- future stories know whether headings, CTA labels, and section copy should be normalized to one language
- no ambiguity remains about whether mixed-language output is acceptable in production

## Likely Files
- `decisions.md`
- `PRD.md`
- `brand.md`
- `progress.txt`

## Dependencies
- `PRD.md`
- `brand.md`
- `decisions.md`

## Validation
- manually review the chosen language strategy for completeness
- verify the decision covers headings, labels, CTA copy, footer, and section copy
- ensure no accidental bilingual requirement is implied

## Implementation Notes
- prefer a single-language public experience for now
- this story is about decision and documentation, not full implementation
- the actual content cleanup can happen in later UI stories or a dedicated copy pass
