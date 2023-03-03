import React,{useState} from "react";

export default function ContadorHooks(props) {

    //RECORDAR LOS USE STATE VAN CON CORCHETE!!!! NO LLAVES

    const [count, setCount] = useState(0);//puede recibir cualquier objeto boolean, funcion, string, ect como valor.


    //es recomendable trabajar las funciones con formato arrow function. Pero las funciones normal se puedan utilizar.

    const sumar = (e)=>{
        setCount(
            count + 1
        )
    }

    const restar = (e)=>{
        setCount(
            count - 1
        )
    }
    return(
        <>
            <h2>Hooks - USE STATE</h2>
            <button onClick={sumar}>+</button>
            
            <button onClick={restar}>-</button>
            <h2>{count}</h2>
            <p>Contador de {props.titulo} </p>
        </>
    );
}

//PROPS POR DEFAULT EN UN COMPONENTE.
ContadorHooks.defaultProps = {
    titulo:"clicks",
}