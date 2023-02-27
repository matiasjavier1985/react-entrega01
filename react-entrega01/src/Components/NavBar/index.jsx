import Lista from "../ItemListContainer";
import CartWidget from "../CartWidget";
import { MdDirectionsBike } from "react-icons/md";
function NavBar() {
    return (
        <div>        
           <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">                   
                    <MdDirectionsBike size={35}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <Lista nombre="Bicicletas"/>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Accesorios</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Ofertas</a>
                        </li>                      
                        <CartWidget cant={"5"}/>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default NavBar