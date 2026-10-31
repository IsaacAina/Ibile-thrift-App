---
trigger: model_decision
description: Apply when code stores, reads or changes ledger data, money amounts, vector storage or the database structure.
---

# Data rules
Job: define what data the app holds, where it comes from and how it is stored.

Data the PRD names: member accounts, contributions, savings, loans, repayments and balances.

1. The ledger is the source of truth. The app shows ledger data. It does not create or change it.
   Why: Figures must match the ledger exactly.
2. How ledger data reaches the app: PENDING. Do not build import or sync until it is filled in.
   Why: The ledger is an exercise book and an Excel file today, and the PRD does not say how they connect.
3. Store money as whole kobo. Never use floating point.
   Why: Floating point rounding changes balances.
4. Each stored figure keeps its source and its last updated time.
   Why: The PRD says every figure shows both.
5. Vector storage may hold only text the project owner approves. It never holds member data (see rules-security.md).
   Why: Vector copies are hard to find and delete.
6. A database change proposal states what changes, why, the effect on existing data and how to undo it. The project owner applies it.
   Why: The agent never touches the database, so the owner needs enough detail to judge the change.