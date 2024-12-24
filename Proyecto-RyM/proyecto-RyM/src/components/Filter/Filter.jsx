import './filter.css';

export default function Filter({title,filtar}){

    return(
        <div className='filtros rounded-3 form-check form-switch'>
            <input className='input-form form-check-input' id={title} type='checkbox' onClick={(event)=>filtar(event.target)} value={title}/>
            <label className='form-check-label' htmlFor={title}>{title}</label>
        </div>
    )
}

//<label for="mismo">Referencia..</label>
//<input id="mismo"/>
//event.target -> contiene la informacion del nodo(elemento) en el que ocurrio el evento (en este caso nos trae informacion del inputo en donde se hizo "click")