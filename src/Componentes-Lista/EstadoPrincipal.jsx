import React, { useState } from "react";
import { ManejoInput } from "./ManejoInput";

export const EstadoPrincipal = () => {
  const [tarea, setTarea] = useState({
    titulo: "Salir a correr",
    tipo: "",
    descripcion: "",
    fecha: "",
  });
  const [listaTarea, setListaTarea] = useState([]);

  const manejarAgregarTarea = (nuevaTarea) => {
    
    setListaTarea
  };

  return (
    <div>
      <ManejoInput
        value={tarea}
        onChange={setTarea}
        onAgregarTarea={manejarAgregarTarea}
      />
    </div>
  );
};
