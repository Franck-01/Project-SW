import CartWidget from "./CartWidget";
import Button from 'react-bootstrap/Button'
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    
    return (
        <nav>
            <div className="aspecto">
            <CartWidget />
            <Link to="/index">
                <h2 className="marcador">Inicio</h2>
            </Link>
            
            <h2 className="marcador">Facciones</h2>
            <ul>
                <li className="Rep"><NavLink to="/categorias/:id"><Button variant="primary">Republica</Button></NavLink></li>
                <li className="CSI"><NavLink to="/categorias/:id"><Button variant="primary">Separatistas</Button></NavLink></li>
                <li className="Imp"><NavLink to="/categorias"><Button variant="primary">Imperio</Button></NavLink></li>
                <li className="Reb"><NavLink to="/categorias"><Button variant="primary">Rebelion</Button></NavLink></li>
                <li><NavLink to="/item/:id"><Button variant="primary">Listado</Button></NavLink></li>
            </ul>
            </div>  
        </nav>
    );
}
export default NavBar;