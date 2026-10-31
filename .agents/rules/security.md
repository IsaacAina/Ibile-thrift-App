---
trigger: always_on
---

# Security rules
Job: protect member data and keep secrets out of the code.

Definition: member data means a member's name, phone number, member id, savings, contributions, loans, repayments and balances. Other rules files use this term.

1. A member can read only their own member data.
   Why: Members belong to one society. One leaked balance breaks trust for everyone.
2. Every request must prove which member is asking, and the server must check it. The PRD does not say how a member signs in. Until the project owner says how, serve no member data.
   Why: A phone can send any request. The screen cannot be trusted.
3. Never write member data, access tokens or request bodies to logs.
   Why: Logs are copied around and rarely protected.
4. Before any commit, confirm environment files are listed in .gitignore.
   Why: A leaked key cannot be taken back.
5. Never show a member a stack trace, query text, file path or internal id in an error.
   Why: These details help an attacker. Error wording is in rules-interface.md.
6. On the server, check every input for type, length and allowed values. Reject anything that fails.
   Why: Unchecked input is how most attacks start.
7. Do not switch off, skip or weaken a security check to make a task work. Stop and ask instead.
   Why: A disabled check hides the problem and ships it.