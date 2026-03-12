# decisions.md

## Purpose

This file records stable repo-wide decisions that future agents should treat as settled unless a newer decision explicitly replaces them.

Use this file to reduce repeated debate, scope drift, and accidental reversals.

Rules:
- append new decisions
- do not rewrite history unless a decision is formally superseded
- if a decision is replaced, mark the older one as superseded
- keep entries short, clear, and actionable

---

## Status labels

Use one of these labels:

- `accepted`
- `superseded`
- `provisional`

---

## Decision format

Each entry should use this structure:

- ID
- Date
- Status
- Decision
- Reason
- Consequences

---

## Decisions

### DEC-001
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** `PRD.md` is the primary product-definition file for this repository.
- **Reason:** The repo is being reorganized around a human-readable PRD-driven workflow, and `PRD.md` is now the central source for product direction, redesign goals, and definition of done.
- **Consequences:** Agent instructions and future docs should reference `PRD.md` instead of assuming `prd.json`, unless a machine-readable PRD is intentionally reintroduced later.

---

### DEC-002
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** The hero section is protected by default.
- **Reason:** The hero is currently one of the strongest parts of the site in terms of visual identity, hierarchy, and first impression.
- **Consequences:** No agent should redesign or substantially alter the hero unless a story explicitly targets hero refinement.

---

### DEC-003
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** The redesign focus starts below the fold.
- **Reason:** The strongest improvement opportunity is in the sections below the hero, where the site currently feels less mature and less cohesive.
- **Consequences:** Early implementation stories should target lower sections first rather than rebuilding the top of the page.

---

### DEC-004
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** The redesign must preserve the current core identity rather than replace it.
- **Reason:** The current site already has a recognizable premium direction, especially in palette, tone, and hero composition.
- **Consequences:** Agents should refine and elevate the design, not reset it into an unrelated visual system.

---

### DEC-005
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** “Payload-like” means structural and stylistic maturity, not literal imitation.
- **Reason:** The design goal is to borrow the feeling of a polished product-facing site, not copy Payload CMS branding, layout, or admin aesthetics.
- **Consequences:** Agents should interpret this as a direction toward better hierarchy, composition, and product credibility while preserving the existing brand identity.

---

### DEC-006
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** This repo will use story-scoped PRD-driven development.
- **Reason:** Small scoped stories reduce ambiguity and work better for autonomous coding agents than broad redesign requests.
- **Consequences:** Work should be broken into local, testable, visually reviewable stories instead of giant multi-section rewrites.

---

### DEC-007
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** One story should be executed at a time.
- **Reason:** High-autonomy agents perform better when scope is explicit and contained.
- **Consequences:** Avoid bundling unrelated changes into one iteration, even if they seem adjacent.

---

### DEC-008
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** The site should remain primarily a single-page portfolio.
- **Reason:** The current product direction is focused on a strong, curated, scroll-based portfolio experience rather than a larger multi-page content system.
- **Consequences:** Agents should not expand the site into multiple pages unless a future story explicitly requires that.

---

### DEC-009
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** The redesign should move the site closer to a premium product/editorial portfolio hybrid.
- **Reason:** The target positioning is stronger when the portfolio feels like a serious product-facing site rather than a generic résumé or freelancer template.
- **Consequences:** Section composition, copy, and layout decisions should reinforce clarity, seriousness, and curated technical credibility.

---

### DEC-010
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** Lower-page sections may be merged, simplified, or reframed if that increases clarity and quality.
- **Reason:** The current structure likely contains overlap or sections that are weaker in isolation.
- **Consequences:** Agents may consolidate related content areas when a story explicitly allows it, as long as the result improves narrative flow and does not broaden scope irresponsibly.

---

### DEC-011
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** The site must not use fake proof.
- **Reason:** Fake clients, fake metrics, fake testimonials, and invented outcomes damage trust and reduce long-term credibility.
- **Consequences:** All visible proof must be real, defensible, and grounded in actual work or experience.

---

### DEC-012
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** Content should be curated, not dumped.
- **Reason:** Large undifferentiated skill lists, repetitive cards, and generic copy lower perceived maturity.
- **Consequences:** Technical depth should be presented selectively, with hierarchy and framing.

---

