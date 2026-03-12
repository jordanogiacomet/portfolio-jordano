# Story 000 - Repo Doc Normalization

## Status
`done`

## Objective
Normalize the repository documentation structure so that agent execution follows one coherent source-of-truth system.

## Context
The repo is being reorganized around PRD-driven development and autonomous execution, but the documentation flow still risks inconsistency if different files reference different sources of truth or different read orders.

This story exists to remove that ambiguity before implementation work scales.

## In Scope
- align documentation references across repo-level docs
- ensure `AGENTS.md` references the actual chosen PRD file
- ensure progress tracking and decisions tracking are part of the expected operating flow
- define the canonical read order for future agents
- eliminate references to non-existent or deprecated workflow files where appropriate

## Out of Scope
- visual redesign work
- section implementation changes
- copy rewriting across the public site
- architecture refactors unrelated to repo docs
- introducing a new machine-readable PRD format unless explicitly required

## Acceptance Criteria
- repo-level docs reference a consistent documentation structure
- `AGENTS.md` no longer depends on outdated source-of-truth assumptions
- read order is clear and coherent
- future agents can determine where to read product intent, brand guardrails, decisions, and progress
- no conflicting doc instructions remain at repo root level

## Likely Files
- `AGENTS.md`
- `PRD.md`
- `progress.txt`
- `decisions.md`
- `brand.md`

## Dependencies
- `PRD.md`
- `progress.txt`
- `brand.md`
- `decisions.md`

## Validation
- manually review repo-level docs for naming consistency
- verify that all referenced root docs actually exist
- verify the read order in `AGENTS.md` is executable
- confirm no stale mention of `prd.json` remains unless intentionally preserved

## Implementation Notes
- prefer minimal documentation edits
- keep repo docs lean and operational
- avoid turning `AGENTS.md` into a product spec
- this story should complete before major redesign implementation begins
