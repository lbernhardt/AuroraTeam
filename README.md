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
- founder: checkpoint de producto, métricas de negocio y despliegues.
- Cada agente puede ahora cerrar su issue asociado cuando completa su tarea.

## Trackeo de tareas en issues
El orquestador `sprint0.yml` buscará automáticamente el issue correcto dentro de un milestone si los títulos contienen el tag del agente, por ejemplo:
- `[Tech Lead] ...`
- `[Backend] ...`
- `[Frontend] ...`
- `[QA] ...`
- `[Founder] ...`

Para usarlo, ejecuta `sprint0.yml` con:
- `milestone_name`: nombre del milestone donde buscar los issues

Cada job cerrará el issue asociado encontrado por tag dentro del milestone.

## Cómo probar la orquestación
Puedes probar que los agentes resuelven su tarea en secuencia usando el workflow `sprint0.yml`.

1. Asegúrate de que el repositorio tiene `backend/`, `frontend/frontend/`, y `docs/backlog.md`.
2. Ve a la pestaña de Actions en GitHub y ejecuta el workflow `Sprint 0 Orchestrator`.
3. Ingresa el `milestone_name` donde estén los issues de cada agente.
4. Revisa el resultado de cada job:
   - `techlead` valida la estructura y el backlog.
   - `backend` instala dependencias, corre pruebas y lint.
   - `frontend` instala dependencias, corre pruebas y build.
   - `qa` ejecuta pruebas de integración y verifica el backlog.
   - `founder` confirma la readiness final.

Cada agente avanzará solo si el anterior completa correctamente su tarea, y el orquestador detendrá la cadena si hay un fallo.

### Prueba local rápida
Si quieres verificar localmente sin GitHub Actions, ejecuta manualmente los pasos clave:
- `cd backend && python -m pip install -r requirements.txt && pytest && flake8 .`
- `cd frontend/frontend && npm ci && npm test -- --watchAll=false && npm run build`
- `test -f docs/backlog.md`

Esto te permite ver el mismo comportamiento de cada agente antes de correr el workflow.
