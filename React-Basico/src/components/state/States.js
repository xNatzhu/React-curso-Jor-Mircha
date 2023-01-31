import React,{Component} from "react";

//COMPONENTE FUNCIONAL DE ANTES ESTADO A HIJO - EJEMPLO

function EstadoAHijo(props) {
    return(
        <div>
            <h3>
                {props.contadorhijo} {/* Le vamos a pasar el props del contador padre al hijo, vamos enviar info del padre y lo pondremos en este ejemplo que seria el hijo*/}
            </h3>
        </div>
    );
}




 export default class State extends Component{
    constructor(props){
        super(props); /* Llamos al objeto al cual esta heredando es deicr la clase padre, que seria el objeto component.*/
        this.state = {
            /*De esta manera se crea el objeto estado. This(objeto).state = contenido del estado*/
            contador:0,
        }
    };
    render(){
        return(
            <div className="state">
                <h2>El estado</h2>
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorhijo = {this.state.contador}/>{/*Los dos elementos estan renderizando el estado, aunque el componente hijo lo tengo en el mismo archivo de estado, react lo detecta en el mismo arbol geanologico como un componente independiente//El componente hijo al ser un componente funcionalnop puede tener estado, pero podemos pasarle a las funciones el estado de forma de props es decir el estado del padre se lo enviamos al hijo.
                */}

            </div>
           

        );
    }
 }

 /*
 
 El estado del componente se comienza definiendo dentro del constructor.
 
 El state una de las caracteristica de la reactividad en todas estas librerias/fw. Cuando cambia el estado genera un renderizado en el elemento que tenga que afectar en el DOM.

 Entra EN ACCION EL VIRTUAL DOM de react para actualizar y no actualizar todo.

 Cuando el estado se actualiza se vuelve renderizar, cada vez que el state se ejecuta se vuelve ejecutar el render del pintado de JSX.}


 EK ESTADO DE UN COMPONENTE PADRE SE LE PUEDE PASAR LA PROPIEDAD A UN COMPONENTE HIJO.

 [[[LOS UNICOS COMPONENTES QUE PUEDEN TENER ESTADOS SON LOS COMPONENTES CLASES, LOS DE FUNCIONES NO PUEDEN TENER ESTADO]]]


 ¿QUE ES UN ESTADO?

 El estado en React, también conocido como state, es el segundo tipo de dato que maneja esta librería de JavaScript. Mientras que las props son los datos que podemos pasarle a un componente o elemento React desde afuera, un estado se conforma por los datos internos que un componente puede manejar.


 ¿Qué hace setState?
setState() programa una actualización al objeto estado de un componente. Cuando el estado cambia, el componente responde volviendo a renderizar.

Cuando realizamos un setState podemos utilizar un evento loops de asincronia como set interval para que vaya actualizando el estado en cada cierto momento.


 */