# Story 001 - Brand Guardrails Foundation

## Status
`done`

## Objective
Establish strong brand guardrails so future section redesigns preserve the current identity and do not drift into a generic template aesthetic.

## Context
The redesign is supposed to elevate the site while preserving its premium dark editorial identity. Without explicit guardrails, autonomous agents may interpret the direction too loosely and produce inconsistent visual outcomes.

## In Scope
- define visual identity constraints
- define tone-of-voice constraints
- define color, typography, spacing, and mood guardrails
- define anti-patterns that future redesign work must avoid
- define hero compatibility rules
- define below-the-fold design guardrails

## Out of Scope
- implementing visual redesign in code
- changing palette tokens in the codebase
- introducing a new design system package
- rewriting public-facing copy section by section
- performance or accessibility work

## Acceptance Criteria
- the repo has a clear brand guardrails document
- future agents can infer what “preserve identity” means in practical terms
- hero preservation rules are explicit
- below-the-fold redesign rules are explicit
- common anti-patterns are documented clearly enough to prevent drift

## Likely Files
- `brand.md`
- `PRD.md`
- `decisions.md`
- `AGENTS.md`

## Dependencies
- `PRD.md`
- `decisions.md`

## Validation
- manually review the brand doc for clarity and actionability
- confirm the guidance is reusable across multiple future stories
- confirm the doc distinguishes between inspiration and literal imitation
- verify the brand direction is compatible with the current hero

## Implementation Notes
- keep the guidance operational, not abstract
- do not over-document tiny visual trivia
- focus on durable repo-wide rules
- preserve the dark premium / wine / cream identity
