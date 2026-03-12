# PRD.md

## Product name

**Jordano Portfolio**

---

## Version

`0.2`

---

## Status

`redesign-planning`

---

## Product summary

Jordano Portfolio is a premium single-page personal website designed to position Jordano as a software engineer capable of designing, building, and delivering serious digital products.

The site already has a strong visual direction and a strong hero section.

The current redesign effort should **preserve the core identity** of the existing site while evolving the sections below the hero into a more mature, product-site-style experience.

The target direction is:

- more polished
- more intentional
- more commercially credible
- more editorial and product-driven
- less template-like
- less “developer résumé page”
- more “high-agency builder who can ship”

This redesign should be executed through **PRD-driven development** and should be optimized for autonomous implementation by coding agents.

---

## Product context

The current site has a strong top-of-page impression, especially in the hero section.

However, lower sections still feel less mature than the hero in terms of:

- hierarchy
- narrative flow
- visual cohesion
- premium perception
- consistency of language
- conversion readiness

The redesign should not start from scratch.

It should **keep what is already working** and upgrade what feels weaker.

---

## Core redesign thesis

The site should feel like a blend of:

- personal portfolio
- technical product landing page
- editorial presentation of work and capability

It should communicate:

- technical depth
- delivery ability
- product thinking
- design sensitivity
- seriousness
- clarity

The intended feel is **closer to a polished product/company site** than to a generic freelancer template.

---

## Problem statement

Today, the portfolio has a strong identity at the top but becomes less convincing lower on the page.

This creates a mismatch:

- the hero promises a premium, high-level professional presence
- some lower sections feel more generic, unfinished, or structurally weaker

As a result, the site risks underselling the overall perception of Jordano’s capability.

---

## Primary goal

Redesign the portfolio so that the entire page sustains the same quality bar as the hero section while preserving the original identity.

---

## Goals

### Business / positioning goals

- Position Jordano as a strong technical professional who can build real products
- Increase the perception of maturity, taste, and technical credibility
- Make the site feel more commercially trustworthy
- Improve the ability of the portfolio to support freelance and professional opportunities
- Present capability in a way that feels curated rather than dumped

### Product goals

- Preserve the current brand identity
- Preserve the current hero unless a future story explicitly targets it
- Redesign lower sections with stronger hierarchy and cleaner composition
- Improve content structure and narrative flow
- Make the final CTA/contact area feel intentional and credible
- Reduce placeholder or weak-feeling sections
- Support incremental agent-driven execution through small stories

### UX goals

- Make scanning easier
- Improve readability and spacing rhythm
- Create clearer section purpose
- Reduce visual repetition
- Make each section feel necessary
- Avoid dead weight content

---

## Non-goals

The redesign should **not**:

- rebuild the entire project architecture without need
- destroy the current identity
- replace the hero just because redesign is happening
- imitate Payload CMS literally
- create an admin-like aesthetic
- add heavy animations just for spectacle
- add fake testimonials, fake metrics, or fake project results
- turn the site into a blog platform
- overcomplicate the site with unnecessary pages or features
- chase novelty at the expense of clarity

---

## Product vision

The ideal final portfolio should feel like this:

> “This person is technical, serious, visually sharp, and capable of shipping high-quality products.”

It should suggest:
- confidence without excess
- elegance without fragility
- modernity without trend-chasing
- technicality without clutter

---

## Target audience

### Primary audience

- potential freelance clients
- recruiters for software/product roles
- technical leads and engineering managers
- startup founders
- people evaluating Jordano’s execution quality

### Secondary audience

- other developers
- collaborators
- people coming from GitHub, LinkedIn, or direct referrals

---

## User needs

Visitors need to quickly understand:

- who Jordano is
- what he builds
- whether he is credible
- what kind of work he is good at
- whether the quality bar is high
- how to contact him

They should not need to decode the site.

---

## Brand and identity constraints

The redesign must preserve the original identity.

### Must preserve

