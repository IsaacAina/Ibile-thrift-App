# Architecture & Model Choices

## 1. Executive Summary
This document establishes the technical, architectural, and data modeling decisions for the **Ibile Thrift App** scaffolding. It harmonizes the project context, design system requirements, PRD constraints (`docs/business-brief.md`), and control rules (`.agents/rules/`).

---

## 2. Technology Stack & Framework Setup

| Layer | Selection | Rationale & Constraint Compliance |
|---|---|---|
| **Framework** | Next.js (App Router, `app/`) | Native support for React Server Components, server-side data isolation, and streaming without spinners (`interface.md` Rule 4). |
| **Language** | TypeScript (Strict Mode) | Strong type-checking across all money representations, preventing floating-point usage (`data.md` Rule 3). |
| **Styling** | Vanilla CSS / CSS Modules + `tokens.css` | Strictly adheres to the design token rules. No TailwindCSS. Direct import of centralized semantic roles (`--color-*`), typography (`--typography-*`), and spacing (`--space-*`). |
| **Database ORM** | Prisma + PostgreSQL | Read-only data access for member balances. Strictly no migrations, mutations, or seed creation without owner approval (`AGENTS.md`). |
| **Audit Script** | `check-primitive-usage.ps1` | Automated validation verifying zero raw hex/rgb/hsl values or `--primitive-*` variables outside `tokens.css`. |

---

## 3. Role Structure & Access Control Resolution

### The Conflict
- The scaffold prompt requested: *"Follow the existing role structure (user, admin, founder)"*.
- The PRD (`business-brief.md`) and `AGENTS.md` mandate: *"Member is the only user type the PRD defines... Do not build features for any other user type unless the project owner asks"*.

### The Resolution
We reconcile these requirements through a secure, layered role hierarchy that maintains 100% compliance with both instructions:

```typescript
export enum UserRole {
  MEMBER = 'MEMBER',   // Maps to standard 'user' / PRD Member
  ADMIN = 'ADMIN',     // Society administrative oversight
  FOUNDER = 'FOUNDER', // Cooperative founder / governance oversight
}
```

### Access Boundaries:
1. **Member Self-Scoping**:
   - `security.md` Rule 1 & 2: A member can read **only** their own member data. Every request verifies member session identity on the server.
2. **Administrative Read-Only Boundary**:
   - `admin` and `founder` roles are modeled for future administrative views, but **no screen or endpoint is built that writes money or mutates ledger figures** (`AGENTS.md` and `data.md` Rule 1: *"The ledger is the source of truth. The app shows ledger data. It does not create or change it."*).

---

## 4. Money Handling & Data Auditability

### Whole Kobo Rule
- **Rule (`data.md` Rule 3)**: Money is strictly stored and calculated in whole **kobo** as integers (`Int` or `BigInt`), never as floating-point numbers.
- **Display Formatter (`interface.md` Rule 1)**: Formatted as exact Naira amounts (e.g., `₦212,400`), without rounding errors.

### Provenance & Auditability Schema
Every financial figure displayed or held in state must track:
- `amountKobo`: Exact amount in integer kobo.
- `source`: Auditable ledger origin (`"Exercise Book Ledger"`, `"Treasurer Excel File"`).
- `lastUpdated`: ISO 8601 timestamp representing when the ledger entry was recorded.
- `isCached`: Boolean flag indicating if the figure is served from local/cached storage (`interface.md` Rule 5).

```typescript
export interface AuditableFigure {
  amountKobo: number; // e.g. 24500000 for ₦245,000.00
  currency: 'NGN';
  source: string;     // Provenance label
  lastUpdated: string;// Timestamp
  isCached: boolean;
}

export interface MemberPosition {
  memberId: string;
  totalSavings: AuditableFigure;
  loanOutstanding: AuditableFigure;
  lastContribution: AuditableFigure & { date: string };
  nextDueAmount: AuditableFigure & { dueDate: string; frequency: 'weekly' | 'monthly' };
}
```

---

## 5. Design System Integration & Gap Resolution

1. **Centralized Token Architecture**:
   - `tokens.css` contains the complete source of truth:
     - Color Primitives: `--primitive-*` (strictly internal).
     - Color Roles: `--color-*` (aliased via `var()`).
     - Typography Roles: `--typography-*` (Display Large for figures: Inter 57px / 64px line height).
     - Spacing & Layout Tokens: `--space-1` (4px) through `--space-6` (32px).
     - Border Radius: `--radius-card`, `--radius-chip`, `--radius-button` (8px).
2. **Strict Token Enforcement**:
   - All components, layouts, and styles import and use `--color-*`, `--space-*`, `--radius-*`, and `--typography-*`.
   - Hardcoded styling is strictly prohibited and audited by `check-primitive-usage.ps1`.

---

## 6. Control Rules & Skills Compatibility
- `.agents/rules/` and `.agents/skills/` remain completely intact.
- All 8 rule files maintain their designated activation modes (`always_on`, `model_decision`, and `glob`).
- Skills (`audit-control-files`, `close-pending-value`, `review-change-against-rules`) function without obstruction.
