// un componente basado en clases.

import React,{Component} from "react";
import '../App.css';
//Se hace la importacion / import + nombre de la libreria(react), +{se extrae el objeto Component} + from react

class Componente extends Component{
// primero se hace una clase que tendra el nombre del componente, luego hacemos que esto va estar extendiendo o heredando de Component
    render(){ //Cuando empezamos a crear componente lo primero que se debe añadir es render que significa que va estar renderizando el codigo.
        return <h2>Hola soy un componente</h2>
    }

}

/*
----------------------------------------------
COMO SE CREA UN COMPONENTE BASADO EN FUNCIONES
----------------------------------------------


----------------------------------------------
FUNCIONES DECLARADA:
----------------------------------------------

function Componente(){
    return <h2> contenido</h2>
}

En las funciones no hay necesidad de utilizar el render.


-------------------------------------------------------

----------------------------------------------
FUNCIONES EXPRESIVAS O ARROW FUNCTION
----------------------------------------------
const Componente = ()=>{
    <h2> contenido</h2>
}
*/



export default Componente