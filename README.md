# Ibile Thrift & Credit — design system + member dashboard

## The task

Build a small, real interface for **Ibile Thrift & Credit Cooperative Society Ltd** (see `docs/business-brief.md`), but the point of the exercise was not the screen — it was to **prove that an AI agent actually used a design system instead of improvising**.

So the deliverable had three parts:

1. A design system (colour primitives, colour roles, typography, effects) with a single source of truth.
2. A member dashboard built **only** from that system.
3. Evidence that the agent stayed inside the system — screenshots, a deliberate break test, and an automated check that fails when it doesn't.

## What is in this repo

| Path | What it is |
|---|---|
| `Evidence/tokens-complete.json` | Figma (Tokens Studio) export — the source of truth. Groups: `primitives`, `color roles`, `typography`, `effect`. |
| `tokens.css` | Generated from that JSON. **Do not edit by hand.** 405 variables: 160 `--primitive-*` (internal only) + 62 colour roles aliased with `var()`, plus typography and shadow tokens. |
| `dashboard.html` / `dashboard.css` | The member dashboard ("Your position today", loan, contributions, activity). Uses `--color-*` roles, `--typography-*` and `--effect-*` only. Zero raw hex values. |
| `check-primitive-usage.ps1` | The enforcement script. Exits `1` if any `--primitive-*` or raw `#hex` / `rgb()` / `hsl()` appears outside `tokens.css`. |
| `docs/business-brief.md` | Who the product is for (Mrs. Folake Adeyemi, mid-range Android, 3G, one hand, daylight). |
| `docs/prompts.md` | The prompt used to convert JSON → CSS, including the non-negotiable role-only rule and the "flag the gap, don't improvise" instruction. |
| `docs/interview-answers.md` | The written answers on tokens, versioning, contrast, semantics and typography. |
| `docs/*.txt`, `Evidence/*.png` | Evidence trail: palette before/after pinning, spacing default vs chosen, dashboard without vs with the system, broken referencing, unmerged-branch git log. |

## How to check it

```powershell
powershell -ExecutionPolicy Bypass -File .\check-primitive-usage.ps1
# PASS - no primitive usage or raw colours outside tokens.css
```

Then open `dashboard.html` in a browser. The big ₦ figures are set in **Display Large** as customised in the design system (Inter, 57px / 64px, weight 400, letter-spacing 0).

## What I decided

- **Two layers.** Primitives hold raw values (`primary-40`, `neutral-100`). Roles hold meaning (`color-primary`, `color-on-surface`, `color-success-container`). UI code may only use roles; roles alias primitives with `var()`, never a copied hex, so one change at the source reaches everything.
- **Pin the brand colour.** Before pinning, Figma's auto-generated tonal palette didn't contain my chosen brand blue; pinning `Primary 40 = #3157D5` fixed the palette to it (`Evidence/01` vs `Evidence/02`).
- **13 Material 3 tones per palette** — enough range (0–100) to serve light and dark from a single source colour.
- **Typography:** 1.5× line height for body text (readability over long passages), tighter for headings. Display Large switched from Roboto to Inter, letter-spacing `0%` instead of `-0.25px`, weight Regular.
- **Roles only, enforced.** The rule is written into the prompt *and* checked by a script, because a rule nobody checks is a suggestion.
- **Flag gaps instead of inventing values.** Where the system had no token, I stopped and said so rather than quietly inventing one.
- **Versioning:** changing a value is safe (minor); renaming a token or changing its meaning is a major, because it breaks existing uses.

## What I got wrong

1. **Primitive names tied to the role.** I named the palette `primary-*`. If we rebrand, "primary" now holds purple. Should have named by hue (`blue-600`) with roles doing the mapping.
2. **A raw hex broke the chain.** `action-primary` held a hard-coded hex instead of `var(--primitive-primary-40)`. Changing the brand colour updated every role that referenced the palette — and left that one button blue. That is the whole argument for referencing, captured in `docs/arguments for token referencing.txt`.
3. **The Figma export had no spacing, radius or opacity tokens.** `dashboard.css` defines local `--space-*` / `--radius-*` placeholders, clearly commented as a gap. The system is incomplete in that area, and the screen is not fully driven by the single source of truth.
4. **My first check script never ran.** `docs/raw-value-search.txt` is a bash `grep -rnIe --exclude-dir=…` line pasted into PowerShell, which threw parser errors on `--exclude-dir` and the line continuations. Rewritten as `check-primitive-usage.ps1`.
5. **The checker has blind spots.** It catches primitives and raw colours, but not *undefined* variables — the local spacing tokens above pass the check even though they don't exist in `tokens.css`. It also only covers code files, not design-tool output.
6. **I force-deleted an unmerged branch.** `git branch -D broken` after the deliberate-regression test, discarding the commit instead of keeping or merging it (`docs/git-log-branch-unmerged.txt`).
7. **A hex list is not a source of truth.** Exporting raw values into one CSS file is just a central list: no meaning layer, no enforcement, and a one-time copy that drifts from Figma.

## Layout

```
dashboard.html  dashboard.css  tokens.css  check-primitive-usage.ps1
docs/      business-brief · prompts · interview-answers · working notes
Evidence/  token JSON, before/after screenshots, break-test artifacts
```
