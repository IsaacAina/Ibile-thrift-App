import React from 'react';
import styles from './SyncBanner.module.css';

interface SyncBannerProps {
  source: string;
  lastUpdated: string;
  isCached: boolean;
}

export function SyncBanner({ source, lastUpdated, isCached }: SyncBannerProps) {
  return (
    <div className={styles.banner} role="status">
      <span className={styles.dot} aria-hidden="true" />
      <span>
        Figures from {source}, updated {lastUpdated}.
        {isCached ? ' Saved on this phone.' : ''}
      </span>
    </div>
  );
}
