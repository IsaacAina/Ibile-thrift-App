import React from 'react';
import styles from './AppBar.module.css';

interface AppBarProps {
  memberCode: string;
}

export function AppBar({ memberCode }: AppBarProps) {
  return (
    <header className={styles.appbar}>
      <h1 className={styles.brand}>Ibile Thrift &amp; Credit</h1>
      <p className={styles.member}>{memberCode}</p>
    </header>
  );
}
