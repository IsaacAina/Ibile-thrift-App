---
trigger: model_decision
description: Apply when working on Flutterwave, payments, webhooks or any record changed by a payment.
---

# Payment rules
Job: keep Flutterwave payments correct and safe. These rules apply once the project owner names a payment.

Names of Flutterwave environment variables: PENDING.

1. Confirm every payment with Flutterwave from the server before changing any record. A payment is confirmed only when Flutterwave reports success, the amount matches what was expected, the currency is naira and the reference matches.
   Why: The member's phone can send false results.
2. Check the webhook signature before acting on a webhook.
   Why: Anyone can post to a webhook address.
3. Make each payment update safe to repeat. A second identical webhook must change nothing.
   Why: Webhooks can arrive more than once.
4. Use test mode until the project owner says in writing to go live.
   Why: Live mode moves real money.
5. Never store card numbers, expiry dates or security codes.
   Why: Holding them adds risk and no benefit.
6. If a payment is not confirmed, do not credit it. Report it to the project owner.
   Why: Crediting an unconfirmed payment puts a wrong figure in a member's balance.
7. Refunds, failed payments and reversals are not covered. Ask before building them.
   Why: The PRD describes no payment flow, so these rules would be guesses.