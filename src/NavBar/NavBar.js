import CartWidget from "../Cart/CartWidget";
import Button from 'react-bootstrap/Button'
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {

    const republic = "Republica Galactica"
    const csi = "Alianza Separatista"
    const empire = "Imperio Galactico"
    const rebels = "Alianza Rebelde"
    const id = ""

    
    return (
        <nav>
            <div className="aspecto">
            <CartWidget />
            <Link to="/">
                <h2 className="marcador">Inicio</h2>
            </Link>
                <h2 className="Rep"><NavLink to={`/categorias/${republic}`}><Button variant="primary">{republic}</Button></NavLink></h2>
                <h2 className="CSI"><NavLink to={`/categorias/${csi}`}><Button variant="primary">{csi}</Button></NavLink></h2>
                <h2 className="Imp"><NavLink to={`/categorias/${empire}`}><Button variant="primary">{empire}</Button></NavLink></h2>
                <h2 className="Reb"><NavLink to={`/categorias/${rebels}`}><Button variant="primary">{rebels}</Button></NavLink></h2>
            <NavLink to={`/item/${id}`}>
                <h2 className="marcador">Listado</h2>
            </NavLink>
            </div>  
        </nav>
    );
}
export default NavBar;