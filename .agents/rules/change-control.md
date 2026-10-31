---
trigger: always_on
---

# Change control rules
Job: keep every change small, reviewable and reversible.

This file assumes the project uses git. If it does not, stop and ask.

1. Edit only the files the task needs. Do not reformat or tidy other files.
   Why: Unrelated edits hide the real change and can break working code.
2. Never edit AGENTS.md or any rules file. Propose the change in your reply with the file name, the new text and the reason.
   Why: An agent that edits its own rules can remove its own limits.
3. Do not commit or push unless the project owner asks. When asked, make one commit per task with a message that says what changed and why.
   Why: One commit per task is easy to review and undo.
4. Never force push, rewrite history or delete branches.
   Why: These destroy work that cannot be recovered.
5. Destructive commands need the project owner's approval first. These include deleting folders, git clean, resetting to an earlier commit, and overwriting any file you did not create in this task.
   Why: Deleted work is often gone for good.
6. Remove dead code and commented-out blocks that you create. If you find existing ones, report them. Do not delete them.
   Why: Leftovers confuse later readers, but existing code may be live.
7. End each task with the list of files you changed and one line on what changed in each.
   Why: The project owner sees the full footprint at once.