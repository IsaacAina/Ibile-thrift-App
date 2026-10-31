import React from 'react';
import type { MemberPosition } from '@/types/ledger';
import { AppBar } from '@/components/AppBar';
import { SyncBanner } from '@/components/SyncBanner';
import { PositionCard } from '@/components/PositionCard';
import styles from './page.module.css';

/**
 * Initial member position matching verified ledger values.
 * Stored in whole kobo (1 Naira = 100 kobo).
 */
const initialMemberPosition: MemberPosition = {
  memberId: 'mem_0427',
  memberCode: 'Member ILT-0427',
  totalSavings: {
    amountKobo: 24500000, // ₦245,000
    currency: 'NGN',
    source: 'Society ledger',
    lastUpdated: 'today 6:42pm',
    isCached: true,
  },
  loanOutstanding: {
    amountKobo: 21240000, // ₦212,400
    currency: 'NGN',
    source: 'Society ledger',
    lastUpdated: 'today 6:42pm',
    isCached: true,
  },
  lastContribution: {
    amountKobo: 500000, // ₦5,000
    currency: 'NGN',
    source: 'Society ledger',
    lastUpdated: 'Sat 17 Oct',
    isCached: true,
    date: 'Sat 17 Oct',
    status: 'PAID',
  },
  nextDue: {
    amountKobo: 500000, // ₦5,000
    currency: 'NGN',
    source: 'Society ledger',
    lastUpdated: 'Sat 17 Oct',
    isCached: true,
    dueDate: 'Sat 24 Oct',
    frequency: 'weekly',
  },
};

export default function HomePage() {
  return (
    <div className={styles.container}>
      <AppBar memberCode={initialMemberPosition.memberCode} />
      <main className={styles.main}>
        <SyncBanner
          source={initialMemberPosition.totalSavings.source}
          lastUpdated={initialMemberPosition.totalSavings.lastUpdated}
          isCached={initialMemberPosition.totalSavings.isCached}
        />
        <PositionCard position={initialMemberPosition} />
      </main>
    </div>
  );
}
