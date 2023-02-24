import React,{Component} from "react";

//componentes hijos

function Login() {
    return(
        <div>
            <h1>Login</h1>
        </div>
    );
}

function Logout() {
    return(
        <div>
            <h1>Logout</h1>
        </div>
    );
}

//componente padre
export default class RenderizadoCondicional extends Component{
    constructor(props){
        super(props);
        this.state = {
            session: true,
        };
    }
    render(){
        return(
            <div>
                {this.state.session ?<Login/>:<Logout/>} 
                <div>Renderizado APP</div>
            </div>
            
            

        )
    }
}

/* 
EL RENDERIZADO ES CUANDO UN VALOR DEL ESTAO O DE UNA PROPIEDAD CAMBIAN Y ESTO OBLIGA QUE SE VUELVE A PINTAR LA INTERFAZ

El agregarle {} se puede realizar acciones sincronica como condicional, ect.


*/