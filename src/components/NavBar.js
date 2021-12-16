import CartWidget from "./CartWidget";
import Button from 'react-bootstrap/Button'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    
    return (
        <nav>
            <div className="aspecto">
            <CartWidget />
            <h2 className="marcador">Inicio</h2>
            <h2 className="marcador">Facciones</h2>
            <ul>
                <li className="Rep"><NavLink to="/facciones/Republic"><Button variant="primary">Republica</Button></NavLink></li>
                <li className="CSI"><NavLink to="/facciones/CSI"><Button variant="primary">Separatistas</Button></NavLink></li>
                <li className="Imp"><NavLink to="/facciones/Empire"><Button variant="primary">Imperio</Button></NavLink></li>
                <li className="Reb"><NavLink to="/facciones/Rebels"><Button variant="primary">Rebelion</Button></NavLink></li>
            </ul>
            </div>  
        </nav>
    );
}
export default NavBar;