import { useState } from "react"

import './card.css';

export default function Card({personaje}) {
    let [ocultar,setOcultar]=useState(true)//este estado lo creo para que me permita saber si tiene que ocultar o mostrar elementos
    // console.log(personaje)
   //el objeto personaje contiene la info de cada personaje que me dio la API
    return(
        <div className='card container-card d-flex flex-row justify-content-between aling-items-center'>
            <div class="d-flex flex-column justify-content-between align-itmes-center">
                <img src={personaje.image}/>
                <h2 class="t-title card-title text-center">{personaje.name}</h2>
                <button
                onClick={()=>setOcultar(false)} 
                className={ocultar?"d-block b-card btn btn-active btn-x-md d-flex align-self-end":"d-none"}>Know More</button>            
            </div>
            { ocultar ?'':
                <div>
                    <div class="container-info rounded-2 d-flex flex-row justify-content-between align-items-center">
                             <div class="d-flex flex-column align-items-center">
                                  <div class="d-flex justify-content-end">
                                    <button class="x border border-0 m-2 rounded-3 d-flex justify-content-center" onClick={()=>setOcultar(true)}>X</button>
                                  </div>
                                    <ul class="list-group">
                                        <li class="container-item p-3 d-flex flex-column list-group-item" ><p class="p-info m-0 fw-bold">Character Status</p> <p class="info">{personaje.status}</p></li>
                                        <li class="container-item p-3 d-flex flex-column list-group-item" ><h4 class="h4-info m-0" >Species</h4>  <p>{personaje.species}</p></li>
                                        <li class="container-item p-3 d-flex flex-column list-group-item" ><h4 class="h4-info m-0" >Origin</h4><p></p> <p>{personaje.origin.name}</p></li>
                                        <li class="container-item p-3 d-flex flex-column list-group-item" ><h4 class="h4-info m-0" >Gender</h4> <p>{personaje.gender}</p></li>
                                    </ul>
                             </div>
                   </div>
                </div>}
            

        </div>
    )
}