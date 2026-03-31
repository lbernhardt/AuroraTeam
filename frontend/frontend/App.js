import React, { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Cargando...");

  useEffect(() => {
    fetch("http://localhost:5000/health")
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus("Error de conexión"));
  }, []);

  return (
    <div>
      <h1>Frontend listo</h1>
      <p>Estado del backend: {status}</p>
    </div>
  );
}

export default App;
