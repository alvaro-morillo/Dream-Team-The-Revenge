import React from "react";

export const ManejoInput = ({ value, onChange,manejarAgregarTarea }) => {
  
  
  const manejarCambios = (campo,valor) => {
   
    onChange({
        ...value,
        [campo]:valor, 
    })
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    manejarAgregarTarea(value);
  } 
  return (
    <div>
      <form action="" onSubmit={manejarSubmit}>
        <input
          placeholder="Agrege un titulo"
          type="text"
          value={value.titulo}
          onChange={(e) => manejarCambios("titulo",e.target.value)}
          onAgregarTarea = {manejarAgregarTarea}
        />
          <input
          placeholder="El tipo de tarea"
          type="text"
          value={value.tipo}
          onChange={(e) => manejarCambios("tipo",e.target.value)}
        />
          <input
          placeholder="Ingrese la descripcion"
          type="text"
          value={value.descripcion}
          onChange={(e) => manejarCambios("descripcion",e.target.value)}
        />
          <input
          placeholder="Ingrese una fecha"
          type="date"
          value={value.fecha}
          onChange={(e) => manejarCambios("fecha",e.target.value)}
        />
      </form>
    </div>
  );
};
