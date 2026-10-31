# Ibile Thrift App

## Description
Ibile Thrift App is a member-facing app and WhatsApp-style assistant for Ibile Thrift & Credit Cooperative Society Ltd, a cooperative in Mushin, Lagos.
It sits on top of the society's ledger and shows members their savings, contributions, loan repayments and balances.
It answers three member questions: how much a member can borrow, why a loan balance is what it is, and what a member gets back on withdrawal.

## Who uses it
Member is the only user type the PRD defines.
- The society was founded in 2011 and has about 1,400 members.
- Members are market traders, tailors, artisans and bus operators.
- Members pay weekly or monthly contributions, hold savings, take loans against savings and repay in instalments.
- Age range: 34 to 58.
- Mrs. Folake Adeyemi, who runs a provisions stall, is the PRD's example of a member. Do not put her name in code or screen text.
- Devices: Tecno or Infinix Android phones with 3 GB of RAM. The PRD says cracked screens are normal.
- Connection: 3G, often 2G, and it drops in and out.
- Data: bundles are bought in small amounts, so every megabyte costs the member money.
- Technical level: comfortable with WhatsApp, bank transfer apps and airtime top-ups. Not comfortable with spreadsheets, menus within menus or financial jargon.
- Setting: often used standing in a shop, with one hand, in daylight glare.
- The PRD says many members have been burned by loan apps and informal schemes.
- No user type is defined for recording contributions or repayments. Do not build any screen or endpoint that writes money data without the project owner's instruction.
- Do not build features for any other user type unless the project owner asks.

## One thing the agent must do well
A member opens the app and sees their true current position: savings, loan outstanding, last contribution and next due amount.
- The PRD sets a load time target for the current position screen on a weak connection. The number is in rules-interface.md. If that file is missing, stop and ask.
- Check each screen against the size and speed limits in rules-interface.md before you report it done.
- A figure is correct only if it equals the source data the project owner gives you. If you have none, stop and ask. Never calculate or estimate a balance.
- If a figure is cached, the screen says so and shows a timestamp. Do not store cached figures in the database. Ask the project owner where they go.
- The PRD says a wrong or ambiguous balance destroys trust in the society itself.

The interface must feel like a trusted passbook: calm, plain, official and unhurried.
- Numbers come first, in naira. Type sizes and allowed decoration are in rules-interface.md.
- The words allowed on screen are in rules-interface.md. If a word is not on that list, ask before using it.
- Every figure shows where it came from and when it was last updated. The PRD does not say what "where it came from" shows. Ask before building it.
- Screens work offline from the last sync and never make the member wait on a spinner. The PRD does not say what happens to an action when the member is offline. Ask before building any action.
- The PRD rules out dark patterns, upsells and urgency. The PRD does not define them. Do not add any banner, prompt, countdown or offer without the project owner's approval.
- The PRD says every action ends with a confirmation receipt. The PRD does not define "action" or "receipt". Ask which actions exist and what a receipt shows before building either.

## Defined scope for the MVP
The PRD does not label an MVP. Build only what the project owner names in each request.
The PRD describes these features:
- Member accounts. The PRD does not say how a member signs in. Ask before building sign up or sign in.
- Showing a member's contributions, loans and repayments. Do not build payment collection, loan applications or loan approval unless the project owner asks.
- Balances, each with its source and last updated time.
- An offline view of the last synced figures, with a timestamp. The PRD does not define "sync". Ask what is synced and from where.
- Answers to three questions that only this system can answer:
  1. How much can I borrow today, and when? Answer this only from the values in rules-society.md. If a value is missing, say so and ask. Never use assumed values.
  2. Why is my loan balance what it is? The PRD does not name the interest method. Read it from rules-society.md or ask.
  3. What do I get back if I withdraw or leave now? The PRD treats withdrawing and leaving as one question. Ask whether they are one case or two.

## Not in scope for the MVP
- The PRD lists no out-of-scope items.
- Treat any feature not listed in the scope section as out of scope and ask first.
- Questions about contribution rules are not among the three listed questions. Ask before building them.
- The PRD rules out dark patterns, upsells and urgency.

## Stack
These are fixed. Do not substitute any of them.
- Next.js
- TypeScript
- Prisma
- PostgreSQL
- Flutterwave for payments
- pgvector for vector data
- Gemini free tier

Rules for the stack:
- Read versions from package.json. If package.json does not exist, stop and ask which versions and which Next.js router to use.
- The PRD does not say if the app is a website, an installable web app or a native app. Ask before choosing.
- The PRD says "WhatsApp-style assistant" and does not define it. Do not connect to WhatsApp. Ask the project owner what it means before building it.
- The PRD describes no payment flow. Do not write Flutterwave code until the project owner names the payment.
- The PRD does not say what pgvector or Gemini are for. Do not store vectors or call Gemini until the project owner says what for.

## Folder map
The PRD and this file define no folder structure.
- AGENTS.md is in the project root.
- The PRD is the file business-brief.md. If you cannot find it, stop and ask the project owner.
- Read the real file tree before you create or move anything.
- Ask the project owner before you create any folder.

## How to work in this codebase
- One change is one task the project owner named. Finish it, report it, then stop.
- Read business-brief.md at the start of each task.
- Ask the project owner before you add, remove or upgrade any package, including dev packages.
- Never touch the database. Do not edit the Prisma schema, create or run migrations, seed data or run any command that connects to PostgreSQL. If a task needs one, stop and tell the project owner.
- If a feature needs data that does not exist, stop. Do not create mock tables, local databases or seed data.
- Never write a secret value into any file.
- Assumptions are allowed only for details this file and the PRD do not cover and that do not touch money figures, scope or the database. End each response with "Assumptions:" and the list, or "Assumptions: none".
- Stop and ask when the PRD and this file do not state a product fact, a wording rule, a money rule or a data rule you need. Naming and code style are your call.
- If a rules file disagrees with the PRD or this file, stop and ask. Do not choose.

## Where the detailed rules live
This file holds no schema, queries, model names, dimensions, prices, thresholds or environment variable names. Those live in the files below. If a file is missing, stop and ask.
- rules-data.md: database design notes, for reading only. Never apply them to the database.
- rules-ai.md: Gemini usage, model choice and limits.
- rules-payments.md: Flutterwave settings and the names of its environment variables. Never write a secret value into any file.
- rules-society.md: the society's contribution, loan, eligibility and withdrawal values.
- rules-interface.md: screen rules, wording rules and performance targets.

## Definitions
- Project owner: the person who started the session.
- Member: a person in the society who pays contributions, holds savings, takes loans against those savings and repays in instalments.
- Ledger: the society's current account of contributions, savings and loans. The PRD names two ledgers, an exercise book and the treasurer's Excel file, and does not say which wins if they differ. Ask before choosing one.
- Current position: savings, loan outstanding, last contribution and next due amount. The PRD does not say if last contribution is an amount, a date or both. Ask.
- Cached figure: a last known figure shown with a timestamp. The PRD does not say when a cached figure is shown. Ask.
- Bye-laws: the society's written rules, which the PRD names as a source for borrowing. Their values are in rules-society.md.
- Not defined in the PRD: savings, guarantor, notice period, charges. Do not define them yourself. Ask.
- Tier, record and chunk: the PRD does not define these. Do not use them as product terms in screen text. Language and framework terms are not affected.