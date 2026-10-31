---
trigger: glob
globs: "**/*.{test,spec}.{ts,tsx,js,jsx}, **/tests/**, **/test/**, **/check-*.ps1"
description: "Unit, integration, and regression testing requirements before reporting tasks done."
---

# Testing rules
Job: prove work is finished before the agent says it is.

1. If the project has no test setup, stop and ask before you add one.
   Why: A test tool is a package and needs approval.
2. Before you say a task is done, run the whole test suite, not only the new tests.
   Why: New code often breaks old behaviour.
3. Write a test for each function that returns a figure and for each branch that decides what a member is told.
   Why: These are the places where a wrong answer costs a member money.
4. For figures, compare against expected values supplied by the project owner. Never work out the expected value with the code under test.
   Why: A test that copies the code's logic passes even when the logic is wrong.
5. Never delete, skip or weaken a test to make it pass.
   Why: That hides the bug instead of fixing it.
6. Test data is invented and labelled as invented. Never use member data (see rules-security.md).
   Why: Real data leaks through test output and repositories.
7. Report the exact test command and its result.
   Why: The project owner can repeat it.
8. If you cannot run the tests, say so. Do not claim a pass.
   Why: A false pass is worse than no result.