### DEC-013
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** The final contact area must be treated as a real conversion surface, not a placeholder footer block.
- **Reason:** The current portfolio direction aims to support real professional and freelance opportunities.
- **Consequences:** A future story should redesign the final CTA/contact section to feel intentional, premium, and usable.

---

### DEC-014
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** Visual refinement has priority over feature expansion.
- **Reason:** The main product problem is not lack of features; it is inconsistent maturity and cohesion across sections.
- **Consequences:** Agents should prioritize structure, composition, copy, and presentation before proposing new functionality.

---

### DEC-015
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** Repo docs must provide the discipline that runtime approvals no longer provide.
- **Reason:** The intended Codex workflow uses high autonomy in an isolated dev container, which increases execution freedom.
- **Consequences:** `AGENTS.md`, `progress.txt`, `brand.md`, `decisions.md`, and story files must be kept accurate enough to constrain agent behavior safely.

---

### DEC-016
- **Date:** 2026-03-11
- **Status:** superseded
- **Decision:** Public-facing site copy should ultimately use one primary language consistently.
- **Reason:** Mixed-language UI tends to feel unfinished unless intentionally designed as bilingual.
- **Consequences:** A later decision should explicitly choose the production language strategy and apply it consistently across headings, labels, CTA text, and footer copy.
- **Superseded by:** DEC-021

---

### DEC-017
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** Documentation should stay lean and operational.
- **Reason:** Agent-facing docs lose value when they become large diaries or duplicative narrative dumps.
- **Consequences:** `progress.txt` should remain short and current, `decisions.md` should capture only stable choices, and repo-wide rules should live in `AGENTS.md` or `brand.md` only when truly reusable.

---

### DEC-018
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** Minimal diffs are preferred over ambitious rewrites.
- **Reason:** Smaller changes are easier to verify, easier to review, and less likely to introduce regressions.
- **Consequences:** Agents should choose local edits and scoped improvements whenever possible.

---

### DEC-019
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** Validation claims must be honest and command-backed.
- **Reason:** In high-autonomy workflows, false confidence is dangerous.
- **Consequences:** Agents must not claim lint, build, typecheck, or visual validation unless those checks were actually run or explicitly documented as pending.

---

### DEC-020
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** The redesign should improve commercial credibility without becoming overly sales-driven.
- **Reason:** The desired tone is premium, serious, and professional, not aggressive or marketing-heavy.
- **Consequences:** Copy and CTA language should remain calm, direct, and credible.

---

### DEC-021
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** Brazilian Portuguese (`pt-BR`) is the primary production language for the public-facing site.
- **Reason:** The current portfolio already leans heavily Portuguese, that voice is the most natural and credible fit for Jordano, and choosing `pt-BR` removes mixed-language UI without forcing a broad translation pass first.
- **Consequences:** Headings, navigation, CTA labels, section copy, footer text, contact prompts, and user-facing alt text should be normalized to `pt-BR` in future UI stories. English may remain for proper nouns, technology names, and established industry terms where translation would reduce clarity.
- **Supersedes:** DEC-016

---

### DEC-022
- **Date:** 2026-03-11
- **Status:** accepted
- **Decision:** The below-the-fold narrative should follow this structure: `Services -> Selected Work/Proof -> About + Process -> Technical Depth -> FAQ -> Contact`.
- **Reason:** The current page spreads capability, proof, and technical-depth signals across too many adjacent sections, which weakens hierarchy and breaks narrative momentum after the hero.
- **Consequences:** Future redesign stories should keep `Services` as the opening offer block, move work earlier as the primary proof surface, absorb standalone proof signals into that work presentation where appropriate, combine `About` with `Process`, and consolidate `Stack`, `Experience`, and `Studies` into one technical-depth block before the closing FAQ/contact sequence.

---

## Superseding decisions

When a decision is replaced, add a new entry and mark the old one as `superseded`.

Example:

### DEC-0XX
- **Date:** 2026-03-20
- **Status:** accepted
- **Decision:** Portuguese is the primary production language for the public-facing site.
- **Reason:** ...
- **Consequences:** ...
- **Supersedes:** DEC-016

---

## Notes for future agents

Before reopening a design or product discussion, check whether it is already settled here.

If a new task conflicts with an accepted decision, do one of these:
- follow the accepted decision
- or create a new decision that explicitly supersedes it

Do not silently drift away from accepted direction.
