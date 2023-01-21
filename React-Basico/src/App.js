import React from "react"; //Hay que hacerle siempre la importancion aunque ahora las vers nueva no lo necesita, hay que importarlo de igual manera para tener una buena practica. Porque si trabajas con versiones antiguas de react, el no declararle la importacion presenta un error.
import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente"; //aca hacemos llamar nuestro componente creado.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {
          /*Para hacer un comentario en jsx se debe hacer de la siguiente manera: llave + comentario de js
          */
        }
        <p>
          Bienvenido a mi primer proyecto de react
        </p>

        <label htmlFor="lenguaje">Coloca tu <span className="color-text">lenguaje</span> favorito</label>
        <input type="text" id="lenguaje" className="input-form"></input>
      </header>


      <section className="App-component">
        <Componente></Componente>
        {
          /*Cuando se vincula un componente por el metodo import la forma de llamarlo es por el nombre de etiqueta, es decir en este caso <componente>
          
          es decir se llama <nombre-del-componente-importado></nombre-del-componente-importado>
          
          */
        }
      </section>
      
    </div>
  );
}

export default App;

/*SIGNIFICADO DE ETIQUETAS Y COMO FUNCIONA JSX Y COMO SE VERIA EN VANILLA.*/

//ClassName -> La palabra Class ya es una palabra reservada en el lenguaj, y utilizarlo se entra en conflicto. Por ese motivo en el JSX se utiliza "ClassName" haciendo referencia al class del HTML

//for -> de los elementos de los formularios en JSX se llama "htmlFor"

//La estructura de react parece html pero no es html sino que es una azucar sintatica pero realmente se llama "JSX" que es muy similar al html comun que conocemos.


//COMO SE CREA EN HTML Y COMO SE OBSERVA EN JAVASCRIP VANILLA

/*
HTLM

<div className(Este es class pero si añadimos class solo nos genera un error ya que js tiene esa palabra reservada por ese motivo se agrega className)="Prueba">
  Contenido
</div>


TRADUCIDO A JAVASCRIPT 

//Llama la libreria "react" y utiliza un DOM donde va crear ese elemento en el html.

react.createElement{
//Dentro de aca salen 3 valores

  "div",
  {
    className="Prueba"
  },
  "Hola mundo"  

}

1. Primero se añade la caja contenedora en este caso "div", asi como pudo a ver sido "article, section". Es el contenedor.

2. El segundo que esta dentro de llave son los valores que va recibir, las clases, los id, los hreft, ect es decir es lo que observamos dentro de aca <div -> contenido>.

3. Y por ultimo es el contenido que el mismo va almacenar, en este caso es un texto.

*/



/*
JSX INTERPOLAR COMO FUNCIONA: Nos referimos interporacion cuando el dato almacenado en este caso en una variable queremos reflejarlo en "x" lugar en este caso en un div.

-----------------------------------

BLOQUE DE CODIGO JSX


let nombre ="Agustin"; -> variable con el valor asignado.

<section> -> caja contenedora padre.
  <div className="Hola"> -> caja contenedora
  	Hola mundo {nombre} ->contenido
  </div>
</section>


-----------------------------------


TRADUCIDO A JS COMO SE VERIA:

-----------------------------------
BLOQUE DE CODIGO JS

let nombre = "Agustin"; ->  la variable declarada
React.createElement( -> el DOM para crear el HTML
  "section", -> el tipo de elemento ue va ser su caja contenedora en este caso el padre.
  null, -> no se declaro ningun atributo.
  React.createElement( -> Al agregarle adentro un elemento hijo (div - article) lo que realizara sera crear otro bloque mas por medio del dom.
    "div", { -> el elemento que se va crear.
    className: "Hola" -> el atributo que tendra en este caso la clase.
    }, 
    "Hola mundo ", -> el valor del contenido dentro de la caja contenedora, en este caso un texto.

    nombre)); -> Y ahora observamos un cuarto valor que este es la variable vinculada para realizar la interpoiacion.

-----------------------------------





)


*/