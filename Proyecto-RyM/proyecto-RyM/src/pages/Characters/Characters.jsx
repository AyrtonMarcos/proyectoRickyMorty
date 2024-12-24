import { useState ,useEffect,useContext} from 'react';//traemos el metodo useContext para poder traerme el contexto de characters(toda la data que me dio la)
//import {charactersContext}  from '../../context';

import './character.css';

import Navegation from '../../components/Navegation/Navegation';
import Card from '../../components/Card/Card';
import Filter from '../../components/Filter/Filter';

export default function Characters() {
    let [data,setData]=useState([])//crea un estado llamado data que de manera inicial es un array vacio
    let[dataCompleta,setDataCompleta]=useState([])
    let [filtrosAplicados,setFiltrosAplicados]=useState([])
    let[show,setShow]=useState(true)
    
    //alternativa para quien quiera usar Context en vez de "dataCompleta"
   // let character=useContext(charactersContext)//me traigo el estado creado en el contexto


    let filterName=["Character Alive","Character Dead","Female","Male","Origin Unknown"]

    const mostrarData=async()=>{
        //traigo la informacion de los personajes de Rick&Morty de la API 
       let infoAPI= await fetch("https://rickandmortyapi.com/api/character")
         .then((resp)=>{return resp.json()})
         .catch((error)=>console.log("error:" +error));
     
         setDataCompleta(infoAPI.results);//la info completa
         setData(infoAPI.results)//arranque con la info completa y luego se empiece a filtrar
     
     }

    const filtrar=(inputData)=>{//funcion que se ejecuta cada vez que clickeamos en un input de los filtros

        //del inputData necesitamos la informacion de "checked" y "value"
        let pulsado=inputData.checked;//booleano

        let filtroPulsado=inputData.value;//el valor del input que se clickeo
        console.log(pulsado)
        console.log(filtroPulsado)


        //si esta pulsado aplicar el filtro
        if(pulsado){
            setFiltrosAplicados([...filtrosAplicados,filtroPulsado])//a la lista de filtros marcados, le agrego el nuevo filtro 
           
        }else{
            setData(dataCompleta)
            let filtrosActualizado=filtrosAplicados.filter((fil)=>{return fil !== filtroPulsado})
            setFiltrosAplicados(filtrosActualizado)//actualizando el estado filtrosAplicados,sin el filtro que se acaba de desmarcar
        }
    
    }

    useEffect(()=>{
        // console.log(filtrosAplicados)
       filtrosAplicados.forEach((filtro)=>{
        let nuevaLista;

        switch (filtro) {
            case "Character Alive":
                nuevaLista=data.filter((personaje)=>{return personaje.status === "Alive"})
                break;

            case "Character Dead":
                nuevaLista=data.filter((personaje)=>{return personaje.status === "Dead" })
                break;

            case "Female":
                nuevaLista=data.filter((personaje)=>{return personaje.gender ===  "Female"})
                break;

            case "Male":
                nuevaLista=data.filter((personaje)=>{return personaje.gender ===  "Male" })
                break;

            case "Origin Unknown":
                nuevaLista=data.filter((personaje)=>{return personaje.origin.name === "unknown" })
                break;
                              
        }
       setData(nuevaLista)//cambiando el estado por medio de su setter 
       })
    },[filtrosAplicados])  
  
    //sin usar el contexto
     useEffect(()=>{
        mostrarData()
        
     },[])
    

//usando el contexto
     //useEffect nos permite actualizar el valor de characters una vez buscada la informacion de la PI en el contexto
    //  useEffect(()=>{
    //     console.log(character)
    //     //setData(character)
    //  },[character])


    return(
        <div>
            <Navegation/>
          
           <section class="section-filtros">
 
                <div class="container-full">
                    <div class="container-filter p-4">
                          <h2 className='subt-1'>Filters</h2>
                          <button class="icon-filter navbar-toggler">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
                           <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                          </svg>
                        </button>
                    </div>
                </div>
               
               <form className={show? 'formulario pt-0 form row gap-2':'row gap-2'}>
                    <div class="contenedor-form d-flex justify-content-between"> {
                        filterName.map((filter)=>{
                            return  <Filter key={filter} title={filter} filtar={filtrar}/>
                        })
                    }  </div>  
                </form>          
           </section>          
        

            <section className='d-flex section-card aling-items-center m-0 row justify-content-center w-100 pt-5'>
            {
                //data.length-> la cantidad de personajes que tengo(largo del array data)
                data.length !== 0?
                data.map((personaje)=>{
                    return <Card key={personaje.id} personaje={personaje}/>
                })
                :
                <p className='alert bg-success'>
                <i className="bi bi-exclamation-triangle-fill pe-2"></i>Sorry! There are no characters width all those properties.</p>
            }
                
            </section>      
        </div>

    )
}
//pagina de personajes 

//condicionales JS : if/else switch op.ternario 
//op.ternario -> sintaxis condicion? accion-true :accion-false

//Fragment

//operador ternario : condicion? accion-true :accion-false


//vamos a armar un contexto -> buscar la info a la API 1 sola vez(evitando que se llame a la api cada vez que se reproduce "Characters") y a crear un estado con la info completa 
//esa info completa la vamos a usar para "volver a atras" cuando se desmarque un checkbox

//BReak!! volvemos 21hs
