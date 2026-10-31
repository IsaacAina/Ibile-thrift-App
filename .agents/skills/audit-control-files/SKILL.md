---
name: audit-control-files
description: Audits AGENTS.md and the rules files against the PRD and returns findings with exact replacement sentences. Use after the project owner edits AGENTS.md, edits a rules file or adds a new one.
---

# Audit the control files

Job: find every way an agent could misread AGENTS.md or a rules file, and give the exact fix.

## Procedure

1. Read business-brief.md in full. List the facts that AGENTS.md and the rules files must carry. Number each fact and quote its source line from the PRD.
2. Read AGENTS.md and every rules file in full, including frontmatter. Write the list of files you read and the count.
3. Mark each numbered fact from step 1 as "present", "missing" or "contradicted". Give the file and line for "present" and "contradicted". Each "missing" fact is an omission finding.
4. Test every line of AGENTS.md and every rule in every rules file against these failures:
   - Invention: a fact that is not in the PRD, the stack list or the owner's instructions.
   - Omission: a PRD fact that is missing.
   - Contradiction: two lines that cannot both be true, or a line that disagrees with the PRD.
   - Uncheckable: a line the agent cannot verify.
   - Ambiguity: a line that can be read two ways.
   - Scope door: wording that lets the agent build something outside the defined scope.
   - Database door: wording that lets the agent change the database.
   - Missing definition: a product term with no plain meaning.
5. For each rules file, also test three things:
   - The file does one job, and its Job line says what it is.
   - Every rule has a reason.
   - The file has an activation mode and a description line.
6. Run the cross-file check. For each rule, search AGENTS.md and the other rules files for the same constraint. List every pair that says the same thing. Name the file whose Job line should own it. Write the replacement as a pointer to that file.
7. Write each finding as one table row with four columns: the line quoted, the failure type, why it matters, and the exact replacement sentence. Do not list a finding without a replacement sentence.
8. Give the total number of findings and the count per failure type.
9. Output the findings only. Write corrected files only if the project owner asks. Follow rules-change-control.md for how fixes are proposed.

## Check

The audit is complete when every numbered fact has a status, every file was tested in steps 4 to 6, and every finding row has a replacement sentence.