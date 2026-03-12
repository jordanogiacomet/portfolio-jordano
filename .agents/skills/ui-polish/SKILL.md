---
name: ui-polish
description: Use this skill when a section or page is functionally correct but still needs visual refinement, spacing cleanup, hierarchy tightening, and higher-quality premium polish without changing core structure.
---

# UI Polish

## Purpose

Use this skill when the implementation is already basically correct, but the UI still feels rough, uneven, generic, or not premium enough.

This skill is for refinement, not major redesign.

Typical use cases:
- spacing feels off
- hierarchy is technically present but visually weak
- section looks functional but not polished
- transitions between elements feel clumsy
- cards, text blocks, or CTA surfaces feel generic
- mobile layout works but lacks compositional quality

Do not use this skill for:
- major section restructuring
- product-direction changes
- copy strategy decisions
- accessibility-only tasks
- performance-only tasks

---

## Required context before use

Read:

1. `AGENTS.md`
2. `PRD.md`
3. `brand.md`
4. `decisions.md`
5. `progress.txt`
6. the active story

If the story is about structural redesign, use `section-redesign` first and only then apply this skill if needed.

---

## Objective

Make the UI feel more deliberate and premium by improving:

- spacing rhythm
- visual hierarchy
- surface quality
- grouping
- alignment
- readability
- compositional calm

Preserve:
- the existing brand identity
- the current section purpose
- the dark premium tone
- compatibility with the hero

---

## Polish checklist

### 1. Tighten hierarchy
Review:
- heading weight
- heading spacing
- subheading position
- supporting copy length
- metadata prominence
- CTA prominence

Ask:
- what should the eye notice first?
- what is accidentally too loud?
- what is too weak?

---

### 2. Improve spacing rhythm
Review:
- section padding
- spacing between heading and body
- spacing between grouped items
- card interior padding
- gaps between repeated elements

Look for:
- cramped clusters
- overly loose empty zones
- inconsistent spacing jumps
- accidental crowding near edges

Spacing should feel intentional, not arbitrary.

---

### 3. Reduce visual noise
Remove or soften:
- unnecessary borders
- too many dividers
- excessive box usage
- duplicated labels
- repetitive supporting text
- cluttered micro-elements

Polish often comes from subtraction.

---

### 4. Refine surface quality
Evaluate:
- card count
- surface contrast
- corner consistency
- visual density
- whether containers help or hurt

Prefer:
- fewer stronger surfaces
- restrained emphasis
- calm contrast
- readable structure

Avoid:
- nested-box overload
- glossy or loud treatments
- arbitrary decorative styling

---

### 5. Improve alignment and balance
Check:
- horizontal alignment consistency
- vertical rhythm
- text block width
- relationship between labels and content
- composition balance on desktop and mobile

A polished UI should feel aligned even before it feels “designed.”

---

### 6. Verify mobile refinement
Check on small screens:
- stacked layouts still feel intentional
- spacing survives collapse
- typography remains readable
- CTA remains visible
- no awkward density appears after stacking

A page is not polished if only desktop looks good.

---

## Anti-patterns

Do not:
- overstyle a weak structure instead of fixing hierarchy
- add decorative flourishes to compensate for unclear layout
- add more cards just to create “design”
- turn polish into a redesign
- introduce new brand directions during refinement

---

## Acceptance review

The polish is successful when:
- the UI feels calmer
- hierarchy is clearer
- spacing is more consistent
- the section feels more premium
- the design feels less template-like
- no major structure change was needed
- the brand identity remains intact

---

## Validation expectations

When code changes are made:
- run the smallest relevant validation first
- verify desktop
- verify mobile
- check readability and contrast
- document anything not verified in `progress.txt`