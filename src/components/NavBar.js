import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav>
            <div className="aspecto">
            <CartWidget />
            <h2 className="marcador">Inicio</h2>
            <h2 className="marcador">Facciones</h2>
            <ul>
                <li>Republica</li>
                <li>Separatistas</li>
                <li>Imperio</li>
                <li>Rebelion</li>
            </ul>
            </div>   
        </nav>
    );
}
export default NavBar;