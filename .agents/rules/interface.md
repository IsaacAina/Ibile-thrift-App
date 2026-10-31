---
trigger: glob
globs: (**/*.tsx) Apply when building or changing member-facing screens, wording, amounts, loading or offline behaviour.
---

# Interface rules
Job: keep member screens plain, fast and honest. Visual styling is not covered here.

Words
- Never use: "eligibility threshold". Other banned words: PENDING.
- Allowed words list: PENDING.

Rules
1. Show amounts in naira in this form: ₦212,400. Do not round. How kobo shows: PENDING.
   Why: The PRD wants numbers first and exact.
2. In each figure's block, the amount is the largest text.
   Why: The PRD says numbers come first.
3. The current position screen shows figures in under five seconds on a weak connection. Weak means 2G or 3G. How to measure it: PENDING.
   Why: The PRD names this as the one thing that must work.
4. Show the last saved figures immediately, then update them. Never block on a spinner.
   Why: Members pay for data and often have a poor signal.
5. A cached figure carries a label saying it is a saved copy, with its last updated time.
   Why: A member must know when a figure may be out of date.
6. Every figure shows its source and last updated time. Source labels: PENDING.
   Why: The PRD requires it, so members can trust the number.
7. No action may need a two-finger gesture, hover or long press.
   Why: Members often use the phone with one hand.
8. Do not add images, video or custom fonts without the project owner's approval.
   Why: Every megabyte costs the member money.
9. An error message says what happened in plain words and what the member can do next.
   Why: Members are not comfortable with technical language.
10. Receipt contents: PENDING.
    Why: The PRD requires a receipt after every action but does not define it.
11. Interface language: PENDING. The PRD does not state it. Ask before translating.
    Why: A wrong language choice locks out members.