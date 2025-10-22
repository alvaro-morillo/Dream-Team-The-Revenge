###

```js
const [tarea, setTarea] = useState({
  titulo: "",
  tipo: "",
  descripcion: "",
  fecha: "",
});
```

- Primero definiciones

"Estamos declarando el objeto tarea (que es un objeto _con propiedades_ ) usando el hook useState que contiene las propiedades de una tarea (titulo,tipo,descripcion,fecha) inicializadas con valores vacios. El hook nos devuelve un array con dos elementos: el valor actual del estado (tarea) y una funcion para actualizarlo (setTarea). Cada vez que llamamos setTarea con nuevos valores,React re-renderiza el componente mostrando la informacion actualizada"

Tarea podemos decir que es una caja y setTarea es la combinacion que cambia lo que hay dentro y cada vez que cambiamos el contenido,Reat actualiza lo que ves

```js
export const EstadoPrincipal = () => {
  const [tarea, setTarea] = useState({
    titulo: "",
    tipo: "",
    descripcion: "",
    fecha: "",
  });
  const [listaTarea, setListaTarea] = useState([]);

  const manejarAgregarTarea = (tarea2) => {};

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

El componente padre envia tres props al hijo <br>
1- value={tarea} - El objeto actual con los datos del formulario <br>
2- onChange={setTarea} - la funcion para actualizar el estado tarea cuando el usuario escribe <br>
3- onAgregarTarea={manejarAgregarTarea} - La funcion que el hijo ejecutara cuando el usuario quiera agregar la tarea a la lista <br>

digamos que tarea es un papel en blanco, el onChange es el lapiz para escribir y onAgregarTarea un boton para guardar

value=tarea value recibe el objeto tarea
onChange= la funcion para poder cambiarlo

Padre: tarea = {titulo: "Comprar leche", ...} <br>
↓ envía este objeto <br>
Hijo: value = {titulo: "Comprar leche", ...} <br>  
 ↓ usuario escribe "y pan" <br>
Hijo: "Padre, cambia a: {titulo: "Comprar leche y pan", ...}" <br>
↓ <br>
Padre actualiza SU tarea <br>

const manejarCambios = (campo,valor) => {

    onChange({
        ...value,
        [campo]:valor,
    })

};

```js

export const ManejoInput = ({ value, onChange,manejarAgregarTarea }) => {

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
)
}
```

primero declaramos los parametros que recibimos del padre, value,onChange,manejarAgregarTarea

"En estos recibimos  2 funciones onChange que contiene setTarea y manejarAgregarTarea que devolvera el resultado al padre"

para cada input necesitamos value{value.titulo}
