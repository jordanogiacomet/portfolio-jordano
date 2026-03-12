---
name: accessibility-review
description: Use this skill when reviewing or improving a section or page for basic accessibility quality, including contrast, heading structure, readable text, focus states, and interaction clarity without changing the product direction.
---

# Accessibility Review

## Purpose

Use this skill when a section or page needs a practical accessibility pass.

This skill is for improving baseline usability and technical credibility, not for running a formal audit.

Typical use cases:
- contrast might be weak
- text sizes may be too small
- heading order may be messy
- focus states may be missing or weak
- clickable elements may be unclear
- mobile usability may be shaky
- polished UI work needs a final accessibility sanity check

Do not use this skill for:
- large redesign work
- localization strategy
- backend accessibility concerns
- formal compliance certification

---

## Required context before use

Read:

1. `AGENTS.md`
2. `PRD.md`
3. `brand.md`
4. `decisions.md`
5. `progress.txt`
6. the active story

Accessibility improvements must preserve the brand, not fight it.

---

## Objective

Improve baseline accessibility and interaction clarity while preserving the premium visual identity.

Focus on:
- readable contrast
- logical heading structure
- visible focus states
- usable interaction targets
- mobile readability
- semantic clarity where practical

---

## Review checklist

### 1. Contrast
Check:
- body text against background
- secondary text against background
- button text against button surface
- muted text still being readable
- hover/focus/active states remaining legible

Avoid:
- luxury-style low contrast that hurts reading
- weak muted text on dark surfaces
- tiny low-emphasis copy that becomes illegible

---

### 2. Heading structure
Check:
- there is a meaningful heading flow
- section headings are not visually strong but semantically weak
- headings are not skipped in a confusing way
- supporting labels are not pretending to be headings unnecessarily

The structure should help screen-reader logic and scanning logic.

---

### 3. Focus and keyboard visibility
Check:
- links have visible focus states
- buttons have visible focus states
- interactive elements can be identified when focused
- focus styling is not removed without replacement

Do not hide focus just for aesthetics.

---

### 4. Readability
Check:
- body text size is reasonable
- line height is comfortable
- text blocks are not too dense
- text width is not excessively wide
- mobile text remains easy to read

Readable text is part of accessibility, not just aesthetics.

---

### 5. Click/tap usability
Check:
- buttons are easy to tap
- links are distinguishable
- important interactive elements are not too close together
- form controls remain usable on mobile if present

Avoid tiny targets and visually ambiguous controls.

---

### 6. Semantic sanity check
Where practical, verify:
- buttons are buttons
- links are links
- section structure is meaningful
- lists are used when content is truly list-like
- interactive wrappers are not semantically confusing

Do not do large refactors just to chase perfect semantics if the story does not allow it.

---

## Anti-patterns

Do not:
- break the visual identity in the name of accessibility
- overcorrect into clumsy styling
- remove all subtlety from the design
- add giant noisy outlines everywhere without intent
- rewrite the whole section when local fixes solve the problem

---

## Acceptance review

This pass is successful when:
- key text is readable
- interactive elements are clearer
- focus states are visible
- heading structure is more reasonable
- mobile readability is solid
- the design still feels premium

---

## Validation expectations

When code changes are made:
- run the smallest relevant validation first
- manually inspect desktop
- manually inspect mobile
- manually inspect focus states if interactive elements exist
- document any remaining limitations honestly in `progress.txt`