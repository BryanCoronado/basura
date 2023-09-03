import { useEffect, useState } from "react";
import { obtenerPrincipal } from "../api/cevicheria.api";
import "../styles/listarCarta.css";



export function Listar_platos() {
  const [principal, setprincipal] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await obtenerPrincipal();
      setprincipal(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div className="contenedor-general">
      <h1>esta es la carta</h1>
      <div className="listar-platos-contenedor">
        {principal.map((plato) => (
          <div className="plato-card" key={plato.id}>
            <h1>{plato.titulo}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
