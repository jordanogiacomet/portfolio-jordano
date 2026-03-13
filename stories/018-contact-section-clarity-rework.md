# Story 018 - Contact Section Clarity Rework

## Status
`done`

## Objective
Rework the contact section so it closes the portfolio with stronger clarity, better contrast, and a more commercially effective call to action.

## Context
The current contact section has the right structural intention, but the execution is still weakening the end of the page. The auxiliary panel has low legibility, the overall composition carries too much empty space, and the section does not convert with enough confidence for a premium commercial portfolio.

Because this is the final conversion surface, it must feel immediately readable, intentional, and useful. The goal is not to make it louder, but to make it clearer, more credible, and easier to act on.

## In Scope
- improve contrast and legibility in the contact section
- redesign or simplify the right-side auxiliary panel
- strengthen CTA clarity and visual hierarchy
- reduce unnecessary empty space and excess section height
- improve layout balance between the main message and support content
- make the section feel more commercially intentional
- verify desktop and mobile readability for the updated section

## Out of Scope
- redesigning the hero
- global spacing refactor across all sections
- rewriting the entire site’s copy
- changing the overall brand palette
- redesigning the footer beyond changes strictly required for contact-section coherence
- adding new backend contact functionality

## Acceptance Criteria
- the contact section is clearly legible on desktop and mobile
- the right-side panel no longer feels washed out, decorative, or hard to read
- the main CTA is stronger and easier to understand
- the section feels less empty and less vertically oversized
- the layout feels more balanced and commercially credible
- the section remains visually compatible with the hero and the rest of the site
- no fake urgency, fake trust signals, or inflated claims are introduced

## Likely Files
- `components/Contact.tsx`
- `data/contact.json`
- `app/globals.css`
- `progress.txt`

## Dependencies
- `PRD.md`
- `brand.md`
- `decisions.md`
- `progress.txt`

## Validation
- run the smallest relevant lint check for touched files
- run typecheck if component logic or structure changes
- run build if layout or styling changes affect the rendered page
- manually review the contact section for:
  - contrast
  - spacing
  - CTA clarity
  - desktop balance
  - mobile stacking
- document any browser-review limitation honestly if a browser-capable environment is unavailable

## Implementation Notes
- prefer clarity over decorative side-panels
- the right-side block should either become truly useful or materially quieter
- reduce the feeling of empty space without making the section cramped
- keep the tone calm, premium, and direct
- the closing section should feel like a real conversion surface, not a conceptual placeholder
- prioritize legibility and hierarchy before adding any visual flourish
