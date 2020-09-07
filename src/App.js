import React, { useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  // arrreglo de citas
  const [citas, guardarCitas] = useState([]);

  // funcion que tome las citas actuales y agregue la nueva

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  return (
    <>
      <h1>Administrador de Pacientes</h1>;
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
