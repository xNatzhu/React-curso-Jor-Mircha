import React,{Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props)
        this.state={
            contador:0
        }
        this.sumar= this.sumar.bind(this);
        /*Le estamos declarando al this de la clase una propiedad llamada sumar que lo que hace es igualar el metodo sumar y la enlaza al elemento this. */
    }
    sumar(e){/*Recibe como parametro "e " porque esta recibiendo el evento*/

         /*Para actualizar el estado vamos usar la propiedad llamada "setState" lo que va permitir actualizar el estado*/
         /*Al ser componentes de clase se utiliza this como referencia al elemento.*/

         
        this.setState({/*Ingresamos dentro del objeto, ponemos la propiedad que se va actualizar y le añadimos el valor.*/
            contador:this.state.contador + 1
            /*PROPIEDAD: MUESTRA EL VALOR QUE ALMACENA Y LO SUMA + 1*/
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos en componente en clases ES6</h2>

                <div>
                    <h3>{this.state.contador}</h3>
                    <nav>
                        <button onClick={this.sumar}>Sumar</button>
                        <button >Menos</button>
                    </nav>
                </div>
            </div>

        );
    };
}

/*PROPERTIES INITIALIZER -> EN ESTE ECMA NO ES NECESARIO EL CONSTRUCTOR-

ES7 TOMA EL THIS EN EL CONTEXTO QUE ESTA EN ESTE CASO EN LA CLASE ENTONCES NO ES NECESARIO.

*/
export class EventosES7 extends Component{

    /*ESTADO*/
    state={
        contador:0,

    };

//ARROW FUNCTION - METODO - EVENTO
sumar = (e)=>{
    this.setState({
        contador:this.state.contador + 1
    });
}

    render(){
        return(
            <div>
                <h2>E ventos en componente en clases ES7</h2>

                <div>
                    <h3>{this.state.contador}</h3>
                    <nav>
                        <button onClick={this.sumar}>Sumar</button>
                        <button >Menos</button>
                    </nav>
                </div>
            </div>

        );
    };
}


function Boton(props){
    return(
        <button onClick={props.EventoPersonalizadoOnClick}>BOTON HECHO COMPONENTE</button>
    );
}
export class MasSobreEventos extends Component{
     handelClick = (e)=>{

    }
    /* HANDEL SIGNIFICA MANEJAR ES DECIR EL EVENTO QUE ESTAS MANEJANDO ES UNA TIPOLOGIA. */
    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e)=>this.handelClick}>Saludar</button>

                {/*Cuando se utiliza las conexiones siempre lleva el this en las clases.*/}

                {/*BOTONES PERSONALIZADO Creas una props que se la pasa al componente entonces esa props, se le asigna al evento.*/}
                <Boton EventoPersonalizadoOnClick={
                    (e)=>
                        this.handelClick(e,"Hola soy un mensaje")
                    
                }/>
            </div>
        );
    }
}

/*DEFINICIONES DE LOS EVENTOS

Synthetic -> envuelve elevento nativo al navegador le da soporte a los dif navegadores y versiones. Pero adicionalmente tiene la caracteristica que tiene un mejor control sobre el evento en react. ES UNA CAPA QUE PONE REACT PARA DAR SOPORTE A LOS EVENTOS.
PARA VER LOS EVENTOS SOPORTADOS POR REACT HAY QUE VER EN LA DOCUMENTACION.

En este caso event ese un evento sintético de React, en React todos los manejadores de eventos son instancias de SyntheticEvents. Los eventos sintéticos son una envoltura de los eventos nativos del navegador, por lo que estos eventos cuentan con la misma interfaz de los eventos nativos, como por ejemplo preventDefault() y stopPropagation(), con la ventaja de que todos estos eventos funcionan idénticamente en la mayoría de los navegadores.


------------------------

NATIVE EVENT:

Para ingresar al evento original de JS PURO vanilla hay que utilizar la propiedad nativeEvent esto va dentro del parametro donde llama al evento.

React no expone el evento nativo del navegador. En su lugar, React crea un objeto sintético que se basa en el evento nativo del navegador llamado SyntheticEvent. Para acceder al evento nativo del navegador, debemos usar el atributo nativeEvent
EJEMPLO:

function Button({ onClick }) {
  return <button onClick={e => onClick(e.nativeEvent)}>Haz clic aquí</button>
}


--------------------
ENVIAR MAS INFORMACION DESDE UN EVENTO APARTE DEL PARAMETRO DEL EVENTO COMO UN TEXTO.

  return <button onClick={(e)=>{
    this.handleClick(e, "INFORMACION DE UN SEGUNDO PARAMETRO")
  }}>Haz clic aquí</button>



----------------------

EVENTO PERSONALIZADO:

Los botones personalizados son cuando utilizamos componente para enviar el evento por medio de props entonces lo vinculamos esa props con el evento y funciona.
No se le puede agregar ahi mismo el evento onClick por que no es una etiqueta JSX sino una etiqueta componente, por ese motivo hay que enviarlo mediante una props.

OBSERVAR EL EJEMPLO DE EVENTO PERSONALIZADO.
*/