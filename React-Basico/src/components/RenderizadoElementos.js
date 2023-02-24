import React,{Component} from "react";

/*Import JSON*/

import data from "../helpers/data.json";

function ElementoLista(props){
    return(
        <li>
            <a href={props.link}>{props.name}</a>
        </li>
    );
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props)
        this.state = {
            seanson:["Primavera", "Verano", "Invierno", "Otoño"]
        }

        /* Pasos para realizar un mapeo de elementos cuando se renderiza un objeto, una lista, ect.
        
        1. declarar el estado donde va estar almacenando el valor.
        2. una vez realizado se va renderizar se abre {} y se invoca el estado y se agrega al final el .map
        3. El .map va tener como funcion anonima donde estara ejecutando cada elemento.
        */

    }
    render(){
        return(
            <div>
                <h2>Renderizado de elementos</h2>
                <h3>
                    <ol>
                        {this.state.seanson.map((seanson, index)=><li key={index}>{seanson}</li>)}
                        {/*Cuando realizamos un renderizadoo por elemento y usamos map recordar usar los {  a la hora de iniciar
                            Para detectar cada uno de los elementos de manera interna utiliza el key, en este caso vincule el key del segundo parametro.
                            
                            */}
                    </ol>
                </h3>

                <h3>FRAMEWORKS FRONTEND JAVASCRIPT</h3>
                <ul>
                    {/*nombre del archivo. nombre del objeto con informacion  - por media de los props le pasamos info por atributos hacia el componente hijo*/}
                    
                    {data.frameworks.map((fw,index)=><ElementoLista key={fw.id} link={fw.web} name={fw.name}/>)}
                    {/* NOTA: Una forma de pasar todo los valores del json seria data={fw} despues en el componente hijo llamar "fw.name" de esta manera nos evitamos de poder estar armando propiedad x propiedad.*/}
                </ul>
                
            </div>
        );
    };
}