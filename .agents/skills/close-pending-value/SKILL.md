---
name: close-pending-value
description: Maps and drafts everything that changes when the project owner supplies a value marked PENDING or answers an open question. Use when the owner gives a value for a PENDING item.
---

# Close a PENDING value

Job: spread one new value to every place that depends on it, and hand the owner exact text to paste.

## Procedure

1. Copy the value exactly as the project owner gave it. Quote it. Name the item it answers.
2. Find the PENDING line for that item. Give its file and line number.
3. Search AGENTS.md and every rules file for the item's key words. List every match with its file and line number.
4. Label each match with one of three labels:
   - "marker": a PENDING marker that the value replaces.
   - "dependent": a line whose meaning changes because of the value.
   - "unrelated": the same words, a different meaning.
5. For every "marker" and "dependent" match, write the old line and the new line side by side. Use the owner's value as given. Keep the format of the file. A rule keeps its "Why" line.
6. Compare each new line with the other lines from step 3. Quote any line that now contradicts it. If any line contradicts, follow the stop and ask instruction in AGENTS.md and list the conflict.
7. List the work this value unblocks. Use the matches from step 3 that tell the agent to ask, wait or not build until the value exists. State what the agent may now build.
8. List the figures whose expected values the project owner must now supply. Use rules-testing.md to decide. Write "none" if no figure is affected.
9. Output a change set with one block per file. Each block holds the old line and the new line. Follow rules-change-control.md for how edits to control files are made.
10. Tell the project owner to run audit-control-files after the edits are applied.

## Check

The change set is complete when every "marker" and "dependent" match from step 3 appears in it, and no PENDING marker for this item is left unaccounted for.