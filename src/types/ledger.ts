/**
 * Ledger and position types for Ibile Thrift App.
 * Strict whole-kobo money representation with provenance tracking.
 */

export interface AuditableFigure {
  /**
   * Amount stored as whole kobo (integer).
   * 1 Naira = 100 kobo. Never floating-point.
   */
  amountKobo: number;
  currency: 'NGN';
  /**
   * The ledger source where this figure originated (e.g. Society Ledger, Excel, Exercise Book).
   */
  source: string;
  /**
   * ISO 8601 string or readable timestamp when this figure was last posted/synced.
   */
  lastUpdated: string;
  /**
   * Whether this figure is loaded from local/cached storage.
   */
  isCached: boolean;
}

export interface ContributionRecord {
  id: string;
  figure: AuditableFigure;
  date: string;
  status: 'PAID' | 'PENDING';
  channel: string;
}

export interface MemberPosition {
  memberId: string;
  memberCode: string; // e.g. "Member ILT-0427"
  totalSavings: AuditableFigure;
  loanOutstanding: AuditableFigure;
  lastContribution: AuditableFigure & {
    date: string;
    status: 'PAID';
  };
  nextDue: AuditableFigure & {
    dueDate: string;
    frequency: 'weekly' | 'monthly';
  };
}
