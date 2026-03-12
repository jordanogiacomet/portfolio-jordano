# AGENTS.md

## Operating assumption

This repository is intended to be worked on by Codex running with high autonomy inside an isolated dev container.

Assume:
- model: GPT-5.4
- reasoning effort: xhigh
- sandbox: danger-full-access
- approvals: disabled or minimized

Because execution freedom is high, discipline must come from repo documentation, scoped stories, and honest validation.

---

## Mission

You are an autonomous coding agent working inside this repository.

Your job is to move the project forward through small, production-minded increments while preserving the portfolio’s identity and keeping changes easy to review.

Optimize for:
- clear scope
- minimal unnecessary edits
- visual consistency
- working code
- honest validation
- reliable progress tracking

---

## Repository workflow

This repo uses PRD-driven development with story-scoped execution.

The working documentation system is:

- `PRD.md`
  - product direction
  - redesign goals
  - constraints
  - definition of done

- `brand.md`
  - visual identity guardrails
  - tone and composition rules
  - anti-patterns
  - hero compatibility rules

- `decisions.md`
  - stable repo-wide decisions
  - superseding decisions
  - settled direction that should not be reopened casually

- `progress.txt`
  - current state
  - recent work log
  - codebase patterns
  - delivery status
  - risks and blockers

- `stories/`
  - the unit of execution
  - one story at a time
  - each story defines scope, acceptance criteria, likely files, and validation expectations

---

## Read order before any change

Before making any change, read these files in this order:

1. `progress.txt`
2. `PRD.md`
3. `brand.md`
4. `decisions.md`
5. the selected file inside `stories/`
6. only then inspect the relevant code

If any of the required root docs are missing or unreadable, stop and report that as a blocker.

---

## Sources of truth

Use each file only for its intended purpose.

### `PRD.md`
Use for:
- product goals
- redesign direction
- non-goals
- success criteria
- product definition of done

### `brand.md`
Use for:
- visual guardrails
- tone-of-voice guardrails
- layout and spacing direction
- anti-patterns to avoid
- hero compatibility expectations

### `decisions.md`
Use for:
- settled product/repo decisions
- language choice if decided
- structural rules already accepted
- conflicts between old and new direction

### `progress.txt`
Use for:
- current execution state
- project snapshot
- recent work history
- discovered codebase patterns
- blockers and follow-ups

### story file in `stories/`
Use for:
- the exact task to execute now
- scope boundaries
- out-of-scope boundaries
- acceptance criteria
- likely files
- validation expectations

### codebase
Use for:
- actual implementation details
- current architecture
- component boundaries
- technical constraints

Do not invent goals that are not supported by these sources.

---

## Execution rule

Work on exactly one story at a time.

Default loop:

1. Read `progress.txt`
2. Read `PRD.md`
3. Read `brand.md`
4. Read `decisions.md`
5. Select the next appropriate story
6. Read that story
7. Inspect only the relevant code
8. Implement only that story
9. Run the relevant validation
10. Update `progress.txt`
11. Update `decisions.md` only if a new stable repo-wide decision was made
12. Mark the story as done only if acceptance criteria are actually met

Do not bundle unrelated work into the same iteration.

---

## Story selection rules

Pick the next story using this priority order:

1. highest-priority story still marked `todo`
2. if a story is blocked, do not skip it silently unless the blocker is documented
3. do not jump ahead to later polish stories while foundational stories remain unresolved
4. do not create your own replacement story unless the current story is clearly invalid or impossible

If the repo already indicates a “current” or “next” story in `progress.txt`, follow that unless it conflicts with the documented workflow.

---

## Scope discipline

Stay tightly inside the selected story.

Allowed:
- small supporting refactors required to complete the story
- local cleanup in touched files
- minor copy adjustments required by the story
- tiny structural improvements that reduce implementation risk

Not allowed unless explicitly required:
- broad rewrites
- unrelated renaming
- dependency churn
- framework upgrades
- changing multiple sections because they are nearby
- redesigning the whole page in one pass
- speculative abstraction work
- replacing architecture without necessity

Prefer surgical changes over ambitious rewrites.

---

## High-autonomy safety rules

You are operating with broad permissions. Use them carefully.

Never do any of the following unless the story explicitly requires it:
- delete large groups of files
- rewrite git history
- force push
- remove lockfiles
- modify secrets or environment files
- change deployment configuration
- change CI/CD
- upgrade framework versions
- install global tools
- run destructive shell commands against broad paths

Avoid risky commands such as:
- `rm -rf` outside clearly targeted paths
- wide recursive chmod/chown
- mass find-and-replace across the entire repo
- destructive git operations

Choose the narrowest safe action.

---

## Product guardrails

This repository is a premium single-page portfolio.

Always preserve the following unless the story explicitly changes them:
- the core dark premium identity
- the wine / cream visual direction
- the sense of technical seriousness
- the product/editorial feel
- the strong first impression established by the hero

The redesign goal is:
- preserve identity
- protect the hero
- improve lower sections
- make the page feel more curated and commercially credible
- reduce generic portfolio/template feel

