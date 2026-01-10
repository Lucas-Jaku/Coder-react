import { useState, useEffect } from "react";

export default function ItemCount() {
    const [count, setCount] = useState(1);
    const MIN = 0;
    const MAX = 100;

    console.log("Ciclo de vida: Montaje -> carga/render inicial en el DOM")
    console.log("Actualizacion de ItemCount")
    console.log("Desmontaje -> elimina el componente del DOM")
    //console.log("Peticion de datos a la base de datos/API")

    //Efecto de montaje
    useEffect(() => {
        //Efecto de montaje
        console.log("Peticion de datos a la base de datos/API")
        //Efecto de desmontaje
        return () => {console.log("tarea de desmontaje")};
    }, []); //array de dependencias vacio -> solo se ejecuta en el montaje  

    function handleAdd() {
        if (count < MAX) {
            setCount(count + 1);
        }
    }
    function handleSubtract() {
        if (count > MIN) {
            setCount(count - 1);
        }


    }

    return (
        <div>
            <div>
                <button onClick={handleSubtract}>-</button>
                <span>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            <button>Agregar al carrito</button>
        </div>
    )
}     