- current premium feel
- dark/wine-based visual identity
- cream/light contrast surfaces where appropriate
- strong editorial-style hero
- overall sophisticated and technical tone
- feeling of deliberate design rather than off-the-shelf template

### Must avoid

- bright startup SaaS palette that kills the current mood
- generic Tailwind template aesthetics
- overly playful UI
- noisy gradients everywhere
- inconsistent typography
- visually loud cards with weak content
- awkward layout decisions that reduce elegance
- obvious placeholder feeling

---

## Design direction

The redesign should move toward a **product-site / editorial portfolio hybrid**.

### Visual principles

- strong hierarchy
- confident spacing
- restrained surfaces
- fewer but better-composed sections
- intentional rhythm between dark and light moments
- premium typography usage
- high signal, low clutter

### Structural principles

- every section must have a job
- sections must feel connected
- lower-page sections must not feel like leftovers
- capability should be shown through curation, not overload
- contact should feel like a natural culmination, not an afterthought

---

## Content direction

The site should communicate capability through curation.

### Prefer

- fewer stronger statements
- curated proof
- selected work with context
- concise but meaningful descriptions
- clean section headings
- language consistency
- clear CTA language

### Language application

The public-facing experience should use Brazilian Portuguese (`pt-BR`) as its default language.

Apply this to:

- headings
- navigation
- CTA labels
- section copy
- footer text
- contact prompts

English may remain only for proper nouns, technology names, and established industry terms when that is the clearer choice.

### Avoid

- buzzword piles
- giant skill dumps with no hierarchy
- overly academic sectioning
- repeated information across sections
- filler copy
- mixed language without intent
- placeholder text in production-facing sections

---

## Information architecture direction

The current page should be restructured around clearer narrative blocks.

Target flow:

1. **Hero**
   - preserve overall strength
   - preserve first impression quality

2. **Capabilities / What I build**
   - a refined replacement or evolution of current services/proof-type blocks
   - should answer what Jordano can execute well

3. **Selected work**
   - more like curated case studies than generic projects grid
   - should emphasize thinking, execution, and relevance

4. **Technical depth / How I work**
   - should show engineering seriousness without becoming a dumping ground
   - can absorb parts of stack, studies, process, or experience if needed

5. **About / professional framing**
   - concise positioning
   - should reinforce trust, not just biography

6. **Contact / final CTA**
   - calm, direct, premium
   - should feel deliberate and ready for real use

This is a target direction, not a locked final sitemap.

---

## Section-level guidance

### Hero

Status:
- already strong
- should be preserved by default

Guidance:
- only touch hero in stories specifically scoped for hero refinement
- do not let lower-page redesigns create a mismatch with hero quality

### Mid-page sections

Status:
- key redesign zone

Guidance:
- redesign for stronger visual and narrative cohesion
- reduce fragmentation
- combine weak or overlapping sections where helpful
- prioritize composition quality over number of sections

### Final CTA / contact

Status:
- likely underpowered relative to the hero

Guidance:
- must feel intentional
- should support real professional contact
- should look premium without becoming flashy

---

## Functional requirements

### FR-1: preserve existing working experience
The redesign must preserve the current functioning Next.js portfolio structure unless a story explicitly requires technical restructuring.

### FR-2: maintain single-page portfolio orientation
The portfolio should remain primarily a single-page experience unless explicitly expanded later.

### FR-3: support modular section development
Sections should remain organized in a way that allows incremental redesign story by story.

### FR-4: support content-driven updates
Content structure should remain easy to update without requiring broad code changes.

### FR-5: allow agent-driven implementation
The project must remain easy for an autonomous coding agent to navigate and modify through small scoped tasks.

---

## UX requirements

### UX-1: fast comprehension
A visitor should understand the site’s positioning quickly.

### UX-2: improved narrative flow
The page should feel like a sequence of intentional arguments, not isolated blocks.

### UX-3: stronger section hierarchy
Each section should have clear importance and visual weight.

### UX-4: no visibly weak sections
No section should feel obviously placeholder, generic, or structurally underdeveloped.

