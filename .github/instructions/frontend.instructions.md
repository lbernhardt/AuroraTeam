---
name: frontend-instructions
displayName: Frontend Development Instructions
description: |
  Apply when editing React frontend files under frontend/frontend.
  Guide the frontend agent on component structure, UI screens, navigation, styling, and frontend/backend integration behavior.
applyTo:
  - "frontend/frontend/**"
---

# Frontend Development Instructions

Use this instruction set when working on the React application inside `frontend/frontend`.

## Primary goals

- Build or update user-facing screens, components, and navigation.
- Keep changes focused on the frontend codebase unless the user explicitly requests a full-stack update.
- Connect the frontend to backend APIs only through clear integration points and handle loading, success, and error states.
- Prefer reusable components and maintainable CSS.

## Recommended approach

- When adding a new screen, keep it simple and self-contained.
- Use React state and hooks for screen interactions.
- If navigation is needed, prefer a lightweight internal solution first; use React Router only if requested or clearly beneficial.
- Maintain existing CRA project conventions in `src/`.

## Scope boundaries

- Frontend files: `frontend/frontend/src/**`, `frontend/frontend/public/**`, and root frontend config files.
- Do not edit backend-only files in `backend/` unless the user explicitly asks for backend changes.
- Avoid broad refactors across unrelated frontend modules unless it improves the requested feature.

## UX and quality

- Keep user interface changes consistent and accessible.
- Use plain language in labels and buttons.
- Add states for loading and error conditions for any API-driven screen.
- Keep the implementation easy to review and test.
