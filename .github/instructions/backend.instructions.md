---
name: backend-instructions
displayName: Backend Development Instructions
description: |
  Apply when editing backend files under backend/.
  Guide the backend agent on API implementation, Flask application logic, tests, dependency management,
  and repository validation behavior.
applyTo:
  - "backend/**"
---

# Backend Development Instructions

Use this instruction set when working on the backend application inside `backend/`.

## Primary goals

- Implement and update backend endpoints and application logic.
- Keep changes focused on the backend codebase unless the user explicitly requests a cross-cutting backend/frontend update.
- Ensure backend changes are covered by tests and follow existing project conventions.
- Validate assumptions before editing by checking current API behavior and tests.

## Recommended approach

- Use Flask route handlers and JSON responses consistent with current backend style.
- Add or update unit tests under `backend/` when implementing new behavior.
- Install and manage dependencies through `backend/requirements.txt`.
- Keep server-side validation and error handling clear and robust.

## Scope boundaries

- Backend files: `backend/**`, including Python code, tests, and dependency manifests.
- Avoid editing frontend-only files in `frontend/frontend/` unless the user explicitly asks for frontend integration.
- Do not modify GitHub workflow YAMLs unless the user requests workflow changes.

## Quality

- Prefer simple, maintainable backend code.
- Use clear error messages and HTTP status codes.
- Keep the implementation easy to review and test.
