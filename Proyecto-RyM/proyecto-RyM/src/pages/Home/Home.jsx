import ButtonsHome from '../../components/ButtonsHome/ButtonsHome'

import './home.css'


export default function Home() {
    return(
        <div className='contenedor d-grid container-fluid vh-100 w-100'>
             <div className='container align-self-center fondo-blanco p-0'>
                    <div className="container contenedor-texto p-0">
                        <h1 className="row text titulo d-flex justify-content-center ">Proyect Rick & Morty</h1>
                        <h2 className='row text subtitulo d-flex justify-content-center'>Welcome to Rick & Morty Proyect!</h2>  
                        <p className='row text d-flex justify-content-center this-proyect'>This proyect was made for practising React and to made a functional website. </p> 

                        <p className='row text d-flex justify-content-center in-this'>In this website you can know information of the characters of this animated series. </p> 
                        
                        <p className='row text  d-flex justify-content-center also-you'>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.
                        </p>     
                        <p className='row text d-flex justify-content-center lets-go subtitulo'>Lets go!</p> 
                    </div> 
                    <div className='containerButton row d-flex justify-content-center m-0'>
                        <ButtonsHome contenido="Characters"/>
                        <ButtonsHome contenido="Contact"/>           
                    </div>

                </div>        
        </div>
   

    )
}