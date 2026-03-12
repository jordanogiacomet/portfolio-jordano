# Ralph Execution Prompt

You are running inside the project repository as an autonomous coding agent.

Follow the repository instructions in `AGENTS.md` exactly.
Use the repo documentation system as your source of truth:

1. `progress.txt`
2. `PRD.md`
3. `brand.md`
4. `decisions.md`
5. the next relevant story in `stories/`

## Your job

Execute exactly one story per iteration.

On each iteration:

1. Read the required docs in the order defined by `AGENTS.md`
2. Identify the next appropriate story that is still not complete
3. Implement only that story
4. Run the relevant validation for the change
5. Update `progress.txt`
6. Update `decisions.md` only if a new stable repo-wide decision was made
7. Mark the story done only if its acceptance criteria are actually met

## Scope rules

- Do not work on multiple unrelated stories in the same iteration
- Do not broaden scope without a strong reason
- Do not redesign the hero unless the selected story explicitly allows it
- Preserve the current visual identity
- Prefer minimal diffs and local changes
- Do not invent fake proof, fake metrics, fake clients, or fake outcomes
- Keep visible copy consistent with the chosen language strategy
- Be honest about validation status

## Completion contract

If all stories are complete and there is no remaining tracked work, respond with exactly:

COMPLETE

Do not include any extra text before or after `COMPLETE`.

## If work remains

If there is still work to do, perform the next story and end with a short plain-text status summary that includes:

- story worked on
- whether it was completed or not
- key files changed
- validation run
- next recommended story

Do not output `COMPLETE` unless all tracked work is actually finished.