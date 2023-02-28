import React,{Component} from "react";

class Reloj extends Component{
    constructor(props){
        super(props);
    }
    componentWillUnmount(){
        console.log(3, "eL COMPONENTE HA SIDO ELIMINADO DEL DOM.");
    }
    render(){
        return (<h3>{this.props.hora}</h3>)
    }
}
export default class CicloDeVida extends Component{
    constructor(props){
        super(props);
        console.log(0,"El componente se inicializa, OJO AUN NO ESTA EN EL DOM");
        this.state = {
            hora:new Date().toLocaleTimeString(),
            visible:false 
        }

        this.temporizador = null;
    }

    tictac = ()=>{
        this.temporizador = setInterval(() => {
            this.setState({
                hora:new Date().toLocaleTimeString()
            })
        }, 1000);
    }
    play = (e)=>{
        this.tictac()
        this.setState({
            visible:true
        })
    }
    pause = (e)=>{
        clearInterval(this.temporizador)
        this.setState({
            visible:false
        })
    }

    /*METODOS COMPONENTES */
    componentDidMount(){
        console.log(1,"El componente ya se muestra en el dom")
        /* CREA EL COMPONENTE EN EL DOM, AYUDA PODER HACER PETICIONES A LAS API O AJAX*/
    }

    componentDidUpdate(prevProps, PrevState){
        /*me permite pasar las propiedades previas y los estados previos por si yo necesito trabajar con esos valores antes de actualizar el 
        nuevo estado.

        Esto te permite guardar el estado previo para que puedas utilizarlo o realizar comparaciones.
        */
       console.log(2,"El estado o las props del componente han cambiado");
       console.log(prevProps);
       console.log(PrevState);
    }

    componentWillUnmount(){
        /* Este metodo cuando se va ejecutar, cuando el componente ya no exista. Es decir yo tendria que eliminarlo
        
        
        */

        console.log(3, "eL COMPONENTE HA SIDO ELIMINADO DEL DOM.");
    }
    render(){
        console.log(4, "El componente se dibuja o se re dibuja por algun cambio en el DOM");
        return(
            <>
            <h2>CICLOS DE VIDA DE LOS COMPONENTES DE CLASES</h2>
            <h3>{this.state.hora}</h3>
            <button onClick={this.play}>Play</button>
            <button onClick={this.pause}>Pause</button>
            {this.state.visible && <Reloj hora={this.state.hora}/>}
            </>
        );
    };
}