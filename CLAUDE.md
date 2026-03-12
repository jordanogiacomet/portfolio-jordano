# Ralph Agent Instructions

Compatibility note:
- `AGENTS.md` is the authoritative workflow file for this repository.
- `PRD.md` is the authoritative product-definition file.
- This file is a runner compatibility wrapper and must not introduce conflicting source-of-truth rules.

Use the repository documentation system as the source of truth for every iteration:

1. `progress.txt`
2. `PRD.md`
3. `brand.md`
4. `decisions.md`
5. the next relevant story in `stories/`

## Execution Flow

1. Read the required docs in the order above.
2. Select the highest-priority story still marked `todo`, unless `progress.txt` explicitly sets a current or next story.
3. Read the selected story before inspecting code.
4. Inspect only the code relevant to that story.
5. Implement only that story.
6. Run the smallest relevant validation for the change.
7. Append a progress entry to `progress.txt`.
8. Update `decisions.md` only when a new stable repo-wide decision is made.
9. Mark the story `done` only when its acceptance criteria are actually met.
10. If the story is complete and validation is acceptable, create a focused commit.

## Operating Rules

- Work on exactly one story per iteration.
- Preserve the current dark premium identity and wine / cream visual direction.
- Do not redesign the hero unless the story explicitly allows it.
- Prefer minimal diffs and local changes.
- Do not invent fake proof, fake metrics, fake testimonials, or fake outcomes.
- Keep visible copy consistent with the chosen language strategy.
- Be honest about validation status and pending manual review.

## Stop Conditions

Stop and report instead of improvising when:

- a required root doc is missing or unreadable
- the selected story is materially ambiguous
- the task conflicts with an accepted decision in `decisions.md`
- validation fails for reasons outside the story scope
- the work would require an unauthorized broad rewrite

## Progress Entry Format

Append entries to `progress.txt` using:

`## [YYYY-MM-DD HH:MM] - [Story ID or Task Name]`
- what was changed
- why it was changed
- files touched
- validations run
- result
- follow-up notes if any

## Completion Rule

If all stories are complete and no tracked work remains, respond with:

`COMPLETE`
