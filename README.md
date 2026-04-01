# AuroraTeam - Agentes de GitHub Actions

Este proyecto está diseñado para demostrar una arquitectura simple de 5 agentes colaborando a través de GitHub Actions:

- `techlead`: valida la estructura del repositorio, los estándares y las dependencias.
- `backend`: instala dependencias backend, ejecuta pruebas y lint.
- `frontend`: instala dependencias frontend, ejecuta pruebas y genera el build.
- `qa`: ejecuta pruebas integradas de frontend y backend, y valida el backlog.
- `founder`: verifica que el backlog de producto existe y muestra un resumen.

## Orquestación
La workflow `sprint0.yml` ejecuta los agentes en el orden:
1. techlead
2. backend
3. frontend
4. qa
5. founder

### Interacción entre agentes
Cada agente pasa un estado al siguiente usando inputs y outputs de `workflow_call`:
- `techlead` valida el repositorio y publica `repo_ok` y `backlog_present`.
- `backend` usa `repo_ok` y publica `backend_ready`.
- `frontend` usa `backend_ready` y publica `frontend_ready`.
- `qa` usa `repo_ok`, `backend_ready`, `frontend_ready` y `backlog_present`, y publica `qa_ready`.
- `founder` usa `qa_ready` y `backlog_present` para decidir si el proyecto está listo para entrega.

## Estructura actual
- `backend/`: aplicación Flask y pruebas.
- `frontend/frontend/`: aplicación React creada con Create React App.
- `docs/backlog.md`: backlog inicial del proyecto.

## Cómo escalar
A medida que el proyecto crezca, cada agente puede recibir más responsabilidades:
- techlead: políticas de seguridad y revisión de dependencias.
- backend: pruebas de API, migraciones, contrato de datos.
- frontend: pruebas E2E, accesibilidad y compatibilidad.
- qa: pruebas de integración, validaciones de documentación y control de calidad.
- founder: checkpoint de producto, métricas de negocio y despliegues.- Cada agente puede ahora marcar una task como completada dentro de un issue de GitHub usando el input `issue_number`.

## Trackeo de tareas en issues
Para usarlo, ejecuta `sprint0.yml` con el input `issue_number` y crea un checklist en el issue con las líneas exactas usadas por cada agente:
- `TechLead: Validar estructura del repositorio`
- `Backend: Validar backend`
- `Frontend: Validar frontend`
- `QA: Validar pruebas e integraciones`
- `Founder: Verificar backlog y release`