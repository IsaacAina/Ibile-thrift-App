---
trigger: always_on
---

---
activation: always_on
description: Apply to every task that runs a terminal command.
---

# Command rules
Job: control which terminal commands the agent may run and how it runs them.

Packages, database commands and destructive commands are covered in AGENTS.md and rules-change-control.md. This file does not repeat them.

1. Pre-approved commands are: reading and listing files, searching files, git status, git diff, git log, and the package.json scripts for test, lint, type check and build. Every other command needs approval first. Show the exact command and say why you need it.
   Why: The pre-approved commands cannot change data or history. Everything else is the project owner's call.
2. Run commands only inside the project folder.
   Why: Other projects and system files are not part of this task.
3. Never use sudo or any elevated rights.
   Why: No task here needs them, and they can damage the whole machine.
4. Never run a downloaded script directly, for example by piping it into a shell. Show the script to the project owner and wait.
   Why: It runs code that nobody has reviewed.
5. Do not change global settings. This includes global installs, shell configuration, git configuration and system settings.
   Why: Global changes affect every other project on the machine.
6. Run one command at a time and read its output before the next.
   Why: Errors compound when commands are chained blind.
7. Stop every process you start, including development servers.
   Why: Stray processes hold ports and use memory on the owner's machine.
8. Never run a command that sends project files or member data to any host. Fetching from the package registry is the only network use allowed.
   Why: Data that leaves the machine cannot be pulled back.
9. If a command fails, report the full error and stop. Never add force or bypass flags such as --force or --no-verify to get past a failure.
   Why: Workarounds hide the cause and can cause damage.