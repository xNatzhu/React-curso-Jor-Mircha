import React,{Component} from "react";

export class Padre extends Component{
    state={
       contador:0 
    }

    /*REALIZAMOS ARROW PARA EVITAR EL BIN*/
    incrementarContadore=(e)=>{
        this.setState({
            contador:this.state.contador + 1
        })
    }

    render(){
        return(
            <>
            <h2>Comunicacion entre componentes.</h2>
            <Hijo msg="Mensaje para el hijo 1 - Comunicacion entre el padre y hijo"/>


            {/*COMUNICACION DEL HIJO AL PADRE*/}

            <Hijo incrementarContador ={this.incrementarContadore} />
            </>
        );
    };
}

function Hijo(props) {
    return(
        <div>
            {/*COMUNICACION DEL PADRE A HIJO*/}
            <h3>{props.msg}</h3>
            {/*--------------------------------*/}
            {/* 
                COMUNICACION DE COMPONENTE HIJO A PADRE:
            
            REACT ES UN UNIDIRRECIONAL ES DECIR QUE VA UNA SOLA DIRRECION

            ¿ENTONCES COMO PUEDE COMUNICARSE EL HIJO AL COMPONENTE PADRE?

            CON LOS EVENTOS PERSONALIZADOS O EVENTOS GENERAL. A LA HORA QUE SE EJECUTE LA FUNCION DEL HIJO PODRIA AFECTAR EL ESTADO DE UN COMPONENTE PADRE
            */}
            <button onClick={props.incrementarContador}>+</button>
        </div>
    )
}