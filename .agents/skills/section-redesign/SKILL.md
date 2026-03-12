---
name: section-redesign
description: Use this skill when redesigning or materially refining a portfolio section while preserving the existing brand identity, protecting the hero, and keeping scope tightly aligned to one story.
---

# Section Redesign

## Purpose

Use this skill when working on a section-level redesign in the portfolio.

This skill exists to help the agent improve a section’s hierarchy, composition, clarity, and premium feel without drifting away from the current visual identity or expanding scope beyond the selected story.

This skill is especially appropriate when the task involves:
- redesigning a below-the-fold section
- improving layout composition
- reducing template-like presentation
- refining section copy framing
- improving responsive section behavior
- strengthening narrative clarity inside one section

Do not use this skill for:
- global page redesign
- hero redesign unless the story explicitly allows it
- architecture-wide refactors
- performance-only passes
- documentation-only tasks

---

## Required context before use

Before applying this skill, read:

1. `AGENTS.md`
2. `PRD.md`
3. `brand.md`
4. `decisions.md`
5. `progress.txt`
6. the selected story in `stories/`

Do not start redesign work without reading the active story.

---

## Primary objective

Improve one section so it feels:
- more premium
- more intentional
- more visually coherent
- more compatible with the hero
- more commercially credible
- less like a generic portfolio template

Preserve:
- the current identity
- the dark premium tone
- the wine / cream visual direction
- the restrained product/editorial feel
- the hero’s status as a protected strength unless explicitly in scope

---

## Core constraints

- Work on exactly one section at a time
- Stay inside the selected story
- Prefer minimal diffs
- Avoid unrelated cleanup
- Do not invent fake proof
- Do not casually mix languages in visible UI
- Do not introduce loud stylistic shifts
- Do not redesign adjacent sections unless the story clearly requires it

---

## Section redesign checklist

### 1. Diagnose the current section
Inspect the current section and determine:

- What is the section supposed to communicate?
- Is the hierarchy clear?
- Is the section too generic?
- Does it feel weaker than the hero?
- Is the content curated or dumped?
- Is the layout too repetitive?
- Is the section easy to scan?
- Does it feel deliberate on desktop?
- Does it remain coherent on mobile?

Write down the problem in concrete terms before editing.

---

### 2. Identify the section’s job
Every section must have one primary job.

Common jobs:
- capability presentation
- selected work / proof
- technical depth
- credibility framing
- conversion / contact
- narrative bridge between stronger sections

Do not redesign a section until its primary job is clear.

If the section is trying to do too many things at once, simplify it.

---

### 3. Strengthen hierarchy first
Before adding visual flourish, improve hierarchy.

Prioritize:
- clearer headline/subheadline structure
- better grouping of related information
- stronger focal point
- improved spacing rhythm
- reduced equal-weight clutter
- better order of content blocks

Hierarchy improvements are usually more valuable than decorative changes.

---

### 4. Reduce generic template patterns
Look for template-feeling issues such as:

- too many identical cards
- repetitive blocks with equal weight
- badge walls
- weak section intros
- generic feature-grid composition
- crowded surfaces
- unnecessary dividers or containers
- too many visual elements competing at once

Replace these with fewer, stronger visual groups.

---

### 5. Preserve brand compatibility
Check each redesign move against `brand.md`.

The section should remain:
- dark and refined
- readable
- restrained
- premium
- editorial/product-like
- compatible with the hero

Avoid:
- startup SaaS drift
- loud gradients
- over-animation
- visual gimmicks
- shallow “fancy” polish
- colors that weaken the current identity

---

### 6. Curate content presentation
Do not dump information.

Improve content presentation by:
- grouping related items
- trimming weak repetition
- sharpening labels
- clarifying supporting copy
- making technical depth feel structured
- making proof feel selected rather than listed

If content is weak, improve framing before increasing visual complexity.

Do not add fake outcomes, fake clients, fake testimonials, or fake numbers.

---

### 7. Check responsive behavior early
Do not treat mobile as an afterthought.

Verify:
- section still reads cleanly on smaller screens
- hierarchy survives stacking
- side-by-side layouts do not become awkward
- spacing remains intentional
- interactive elements remain usable
- the section still feels premium when collapsed vertically

Avoid awkward two-column compositions on small screens.

---

## Implementation process

Follow this process:

1. inspect the active story
2. inspect the current section component and related content source
3. identify the section’s main weakness
4. choose the smallest structural improvement that materially increases quality
5. implement locally
6. validate visually and technically
7. update `progress.txt`

Do not jump into large rewrites before understanding the section’s current problem.

---

## Acceptance review

Before considering the story complete, check:

- Is the section more premium than before?
- Is the hierarchy clearer?
- Does it feel less generic?
- Does it remain compatible with the hero?
- Does it preserve the brand identity?
- Is the section easier to scan?
- Is desktop coherent?
- Is mobile coherent?
- Were changes kept inside scope?
- Was validation run honestly?

If several answers are no, the redesign is not done.

---

## Validation expectations

When code changes are made:
- run the smallest relevant validation first
- run broader validation only when justified
- do not claim success without running checks

For UI work, verify:
- desktop behavior
- mobile behavior
- readability
- spacing
- contrast
- section-to-section compatibility

If browser verification is not possible, document that clearly in `progress.txt`.

---

## Common anti-patterns

Do not do these:

- redesigning the hero accidentally while redesigning a lower section
- making every item a card
- replacing clarity with decoration
- overcomplicating a section because it looked “too simple”
- making technical content denser instead of clearer
- introducing a new visual language unrelated to the hero
- widening scope into nearby sections
- turning one story into a full-page redesign

---

## Output expectations

When this skill is used successfully, the result should be:

- one section improved materially
- identity preserved
- scope respected
- validation performed honestly
- progress documented clearly

The result should feel like a precise upgrade, not a chaotic rewrite.