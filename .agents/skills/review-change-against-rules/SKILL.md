---
name: review-change-against-rules
description: Checks a finished change against every applying rules file and returns a pass or fail report with quoted evidence. Use at the end of any task that changed code or text, before reporting the task done.
---

# Review a change against the rules

Job: turn "I followed the rules" into a report the project owner can check row by row.

## Procedure

1. Get the list of changed files. Use the list required by rules-change-control.md. If you have no list, build one from git status.
2. List every rules file by name. Mark each one "applies" or "does not apply". A file applies when a changed file touches the area in that file's description line. If you are unsure, mark it "applies".
3. Open each file marked "applies" and read all of it, including its Values or PENDING lines.
4. Write one row for every rule in each applying file. Use these columns: file, rule number, verdict, evidence.
   - The verdict is pass, fail or not applicable.
   - For pass or fail, the evidence is a quoted line from the change, with its file name.
   - For not applicable, the evidence is one sentence saying why.
5. List every PENDING value, and every point where the PRD is silent, that the change touched. Give the file and the item. Write "none" if there are none.
6. Set the overall result. It is "fail" if any row is "fail". Otherwise it is "pass".
7. If a row fails, fix the change. Then repeat steps 3 and 4 for that file only. Add the new rows beside the old ones. Do not change an old row. If the fix needs a decision from the project owner, follow the stop and ask instruction in AGENTS.md.
8. Output the report in this order: the applies table from step 2, the rows from step 4, the PENDING list from step 5, the overall result from step 6. Put it in your reply unless the project owner names another place.

## Check

The report is complete when every applying file has a row for every rule, every pass or fail row has a quoted line, and the overall result matches the rows.