import './nav.css';
import {Link} from 'react-router'


export default function Navegation() {
    return(
        <nav className='navbar d-flex justify-content-between navbar-expand-lg w-100'>
            <div class="contenedor-titulo container-fluid justify-content-between align-items-center m-0">  
                <a alt="Go to Home" href="/_" class="contenedor-RyM ">
                    <h1 class="t-rm navbar-brand "><Link to="/">Rick & Morty</Link></h1>
                </a>
               <div class="collapse navbar-collapse justify-content-end">
                   <ul class="container-items nav nav-pills">
                       <li><a class=" b-c nav-link text-decoration-none bc-hover" href="/Characters">Characters</a></li>
                       <li><a class="b-c nav-link text-decoration-none bc-hover" href="/Contact">Contact</a></li>
                   </ul>
                   <button class="icon-filter navbar-toggler">
                   <i class="bi bi-list"></i>
                    </button>
               </div>
            </div>
        </nav>
    )
}