/**
 * Money utilities for Ibile Thrift App.
 * All calculations and storage use integer whole kobo (1 NGN = 100 kobo).
 * Never uses floating-point arithmetic for balance calculations.
 */

/**
 * Converts whole kobo to a formatted Naira display string.
 * Example: 24500000 kobo -> "₦245,000"
 * Handles kobo display if non-zero, per rules-interface.md.
 */
export function formatNaira(amountKobo: number): string {
  if (!Number.isInteger(amountKobo)) {
    throw new TypeError(`Amount must be an integer in whole kobo. Received: ${amountKobo}`);
  }

  const isNegative = amountKobo < 0;
  const absoluteKobo = Math.abs(amountKobo);
  const naira = Math.floor(absoluteKobo / 100);
  const remainingKobo = absoluteKobo % 100;

  const formattedNaira = naira.toLocaleString('en-NG');

  const formattedString =
    remainingKobo > 0
      ? `₦${formattedNaira}.${remainingKobo.toString().padStart(2, '0')}`
      : `₦${formattedNaira}`;

  return isNegative ? `-${formattedString}` : formattedString;
}

/**
 * Converts Naira integer amount to whole kobo.
 * Example: 245000 Naira -> 24500000 kobo
 */
export function nairaToKobo(naira: number): number {
  if (!Number.isInteger(naira)) {
    throw new TypeError(`Naira amount must be an integer. Received: ${naira}`);
  }
  return naira * 100;
}

/**
 * Converts whole kobo to integer Naira (floored).
 */
export function koboToNaira(amountKobo: number): number {
  if (!Number.isInteger(amountKobo)) {
    throw new TypeError(`Kobo amount must be an integer. Received: ${amountKobo}`);
  }
  return Math.floor(amountKobo / 100);
}
