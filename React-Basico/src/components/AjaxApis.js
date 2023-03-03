import React,{Component} from "react"

function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name}></img>
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}
export default class AjaxApis extends Component{
    state={
        pokemons:[],
    }

    /*Las peticiones van en el metodo componentDidMount*/
    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
         .then(res => res.json() /*CONVERSION DE LA API A JSON*/).then((json)=>{
            /*Aqui recibira la respuesta convertida en json*/
            console.log(json);
            /*Por cada uno de los resultados(json) va estar recorriendo result por cada elemento (for each)*/
            json.results.forEach(el =>{
                fetch(el.url)/*Hara un peticion por cada elemento (EL.URL) */
                .then(res => res.json()).then(json=>{
                    console.log(json)
                    let pokemon ={
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default,
                    };
                    /*Le agregas una copia al estado actual de pokemons, y luego lo vas a combinar con el objeto creado llamado pokemon. */
                    let pokemons =[...this.state.pokemons, pokemon]
                    /*Actualizo el estado con setState */
                    this.setState({pokemons})
                });
            })
         })

    };
    render(){
        return(
            <div>
                <h2>Peticiones Asincronas en componentes de clases</h2>
                {this.state.pokemons.length === 0?<h3>Cargando...</h3>:this.state.pokemons.map((el)=><Pokemon key={el.id} name={el.name} avatar={el.avatar} />)}
            </div>
        );
    };
}