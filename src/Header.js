import NavBar from "./components/NavBar"

const Header = () => {

    return (
        <>
        <header>
            <div className="imagen">
                <img src="images/SWTFA.png"/>
                <h2 className="white">Escoje tus naves, inspecciona el arsenal y crea la flota mas poderosa que la galaxia haya visto</h2>
            </div>
        </header>
        <NavBar/>
        </>
    );
}
export default Header;