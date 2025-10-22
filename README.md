### 

``` js
  const [tarea, setTarea] = useState({
    titulo: "",
    tipo:"",
    descripcion:"",
    fecha:"",
  });
```

 - Primero definiciones

"Estamos declarando el objeto tarea (que es un objeto *con propiedades* ) usando el hook useState que contiene las propiedades de una tarea (titulo,tipo,descripcion,fecha) inicializadas con valores vacios. El hook nos devuelve un array con dos elementos: el valor actual del estado (tarea) y una funcion para actualizarlo (setTarea). Cada vez que llamamos setTarea con nuevos valores,React re-renderiza el componente mostrando la informacion actualizada"

Tarea podemos decir que es una caja y setTarea es la combinacion que cambia lo que hay dentro y cada vez que cambiamos el contenido,Reat actualiza lo que ves

``` js
export const EstadoPrincipal = () => {
  const [tarea, setTarea] = useState({
    titulo: "",
    tipo:"",
    descripcion:"",
    fecha:"",
  });
  const [listaTarea, setListaTarea] = useState([]);

  const manejarAgregarTarea = (tarea2) => {
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
```

El componente padre envia tres props al hijo
 1- value={tarea} - El objeto actual con los datos del formulario
 2- onChange={manejarAgregarTarea} - la funcion para actualizar el estado tarea cuando el usuario escribe
 3- onAgregarTarea={manejarAgregarTarea} - La funcion que el hijo ejecutara cuando el usuarfio quiera agregar la tarea a la lista

 digamos que tarea es un papel en blanco, el onChange es el lapiz para escribir y onAgregarTarea un boton para guardar

 value=tarea value recibe el objeto tarea
 onChange= la funcion para poder cambiarlo