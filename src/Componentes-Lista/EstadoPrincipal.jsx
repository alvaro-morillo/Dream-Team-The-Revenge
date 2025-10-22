import React, { useState } from "react";
import ManejoInput from "./ManejoInput";

export const EstadoPrincipal = () => {
  const [tarea, setTarea] = useState({
    titulo: "",
    tipo:"",
    descripcion:"",
    fecha:"",
  });
  const [listaTarea, setListaTarea] = useState([]);

  const manejarAgregarTarea = () => {};

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
