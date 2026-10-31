import React from 'react';
import type { MemberPosition } from '@/types/ledger';
import { formatNaira } from '@/lib/money';
import styles from './PositionCard.module.css';

interface PositionCardProps {
  position: MemberPosition;
}

export function PositionCard({ position }: PositionCardProps) {
  return (
    <section className={styles.card} aria-labelledby="position-heading">
      <h2 id="position-heading" className={styles.title}>
        Your position today
      </h2>

      <div className={styles.figure}>
        <p className={styles.label}>Total savings</p>
        <p className={styles.amount}>
          {formatNaira(position.totalSavings.amountKobo)}
        </p>
        <p className={styles.source}>
          {position.totalSavings.source}. Updated {position.totalSavings.lastUpdated}.
        </p>
      </div>

      <hr className={styles.divider} />

      <div className={styles.figure}>
        <p className={styles.label}>Loan outstanding</p>
        <p className={styles.amount}>
          {formatNaira(position.loanOutstanding.amountKobo)}
        </p>
        <p className={styles.source}>
          {position.loanOutstanding.source}. Updated {position.loanOutstanding.lastUpdated}.
        </p>
      </div>

      <hr className={styles.divider} />

      <dl className={styles.statGrid}>
        <div className={styles.stat}>
          <dt className={styles.statLabel}>Last contribution</dt>
          <dd className={styles.statValue}>
            <span>{formatNaira(position.lastContribution.amountKobo)}</span>
            <span className={styles.chipPaid}>Paid</span>
          </dd>
          <dd className={styles.statMeta}>{position.lastContribution.date}</dd>
        </div>

        <div className={styles.stat}>
          <dt className={styles.statLabel}>Next due</dt>
          <dd className={styles.statValue}>
            <span>{formatNaira(position.nextDue.amountKobo)}</span>
            <span className={styles.chipDue}>Due Sat</span>
          </dd>
          <dd className={styles.statMeta}>
            {position.nextDue.dueDate} · {position.nextDue.frequency}
          </dd>
        </div>
      </dl>
    </section>
  );
}