### UX-5: responsive coherence
The redesign must remain clean across desktop and mobile.

---

## Content requirements

### CR-1: consistent language
Visible text should follow a consistent language strategy.

### CR-2: no fake proof
No fake clients, fake testimonials, fake numbers, or invented claims.

### CR-3: portfolio copy quality
Copy should feel concise, adult, and professional.

### CR-4: curated technical presentation
Technical depth should be shown with structure and intent, not dumped raw.

---

## Visual requirements

### VR-1: preserve identity
The redesign must preserve the brand feel already established.

### VR-2: hero consistency
New sections must feel compatible with the hero.

### VR-3: premium composition
Spacing, typography, surfaces, and layout must feel deliberate and premium.

### VR-4: avoid template feel
The final result should not look like a generic portfolio starter.

### VR-5: restrained motion
Animation, if used, must support polish and hierarchy rather than spectacle.

---

## Technical requirements

### TR-1: minimal unnecessary churn
Avoid broad rewrites not tied to a story.

### TR-2: keep validation healthy
Changes should preserve buildability and maintainability.

### TR-3: preserve codebase clarity
The project structure should remain understandable for future agent iterations.

### TR-4: story-based execution
Implementation should happen in small PRD-aligned stories.

---

## Success criteria

The redesign is successful when:

- the hero remains strong
- the lower sections no longer feel weaker than the top
- the site feels more cohesive from top to bottom
- the portfolio looks more premium and credible
- content feels curated and intentional
- the contact area feels real and professionally usable
- the site better supports professional and freelance positioning
- implementation happened through clean, scoped incremental stories

---

## Failure conditions

The redesign should be considered unsuccessful if:

- the original identity is diluted
- the hero loses its current strength
- lower sections still feel generic or unfinished
- the page becomes visually inconsistent
- the site starts feeling like a generic template
- the codebase becomes harder to operate for small future iterations
- the redesign adds noise rather than clarity

---

## Delivery strategy

This project should be executed through **small agent-friendly stories**.

Each story should:
- target one section or one tightly related improvement area
- have clear acceptance criteria
- avoid unrelated side work
- update progress tracking after completion

Recommended sequencing:

1. preserve and document current brand/hero guardrails
2. redesign the weakest lower-page section
3. redesign selected work / case-study presentation
4. redesign technical depth / process presentation
5. redesign final CTA/contact
6. polish language consistency
7. run final visual coherence pass
8. run performance/accessibility cleanup pass

---

## Story design principles

Stories should be:
- small
- local
- testable
- visually reviewable
- easy for an autonomous agent to complete in one pass

Stories should not:
- span the entire site
- mix many unrelated goals
- require hidden assumptions
- force large speculative refactors

---

## Out of scope for this PRD version

This PRD version does not require:

- CMS integration
- blog system
- multi-page expansion
- dashboard/admin features
- account system
- analytics-heavy implementation
- backend services
- complex form workflows
- multilingual system unless chosen later as a dedicated effort

---

## Constraints

- preserve the original visual identity
- preserve the current strong first impression
- improve rather than replace
- prefer refinement over reinvention
- keep the repo friendly to autonomous coding workflows
- prioritize execution quality over feature count

---

## Open questions

These questions may be resolved in later stories or decisions:

- final language choice for all visible content
- exact grouping of mid-page sections
- whether studies/experience remain separate or are merged into a stronger capability narrative
- whether contact should remain simple or become slightly more editorial
- whether project cards should evolve into mini case studies

---

## Definition of done

This redesign initiative is done when:

- the site feels consistently premium from top to bottom
- the lower-page sections match the quality bar implied by the hero
- section structure is cleaner and more intentional
- copy is consistent and non-placeholder
- the final CTA/contact section is credible and polished
- the work has been implemented through tracked stories
- the repo remains clean for future iterations

---

## One-line product directive

**Preserve the identity, protect the hero, and redesign the rest of the portfolio until it feels like a serious premium product-facing site rather than a promising draft.**
