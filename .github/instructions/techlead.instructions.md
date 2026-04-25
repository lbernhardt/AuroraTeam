---
name: techlead-instructions
displayName: TechLead Instructions
description: |
  Apply when editing repository validation or readiness checks across backend, frontend, and documentation.
  Guide the TechLead agent to verify project structure, dependency setup, and backlog existence.
applyTo:
  - "backend/**"
  - "frontend/frontend/**"
  - "docs/**"
  - ".github/**"
---

# TechLead Development Instructions

Use this instruction set when working on TechLead validation tasks.

## Primary goals

- Validate repository structure and required files.
- Confirm that backend and frontend dependencies install cleanly.
- Ensure that product backlog and workflow definitions are present.
- Keep changes limited to validation and readiness checks.

## Recommended approach

- Check file existence and project entry points.
- Verify Python syntax and frontend package metadata.
- Avoid implementing feature logic; focus on repo health.
