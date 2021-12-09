import CartWidget from "./CartWidget";
import Button from 'react-bootstrap/Button'

const NavBar = () => {
    
    return (
        <nav>
            <div className="aspecto">
            <CartWidget />
            <h2 className="marcador">Inicio</h2>
            <h2 className="marcador">Facciones</h2>
            <ul>
                <li><Button variant="primary">Republica</Button></li>
                <li><Button variant="primary">Separatistas</Button></li>
                <li><Button variant="primary">Imperio</Button></li>
                <li><Button variant="primary">Rebelion</Button></li>
            </ul>
            </div>  
        </nav>
    );
}
export default NavBar;