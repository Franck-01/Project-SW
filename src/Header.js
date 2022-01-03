import NavBar from "./components/NavBar"
import { Link } from "react-router-dom";

const Header = () => {

    const saludo = "Bienvenido a la Armada"

    return (
        <>
        <header>
            <div className="imagen">
                <Link to="/">
                    <img src="https://raw.githubusercontent.com/Franck-01/Project-SW/master/public/images/SWTFA.png"/>
                </Link>
                <h2 className="white">Escoje tus naves, inspecciona el arsenal y crea la flota mas poderosa que la galaxia haya visto</h2>
                <h3>{saludo}</h3>
            </div>
        </header>
        <NavBar/>
        </>
    );
}
export default Header;