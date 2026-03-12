# Story 017 - Repo Doc Sync

## Status
`done`

## Objective
Align root-level repo docs and orchestration files with the accepted documentation workflow after the visual pass is complete.

## Context
The project now uses `PRD.md` as the documented product source of truth, but the repository still contains legacy root-level files and naming that can confuse future agent runs.

## In Scope
- align root docs with accepted workflow
- reduce conflict between legacy and current documentation sources
- keep only the files that are still useful for orchestration
- document the intended role of any remaining legacy file

## Out of Scope
- visual redesign work
- new feature implementation
- broad tooling changes

## Acceptance Criteria
- root doc system is easier to understand
- `PRD.md` remains clearly primary
- legacy files no longer create documentation ambiguity
- agent workflow is easier to follow

## Likely Files
- `AGENTS.md`
- `PRD.md`
- `progress.txt`
- `decisions.md`
- root prompt/orchestration files

## Dependencies
- stories 011–016 completed or mostly completed

## Validation
- manually verify root doc coherence
- confirm no conflicting source-of-truth instructions remain

## Implementation Notes
- preserve files that still serve orchestration value
- remove ambiguity before removing files
- prefer explicit documentation over silent legacy drift
- do not break the current loop tooling while normalizing docs
