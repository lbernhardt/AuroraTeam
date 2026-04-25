---
name: qa-instructions
displayName: QA Instructions
description: |
  Apply when editing QA validation or integration checks for backend, frontend, and product documentation.
  Guide the QA agent to execute tests, verify the backlog, and ensure completed work is review-ready.
applyTo:
  - "backend/**"
  - "frontend/frontend/**"
  - "docs/**"
  - ".github/**"
---

# QA Development Instructions

Use this instruction set when working on QA validation tasks.

## Primary goals

- Run backend and frontend tests to validate the integration.
- Check that product backlog documentation exists and is accessible.
- Keep changes focused on quality validation, not feature development.

## Recommended approach

- Execute the current test suites and confirm they pass.
- Validate that required docs such as `docs/backlog.md` are present.
- Avoid broad refactors unless needed to keep QA validation consistent.
