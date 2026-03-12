# Story 011 - Section Rhythm System

## Status
`done`

## Objective
Introduce a differentiated section cadence system so the page no longer uses one uniform vertical rhythm for all major sections.

## Context
The first redesign pass improved composition and positioning, but the page still feels mechanically spaced in several below-the-fold areas. The next step is to define and apply a rhythm system that distinguishes compact, standard, and expansive sections.

## In Scope
- define section rhythm tiers
- introduce a reusable spacing system for major sections
- apply the system to below-the-fold sections where helpful
- reduce unnecessary vertical dead space
- preserve premium breathing room while improving cadence

## Out of Scope
- hero redesign
- full structural redesign of every section
- copy rewrite
- performance or accessibility pass
- new visual language exploration

## Acceptance Criteria
- the page no longer feels like every section uses the same cadence
- section padding is more intentional
- rhythm feels more editorial and less mechanical
- no identity loss occurs
- changes remain reusable and system-oriented

## Likely Files
- `app/globals.css`
- section components that consume shared section wrappers
- any shared layout utility for page sections

## Dependencies
- `PRD.md`
- `brand.md`
- `decisions.md`

## Validation
- verify desktop top-to-bottom rhythm
- verify mobile rhythm
- confirm section spacing differences feel intentional rather than random
- run relevant lint/build checks if code changes

## Implementation Notes
- prefer a small reusable system instead of one-off padding tweaks everywhere
- the likely target is a tiered cadence such as `compact`, `standard`, and `expansive`
- apply stronger compression below the fold before touching anything near the hero
- preserve premium breathing room; do not overcorrect into cramped spacing
- this story should make later density and compaction stories easier, not harder
