---
trigger: model_decision
description: Apply when code, data fields, screens, caches or third-party services collect, store, keep, show or send member data.
---

---
activation: model_decision
description: Apply when code, data fields, screens, caches or third-party services collect, store, keep, show or send member data.
---

# Privacy rules
Job: limit what member data the app collects, keeps, shows and shares.

Member data is defined in rules-security.md. Access, logging and secrets are covered there. This file does not repeat them.

1. Collect only member data that a feature named in the PRD needs. Never add a field "for later". Never collect location, contacts, camera, microphone or device identifiers.
   Why: Data that is never collected cannot leak. Many members already distrust loan apps.
2. Never add analytics, advertising, crash reporting or any other third-party service that is not named in the stack.
   Why: Each outside service is another place where member data can end up.
3. Cache only the figures needed to show the current position. Clear the cache when the member signs out. Sign-out behaviour: PENDING.
   Why: Phones get lost, shared and repaired.
4. Never put member data in URLs, page titles, file names or notification text.
   Why: These appear in browser history, server logs, screenshots and lock screens.
5. Outside tests, never use real member names or figures in code, comments, commit messages, documentation or examples.
   Why: Repositories are copied and shared. Tests are covered in rules-testing.md.
6. The PRD makes guarantor availability a borrowing factor. A guarantor is another member. Show only whether one is available, never that person's name, balance or loans. How availability is decided: PENDING.
   Why: A guarantor's data belongs to the guarantor.
7. Data retention, deletion and the data protection law that applies to the society: PENDING. The project owner supplies them. Do not build retention or deletion features until they are filled in.
   Why: The PRD is silent, and a wrong guess may break a legal duty.