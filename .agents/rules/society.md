---
trigger: model_decision
description: Apply when code or answers involve borrowing, contributions, repayment, interest, withdrawal or bye-laws.
---

# Society rules
Job: hold the society's own rules for borrowing, contributions, repayment and withdrawal.

Rules for the agent
1. Use only the values written under Values.
   Why: A wrong borrowing answer costs a member real money.
2. If a value is PENDING or missing, stop and ask. Do not guess.
   Why: A guess looks like a fact once it is on a screen.
3. Do not take rules from other cooperatives, banks or common practice.
   Why: Each society's bye-laws are its own.
4. If a value here disagrees with ledger data, stop and ask. Do not choose.
   Why: Two sources that disagree mean one of them is wrong, and only the owner knows which.
5. Every answer to a member names where it comes from: the bye-laws or the ledger.
   Why: The PRD requires every figure to show where it came from.

Values (the PRD gives the fields, not the values; the project owner fills them in)
- Contribution frequency: weekly or monthly (PRD). Which members pay which: PENDING.
- Borrowing eligibility depends on four things (PRD). Each rule: PENDING.
  - the member's own savings
  - months of unbroken contributions
  - any existing loan
  - guarantor availability
- Repayment schedule: PENDING.
- Interest method: PENDING.
- Withdrawal and leaving: savings are netted against outstanding loans, and notice periods and charges apply (PRD). Each value: PENDING.
- Whether withdrawing and leaving are one case or two: PENDING.
- Bye-laws document name and version: PENDING.