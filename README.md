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