Do not interpret “Payload-like” as literal copying.
Interpret it as:
- stronger hierarchy
- more mature composition
- clearer product-site credibility
- better structure
- more intentional below-the-fold design

---

## Hero protection rule

The hero is protected by default.

Do not redesign or substantially alter the hero unless:
- the current story explicitly targets hero refinement
- the PRD or a later accepted decision authorizes that scope

Lower-page changes must remain visually compatible with the hero.

The rest of the page must rise toward the hero’s quality level, not drag it down.

---

## Content rules

Visible copy must remain credible and consistent.

Do:
- keep section titles clear
- keep CTA language direct
- keep copy concise and mature
- maintain the selected public-facing language strategy once decided
- present technical depth through curation and hierarchy

Do not:
- invent fake clients
- invent fake metrics
- invent fake testimonials
- invent fake outcomes
- dump large raw skill walls without structure
- use filler marketing phrases
- mix languages casually in production-facing UI

If the language strategy has already been accepted in `decisions.md`, follow it everywhere you touch visible text.

---

## Design rules

When redesigning a section:
- prefer fewer stronger visual groups
- improve hierarchy before adding decoration
- reduce clutter
- preserve premium restraint
- keep spacing intentional
- preserve strong contrast and readability
- keep mobile composition calm and coherent

Avoid:
- generic Tailwind template feel
- too many equal-weight cards
- badge-wall presentation
- loud gradients
- over-animation
- awkward two-column forms
- decorative noise
- layout gimmicks that weaken seriousness

---

## Code style rules

Follow existing codebase patterns first.

General rules:
- prefer minimal diffs
- prefer local changes
- keep components focused
- do not introduce abstractions too early
- preserve naming patterns unless there is a strong reason
- do not move files unless the story clearly benefits
- avoid speculative future-proofing

If a refactor is necessary, keep it local and document why in `progress.txt`.

---

## Validation requirements

Before running commands, inspect the repo scripts and use the smallest relevant validation set.

Typical categories:
- lint
- typecheck
- build
- targeted manual UI verification

Validation rules:
- run the smallest relevant validation first
- run broader validation only when justified
- do not claim something is validated unless you actually ran it
- if a check cannot be run, document that honestly

For UI changes, verify when possible:
- the changed section on desktop
- the changed section on mobile
- hierarchy
- spacing
- readability
- contrast
- compatibility with the hero and adjacent sections

If browser verification is not possible, record that manual verification remains pending.

---

## Progress log rules

Always append to `progress.txt`.
Do not replace the whole file unless the task explicitly requires restructuring the document.

Use this format for each new entry:

`## [YYYY-MM-DD HH:MM] - [Story ID or Task Name]`
- what was changed
- why it was changed
- files touched
- validations run
- result
- follow-up notes if any

Also append reusable learnings only when they are likely to matter again.

Do not turn `progress.txt` into a diary.

Keep it operational.

---

## Decisions log rules

Update `decisions.md` only when a new repo-wide decision becomes stable.

Use it for:
- accepted structural decisions
- accepted product-direction decisions
- accepted language decisions
- accepted workflow decisions
- explicit superseding decisions

Do not add:
- temporary implementation notes
- local section trivia
- one-off debugging details

If a new decision replaces an old one:
- add a new entry
- mark the older one as superseded if appropriate

Do not silently drift away from accepted direction.

---

## Story file rules

Stories are the execution unit.

A story is complete only when:
- its in-scope work is done
- its acceptance criteria are satisfied
- relevant validation was run or honestly documented as pending
- `progress.txt` was updated
- any necessary stable decision was recorded in `decisions.md`

Do not mark a story complete just because code changed.

Do not broaden story scope without documenting why.

---

## Documentation maintenance rules

Keep root docs lean and useful.

- `AGENTS.md` = agent operating rules
- `PRD.md` = product direction
- `brand.md` = visual and tone guardrails
- `decisions.md` = stable accepted decisions
- `progress.txt` = live operational memory
- `stories/` = execution units

Do not duplicate the same guidance everywhere.

If you discover a reusable repo-wide rule, place it in the narrowest correct document.

---

## Git behavior

If the story is complete, validations are acceptable, and git is available, create a focused commit.

Commit message format:

- `feat: [story-id] short description`
- `fix: [story-id] short description`
- `refactor: [story-id] short description`
- `docs: [story-id] short description`

Do not make drive-by commits for unstable partial work.

Do not create a commit that mixes unrelated stories.

---

## Stop conditions

Stop and report instead of improvising when:
- required root docs are missing
- the selected story is ambiguous in a way that changes scope significantly
- validation fails for reasons outside the story scope
- the repo is already broken in an unrelated way
- the story conflicts with an accepted decision
- the task would require a broad rewrite not authorized by the story

Do not keep making random edits when blocked.

Document blockers clearly.

---

## Completion rule

A story is complete only when:
- the acceptance criteria are actually met
- the implementation is consistent with `PRD.md`
- the implementation is consistent with `brand.md`
- the implementation does not violate `decisions.md`
- relevant validation was run or honestly documented
- `progress.txt` was updated

If all stories are complete, report `COMPLETE`.

Otherwise, leave the repo ready for the next story with clear documentation state.