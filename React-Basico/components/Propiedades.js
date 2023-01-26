import React from "react";
/*
-----------------------------------------------------------------------------------------------------------------------------------
3 REGLAS DE LAS PROPS - TEORIA


1. Las props son solamente de lecturas es decir inmutables. No se puede editar.


2. Las props van de padre a hijo es decir: se le pasa la informacion desde el main, donde se va estar alojando la etiqueta del nuevo componente.

Que desde un componente padre por ejemplo App le estoy enviando un dato al componente "propiedades" de esta forma viaja los datos hacia el componente es decir "props.porDefecto" y el parametro estara recibiendo esos datos.


3. las props pueden recibir diversas cantidad de datos. Puede pasarse string, numeros, booleanos, objetos, elementos de react, componentes de react (es decir podemos invocar a otros componentes)ect. 

para mas informacion:
https://youtu.be/FOWO07pImCg

--------------------------------------------------------------------------------------------------------------------------------------
¿PARA QUE SIRVEN LAS PROPS?¿O CUAL ES SU UTILIDAD?

Los Props tiene una importante función: ellos pasan los datos de un componente a otro, ofreciendo así un canal por el medio del cual los componentes se puede comunicar.

*/








export default function Propiedades(props) {
    //El parametro PROPS va estar recibiendo los datos de las propiedades pasadas en el componente padre.

    return(
        <section>

            <div>{props.porDefecto}</div>
            

            <div>{props.nombre}</div>{/*En este propos.nombre conecta app y app le pasa el valor a la etiqueta, y viaja y se refleja*/}

            <div>{props.name}</div>
            <div>{props.apellido}</div>
            {/* Una vez invocado solamente en el componente padre ejemplo de esta manera:
             <Propiedades {...datosPersonas}/>

             En el componente hijo podemos ingresar dentro del objeto y pasar los valores. Hay que tener en cuenta que las props solamente sirven para visualizar una lectura de datos. Es decir si trato de hacer esto:

             props.name = "Mario" -> no va estar funcionando, ya que solamente es lectura y largara error.
            */}

            {/*
                PROPIEDADES POR DEFECTO:

            */}

            


        </section>
        
       

    );
    
             /*COMO HACER QUE LAS PROPS RECIBAN UN VALOR POR DEFECTO.
             
             Esto permite que un componente ya reciba un valor por defecto, a la hora de enviar los datos al componente padre se realiza de la siguiente manera.

             nombre-del-componente.defaultProps ={
                color:"azul",
             }

             defaultProps es una propiedad especial que permite añadir un objeto de forma default. De esta manera se puede pasar datos sin especificar en el componente padre, sino que ya interpreta el componente que dato se va mandar de forma default, solo es interpolar en jsx.

             El tema de hacer props por defecto es que cada vez que invoquemos la etiqueta del componente, la va estar imprimiendo.

             Ejemplo:
             */
        
};

Propiedades.defaultProps = {
    porDefecto: "Las Props",
  };




  /*PROTYPES
  
  ¿QUE ES?
  Protypes es una dependendencia que permite que las props forzosamente reciba un cierto tipo de criterio de datos. 
  
  Como por ejemplo

  //Se crea un objeto llamado propTypes y adentro se pone el requerimiento.
  Propiedades.propTypes ={
    nombre: PropTypes.string, -> Le esta diciendo que esta propiedad solamente va recibir tipo de datos cadena de texto. (Va leer props.nombre y evaluar el tipo de dato ingresado, dependiendo del dato añadido como requerido va ser aceptado o va salir en nuestra consola un error).
  }

  //SI NOSOTROS QUEREMOS QUE LAS PROTYPES SEAN REQUERIDAS ES DECIR QUE SE AÑADAN AL COMPONENTE PADRE SI O SI SE DEBE AÑADIR LO SIGUIENTE:

    Propiedades.propTypes ={
    nombre: PropTypes.stringisRequired, -> de esta mananera ya es requerida. 
  }


  */







