import CartWidget from "./CartWidget";
import Button from 'react-bootstrap/Button'
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    
    return (
        <nav>
            <div className="aspecto">
            <CartWidget />
            <Link to="/">
                <h2 className="marcador">Inicio</h2>
            </Link>
            
            <ul>
                <li className="Rep"><NavLink to="/categorias"><Button variant="primary">Republica</Button></NavLink></li>
                <li className="CSI"><NavLink to="/categorias"><Button variant="primary">Separatistas</Button></NavLink></li>
                <li className="Imp"><NavLink to="/categorias"><Button variant="primary">Imperio</Button></NavLink></li>
                <li className="Reb"><NavLink to="/categorias"><Button variant="primary">Rebelion</Button></NavLink></li>
            </ul>
            <Link to="/item">
                <h2 className="marcador">Listado</h2>
            </Link>
            </div>  
        </nav>
    );
}
export default NavBar;