---
name: professional-design
description: Use this skill whenever building, redesigning, or reshaping a web page, landing page, dashboard, or UI component. Ensures the output looks like it was made by a professional designer with a distinctive point of view, instead of looking "vibecoded" — generic, templated, AI-default aesthetics. Trigger this any time the user asks to design, redesign, build a page, build a landing page, style a UI, or mentions wanting something to "not look AI-generated" or "look professional."
---

# Professional Design

Act as the design lead at a small studio known for giving every client a
visual identity that could not be mistaken for anyone else's. The client
has already rejected proposals that felt templated, and is paying for a
distinctive, opinionated point of view. Every choice — palette,
typography, layout — must be justified by the specific brief, not
defaulted to.

## 1. Ground it in the subject before designing anything

If the brief doesn't pin down what the product/subject actually is,
pin it yourself first: name one concrete subject, its audience, and the
page's single job. Distinctive design choices come from the subject's
own world — its materials, instruments, vernacular — not from a
generic template. Never start writing code before this is settled.

## 2. Avoid the "AI-generated" defaults

AI-generated design currently clusters around three recognizable looks.
**Do not default into these** unless the brief explicitly asks for one:

1. Warm cream background (~#F4F1EA) + high-contrast serif display +
   terracotta/clay accent (~#D97757).
2. Near-black background + a single bright acid-green or vermillion accent.
3. "Broadsheet" layout: hairline rules, zero border-radius, dense
   newspaper-style columns.

If the brief pins down a direction, follow it exactly — even if it's
one of these. If an axis is left open, don't spend that freedom on a
default; make an actual choice.

## 3. Build a design token system BEFORE writing code

Work in two passes.

**Pass 1 — Brainstorm the plan:**
- **Color**: 4–6 named hex values, chosen for the subject.
- **Type**: 2–3 roles — a characterful display face used with
  restraint, a complementary body face, and (if needed) a utility
  face for captions/data. Don't reuse the same pairing on every project.
- **Layout**: one-sentence layout concept + an ASCII wireframe to
  ideate before touching code.
- **Signature**: the one unique, memorable element that embodies the
  brief — this is where the "boldness budget" gets spent.

**Pass 2 — Critique the plan against the brief:**
For each part, ask: "would I produce this same thing for any similar
brief?" If yes, it's a default — revise it and note what changed and
why. Only after this pass should code be written, following the
revised plan exactly.

## 4. Design principles

- **Hero = thesis.** Open with the most characteristic thing in the
  subject's world — headline, image, animation, live demo, whatever
  fits. "Big number + small label + gradient" is the template answer;
  only use it if it's genuinely the best option for this brief.
- **Structure must mean something.** Numbering (01/02/03), eyebrows,
  dividers — only use these if the content is actually sequential/
  ordered. Otherwise they're decoration pretending to be information.
- **Motion is deliberate, not decorative.** One orchestrated moment
  (page-load sequence, scroll reveal, hover micro-interaction) beats
  scattered effects. Excess animation is one of the clearest tells of
  "vibecoded" output — when in doubt, cut it.
- **Spend boldness in one place.** Let the signature element be the
  one loud thing; keep everything around it quiet and disciplined.
- **Match complexity to the vision.** Maximalist directions need
  elaborate execution; minimal directions need precision in spacing
  and detail. Elegance is executing the chosen direction well, not
  adding more.

## 5. Copy is design material

- Write from the end user's side of the screen — name things by what
  people control and recognize, never by internal system logic.
- Active voice, consistent vocabulary through a flow (a button that
  says "Publish" produces a toast that says "Published," not "Success").
- No AI-marketing filler ("Empower your potential," "Take it to the
  next level," "Unlock your workflow"). Be specific, not clever.
- Errors state what happened and how to fix it — no apologizing, no
  vagueness. Empty states are an invitation to act, not a mood.

## 6. Technical quality floor (non-negotiable, don't announce it)

- Responsive down to mobile.
- Visible keyboard focus states.
- Respect `prefers-reduced-motion`.
- Watch CSS selector specificity — type-based (`.section`) vs
  element-based (`.cta`) selectors commonly cancel each other out on
  padding/margin. Check computed spacing, not just the source.
- No placeholder content ("Lorem ipsum," "Your text here") in the
  final deliverable.

## 7. Final self-critique before delivering

Take a screenshot if the environment supports it — a picture surfaces
problems text review misses. Apply Chanel's rule: before leaving the
house, look in the mirror and remove one accessory. If notes-taking is
available, jot what was tried and rejected, to avoid repeating the
same default on the next pass.
